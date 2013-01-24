$ ->
  $('article .content').waypoint
    handler: (direction) ->
      $('article.fixed').removeClass('fixed')
      $current = $(this).closest('article')
      $current = $current.prev() if direction is 'up'
      $current.addClass('fixed')

    offset: 188
