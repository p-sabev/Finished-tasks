$(document).ready(function(){

    $('#load-content').on("click", function(){
        $('#content-5').html(' <img src="images/pc-1.png" class="pc-img">  <h3 class="text-below-images">Isometric Perspective Mock-Up</h3> ');
        $('#content-6').html(' <img src="images/pc-4.png" class="pc-img">  <h3 class="text-below-images">Blog / Magazine Flat UI Kit</h3> ');
        $(this).hide();
    });
    $('#portfolio-btn-web').on("click", function(){
        $('#content-1').html(' <img src="images/pc-5.png" class="pc-img">  <h3 class="text-below-images">Perfect web Design</h3> ');
        $('#content-2').html(' <img src="images/pc-6.png" class="pc-img">  <h3 class="text-below-images">Cellular web Design</h3> ');
        $('#content-3').html(' ');
        $('#content-4').html(' ');
        $('#content-5').html(' ');
        $('#content-6').html(' ');
        $('#load-content').hide();
        $( "#portfolio-btn-web" ).addClass( "active-link" );
        $( "#portfolio-btn-icons , #portfolio-btn-all , #portfolio-btn-apps" ).removeClass( "active-link" )
    });
    $('#portfolio-btn-apps').on("click", function(){
        $('#content-1').html(' <img src="images/pc-1.png" class="pc-img">  <h3 class="text-below-images">Isometric Perspective Mock-Up</h3> ');
        $('#content-2').html(' <img src="images/pc-2.png" class="pc-img">  <h3 class="text-below-images">Time Zone App UI</h3> ');
        $('#content-3').html(' ');
        $('#content-4').html(' ');
        $('#content-5').html(' ');
        $('#content-6').html(' ');
        $('#load-content').hide();
        $( "#portfolio-btn-apps" ).addClass( "active-link" );
        $( "#portfolio-btn-icons , #portfolio-btn-all , #portfolio-btn-web" ).removeClass( "active-link" )
    });
    $('#portfolio-btn-icons').on("click", function(){
        $('#content-1').html(' <img src="images/pc-3.png" class="pc-img">  <h3 class="text-below-images">viro media players ui</h3> ');
        $('#content-2').html(' <img src="images/pc-4.png" class="pc-img">  <h3 class="text-below-images">Blog / Magazine Flat UI Kit</h3> ');
        $('#content-3').html(' ');
        $('#content-4').html(' ');
        $('#content-5').html(' ');
        $('#content-6').html(' ');
        $('#load-content').hide();
        $( "#portfolio-btn-icons" ).addClass( "active-link" );
        $( "#portfolio-btn-web , #portfolio-btn-all , #portfolio-btn-apps" ).removeClass( "active-link" )
    });
    $('#portfolio-btn-all').on("click", function(){
        $('#content-1').html(' <img src="images/pc-1.png" class="pc-img">  <h3 class="text-below-images">Isometric Perspective Mock-Up</h3> ');
        $('#content-2').html(' <img src="images/pc-2.png" class="pc-img">  <h3 class="text-below-images">Time Zone App UI</h3> ');
        $('#content-3').html(' <img src="images/pc-3.png" class="pc-img">  <h3 class="text-below-images">viro media players ui</h3> ');
        $('#content-4').html(' <img src="images/pc-4.png" class="pc-img">  <h3 class="text-below-images">Blog / Magazine Flat UI Kit</h3> ');
        $('#load-content').show();
        $( "#portfolio-btn-all" ).addClass( "active-link" );
        $( "#portfolio-btn-icons , #portfolio-btn-web , #portfolio-btn-apps" ).removeClass( "active-link" )
    });
});

// document.addEventListener("DOMContentLoaded", function(event) {
//     var elementToChange1 = document.getElementById("#content-1");
//     var elementToChange2 = document.getElementsByClassId("#content-2");
//     var elementToChange3 = document.getElementById("#content-3");
//     var elementToChange4 = document.getElementsByClassId("#content-4");
//     var elementToChange5 = document.getElementById("#content-5");
//     var elementToChange6 = document.getElementsByClassId("#content-6");

//     documnet.getElementById('#load-content').addEventListener( "click" , function(){

//         document.getElementById('content-5').innerHTML = " <img src="images/pc-4.png" class="pc-img">  <h3 class="text-below-images">Blog / Magazine Flat UI Kit</h3>  ";

//     });
// });