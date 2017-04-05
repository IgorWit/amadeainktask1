jQuery('.example1 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    asNavFor: '.example1 .slider-nav',
    dots: false,
    arrows:true,    
    appendArrows: '.pr_images',
    prevArrow:'<i class="fa fa-angle-left slick-prev"></i>',
    nextArrow:'<i class="fa fa-angle-right slick-next"></i>'
});
jQuery('.example1 .slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.example1 .slider-for',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
});

jQuery('.example2 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    asNavFor: '.example2 .slider-nav',
    dots: false,
    arrows:true,    
    appendArrows: '.pr_images',
    prevArrow:'<i class="fa fa-angle-left slick-prev"></i>',
    nextArrow:'<i class="fa fa-angle-right slick-next"></i>'
});
jQuery('.example2 .slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.example2 .slider-for',
    dots: false,
    arrows:false,
    centerMode: false,
    focusOnSelect: true
});