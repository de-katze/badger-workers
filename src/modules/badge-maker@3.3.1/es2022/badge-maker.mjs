/* esm.sh - esbuild bundle(badge-maker@3.3.1) es2022 production */
import * as __0$ from "../../anafanafo@2.0.0/es2022/anafanafo.mjs";
import * as __1$ from "../../css-color-converter@2.0.0/es2022/css-color-converter.mjs";
var require = n => { const e = m => typeof m.default < "u" ? m.default : m, c = m => Object.assign({}, m); switch (n) { case "anafanafo": return e(__0$); case "css-color-converter": return e(__1$); default: throw new Error("module \"" + n + "\" not found"); } };
var Ct = Object.create; var K = Object.defineProperty; var It = Object.getOwnPropertyDescriptor; var Nt = Object.getOwnPropertyNames; var Xt = Object.getPrototypeOf, Ft = Object.prototype.hasOwnProperty; var ut = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, { get: (e, i) => (typeof require < "u" ? require : e)[i] }) : t)(function (t) { if (typeof require < "u") return require.apply(this, arguments); throw Error('Dynamic require of "' + t + '" is not supported') }); var v = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), Pt = (t, e) => { for (var i in e) K(t, i, { get: e[i], enumerable: !0 }) }, J = (t, e, i, r) => { if (e && typeof e == "object" || typeof e == "function") for (let n of Nt(e)) !Ft.call(t, n) && n !== i && K(t, n, { get: () => e[n], enumerable: !(r = It(e, n)) || r.enumerable }); return t }, X = (t, e, i) => (J(t, e, "default"), i && J(i, e, "default")), xt = (t, e, i) => (i = t != null ? Ct(Xt(t)) : {}, J(e || !t || !t.__esModule ? K(i, "default", { value: t, enumerable: !0 }) : i, t)); var tt = v((de, Tt) => { "use strict"; var { fromString: $t } = ut("css-color-converter"), z = { brightgreen: "#4c1", green: "#97ca00", yellow: "#dfb317", yellowgreen: "#a4a61d", orange: "#fe7d37", red: "#e05d44", blue: "#007ec6", grey: "#555", lightgrey: "#9f9f9f" }, Y = { gray: "grey", lightgray: "lightgrey", critical: "red", important: "orange", success: "brightgreen", informational: "blue", inactive: "lightgrey" }, Q = {}; Object.entries(Y).forEach(([t, e]) => { Q[t] = z[e] }); var vt = /^([\da-f]{3}){1,2}$/i; function pt(t = "") { return vt.test(t) } function zt(t) { return typeof t == "string" && $t(t.trim()) } function wt(t) { if (t !== void 0) return t in z ? t : t in Y ? Y[t] : pt(t) ? `#${t.toLowerCase()}` : zt(t) ? t.toLowerCase() : void 0 } function Bt(t) { let e = wt(t); return e in z ? z[e] : e in Q ? Q[e] : e } function St(t) { if (t) { let e = $t(t); if (e) { let i = e.toRgbaArray(); return +((i[0] * 299 + i[1] * 587 + i[2] * 114) / 255e3).toFixed(2) } } return 0 } Tt.exports = { namedColors: z, isHexColor: pt, normalizeColor: wt, toSvgColor: Bt, brightness: St } }); var nt = v((ge, mt) => { "use strict"; function et(t) { return t.replace(/>\s+/g, ">").replace(/<\s+/g, "<").trim() } function it(t) { return typeof t == "number" ? t : t === void 0 || typeof t != "string" ? void 0 : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") } var rt = class t { constructor({ name: e, content: i = [], attrs: r = {} }) { this.name = e, this.content = i, this.attrs = r } render() { let e = Object.entries(this.attrs).map(([i, r]) => ` ${i}="${it(r)}"`).join(""); if (this.content.length > 0) { let i = this.content.map(function (r) { return r instanceof t ? r.render() : it(r) }).join(" "); return et(`<${this.name}${e}>${i}</${this.name}>`) } return et(`<${this.name}${e}/>`) } }; mt.exports = { escapeXml: it, stripXmlWhitespace: et, XmlElement: rt } }); var _t = v((fe, Gt) => {
  "use strict"; var st = ut("anafanafo"), { brightness: Ut } = tt(), { XmlElement: x, escapeXml: $ } = nt(), B = 10, Lt = "scale(.1)", yt = "Verdana,Geneva,DejaVu Sans,sans-serif", dt = `font-family="${yt}"`, qt = 'font-family="Helvetica Neue,Helvetica,Arial,sans-serif"', jt = .69; function Dt(t) { return `${t.charAt(0).toUpperCase()}${t.slice(1)}` } function ot(t) { return Ut(t) <= jt ? { textColor: "#fff", shadowColor: "#010101" } : { textColor: "#333", shadowColor: "#ccc" } } function Vt(t) { return t % 2 === 0 ? t + 1 : t } function ht(t, e) { return Vt(st(t, e) | 0) } function gt({ label: t, message: e }) { return (t ? `${t}: ` : "") + e } function U({ links: t }) { let [e, i] = t || [], r = e && e.length, n = i && i.length; return { hasLink: r && n, hasLeftLink: r, hasRightLink: n } } function j({ links: t }) { let { hasLeftLink: e, hasRightLink: i } = U({ links: t }); return e && !i } function Zt({ accessibleText: t, links: e }) { let { hasLink: i } = U({ links: e }); return i ? "" : `role="img" aria-label="${$(t)}"` } function Jt({ accessibleText: t, links: e }) { let { hasLink: i } = U({ links: e }); return i ? "" : `<title>${$(t)}</title>` } function Et({ logo: t, badgeHeight: e, horizPadding: i, logoWidth: r = 14, logoPadding: n = 0 }) { if (t) { let c = (e - 14) / 2, h = i; return { hasLogo: !0, totalLogoWidth: r + n, renderedLogo: `<image x="${h}" y="${c}" width="${r}" height="14" xlink:href="${$(t)}"/>` } } else return { hasLogo: !1, totalLogoWidth: 0, renderedLogo: "" } } function Kt({ link: t, height: e, textLength: i, horizPadding: r, leftMargin: n, renderedText: o }) {
    let c = e, h = i + r * 2, s = n > 1 ? n + 1 : 0; return `<a target="_blank" xlink:href="${$(t)}">
    <rect width="${h}" x="${s}" height="${c}" fill="rgba(0,0,0,0)" />
    ${o}
  </a>`} function bt({ leftMargin: t, horizPadding: e = 0, content: i, link: r, height: n, verticalMargin: o = 0, shadow: c = !1, color: h }) { if (!i.length) return { renderedText: "", width: 0 }; let s = ht(i, { font: "11px Verdana" }), d = $(i), g = 150 + o, f = 140 + o, p = 10 * s, w = 10 * (t + .5 * s + e), m = "", { textColor: b, shadowColor: W } = ot(h); return c && (m = `<text aria-hidden="true" x="${w}" y="${g}" fill="${W}" fill-opacity=".3" transform="scale(.1)" textLength="${p}">${d}</text>`), m += `<text x="${w}" y="${f}" transform="scale(.1)" fill="${b}" textLength="${p}">${d}</text>`, { renderedText: r ? Kt({ link: r, height: n, textLength: s, horizPadding: e, leftMargin: t, renderedText: m }) : m, width: s } } function q({ links: t, leftWidth: e, rightWidth: i, height: r, accessibleText: n }, o) {
    let c = e + i, h = $(t[0]); return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${c}" height="${r}" ${Zt({ links: t, accessibleText: n })}>

    ${Jt({ accessibleText: n, links: t })}
    ${j({ links: t }) ? `<a target="_blank" xlink:href="${h}">${o}</a>` : o}
    </svg>`} var S = class { static get fontFamily() { throw new Error("Not implemented") } static get height() { throw new Error("Not implemented") } static get verticalMargin() { throw new Error("Not implemented") } static get shadow() { throw new Error("Not implemented") } constructor({ label: e, message: i, links: r, logo: n, logoWidth: o, logoPadding: c, color: h = "#4c1", labelColor: s }) { let { hasLogo: g, totalLogoWidth: f, renderedLogo: p } = Et({ logo: n, badgeHeight: this.constructor.height, horizPadding: 5, logoWidth: o, logoPadding: c }), w = e.length || s; s == null && (s = "#555"); let [m, b] = r; s = w || g ? s : h, s = $(s), h = $(h); let W = f + 1, { renderedText: C, width: I } = bt({ leftMargin: W, horizPadding: 5, content: e, link: !j({ links: r }) && m, height: this.constructor.height, verticalMargin: this.constructor.verticalMargin, shadow: this.constructor.shadow, color: s }), l = w ? I + 2 * 5 + f : 0, a = l - (i.length ? 1 : 0); w || (g ? a = a + f + 5 : a = a + 1); let { renderedText: y, width: M } = bt({ leftMargin: a, horizPadding: 5, content: i, link: b, height: this.constructor.height, verticalMargin: this.constructor.verticalMargin, shadow: this.constructor.shadow, color: h }), E = M + 2 * 5; g && !w && (E += f + 5 - 1); let A = l + E, u = gt({ label: e, message: i }); this.links = r, this.leftWidth = l, this.rightWidth = E, this.width = A, this.labelColor = s, this.color = h, this.label = e, this.message = i, this.accessibleText = u, this.renderedLogo = p, this.renderedLabel = C, this.renderedMessage = y } static render(e) { return new this(e).render() } render() { throw new Error("Not implemented") } }, ct = class extends S {
    static get fontFamily() { return dt } static get height() { return 18 } static get verticalMargin() { return -10 } static get shadow() { return !0 } render() {
      return q({ links: this.links, leftWidth: this.leftWidth, rightWidth: this.rightWidth, accessibleText: this.accessibleText, height: this.constructor.height }, `
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>
        <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
        <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
        <stop offset="1"  stop-color="#000" stop-opacity=".5"/>
      </linearGradient>

      <clipPath id="r">
        <rect width="${this.width}" height="${this.constructor.height}" rx="4" fill="#fff"/>
      </clipPath>

      <g clip-path="url(#r)">
        <rect width="${this.leftWidth}" height="${this.constructor.height}" fill="${this.labelColor}"/>
        <rect x="${this.leftWidth}" width="${this.rightWidth}" height="${this.constructor.height}" fill="${this.color}"/>
        <rect width="${this.width}" height="${this.constructor.height}" fill="url(#s)"/>
      </g>

      <g fill="#fff" text-anchor="middle" ${this.constructor.fontFamily} text-rendering="geometricPrecision" font-size="110">
        ${this.renderedLogo}
        ${this.renderedLabel}
        ${this.renderedMessage}
      </g>`)
    }
  }, at = class extends S {
    static get fontFamily() { return dt } static get height() { return 20 } static get verticalMargin() { return 0 } static get shadow() { return !0 } render() {
      return q({ links: this.links, leftWidth: this.leftWidth, rightWidth: this.rightWidth, accessibleText: this.accessibleText, height: this.constructor.height }, `
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>

      <clipPath id="r">
        <rect width="${this.width}" height="${this.constructor.height}" rx="3" fill="#fff"/>
      </clipPath>

      <g clip-path="url(#r)">
        <rect width="${this.leftWidth}" height="${this.constructor.height}" fill="${this.labelColor}"/>
        <rect x="${this.leftWidth}" width="${this.rightWidth}" height="${this.constructor.height}" fill="${this.color}"/>
        <rect width="${this.width}" height="${this.constructor.height}" fill="url(#s)"/>
      </g>

      <g fill="#fff" text-anchor="middle" ${this.constructor.fontFamily} text-rendering="geometricPrecision" font-size="110">
        ${this.renderedLogo}
        ${this.renderedLabel}
        ${this.renderedMessage}
      </g>`)
    }
  }, lt = class extends S {
    static get fontFamily() { return dt } static get height() { return 20 } static get verticalMargin() { return 0 } static get shadow() { return !1 } render() {
      return q({ links: this.links, leftWidth: this.leftWidth, rightWidth: this.rightWidth, accessibleText: this.accessibleText, height: this.constructor.height }, `
      <g shape-rendering="crispEdges">
        <rect width="${this.leftWidth}" height="${this.constructor.height}" fill="${this.labelColor}"/>
        <rect x="${this.leftWidth}" width="${this.rightWidth}" height="${this.constructor.height}" fill="${this.color}"/>
      </g>

      <g fill="#fff" text-anchor="middle" ${this.constructor.fontFamily} text-rendering="geometricPrecision" font-size="110">
        ${this.renderedLogo}
        ${this.renderedLabel}
        ${this.renderedMessage}
      </g>`)
    }
  }; function Yt({ label: t, message: e, links: i = [], logo: r, logoWidth: n, logoPadding: o, color: c = "#4c1", labelColor: h = "#555" }) {
    t = Dt(t); let s = 20, d = 19, g = 5, f = 4, p = 6, { totalLogoWidth: w, renderedLogo: m } = Et({ logo: r, badgeHeight: s, horizPadding: g, logoWidth: n, logoPadding: o }), b = e.length, W = "bold 11px Helvetica", C = ht(t, { font: W }), I = ht(e, { font: W }), l = C + w + 2 * g, a = I + 2 * f, [y, M] = i; y = $(y), M = $(M); let { hasLeftLink: E, hasRightLink: A, hasLink: u } = U({ links: i }), F = gt({ label: t, message: e }); function G() {
      let L = l + p + .5, T = l + p; return `
      <rect x="${L}" y="0.5" width="${a}" height="${d}" rx="2" fill="#fafafa"/>
      <rect x="${T}" y="7.5" width="0.5" height="5" stroke="#fafafa"/>
      <path d="M${L} 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/>
    `} function D() {
      let L = 10 * (w + C / 2 + g), T = 10 * C, N = $(t), P = E && !j({ links: i }), _ = `<rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="${l}" height="${d}" rx="2" />`, k = `<text aria-hidden="true" x="${L}" y="150" fill="#fff" transform="scale(.1)" textLength="${T}">${N}</text>`, H = `<text x="${L}" y="140" transform="scale(.1)" textLength="${T}">${N}</text>`; return P ? `
        <a target="_blank" xlink:href="${y}">
          ${k}
          ${H}
          ${_}
        </a>
      `: `
      ${_}
      ${k}
      ${H}
    `} function V() {
      let L = 10 * (l + p + a / 2), T = 10 * I, N = $(e), P = `<rect width="${a + 1}" x="${l + p}" height="${d + 1}" fill="rgba(0,0,0,0)" />`, _ = `<text aria-hidden="true" x="${L}" y="150" fill="#fff" transform="scale(.1)" textLength="${T}">${N}</text>`, k = `<text id="rlink" x="${L}" y="140" transform="scale(.1)" textLength="${T}">${N}</text>`; return A ? `
        <a target="_blank" xlink:href="${M}">
          ${P}
          ${_}
          ${k}
        </a>
      `: `
      ${_}
      ${k}
    `} return q({ links: i, leftWidth: l + 1, rightWidth: b ? p + a : 0, accessibleText: F, height: s }, `
    <style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}</style>
    <linearGradient id="a" x2="0" y2="100%">
      <stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <linearGradient id="b" x2="0" y2="100%">
      <stop offset="0" stop-color="#ccc" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <g stroke="#d5d5d5">
      <rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="${l}" height="${d}" rx="2"/>
      ${b ? G() : ""}
    </g>
    ${m}
    <g aria-hidden="${!u}" fill="#333" text-anchor="middle" ${qt} text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px">
      ${D()}
      ${b ? V() : ""}
    </g>
    `)
  } function Qt({ label: t, message: e, links: i, logo: r, logoWidth: n, color: o = "#4c1", labelColor: c }) { t = t.toUpperCase(), e = e.toUpperCase(); let [m, b] = i, { hasLeftLink: W, hasRightLink: C } = U({ links: i }), I = c || "#555", l = t.length ? (st(t, { font: "10px Verdana" }) | 0) + 1.25 * t.length : 0, a = e.length ? (st(e, { font: "bold 10px Verdana" }) | 0) + 1.25 * e.length : 0, y = !!t.length, M = y || r && c, E, A; r ? (E = 9, A = E + n + 6) : A = 12; let u, F, G; M ? (y ? u = A + l + 12 : u = 2 * 9 + n, F = u + 12, G = 2 * 12 + a) : r ? (F = 12 + n + 6, G = 2 * 12 + n + 6 + a) : (F = 12, G = 2 * 12 + a); let D = new x({ name: "image", attrs: { x: E, y: .5 * 14, width: n, height: 14, "xlink:href": r } }); function V() { let { textColor: _ } = ot(I), k = A + .5 * l, H = new x({ name: "text", content: [t], attrs: { transform: Lt, x: B * k, y: 175, textLength: B * l, fill: _ } }); if (W && !j({ links: i })) { let Z = new x({ name: "rect", attrs: { width: u, height: 28, fill: "rgba(0,0,0,0)" } }); return new x({ name: "a", content: [Z, H], attrs: { target: "_blank", "xlink:href": m } }) } else return H } function L() { let { textColor: _ } = ot(o), k = F + .5 * a, H = new x({ name: "text", content: [e], attrs: { transform: Lt, x: B * k, y: 175, textLength: B * a, fill: _, "font-weight": "bold" } }); if (C) { let Z = new x({ name: "rect", attrs: { width: G, height: 28, x: u || 0, fill: "rgba(0,0,0,0)" } }); return new x({ name: "a", content: [Z, H], attrs: { target: "_blank", "xlink:href": b } }) } else return H } let T; M ? T = [new x({ name: "rect", attrs: { width: u, height: 28, fill: I } }), new x({ name: "rect", attrs: { x: u, width: G, height: 28, fill: o } })] : T = [new x({ name: "rect", attrs: { width: G, height: 28, fill: o } })]; let N = new x({ name: "g", content: T, attrs: { "shape-rendering": "crispEdges" } }), P = new x({ name: "g", content: [r ? D : "", y ? V() : "", L()], attrs: { fill: "#fff", "text-anchor": "middle", "font-family": yt, "text-rendering": "geometricPrecision", "font-size": B * 10 } }); return q({ links: i, leftWidth: u || 0, rightWidth: G, accessibleText: gt({ label: t, message: e }), height: 28 }, [N.render(), P.render()].join("")) } Gt.exports = { plastic: t => ct.render(t), flat: t => at.render(t), "flat-square": t => lt.render(t), social: Yt, "for-the-badge": Qt }
}); var At = v((ue, Mt) => { "use strict"; var { normalizeColor: kt, toSvgColor: Wt } = tt(), te = _t(), { stripXmlWhitespace: ee } = nt(); Mt.exports = function ({ format: e, style: i = "flat", label: r, message: n, color: o, labelColor: c, logo: h, logoPosition: s, logoWidth: d, links: g = ["", ""] }) { if (r = `${r}`.trim(), n = `${n}`.trim(), e === "json") return JSON.stringify({ label: r, message: n, logoWidth: d, color: kt(o), labelColor: kt(c), link: g, name: r, value: n }); let f = te[i]; if (!f) throw new Error(`Unknown badge style: '${i}'`); return d = +d || (h ? 14 : 0), ee(f({ label: r, message: n, links: g, logo: h, logoPosition: s, logoWidth: d, logoPadding: h && r.length ? 3 : 0, color: Wt(o), labelColor: Wt(c) })) } }); var ft = v((xe, Ht) => { "use strict"; var ie = At(), O = class extends Error { }; function re(t) { if (t !== Object(t)) throw new O("makeBadge takes an argument of type object"); if (!("message" in t)) throw new O("Field `message` is required");["labelColor", "color", "message", "label"].forEach(function (r) { if (r in t && typeof t[r] != "string") throw new O(`Field \`${r}\` must be of type string`) }); let i = ["plastic", "flat", "flat-square", "for-the-badge", "social"]; if ("style" in t && !i.includes(t.style)) throw new O(`Field \`style\` must be one of (${i.toString()})`) } function ne(t) { let e = ["label", "message", "labelColor", "color", "style", "logo"], i = {}; return Object.keys(t).forEach(r => { if (t[r] != null && e.includes(r)) i[r] = t[r]; else throw new O(`Unexpected field '${r}'. Allowed values are (${e.toString()})`) }), i.label = i.label || "", i } function se(t) { re(t); let e = ne(t); return ie(e) } Ht.exports = { makeBadge: se, ValidationError: O } }); var R = {}; Pt(R, { ValidationError: () => he, default: () => ae, makeBadge: () => oe }); var Rt = xt(ft()); X(R, xt(ft())); var { makeBadge: oe, ValidationError: he } = Rt, { default: Ot, ...ce } = Rt, ae = Ot !== void 0 ? Ot : ce; export { he as ValidationError, ae as default, oe as makeBadge };
//# sourceMappingURL=badge-maker.mjs.map