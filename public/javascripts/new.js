$(function(){
  
  $('#menu a').click(function(event){
    var el = $(this);
    var target = $( el.attr('href') );
    var scroll = target.position().top - 100;
    $('body').animate( { scrollTop: scroll }, 1000 );
    event.preventDefault();
  })
  
  var up = $('#bg-up');
  var horz1 = $('#bg-float');
  var left1 = $('#bg-right');
  var right1 = $('#bg-left');
  var horz2 = $('#bg-float2');
  var left2 = $('#bg-right2');
  var right2 = $('#bg-left2');
  
  up.css('top',40+'px');
  horz1.css('top',500+'px');
  left1.css('top',900+'px');
  right1.css('top',1300+'px');
  horz2.css('top',1800+'px');
  left2.css('top',1800+'px');
  right2.css('top',2300+'px');
  
  var period = 0;
  $(window).bind('scroll',function(e){
      parallaxScroll();
  });

  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      up.css('top',(40-(scrolled*.15))+'px');
      horz1.css('top',(500-(scrolled*.35))+'px');
      left1.css('top',(900-(scrolled*.60))+'px');
      right1.css('top',(1300-(scrolled*.85))+'px');
      horz2.css('top',(1800-(scrolled*1))+'px');
      left2.css('top',(1800-(scrolled*.10))+'px');
      right2.css('top',(2300-(scrolled*.70))+'px');
  }
  
})