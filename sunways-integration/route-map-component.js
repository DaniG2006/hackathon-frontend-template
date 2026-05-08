/**
 * Route Map Component
 * Reusable Leaflet-based route map with narrative points
 */

class RouteMapComponent {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = {
      center: options.center || [23.7400, -104.4200],
      zoom: options.zoom || 13,
      routeColor: options.routeColor || '#B85C3A',
      narrativeIcon: options.narrativeIcon || '📍',
      ...options
    };
    this.map = null;
    this.markers = [];
    this.routeLine = null;
    this.currentPosition = 0;
    this.narrativePoints = [];
  }

  // Initialize the map
  init() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`[RouteMap] Container #${this.containerId} not found`);
      return null;
    }

    // Initialize Leaflet map
    this.map = L.map(this.containerId).setView(
      this.options.center,
      this.options.zoom
    );

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    return this.map;
  }

  // Set narrative points for the route
  setNarrativePoints(points) {
    this.narrativePoints = points.map((p, index) => ({
      id: index,
      lat: p.lat,
      lng: p.lng,
      title: p.title,
      description: p.description,
      audioUrl: p.audioUrl || null,
      elderName: p.elderName || null,
      triggered: false
    }));

    this.renderPoints();
    this.drawRoute();
    return this.narrativePoints;
  }

  // Render markers on map
  renderPoints() {
    this.clearMarkers();

    this.narrativePoints.forEach((point, index) => {
      const marker = L.marker([point.lat, point.lng])
        .addTo(this.map)
        .bindPopup(this.createPopupContent(point));

      marker.on('click', () => this.onPointClick(point));
      this.markers.push(marker);
    });
  }

  // Create popup content
  createPopupContent(point) {
    return `
      <div class="narrative-popup">
        <h4>${this.options.narrativeIcon} ${point.title}</h4>
        <p>${point.description || '叙事点 ' + (point.id + 1)}</p>
        ${point.elderName ? `<span class="elder-badge">👴 ${point.elderName}</span>` : ''}
        ${point.audioUrl ? `<button onclick="routeMap.playAudio(${point.id})">🔊 播放故事</button>` : ''}
      </div>
    `;
  }

  // Draw route line connecting all points
  drawRoute() {
    if (this.routeLine) {
      this.map.removeLayer(this.routeLine);
    }

    const coordinates = this.narrativePoints.map(p => [p.lat, p.lng]);
    
    this.routeLine = L.polyline(coordinates, {
      color: this.options.routeColor,
      weight: 4,
      opacity: 0.8,
      dashArray: '10, 10'
    }).addTo(this.map);

    // Fit bounds to show entire route
    this.map.fitBounds(this.routeLine.getBounds(), { padding: [50, 50] });
  }

  // Simulate walking along the route
  async simulateWalk(onProgress, onNarrativeTrigger) {
    const totalPoints = this.narrativePoints.length;
    const segmentDistance = 2.4; // km per segment
    
    for (let i = 0; i < totalPoints; i++) {
      const point = this.narrativePoints[i];
      
      // Move to point
      this.map.setView([point.lat, point.lng], 15);
      
      // Calculate progress
      const progress = {
        currentPoint: i + 1,
        totalPoints: totalPoints,
        distance: i * segmentDistance,
        totalDistance: (totalPoints - 1) * segmentDistance,
        percentage: ((i + 1) / totalPoints) * 100
      };

      // Trigger narrative
      if (!point.triggered && onNarrativeTrigger) {
        point.triggered = true;
        await onNarrativeTrigger(point, progress);
      }

      // Report progress
      if (onProgress) {
        onProgress(progress);
      }

      // Delay between points
      await this.delay(2000);
    }

    return { completed: true, totalDistance: (totalPoints - 1) * segmentDistance };
  }

  // Play audio for a narrative point
  playAudio(pointId) {
    const point = this.narrativePoints.find(p => p.id === pointId);
    if (point && point.audioUrl) {
      const audio = new Audio(point.audioUrl);
      audio.play();
      return audio;
    } else {
      // Use speech synthesis as fallback
      const synth = window.speechSynthesis;
      if (synth) {
        const utter = new SpeechSynthesisUtterance(
          `${point.title}。这是${point.elderName || '一位长者'}留下的传说。`
        );
        utter.lang = 'es-MX';
        synth.speak(utter);
      }
    }
  }

  // Add new narrative point (for community recording)
  addNarrativePoint(pointData) {
    const newPoint = {
      id: this.narrativePoints.length,
      ...pointData,
      triggered: false
    };
    
    this.narrativePoints.push(newPoint);
    
    const marker = L.marker([newPoint.lat, newPoint.lng])
      .addTo(this.map)
      .bindPopup(this.createPopupContent(newPoint));
    
    marker.openPopup();
    this.markers.push(marker);
    
    // Redraw route
    this.drawRoute();
    
    return newPoint;
  }

  // Clear all markers
  clearMarkers() {
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];
  }

  // Calculate carbon footprint for the route
  calculateCarbonFootprint(transportMode, totalDistance) {
    const emissions = {
      walking: 0,
      bicycle: 0,
      electric: 0.12,
      bus: 0.42,
      car: 1.0
    };

    const emissionFactor = emissions[transportMode] || 0;
    const co2Emitted = totalDistance * emissionFactor;
    const co2Saved = totalDistance * (emissions.car - emissionFactor);

    return {
      emitted: co2Emitted,
      saved: co2Saved,
      comparedToCar: emissions.car * totalDistance
    };
  }

  // Utility: delay function
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Destroy component
  destroy() {
    this.clearMarkers();
    if (this.routeLine) {
      this.map.removeLayer(this.routeLine);
    }
    this.map.remove();
    this.map = null;
  }
}

// Usage example for Sunways integration
/*
const routeMap = new RouteMapComponent('sunways-map', {
  center: [23.7400, -104.4200],
  zoom: 13,
  routeColor: '#2F5A3C'
});

routeMap.init();

routeMap.setNarrativePoints([
  { lat: 23.7420, lng: -104.4180, title: 'Antigua Hacienda', elderName: 'Don José' },
  { lat: 23.7445, lng: -104.4155, title: 'El Ahuehuete', elderName: 'María' },
  // ... more points
]);

// Start simulation
routeMap.simulateWalk(
  (progress) => console.log(`Progress: ${progress.percentage}%`),
  (point, progress) => console.log(`Triggered: ${point.title}`)
);
*/

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RouteMapComponent;
}
