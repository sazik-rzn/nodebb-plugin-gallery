(function() {
	"use strict";

	jQuery('document').ready(function() {
		$(window).on('action:ajaxify.end', function() {
			// var img = $('[component="post/content"] img');
			// var topic
			// img.parent('a').addClass('fancybox').attr('rel', 'gallery').fancybox();
			lightGallery($('[component="post/content"]'));
		});
	});
}());