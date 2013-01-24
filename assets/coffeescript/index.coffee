$ ->
  $('article .content').waypoint
    handler: (direction) ->
      $('article.fixed').removeClass('fixed')
      $current = $(this).closest('article')
      $current = $current.prev() if direction is 'up'
      $current.addClass('fixed')

      $current.find('h2').css(color: "##{$current.data('color')}")
      $('body').css(background: "##{$current.data('bg')}")

    offset: 180
