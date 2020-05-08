$("a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top-100
  },1500)
  
 })
$(document).ready(function () {
        $(".navbar-nav a").click(function (e) {
            e.preventDefault();
            $('.navbar-collapse.show').collapse('hide');
        });
    });