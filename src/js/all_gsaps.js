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