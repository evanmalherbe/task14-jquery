// Task 14 - Compulsory task

// Call the following jquery function once the page has finished loading.

$(document).ready(function() {
    // create alert once page has loaded
    alert("This page has loaded.");

    // Change background colour of page (originally set to white in styles.css file)
    $("body").css("background-color", "#cbeee1");
    
    /* Change font color, font style and font size when mouse moves over this paragraph. Reverts back to normal
    once mouse moves away. This website helped me with mouseenter and mouseleave events:
    https://api.jquery.com/category/events/mouse-events/ */

    $(".firstPara").mouseenter(function(){
        $(this).css("color","blue").css("font-style", "italic").css("font-size","25px");

    } );

    $(".firstPara").mouseleave(function(){
        $(this).css("color","black").css("font-style", "normal").css("font-size","16px");

    } );

    /* Clicking this button make it possible to click on any element on the page and it will fade away and 
    disappear. But nothing can fade away until this button is first clicked. I used the following website to help with this fadeOut function:
    https://www.w3schools.com/jquery/jquery_fade.asp . I also learned how to select several elements at once here:
    https://learn.jquery.com/using-jquery-core/selecting-elements/ and here:
    https://stackoverflow.com/questions/34460772/select-all-child-elements-of-a-class-css */

    $("button.makeElementsFade").click(function() {
        $(".wholePage *").click(function(){
            $(this).fadeOut("slow");
        }); 

    });
    
    /* Hovering over the headings of the menu slides open each section. Accordion menu - The following websites
    helped me grasp this, even though I did not end up doing it quite the way the sites suggested. 
    https://makitweb.com/accordion-with-html-css-and-jquery/#html  
    slideUp - https://www.w3schools.com/jquery/eff_slideup.asp
    slideDown - https://www.w3schools.com/jquery/eff_slidedown.asp */

    $(".menuHeading1").hover(function() {
        $(".content1").slideDown();
        $(".content2").slideUp();
        $(".content3").slideUp();
    });

    $(".menuHeading2").hover(function() {
        $(".content1").slideUp();
        $(".content3").slideUp();
        $(".content2").slideDown();

    });

    $(".menuHeading3").hover(function() {
        $(".content1").slideUp();
        $(".content2").slideUp();
        $(".content3").slideDown();
    });
    
    /* Clicking first button fades out the grape image over 3 seconds, clicking 2nd button fades the image back in over 3 seconds */
    $("button.fadeOutButton").click(function() {
        $("img.grapePic").fadeOut(3000);
    } ); 

    $("button.fadeInButton").click(function() {
        $("img.grapePic").fadeIn(3000);
    } ); 

    /* Clicking this button will stop either of the above fades from continuing. I checked to see how to use the 
    stop() function correctly here: https://www.w3schools.com/jquery/jquery_stop.asp */

    $("button.stopFade").click(function() {
        $("img.grapePic").stop();
    })

    /* Clicking this button starts several animations on the page. I looked up position (absolute, relative etc) 
    here:
    https://www.w3schools.com/css/css_positioning.asp 
    and how to animate various things here: 
    https://www.w3schools.com/jquery/jquery_animate.asp */

    $("button.startAnimation").click(function() {
        $("h1.mainHeading").css("color", "green").animate({left: '250px',fontSize: '50px'})
        .animate({left: '-=250px', fontSize: '15px'});
        
        $("h2").animate({left: '+=250px', paddingTop: '+=50px', fontSize: '+=30px'})
        .css("color", "red")
        .animate({left: '-=250px', paddingTop: '-=50px', fontSize: '20px'});

        $("img.grapePic").animate({left: '+=200px', width: '-=50px'})
        .animate({left: '-=200px', top: '+=100px'})
        .animate({width: '+=150px', top: '-=100px' })
        .animate({width: '400px'});

        $("img.strawPic").animate({bottom: '+=200px', width: '-=200px'})
        .animate({bottom: '0px', width: '400px'});

        /* These pages helped me figure out how to delay the change in background colour. It was happening instantly
        at first, but the queue() function and delay fixed that. 
        https://stackoverflow.com/questions/4283141/jquery-change-background-color ,
        https://www.w3schools.com/jquery/eff_delay.asp */

        $("div.wholePage").delay(1500).queue(function() {
            $("div.wholePage").css("background-color", "#f5d36d");
        });
    
    // End of animation button function
    });
    
// end of document.ready() function
} );