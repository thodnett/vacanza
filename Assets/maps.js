var center = new google.maps.LatLng(41.8719, 12.5674);
var map;

function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: center,
        zoom: 13,
        mapTypeId: 'roadmap'
    });
   
   var service = new google.maps.places.PlacesService(map);
        
        
      service.nearbySearch(
            {location: center, radius: 500, type: ['restaurant', 'lodging']},
            function(results, status, pagination) {
              if (status !== 'OK') return;

              createMarkers(results);
              moreButton.disabled = !pagination.hasNextPage;
              getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
              };
            });
      }

      function createMarkers(places) {
        var bounds = new google.maps.LatLngBounds();
        var placesList = document.getElementById('places');

        for (var i = 0, place; place = places[i]; i++) {
          var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
          });

          var li = document.createElement('li');
          li.textContent = place.name;
          placesList.appendChild(li);

          bounds.extend(place.geometry.location);
        }
        map.fitBounds(bounds);
      }

    $('.launch-map').on('click', function() {

        $('#modal').modal({
            backdrop: 'static',
            keyboard: false
        }).on('shown.bs.modal', function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
        });
    });



google.maps.event.addDomListener(window, 'load', initAutocomplete);

