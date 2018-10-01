// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);
// document.addEventListener('touchend', handleTouchEnd, false);

window.onload = function(){
    var main_div = document.getElementById("main_div");
    main_div.addEventListener('touchstart', handleTouchStart, false);
    main_div.addEventListener('touchmove', handleTouchMove, false);
    main_div.addEventListener('touchend', handleTouchEnd, false);
};

var xDown = null;                                                        
var yDown = null;                                                        
function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                
function handleTouchMove(evt) {
    // if ( ! xDown || ! yDown ) {
    //     return;
    // }

    // var xUp = evt.touches[0].clientX;                                    
    // var yUp = evt.touches[0].clientY;

    // var xDiff = xDown - xUp;
    // var yDiff = yDown - yUp;
    // if(Math.abs( xDiff )+Math.abs( yDiff )>150){ //to deal with to short swipes

    //     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    //         if ( xDiff > 0 ) {/* left swipe */ 
    //             alert('left!');
    //         } else {/* right swipe */
    //             alert('right!');
    //         }                       
    //     } else {
    //         if ( yDiff > 0 ) {/* up swipe */
    //             alert('Up!'); 
    //         } else { /* down swipe */
    //             alert('Down!');
    //         }                                                                 
    //     }
    //     /* reset values */
    //     xDown = null;
    //     yDown = null;
    // }
};

function handleTouchEnd(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.changedTouches[0].clientX;                                    
    var yUp = evt.changedTouches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if(Math.abs( xDiff )+Math.abs( yDiff )>150){ //to deal with to short swipes

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {/* left swipe */ 
                alert('left!');
            } else {/* right swipe */
                alert('right!');
            }                       
        } else {
            if ( yDiff > 0 ) {/* up swipe */
                alert('Up!'); 
            } else { /* down swipe */
                alert('Down!');
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}