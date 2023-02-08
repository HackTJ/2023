function P() {}
const st = (t) => t;
function lt(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function J(t) {
	return t();
}
function H() {
	return Object.create(null);
}
function $(t) {
	t.forEach(J);
}
function K(t) {
	return typeof t == 'function';
}
function Tt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let N;
function Ot(t, e) {
	return N || (N = document.createElement('a')), (N.href = e), t === N.href;
}
function ct(t) {
	return Object.keys(t).length === 0;
}
function Lt(t, e, n, r) {
	if (t) {
		const o = Q(t, e, n, r);
		return t[0](o);
	}
}
function Q(t, e, n, r) {
	return t[1] && r ? lt(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function zt(t, e, n, r) {
	if (t[2] && r) {
		const o = t[2](r(n));
		if (e.dirty === void 0) return o;
		if (typeof o == 'object') {
			const c = [],
				i = Math.max(e.dirty.length, o.length);
			for (let l = 0; l < i; l += 1) c[l] = e.dirty[l] | o[l];
			return c;
		}
		return e.dirty | o;
	}
	return e.dirty;
}
function Bt(t, e, n, r, o, c) {
	if (o) {
		const i = Q(e, n, r, c);
		t.p(i, o);
	}
}
function Ft(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let r = 0; r < n; r++) e[r] = -1;
		return e;
	}
	return -1;
}
function Ht(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function It(t) {
	return t == null ? '' : t;
}
const U = typeof window < 'u';
let ut = U ? () => window.performance.now() : () => Date.now(),
	B = U ? (t) => requestAnimationFrame(t) : P;
const x = new Set();
function V(t) {
	x.forEach((e) => {
		e.c(t) || (x.delete(e), e.f());
	}),
		x.size !== 0 && B(V);
}
function at(t) {
	let e;
	return (
		x.size === 0 && B(V),
		{
			promise: new Promise((n) => {
				x.add((e = { c: t, f: n }));
			}),
			abort() {
				x.delete(e);
			}
		}
	);
}
let R = !1;
function ft() {
	R = !0;
}
function _t() {
	R = !1;
}
function dt(t, e, n, r) {
	for (; t < e; ) {
		const o = t + ((e - t) >> 1);
		n(o) <= r ? (t = o + 1) : (e = o);
	}
	return t;
}
function ht(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const s = [];
		for (let u = 0; u < e.length; u++) {
			const _ = e[u];
			_.claim_order !== void 0 && s.push(_);
		}
		e = s;
	}
	const n = new Int32Array(e.length + 1),
		r = new Int32Array(e.length);
	n[0] = -1;
	let o = 0;
	for (let s = 0; s < e.length; s++) {
		const u = e[s].claim_order,
			_ = (o > 0 && e[n[o]].claim_order <= u ? o + 1 : dt(1, o, (a) => e[n[a]].claim_order, u)) - 1;
		r[s] = n[_] + 1;
		const f = _ + 1;
		(n[f] = s), (o = Math.max(f, o));
	}
	const c = [],
		i = [];
	let l = e.length - 1;
	for (let s = n[o] + 1; s != 0; s = r[s - 1]) {
		for (c.push(e[s - 1]); l >= s; l--) i.push(e[l]);
		l--;
	}
	for (; l >= 0; l--) i.push(e[l]);
	c.reverse(), i.sort((s, u) => s.claim_order - u.claim_order);
	for (let s = 0, u = 0; s < i.length; s++) {
		for (; u < c.length && i[s].claim_order >= c[u].claim_order; ) u++;
		const _ = u < c.length ? c[u] : null;
		t.insertBefore(i[s], _);
	}
}
function mt(t, e) {
	t.appendChild(e);
}
function X(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function pt(t) {
	const e = Y('style');
	return yt(X(t), e), e.sheet;
}
function yt(t, e) {
	mt(t.head || t, e);
}
function gt(t, e) {
	if (R) {
		for (
			ht(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Wt(t, e, n) {
	R && !n ? gt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function xt(t) {
	t.parentNode.removeChild(t);
}
function Gt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Y(t) {
	return document.createElement(t);
}
function $t(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function F(t) {
	return document.createTextNode(t);
}
function Jt() {
	return F(' ');
}
function Kt() {
	return F('');
}
function Qt(t, e, n, r) {
	return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function bt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ut(t, e) {
	for (const n in e) bt(t, n, e[n]);
}
function wt(t) {
	return Array.from(t.childNodes);
}
function vt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Z(t, e, n, r, o = !1) {
	vt(t);
	const c = (() => {
		for (let i = t.claim_info.last_index; i < t.length; i++) {
			const l = t[i];
			if (e(l)) {
				const s = n(l);
				return s === void 0 ? t.splice(i, 1) : (t[i] = s), o || (t.claim_info.last_index = i), l;
			}
		}
		for (let i = t.claim_info.last_index - 1; i >= 0; i--) {
			const l = t[i];
			if (e(l)) {
				const s = n(l);
				return (
					s === void 0 ? t.splice(i, 1) : (t[i] = s),
					o ? s === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = i),
					l
				);
			}
		}
		return r();
	})();
	return (c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), c;
}
function tt(t, e, n, r) {
	return Z(
		t,
		(o) => o.nodeName === e,
		(o) => {
			const c = [];
			for (let i = 0; i < o.attributes.length; i++) {
				const l = o.attributes[i];
				n[l.name] || c.push(l.name);
			}
			c.forEach((i) => o.removeAttribute(i));
		},
		() => r(e)
	);
}
function Vt(t, e, n) {
	return tt(t, e, n, Y);
}
function Xt(t, e, n) {
	return tt(t, e, n, $t);
}
function Et(t, e) {
	return Z(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const r = '' + e;
			if (n.data.startsWith(r)) {
				if (n.data.length !== r.length) return n.splitText(r.length);
			} else n.data = r;
		},
		() => F(e),
		!0
	);
}
function Yt(t) {
	return Et(t, ' ');
}
function Zt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function te(t, e, n, r) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? 'important' : '');
}
function ee(t, e, n) {
	t.classList[n ? 'add' : 'remove'](e);
}
function et(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
	const o = document.createEvent('CustomEvent');
	return o.initCustomEvent(t, n, r, e), o;
}
function ne(t, e = document.body) {
	return Array.from(e.querySelectorAll(t));
}
const M = new Map();
let q = 0;
function kt(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function At(t, e) {
	const n = { stylesheet: pt(e), rules: {} };
	return M.set(t, n), n;
}
function I(t, e, n, r, o, c, i, l = 0) {
	const s = 16.666 / r;
	let u = `{
`;
	for (let p = 0; p <= 1; p += s) {
		const g = e + (n - e) * c(p);
		u +=
			p * 100 +
			`%{${i(g, 1 - g)}}
`;
	}
	const _ =
			u +
			`100% {${i(n, 1 - n)}}
}`,
		f = `__svelte_${kt(_)}_${l}`,
		a = X(t),
		{ stylesheet: d, rules: h } = M.get(a) || At(a, t);
	h[f] || ((h[f] = !0), d.insertRule(`@keyframes ${f} ${_}`, d.cssRules.length));
	const y = t.style.animation || '';
	return (t.style.animation = `${y ? `${y}, ` : ''}${f} ${r}ms linear ${o}ms 1 both`), (q += 1), f;
}
function Nt(t, e) {
	const n = (t.style.animation || '').split(', '),
		r = n.filter(e ? (c) => c.indexOf(e) < 0 : (c) => c.indexOf('__svelte') === -1),
		o = n.length - r.length;
	o && ((t.style.animation = r.join(', ')), (q -= o), q || Ct());
}
function Ct() {
	B(() => {
		q ||
			(M.forEach((t) => {
				const { stylesheet: e } = t;
				let n = e.cssRules.length;
				for (; n--; ) e.deleteRule(n);
				t.rules = {};
			}),
			M.clear());
	});
}
let k;
function E(t) {
	k = t;
}
function b() {
	if (!k) throw new Error('Function called outside component initialization');
	return k;
}
function ie(t) {
	b().$$.on_mount.push(t);
}
function re(t) {
	b().$$.after_update.push(t);
}
function oe(t) {
	b().$$.on_destroy.push(t);
}
function se() {
	const t = b();
	return (e, n, { cancelable: r = !1 } = {}) => {
		const o = t.$$.callbacks[e];
		if (o) {
			const c = et(e, n, { cancelable: r });
			return (
				o.slice().forEach((i) => {
					i.call(t, c);
				}),
				!c.defaultPrevented
			);
		}
		return !0;
	};
}
function le(t, e) {
	return b().$$.context.set(t, e), e;
}
function ce(t) {
	return b().$$.context.get(t);
}
const v = [],
	W = [],
	S = [],
	G = [],
	nt = Promise.resolve();
let z = !1;
function it() {
	z || ((z = !0), nt.then(rt));
}
function ue() {
	return it(), nt;
}
function D(t) {
	S.push(t);
}
const O = new Set();
let C = 0;
function rt() {
	const t = k;
	do {
		for (; C < v.length; ) {
			const e = v[C];
			C++, E(e), St(e.$$);
		}
		for (E(null), v.length = 0, C = 0; W.length; ) W.pop()();
		for (let e = 0; e < S.length; e += 1) {
			const n = S[e];
			O.has(n) || (O.add(n), n());
		}
		S.length = 0;
	} while (v.length);
	for (; G.length; ) G.pop()();
	(z = !1), O.clear(), E(t);
}
function St(t) {
	if (t.fragment !== null) {
		t.update(), $(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(D);
	}
}
let w;
function jt() {
	return (
		w ||
			((w = Promise.resolve()),
			w.then(() => {
				w = null;
			})),
		w
	);
}
function L(t, e, n) {
	t.dispatchEvent(et(`${e ? 'intro' : 'outro'}${n}`));
}
const j = new Set();
let m;
function ae() {
	m = { r: 0, c: [], p: m };
}
function fe() {
	m.r || $(m.c), (m = m.p);
}
function Mt(t, e) {
	t && t.i && (j.delete(t), t.i(e));
}
function _e(t, e, n, r) {
	if (t && t.o) {
		if (j.has(t)) return;
		j.add(t),
			m.c.push(() => {
				j.delete(t), r && (n && t.d(1), r());
			}),
			t.o(e);
	} else r && r();
}
const qt = { duration: 0 };
function de(t, e, n, r) {
	let o = e(t, n),
		c = r ? 0 : 1,
		i = null,
		l = null,
		s = null;
	function u() {
		s && Nt(t, s);
	}
	function _(a, d) {
		const h = a.b - c;
		return (
			(d *= Math.abs(h)),
			{ a: c, b: a.b, d: h, duration: d, start: a.start, end: a.start + d, group: a.group }
		);
	}
	function f(a) {
		const { delay: d = 0, duration: h = 300, easing: y = st, tick: p = P, css: g } = o || qt,
			T = { start: ut() + d, b: a };
		a || ((T.group = m), (m.r += 1)),
			i || l
				? (l = T)
				: (g && (u(), (s = I(t, c, a, h, d, y, g))),
				  a && p(0, 1),
				  (i = _(T, h)),
				  D(() => L(t, a, 'start')),
				  at((A) => {
						if (
							(l &&
								A > l.start &&
								((i = _(l, h)),
								(l = null),
								L(t, i.b, 'start'),
								g && (u(), (s = I(t, c, i.b, i.duration, 0, y, o.css)))),
							i)
						) {
							if (A >= i.end)
								p((c = i.b), 1 - c),
									L(t, i.b, 'end'),
									l || (i.b ? u() : --i.group.r || $(i.group.c)),
									(i = null);
							else if (A >= i.start) {
								const ot = A - i.start;
								(c = i.a + i.d * y(ot / i.duration)), p(c, 1 - c);
							}
						}
						return !!(i || l);
				  }));
	}
	return {
		run(a) {
			K(o)
				? jt().then(() => {
						(o = o()), f(a);
				  })
				: f(a);
		},
		end() {
			u(), (i = l = null);
		}
	};
}
const he = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
function me(t, e) {
	const n = {},
		r = {},
		o = { $$scope: 1 };
	let c = t.length;
	for (; c--; ) {
		const i = t[c],
			l = e[c];
		if (l) {
			for (const s in i) s in l || (r[s] = 1);
			for (const s in l) o[s] || ((n[s] = l[s]), (o[s] = 1));
			t[c] = l;
		} else for (const s in i) o[s] = 1;
	}
	for (const i in r) i in n || (n[i] = void 0);
	return n;
}
function pe(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function ye(t) {
	t && t.c();
}
function ge(t, e) {
	t && t.l(e);
}
function Dt(t, e, n, r) {
	const { fragment: o, on_mount: c, on_destroy: i, after_update: l } = t.$$;
	o && o.m(e, n),
		r ||
			D(() => {
				const s = c.map(J).filter(K);
				i ? i.push(...s) : $(s), (t.$$.on_mount = []);
			}),
		l.forEach(D);
}
function Pt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		($(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Rt(t, e) {
	t.$$.dirty[0] === -1 && (v.push(t), it(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function xe(t, e, n, r, o, c, i, l = [-1]) {
	const s = k;
	E(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: null,
		props: c,
		update: P,
		not_equal: o,
		bound: H(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (s ? s.$$.context : [])),
		callbacks: H(),
		dirty: l,
		skip_bound: !1,
		root: e.target || s.$$.root
	});
	i && i(u.root);
	let _ = !1;
	if (
		((u.ctx = n
			? n(t, e.props || {}, (f, a, ...d) => {
					const h = d.length ? d[0] : a;
					return (
						u.ctx &&
							o(u.ctx[f], (u.ctx[f] = h)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](h), _ && Rt(t, f)),
						a
					);
			  })
			: []),
		u.update(),
		(_ = !0),
		$(u.before_update),
		(u.fragment = r ? r(u.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			ft();
			const f = wt(e.target);
			u.fragment && u.fragment.l(f), f.forEach(xt);
		} else u.fragment && u.fragment.c();
		e.intro && Mt(t.$$.fragment), Dt(t, e.target, e.anchor, e.customElement), _t(), rt();
	}
	E(s);
}
class $e {
	$destroy() {
		Pt(this, 1), (this.$destroy = P);
	}
	$on(e, n) {
		const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			r.push(n),
			() => {
				const o = r.indexOf(n);
				o !== -1 && r.splice(o, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !ct(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	D as $,
	me as A,
	pe as B,
	Pt as C,
	lt as D,
	ue as E,
	Lt as F,
	Bt as G,
	Ft as H,
	zt as I,
	gt as J,
	Gt as K,
	$t as L,
	Xt as M,
	Ut as N,
	Ht as O,
	Ot as P,
	Qt as Q,
	$ as R,
	$e as S,
	ce as T,
	K as U,
	st as V,
	se as W,
	oe as X,
	he as Y,
	It as Z,
	ee as _,
	Jt as a,
	de as a0,
	W as a1,
	ne as a2,
	Wt as b,
	Yt as c,
	fe as d,
	Kt as e,
	Mt as f,
	ae as g,
	xt as h,
	xe as i,
	le as j,
	re as k,
	Y as l,
	Vt as m,
	P as n,
	ie as o,
	wt as p,
	bt as q,
	te as r,
	Tt as s,
	_e as t,
	F as u,
	Et as v,
	Zt as w,
	ye as x,
	ge as y,
	Dt as z
};
