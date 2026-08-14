module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/data/packages.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPackage",
    ()=>getPackage,
    "packages",
    ()=>packages
]);
const packages = [
    {
        slug: "sangeet",
        name: "Sangeet",
        description: "Four hours of candid coverage for music, colour and every dance-floor moment.",
        longDescription: "From the first rehearsal to the last song, we document the joyful movement, family performances and all the little glances that make your Sangeet yours.",
        price: "₹35,000",
        image: "/package-sangeet.jpg",
        inclusions: [
            "4 hours of coverage",
            "Candid and traditional photography",
            "Edited online gallery"
        ]
    },
    {
        slug: "haldi",
        name: "Haldi",
        description: "A sun-soaked morning of portraits, details and all the joyful rituals.",
        longDescription: "A warm, vibrant record of the people, colours and playful rituals that make a Haldi ceremony feel like pure celebration.",
        price: "₹28,000",
        image: "/package-haldi-pratik.jpg",
        inclusions: [
            "3 hours of coverage",
            "Detail and family portraits",
            "Edited online gallery"
        ]
    },
    {
        slug: "destination",
        name: "Destination",
        description: "A tailored multi-day story, from the welcome dinner to the last farewell.",
        longDescription: "For celebrations that travel, we create an unhurried visual story of the destination, your guests and every event in between.",
        price: "₹1,25,000",
        image: "/package-destination.jpg",
        inclusions: [
            "Multi-day coverage",
            "Travel planning consultation",
            "Curated edited gallery"
        ]
    },
    {
        slug: "complete-wedding",
        name: "Complete Wedding",
        description: "Full wedding-day coverage with two photographers and a beautifully edited gallery.",
        longDescription: "A complete, considered record of your wedding day—from the quiet anticipation of getting ready to the final celebration with everyone you love.",
        price: "₹1,80,000",
        image: "/package-complete-wedding.jpg",
        inclusions: [
            "Two photographers",
            "Full-day coverage",
            "Premium edited gallery"
        ]
    },
    {
        slug: "pre-wedding",
        name: "Pre-Wedding",
        description: "A relaxed couple session designed around your favourite place and pace.",
        longDescription: "A natural portrait session made around the two of you, with space for connection, laughter and photographs that feel entirely personal.",
        price: "₹30,000",
        image: "/package-pre-wedding.jpg",
        inclusions: [
            "Location planning",
            "2-hour session",
            "Curated edited gallery"
        ]
    },
    {
        slug: "mehendi",
        name: "Mehendi",
        description: "A vivid, candid record of every intricate detail and joyful ritual.",
        longDescription: "The delicate artwork, the hands that hold yours and the energy of everyone gathered around—preserved with warmth and intention.",
        price: "₹30,000",
        image: "/client-story-hands.jpg",
        inclusions: [
            "4 hours of coverage",
            "Detail photography",
            "Edited online gallery"
        ]
    },
    {
        slug: "engagement",
        name: "Engagement",
        description: "A beautiful beginning, captured with timeless portraits and honest emotion.",
        longDescription: "A graceful visual record of the first celebration: the rituals, the joy of two families coming together and portraits you will keep forever.",
        price: "₹32,000",
        image: "/package-engagement.jpg",
        inclusions: [
            "4 hours of coverage",
            "Couple portraits",
            "Edited online gallery"
        ]
    },
    {
        slug: "reception",
        name: "Reception",
        description: "Elegant evening coverage for speeches, celebrations and your first dance.",
        longDescription: "An atmospheric record of the evening—beautiful details, the welcome of your guests, meaningful toasts and the celebration after the ceremony.",
        price: "₹42,000",
        image: "/package-reception.jpg",
        inclusions: [
            "5 hours of coverage",
            "Candid event photography",
            "Edited online gallery"
        ]
    }
];
function getPackage(slug) {
    return packages.find((item)=>item.slug === slug);
}
}),
"[project]/app/packages/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$packages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/packages.js [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Packages — Stories House"
};
function PackagesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "packages-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "inner-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "wordmark",
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: "brand-logo",
                            src: "/storieshouse-black-cropped.png",
                            alt: "Stories House",
                            width: 160,
                            height: 69,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/packages/page.jsx",
                            lineNumber: 8,
                            columnNumber: 111
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "site-nav",
                        "aria-label": "Main navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: "HOME"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 296
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#studio-experience",
                                children: "EXPERIENCE"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 322
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/packages",
                                children: "PACKAGES"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 372
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                children: "CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 410
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 241
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/packages/page.jsx",
                lineNumber: 8,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "packages-page-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "STORIES HOUSE COLLECTIONS"
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 501
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Every chapter,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 571
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "beautifully held."
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 577
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 553
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Thoughtful photography collections for every moment that brings your people together."
                    }, void 0, false, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 608
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/packages/page.jsx",
                lineNumber: 8,
                columnNumber: 461
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "packages-page-grid",
                "aria-label": "Photography package collection",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$packages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["packages"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/packages/${item.slug}`,
                        className: "packages-page-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image,
                                alt: `${item.name} photography`,
                                fill: true,
                                sizes: "(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 903
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "packages-page-card-overlay"
                            }, void 0, false, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 1032
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "PHOTOGRAPHY PACKAGE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.jsx",
                                        lineNumber: 8,
                                        columnNumber: 1084
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.jsx",
                                        lineNumber: 8,
                                        columnNumber: 1110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "EXPLORE ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/packages/page.jsx",
                                        lineNumber: 8,
                                        columnNumber: 1130
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/packages/page.jsx",
                                lineNumber: 8,
                                columnNumber: 1079
                            }, this)
                        ]
                    }, item.slug, true, {
                        fileName: "[project]/app/packages/page.jsx",
                        lineNumber: 8,
                        columnNumber: 818
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/packages/page.jsx",
                lineNumber: 8,
                columnNumber: 710
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/packages/page.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/packages/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/packages/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0km_jcd._.js.map