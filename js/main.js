$(document).ready(function () {
    //instantiate a TimelineLite 
    var firstReversed = false;

    function slideFirst(obj) {

    }

    var l1Timeline = new TimelineLite({
        paused: true,
        //autoRemoveChildren:true
    });
    var l2Timeline = new TimelineLite({
        paused: true,
        //autoRemoveChildren:true
    });

    //open close level 1

    $('.lvl-0').on('click', function () {
        var offset = $(this).offset;

        l1Timeline.clear();
        l1Timeline.to('.topmenu', 0.6, {
            top: '-100px',
            ease: Power2.easeOut
        })
        l1Timeline.set($(this), {

            y: offset.top,
            x: offset.left,
            className: "+=currentFixed"

        }, -0.1);
        l1Timeline.to($(this), 0.5, {

            className: "+=destFixed",
            height: '100px',
            width: '100px',
            borderRadius: '50px',
            lineHeight: '100px'

        }, -0.1);
        l1Timeline.to($('.overlay'), 0.3, {
            zIndex: 1,
            opacity: 1
        }, -.04);
        l1Timeline.to(".level-1", 0.3, {
            left: "14vw",
            ease: Back.ease,
            opacity: 1,
            zIndex: 2,

        }, 0.5);
        l1Timeline.from($(".level-1").find('.closebtn'), 1, {
            css:{
                scale:0.0001
            },
            ease:Elastic.easeOut

        });
        l1Timeline.to($(".level-1").find('.closebtn'), 0.3, {
            rotation: 360,
            ease: Linear.easeOut

        });

        l1Timeline.play();
    })
    // close level 1

    $("#close-level-1").on('click', function () {
        TweenMax.to($(this), 0.3, {
            rotation: "-=30_cw",
            ease:Power3.easeOut
        })

        l1Timeline.set($(this), {
            css: {
                clearProps: "all"
            }
        })
        l1Timeline.reverse();
    })


    // //open close level 2

    $('.lvl-1').on('click', function () {
        var offset = $(this).offset;
        var that=this;
        l2Timeline.clear();

        
        l2Timeline.set($(this), {

            y: offset.top,
            x: offset.left,
            className: "+=currentFixed"

        }, -0.5);
        l2Timeline.to($(this).siblings(),0.1,{opacity:0},-0.5);
        l2Timeline.staggerTo($(this).parent().siblings(), 0.5, {
            opacity:0
        },0.1);
        l2Timeline.to($(this), 0.3, {

            className: "+=destFixed",
            height: '100px',
            width: '100px',
            borderRadius: '50px',
            lineHeight: '100px'

        });
        l2Timeline.to(".level-2", 0.3, {
            left: "28vw",
            ease: Back.ease,
            opacity: 1,

        }, 1.5);
        l2Timeline.from($(".level-2").find('.closebtn'), 0.5, {
            // css:{
            //     scale:0.0001
            // },
            ease:Elastic.easeOut

        });
        l2Timeline.to($(".level-2").find('.closebtn'), 0.5, {
            rotation: 360,
            ease: Power1.easeOut

        });
        l2Timeline.play();
        l2Timeline.reversed(false)
         
        //$(this).on('click', myFunc);
        
        console.log(l2Timeline.reversed())
    })
    // close level 2

    $("#close-level-2").on('click', function () {
        l2Timeline.set($(this), {
            css: {
                clearProps: "all"
            }
        });
        
        l2Timeline.reverse();
        l2Timeline.reversed(true)
        console.log(l2Timeline.reversed());
        //$(this).off('click');
    })




})
var myFunc = function(event){
     event.stopPropagation();
     // execute a bunch of action to preform
}
function showCategories(selected) {
    if (selected == 'a') {
        var cat = ['a', 'b', 'c', 'd'];
    }
    if (selected == 'b') {
        var cat = ['e', 'f', 'g', 'h'];
    }

    cat.forEach(function (a) {
        $('.listing').append('<li>' + a + '</li>')
    })
}


// $(document).ready(function(){

// function exmex(obj){
//     console.log(obj);
//     var tl = new TimelineMax({ paused:true });

//       return tl
//         .to('.top-categories',0.5,{opacity:0})
//         .to($(obj).siblings(),0.5,{opacity:0,display:'none'})
//         .to($(obj).find('p'),1,{opacity:0,display:'none'})
//         .to($(obj).find('h1'),1,{position:'fixed',left:30})
//         .to($(obj),1,{width:'100vw'})
// }

// function tim(){
//     alert();
// }

// var work='#category-work';



// $('.top-category__blocks > div').on('click',function(){
//     exmex(this).play();
// })

// })