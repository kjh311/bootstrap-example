$( document ).ready(function() {

// SCROLL TO FIXED POSITION:
  $(window).scroll(function(){


    if ($(window).scrollTop() > $('.white-articles').position().top) {
      // alert('#element hits top!');
      $('.scrollable-links').addClass('scrollable-links-fixed');
      $('.white-articles').addClass('col-md-offset-3');
    }
    if ($(window).scrollTop() < $('.white-articles').position().top) {
      // alert('#element hits top!');
      $('.scrollable-links').removeClass('scrollable-links-fixed');
      $('.white-articles').removeClass('col-md-offset-3');
    }


  });


  // ASIDE-ARTICLES SCROLL:
  var height = $( window ).height();
  $(function() {
      $('.scrollable-links').css({'height': height + 'px'});
   });


// GREY CAROUSEL LOGIC:
$(function() {

  // Start slide animation
  $("#myCarousel").on('slide.bs.carousel', function(event){
    // console.log('slide');

    var active = $(event.target).find('.carousel-inner > .item.active');
    var from = active.index();
    var next = $(event.relatedTarget);
    var to = next.index();
    // var direction = event.direction;

   if(to === 0){
    $('.latest').addClass('carousel-active-slide');
    $('.popular').removeClass('carousel-active-slide');
    $('.editor-pick').removeClass('carousel-active-slide');
   }else if(to === 2){
    $('.latest').removeClass('carousel-active-slide');
    $('.popular').addClass('carousel-active-slide');
    $('.editor-pick').removeClass('carousel-active-slide');
   }else if(to === 3){
    $('.latest').removeClass('carousel-active-slide');
    $('.popular').removeClass('carousel-active-slide');
    $('.editor-pick').addClass('carousel-active-slide');
   }
  });
  });


// Drop Down Carousel Hover Logic:
$(function() {
  $('.navbar-links-link1').mouseover(function(){
    $('.drop-down-article-slide1').removeClass('hidden');
    $('.drop-down-article-slide2').addClass('hidden');
    $('.drop-down-article-slide3').addClass('hidden');
  });
$('.navbar-links-link2').mouseover(function(){
    $('.drop-down-article-slide1').addClass('hidden');
    $('.drop-down-article-slide2').removeClass('hidden');
    $('.drop-down-article-slide3').addClass('hidden');
  });
$('.navbar-links-link3').mouseover(function(){
    $('.drop-down-article-slide1').addClass('hidden');
    $('.drop-down-article-slide2').addClass('hidden');
    $('.drop-down-article-slide3').removeClass('hidden');
  });

});


// White Articles Carousel Logic:
$(function() {
 $('.next-page-link1').click(function(){
  $('.next-page-link1').addClass('orange-back');
  $('.next-page-link3').removeClass('orange-back');
  $('.next-page-link2').removeClass('orange-back');
    $('.white-article-wrapper2').fadeOut(300);
    $('.white-article-wrapper3').fadeOut(300);
    function fade(){
     $('.white-article-wrapper1').fadeIn(300);
    }
    setTimeout(fade, 300);
  });
$('.next-page-link2').click(function(){
  $('.next-page-link1').removeClass('orange-back');
  $('.next-page-link3').removeClass('orange-back');
  $('.next-page-link2').addClass('orange-back');
  $('.white-article-wrapper1').fadeOut(300);
  $('.white-article-wrapper3').fadeOut(300);

    function fade(){
     $('.white-article-wrapper2').fadeIn(300).removeClass('hidden');
    }
    setTimeout(fade, 300);
  });


$('.next-page-link3').click(function(){
    $('.next-page-link1').removeClass('orange-back');
    $('.next-page-link2').removeClass('orange-back');
    $('.next-page-link3').addClass('orange-back');
  $('.white-article-wrapper1').fadeOut(300);
  $('.white-article-wrapper2').fadeOut(300);
    function fade(){
     $('.white-article-wrapper3').fadeIn(300).removeClass('hidden');
    }
    setTimeout(fade, 300);
  });

});


});

