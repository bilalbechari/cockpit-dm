$(".button-collapse").sideNav()

var container = document.querySelector('.custom-scrollbar')
var ps = new PerfectScrollbar(container, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
})

$(function () {
  $('#dark-mode').on('click', function (e) {

    //e.preventDefault()
    $('h4, button').not('.check').toggleClass('dark-grey-text text-white')
    $('.list-panel a').toggleClass('dark-grey-text')

    $('footer, .card').toggleClass('dark-card-admin')
    $('body, .navbar').toggleClass('white-skin navy-blue-skin')
    $(this).toggleClass('white text-dark btn-outline-black')
    $('body').toggleClass('dark-bg-admin')
    $('h6, .card, p, td, th, i, li a, h4, input, label').not(
      '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white')
    $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3')
    $('.gradient-card-header').toggleClass('white black lighten-4')
    $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border')

    var src = ($('.logo-airbus').attr('src') === 'img/airbus.png') ? 'img/airbus-white.png' : 'img/airbus.png'
    $('.logo-airbus').attr('src', src)
    $('.hr').toggleClass('hr-dark')
    $('.text-black-50').toggleClass('text-white-50')
    $('.title').toggleClass('text-white')

  })
})

$.extend( $.fn.pickadate.defaults, {
  monthsFull: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
  monthsShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
  weekdaysFull: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ],
  weekdaysShort: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
  today: 'Aujourd\'hui',
  clear: 'Effacer',
  close: 'Fermer',
  firstDay: 1,
  format: 'dd mmmm yyyy',
  formatSubmit: 'yyyy/mm/dd',
  labelMonthNext:"Mois suivant",
  labelMonthPrev:"Mois précédent",
  labelMonthSelect:"Sélectionner un mois",
  labelYearSelect:"Sélectionner une année",
  max: new Date(),
})