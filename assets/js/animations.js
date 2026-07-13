document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. تأثير البارالاكس للـ Hero Section
    gsap.to(".hero .container", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true,
        },
        y: 200,
        opacity: 0,
        duration: 1
    });

    // 2. تأثير الـ 3D عند التمرير (Portfolio Cards)
    gsap.utils.toArray(".portfolio-item").forEach((card) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 100, scale: 0.8 }, 
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1, // هذا هو السر: الحركة مرتبطة بلمسة الماوس
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. تأثير "تلاشي" للنصوص أثناء التمرير
    gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
});

