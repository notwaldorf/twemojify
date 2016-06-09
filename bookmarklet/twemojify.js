$(function() {
  twemoji.parse(document.body, { attributes: function (icon, variant) { return { style: 'width: 16px;' }}});
});

