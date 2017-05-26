var city ="";
var state ="";

var city ="";
var state ="";

var markers;

        // grab these from api
        var brewery_locations = [
            {
                location: {lat: 30.30, lng: -97.643},
                url: 'http://southaustinbrewery.com/'
            },
            {
                location: {lat: 30.35, lng: -97.743},
                url: 'one_of_your_page.html'
            },
            {
                location: {lat: 30.25, lng: -97.56},
                url: 'http://www.hopsandgrain.com/'
            },
            {
                location: {lat: 30.23, lng: -97.443},
                url: 'one_of_your_page.html'
            },
        ]

        function initMap(locations) {

            function addMarker(dataset, map_object) {
                var marker = new google.maps.Marker({
                    position: dataset.location,
                    map: map_object,
                    url: dataset.url
                });
                return marker
            }

            var center_of_austin = {
                lat: 30.30,
                lng: -97.743
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: center_of_austin
            });

            markers = brewery_locations.map(function(location) {
                return addMarker(location, map)
            });

            google.maps.event.addDomListener(window, 'load', initMap);

            markers.map(function(marker) {
                google.maps.event.addListener(
                    marker,
                    'click',
                    function() {
                        window.location.href = marker.url;
                    }
                );
            })
        }

 
