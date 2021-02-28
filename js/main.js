
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0,
      duration: "100%"
      // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  //The GreenSock Animation Platform (GSAP)
  //Tweens 란 GSAP의 기본적인 애니메이션
  // var tween1 = TweenMax.to('#animate1', 3, {
  //   opacity:0,
  //   backgroundColor:"red",
  //   ease: Power4.easeOut
  // }).from('#animate1', 2, {
  //   opacity:1
  // });



  // var tween1 = TweenMax.to("#animate1", 5, {
  //   opacity:0,
  //   backgroundColor:"#000",
  //   ease: Power4.easeOut
  // }).to("#animate1", 1, {
  //   scaleX: 1.5,
  //   scaleY: 1.5,
  //   backgroundColor:"#454545",
  //   ease: Back.easeOut
  // });
  // var $txt = $("#trigger1 .txt");
  // $txt.lettering();

  // ani();

  // function ani(){
  //   var tween1 = TweenMax.staggerFromTo($("#trigger1 span"), 0.5, {
  //       ease: Back.easeOut.config(1.7),
  //       opacity: 0,
  //       bottom: -100
  //     }, {
  //       ease: Back.easeOut.config(1.7),
  //       opacity: 1,
  //       bottom: 0
  //     }, 0.05
  //   );
  // }

 var timeline = new TimelineMax();

 var tween1 = TweenMax.staggerFromTo($(".top__inner"), 5, {
    ease: Back.easeOut.config(1, 0.3),
    opacity: 1,
    scaleX:1.5,
    scaleY:1.5
  }, {
    ease: Back.easeOut.config(1, 0.3),
    opacity: 0,
    scaleX:1,
    scaleY:1 
  }
);

// var tween2 = TweenMax.fromTo($("trigger1__txt2"), 2, {
//     ease: Back.easeOut.config(1, 0.3),
//     opacity: 0
//   }, {
//     ease: Back.easeOut.config(1, 0.3),
//     opacity: 1
//   }
// );

// var tween3 = TweenMax.to($("#trigger1 .txt2"), 10, {
//     ease: Back.easeOut.config(1, 0.3),
//     opacity: 0    
//   }
// );

  // var tween2 = TweenMax.from('#animate2', 1, {
  //   opacity:1,
  //   backgroundColor:"blue",
  // })

  // get all slides
  // var slides = document.querySelectorAll(".contents");

  // create scene for every slide
  // for (var i=0; i<slides.length; i++) {
  //   var scene1 = new ScrollMagic.Scene({
  //       triggerElement: slides[i]
  //     })
  //     .setPin(slides[i], {pushFollowers: false})
  //     .addIndicators({
  //       suffix:0,
  //       colorTrigger: "transparent", //트리거 팁 색상 
  //       colorStart: "transparent", //스타트 팁 색상 
  //       colorEnd: "transparent", //종료 팁 색상,
  //       indent:0
  //     })
  //     .addTo(controller);
  // }

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#top"
  })
  timeline.add(tween1);
  //.add(tween2).add(tween3)
  scene2.setPin("#top", {pushFollowers: false})
  scene2.setTween(timeline)
  scene2.addTo(controller)



  var typed = new Typed("#typed_string", {
    strings:["#웹퍼블리셔", "#프론트엔드개발자", "#일잘러", "#세상 꼼꼼함", "#소통을 잘함", "#친화력 갑" ],
    typeSpeed:100,
    backSpeed:100,
    fadeOut:false,
    smartBackspace:true,

    loop:true
  });

});



