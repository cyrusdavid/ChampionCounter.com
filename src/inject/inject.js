$('.column').each(function () {
  'use strict';

  var self = $(this),
      categoryId = self.data('id'),
      champId = $('#main_champ').data('id'),
      btn = self.find('.more_trigger');

  $.ajax({
    url: '/extra-rankings.php?file=' + categoryId + '&champ_id=' + champId,
    success: function (res) {
      btn.after($('a', $.trim('<div><div>'+res)).slice(0,20)).off().hide();
    }
  });
});
