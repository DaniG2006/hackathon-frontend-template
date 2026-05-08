<?php
/**
 * Sunways Payment Methods Page Integration Example
 * 
 * 将此代码集成到: C:\xampp\htdocs\sunways\tourist\payments\methods.php
 */

// 获取URL参数中的用户信息
$fullName = $_GET['fullName'] ?? '';
$email = $_GET['email'] ?? '';
$country = $_GET['country'] ?? '';
$preferredLanguage = $_GET['preferredLanguage'] ?? 'es';
$visitorType = $_GET['visitorType'] ?? 'tourist';
?\>

<!DOCTYPE html>
<html lang="<?php echo $preferredLanguage; ?\>">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunways - El Camino de los Coyotes</title>
  
  <!-- 原有Sunways样式 -->
  <link rel="stylesheet" href="../../assets/css/style.css">
  
  <!-- Leaflet 地图库 -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  
  <!-- Web3.js -->
  <script src="https://cdn.jsdelivr.net/npm/web3@4.0.3/dist/web3.min.js"></script>
  
  <!-- Raíz Durango 集成模块 -->
  <script src="../../assets/js/payment-module.js"></script>
  <script src="../../assets/js/route-map-component.js"></script>
  
  <style>
    /* 路线地图样式 */
    #route-map {
      height: 400px;
      border-radius: 12px;
      margin: 20px 0;
      border: 2px solid #ddd;
    }
    
    /* 碳足迹仪表板 */
    .carbon-dashboard {
      background: linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%);
      border: 1px solid #86efac;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .carbon-meter {
      height: 12px;
      background: #e5e7eb;
      border-radius: 6px;
      overflow: hidden;
      margin: 10px 0;
    }
    
    .carbon-fill {
      height: 100%;
      background: linear-gradient(90deg, #22c55e 0%, #16a34a 100%);
      border-radius: 6px;
      transition: width 0.5s ease;
      width: 0%;
    }
    
    /* NFT支付选项 */
    .payment-options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin: 20px 0;
    }
    
    .payment-option {
      border: 2px solid #ddd;
      border-radius: 10px;
      padding: 15px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .payment-option:hover,
    .payment-option.selected {
      border-color: #2F5A3C;
      background: #f0fdf4;
    }
    
    .payment-option .icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    /* 收入分配可视化 */
    .revenue-distribution {
      background: #f9fafb;
      border-radius: 10px;
      padding: 15px;
      margin: 15px 0;
    }
    
    .dist-bar {
      display: flex;
      height: 30px;
      border-radius: 8px;
      overflow: hidden;
      margin: 10px 0;
    }
    
    .dist-segment {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
    }
    
    .dist-segment.hosts { background: #22c55e; width: 60%; }
    .dist-segment.culture { background: #3b82f6; width: 20%; }
    .dist-segment.ecology { background: #10b981; width: 10%; }
    .dist-segment.platform { background: #6b7280; width: 10%; }
    
    /* 响应式 */
    @media (max-width: 768px) {
      .payment-options {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Sunways 导航 -->
  <nav class="sunways-nav">
    <div class="logo">Sunways</div>
    <div class="nav-links">
      <a href="../dashboard.php">Dashboard</a>
      <a href="../routes/index.php">Routes</a>
      <a href="methods.php" class="active">Payment</a>
    </div>
    <div class="user-info">
      <span><?php echo htmlspecialchars($fullName); ?\></span>
    </div>
  </nav>

  <div class="container">
    <h1>El Camino de los Coyotes</h1>
    <p class="subtitle">12公里文化路线 · 6个叙事点 · 零碳足迹旅行</p>

    <!-- 路线地图 -->
    <section class="route-section">
      <h2>🗺️ 路线预览</h2>
      <div id="route-map"></div>
      
      <div class="route-controls">
        <button id="btn-simulate" class="btn btn-primary">
          ▶ 模拟行走体验
        </button>
        <button id="btn-reset" class="btn btn-secondary" disabled>
          ↺ 重置
        </button>
        
        <span id="sim-status">准备就绪</span>
      </div>
    </section>

    <!-- 碳足迹追踪 -->
    <section class="carbon-section">
      <h2>🌱 碳足迹追踪</h2>
      
      <div class="carbon-dashboard">
        <div class="carbon-stats">
          <div class="stat">
            <span class="label">已走距离</span>
            <strong id="dist-display">0 km</strong>
          </div>
          
          <div class="stat">
            <span class="label">CO₂排放</span>
            <strong id="co2-display">0 kg</strong>
          </div>
          
          <div class="stat">
            <span class="label">较驾车节省</span>
            <strong id="saved-display" style="color: #16a34a;">0 kg</strong>
          </div>
        </div>
        
        <div class="carbon-meter">
          <div id="carbon-fill" class="carbon-fill"></div>
        </div>
        
        <p id="carbon-message">选择交通方式开始计算碳足迹</p>
      </div>
    </section>

    <!-- 支付选项 -->
    <section class="payment-section">
      <h2>💳 选择支付方式</h2>
      
      <div class="payment-options">
        <div class="payment-option" data-method="traditional">
          <div class="icon">💳</div>
          <h3>信用卡/借记卡</h3>
          <p>传统支付方式</p>
        </div>
        
        <div class="payment-option" data-method="crypto">
          <div class="icon">₿</div>
          <h3>加密货币</h3>
          <p>Polygon Mumbai</p>
        </div>
        
        <div class="payment-option selected" data-method="nft">
          <div class="icon">🎫</div>
          <h3>路线NFT通票</h3>
          <p>推荐 · 区块链认证</p>
        </div>
      </div>

      <!-- 价格明细 -->
      <div class="price-breakdown">
        <h3>价格明细</h3>
        <div class="price-row">
          <span>Coyotes 古道通票</span>
          <strong>¥200</strong>
        </div>
        
        <div class="price-row">
          <span>碳抵消（可选）</span>
          <strong>¥15</strong>
        </div>
        
        <div class="price-row total">
          <span>总计</span>
          <strong id="total-price">¥215</strong>
        </div>
      </div>

      <!-- 收入分配 -->
      <div class="revenue-distribution">
        <h4>💰 收入自动分配（智能合约）</h4>
        
        <div class="dist-bar">
          <div class="dist-segment hosts">60%</div>
          <div class="dist-segment culture">20%</div>
          <div class="dist-segment ecology">10%</div>
          <div class="dist-segment platform">10%</div>
        </div>
        
        <div class="dist-legend">
          <span>🟢 沿途家庭 60%</span>
          <span>🔵 文化基金 20%</span>
          <span>🟢 生态修复 10%</span>
          <span>⚪ 平台维护 10%</span>
        </div>
      </div>

      <!-- 支付按钮 -->
      <button id="btn-pay" class="btn btn-primary btn-large">
        🛒 确认支付 ¥215
      </button>
      
      <div id="payment-status"></div>
    </section>
  </div>

  <script>
    // ========== 初始化 ==========
    const userData = {
      fullName: '<?php echo addslashes($fullName); ?\>',
      email: '<?php echo addslashes($email); ?\>',
      country: '<?php echo addslashes($country); ?\>',
      preferredLanguage: '<?php echo $preferredLanguage; ?\>',
      visitorType: '<?php echo $visitorType; ?\>'
    };

    // 初始化支付模块
    const paymentModule = new SunwaysPaymentModule({
      apiEndpoint: 'http://localhost/sunways/api',
      web3Provider: 'https://polygon-mumbai.g.alchemy.com'
    });

    // 初始化路线地图
    const routeMap = new RouteMapComponent('route-map', {
      center: [23.7400, -104.4200],
      zoom: 13,
      routeColor: '#2F5A3C'
    });

    // ========== 页面加载完成后执行 ==========
    document.addEventListener('DOMContentLoaded', async () => {
      // 初始化会话
      await paymentModule.initSession(userData);
      
      // 初始化地图
      routeMap.init();
      
      // 加载路线数据
      try {
        const response = await fetch('http://localhost/sunways/api/routes?id=coyotes');
        const routeData = await response.json();
        routeMap.setNarrativePoints(routeData.narrativePoints);
        
        // 选择路线
        paymentModule.selectRoute({
          id: 'coyotes',
          name: routeData.name,
          price: routeData.price,
          segments: routeData.segments,
          carbonOffset: 15
        });
      } catch (error) {
        console.error('加载路线失败:', error);
      }

      // 绑定支付选项点击
      document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', () => {
          document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
          option.classList.add('selected');
        });
      });

      // 绑定模拟行走按钮
      document.getElementById('btn-simulate').addEventListener('click', startSimulation);
      document.getElementById('btn-reset').addEventListener('click', resetSimulation);
      
      // 绑定支付按钮
      document.getElementById('btn-pay').addEventListener('click', processPayment);
    });

    // ========== 模拟行走 ==========
    async function startSimulation() {
      const btnSim = document.getElementById('btn-simulate');
      const btnReset = document.getElementById('btn-reset');
      const status = document.getElementById('sim-status');
      
      btnSim.disabled = true;
      btnReset.disabled = false;
      
      await routeMap.simulateWalk(
        (progress) => {
          // 更新进度
          status.textContent = `已走 ${progress.distance.toFixed(1)} km / ${progress.totalDistance} km`;
          
          // 更新碳足迹
          updateCarbonDisplay(progress.distance);
        },
        async (point, progress) => {
          // 触发叙事
          status.textContent = `📢 到达: ${point.title}`;
          routeMap.playAudio(point.id);
          
          // 追踪碳足迹
          await paymentModule.trackCarbonFootprint('walking', progress.distance);
        }
      );
      
      status.textContent = '🎉 完成！你已体验完整路线';
    }

    function resetSimulation() {
      document.getElementById('btn-simulate').disabled = false;
      document.getElementById('btn-reset').disabled = true;
      document.getElementById('sim-status').textContent = '准备就绪';
      
      // 重置地图
      routeMap.map.setView([23.7400, -104.4200], 13);
      
      // 重置碳足迹显示
      updateCarbonDisplay(0);
    }

    // ========== 碳足迹显示更新 ==========
    function updateCarbonDisplay(distance) {
      const carbon = routeMap.calculateCarbonFootprint('walking', distance);
      
      document.getElementById('dist-display').textContent = distance.toFixed(1) + ' km';
      document.getElementById('co2-display').textContent = carbon.emitted.toFixed(2) + ' kg';
      document.getElementById('saved-display').textContent = carbon.saved.toFixed(2) + ' kg';
      
      const percentage = Math.min((distance / 12) * 100, 100);
      document.getElementById('carbon-fill').style.width = percentage + '%';
      
      document.getElementById('carbon-message').textContent = 
        `步行 ${distance.toFixed(1)} km，较驾车节省 ${carbon.saved.toFixed(2)} kg CO₂`;
    }

    // ========== 处理支付 ==========
    async function processPayment() {
      const btnPay = document.getElementById('btn-pay');
      const statusDiv = document.getElementById('payment-status');
      
      const selectedMethod = document.querySelector('.payment-option.selected').dataset.method;
      
      btnPay.disabled = true;
      btnPay.textContent = '处理中...';
      statusDiv.textContent = '正在处理支付...';
      
      try {
        const result = await paymentModule.processPayment(selectedMethod, {
          // 支付详情
        });
        
        statusDiv.innerHTML = `
          <div class="success-message">
            ✅ 支付成功！
            ${result.nftId ? `<br>NFT ID: ${result.nftId}` : ''}
            <br><a href="../tickets/index.php">查看我的通票</a>
          </div>
        `;
        
        btnPay.textContent = '🎫 支付完成';
      } catch (error) {
        statusDiv.textContent = '支付失败: ' + error.message;
        btnPay.disabled = false;
        btnPay.textContent = '🛒 确认支付';
      }
    }
  </script>

</body>
</html>
