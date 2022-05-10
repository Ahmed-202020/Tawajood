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
});