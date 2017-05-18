$(document).ready(function () {
    window.onload = function () {
        $('.preloader').hide('slow');
    }
    //instantiate a TimelineLite 
    var l1Timeline = new TimelineLite({
        paused: true,
    });
    var l2Timeline = new TimelineLite({
        paused: true,
    });
    var l3Timeline = new TimelineLite({
        paused: true,
    });
    var initTimeline = new TimelineLite({
        paused: true
    })

    // Landingpage animations
    initTimeline.staggerFrom('.lvl-0 >img', 0.3, {
        opacity: 0,
        bottom: 30
    }, 0.5)
    initTimeline.play();

    //open close level 0

    $('.lvl-0').on('click', function () {
        var offset = $(this);
        var imgheight = $(this).find('img').height();
        var topOffset = ($(window).height() / 2) - imgheight / 2;
        l1Timeline.clear();
        l1Timeline.to('.topmenu', 0.6, {
            top: '-100px',
            ease: Power2.easeOut
        });
        l1Timeline.set('.topmenu .logo', {
            position: 'fixed',
            left: 15,

        })
        l1Timeline.to('.topmenu h4', '0.3', {
            position: 'fixed',
            top: 5,
            scale: 1.4,
            left: 40,
            color: '#444',
            fontWeight: 700,
            fontSize: '20px',
            ease: Power3.easeOut
        })
        l1Timeline.to($(this).find('p'), 0.3, {
            opacity: 0
        }, .14);
        l1Timeline.to($('.overlay'), 0.3, {
            zIndex: 1,
            opacity: 1
        }, .14);
        l1Timeline.set($(this), {
            className: "+=currentFixed",
            // className:'-=rested'

        }, -0.1);
        var that = this;
        l1Timeline.to($(this), 0.5, {
            className: "+=destFixed",
            top: '41vh'
        }, -0.1);
        l1Timeline.to($('.triangle'), 1, {
            borderWidthRight: '10vw'
        })

        l1Timeline.to(".level-1", 1, {
            left: "11vw",
            ease: Elastic.easeOut.config(0.5, 0.35),
            opacity: 1,
            zIndex: 2,

        }, 0.5);

        l1Timeline.play();
    })
    // close level 0

    $("#close-level-1").on('click', function () {
        TweenMax.to($(this), 0.3, {
            rotation: "-=30_cw",
            ease: Power3.easeOut
        })

        l1Timeline.set($(this), {
            css: {
                clearProps: "all"
            }
        })
        l3Timeline.reverse();
        l2Timeline.reverse();
        l1Timeline.reverse();


    })
    $(".topmenu h4").on('click', function () {
        l1Timeline.set($(this), {
            css: {
                clearProps: "all"
            }
        })
        l3Timeline.reverse();
        l2Timeline.reverse();
        l1Timeline.reverse();


    })
    $(".lvl-0.destFixed.currentFixed").on('click', function () {
        alert();
        l1Timeline.reverse();
        l2Timeline.reverse();
        l3Timeline.reverse();
    })

    // //open close level 1

    $('body').on('click', '.lvl-1', function () {
        var offset = $(this).offset();
        //console.log(offset.width())
        var offsetH1 = $(this).parent().find('h1').offset;
        var that = this;
        l2Timeline.clear();

        l2Timeline.to($(this).parent().parent(), 0.1, {
            css: {
                borderWidth: 0,
                backgroundColor: 'transparent'
            }
        });

        l2Timeline.to($(this).parent().parent().find('p'), 0.1, {
            opacity: 0,
        }, "-=0.2");
        l2Timeline.staggerTo($(this).parent().parent().siblings(), 0.2, {
            opacity: 0
        }, -0.1);

        l2Timeline.set($(this), {
            className: "+=currentFixed"
        }, -0.1);

        var topOffset = '44vh';
        //var topOffset = ($(window).height() / 2) -($('.lvl-1').find('img').height()/2) ;
        l2Timeline.to($(this), 0.5, {

            className: "+=destFixed",
            top: topOffset,

        }, -0.1);


        l2Timeline.to(".level-2", 1, {
            left: "22vw",
            ease: Elastic.easeOut.config(0.5, 0.35),
            opacity: 1,

        }, "+=0.3");

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
        l3Timeline.reverse();
        l2Timeline.reverse();
        l2Timeline.reversed(true)
        console.log(l2Timeline.reversed());
        //$(this).off('click');
    })


    // //open close level 3

    $('body').on('click', '.lvl-2', function () {
        var offset = $(this);
        var that = this;
        l3Timeline.clear();
        var topOffset = $(window).height() / 2 - ($(this).find('img').height() / 2);
        l3Timeline.to($(this).parent().parent(), 0.1, {
            css: {
                borderWidth: 0,
                backgroundColor: 'transparent'
            }
        }, -0.7);
        l3Timeline.to($(this).parent().parent().find('p'), 0.1, {
            opacity: 0,
            height: 0
        }, -0.7);
        l3Timeline.staggerTo($(this).parent().parent().siblings(), 0.1, {
            opacity: 0,
            right: 20
        }, 0.1);
        l3Timeline.set($(this), {
            className: "+=currentFixed"

        }, -0.1);
        l3Timeline.to($(this), 0.2, {

            className: "+=destFixed",
            top: '47vh',


        });


        l3Timeline.to(".level-3", 1, {
            left: "31vw",
            ease: Elastic.easeOut.config(0.5, 0.35),
            opacity: 1,

        }, 1.5);

        l3Timeline.play();
        l3Timeline.reversed(false)

        //$(this).on('click', myFunc);

        console.log(l3Timeline.reversed())
    })
    // close level 2

    $("#close-level-3").on('click', function () {
        l3Timeline.set($(this), {
            css: {
                clearProps: "all"
            }
        });

        l3Timeline.reverse();
        l3Timeline.reversed(true)
        console.log(l3Timeline.reversed());
        //$(this).off('click');
    })

    // $('body').on('mouseover','.col-item',function(){
    //     $(this).addClass('col-item__dark')
    //     //TweenLite.set(this,{className:'+=col-item__dark'})
    // })
    // $('body').on('mouseout','.col-item',function(){
    //     $(this).removeClass('col-item__dark')
    //      //TweenLite.set(this,{className:'-=col-item__dark'})
    // })

    //     $('.col-item').hover(function(){
    //         alert();

    // },function(){
    // 	TweenLite.to(this,1,{scale:11,ease:Elastic.ease})
    // })

    // Search Animations

    var searchTl = new TimelineLite({
        paused: true,
        //autoRemoveChildren:true
    });
    searchTl.to('#searchbox', 0.4, {
        right: '65px',
        width: 250
    })
    searchTl.to($('.searchresult'), 0.4, {
        right: '0',
        ease: Power1.easeOut
    })


    $('#searchbox').on('click', function () {
        //searchTl.reversed() ? searchTl.play() : searchTl.reverse(); 
        searchTl.play()

    })

    $('.searchclose').on('click', function () {
        searchTl.reverse();
    })

    $('.lvl-0 > img,.lvl-1 >img,.lvl-2 >img').hover(function () {
        $(this).addClass('animated pulse')
    }, function () {
        $(this).removeClass('animated pulse')
    })

$('body').on('click','.launchreview',function(){
    TweenLite.to('.feedback-container',0.5,{right:0,ease:Power4.easeOut})
})
$('body').on('click','.feedback-container .close',function(){
    TweenLite.to('.feedback-container',0.5,{right:'-25vw',ease:Power4.easeOut})
})

})
var myFunc = function (event) {
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