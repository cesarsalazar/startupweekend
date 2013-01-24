$ ->
  $menu = $('nav.menu')

  $('article .content').waypoint
    handler: (direction) ->
      $('article.fixed').removeClass('fixed')
      $current = $(this).closest('article')
      $current = $current.prev() if direction is 'up'
      $current.addClass('fixed')
      $menu.find('.active').removeClass('active')
      $menu.find(".#{$current.attr('id')}").addClass('active')

      $current.find('h2').css(color: "##{$current.data('color')}")
      $('body').css(background: "##{$current.data('bg')}")
      $('.tickets_btn').css(color: "##{$current.data('bg')}")

    offset: 180
