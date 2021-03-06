var map
// PhoneGap
function getLocation() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
// onSuccess Geolocation
//


function onSuccess(position) {
	/*
	$('#geolocation').html('Latitude: '        + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />' +
						'Altitude: '           + position.coords.altitude              + '<br />' +
						'Accuracy: '           + position.coords.accuracy              + '<br />' +
						'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
						'Heading: '            + position.coords.heading               + '<br />' +
						'Speed: '              + position.coords.speed                 + '<br />' +
						'Timestamp: '          + position.timestamp          + '<br />');
	*/
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var latlng = new google.maps.LatLng(latitude, longitude);
	var mapOptions = {
	  center: new google.maps.LatLng(latitude, longitude),
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	strMarkerInfo = "";
	strMarkerID = "";
	objImage = "";
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	createMarker(strMarkerInfo, latlng, objImage, strMarkerID);
	map.setCenter(latlng)


}

// onError Callback receives a PositionError object
//
function onError(error) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n';
}


//----------------------------------------------------------------------
//  createMarker - ADD MARKER TO MAP
//----------------------------------------------------------------------
	function createMarker(info, latlng, objImage, intID, blnNoMarker) {
	  var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			icon: objImage,
			title: 'You are here',
			animation: google.maps.Animation.DROP,
			id: intID
		});
		markers = [];
		
		markers.push(marker);
		var intCurrentMarker = markers.length - 1
		if(typeof blnNoMarker == 'undefined'){
	    google.maps.event.addListener(marker, "click", function() {
				clickMarker(intCurrentMarker)
	    });
	  }

    return marker;
	}
