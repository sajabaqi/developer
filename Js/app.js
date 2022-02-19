$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        // if($(window).scrollTop()> 0){
        //     $('.top').show();
        // }else{
        //     $('.top').hide();
        // }
    });
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", ()=>{
        if(window.pageYOffset> 100){
            toTop.classList.add("active");
        }else{
            toTop.classList.remove("active");
        }
    })
    // $('a[href*="#"]').on('click', function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top,
    //     },
    //     500,
    //     'linear'
    //     );
    // });
});