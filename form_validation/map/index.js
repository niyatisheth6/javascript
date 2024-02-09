$(function() {
	function autocompleteWithEnter(map) {
		// search input
		const searchInput = document.getElementById("js-search-input");
		// options
		const options = {};
		// Google Maps Autocomplete Method
		const autocomplete = new google.maps.places.Autocomplete(
			searchInput,
			options
		);

		// Store markers in array ready for clearing on update
		let markersArray = [];

		// Has user pressed the down key to navigate autocomplete options?
		let hasDownBeenPressed = false;

		// Default listener outside to stop nested loop returning odd results
		searchInput.addEventListener("keydown", e => {
			if (e.keyCode === 40) {
				hasDownBeenPressed = true;
			}
		});

		// GoogleMaps API custom eventlistener method
		google.maps.event.addDomListener(searchInput, "keydown", e => {
			// Maps API e.stopPropagation();
			e.cancelBubble = true;

			// If enter key, or tab key
			if (e.keyCode === 13 || e.keyCode === 9) {
				// If user isn't navigating using arrows and this hasn't ran yet
				if (!hasDownBeenPressed && !e.hasRanOnce) {
					google.maps.event.trigger(e.target, "keydown", {
						keyCode: 40,
						hasRanOnce: true
					});
				}
			}
		});

		// place_changed GoogleMaps listener when we do submit
		google.maps.event.addListener(autocomplete, "place_changed", function() {
			// Get the place info from the autocomplete Api
			const place = autocomplete.getPlace();

		
			//If we can find the place lets go to it
			if (typeof place.address_components !== "undefined") {
				// reset hasDownBeenPressed in case they don't unfocus
				hasDownBeenPressed = false;

				// Get returned location
				const returnedCoords = new google.maps.LatLng(
					place.geometry.location.lat(),
					place.geometry.location.lng()
				);
				
				const userLocation = {
				lat: 	place.geometry.location.lat(),
				lng: place.geometry.location.lng()
			};

				// add a marker
				new google.maps.Marker({
					position: returnedCoords,
					map: map
				});

				// Focus map on new location
				map.setCenter(returnedCoords);
				map.setZoom(14);
				getRoute(map, userLocation);
			}
		});
		
      
		function getRoute(map, coords) {
			const directionsDisplay = new google.maps.DirectionsRenderer({
			map: map,
			suppressMarkers: true,
			preserveViewport: false,
			polylineOptions: {
				strokeWeight: 4,
				strokeColor: '#e30613',
			},
		});
			
			
		const directionsService = new google.maps.DirectionsService();

			// Directions request object packet for the directionsService
			const request = {
				origin: coords,
				travelMode: google.maps.DirectionsTravelMode.DRIVING
			};

			// Send the directionsService our request and wait for a response while checking the status of it
			directionsService.route(request, (response, status) => {
				c
				// If the service is loaded properly and returning a response, update the route on our map
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);				
				} else {
					// Give us an error if the service isn't responding
					console.warn(status);
				}
			});
		}

		// Clear the input on focus, reset hasDownBeenPressed
		searchInput.addEventListener("focus", () => {
			hasDownBeenPressed = false;
			searchInput.value = "";
		});
	}

	// Default map init
	function initialize() {
		let latitude = 51.509865;
		let longitude = -0.118092;
		let center = new google.maps.LatLng(latitude, longitude);
		const mapOptions = {
			center: center,
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		const map = new google.maps.Map(
			document.getElementById("google-map"),
			mapOptions
		);

		autocompleteWithEnter(map);
	}

	initialize();
});
