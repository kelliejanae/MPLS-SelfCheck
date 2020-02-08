$().ready(function() {

$("#selfcheck-slideshow > img:gt(0)").hide();

setInterval(function() {
  $('#selfcheck-slideshow > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#selfcheck-slideshow');
}, 12000);

});