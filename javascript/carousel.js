window.onload = function () {
    var $carousel = $(".carousel-items");
    var captionVisible = false;

    $carousel.on("init", function (event, slick) {
        var totalSlides = slick.slideCount;
        $(".counter").text("1/" + totalSlides);
    });

    $carousel.on("afterChange", function (event, slick, currentSlide) {
        var $counter = $carousel.find(".counter");
        var currentIndex = currentSlide + 1;
        var totalSlides = slick.slideCount;
        $counter.text(currentIndex + "/" + totalSlides);
    });

    $carousel.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
    });

    $(".arrow-left").click(function () {
        $carousel.slick("slickPrev");
    });

    $(".arrow-right").click(function () {
        $carousel.slick("slickNext");
    });
};