$(document).ready(function(){
	// var show = ['']
	for(var j = 1; j <= $('.skill div').length; j++){
		var k = j-1
		setTimeout(()=>{
			$(".skill div:nth-child("+ k++ +") h1").addClass("show")
			$(".skill p").addClass("show")
			$(".scroll-animate").addClass("fade-show")
		},(j+2)*200)
	}


	var initScroll = $(window).scrollTop();
	$('#ralaks').css({'bottom' : '-500px'});
	console.log(initScroll);
	// $("#ralaks").css({'top':(initScroll/20)+'px'})
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		function scrollBottom() { 
			return $(document).height() - $(window).scrollTop()
		};
		if(scrollTop >= 590.25){
			$('.overview').css({"position":"fixed","top":"0"})
			$('#ralaks').css({'bottom' : ((scrollTop-1300)/2)+'px'});
		}else{
			$('.overview').css({"position":"relative"})
		}

		if(scrollTop >= 2000){
			// console.log((scrollBottom()-9500)/4);
			$('#artWorks').scrollLeft((scrollTop-2500)/10)
			$('#artWorkss').scrollLeft((scrollBottom()-5000)/10)
			$('.overview').css({"top":(-(scrollTop-2000)/2)+"px"})
			$('#someWorks').removeClass("d-none")
			$('#someWorks').css({"position":"fixed","top":"1px"})
			$('.flex-center h1').css({"opacity":(scrollTop-2500)/10+"%"})
		}else{
			$('#someWorks').addClass("d-none")
		}

		var pChild = $('.works p').length
		for (let i = 1; i <= pChild; i++){
			if(scrollTop >= Number('3'+(i+2)*200)){
				$('.works p:nth-child('+i+')').css({'top':(i*3)+'0px','opacity':(scrollTop-3600)/2+'%'})
			}else{
				$('.works p:nth-child('+i+')').css({'top':'320px','opacity':(scrollTop-3600)/2+'%'})
			}
		}

		// REVEAL ARTWORKS 
		if(scrollTop >= 4200){
			$('.overview').addClass('d-none')
			$('.overview').css({"top":"0"})
			$('#someWorks').css({"top":(-(scrollTop-4200)/2)+"px"})
			$('#webSites').css({'display':'block'})
			// $('.flex-center').css({"padding-bottom":((scrollBottom()-8000)/4)+"px"})
		}else{
			$('.overview').removeClass('d-none')
		}

		// REVEAL WEBSITES 
		if(scrollTop >= 5700){
			$('#someWorks').css({"transition":"0s"})
			$('#webSites').css({'position':'absolute','display':'block'})
			// $('#webSites').addClass('container-fluid')
			// $('#webHide').addClass('websites-reveal')
			var rows = $('#webSites #webGroup').length

			for (var j = 1; j<=rows; j++){
				var webHides = $('#webSites #webGroup:nth-child('+j+') #webHide').length
				var jNumber = Number((j*2)*4+'00')+5000
				for (var i = 1; i<=webHides; i++){
					if(scrollTop >= jNumber+(i*100)){
						$('#webSites #webGroup:nth-child('+j+') #webHide:nth-child('+i+')').addClass('websites-reveal')
					}else{
						$('#webSites #webGroup:nth-child('+j+') #webHide:nth-child('+i+')').removeClass('websites-reveal')
					}

				}
			}
		}else{
			$('#webHide').removeClass('websites-reveal')
		}


		if(scrollTop >= 6800){
			$('#viewMores').addClass('websites-reveal')
		}else{
			$('#viewMores').removeClass('websites-reveal')
		}
		var iconTools = $('.icon-hide').length

		if(window.matchMedia('(max-width:737px)').matches){
			if(scrollTop >= 10800){
				$('#mySkill').css({"top":0+"px","position":"fixed"})
			} else {
				$('#mySkill').css({"top":10800+"px","position":"absolute"})
			}
			if(scrollTop >= 11500){
				for(var i = 1; i<=iconTools; i++){
					if(scrollTop >= 11500+((i*2)-2)*400){
						$('.icon-hide:nth-child('+i+')').css({'top':'0px'})
					}else{
						$('.icon-hide:nth-child('+i+')').css({'top':900+'px'})
					}
	
					if(scrollTop >= 11500+(i*800)){
						$('.icon-hide:nth-child('+i+')').css({'top':'-'+(i*2)-2+'00px'})
					}
				}
			}
			if(scrollTop >= 13200){
				$('#mySkill').css({"top":-(scrollTop-13199)+"px","position":"fixed"})
			}
			if(scrollTop >= 13700){
				$('#contact').css({'position':'fixed','top':'0','display':'block'})
				$('.contact-my').css({'opacity':(scrollTop-14500)/2+'%'})
				var contCont = $('#contact .contact-hide').length 
				for(var i = 1; i<=contCont; i++){
					console.log([i,'asd']);
					var k = i-1
					setTimeout(()=>{
						$('#contact .contact-content:nth-child('+k+++') h1').addClass('contact-show')
					},(i+2)*100)
				}
			}else{
				$('#contact').css({'position':'fixed','top':-(scrollTop-13699),'display':'absolute'})
			}
		}else if (window.matchMedia('(max-width:992px)').matches) { // If media query matches
			if(scrollTop >= 9000){
			
				// console.log('aws[pd');
				// if(scrollTop >= 8500){
					$('#mySkill').css({"top":0+"px","position":"fixed"})
				// }
			} else {
				// console.log('oasduio');
				$('#mySkill').css({"top":9000+"px","position":"absolute"})
			}

			if(scrollTop >= 9500){
				for(var i = 1; i<=iconTools; i++){
					if(scrollTop >= 9500+((i*2)-2)*400){
						$('.icon-hide:nth-child('+i+')').css({'top':'0px'})
					}else{
						$('.icon-hide:nth-child('+i+')').css({'top':900+'px'})
					}
	
					if(scrollTop >= 9500+(i*800)){
						$('.icon-hide:nth-child('+i+')').css({'top':'-'+(i*2)-2+'00px'})
					}else{
						console.log('lock');
					}
				}
			}

			if(scrollTop >= 11200){
				$('#mySkill').css({"top":-(scrollTop-11199)+"px","position":"fixed"})
			}
			if(scrollTop >= 11700){
				$('#contact').css({'position':'fixed','top':'0','display':'block'})
				$('.contact-my').css({'opacity':(scrollTop-12200)+'%'})
				var contCont = $('#contact .contact-hide').length 
				for(var i = 1; i<=contCont; i++){
					console.log([i,'asd']);
					var k = i-1
					setTimeout(()=>{
						$('#contact .contact-content:nth-child('+k+++') h1').addClass('contact-show')
					},(i+2)*200)
				}
			}else{
				$('#contact').css({'position':'fixed','top':-(scrollTop-11699),'display':'absolute'})
			}
		}else{
			if(scrollTop >= 8205){
				$('#mySkill').css({"top":0+"px","position":"fixed"})
			}else{
				$('#mySkill').css({"top":8200+"px","position":"absolute"})
			}

			if(scrollTop >= 8500){
				
				for(var i = 1; i<=iconTools; i++){
					if(scrollTop >= 8200+((i*2)-2)*400){
						$('.icon-hide:nth-child('+i+')').css({'top':'0px'})
					}else{
						$('.icon-hide:nth-child('+i+')').css({'top':900+'px'})
					}
	
					if(scrollTop >= 8200+(i*800)){
						$('.icon-hide:nth-child('+i+')').css({'top':'-'+(i*2)-2+'00px'})
					}
				}
			}

			if(scrollTop >= 10200){
				$('#mySkill').css({"top":-(scrollTop-10199)+"px","position":"fixed"})
			}
	
			if(scrollTop >= 10700){
				$('#contact').css({'position':'fixed','top':'0','display':'block'})
				$('.contact-my').css({'opacity':(scrollTop-11200)+'%'})
				var contCont = $('#contact .contact-hide').length 
				for(var i = 1; i<=contCont; i++){
					console.log([i,'asd']);
					var k = i-1
					setTimeout(()=>{
						$('#contact .contact-content:nth-child('+k+++') h1').addClass('contact-show')
					},(i+2)*200)
				}
			}else{
				$('#contact').css({'position':'fixed','top':-(scrollTop-10699),'display':'block'})
			}
	
		}



		
		

	})
	
  
  for(let i = 1; i <= 4; i++){
	  $(".skill-point:nth-child("+i+") .hide").mouseover(function(){
	  	$(this).addClass('show')
	  	$(".skill-point:nth-child("+i+") #point").addClass('hide')
	  	// console.log('post')
	  })
	

	  $(".skill-point:nth-child("+i+") .hide").mouseout(() => {
	  	$(".skill-point:nth-child("+i+") .hide").removeClass('show')
	  	$(".skill-point:nth-child("+i+") #point").removeClass('hide')
	  })
  }

  $("#image-hover").hover(()=>{
  	$(".image-hide").addClass('image-show')
  }, ()=>{
  	$(".image-hide").removeClass('image-show')
  })

  $(".cert").hover(()=>{
  	$(".black").addClass("move")
  },()=>{
  	$(".black").removeClass("move")
  })
});
