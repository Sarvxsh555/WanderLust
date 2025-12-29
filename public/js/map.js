mapboxgl.accessToken = mapToken;

const coordinates = [
  Number(listing.geometry.coordinates[0]),
  Number(listing.geometry.coordinates[1])
];


const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9  
});
 
map.on("load", () => {
  map.loadImage(
    "/assets/cobra-snake.png",
    (error, image) => {
      if (error) throw error;


      map.addImage("cobra-icon", image);


      map.addSource("listing-point", {  
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: coordinates
          },
          properties: {
            title: listing.title
          }
        }
      });


     map.addLayer({
  id: "listing-icon",
  type: "symbol",
  source: "listing-point",
  layout: {

    "icon-image": "cobra-icon",
    "icon-size": [
      "interpolate",
      ["linear"],
      ["zoom"],
      8, 0.15,
      12, 0.25,
      16, 0.4
    ],
    "icon-anchor": "bottom",


    "text-field": listing.location || "Bangalore",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-size": 14,
    "text-anchor": "top",
    "text-offset": [0, 0.6]
  },
  paint: {
    "text-color": "#111",
    "text-halo-color": "#ffffff",
    "text-halo-width": 2
  }
});


  
      map.on("click", "listing-icon", (e) => {
        new mapboxgl.Popup({ offset: 25 })
          .setLngLat(e.lngLat)
          .setHTML(`
            <h4>${listing.title}</h4>
            <p>Exact location will be provided after booking</p>
          `)
          .addTo(map);
      });

      map.on("mouseenter", "listing-icon", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "listing-icon", () => {
        map.getCanvas().style.cursor = "";
      });
    }
  );
});
