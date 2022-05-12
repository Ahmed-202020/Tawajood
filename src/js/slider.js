function slider(){
    var owl = $("#customer-slider");
    let cards = document.querySelectorAll(".customer-slider .card") ; 
    if(cards.length >= 3){
        owl.owlCarousel({
            loop: true ,
            margin: 15 ,
            navigation: true,
            items: 3 ,
            smartSpeed: 1000,
            dots: true,
            autoplay: true ,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
    }else{
        owl.owlCarousel({
            loop: false ,
            margin: 15 ,
            navigation: true,
            items: 3 ,
            smartSpeed: 1000,
            dots: false,
            autoplay: false,
            center:false,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1920: {
                    items: 3
                }
            }
        });
    }
}
slider();