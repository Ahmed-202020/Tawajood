$(function(){
    $(".navbar .navbar-nav .nav-link").on("click" , function(e){
        e.preventDefault();
        $(".navbar .navbar-nav .nav-link").removeClass("active") ; 
        $(this).addClass("active") ; 
    }) ;
    $(".navbar .navbar-nav .lang").on("click" , function(){
        $(this).removeClass("active") ; 
        if($(this).text()=== "العربية"){
            console.log("yes") ; 
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
    
    $(".content .customers").countTo() ; 
    $(".content .projects").countTo() ; 
});