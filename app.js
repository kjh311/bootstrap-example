$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1290) {
       // alert("Bottom Reached!");
       // $('.scrollable-links').addClass('scrollable-links-fixed');
       // $('.white-article-main').addClass('align-right pull-right offset-md-4');
   }else{
    // $('.scrollable-links').removeClass('scrollable-links-fixed');
   }
});
