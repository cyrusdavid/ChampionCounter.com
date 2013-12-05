var champion = $(location).attr('pathname').substring(1);

$('.column').each(function () {
  var prefix = 'weakTo',
      self = $(this),
      id = self.data('id');

  if (id === 1) {
    prefix = 'strongAgainst';
  } else if (id === 2) {
    prefix = 'goodWith';
  }

  (function (btn) {
    $.ajax({
      url: '/' + prefix + '-' + champion,
      success: function (res) {
        btn.after($('a', $.trim('<div><div>'+res)).slice(0,20)).off().hide();
      }
    });
  })(self.find('.more_trigger'));
});
