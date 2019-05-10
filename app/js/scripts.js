$(document).ready(function(){
    //$('.slider').slick({
    //    dots: true,
    //    arrows: true,
    //    infinite: true,
    //    speed: 300,
    //    slidesToShow: 1
    //});
    //
    $('.feedback__button').on('click', function () {
        $('.feedback__form').toggleClass('feedback__form--visually')
    });

    $('[data-toggle="datepicker-start"]').datepicker({
        format: 'dd mm yyyy',
        language: 'ru-RU',
        trigger: '.feedback__date-button[name="dayStart"]'
    });

    $('[data-toggle="datepicker-end"]').datepicker({
        format: 'dd mm yyyy',
        language: 'ru-RU',
        trigger: '.feedback__date-button[name="dayFinish"]'
    });

    //$('.feedback__date-button').data('datepicker');
    //
    //var popup = new Popup({
    //    'popup': '.modal__popup',
    //    'closeModal': '.modal__popup-close',
    //    'overlay': '.modal__overlay'
    //});
    //
    //$('.contacts__map-link').on('click', function (event) {
    //    event.preventDefault();
    //    popup.open($('.modal__map'));
    //});
    //
    //$('.contacts__link').on('click', function (event) {
    //    event.preventDefault();
    //    popup.open($('.modal__write'));
    //});

    //$('.option').removeClass('product__option--nojs');
    //$('.product').hover(
    //    function(){
    //        $(this).children('.option').slideDown();
    //    },
    //    function(){
    //        $(this).children('.option').slideUp();
    //    }
    //);
    //var catalogList = $('.catalog__list');
    //catalogList.removeClass('no-js');
    //
    //$('html:not(.catalog__list):not(.catalog__title)').on('click', function (event) {
    //    catalogList.css('display', 'none');
    //});
    //
    //$('.catalog__title').on('click', function (event) {
    //    event.stopPropagation();
    //    if (catalogList.css('display') == 'flex') {
    //        catalogList.css('display', 'none');
    //    } else {
    //        catalogList.css('display', 'flex');
    //    }
    //
    //});
    //
    //catalogList.on('click', function (event) {
    //    event.stopPropagation();
    //    catalogList.css('display', 'flex');
    //});
    //
    //var feturesItem = $('.features__item');
    //feturesItem.on('click', function () {
    //    feturesItem.removeClass('features__item--active');
    //    $(this).addClass('features__item--active');
    //});
    //

});