ityped. init(document.querySelector(".ityped"), {
    strings: ['freelancer', 'developer', 'graphic designer'],
    
})
 $(function mySlick(){
     $(".slider-cn").not('.slick-initialized').slick({
        centerMode: true,
        autoplay: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        infinite: true,
        speed: 1000,
        autoplaySpeed:1800,
        asNavFor:'.text',
     });
 })

 $(function mySlick(){
     $(".text").not('.slick-initialized').slick({
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplaySpeed:1800,
        asNavFor:'.slider-cn',
     });
 })