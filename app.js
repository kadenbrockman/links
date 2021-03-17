const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.25 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#profileinfo", { opacity: 0 }, { opacity: 1, duration: .5 }, "-=.5");
tl.fromTo("#links", { opacity: 0 }, { opacity: 1, duration: .5, delay: -.35 });
