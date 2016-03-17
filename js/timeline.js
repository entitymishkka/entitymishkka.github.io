$('body').css('opacity','1');
initScrollAnimations();
function initScrollAnimations() {
  $('#content-wrapper').css('display','block');
  var controller = $.superscrollorama();
 
  controller.pin($('#scene1'), 20000, {
                  anim: (new TimelineLite())
				   .append(
                   TweenMax.from($('#introtext'), 0.7, 
                                    {css:{opacity:0, top: -200}, immediateRender:true}, 
                                    {css:{opacity:0.8, top: 0}}),
					-1
					)
                   .append(
                   TweenMax.fromTo($('#fling-it'), 1, 
                                    {css:{left:0, top: 900, opacity: 0}, immediateRender:true}, 
                                    {css:{left:100, top: 20, opacity: 1}})
									
                   )
				   .append(
                   TweenMax.fromTo($('#fling-it-right'), 1, 
                                    {css:{left:820, top: 600, opacity: 0}, immediateRender:true}, 
                                    {css:{left:840, top: 200, opacity: 1}}),
							-0.8
									
                   )

				   .append(
                   TweenMax.fromTo($('#sky'), 1, 
                                    {css:{top: -8500}, immediateRender:true}, 
                                    {css:{top: 0}}),
									-1.3
                   )
				   .append(
                   TweenMax.fromTo($('#move-mid'), 1, 
                                    {css:{bottom: -300}, immediateRender:true}, 
                                    {css:{bottom: -650}}),
									-0.4
								
                   )			
				   .append(
                   TweenMax.fromTo($('#move-fore'), 0.9, 
                                    {css:{bottom: -50}, immediateRender:true}, 
                                    {css:{bottom: -650}}),
									-1
					)
					.append(
                   TweenMax.from($('#introtext'), 1, 
                                    {css:{opacity:0.8}, immediateRender:true}, 
                                    {css:{opacity:0}})
					
					)

				   .append(
                   TweenMax.fromTo($('#fling-it-right'), 1, 
                                    {css:{left:840, top: 200, scaleX: 1, scaleY: 1}, immediateRender:true}, 
                                    {css:{left:190, top: 420, scaleX: 3, scaleY: 3}})
							
									
                   )
                   .append(
                   TweenMax.fromTo($('#fling-it'), 1, 
                                    {css:{left:100, top: 20, scaleX: 1, scaleY: 1}, immediateRender:true}, 
                                    {css:{left:640, top: 10, scaleX: 0.2, scaleY: 0.2}}),
									-1
									
                   )
				   .append(
                   TweenMax.fromTo($('#stars'), 1.7, 
                                    {css:{top: -280, opacity: 0}, immediateRender:true}, 
                                    {css:{top: 0, opacity: 1}}),
									-0.9
																		
                   )
				.append(
                   TweenMax.fromTo($('#belt'), 2, 
                                    {css:{opacity: 0}, immediateRender:true}, 
                                    {css:{opacity: 0.7}}),
									0.5																		
                   )
				 .append(
                   TweenMax.fromTo($('#infobox'), 0.6, 
                                    {css:{opacity: 0, right: 0}, immediateRender:true}, 
                                    {css:{opacity: 1, right: 50}}),
									-0.7
																							
                   )
				.append(
                   TweenMax.fromTo($('#fling-it-right'), 1, 
                                    {css:{left:190, top: 420}, immediateRender:true}, 
                                    {css:{left:210, top: 120}}),
							2.1
									
                   )
                   .append(
                   TweenMax.fromTo($('#fling-it'), 2, 
                                    {css:{left:640, top: 10}, immediateRender:true}, 
                                    {css:{left:680, top: 80}}),
									-1.4
									
                   )
				 .append(
                   TweenMax.fromTo($('#infobox'), 0.6, 
                                    {css:{right: 50}, immediateRender:true}, 
                                    {css:{right: -800}}),
									-1.4
																							
                   )
                  })
  
}