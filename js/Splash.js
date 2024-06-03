$(window).on("load", function(){
    if($(window).width() > 850){
        logoIn();
        logoSpread();
        textIn();
        footerIn();
    } else {
        logoIn();
        textIn();
        footerIn();
    }
})

$(window).on('resize', function(){
    if ($(window).width() > 850){
        logoSpread();
    } else {
        logoShrink();
    }
})

function logoIn() {
    $('.logo').delay(500).animate({
        opacity: '1',
        marginTop: '0'
    }, 1000, "easeOutQuint");
}

function logoSpread(){
    $('#LogoL').delay(0).animate({
        left: '0',
    },800, "easeOutQuint")
    $('#LogoR').delay(0).animate({
        right: '0'
    }, 800, "easeOutQuint")
}

function logoShrink() {
    $('#LogoL').delay(0).animate({
        left: '2%',
    }, 5, "easeOutQuint")
    $('#LogoR').delay(0).animate({
        right: '2%'
    }, 5, "easeOutQuint")
}

function textIn() {
    $('.buttonContainer').delay(2300).animate({
        opacity: '1'
    }, 1000)
    $('#mainText').delay(2000).animate({
        opacity: '1'
    }, 500)
    $('#subText').delay(2000).animate({
        opacity: '1'
    }, 500)
}

function footerIn(){
    $('#footer').delay(2500).animate({
        opacity: '1'
    }, 500)
}