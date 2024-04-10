<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display a minimap control to aid the map navigation</title>
  <script src="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.umd.js"></script>
  <link href="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.css" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    #map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    maptilersdk.config.apiKey = 'YOUR_MAPTILER_API_KEY_HERE';
    const map = new maptilersdk.Map({
      container: 'map', // container id
      style: maptilersdk.MapStyle.STREETS,
      center: [16.62662018, 49.2125578], // starting position [lng, lat]
      zoom: 10, // starting zoom
      minimap: {
        containerStyle: {
          width: '200px',
          height: '150px'
        }
      }
    });

  </script>
</body>
</html>