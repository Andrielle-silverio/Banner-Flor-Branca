///////////////////////////////////////////
////////////////////////////////////// INIT
function init() {

    /////////////// VARS

    //---> General info
    let adWidth = gsap.getProperty("#container", "width");
    let adHeight = gsap.getProperty("#container", "height");


    ////////// ANIMATION
    //AD INIT

    //--> Step 01
    function s01() {
        let tl = gsap.timeline()
            // --> in
            .from("#copy-1", { autoAlpha: 0 })
            .to("#logo-mask", { duration: 3, width: 300, ease: "power2.out" }, "<")
            .from("#petals-1", { duration: .8, autoAlpha: 0, scale: .2, transformOrigin: "128px 62px", ease: "power1.inOut", stagger: .15 }, "<-.1")
            .from("#petals-2", { duration: .8, autoAlpha: 0, scale: .2, transformOrigin: "163px 53px", ease: "power1.inOut", stagger: .15 }, "<")
            .from("#sheets", { duration: 2.5, autoAlpha: 0, scale: .1, transformOrigin: "146px 61px", ease: "power2.out" }, "<+=1.5")
            .from("#copy2", { duration: .6, autoAlpha: 0, scale: 0.5, ease: "power2.out", transformOrigin: "150px 169px" }, ">-.5")
            .from(".contact", { duration: .5, autoAlpha: 0, y: 15, ease: "power2.out" }, "<+=.3")
            .from(".site", { duration: .5, autoAlpha: 0, y: 15, ease: "power2.out" }, "<.1")


        return tl
    }


    ///////////////////////////////////////////
    /////////// CONCAT STEPS INTO MAIN TIMELINE
    var TL = gsap.timeline()
        .set("img", { rotationZ: 0.02, force3D: false, transformStyle: "preserve-3d" })
        .set("#container", { opacity: 1 })
        .add(s01())

    console.log(TL.totalDuration())


};


window.onload = function(event) {
    console.log('loaded.');
    requestAnimationFrame(counter);
};

var maxFrames = 10;
var frames = 0;

function counter() {
    frames++;
    console.log(frames);
    (frames >= maxFrames) ? init(): requestAnimationFrame(counter);
}
