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
    var l3Timeline = new TimelineLite({
        paused: true,
        //autoRemoveChildren:true
    });
    //open close level 0

    $('.lvl-0').on('click', function () {
        var offset = $(this);
        var imgheight = $(this).find('img').height();
        var topOffset = ($(window).height() / 2) + 100;
        l1Timeline.clear();
        l1Timeline.to('.topmenu', 0.6, {
            top: '-100px',
            ease: Power2.easeOut
        });
        l1Timeline.set('.topmenu h4', {
            position: 'fixed',
            top: 20,
            left: 15,

        })
        l1Timeline.to('.topmenu h4', '0.3', {
            position: 'fixed',
            top: 40,
            left: 15,
            color: '#444',
            fontWeight: 700,
            ease: Power3.easeOut
        })
        l1Timeline.to($('.overlay'), 0.3, {
            zIndex: 1,
            opacity: 1
        }, .14);
        l1Timeline.set($(this), {

            y: offset.offset.top,
            x: offset.offset.left,
            width: offset.width,
            className: "+=currentFixed",
            // className:'-=rested'

        }, -0.1);
        var that = this;
        l1Timeline.to($(this), 0.5, {
            className: "+=destFixed",
        }, -0.1);
        l1Timeline.to($('.triangle'), 1, {
            borderWidthRight: '10vw'
        })

        l1Timeline.to(".level-1", 0.3, {
            left: "11vw",
            ease: Back.ease,
            opacity: 1,
            zIndex: 2,

        }, 0.5);
        l1Timeline.to($(".level-1").find('.closebtn'), 0.3, {
            rotation: 360,
            ease: Linear.easeOut

        });

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
        l1Timeline.reverse();
        l2Timeline.reverse();
        l3Timeline.reverse();
    })
    $(".lvl-0.destFixed.currentFixed").on('click', function () {
        alert();
        l1Timeline.reverse();
        l2Timeline.reverse();
        l3Timeline.reverse();
    })

    // //open close level 1

    $('body').on('click','.lvl-1', function () {
        var offset = $(this);
        console.log(offset.width())
        var offsetH1 = $(this).parent().find('h1').offset;
        var that = this;
        l2Timeline.clear();


        l2Timeline.set($(this), {

            y: offset.offset.top,
            x: offset.offset.left,
            width: offset.width(),
            className: "+=currentFixed"

        });

        //var topOffset = $(window).height() / 2 -($('.lvl-1').find('img').height()/2);
        var topOffset = '44vh';
        l2Timeline.to($(this), 0.2, {

            className: "+=destFixed",
            top: topOffset,
            // height: '80px',
            // width: '80px',
            // borderRadius: '40px',
            // lineHeight: '80px',


        });
        l2Timeline.to($(this).find('p'), 0.1, {
            opacity: 0,
            height: 0
        }, -0.7);
        l2Timeline.staggerTo($(this).parent().siblings(), 0.5, {
            opacity: 0
        }, 0.1);
        l2Timeline.to(".level-2", 0.3, {
            left: "22vw",
            ease: Back.ease,
            opacity: 1,

        }, 1.5);
        l2Timeline.from($(".level-2").find('.closebtn'), 0.2, {
            ease: Elastic.easeOut

        });
        l2Timeline.to($(".level-2").find('.closebtn'), 0.3, {
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
        l3Timeline.reverse();
        l2Timeline.reversed(true)
        console.log(l2Timeline.reversed());
        //$(this).off('click');
    })


    // //open close level 3

    $('body').on('click','.lvl-2', function () {
        var offset = $(this);
        var that = this;
        l3Timeline.clear();
        var topOffset = $(window).height() / 2 - ($(this).find('img').height() / 2);

        l3Timeline.set($(this), {

            y: offset.offset.top,
            x: offset.offset.left,
            width: offset.width(),
            className: "+=currentFixed"

        });
        l3Timeline.to($(this), 0.2, {

            className: "+=destFixed",
            top: '46vh',
            height: '60px',
            width: '60px',
            borderRadius: '30px',
            lineHeight: '60px'

        });
        l3Timeline.to($(this).find('p'), 0.1, {
            opacity: 0,
            height: 0
        }, -0.7);
        l3Timeline.staggerTo($(this).parent().siblings(), 0.1, {
            opacity: 0,
            right: 20
        }, 0.1);

        l3Timeline.to(".level-3", 0.3, {
            left: "32vw",
            ease: Back.ease,
            opacity: 1,

        }, 1.5);
        l3Timeline.from($(".level-3").find('.closebtn'), 0.5, {
            // css:{
            //     scale:0.0001
            // },
            ease: Elastic.easeOut

        });
        l3Timeline.to($(".level-3").find('.closebtn'), 0.5, {
            rotation: 360,
            ease: Power1.easeOut

        });
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