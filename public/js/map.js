
    
    mapboxgl.accessToken =mapToken;
     
      const map = new mapboxgl.Map({
          container: 'map', // container ID
          style:"mapbox://styles/mapbox/streets-v12", //style URL
          center: listing.geometry.coordinates, // starting position [lng, lat]
          zoom: 5 // starting zoom
      });

       // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker({color: 'red'})
    .setLngLat( listing.geometry.coordinates)//Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHTML(`<h1 class=" text-base font-bold">${listing.title}</h1><p>Exact location Provided after booking</p>`)
    )
    .addTo(map)
    ;
    map.on('load', function() {
        // Rotate the map 45 degrees clockwise
        map.setBearing(45);
    });

    

  