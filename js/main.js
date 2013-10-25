var motionController = {
	"init" : function() {
		$(window).scroll(motionController.methods.firstAnimation);
		$(window).scroll(motionController.methods.chartAnimation);
		$(window).scroll(motionController.methods.circlesAnimation);
		$(window).scroll(motionController.methods.simBoxes);
	},
	"methods" : {
		
		"firstAnimation" : function () {
			
			if($('.manipulate-me').length){
			
				$('.manipulate-me').each(function(){
					if(pageYOffset >= ($(this).offset().top-$(window).height()+200)){
						$(".manipulate-me").addClass("viewing");
					} else {
						$(".manipulate-me").removeClass("viewing");
						
					}
				});
			}
		},	
		"chartAnimation" : function () {
			if($('.graph').length){
				$('.graph').each(function(){
					if(pageYOffset >= ($(this).offset().top-$(window).height()+200)){
						$(".graph").addClass("viewing");
					} else {
						$(".graph").removeClass("viewing");
						
					}
				});
			}
		},	
		"circlesAnimation" : function () {
			if($('.big-circle').length){
				$('.big-circle').each(function(){
					//si 
					if(pageYOffset >= ($(this).offset().top-$(window).height()+300)){
						var lala = $(this).offset().top-$(window).height()+300;
						$(".big-circle").addClass("viewing");
					} else {
						$(".big-circle").removeClass("viewing");
						
					}
				});
			}

			if($('.small-circle').length){
				$('.small-circle').each(function(){
					if(pageYOffset >= ($(this).offset().top-$(window).height()+300)){
						var lala = $(this).offset().top-$(window).height()+300;
						$(".small-circle").addClass("viewing");
					} else {
						$(".small-circle").removeClass("viewing");
						
					}
				});
			}
		},
		"simBoxes" : function () {
			
			if($('.sim-boxes').length){
			
				$('.sim-boxes').each(function(){
					if(pageYOffset >= ($(this).offset().top-$(window).height()+200)){
						$(".sim-boxes").addClass("viewing");
					} else {
						$(".sim-boxes").removeClass("viewing");
						
					}
				});
			}
		}

	

	}
}
motionController.init();

