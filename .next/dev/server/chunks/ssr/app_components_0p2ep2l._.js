module.exports = [
"[project]/app/components/DepthCarousel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const DEFAULT_ITEMS = [
    {
        image: 'https://picsum.photos/seed/depth1/800/1000',
        alt: 'Slide 1'
    },
    {
        image: 'https://picsum.photos/seed/depth2/800/1000',
        alt: 'Slide 2'
    },
    {
        image: 'https://picsum.photos/seed/depth3/800/1000',
        alt: 'Slide 3'
    },
    {
        image: 'https://picsum.photos/seed/depth4/800/1000',
        alt: 'Slide 4'
    },
    {
        image: 'https://picsum.photos/seed/depth5/800/1000',
        alt: 'Slide 5'
    },
    {
        image: 'https://picsum.photos/seed/depth6/800/1000',
        alt: 'Slide 6'
    }
];
const clamp = (v, min, max)=>Math.min(Math.max(v, min), max);
const normalizeItem = (it)=>typeof it === 'string' ? {
        image: it,
        alt: ''
    } : it;
const DepthCarousel = ({ items = DEFAULT_ITEMS, cardWidth = 300, cardHeight = 380, radius = 18, tint = '#05060a', depth = 220, spread = 90, tilt = 22, tiltDirection = 'right', perspective = 1400, visibleCards = 4, falloff = 0.2, blur = 6, duration = 700, ease = 'power3.out', autoplay = false, autoplayDelay = 3200, loop = true, showControls = true, showIndicators = true, onChange, className = '' })=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(Array.isArray(items) ? items : []).map(normalizeItem), [
        items
    ]);
    const count = data.length;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const overlayRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const focusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const tweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const cfgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const onChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onChange);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wheelTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reducedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    onChangeRef.current = onChange;
    cfgRef.current = {
        count,
        depth,
        spread,
        tilt,
        tiltDirection,
        visibleCards,
        falloff,
        blur,
        duration,
        ease,
        loop,
        cardWidth,
        autoplayDelay
    };
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pos)=>{
        const cfg = cfgRef.current;
        const n = cfg.count;
        if (!n) return;
        const dir = cfg.tiltDirection === 'left' ? -1 : 1;
        const sc = scaleRef.current;
        for(let i = 0; i < n; i++){
            const el = cardRefs.current[i];
            if (!el) continue;
            let d = i - pos;
            if (cfg.loop && n > 1) {
                d = (d % n + n) % n;
                if (d > n / 2) d -= n;
            }
            const back = Math.max(0, d);
            const az = Math.abs(d);
            const shown = az <= cfg.visibleCards + 0.5;
            const tz = -cfg.depth * d;
            const tx = dir * cfg.spread * d;
            const ry = dir * cfg.tilt * clamp(d, 0, 1);
            let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
            if (!shown) opacity = 0;
            const brightness = Math.max(0.15, 1 - back * cfg.falloff);
            const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, back / Math.max(1, cfg.visibleCards) * cfg.blur) : 0;
            const zi = Math.round(2000 - d * 20);
            el.style.transform = `translate(-50%, -50%) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
            el.style.opacity = opacity.toFixed(3);
            el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
            el.style.zIndex = String(zi);
            el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';
            const ov = overlayRefs.current[i];
            if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
        }
    }, []);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((idx)=>{
        setActive(idx);
        onChangeRef.current?.(idx, data[idx]);
    }, [
        data
    ]);
    const tweenTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target, animate)=>{
        tweenRef.current?.kill();
        const cfg = cfgRef.current;
        const proxy = {
            p: posRef.current
        };
        const dur = animate && !reducedRef.current ? cfg.duration / 1000 : 0;
        tweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(proxy, {
            p: target,
            duration: dur,
            ease: cfg.ease,
            onUpdate: ()=>{
                posRef.current = proxy.p;
                layout(proxy.p);
            },
            onComplete: ()=>{
                const n = cfg.count;
                if (n > 0) posRef.current = (posRef.current % n + n) % n;
                layout(posRef.current);
            }
        });
    }, [
        layout
    ]);
    const setFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rawIndex, animate = true)=>{
        const cfg = cfgRef.current;
        const n = cfg.count;
        if (!n) return;
        const idx = cfg.loop ? (rawIndex % n + n) % n : clamp(rawIndex, 0, n - 1);
        let delta = idx - posRef.current;
        if (cfg.loop && n > 1) {
            delta = (delta % n + n) % n;
            if (delta > n / 2) delta -= n;
        }
        tweenTo(posRef.current + delta, animate);
        if (idx !== focusRef.current) {
            focusRef.current = idx;
            notify(idx);
        }
    }, [
        tweenTo,
        notify
    ]);
    const navigateBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((step)=>setFocus(focusRef.current + step, true), [
        setFocus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        const ro = new ResizeObserver((entries)=>{
            const w = entries[0].contentRect.width;
            const cfg = cfgRef.current;
            const needed = cfg.cardWidth + Math.abs(cfg.spread) * 2 + 120;
            scaleRef.current = clamp(w / needed, 0.4, 1);
            layout(posRef.current);
        });
        ro.observe(root);
        return ()=>ro.disconnect();
    }, [
        layout
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = rootRef.current;
        if (!el) return;
        const onWheel = (e)=>{
            const cfg = cfgRef.current;
            if (cfg.count < 2) return;
            e.preventDefault();
            tweenRef.current?.kill();
            const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            const delta = e.deltaMode === 1 ? raw * 24 : raw;
            const step = clamp(delta / (cfg.cardWidth * 0.9), -0.6, 0.6);
            posRef.current += step;
            layout(posRef.current);
            if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
            wheelTimerRef.current = setTimeout(()=>setFocus(Math.round(posRef.current), true), 130);
        };
        el.addEventListener('wheel', onWheel, {
            passive: false
        });
        return ()=>{
            el.removeEventListener('wheel', onWheel);
            if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
        };
    }, [
        layout,
        setFocus
    ]);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const cfg = cfgRef.current;
        if (cfg.count < 2) return;
        tweenRef.current?.kill();
        dragRef.current = {
            x: e.clientX,
            startPos: posRef.current,
            lastX: e.clientX,
            lastT: performance.now(),
            v: 0,
            moved: false,
            id: e.pointerId
        };
    }, []);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const drag = dragRef.current;
        if (!drag) return;
        const cfg = cfgRef.current;
        const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
        const dx = e.clientX - drag.x;
        if (!drag.moved && Math.abs(dx) > 4) {
            drag.moved = true;
            rootRef.current?.setPointerCapture(drag.id);
        }
        if (!drag.moved) return;
        const now = performance.now();
        const dt = Math.max(now - drag.lastT, 1);
        drag.v = (e.clientX - drag.lastX) / dt;
        drag.lastX = e.clientX;
        drag.lastT = now;
        posRef.current = drag.startPos - dx / stepPx;
        layout(posRef.current);
    }, [
        layout
    ]);
    const onPointerEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const drag = dragRef.current;
        if (!drag) return;
        dragRef.current = null;
        if (!drag.moved) return;
        const cfg = cfgRef.current;
        const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
        const projected = posRef.current - drag.v * 180 / stepPx;
        setFocus(Math.round(projected), true);
    }, [
        setFocus
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateBy(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateBy(1);
        }
    }, [
        navigateBy
    ]);
    const onCardClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (dragRef.current?.moved) return;
        const story = data[index];
        if (story?.href) router.push(story.href);
    }, [
        data,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        reducedRef.current = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!autoplay || reducedRef.current || count < 2) return;
        const root = rootRef.current;
        let hovered = false;
        let focused = false;
        const stop = ()=>{
            if (autoTimerRef.current) clearInterval(autoTimerRef.current);
            autoTimerRef.current = null;
        };
        const start = ()=>{
            stop();
            autoTimerRef.current = window.setInterval(()=>{
                if (!hovered && !focused) navigateBy(1);
            }, Math.max(cfgRef.current.autoplayDelay, 600));
        };
        const onEnter = ()=>{
            hovered = true;
        };
        const onLeave = ()=>{
            hovered = false;
        };
        const onFocusIn = ()=>{
            focused = true;
        };
        const onFocusOut = ()=>{
            focused = false;
        };
        root?.addEventListener('mouseenter', onEnter);
        root?.addEventListener('mouseleave', onLeave);
        root?.addEventListener('focusin', onFocusIn);
        root?.addEventListener('focusout', onFocusOut);
        start();
        return ()=>{
            stop();
            root?.removeEventListener('mouseenter', onEnter);
            root?.removeEventListener('mouseleave', onLeave);
            root?.removeEventListener('focusin', onFocusIn);
            root?.removeEventListener('focusout', onFocusOut);
        };
    }, [
        autoplay,
        autoplayDelay,
        count,
        navigateBy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        layout(posRef.current);
    }, [
        layout,
        depth,
        spread,
        tilt,
        tiltDirection,
        visibleCards,
        falloff,
        blur,
        cardWidth,
        cardHeight,
        radius,
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            tweenRef.current?.kill();
            if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
            if (autoTimerRef.current) clearInterval(autoTimerRef.current);
        }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: `depth-carousel ${className}`.trim(),
        style: {
            '--dc-perspective': `${perspective}px`
        },
        role: "group",
        "aria-roledescription": "carousel",
        "aria-label": "Depth carousel",
        tabIndex: 0,
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerEnd,
        onPointerCancel: onPointerEnd,
        onKeyDown: onKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "depth-carousel__stage",
                ref: stageRef,
                children: data.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "depth-carousel__card",
                        ref: (el)=>cardRefs.current[i] = el,
                        style: {
                            width: cardWidth,
                            height: cardHeight,
                            borderRadius: radius
                        },
                        "aria-roledescription": "slide",
                        "aria-label": `${i + 1} of ${count}`,
                        "aria-hidden": active !== i,
                        onClick: ()=>onCardClick(i),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "depth-carousel__img",
                                src: item.image,
                                alt: item.alt || '',
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "depth-carousel__tint",
                                ref: (el)=>overlayRefs.current[i] = el,
                                style: {
                                    background: tint
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "depth-carousel__caption",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 380,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "depth-carousel__link",
                                href: item.href,
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 4
                                },
                                "aria-label": `View ${item.title || item.alt || 'client'} story`
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/components/DepthCarousel.jsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/DepthCarousel.jsx",
                lineNumber: 362,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showControls && count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "depth-carousel__arrow depth-carousel__arrow--prev",
                        "aria-label": "Previous slide",
                        onClick: ()=>navigateBy(-1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            width: "20",
                            height: "20",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 5l-7 7 7 7",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/DepthCarousel.jsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/DepthCarousel.jsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "depth-carousel__arrow depth-carousel__arrow--next",
                        "aria-label": "Next slide",
                        onClick: ()=>navigateBy(1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            width: "20",
                            height: "20",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 5l7 7-7 7",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DepthCarousel.jsx",
                                lineNumber: 419,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/DepthCarousel.jsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/DepthCarousel.jsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DepthCarousel.jsx",
                lineNumber: 394,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showIndicators && count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "depth-carousel__dots",
                role: "tablist",
                "aria-label": "Slides",
                children: data.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": active === i,
                        "aria-label": `Go to slide ${i + 1}`,
                        className: `depth-carousel__dot${active === i ? ' is-active' : ''}`,
                        onClick: ()=>setFocus(i, true)
                    }, i, false, {
                        fileName: "[project]/app/components/DepthCarousel.jsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/DepthCarousel.jsx",
                lineNumber: 433,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DepthCarousel.jsx",
        lineNumber: 348,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DepthCarousel;
}),
"[project]/app/components/PackageCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PackageCard({ name, description, price, image, slug }) {
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    function handleMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        setTilt({
            x: ((event.clientY - rect.top) / rect.height - 0.5) * -11,
            y: ((event.clientX - rect.left) / rect.width - 0.5) * 11
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "package-card-scene",
        onPointerMove: handleMove,
        onPointerLeave: ()=>setTilt({
                x: 0,
                y: 0
            }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "package-card",
            style: {
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "package-card-image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/app/components/PackageCard.jsx",
                        lineNumber: 18,
                        columnNumber: 45
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PackageCard.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "package-card-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "package-card-index",
                            children: "PHOTOGRAPHY PACKAGE"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PackageCard.jsx",
                            lineNumber: 19,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/app/components/PackageCard.jsx",
                            lineNumber: 19,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "package-card-description",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/PackageCard.jsx",
                            lineNumber: 19,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "package-card-view",
                            href: `/packages/${slug}`,
                            children: [
                                "VIEW PACKAGE ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PackageCard.jsx",
                                    lineNumber: 19,
                                    columnNumber: 252
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PackageCard.jsx",
                            lineNumber: 19,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "package-card-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "STARTING AT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PackageCard.jsx",
                                            lineNumber: 19,
                                            columnNumber: 313
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: price
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PackageCard.jsx",
                                            lineNumber: 19,
                                            columnNumber: 339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PackageCard.jsx",
                                    lineNumber: 19,
                                    columnNumber: 310
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/contact?package=${encodeURIComponent(name)}`,
                                    "aria-label": `Enquire about ${name}`,
                                    children: [
                                        "ENQUIRE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/PackageCard.jsx",
                                            lineNumber: 19,
                                            columnNumber: 472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PackageCard.jsx",
                                    lineNumber: 19,
                                    columnNumber: 367
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PackageCard.jsx",
                            lineNumber: 19,
                            columnNumber: 273
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PackageCard.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PackageCard.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/PackageCard.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/PackagesCarousel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PackageCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PackageCard.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function cardsPerPage() {
    if ("TURBOPACK compile-time truthy", 1) return 3;
    //TURBOPACK unreachable
    ;
}
function PackagesCarousel({ packages }) {
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resetTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [perPage, setPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const displayPackages = [
        ...packages,
        ...packages.slice(0, perPage)
    ];
    const moveTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target, behavior = 'smooth')=>{
        const viewport = viewportRef.current;
        const targetCard = viewport?.children[target];
        if (!viewport || !targetCard) return;
        viewport.scrollTo({
            left: targetCard.offsetLeft - viewport.offsetLeft,
            behavior
        });
    }, []);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (resetTimerRef.current) return;
        const next = index + 1;
        moveTo(next);
        if (next === packages.length) {
            setIndex(0);
            resetTimerRef.current = window.setTimeout(()=>{
                moveTo(0, 'auto');
                resetTimerRef.current = null;
            }, 650);
        } else {
            setIndex(next);
        }
    }, [
        index,
        moveTo,
        packages.length
    ]);
    const goPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (resetTimerRef.current) return;
        const previous = index === 0 ? packages.length - 1 : index - 1;
        moveTo(previous, index === 0 ? 'auto' : 'smooth');
        setIndex(previous);
    }, [
        index,
        moveTo,
        packages.length
    ]);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        if (resetTimerRef.current) return;
        moveTo(target);
        setIndex(target);
    }, [
        moveTo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resize = ()=>{
            const nextPerPage = cardsPerPage();
            setPerPage(nextPerPage);
            setIndex((current)=>Math.min(current, packages.length - 1));
        };
        resize();
        window.addEventListener('resize', resize);
        return ()=>window.removeEventListener('resize', resize);
    }, [
        packages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (packages.length < 2) return undefined;
        const timer = window.setInterval(goNext, 5000);
        return ()=>window.clearInterval(timer);
    }, [
        goNext,
        packages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>window.clearTimeout(resetTimerRef.current), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "packages-carousel",
        "aria-roledescription": "carousel",
        "aria-label": "Wedding photography packages",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: viewportRef,
                className: "packages-viewport",
                onScroll: (event)=>{
                    const firstCard = event.currentTarget.children[0];
                    if (!firstCard) return;
                    const gap = Number.parseFloat(getComputedStyle(event.currentTarget).columnGap) || 0;
                    const current = Math.round(event.currentTarget.scrollLeft / (firstCard.offsetWidth + gap));
                    if (current < packages.length) setIndex(current);
                },
                children: displayPackages.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PackageCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...item
                    }, `${item.name}-${itemIndex}`, false, {
                        fileName: "[project]/app/components/PackagesCarousel.jsx",
                        lineNumber: 84,
                        columnNumber: 51
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/PackagesCarousel.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "packages-carousel-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "packages-carousel-navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: goPrevious,
                                "aria-label": "Previous packages",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PackagesCarousel.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: goNext,
                                "aria-label": "Next packages",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PackagesCarousel.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PackagesCarousel.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "packages-pagination",
                        role: "tablist",
                        "aria-label": "Package pages",
                        children: packages.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Show ${item.name} package`,
                                "aria-selected": index === itemIndex,
                                className: index === itemIndex ? 'is-active' : '',
                                onClick: ()=>goTo(itemIndex)
                            }, item.name, false, {
                                fileName: "[project]/app/components/PackagesCarousel.jsx",
                                lineNumber: 92,
                                columnNumber: 46
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/PackagesCarousel.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PackagesCarousel.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PackagesCarousel.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_components_0p2ep2l._.js.map