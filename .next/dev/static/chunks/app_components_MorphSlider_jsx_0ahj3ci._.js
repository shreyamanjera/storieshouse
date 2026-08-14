(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/MorphSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MorphSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ogl@1.0.11/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ogl@1.0.11/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ogl@1.0.11/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ogl@1.0.11/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ogl@1.0.11/node_modules/ogl/src/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TRANSITIONS = {
    melt: 0,
    ripple: 1,
    shear: 2,
    swirl: 3
};
const DEFAULT_ITEMS = [
    {
        image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop',
        caption: 'One'
    },
    {
        image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop',
        caption: 'Two'
    },
    {
        image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop',
        caption: 'Three'
    },
    {
        image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=1600&auto=format&fit=crop',
        caption: 'Four'
    }
];
const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragmentShader = `
precision highp float;

uniform sampler2D tCurrent;
uniform sampler2D tNext;
uniform vec2 uResolution;
uniform vec2 uCurrentSize;
uniform vec2 uNextSize;
uniform float uProgress;
uniform float uDir;
uniform int uMode;
uniform float uIntensity;
uniform float uScale;
uniform float uAberration;
uniform float uDrift;
uniform float uTime;
uniform float uReduce;
uniform vec2 uPointer;
uniform vec3 uOverlay;

varying vec2 vUv;

const float PI = 3.14159265359;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

vec2 coverUV(vec2 uv, vec2 res, vec2 img) {
  float rA = res.x / max(res.y, 1.0);
  float iA = img.x / max(img.y, 1.0);
  vec2 s = vec2(1.0);
  float ratio = rA / max(iA, 0.0001);
  if (ratio > 1.0) {
    s.y = 1.0 / ratio;
  } else {
    s.x = ratio;
  }
  return (uv - 0.5) * s + 0.5;
}

void main() {
  float p = clamp(uProgress, 0.0, 1.0);
  float env = sin(p * PI);

  vec2 uv = vUv;

  uv += vec2(sin(uTime * 0.25 + uv.y * 4.0), cos(uTime * 0.22 + uv.x * 4.0)) * uDrift * 0.008;
  uv = (uv - 0.5) * (1.0 - uDrift * 0.02 * sin(uTime * 0.4)) + 0.5;

  vec2 uvC = uv;
  vec2 uvN = uv;
  float m = smoothstep(0.0, 1.0, p);

  if (uReduce < 0.5) {
    if (uMode == 3) {
      vec2 c = uv - 0.5;
      float r = length(c);
      float ang = env * uIntensity * 3.5 * (1.0 - r);
      uvC = rot(ang) * c + 0.5;
      uvN = rot(-ang) * c + 0.5;
      m = smoothstep(0.0, 1.0, p);
    } else if (uMode == 1) {
      float d = distance(uv, uPointer);
      float ring = p * 1.6;
      float wave = sin((d - ring) * 30.0) * env;
      vec2 dir = normalize(uv - uPointer + 1e-4);
      vec2 disp = dir * wave * uIntensity * 0.25;
      uvC = uv + disp;
      uvN = uv + disp * 0.6;
      m = 1.0 - smoothstep(ring - 0.03, ring + 0.03, d);
    } else if (uMode == 2) {
      float slices = 14.0;
      float row = floor(uv.y * slices);
      float rnd = hash11(row);
      vec2 disp = vec2((rnd - 0.5) * env * uIntensity * 0.6, 0.0);
      uvC = uv + disp;
      uvN = uv + disp;
      float localX = uDir > 0.0 ? uv.x : 1.0 - uv.x;
      float th = p * 1.5 - 0.25 + (rnd - 0.5) * 0.25;
      m = 1.0 - smoothstep(th - 0.06, th + 0.06, localX);
    } else {
      float nn = fbm(uv * uScale + uTime * 0.03);
      float warp = fbm(uv * uScale * 1.7 - uTime * 0.02);
      vec2 g = vec2(nn, warp) - 0.5;
      uvC = uv + g * uIntensity * 0.5 * p;
      uvN = uv - g * uIntensity * 0.5 * (1.0 - p);
      m = smoothstep(nn - 0.15, nn + 0.15, p);
    }
  }

  vec2 sC = coverUV(uvC, uResolution, uCurrentSize);
  vec2 sN = coverUV(uvN, uResolution, uNextSize);

  float ca = uReduce < 0.5 ? uAberration * env * 0.03 : 0.0;

  vec3 colC = vec3(
    texture2D(tCurrent, sC + vec2(ca, 0.0)).r,
    texture2D(tCurrent, sC).g,
    texture2D(tCurrent, sC - vec2(ca, 0.0)).b
  );
  vec3 colN = vec3(
    texture2D(tNext, sN + vec2(ca, 0.0)).r,
    texture2D(tNext, sN).g,
    texture2D(tNext, sN - vec2(ca, 0.0)).b
  );

  vec3 col = mix(colC, colN, m);

  float vig = smoothstep(1.25, 0.25, length(uv - 0.5));
  col = mix(col, uOverlay, (1.0 - vig) * 0.28);

  gl_FragColor = vec4(col, 1.0);
}
`;
function makeFallbackTexture(gl) {
    const size = 4;
    const data = new Uint8Array(size * size * 4);
    for(let i = 0; i < size * size; i++){
        data[i * 4] = 24;
        data[i * 4 + 1] = 24;
        data[i * 4 + 2] = 28;
        data[i * 4 + 3] = 255;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](gl, {
        image: data,
        width: size,
        height: size,
        generateMipmaps: false
    });
}
function hexToRgb(hex) {
    let h = (hex || '#000000').replace('#', '');
    if (h.length === 3) {
        h = h.split('').map((c)=>c + c).join('');
    }
    const n = parseInt(h, 16);
    return [
        (n >> 16 & 255) / 255,
        (n >> 8 & 255) / 255,
        (n & 255) / 255
    ];
}
class MorphEngine {
    constructor(container, { items, startIndex, reducedMotion, getOptions, onIndexChange, dprCap }){
        this.container = container;
        this.items = items;
        this.getOptions = getOptions;
        this.onIndexChange = onIndexChange;
        this.reducedMotion = reducedMotion;
        this.current = startIndex;
        this.animating = false;
        this.dragging = false;
        this.dragDir = 0;
        this.shownIndex = startIndex;
        this.tween = null;
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
            alpha: false,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, dprCap)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0.05, 0.05, 0.06, 1);
        this.canvas = this.gl.canvas;
        this.canvas.className = 'morph-slider-canvas';
        container.appendChild(this.canvas);
        this.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](this.gl);
        this.textures = this.items.map(()=>makeFallbackTexture(this.gl));
        this.sizes = this.items.map(()=>[
                1,
                1
            ]);
        const opts = this.getOptions();
        this.program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](this.gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                tCurrent: {
                    value: this.textures[this.current]
                },
                tNext: {
                    value: this.textures[this.current]
                },
                uResolution: {
                    value: [
                        1,
                        1
                    ]
                },
                uCurrentSize: {
                    value: this.sizes[this.current]
                },
                uNextSize: {
                    value: this.sizes[this.current]
                },
                uProgress: {
                    value: 0
                },
                uDir: {
                    value: 1
                },
                uMode: {
                    value: TRANSITIONS[opts.transition] ?? 0
                },
                uIntensity: {
                    value: opts.intensity
                },
                uScale: {
                    value: opts.scale
                },
                uAberration: {
                    value: opts.aberration
                },
                uDrift: {
                    value: opts.drift
                },
                uTime: {
                    value: 0
                },
                uReduce: {
                    value: reducedMotion ? 1 : 0
                },
                uPointer: {
                    value: [
                        0.5,
                        0.5
                    ]
                },
                uOverlay: {
                    value: hexToRgb(opts.overlayColor)
                }
            }
        });
        this.mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.boundContextLost = this.onContextLost.bind(this);
        this.canvas.addEventListener('webglcontextlost', this.boundContextLost, false);
        this.resizeObserver = new ResizeObserver(()=>this.resize());
        this.resizeObserver.observe(container);
        this.resize();
        this.loadTextures();
        this.boundLoop = this.loop.bind(this);
        this.raf = requestAnimationFrame(this.boundLoop);
    }
    loadTextures() {
        this.items.forEach((item, index)=>{
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = item.image;
            img.onload = ()=>{
                const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ogl$40$1$2e$0$2e$11$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](this.gl, {
                    generateMipmaps: false
                });
                texture.image = img;
                this.textures[index] = texture;
                this.sizes[index] = [
                    img.naturalWidth || 1,
                    img.naturalHeight || 1
                ];
                if (index === this.current) {
                    this.program.uniforms.tCurrent.value = texture;
                    this.program.uniforms.uCurrentSize.value = this.sizes[index];
                }
            };
            img.onerror = ()=>{};
        });
    }
    resize() {
        const rect = this.container.getBoundingClientRect();
        const w = Math.max(rect.width, 1);
        const h = Math.max(rect.height, 1);
        this.renderer.setSize(w, h);
        this.program.uniforms.uResolution.value = [
            this.gl.canvas.width,
            this.gl.canvas.height
        ];
    }
    syncOptions() {
        const opts = this.getOptions();
        this.program.uniforms.uMode.value = TRANSITIONS[opts.transition] ?? 0;
        this.program.uniforms.uIntensity.value = opts.intensity;
        this.program.uniforms.uScale.value = opts.scale;
        this.program.uniforms.uAberration.value = opts.aberration;
        this.program.uniforms.uDrift.value = opts.drift;
        this.program.uniforms.uOverlay.value = hexToRgb(opts.overlayColor);
    }
    loop(t) {
        this.program.uniforms.uTime.value = t * 0.001;
        if (!this.dragging && !this.animating) this.syncOptions();
        this.renderer.render({
            scene: this.mesh
        });
        this.raf = requestAnimationFrame(this.boundLoop);
    }
    wrap(i) {
        const n = this.items.length;
        return (i % n + n) % n;
    }
    prepareNext(dir) {
        const target = this.wrap(this.current + dir);
        this.program.uniforms.tCurrent.value = this.textures[this.current];
        this.program.uniforms.uCurrentSize.value = this.sizes[this.current];
        this.program.uniforms.tNext.value = this.textures[target];
        this.program.uniforms.uNextSize.value = this.sizes[target];
        this.program.uniforms.uDir.value = dir;
        return target;
    }
    goTo(dir) {
        if (this.animating || this.dragging || this.items.length < 2) return;
        const opts = this.getOptions();
        if (!opts.loop) {
            const raw = this.current + dir;
            if (raw < 0 || raw > this.items.length - 1) return;
        }
        this.syncOptions();
        const target = this.prepareNext(dir);
        this.animating = true;
        this.announce(target);
        const duration = this.reducedMotion ? Math.min(opts.duration, 0.4) : opts.duration;
        this.tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(this.program.uniforms.uProgress, {
            value: 0
        }, {
            value: 1,
            duration,
            ease: opts.ease,
            onComplete: ()=>this.commit(target)
        });
    }
    announce(index) {
        if (index === this.shownIndex) return;
        this.shownIndex = index;
        if (this.onIndexChange) this.onIndexChange(index);
    }
    commit(target) {
        this.current = target;
        this.program.uniforms.tCurrent.value = this.textures[target];
        this.program.uniforms.uCurrentSize.value = this.sizes[target];
        this.program.uniforms.uProgress.value = 0;
        this.animating = false;
        this.tween = null;
        this.announce(target);
    }
    next() {
        this.goTo(1);
    }
    prev() {
        this.goTo(-1);
    }
    setPointer(x, y) {
        this.program.uniforms.uPointer.value = [
            x,
            y
        ];
    }
    beginDrag() {
        if (this.animating || this.items.length < 2) return false;
        this.dragging = true;
        this.dragDir = 0;
        this.syncOptions();
        return true;
    }
    drag(ndx) {
        if (!this.dragging) return;
        const opts = this.getOptions();
        const dir = ndx < 0 ? 1 : -1;
        if (!opts.loop) {
            const raw = this.current + dir;
            if (raw < 0 || raw > this.items.length - 1) {
                this.program.uniforms.uProgress.value = 0;
                return;
            }
        }
        if (dir !== this.dragDir) {
            this.dragDir = dir;
            this.prepareNext(dir);
        }
        const progress = Math.min(Math.abs(ndx), 1);
        this.program.uniforms.uProgress.value = progress;
        this.announce(progress > 0.5 ? this.wrap(this.current + dir) : this.current);
    }
    endDrag() {
        if (!this.dragging) return;
        this.dragging = false;
        const p = this.program.uniforms.uProgress.value;
        if (this.dragDir === 0) return;
        const target = this.wrap(this.current + this.dragDir);
        const duration = this.reducedMotion ? 0.3 : 0.5;
        this.animating = true;
        if (p > 0.4) {
            this.announce(target);
            this.tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(this.program.uniforms.uProgress, {
                value: 1,
                duration,
                ease: 'power2.out',
                onComplete: ()=>this.commit(target)
            });
        } else {
            this.announce(this.current);
            this.tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(this.program.uniforms.uProgress, {
                value: 0,
                duration,
                ease: 'power2.out',
                onComplete: ()=>{
                    this.animating = false;
                    this.tween = null;
                }
            });
        }
    }
    onContextLost(e) {
        e.preventDefault();
        cancelAnimationFrame(this.raf);
    }
    destroy() {
        cancelAnimationFrame(this.raf);
        if (this.tween) this.tween.kill();
        this.resizeObserver.disconnect();
        this.canvas.removeEventListener('webglcontextlost', this.boundContextLost);
        this.textures.forEach((tex)=>{
            if (tex && tex.texture) this.gl.deleteTexture(tex.texture);
        });
        if (this.program && this.program.program) this.gl.deleteProgram(this.program.program);
        const ext = this.gl.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
        if (this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas);
    }
}
function MorphSlider({ items = DEFAULT_ITEMS, startIndex = 0, transition = 'melt', duration = 1.1, ease = 'power2.inOut', intensity = 0.55, scale = 2.4, aberration = 0.35, drift = 0.4, autoplay = false, autoplayDelay = 4, loop = true, radius = 16, overlayColor = '#000000', showCaptions = true, showControls = true, showIndicators = true, className = '', ...props }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startIndex);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const optsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    optsRef.current = {
        transition,
        duration,
        ease,
        intensity,
        scale,
        aberration,
        drift,
        overlayColor,
        loop
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MorphSlider.useEffect": ()=>{
            if (!containerRef.current) return undefined;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const engine = new MorphEngine(containerRef.current, {
                items,
                startIndex,
                reducedMotion,
                dprCap: 2,
                getOptions: {
                    "MorphSlider.useEffect": ()=>optsRef.current
                }["MorphSlider.useEffect"],
                onIndexChange: setIndex
            });
            engineRef.current = engine;
            setIndex(startIndex);
            return ({
                "MorphSlider.useEffect": ()=>{
                    engine.destroy();
                    engineRef.current = null;
                }
            })["MorphSlider.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MorphSlider.useEffect"], [
        items,
        startIndex
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MorphSlider.useCallback[handleNext]": ()=>engineRef.current?.next()
    }["MorphSlider.useCallback[handleNext]"], []);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MorphSlider.useCallback[handlePrev]": ()=>engineRef.current?.prev()
    }["MorphSlider.useCallback[handlePrev]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MorphSlider.useEffect": ()=>{
            if (!autoplay || hovering) return undefined;
            const id = setTimeout({
                "MorphSlider.useEffect.id": ()=>engineRef.current?.next()
            }["MorphSlider.useEffect.id"], Math.max(autoplayDelay, 1) * 1000);
            return ({
                "MorphSlider.useEffect": ()=>clearTimeout(id)
            })["MorphSlider.useEffect"];
        }
    }["MorphSlider.useEffect"], [
        autoplay,
        autoplayDelay,
        hovering,
        index
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MorphSlider.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return undefined;
            let startX = 0;
            let width = 1;
            let active = false;
            const onDown = {
                "MorphSlider.useEffect.onDown": (e)=>{
                    const rect = el.getBoundingClientRect();
                    width = rect.width || 1;
                    startX = e.clientX;
                    const px = (e.clientX - rect.left) / rect.width;
                    const py = (e.clientY - rect.top) / rect.height;
                    engineRef.current?.setPointer(px, 1 - py);
                    active = engineRef.current?.beginDrag() ?? false;
                    if (active && el.setPointerCapture) {
                        try {
                            el.setPointerCapture(e.pointerId);
                        } catch  {}
                    }
                }
            }["MorphSlider.useEffect.onDown"];
            const onMove = {
                "MorphSlider.useEffect.onMove": (e)=>{
                    if (!active) return;
                    const ndx = (e.clientX - startX) / width;
                    engineRef.current?.drag(ndx);
                }
            }["MorphSlider.useEffect.onMove"];
            const onUp = {
                "MorphSlider.useEffect.onUp": ()=>{
                    if (!active) return;
                    active = false;
                    engineRef.current?.endDrag();
                }
            }["MorphSlider.useEffect.onUp"];
            el.addEventListener('pointerdown', onDown);
            el.addEventListener('pointermove', onMove);
            el.addEventListener('pointerup', onUp);
            el.addEventListener('pointercancel', onUp);
            return ({
                "MorphSlider.useEffect": ()=>{
                    el.removeEventListener('pointerdown', onDown);
                    el.removeEventListener('pointermove', onMove);
                    el.removeEventListener('pointerup', onUp);
                    el.removeEventListener('pointercancel', onUp);
                }
            })["MorphSlider.useEffect"];
        }
    }["MorphSlider.useEffect"], []);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MorphSlider.useCallback[onKeyDown]": (e)=>{
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrev();
            }
        }
    }["MorphSlider.useCallback[onKeyDown]"], [
        handleNext,
        handlePrev
    ]);
    const hasCaptions = items.some((item)=>item.caption);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `morph-slider ${className}`.trim(),
        style: {
            borderRadius: `${radius}px`,
            '--ms-swap': `${(duration * 0.66).toFixed(3)}s`,
            '--ms-dot': `${(duration * 0.45).toFixed(3)}s`
        },
        onMouseEnter: ()=>setHovering(true),
        onMouseLeave: ()=>setHovering(false),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "morph-slider-stage",
                role: "group",
                "aria-roledescription": "carousel",
                "aria-label": "Image morph slider",
                tabIndex: 0,
                onKeyDown: onKeyDown
            }, void 0, false, {
                fileName: "[project]/app/components/MorphSlider.jsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            showCaptions && hasCaptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "morph-slider-caption",
                "aria-live": "polite",
                children: items.map((item, i)=>item.caption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": i === index ? undefined : true,
                        className: `morph-slider-caption-text ${i === index ? 'is-active' : ''}`,
                        children: item.caption
                    }, i, false, {
                        fileName: "[project]/app/components/MorphSlider.jsx",
                        lineNumber: 623,
                        columnNumber: 15
                    }, this) : null)
            }, void 0, false, {
                fileName: "[project]/app/components/MorphSlider.jsx",
                lineNumber: 620,
                columnNumber: 9
            }, this),
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "morph-slider-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "morph-slider-btn",
                        "aria-label": "Previous slide",
                        onClick: handlePrev,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            width: "18",
                            height: "18",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 5l-7 7 7 7",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MorphSlider.jsx",
                                lineNumber: 639,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/MorphSlider.jsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/MorphSlider.jsx",
                        lineNumber: 637,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "morph-slider-btn",
                        "aria-label": "Next slide",
                        onClick: handleNext,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            width: "18",
                            height: "18",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 5l7 7-7 7",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MorphSlider.jsx",
                                lineNumber: 651,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/MorphSlider.jsx",
                            lineNumber: 650,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/MorphSlider.jsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MorphSlider.jsx",
                lineNumber: 636,
                columnNumber: 9
            }, this),
            showIndicators && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "morph-slider-indicators",
                role: "tablist",
                "aria-label": "Slides",
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": i === index,
                        "aria-label": `Go to slide ${i + 1}`,
                        className: `morph-slider-dot ${i === index ? 'is-active' : ''}`,
                        onClick: ()=>{
                            const engine = engineRef.current;
                            if (!engine || i === index) return;
                            engine.goTo(i > index ? 1 : -1);
                        }
                    }, i, false, {
                        fileName: "[project]/app/components/MorphSlider.jsx",
                        lineNumber: 667,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/MorphSlider.jsx",
                lineNumber: 665,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MorphSlider.jsx",
        lineNumber: 598,
        columnNumber: 5
    }, this);
}
_s(MorphSlider, "awjduxN72q9EK9e9bKLC8jtaJak=");
_c = MorphSlider;
var _c;
__turbopack_context__.k.register(_c, "MorphSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_MorphSlider_jsx_0ahj3ci._.js.map