window.onload = function () {
    if (window.innerWidth > 600) {
        imgFlex();
    }
    var elements = gsap.utils.toArray('img, video, iframe, h1, h2, h3, aside, p');
    elements.forEach((element) => {
        gsap.fromTo(element,
            { // start
                y: 10,
                opacity: 0,
                filter: 'blur(10px) drop-shadow(-2px -1px 20px #ffffff6e)'
            },
            { // end
                y: 0,
                opacity: 1,
                filter: 'blur(0px) drop-shadow(-2px -1px 7px rgba(255, 255, 255, 0.27))',
                duration: .75,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    })
}


function imgFlex() {
    // get all all imgs inside all flex-two tags
    // for each img, get aspect ratio // set its flex = img aspect ratio
    let imgs = document.querySelectorAll(".flex-container > img");
    for (let i = 0; i < imgs.length; i++) {
        let ogHTML = imgs[i].outerHTML;
        imgs[i].outerHTML = `<div class="jsAdjust" style="flex: ${imgs[i].naturalWidth / imgs[i].naturalHeight}">${ogHTML}</div>`;
    }
}