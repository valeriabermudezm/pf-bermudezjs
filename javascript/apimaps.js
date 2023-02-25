function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 4.6009686, lng: -74.0794479},
      zoom: 8
    });
  }
  const apiKey = 'AIzaSyBCrsXPGnjgaDikS5oFgyfyhtXxKNcvKTI';
  const direccion = 'Bogotá'; // Lugar para saber la ubicación.
  
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const resultado = data.results[0];
      if (!resultado) {
        console.error('No se encontraron resultados para la dirección especificada.');
        return;
      }
      const ubicacion = resultado.geometry.location;
    //document.write(ubicacion);
    const coordenadasDiv = document.getElementById ("coordenadas") 
    const ubicacionJSON = JSON.stringify(ubicacion)
    coordenadasDiv.innerHTML = `"Nos encontramos ubicados en las siguientes coordenadas ${ubicacionJSON}"`;

    })
    .catch(error => console.error(error));