import L from 'leaflet'
export function addTileLayer(map) {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoienVnbzA2IiwiYSI6ImNsMDhkamdzczAxNHYzZGsxMHY1MDV6cWkifQ.DrAhq4RBGKVLWuKCsRFg9A',
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/ZuGo06">Shaimardanov Ali</a>.',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map)
}
