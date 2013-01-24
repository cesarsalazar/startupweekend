$(function(){

  $('#menu a').on('click', function(event){
    event.preventDefault();
    var target = $( event.currentTarget.getAttribute('href') );
    var scroll = target.offset().top - 100;
    $('body').animate( { scrollTop: scroll }, 1000 );
  })

});