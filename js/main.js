
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

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".top"
  })
  timeline.add(tween1);
  //.add(tween2).add(tween3)
  scene2.setPin(".top", {pushFollowers: false})
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



