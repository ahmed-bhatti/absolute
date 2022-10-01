// jQuery(function() {
//     jQuery(".show").click(function(){
//         jQuery(".breathe").show();
//     });
//     jQuery(".show").click(function(){
//         jQuery(".breathe").hide();
//         jQuery(".div"+ $(this).attr('target')).show();
//     });
// });
$(document).ready(function(){
    $(".accordian-head").on("click",function(){
      var $this = $(this);
      this.toggleClass("show");
      this.siblings("accordian-body").slideToggle(400);
    })
  })