$ ->
  $menu = $('nav.menu')
  $.backstretch([
    "/images/bgs/home.png"
    "/images/bgs/program.png"
    "/images/bgs/judges.png"
    "/images/bgs/judges.png"
    "/images/bgs/tickets.png"
    "/images/bgs/tickets.png"
    "/images/bgs/newsletter.png"
  ])
  $('body').data('backstretch').pause()

  $('article .content').waypoint
    handler: (direction) ->
      $('article.fixed').removeClass('fixed')
      $current = $(this).closest('article')
      $current = $current.prev() if direction is 'up'

      hash = $current.attr('id')
      $current.addClass('fixed')
      $menu.find('.active').removeClass('active')
      $menu.find(".#{hash}").addClass('active')

      $('.tickets_btn').css(color: "##{$current.data('bg')}")
      history.replaceState(hash, hash, "/##{hash}")
      $current.find('h2').css(color: "##{$current.data('color')}")

      $('body').css
        backgroundColor: "##{$current.data('bg')}"
      .data('backstretch').show($current.index() - 1)

    offset: 180

