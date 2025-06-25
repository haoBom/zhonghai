import $ from 'jquery';
import { _if_Exists } from './tools.js';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, Draggable, InertiaPlugin);

// 无缝滚动
_if_Exists('[data-rolling]', () => {
    /*!
     * 技术支持 黄俊豪
     * 运用插件 GSPA Draggable Inertia
     * 
     * 【如果要抄，抄好一点。】
     * 
     * 2025-04-28 更新内容
     * 1、无缝滚动
     * 2、支持拖拽
     * 3、支持移入移出暂停播放
     * 4、支持单元素无缝滚动
     * 5、支持循环体无缝滚动
     * 
     */

    var RollingName = 'data-rolling';
    $(`[${RollingName}]`).each(function () {
        var $Rolling = $(this),
            filters = $Rolling.children().filter('img,.p_video,svg'),
            sw = $Rolling.width(),
            rw = '',
            da = $Rolling.data('duration') || 60,
            dc = $Rolling.data('rolling') || '-x',
            dcMap = { '-x': { xPercent: -100 }, 'x': { xPercent: 100 } },
            dcValue = dcMap[dc],
            initial = { ease: "none", repeat: -1, duration: da, ...dcValue },
            Loopbody = false;

        // 格式化标签
        if (!$Rolling.is("div")) {
            var newElement = $(`<div class="${$Rolling.attr('class')}" ${RollingName}="${$Rolling.data('rolling')}">`).html($Rolling.html());
            newElement.replaceAll($Rolling);
            $Rolling = newElement;
        }

        var rll = () => {
            // 更新结构
            $Rolling.html($("<div class='rolling--contents'>").append($Rolling.contents()));
            filters.closest('.rolling--contents').css({ 'min-width': '100%' });


            // 针对是否是循环体来进行不同操作
            if ($Rolling.hasClass('p_list')) {
                let ilength = $Rolling.children().children().length;
                $Rolling.children().css({ 'min-width': '200%' });
                Loopbody = true
            }
            else {
                $Rolling.children().html($("<div>").append($Rolling.children().contents()))
                var rc = $Rolling.children(), items = rc.contents();
                rw = rc.children().width();
                while (sw > rw) {
                    var clone = items.clone();
                    rc.append(clone);
                    rw += clone.width();
                }
            }

            $Rolling.append($Rolling.contents().clone());
            Loopbody && $Rolling.find('.p_loopitem').removeClass('p_loopitem');

            gsap.registerPlugin(Draggable, InertiaPlugin)

            var $All_rc = gsap.utils.toArray(".rolling--contents"),
                proxy = $('<div></div>')[0],
                dp = 3000,
                progressWrap = gsap.utils.wrap(0, 1),
                spin = gsap.fromTo($All_rc, {
                    xPercent: 0
                }, {
                    ...initial
                }),
                startProgress;

            Draggable.create(proxy, {
                trigger: "[data-rolling]",
                type: "x",
                inertia: true,
                allowNativeTouchScrolling: true,
                onPress() {
                    gsap.killTweensOf(spin);
                    spin.timeScale(0);
                    startProgress = spin.progress();
                },
                onDrag: updateX,
                onThrowUpdate: updateX,
                onRelease() {
                    if (!this.tween || !this.tween.isActive()) {
                        gsap.to(spin, { timeScale: 1, duration: 1 });
                    }
                },
                onThrowComplete() {
                    gsap.to(spin, { timeScale: 1, duration: 1 });
                }
            });

            function updateX() {
                let p = startProgress + (this.startX - this.x) / dp;
                spin.progress(progressWrap(p));
            }

            $Rolling.on("mouseenter", () => { spin.pause() });
            $Rolling.on("mouseleave", () => { spin.resume() });
        };

        rll();
    });
});

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

_if_Exists('.circle-ani', () => {
    const $circle = $('.circle-ani circle');

    gsap.set($circle, { drawSVG: '100%' });

    $('.circle-ani').on('mouseenter', function () {
        const $c = $(this).find('circle');

        // 立即停止当前动画并重设为 0%
        gsap.killTweensOf($c);

        gsap.set($c, { drawSVG: '0%' });

        gsap.to($c, {
            duration: 2,
            drawSVG: '100%',
            ease: 'power2.out',
            overwrite: 'auto'
        });
    });
});

// 内页头部圆圈动画
_if_Exists('.i5', () => {
    gsap.set(".news_img", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelectorAll(".news_img");
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