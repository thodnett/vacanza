var center = new google.maps.LatLng(41.8719, 12.5674);


function initMap() {

    var mapOptions = {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
     
    var locations = [
        ['Rome! Places to visit, The Colosseum, The Vatican , St Peters Basilica.', 41.8719, 12.5674, 4],
        ['Milan! Places to visit,  Duomo di Milano, Teatro alla Scalla, Sforzesco Castle. ', 45.4642, 9.1900, 3],
        ['Naples! Places to visit, Pompeii, Pallazo Real, Castel Nuovo. ', 40.8518, 14.2681, 2],
        ['Venice! Places to visit, St Marks Square, Rialto Bridge, St Marks Basillica. ', 45.4408, 12.3155, 1]
    ];


    var infowindow = new google.maps.InfoWindow();
    var i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
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

}

google.maps.event.addDomListener(window, 'load', initMap);