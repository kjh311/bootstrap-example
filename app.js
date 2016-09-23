$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1290) {
       // alert("Bottom Reached!");
       // $('.scrollable-links').addClass('scrollable-links-fixed');
       // $('.white-article-main').addClass('align-right pull-right offset-md-4');
   }else{
    // $('.scrollable-links').removeClass('scrollable-links-fixed');
   }
});



// var $carousel = $('#myCarousel');
// $carousel.carousel();

// $carousel.bind('slide.bs.carousel', function (e) {
//     alert('slide event!');
// });

// $('#myCarousel').bind('slide.bs.carousel', function (e) {
//     console.log('slide event!');
// });

// $('#myCarousel').bind('slid', function (e) {
//     console.log("slid event!");
// });


$(function() {

  // Start slide animation
  $("#myCarousel").on('slide.bs.carousel', function(event){
    console.log('slide');

    // var active = $(event.target).find('.carousel-inner > .item.active');
    // var from = active.index();
    // var next = $(event.relatedTarget);
    // var to = next.index();
    // var direction = event.direction;

    // console.log('prev', active.prevOrLast());
    // console.log('active', active, from);
    // console.log('next', next, to);
    // console.log('direction', direction);
      alert('sdf');

  });
  });
