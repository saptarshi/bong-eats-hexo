

	// var youtube = document.querySelectorAll( ".youtube" );
	//
	// for (var i = 0; i < youtube.length; i++) {
	//
	// 	var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
	//
	// 	var image = new Image();
	// 			image.src = source;
	// 			image.addEventListener( "load", function() {
	// 				youtube[ i ].appendChild( image );
	// 			}( i ) );
	//
	// 			youtube[i].addEventListener( "click", function() {
	//
	// 				var iframe = document.createElement( "iframe" );
	//
	// 						iframe.setAttribute( "frameborder", "0" );
	// 						iframe.setAttribute( "allowfullscreen", "" );
	// 						iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
	//
	// 						this.innerHTML = "";
	// 						this.appendChild( iframe );
	// 			} );
	// };

	var player;
	function onYouTubeIframeAPIReady() {
		var vidParent = $('.post-header-cover')[0],
				vidHeight = (($(vidParent).outerHeight() > 1080) ? 1080 : $(vidParent).height()),
				vidWidth = vidHeight * 16 / 9,
				videoId = document.querySelectorAll('.video-player')[0].dataset.youtube;
		player = new YT.Player('player', {
			height: vidHeight,
			width: vidWidth,
			videoId: videoId,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}
	// callback function when player is ready
	function onPlayerReady(event) {
		$('.play-button').off();
		$('.video-player ').removeClass('hide');
		$('.play-button').addClass('hide');
		$('.watch-on-yt').addClass('hide');
		event.target.playVideo();
	}

	function onPlayerStateChange(event) {
		console.log('player state change');
	}

	$('.play-button').on('click', function(event) {
		// var videoId = document.querySelectorAll('.video-player')[0].dataset.youtube;
		if(typeof YT === 'undefined') {
			var tag = document.createElement('script');
			// load youtube api js library
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}
		setTimeout(function(){
			$('.watch-on-yt').removeClass('hide');
		},5000);
	})
