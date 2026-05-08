<?php
/**
 * Sunways Tourism API Endpoints
 * Integration with Raíz Durango eco-cultural routes
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

// Database configuration
$dbConfig = [
    'host' => 'localhost',
    'dbname' => 'sunways_tourism',
    'username' => 'root',
    'password' => ''
];

// API Router
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$endpoint = basename($requestUri);

switch ($endpoint) {
    case 'routes':
        handleRoutes($requestMethod);
        break;
    case 'payments':
        handlePayments($requestMethod);
        break;
    case 'carbon':
        handleCarbon($requestMethod);
        break;
    case 'narratives':
        handleNarratives($requestMethod);
        break;
    case 'users':
        handleUsers($requestMethod);
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
}

// ========== ROUTES ENDPOINTS ==========
function handleRoutes($method) {
    if ($method === 'GET') {
        // Get all routes or specific route
        $routeId = $_GET['id'] ?? null;
        
        if ($routeId) {
            // Get specific route with narrative points
            $route = [
                'id' => $routeId,
                'name' => 'Coyotes 古道',
                'description' => '12公里文化路线，包含6个叙事点',
                'distance' => 12,
                'duration' => '4-5小时',
                'difficulty' => '中等',
                'price' => 200,
                'carbonOffset' => 15,
                'narrativePoints' => [
                    [
                        'id' => 1,
                        'title' => 'Antigua Hacienda',
                        'lat' => 23.7420,
                        'lng' => -104.4180,
                        'elderName' => 'Don José',
                        'audioUrl' => '/audio/jose_hacienda.mp3'
                    ],
                    [
                        'id' => 2,
                        'title' => 'El Ahuehuete',
                        'lat' => 23.7445,
                        'lng' => -104.4155,
                        'elderName' => 'María',
                        'audioUrl' => '/audio/maria_ahuehuete.mp3'
                    ],
                    [
                        'id' => 3,
                        'title' => 'Puente de Piedra',
                        'lat' => 23.7460,
                        'lng' => -104.4130,
                        'elderName' => 'Carlos',
                        'audioUrl' => '/audio/carlos_puente.mp3'
                    ],
                    [
                        'id' => 4,
                        'title' => 'Cueva de los Murciélagos',
                        'lat' => 23.7480,
                        'lng' => -104.4105,
                        'elderName' => 'Elena',
                        'audioUrl' => '/audio/elena_cueva.mp3'
                    ],
                    [
                        'id' => 5,
                        'title' => 'Mirador del Águila',
                        'lat' => 23.7500,
                        'lng' => -104.4080,
                        'elderName' => 'Pedro',
                        'audioUrl' => '/audio/pedro_mirador.mp3'
                    ],
                    [
                        'id' => 6,
                        'title' => 'Manantial Escondido',
                        'lat' => 23.7520,
                        'lng' => -104.4055,
                        'elderName' => 'Ana',
                        'audioUrl' => '/audio/ana_manantial.mp3'
                    ]
                ],
                'segments' => [
                    ['name' => '古桥段', 'price' => 60],
                    ['name' => '老树林段', 'price' => 80],
                    ['name' => '驿站段', 'price' => 60]
                ]
            ];
            echo json_encode($route);
        } else {
            // Get all routes
            $routes = [
                [
                    'id' => 'coyotes',
                    'name' => 'Coyotes 古道',
                    'description' => '12公里文化路线，6个叙事点',
                    'price' => 200,
                    'image' => '/images/coyotes.jpg'
                ],
                [
                    'id' => 'otinapa',
                    'name' => 'Ruta Otinapa',
                    'description' => '8公里自然路线，观鸟胜地',
                    'price' => 150,
                    'image' => '/images/otinapa.jpg'
                ],
                [
                    'id' => 'catedral',
                    'name' => 'Cañón de Catedral',
                    'description' => '15公里峡谷探险',
                    'price' => 280,
                    'image' => '/images/catedral.jpg'
                ]
            ];
            echo json_encode($routes);
        }
    }
}

// ========== PAYMENTS ENDPOINTS ==========
function handlePayments($method) {
    if ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $action = $data['action'] ?? '';
        
        switch ($action) {
            case 'traditional':
                // Process traditional payment
                $result = [
                    'success' => true,
                    'paymentId' => 'PAY_' . uniqid(),
                    'method' => 'traditional',
                    'amount' => $data['amount'],
                    'status' => 'completed',
                    'timestamp' => date('Y-m-d H:i:s')
                ];
                echo json_encode($result);
                break;
                
            case 'nft-mint':
                // Mint NFT route pass
                $nftId = 'NFT_' . uniqid();
                $result = [
                    'success' => true,
                    'nftId' => $nftId,
                    'contractAddress' => '0x1234...5678',
                    'tokenId' => rand(1000, 9999),
                    'metadata' => $data['metadata'],
                    'status' => 'minted'
                ];
                echo json_encode($result);
                break;
                
            case 'distribute':
                // Revenue distribution
                $distribution = $data['distribution'];
                $result = [
                    'success' => true,
                    'nftId' => $data['nftId'],
                    'distribution' => [
                        'hosts' => ['amount' => $distribution['hosts'], 'percentage' => 60],
                        'cultureFund' => ['amount' => $distribution['cultureFund'], 'percentage' => 20],
                        'ecology' => ['amount' => $distribution['ecology'], 'percentage' => 10],
                        'platform' => ['amount' => $distribution['platform'], 'percentage' => 10]
                    ],
                    'status' => 'distributed'
                ];
                echo json_encode($result);
                break;
                
            default:
                http_response_code(400);
                echo json_encode(['error' => 'Invalid payment action']);
        }
    }
}

// ========== CARBON TRACKING ENDPOINTS ==========
function handleCarbon($method) {
    if ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Save carbon footprint data
        $record = [
            'id' => 'CARBON_' . uniqid(),
            'user' => $data['user'],
            'routeId' => $data['routeId'],
            'transportMode' => $data['transportMode'],
            'distance' => $data['distance'],
            'co2Saved' => $data['co2Saved'],
            'timestamp' => $data['timestamp'],
            'virtualTreeGrowth' => $data['co2Saved'] * 0.1
        ];
        
        // Save to database (simulated)
        // TODO: Implement actual database insertion
        
        echo json_encode([
            'success' => true,
            'record' => $record,
            'totalSaved' => 1250.5, // Cumulative for user
            'treeHeight' => 2.3 // Virtual tree growth in meters
        ]);
    } elseif ($method === 'GET') {
        // Get user's carbon stats
        $user = $_GET['user'] ?? '';
        
        echo json_encode([
            'user' => $user,
            'totalTrips' => 12,
            'totalDistance' => 145,
            'totalCo2Saved' => 1250.5,
            'virtualTreeHeight' => 2.3,
            'ranking' => 'Explorador Verde',
            'nextRanking' => 'Guardián del Territorio',
            'progress' => 65
        ]);
    }
}

// ========== NARRATIVES ENDPOINTS ==========
function handleNarratives($method) {
    if ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Save new narrative from community
        $narrative = [
            'id' => 'NAR_' . uniqid(),
            'routeId' => $data['routeId'],
            'elderName' => $data['elderName'],
            'title' => $data['title'],
            'description' => $data['description'],
            'lat' => $data['lat'],
            'lng' => $data['lng'],
            'audioUrl' => $data['audioUrl'] ?? null,
            'language' => $data['language'] ?? 'es',
            'status' => 'pending', // pending, approved, published
            'submittedAt' => date('Y-m-d H:i:s')
        ];
        
        // TODO: Save to database
        // TODO: Process audio with Whisper.cpp
        // TODO: Generate translations
        
        echo json_encode([
            'success' => true,
            'narrative' => $narrative,
            'message' => 'Narrative submitted for review'
        ]);
    } elseif ($method === 'GET') {
        // Get narratives for a route
        $routeId = $_GET['routeId'] ?? '';
        
        $narratives = [
            [
                'id' => 'NAR_001',
                'title' => 'La leyenda del Coyote',
                'elderName' => 'Don José',
                'language' => 'Tepehuano',
                'duration' => '3:45',
                'status' => 'published'
            ],
            [
                'id' => 'NAR_002',
                'title' => 'El Árbol Sagrado',
                'elderName' => 'María',
                'language' => 'Spanish',
                'duration' => '2:30',
                'status' => 'published'
            ]
        ];
        
        echo json_encode($narratives);
    }
}

// ========== USERS ENDPOINTS ==========
function handleUsers($method) {
    if ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $action = $data['action'] ?? '';
        
        switch ($action) {
            case 'register':
                $user = [
                    'id' => 'USER_' . uniqid(),
                    'fullName' => $data['fullName'],
                    'email' => $data['email'],
                    'country' => $data['country'],
                    'preferredLanguage' => $data['preferredLanguage'],
                    'visitorType' => $data['visitorType'],
                    'createdAt' => date('Y-m-d H:i:s')
                ];
                
                echo json_encode([
                    'success' => true,
                    'user' => $user,
                    'token' => 'JWT_' . base64_encode(uniqid())
                ]);
                break;
                
            case 'login':
                echo json_encode([
                    'success' => true,
                    'user' => [
                        'email' => $data['email'],
                        'name' => 'Dani Gleichger'
                    ],
                    'token' => 'JWT_' . base64_encode(uniqid())
                ]);
                break;
                
            default:
                http_response_code(400);
                echo json_encode(['error' => 'Invalid user action']);
        }
    }
}
