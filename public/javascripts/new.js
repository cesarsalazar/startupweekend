$(function(){

  $('#menu a').on('click', function(event){
    event.preventDefault();
    var target = $( event.currentTarget.getAttribute('href') );
    var scroll = target.offset().top - 100;
    $('body').animate( { scrollTop: scroll }, 1000 );
  })

  var up = $('#bg-up').css('top','40px');
  var horz1 = $('#bg-float').css('top','500px');
  var left1 = $('#bg-right').css('top','900px');
  var right1 = $('#bg-left').css('top','1300px');
  var horz2 = $('#bg-float2').css('top','1800px');
  var left2 = $('#bg-right2').css('top','1800px');
  var right2 = $('#bg-left2').css('top','2300px');

  var _ = {}
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  var parallaxScroll = function () {
    console.log('para para parallax')
    var scrolled = $(window).scrollTop();
    up.css('top',(40-(scrolled*.15))+'px');
    horz1.css('top',(500-(scrolled*.35))+'px');
    left1.css('top',(900-(scrolled*.60))+'px');
    right1.css('top',(1300-(scrolled*.85))+'px');
    horz2.css('top',(1800-(scrolled*1))+'px');
    left2.css('top',(1800-(scrolled*.10))+'px');
    right2.css('top',(2300-(scrolled*.70))+'px');
  }

  var scrollListener = _.throttle(parallaxScroll, 1000/30); // 30 FPS

  $(window).on('scroll', scrollListener);

});