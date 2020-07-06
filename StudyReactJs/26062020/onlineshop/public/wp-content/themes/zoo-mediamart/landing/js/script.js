/*function getWindowWidth() {
    var windowWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
        windowWidth = window.innerWidth;
    }
    else {
        if (document.documentElement && document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        }
        else {
            if (document.body && document.body.clientWidth) {
                windowWidth = document.body.clientWidth;
            }
        }
    }
    return windowWidth;
}*/
$(document).ready(function() {

      window_height = $(window).height();

      //$('header').height(window_height);
      $.material.init(); 
      $.material.ripples(".button-effect");




      // grab the initial top offset of the navigation 
        //var stickyNavTop = $('nav').offset().top;
        
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top
               
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > 50) { 
              $('nav').addClass('sticky').removeClass('un-sticky');
          } else {
              $('nav').removeClass('sticky').addClass('un-sticky'); 
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });
// Carosel
    var owl = $('#owl-arrivals');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          },
          1200: {
            items: 5
          }
        }
      });

      $("a[href^='#demos']").on("click", function(e) {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        $('header nav ul').removeClass("active");
      });
      $("a[href^='#features']").on("click", function(e) {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        $('header nav ul').removeClass("active");
      });

      if ($(window.location.hash).length > 1) {
        $("html, body").animate({
          scrollTop: $(window.location.hash).offset().top
        }, 1000);
      }

      $("a[href^='#home']").on("click", function(e) {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
      });

      $('#toggle-nav').on("click", function() {
        $('header nav ul').toggleClass("active");
        $(this).toggleClass("nav-open");
      });

      var heightimg = jQuery( window ).height() - 60;
      $('header nav ul.active').height(heightimg);
});



// Mega Menu

/*$('.toggle-icon').on('click', function() {
    if($(this).hasClass("active")){
      $(this).removeClass('active').parent().next().slideUp();
      
    }else{
      $(this).parent().parent().parent().find('.toggle-icon').removeClass('active');
      $(this).parent().parent().parent().find('ul').slideUp();
      $(this).addClass('active').parent().next().slideDown();
    }
    
});*/
/*function toggleNav(){
   $('#toggle-nav').on('click', function() {
          $('body').toggleClass('body-nav-open');
          $(this).toggleClass('nav-open');
          $('#main-menu').toggleClass('open');
          $('.main-content').fadeToggle();
        });
}
toggleNav();
$.fn.clevermenu = function(class_menu) {
     window_width = getWindowWidth();
     $('.mega-menu-sub, li.parent ul').css('display','none');
      if(window_width <= 767){
        $(this).removeClass(class_menu).addClass(class_menu + '_mobile').addClass('menu-mobile').parent().addClass('nav-mobile');
      }else if(window_width > 768){

        $('.mega-menu-sub, li.parent ul').css('display','block');
        $(this).removeClass(class_menu + '_mobile').removeClass('menu-mobile').addClass(class_menu).parent().removeClass('nav-mobile');
      }    
};
$(window).load(function(){
    $('.clever-menu').clevermenu('wrap-main-menu');
    $('.clever-sidebar-menu').clevermenu(' wrap-sidebar-menu');
   
});
$(window).resize(function(){
    window_width = getWindowWidth();
      toggleNav();
      $('.clever-menu').clevermenu('wrap-main-menu');
      $('.clever-sidebar-menu').clevermenu(' wrap-sidebar-menu');
      
});

// Mega Menu*/


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});

/*// init Isotope catalog
var $grid = $('.grids').isotope({
  itemSelector: '.catalog_product_item',
  layoutMode: 'fitRows',
});*/

/*// init Isotope mobile
var $grid = $('.gridmobile').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
});*/

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});



// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});








$(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

        //Mini cart
    $('.cart-icon').on('click', function() {
        if ($('.minicart').hasClass('closed')) $('.minicart').removeClass('closed');
        $('.minicart').toggleClass('actived');
    });
    $('#btn-minicart-close').on('click', function() {
        if ($('.minicart').hasClass('actived')) $('.minicart').removeClass('actived');
        $('.minicart').addClass('closed');
    })
    $('.shadow-popup').on('click', function() {
            if ($('.minicart').hasClass('actived')) $('.minicart').removeClass('actived');
            $('.minicart').addClass('closed');
        })
        //End Mini cart

    //--------------------------------------------------------------------------------------------------------------------------


