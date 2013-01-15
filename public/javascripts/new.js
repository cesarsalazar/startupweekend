$(function(){

  $('#menu a').on('click', function(event){
    event.preventDefault();
    var target = $( event.currentTarget.getAttribute('href') );
    var scroll = target.offset().top - 100;
    $('body').animate( { scrollTop: scroll }, 1000 );
  })

  var up = $('#bg-up')//.css('top','40px');
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
    var scrolled = $(window).scrollTop();
    up.css('transform','translate3d(0,'+((scrolled*.15))+'px, 0)');
    horz1.css('transform','translate3d(0,'+(500-(scrolled*.35))+'px, 0)');
    left1.css('transform','translate3d(0,'+(900-(scrolled*.60))+'px, 0)');
    right1.css('transform','translate3d(0,'+(1300-(scrolled*.85))+'px, 0)');
    horz2.css('transform','translate3d(0,'+(1800-(scrolled*1))+'px, 0)');
    left2.css('transform','translate3d(0,'+(1800-(scrolled*.10))+'px, 0)');
    right2.css('transform','translate3d(0,'+(2300-(scrolled*.70))+'px, 0)');
  }

  var scrollListener = _.throttle(parallaxScroll, 50);

  $(window).on('scroll', scrollListener);

});