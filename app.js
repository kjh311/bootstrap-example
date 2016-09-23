
// SCROLL TO FIXED POSITION:
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1290) {
       // alert("Bottom Reached!");
       // $('.scrollable-links').addClass('scrollable-links-fixed');
       // $('.white-article-main').addClass('align-right pull-right offset-md-4');
   }else{
    // $('.scrollable-links').removeClass('scrollable-links-fixed');
   }
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



