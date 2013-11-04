$('.more.panel').each(function() {
  var self = $(this);

  self.before(self.find('div').children().slice(0, 14));
  self.remove();
  $('.more_trigger').remove();
});


