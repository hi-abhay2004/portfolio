console.log("connected")
gsap.from("#nav ,#svgp,#bg-img", {
    scale:1,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:0.1,
})
var typed = new Typed('.element', {
    strings: ["Abhay J Sharma", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
var typed = new Typed('.bio-p', {
    strings: [" Passionate web developer crafting seamless online experiences. Proficient in HTML, CSS, and JavaScript. Enthusiastic about creating visually stunning"],
    typeSpeed: 50,
    backSpeed: 50,
});
setTimeout(abt_details, 3000);
function abt_details(){
    var typed = new Typed('.bio-name', {
        strings: ["Abhay J Sharma"],
        typeSpeed: 70,
    });
    var typed = new Typed('.bio-dob', {
        strings: ["08-03-2004"],
        typeSpeed: 70,
    });
    var typed = new Typed('.bio-add', {
        strings: ["Bengaluru"],
        typeSpeed: 70,
        
    });
    var typed = new Typed('.bio-mail', {
        strings: ["abhayjsharma07@gmail.com"],
        typeSpeed: 70,
        
    });
}


// gsap.to("#nav", {
//     backgroundColor: "#000",
//     height: "70px",
//     duration: 1,
//     fontSize:"15px",
//     gap:"50px",
//    width:"700",
//    padding:"20px",
//    scrollTrigger: {
//        trigger: "#nav",
//        scroller: "body",
//        markers: true,
//        start: "top -10%",
//        end: "top -11%",
//        scrub: 2,
//     }
// })
