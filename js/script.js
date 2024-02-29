(function($) {
    
	"use strict";
	
	    var lastScroll = 0,
            simpleDropdown = 0,
            linkDropdown = 0,
            isotopeObjs = [],
            swiperObjs = [],
            wow = '';
    var sliderBreakPoint = 991;
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


	//Accordion Box
	if($('.accordion-box-two').length){
		$(".accordion-box-two").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box-two');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


    // single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fal fa-long-arrow-left"></span>', '<span class="fal fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}


    //two-column-carousel
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="icon-19"></span>', '<span class="icon-18"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}


    //three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}

	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fal fa-long-arrow-left"></span>', '<span class="fal fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}


	// Five Item Carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	// clients-carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}


	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:80,
					items: 1,
					nav: false,
					navText: [ '<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>' ],
					dots: true,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}


	//Screenshot carousel
	if ($('.appscreenshot-carousel').length) {
		$('.appscreenshot-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				992:{
					items:4,
					center:true
				},
				1200:{
					items:5,
					center:true
				},
			}
		});    		
	}


	if ($('.testimonial-section .bxslider').length) {
		$('.testimonial-section .bxslider').bxSlider({
	        nextText: '<i class="fal fa-long-arrow-right"></i>',
	        prevText: '<i class="fal fa-long-arrow-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.testimonial-section .slider-pager .thumb-box'
	    });
	};


	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 150,
			values: [ 30, 100 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}


    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}


	function onHoverthreeDmovement() {
	    var tiltBlock = $('.js-tilt');
	    if(tiltBlock.length) {
	        $('.js-tilt').tilt({
	            maxTilt: 20,
	            perspective:700, 
	            glare: true,
	            maxGlare: 0
	        })
	    }
	}


	// page direction
	function directionswitch() {
	  	if ($('.page_direction').length) {

	    	$('.direction_switch button').on('click', function() {
			   $('body').toggleClass(function(){
			      return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
			  })
			});
	  	};
	}

	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			directionswitch();
			onHoverthreeDmovement();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});
	
	

	
	   /* swiper auto slider */
        var $swiperAutoSlideIndex = 0;
        var swiperAutoSlideObj = undefined;
        var swiperAutoSlide = document.querySelectorAll( '.swiper-auto-slide' );
        swiperAutoSlide.forEach(function ( swiperItem, index ) {
            var _this = $(swiperItem),
                sliderOptions = _this.attr( 'data-slider-options' );

            if ( typeof ( sliderOptions ) !== 'undefined' && sliderOptions !== null ) {
                /* apply swiper */
                var sliderOptions = $.parseJSON( sliderOptions );
                    sliderOptions['on'] = {
                        resize: function () {
                            this.update();
                        }
                    };
                swiperAutoSlideObj = new Swiper(swiperItem, sliderOptions);
            }
        });

        $( window ).resize( function () {
            if ( $( '.swiper-auto-slide' ).length > 0 && swiperAutoSlideObj ) {
                $swiperAutoSlideIndex = swiperAutoSlideObj.activeIndex;
                swiperAutoSlideObj.detachEvents();
                swiperAutoSlideObj.destroy( true, false );
                swiperAutoSlideObj = undefined;
                $( '.swiper-auto-slide .swiper-wrapper' ).css( 'transform', '' ).css( 'transition-duration', '' );
                $( '.swiper-auto-slide .swiper-slide' ).css( 'margin-right', '' ); 

                setTimeout(function () {
                    swiperAutoSlide.forEach(function ( swiperItem, index ) {
                        var _this = $( swiperItem ),
                            sliderOptions = _this.attr( 'data-slider-options' );
                        if ( typeof ( sliderOptions ) !== 'undefined' && sliderOptions !== null ) {
                            var sliderOptions = $.parseJSON(sliderOptions);
                            sliderOptions['on'] = {
                                init: function () {
                                    this.update();
                                }
                            };
                            swiperAutoSlideObj = new Swiper( swiperItem, sliderOptions );
                            swiperAutoSlideObj.slideTo( $swiperAutoSlideIndex, 1200, false );
                        }
                    });
                }, 1000 );
            }
        });
        
         /* swiper bottom scrollbar slider */
        var resizeId;
        var swiperBottomScrollbarFullObj = undefined;
        var swiperBottomScrollbarFull = document.querySelectorAll('.swiper-bottom-scrollbar-full');
        if ($(window).width() > 767) {
            swiperBottomScrollbarFull.forEach(function (swiperItem, index) {
                var _this = $(swiperItem),
                        sliderOptions = _this.attr('data-slider-options');

                if (typeof (sliderOptions) !== 'undefined' && sliderOptions !== null) {
                    var sliderOptions = $.parseJSON(sliderOptions);
                    swiperBottomScrollbarFullObj = new Swiper(swiperItem, sliderOptions);
                }
            });
        }

        if ($(".swiper-bottom-scrollbar-full").length > 0) {
            $(window).resize(function () {
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 1000);
            });
        }


        function doneResizing() {
            if (typeof (swiperBottomScrollbarFullObj) !== 'undefined' && swiperBottomScrollbarFullObj !== null) {
                swiperBottomScrollbarFullObj.detachEvents();
                swiperBottomScrollbarFullObj.destroy(true, true);
                swiperBottomScrollbarFullObj = undefined;
            }

            $(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform", "").css("transition-duration", "").removeAttr("style");
            $(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right", "").removeAttr("style");

            if ($(window).width() > 767) {
                setTimeout(function () {
                    swiperBottomScrollbarFull.forEach(function (swiperItem, index) {
                        var _this = $(swiperItem),
                                sliderOptions = _this.attr('data-slider-options');

                        if (typeof (sliderOptions) !== 'undefined' && sliderOptions !== null) {
                            var sliderOptions = $.parseJSON(sliderOptions);
                            swiperBottomScrollbarFullObj = new Swiper(swiperItem, sliderOptions);
                        }
                    });
                }, 500);
            }
        }
        
          /* swiper button position in auto height slider */
    function setButtonPosition() {
        if ($(window).width() > 767 && $(".swiper-auto-height-container").length > 0) {
            var leftPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));
            var bottomPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));
            var bannerWidth = parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());
            $('.navigation-area').css({'left': bannerWidth + leftPosition + 'px', 'bottom': bottomPosition + 'px'});
        } else if ($(".swiper-auto-height-container").length > 0) {
            $('.navigation-area').css({'left': '', 'bottom': ''});
        }
    }
    
    /* parallax text */
    function parallax_text() {
        var window_width = $(window).width();
        if (window_width > 1024) {
            if ($('.swiper-auto-slide .swiper-slide').length !== 0) {
                $(document).on("mousemove", ".swiper-auto-slide .swiper-slide", function (e) {
                    var positionX = e.clientX;
                    var positionY = e.clientY;
                    positionX = Math.round(positionX / 10) - 80;
                    positionY = Math.round(positionY / 10) - 40;
                    $(this).find('.parallax-text').css({'transform': 'translate(' + positionX + 'px,' + positionY + 'px)', 'transition-duration': '0s'});
                });

                $(document).on("mouseout", ".swiper-auto-slide .swiper-slide", function (e) {
                    $('.parallax-text').css({'transform': 'translate(0,0)', 'transition-duration': '0.5s'});
                });
            }
        }
    }
    
          /* setup swiper slider */
    function setupSwiper() {

        /* swiper slider using params */
        var swiperItems = document.querySelectorAll(".swiper-container:not( .swiper-auto-slide ):not( .swiper-bottom-scrollbar-full ):not( .instafeed-wrapper )");
        swiperItems.forEach(function (swiperItem, index) {
            var _this = $(swiperItem),
                    sliderOptions = _this.attr('data-slider-options'),
                    swiperAutoSlideIndex = 0;
            if (typeof (sliderOptions) !== 'undefined' && sliderOptions !== null) {

                sliderOptions = $.parseJSON(sliderOptions);

                /* If user have provided "data-slider-md-direction" attribute then below code will execute */
                var mdDirection = _this.attr('data-slider-md-direction');
                if (mdDirection != '' && mdDirection != undefined) {

                    var direction = (sliderOptions['direction'] != '' && sliderOptions['direction'] != undefined) ? sliderOptions['direction'] : mdDirection;
                    sliderOptions['on'] = {
                        init: function () {
                            if (getWindowWidth() <= sliderBreakPoint) {
                                this.changeDirection(mdDirection);
                            } else {
                                this.changeDirection(direction);
                            }
                            this.update();
                        },
                        resize: function () {
                            if (getWindowWidth() <= sliderBreakPoint) {
                                this.changeDirection(mdDirection);
                            } else {
                                this.changeDirection(direction);
                            }
                            this.update();
                        }
                    };
                }

                /* If user have provided "data-thumb-slider-md-direction" attribute then below code will execute */
                if (sliderOptions['thumbs'] != '' && sliderOptions['thumbs'] != undefined) {

                    var mdThumbDirection = _this.attr('data-thumb-slider-md-direction');
                    if (mdThumbDirection != '' && mdThumbDirection != undefined) {

                        var thumbDirection = (sliderOptions['thumbs']['swiper']['direction'] != '' && sliderOptions['thumbs']['swiper']['direction'] != undefined) ? sliderOptions['thumbs']['swiper']['direction'] : mdThumbDirection;
                        sliderOptions['thumbs']['swiper']['on'] = {
                            init: function () {
                                if (getWindowWidth() <= sliderBreakPoint) {
                                    this.changeDirection(mdThumbDirection);
                                } else {
                                    this.changeDirection(thumbDirection);
                                }
                                this.update();
                            },
                            resize: function () {
                                if (getWindowWidth() <= sliderBreakPoint) {
                                    this.changeDirection(mdThumbDirection);
                                } else {
                                    this.changeDirection(thumbDirection);
                                }
                                this.update();
                            },
                            click: function () {
                                /* Product thumbs automatic next / previous on click slide */
                                if (this.activeIndex == this.clickedIndex) {
                                    this.slidePrev();
                                } else {
                                    this.slideNext();
                                }
                            }
                        };
                    }
                }

                /* If user have provided "data-slider-number-pagination" attribute then below code will execute */
                var numberPagination = _this.attr('data-slider-number-pagination');
                if (numberPagination != '' && numberPagination != undefined) {

                    sliderOptions['pagination']['renderBullet'] = function (index, className) {
                        return '<span class="' + className + '">' + pad((index + 1)) + '</span>';
                    };

                    sliderOptions['on'] = {
                        resize: function () {
                            this.update();
                        }
                    };
                }

                /* If user have provided "data-slide-change-on-click" attribute then below code will execute */
                var changeOnClick = _this.attr('data-slide-change-on-click');
                if (changeOnClick != '' && changeOnClick != undefined) {

                    sliderOptions['on'] = {
                        click: function () {
                            if (this.activeIndex > this.clickedIndex) {
                                this.slidePrev();
                            } else if (this.activeIndex < this.clickedIndex) {
                                this.slideNext();
                            }
                        }
                    };
                }

                /* If user have provided "data-thumbs" attribute then below code will execute */
                var dataThumbs = _this.attr('data-thumbs');
                if (dataThumbs != '' && dataThumbs != undefined) {
                    dataThumbs = $.parseJSON(dataThumbs);
                    if (typeof (dataThumbs) !== 'undefined' && dataThumbs !== null) {
                        sliderOptions['pagination']['renderBullet'] = function (index, className) {
                            return '<span class="' + className + '" style="background-image: url( ' + dataThumbs[index] + ' )"></span>';
                        }
                    }
                }

                var swiperObj = new Swiper(swiperItem, sliderOptions);
                swiperObjs.push(swiperObj);
            }
        });
    }

    /* destroy swiper loop */
    function destroySwiperLoop() {
        for (var i = 0; i < swiperObjs.length; i++) {
            var swiperObj = swiperObjs[i],
                    destroyWidth = swiperObj.$el.attr('data-slider-destroy');
            // If user have provided "data-slider-destroy" attribute then below code will execute
            if (destroyWidth != '' && destroyWidth != undefined) {
                if (getWindowWidth() <= destroyWidth) {
                    swiperObj.destroy(false, true); // Destroy swiper
                } else if (swiperObj.destroyed) {
                    swiperObjs.splice(i, 1);
                    setupSwiper(); // Initialize swiper again
                }
            }
        }
        ;
    }

    /* reset swiper loop */
    function resetSwiperLoop() {
        setTimeout(function () {
            for (var i = 0; i < swiperObjs.length; i++) {
                var swiperObj = swiperObjs[i];
                swiperObj.update();
            }
        }, 500);
    }
    /* remove wow animation */
    function removeWowAnimation(gridObj) {
        gridObj.find('.grid-item').removeClass('animate__animated').css('visibility', ''); // avoid problem to filter after sorting
        if ($('.wow').length > 0) {
            gridObj.find('.grid-item').each(function () {
                var _this = $(this);
                // remove perticular element from WOW array when you don't want animation on element after DOM lead
                wow.removeBox(this);
                _this.css('-webkit-animation', 'none');
                _this.css('-moz-animation', 'none');
                _this.css('-ms-animation', 'none');
                _this.css('animation', 'none');
            });
        }
    }

    /* reset isotope loop */
    function resetIsotopeLayoutLoop(isotopeObjs, removeAnimation) {
        for (var i = 0; i < isotopeObjs.length; i++) {
            if (removeAnimation) {
                removeWowAnimation(isotopeObjs[i]);
            }
            if (isotopeObjs[i].data('isotope')) {
                isotopeObjs[i].isotope('layout');
            }
        }
        ;
    }

    /* submit form using ajax */
    function submitAJAXForm(_this) {

        var formObj = _this.parents('form'),
                actionURL = formObj.attr('action'),
                resultsObj = formObj.find('.form-results'),
                redirectVal = formObj.find('[name="redirect"]').val();

        if (actionURL != '' && actionURL != undefined) {
            _this.addClass('loading');
            $.ajax({
                type: 'POST',
                url: actionURL,
                data: formObj.serialize(),
                success: function (result) {
                    _this.removeClass('loading');
                    if (redirectVal != '' && redirectVal != undefined) {
                        window.location.href = redirectVal;
                    } else {
                        if (typeof (result) !== 'undefined' && result !== null) {
                            result = $.parseJSON(result);
                        }
                        formObj.find('input[type=text],input[type=email],input[type=tel],input[type=password],textarea').each(function () {
                            $(this).val('');
                            $(this).removeClass('required-error');
                        });
                        formObj.find('.g-recaptcha').removeClass('required-error');
                        formObj.find('input[type=checkbox],input[type=radio]').prop('checked', false);
                        if (formObj.find('.g-recaptcha').length > 0) {
                            grecaptcha.reset();
                        }
                        formObj.find('input[name=action],input[name=g-recaptcha-response]').remove();
                        resultsObj.removeClass('alert-success').removeClass('alert-danger').hide();
                        resultsObj.addClass(result.alert).html(result.message);
                        resultsObj.removeClass('d-none').fadeIn('slow').delay(4000).fadeOut('slow');
                    }
                }
            });
        }
    }

})(jQuery);

        
     

/* ========================
	dz.carousel.min.js
========================= */
jQuery(document).ready(function(){"use strict";jQuery(".trending-post-bx").owlCarousel({loop:!0,center:!0,margin:35,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:2},1024:{items:3},1200:{items:5},1400:{items:5}}}),jQuery(".trending-post-bx1").owlCarousel({loop:!0,center:!0,margin:0,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:2},1024:{items:3},1200:{items:5},1400:{items:5}}}),jQuery(".video-card-carousel").owlCarousel({loop:!0,margin:0,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:2},480:{items:3},1024:{items:5},1200:{items:6},1400:{items:6}}}),jQuery(".video-slider-full").owlCarousel({loop:!0,margin:0,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:1},1024:{items:1},1200:{items:1},1400:{items:1}}}),jQuery(".video-slider").owlCarousel({loop:!0,margin:0,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:1},1024:{items:1},1200:{items:1},1400:{items:1}}}),jQuery(".product-slide").owlCarousel({loop:!0,margin:30,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:2},1024:{items:3},1200:{items:4},1400:{items:4}}}),jQuery(".post-slide").owlCarousel({loop:!0,autoplay:!0,margin:0,nav:!1,autoplaySpeed:1e3,navSpeed:1e3,paginationSpeed:1e3,slideSpeed:1e3,dots:!0,navText:['<i class="la la-angle-up"></i>','<i class="la la-angle-down"></i>'],responsive:{0:{items:1},480:{items:1},991:{items:1},1000:{items:1}}}),jQuery(".post-slide1").owlCarousel({loop:!0,autoplay:!0,margin:40,center:!0,nav:!0,autoplaySpeed:1e3,navSpeed:1e3,paginationSpeed:1e3,slideSpeed:1e3,dots:!1,navText:['<i class="la la-long-arrow-left"></i>','<i class="la la-long-arrow-right"></i>'],responsive:{0:{items:3},480:{items:4},991:{items:5},1000:{items:6}}}),jQuery(".post-slide2").owlCarousel({loop:!0,margin:30,autoplay:!0,nav:!0,dots:!1,navText:['<i class="la la-long-arrow-left"></i>','<i class="la la-long-arrow-right"></i>'],responsive:{0:{items:1},480:{items:1},768:{items:2},1000:{items:3},1400:{items:3}}}),jQuery(".banner-slide").owlCarousel({loop:!0,margin:0,autoplay:!0,nav:!0,dots:!0,navText:['<i class="las la-angle-up"></i>','<i class="las la-angle-down"></i>'],responsive:{0:{items:1},480:{items:1},1024:{items:1},1200:{items:1},1400:{items:1}}})});

 var testimonial_slider_one = new Swiper(".testimonial-slider-one", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        speed: 1500,
        centeredSlides: true,
        pagination: {
            el: ".testimonial-one-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    
    var galleryThumbs = new Swiper('.testimonial-slider-thumbs', {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true,
        slideToClickedSlide: true,
        speed: 2500,
    });
    var galleryTop = new Swiper('.testimonial-slider-two', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 1,
        speed: 2000,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testimonial-two-next',
            prevEl: '.testimonial-two-next',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        on: {
            slideChange: function() {
                let activeIndex = this.activeIndex + 1;
                let activeSlide = document.querySelector(`.testimonial-slider-thumbs .swiper-slide:nth-child(${activeIndex})`);
                let nextSlide = document.querySelector(`.testimonial-slider-thumbs .swiper-slide:nth-child(${activeIndex+1})`);
                let prevSlide = document.querySelector(`.testimonial-slider-thumbs .swiper-slide:nth-child(${activeIndex-1})`);
                if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
                    this.thumbs.swiper.slideNext()
                } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
                    this.thumbs.swiper.slidePrev()
                }
            }
        }
    });
    $('.mobile-top-bar').on('click', function() {
        $('.header-top-right').addClass('open')
    });
    $('.close-header-top').on('click', function() {
        $('.header-top-right').removeClass('open')
    });

        var swiper = new Swiper(".mySwiper", {
        spaceBetween: 25,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
            nextEl: ".product-slider-next",
            prevEl: ".product-slider-prev",
        }
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });
    var feature_slider = new Swiper(".feature-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        speed: 1500,
        pagination: {
            el: ".feature-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 1.8
            },
            992: {
                slidesPerView: 2.8
            },
            1200: {
                slidesPerView: 3.4
            },
            1600: {
                slidesPerView: 3.8
            }
        }
    });
    var service_slider = new Swiper(".partner-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        speed: 1500,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 5
            }
        }
    });
    $('.video-play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });
    
    	jQuery(window).on( 'pluginCarouselReady', function(){
			setTimeout( function(){
				$('.owl-stage').after('<div class="owl-stage-outer-bg"></div>');
			}, 1000 );
		});
		
		   /* video magnific popup */
        $('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: "auto",
            closeBtnInside: false
        });
        
		
            /* modal popup */
        $('.modal-popup').magnificPopup({
            type: 'inline',
            preloader: false,
            // modal: true,
            blackbg: true,
            callbacks: {
                open: function () {
                    $('html').css('margin-right', 0);
                }
            }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
        
        /* modal popup - zoom animation */
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            blackbg: true,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            blackbg: true,
            mainClass: 'my-mfp-slide-bottom'
        });
        
        
    
	
	
	









