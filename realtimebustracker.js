mapboxgl.accessToken = 'pk.eyJ1IjoiamFuZWNhcGFudHMiLCJhIjoiY2t3cDZtenQ1MDl3NDJvbzRiY2h1eWowaSJ9.4EXes6YUBWFonQ3oWE-PyA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.979526,40.774338],
    zoom: 14
});


var marker = new mapboxgl.Marker()
    .setLngLat([-73.979644,40.770988])
    .addTo(map);

    const busStops = [
        [-73.978936,40.772191],
        [-73.977995,40.773540],
        [-73.977136,40.774775],
        [-73.976168,40.776169],
        [-73.975227,40.777297],
        [-73.973870,40.779168],
        [-73.972732,40.780745],
        [-73.971442,40.782200],
        [-73.970519,40.783598],
        [-73.969716,40.785001],
        [-73.968565,40.786428],
        [-73.967749,40.787598],
      ];
   
      var counter = 0;
      function move(){
          setTimeout(() =>{
              if (counter >= busStops.length) return;
              marker.setLngLat(busStops[counter]);
              counter ++;
              move();
          }, 1000);
      }
   