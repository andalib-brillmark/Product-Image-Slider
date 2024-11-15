var main = new Flickity('.main-carousel', {
  cellAlign: 'center',
  contain: true,
  pageDots: true,
  wrapAround: true
});

var nav = new Flickity('.carousel-nav', {
  asNavFor: '.main-carousel',
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  prevNextButtons: false
});