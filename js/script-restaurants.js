$(document).ready(function(){
	/*-----------------------------------------------
		Checkboxes
	-----------------------------------------------*/
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green',
	});

	/*-----------------------------------------------
		Magnific Popup
	-----------------------------------------------*/
	if($('.ajax-popup-link').length){
		$('.ajax-popup-link').magnificPopup({
		  type: 'ajax'
		});
	}

	if($('.ajax-popup-link-blue-bg').length){
		$('.ajax-popup-link-blue-bg').magnificPopup({
		  type: 'ajax',
		  callbacks: {
		   markupParse: function(template, values, item) {
		       template.find('mfp-content').addClass('blue-bg');
		   }
		}
		});
	}

	/*-----------------------------------------------
		Map
	-----------------------------------------------*/
	if($(".map").length){
		var mapCanvas = $('.map')[0];
		var mapOptions = {
		  center: new google.maps.LatLng(47.359790, 8.557180),
		  zoom: 14,
		  mapTypeControl: false,
		  streetViewControl: false,
		  draggable: false,
		  scrollwheel: false,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions)

		map.set('styles', [
		  {
		    "featureType": "water",
		    "stylers": [
		      { "color": "#d1d1d1" }
		    ]
		  },{
		    "featureType": "road",
		    "stylers": [
		      { "color": "#fefefe" }
		    ]
		  },{
		    "featureType": "landscape",
		    "stylers": [
		      { "color": "#ededed" }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "color": "#ededed" }
		    ]
		  },{
		    "featureType": "road.highway",
		    "stylers": [
		      { "visibility": "simplified" }
		    ]
		  },{
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      { "color": "#808080" }
		    ]
		  },{
		    "featureType": "transit.station",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "administrative",
		    "stylers": [
		      { "color": "#808080" },
		      { "weight": 0.1 }
		    ]
		  } ,{
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "poi",
		    "elementType": "labels.text",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  }
		]);


	  var infoBubble = new InfoBubble({
      map: map,
      content: "<div class='info'><span class='semiBold'>Eaternity AG</span><br />Zollikerstrasse 76<br />CH-8008 Zürich</div>",
      shadowStyle: 0,
      padding: "15px",
      backgroundColor: '#e7eff1',
      arrowSize: 15,
      borderRadius: 0,
      minHeight: 120,
      minWidth: 200,
      borderWidth: 1,
      disableAutoPan: true,
      hideCloseButton: true,
      backgroundClassName: 'transparent',
      arrowStyle: 0
    });

		var marker = new google.maps.Marker({
	    position: {lat: 47.359790, lng: 8.557180},
	    map: map,
	    icon: '/img/marker.png'
	  });

	  // var markersecond = new google.maps.Marker({
	  //   position: {lat: 47.359, lng: 8.55},
	  //   map: map,
	  //   icon: '/img/marker.png'
	  // });

	  marker.addListener('click', function() {
	    infoBubble.open(map, marker);
	  });

	  markersecond.addListener('click', function() {
	    infoBubble.open(map, markersecond);
	  });

	  google.maps.event.addListener(map, "click", function () {
      infoBubble.close();
    });

	}

});
