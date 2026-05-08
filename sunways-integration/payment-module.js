/**
 * Sunways Tourism Payment Module
 * Integrates Web3/NFT payments with traditional payment methods
 */

class SunwaysPaymentModule {
  constructor(config) {
    this.config = {
      apiEndpoint: config.apiEndpoint || 'http://localhost/sunways/api',
      web3Provider: config.web3Provider || 'https://polygon-mumbai.g.alchemy.com',
      contractAddress: config.contractAddress || '',
      ...config
    };
    this.userSession = null;
    this.selectedRoute = null;
    this.paymentMethod = 'traditional'; // 'traditional' | 'crypto' | 'nft'
  }

  // Initialize payment session
  async initSession(userData) {
    this.userSession = {
      fullName: userData.fullName,
      email: userData.email,
      userType: userData.visitorType, // 'tourist' | 'merchant'
      preferredLanguage: userData.preferredLanguage,
      country: userData.country
    };
    
    console.log('[Sunways] Payment session initialized:', this.userSession);
    return this.userSession;
  }

  // Select route and calculate price
  selectRoute(routeData) {
    this.selectedRoute = {
      id: routeData.id,
      name: routeData.name,
      basePrice: routeData.price,
      segments: routeData.segments || [],
      carbonOffset: routeData.carbonOffset || 0
    };
    
    // Calculate total with optional carbon offset
    const total = this.calculateTotal();
    
    return {
      route: this.selectedRoute,
      breakdown: {
        basePrice: this.selectedRoute.basePrice,
        carbonOffset: this.selectedRoute.carbonOffset,
        total: total
      }
    };
  }

  calculateTotal() {
    if (!this.selectedRoute) return 0;
    return this.selectedRoute.basePrice + this.selectedRoute.carbonOffset;
  }

  // Process payment based on method
  async processPayment(paymentMethod, paymentDetails) {
    this.paymentMethod = paymentMethod;
    
    switch(paymentMethod) {
      case 'traditional':
        return await this.processTraditionalPayment(paymentDetails);
      case 'crypto':
        return await this.processCryptoPayment(paymentDetails);
      case 'nft':
        return await this.processNFTPayment(paymentDetails);
      default:
        throw new Error('Unsupported payment method');
    }
  }

  // Traditional payment (credit card, etc.)
  async processTraditionalPayment(details) {
    const response = await fetch(`${this.config.apiEndpoint}/payments/traditional`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: this.userSession,
        route: this.selectedRoute,
        paymentDetails: details,
        amount: this.calculateTotal()
      })
    });
    
    return await response.json();
  }

  // Crypto payment (Polygon/Mumbai)
  async processCryptoPayment(details) {
    // Web3 integration
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        
        // Smart contract interaction
        const contract = new web3.eth.Contract(
          this.getContractABI(),
          this.config.contractAddress
        );
        
        const accounts = await web3.eth.getAccounts();
        const tx = await contract.methods
          .purchaseRoute(this.selectedRoute.id)
          .send({ 
            from: accounts[0],
            value: web3.utils.toWei(this.calculateTotal().toString(), 'ether')
          });
        
        return {
          success: true,
          transactionHash: tx.transactionHash,
          method: 'crypto'
        };
      } catch (error) {
        console.error('[Sunways] Crypto payment error:', error);
        throw error;
      }
    } else {
      throw new Error('Web3 wallet not detected');
    }
  }

  // NFT Route Pass payment
  async processNFTPayment(details) {
    // Mint NFT route pass
    const response = await fetch(`${this.config.apiEndpoint}/payments/nft-mint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: this.userSession,
        route: this.selectedRoute,
        metadata: {
          routeName: this.selectedRoute.name,
          segments: this.selectedRoute.segments,
          issueDate: new Date().toISOString(),
          carbonOffset: this.selectedRoute.carbonOffset
        }
      })
    });
    
    const result = await response.json();
    
    // Revenue distribution
    await this.distributeRevenue(result.nftId);
    
    return result;
  }

  // Revenue distribution: 60% hosts, 20% culture fund, 10% ecology, 10% platform
  async distributeRevenue(nftId) {
    const total = this.calculateTotal();
    const distribution = {
      hosts: total * 0.60,
      cultureFund: total * 0.20,
      ecology: total * 0.10,
      platform: total * 0.10
    };
    
    await fetch(`${this.config.apiEndpoint}/payments/distribute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nftId,
        distribution,
        routeId: this.selectedRoute.id
      })
    });
    
    return distribution;
  }

  // Carbon footprint tracking
  async trackCarbonFootprint(transportMode, distance) {
    const emissions = {
      walking: 0,
      bicycle: 0,
      electric: 0.12,
      bus: 0.42,
      car: 1.0
    };
    
    const co2Saved = distance * (emissions.car - (emissions[transportMode] || 0));
    
    await fetch(`${this.config.apiEndpoint}/carbon/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: this.userSession.email,
        routeId: this.selectedRoute?.id,
        transportMode,
        distance,
        co2Saved,
        timestamp: new Date().toISOString()
      })
    });
    
    return { co2Saved, virtualTreeGrowth: co2Saved * 0.1 };
  }

  getContractABI() {
    // Simplified ABI for route purchase
    return [
      {
        "inputs": [{"internalType": "uint256", "name": "routeId", "type": "uint256"}],
        "name": "purchaseRoute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ];
  }
}

// Export for use in Sunways platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SunwaysPaymentModule;
}
