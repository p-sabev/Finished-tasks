$(document).ready(function(){

    $('section.register-form').hide();
    $('div.black-fixed').hide();

    $('button.show-form').click(function(){
        $('section.register-form').fadeIn(600);
        $('div.black-fixed').fadeIn(400);

    });

    $('button.hide-form').click(function(){
        $('section.register-form').fadeOut(200);
        $('div.black-fixed').fadeOut(400);
    });
    $('div.send-button').click(function(){
        $('section.register-form').fadeOut(600);
        $('div.black-fixed').fadeOut(400);

    });
});
