import $ from 'jquery';
import { _if_Exists } from './tools.js';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 内页头部圆圈动画
_if_Exists('.r_ring', () => {
    gsap.from('.r1', {
        x: 100,
        y: -200,
        opacity: 0,
        duration: 2,
        ease: "back.out(1.3)"
    })
    gsap.from('.r2', {
        x: -100,
        y: -300,
        opacity: 0,
        duration: 1.6,
        ease: "back.out(1.3)"
    })
});

// 内页头部圆圈动画
_if_Exists('.a5_mouse', () => {
    gsap.set(".a5_mouse", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".a5_mouse");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });
});

// _if_Exists('.se4_list', () => {
//     let i4_Timeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.se4',
//             start: "top top",
//             end: '+=1400',
//             scrub: true,
//             pin: true,
//             pinSpacing: true,
//             markers: true
//         }
//     });
//     i4_Timeline.to('.se4_item:nth-child(2)', {
//         y: 0
//     })
//         .to('.se4_item:nth-child(3)', {
//             y: "0"
//         })
// });