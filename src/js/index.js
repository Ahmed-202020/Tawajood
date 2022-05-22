$(function(){
    $(window).scroll(function(){
        var position = $(this).scrollTop() ; 
        if(position>=300){
            $("header .navbar").addClass("custom-height") ;
        }else{
            $("header .navbar").removeClass("custom-height") ;
        }
    })
    $(".navbar .navbar-nav .lang").on("click" , function(){
        $(".navbar .navbar-nav .lang").removeClass("active") ; 
        if($(this).text()=== "العربية"){
            $("html").attr("dir" , "rtl") ; 
            $("html").attr("lang" , "ar") ;
            $(this).text("English") ;  
        }else{
            console.log("no") ; 
            $("html").attr("dir" , "ltr") ; 
            $("html").attr("lang" , "en") ;
            $(this).text("العربية") ;  
        }
    });
    $(".our-services-2 .bars .btn").on("click" , function(){
        $(".our-services-2 .bars .btn").removeClass("active-bar") ; 
        $(this).addClass("active-bar") ; 
    }) ; 
    $(' [data-link="app"] ').on("click" , function(){
        $(".web-text").hide() ; 
        $(".app-text").show() ; 
        $(".btn-web").hide() ; 
        $(".btn-app").show() ; 
    }) ;
    $(' [data-link="web"] ').on("click" , function(){
        $(".app-text").hide() ; 
        $(".web-text").css("display" , "inline-block") ; 
        $(".btn-app").hide() ; 
        $(".btn-web").css("display" , "inline-block")
    });
    $(".messages .image").on("click" , function(){
        $(".contac").fadeToggle() ;
        if($(".messages .message ").hasClass("active")){
            $(".messages .message ").removeClass("active") ; 
            $(".messages .close").addClass("active") ; 
        }else{
            $(".messages .close").removeClass("active") ; 
            $(".messages .message").addClass("active") ; 
        }
    })
    new WOW().init() ; 
});