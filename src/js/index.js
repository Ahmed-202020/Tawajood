$(function(){
    $(".navbar .navbar-nav .nav-link").on("click" , function(e){
        e.preventDefault();
        $(".navbar .navbar-nav .nav-link").removeClass("active") ; 
        $(this).addClass("active") ; 
    })
});