# Sunways Tourism × Raíz Durango 集成方案

## 概述
将Raíz Durango生态文化路线平台的创新功能整合到Sunways旅游系统中，包括：
- Web3/NFT支付
- 碳足迹追踪
- 社区叙事功能
- 路线数字孪生

## 文件结构

```
sunways-integration/
├── payment-module.js          # 支付模块（Web3/传统支付）
├── route-map-component.js     # 路线地图组件
├── api-endpoints.php          # 后端API接口
├── carbon-tracker.js          # 碳足迹追踪
├── narrative-system.js        # 叙事系统
└── README.md                  # 本文档
```

## 快速开始

### 1. 引入必要文件

```html
<!-- 在您的 payments/methods.php 页面添加 -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://cdn.jsdelivr.net/npm/web3@4.0.3/dist/web3.min.js"></script>

<!-- Sunways集成模块 -->
<script src="/sunways-integration/payment-module.js"></script>
<script src="/sunways-integration/route-map-component.js"></script>
```

### 2. 初始化支付模块

```javascript
// 从您的注册页面URL获取用户数据
const urlParams = new URLSearchParams(window.location.search);
const userData = {
  fullName: urlParams.get('fullName'),
  email: urlParams.get('email'),
  country: urlParams.get('country'),
  preferredLanguage: urlParams.get('preferredLanguage'),
  visitorType: urlParams.get('visitorType')
};

// 初始化支付模块
const paymentModule = new SunwaysPaymentModule({
  apiEndpoint: 'http://localhost/sunways/api',
  web3Provider: 'https://polygon-mumbai.g.alchemy.com',
  contractAddress: '0xYourContractAddress'
});

await paymentModule.initSession(userData);
```

### 3. 选择路线并支付

```javascript
// 选择Coyotes古道
const routeSelection = paymentModule.selectRoute({
  id: 'coyotes',
  name: 'Coyotes 古道',
  price: 200,
  segments: [
    { name: '古桥段', price: 60 },
    { name: '老树林段', price: 80 },
    { name: '驿站段', price: 60 }
  ],
  carbonOffset: 15
});

// 显示价格明细
console.log(routeSelection.breakdown);
// {
//   basePrice: 200,
//   carbonOffset: 15,
//   total: 215
// }

// 处理支付
const paymentResult = await paymentModule.processPayment('nft', {
  // NFT支付详情
});
```

### 4. 显示路线地图

```javascript
// 初始化路线地图
const routeMap = new RouteMapComponent('map-container', {
  center: [23.7400, -104.4200],
  zoom: 13,
  routeColor: '#2F5A3C'
});

routeMap.init();

// 从API获取路线数据
const response = await fetch('http://localhost/sunways/api/routes?id=coyotes');
const routeData = await response.json();

// 设置叙事点
routeMap.setNarrativePoints(routeData.narrativePoints);

// 开始模拟行走
routeMap.simulateWalk(
  (progress) => {
    console.log(`进度: ${progress.percentage}%`);
    // 更新UI
  },
  async (point, progress) => {
    console.log(`触发叙事: ${point.title}`);
    // 播放音频或显示故事
    routeMap.playAudio(point.id);
    
    // 追踪碳足迹
    await paymentModule.trackCarbonFootprint('walking', progress.distance);
  }
);
```

## API端点

### 路线 API
```
GET /api/routes              # 获取所有路线
GET /api/routes?id=coyotes   # 获取特定路线详情
```

### 支付 API
```
POST /api/payments
  - action: "traditional" | "nft-mint" | "distribute"
  
POST /api/payments/traditional
  {
    "user": {...},
    "route": {...},
    "amount": 215
  }
  
POST /api/payments/nft-mint
  {
    "user": {...},
    "route": {...},
    "metadata": {...}
  }
```

### 碳足迹 API
```
GET /api/carbon?user=email    # 获取用户碳统计
POST /api/carbon              # 记录碳足迹
  {
    "user": "email",
    "routeId": "coyotes",
    "transportMode": "walking",
    "distance": 12,
    "co2Saved": 2.52
  }
```

### 叙事 API
```
GET /api/narratives?routeId=coyotes   # 获取路线叙事
POST /api/narratives                   # 提交新叙事
  {
    "routeId": "coyotes",
    "elderName": "Don José",
    "title": "La leyenda del Coyote",
    "lat": 23.7420,
    "lng": -104.4180,
    "audioUrl": "/audio/jose.mp3"
  }
```

## 收入自动分配

NFT销售收入的自动分配：
- **60%** - 沿途家庭接待者
- **20%** - 路线文化基金
- **10%** - 生态修复
- **10%** - 平台维护

```javascript
const distribution = await paymentModule.distributeRevenue(nftId);
console.log(distribution);
// {
//   hosts: { amount: 129, percentage: 60 },
//   cultureFund: { amount: 43, percentage: 20 },
//   ecology: { amount: 21.5, percentage: 10 },
//   platform: { amount: 21.5, percentage: 10 }
// }
```

## 碳足迹计算

不同交通方式的碳排放对比：

| 交通方式 | CO₂/km | 12公里排放 | 较驾车节省 |
|---------|--------|-----------|-----------|
| 步行 | 0 | 0 kg | 3.96 kg |
| 自行车 | 0 | 0 kg | 3.96 kg |
| 电动车 | 0.12 | 1.44 kg | 2.52 kg |
| 公交 | 0.42 | 5.04 kg | -1.08 kg |
| 驾车 | 0.33 | 3.96 kg | 0 kg |

## 虚拟树成长系统

用户的每次低碳出行都会让虚拟树成长：

```javascript
const carbonResult = await paymentModule.trackCarbonFootprint('walking', 12);
console.log(carbonResult);
// {
//   co2Saved: 2.52,
//   virtualTreeGrowth: 0.252  // 树高增加（米）
// }
```

## 完整集成示例

查看 `integration-example.html` 了解完整的页面集成。

## 数据库结构

```sql
-- 用户表
CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
  full_name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  country VARCHAR(50),
  preferred_language VARCHAR(10),
  visitor_type ENUM('tourist', 'merchant'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 路线表
CREATE TABLE routes (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  distance DECIMAL(5,2),
  price DECIMAL(10,2),
  carbon_offset DECIMAL(10,2)
);

-- 支付记录表
CREATE TABLE payments (
  id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50),
  route_id VARCHAR(50),
  amount DECIMAL(10,2),
  method ENUM('traditional', 'crypto', 'nft'),
  status VARCHAR(20),
  nft_id VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 碳足迹表
CREATE TABLE carbon_records (
  id VARCHAR(50) PRIMARY KEY,
  user_email VARCHAR(100),
  route_id VARCHAR(50),
  transport_mode VARCHAR(20),
  distance DECIMAL(5,2),
  co2_saved DECIMAL(5,2),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 叙事表
CREATE TABLE narratives (
  id VARCHAR(50) PRIMARY KEY,
  route_id VARCHAR(50),
  elder_name VARCHAR(100),
  title VARCHAR(200),
  lat DECIMAL(10,8),
  lng DECIMAL(11,8),
  audio_url VARCHAR(255),
  status ENUM('pending', 'approved', 'published'),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 联系我们

如有问题，请联系开发团队。
