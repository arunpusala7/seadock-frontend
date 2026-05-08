import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B5tk1XAt.js";
import { L as Link } from "./router-Dn6Pn3_A.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$b = [
  ["path", { d: "M12 6v16", key: "nqf5sj" }],
  ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1", key: "y7qv08" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]
];
const Anchor = createLucideIcon("anchor", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$a);
const __iconNode$9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
];
const Fish = createLucideIcon("fish", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$6);
const __iconNode$5 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
  ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
  ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
  ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
  ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }],
  ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
  ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
  ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
  ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }],
  ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
  ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
  ["path", { d: "m7 3 3 6h4", key: "1otusx" }]
];
const Snowflake = createLucideIcon("snowflake", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$2);
const __iconNode$1 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "/assets/logo-DmYkaEwO.png";
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Our Products" },
  { href: "#contact", label: "Contact Us" }
];
function Header() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-[60] w-full bg-white/90 backdrop-blur-md border-b border-gray-100/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center shrink-0 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Seadock", className: "h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gold border border-white shadow-sm" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8 text-[10px] tracking-[0.3em] text-navy uppercase font-semibold", children: navLinks.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-gold transition-colors duration-300", children: l.label }),
        i < navLinks.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-[1px] bg-gray-200" })
      ] }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://order.seadock.in", className: "hidden md:block bg-navy text-cream px-6 py-2.5 text-[9px] tracking-[0.25em] uppercase hover:bg-navy-light transition-all duration-300 font-bold", children: "Order Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsOpen(!isOpen), className: "lg:hidden text-navy p-2 hover:bg-gray-50 rounded-full transition-colors z-[70]", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `fixed inset-0 z-[50] bg-white lg:hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col items-center justify-center gap-10 h-full px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Seadock", className: "h-12 w-auto mx-auto" }) }),
      navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setIsOpen(false), className: "font-display text-2xl tracking-[0.25em] text-navy uppercase hover:text-gold transition-all", children: l.label }, l.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://order.seadock.in", onClick: () => setIsOpen(false), className: "mt-4 w-full max-w-[180px] bg-navy text-cream py-4 text-center tracking-[0.3em] uppercase text-[9px] font-bold shadow-sm", children: "Order Now" })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-cream/90 pt-20 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-5 gap-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gold/80 flex items-center justify-center text-navy font-display text-xl", children: "S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display tracking-[0.2em]", children: "SEADOCK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] text-cream/60", children: "FRESH FROM THE SEA" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 max-w-sm leading-relaxed", children: "Coastal-fresh fish and seafood, hand-cleaned and delivered to your doorstep in 60–90 minutes. Never frozen. Never compromised." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Seadock Seafoods Pvt. Ltd. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.directoo.in", className: "hover:text-gold transition", children: "Powered by Directoo" }) })
    ] })
  ] });
}
const hero = "/assets/hero-seafood-6swK-qDp.jpg";
const boat = "/assets/story-boat-BhKFXTZM.jpg";
const img1 = "/assets/img-01-CT7J_zvS.png";
const img2 = "/assets/img-02-BXBPDfd1.png";
const img3 = "/assets/img-03-xRsM598R.png";
const img4 = "/assets/img-04-CgbNe3Zh.png";
const img5 = "/assets/img-05-0Ka7qPsw.png";
const img6 = "/assets/img-06-C1IRK1y-.png";
const img7 = "/assets/img-07-Bq6-Qyv2.png";
const img8 = "/assets/img-08-Dp6EAhom.png";
const products = [{
  name: "BASA CUBES",
  img: img1
}, {
  name: "SEA CRAB",
  img: img2
}, {
  name: "TILAPIA FILLET",
  img: img3
}, {
  name: "ROOPCHAND CURRY CUT",
  img: img4
}, {
  name: "ROHU CURRY CUT WITH HEAD",
  img: img5
}, {
  name: "PRAWNS",
  img: img6
}, {
  name: "ANCHOCIES",
  img: img7
}, {
  name: "BOMMIDAILU",
  img: img8
}];
const promises = [{
  icon: Scissors,
  title: "Fresh Cut",
  desc: "Expertly cleaned, de-scaled and portioned to your preferred style."
}, {
  icon: Snowflake,
  title: "Freshness Sealed",
  desc: "Carefully packed in insulated, food-safe boxes to preserve natural quality from source to delivery."
}, {
  icon: Timer,
  title: "60–90 Min Delivery",
  desc: "Lightning-fast dispatch from our city dock straight to your door."
}, {
  icon: Shield,
  title: "Hygienic",
  desc: "ISO-grade processing, food-safe gloves, and sanitised packaging."
}];
const testimonials = [{
  quote: "The prawns arrived so fresh they still smelled of the sea. My grandmother said it reminded her of Vizag mornings. Seadock is now a weekend ritual.",
  name: "Ananya Reddy",
  loc: "Banjara Hills, Hyderabad"
}, {
  quote: "I ordered seer fish at 7pm, and it was at my door before 7:40. Beautifully cleaned, perfectly iced. No supermarket comes close.",
  name: "Karthik Menon",
  loc: "Jubilee Hills, Hyderabad"
}, {
  quote: "As a home chef, freshness is non-negotiable. Seadock's pomfret rivals what I've bought at Mangalore harbours — that should tell you everything.",
  name: "Saanvi Iyer",
  loc: "Gachibowli, Hyderabad"
}, {
  quote: "Finding high-quality crab in the city was a struggle until I found Seadock. The meat was sweet, firm, and delivered exactly when promised.",
  name: "Rajesh Varma",
  loc: "Kondapur, Hyderabad"
}, {
  quote: "The master-cut fillets saved me 20 minutes of prep time. It's rare to find a service that understands both quality and the value of time.",
  name: "Priyanka Chawla",
  loc: "Madhapur, Hyderabad"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background border border-border text-xs tracking-[0.2em] uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            " Delivered in 60–90 mins"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display text-5xl md:text-7xl text-navy leading-[1.05]", children: [
            "The Ocean's Freshest,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-serif text-navy/80", children: "Cut & Packed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "For Your Kitchen."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground max-w-lg leading-relaxed", children: "Raw fish and seafood sourced at dawn from coastal harbours, hand-cleaned by master fishmongers, and delivered chilled to your doorstep — never compromised." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://order.seadock.in", className: "bg-navy text-cream px-7 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 hover:bg-navy/90 transition", children: [
              "Order Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "https://order.seadock.in", className: "border border-navy/30 text-navy px-7 py-4 text-xs tracking-[0.2em] uppercase hover:bg-navy/5 transition", children: "Explore Catalogue" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6", children: [["Live", "Hand-picked"], ["", ""], ["60m", "Arrives fresh"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-navy", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-1", children: l })
          ] }, n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 z-10 bg-gold text-navy px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase", children: "Chef's Grade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Premium fresh seafood platter", width: 1024, height: 1024, className: "w-full aspect-square object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 left-6 bg-background shadow-xl px-5 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-navy flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-cream" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-navy", children: "60–90 mins" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] text-muted-foreground uppercase", children: "Doorstep Delivery" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative reveal-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: boat, alt: "Fishing boat at dawn", width: 1024, height: 1024, loading: "lazy", className: "w-full aspect-square object-cover shadow-xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-gold uppercase font-sans", children: "— Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl text-navy leading-tight", children: [
            "We believe seafood should taste ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-display text-teal-sea", children: "fresh and authentic," }),
            " every single time."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-muted-foreground leading-relaxed font-body text-lg", children: [
            "Seadock was founded with a clear purpose — to deliver consistently high-quality seafood with care and precision. We work with trusted sourcing partners, inspect every catch thoroughly and ensure it reaches you in",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy font-semibold", children: " 60 to 90 minutes" }),
            " — cleaned, cut, and ready to cook."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6", children: [{
            Icon: Anchor,
            t: "Trusted Sourcing",
            d: "Carefully selected from reliable partners who meet our strict quality and consistency standards."
          }, {
            Icon: Fish,
            t: "Master Cut",
            d: "Cleaned, de-scaled and portioned by skilled professionals to deliver restaurant-quality preparation."
          }, {
            Icon: Sparkles,
            t: "Quality Assured",
            d: "Handled and packaged with precision to preserve natural freshness, taste, and texture."
          }].map(({
            Icon: Icon2,
            t,
            d
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-6 w-6 text-navy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-navy mt-4", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed font-sans", children: d })
          ] }, t)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "bg-cream py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-gold uppercase", children: "— The Catch of The Day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid lg:grid-cols-3 gap-8 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "lg:col-span-2 font-display text-4xl md:text-5xl text-navy leading-tight", children: [
            "Our Seafood, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-serif text-navy/80", children: "Curated Daily." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "A seasonal, ever-changing selection. Hand-picked at the harbour, cleaned to perfection, and ready for your kitchen." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square overflow-hidden bg-background relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, width: 768, height: 768, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-navy" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-between items-baseline border-b border-border pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-navy", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] text-muted-foreground", children: "FRESH" })
          ] })
        ] }, p.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic-serif text-lg", children: "Prawns, oysters, mackerel, basa, rohu, and many more varieties await on the full menu." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://order.seadock.in", className: "mt-8 inline-flex items-center gap-3 bg-navy text-cream px-7 py-4 text-xs tracking-[0.2em] uppercase", children: [
            "Order Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-navy text-cream py-28 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04]", style: {
          backgroundImage: "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-gold uppercase", children: "— The Seadock Promise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl md:text-6xl leading-tight", children: [
              "From the dock to your door in",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-serif text-gold", children: "60–90 minutes." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-4 gap-12 max-w-6xl mx-auto", children: promises.map(({
            icon: Icon2,
            title,
            desc
          }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i > 0 ? "md:border-l md:border-cream/10 md:pl-8" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-8 w-8 text-gold", strokeWidth: 1.2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl mt-8", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 mt-3 leading-relaxed", children: desc })
          ] }, title)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-gold uppercase", children: "— Our Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-navy", children: "Voices of the Shore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 overflow-x-auto pb-8 scrollbar-hide", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 w-max px-2", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[320px] max-w-[350px] bg-white border border-gray-100 p-8 relative flex-shrink-0 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-gold/20 absolute top-6 right-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body italic text-lg text-navy/90 leading-relaxed min-h-[100px]", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-5 border-t border-gray-100 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-cream flex items-center justify-center text-gold font-display text-lg border border-gold/10", children: t.name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-navy", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] text-muted-foreground uppercase", children: t.loc })
            ] })
          ] })
        ] }, t.name)) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "order", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-navy leading-tight max-w-3xl", children: [
          "Drop by our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-serif", children: "Hyderabad dock." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl", children: "Visit our processing unit or reach out — our fishmongers would love to help you pick the perfect cut for tonight's dinner." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Seadock Hyderabad", src: "https://www.google.com/maps?q=Hyderabad,Telangana&output=embed", className: "w-full h-full", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-navy", children: "Seadock Fresh Catch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] text-gold mt-2 uppercase", children: "Hyderabad, Telangana" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-7 text-sm", children: [["Address", "Plot 42, Jubilee Hills, Road No. 36\nHyderabad, Telangana — 500033"], ["Call Us", "+91 98765 43210"], ["Email", "hello@seadock.com"], ["Delivery Hours", "Everyday, 7:00 AM – 10:30 PM"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] text-muted-foreground uppercase", children: k }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-navy mt-2 whitespace-pre-line", children: v })
            ] }, k)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-10 w-full bg-navy text-cream py-4 text-xs tracking-[0.25em] uppercase", children: "Get Directions" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};
