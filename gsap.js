window.onload = function () {
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