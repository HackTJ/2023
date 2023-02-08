import {
	n as ve,
	s as Ge,
	S as Xe,
	i as He,
	a as Ze,
	e as I,
	c as Qe,
	b as q,
	g as G,
	t as N,
	d as M,
	f as x,
	h as j,
	j as et,
	k as tt,
	o as Le,
	l as nt,
	m as rt,
	p as st,
	q as $e,
	r as K,
	u as it,
	v as at,
	w as ot,
	x as z,
	y as ie,
	z as B,
	A as ae,
	B as oe,
	C as J,
	D as ce,
	E as De
} from './chunks/index-5d6d97c1.js';
import { s as ct, a as lt } from './chunks/paths-b9644fda.js';
const Q = [];
function de(r, e = ve) {
	let t;
	const a = new Set();
	function l(n) {
		if (Ge(r, n) && ((r = n), t)) {
			const s = !Q.length;
			for (const i of a) i[1](), Q.push(i, r);
			if (s) {
				for (let i = 0; i < Q.length; i += 2) Q[i][0](Q[i + 1]);
				Q.length = 0;
			}
		}
	}
	function c(n) {
		l(n(r));
	}
	function u(n, s = ve) {
		const i = [n, s];
		return (
			a.add(i),
			a.size === 1 && (t = e(l) || ve),
			n(r),
			() => {
				a.delete(i), a.size === 0 && (t(), (t = null));
			}
		);
	}
	return { set: l, update: c, subscribe: u };
}
function ft(r) {
	let e, t, a;
	const l = [r[1] || {}];
	var c = r[0][0];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = ce(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(n) {
				e && ie(e.$$.fragment, n), (t = I());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 2 ? ae(l, [oe(n[1] || {})]) : {};
				if (c !== (c = n[0][0])) {
					if (e) {
						G();
						const d = e;
						N(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							M();
					}
					c
						? ((e = new c(u())), z(e.$$.fragment), x(e.$$.fragment, 1), B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && x(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && N(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && j(t), e && J(e, n);
			}
		}
	);
}
function ut(r) {
	let e, t, a;
	const l = [r[1] || {}];
	var c = r[0][0];
	function u(n) {
		let s = { $$slots: { default: [_t] }, $$scope: { ctx: n } };
		for (let i = 0; i < l.length; i += 1) s = ce(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u(r))),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(n) {
				e && ie(e.$$.fragment, n), (t = I());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 2 ? ae(l, [oe(n[1] || {})]) : {};
				if ((s & 525 && (i.$$scope = { dirty: s, ctx: n }), c !== (c = n[0][0]))) {
					if (e) {
						G();
						const d = e;
						N(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							M();
					}
					c
						? ((e = new c(u(n))), z(e.$$.fragment), x(e.$$.fragment, 1), B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && x(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && N(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && j(t), e && J(e, n);
			}
		}
	);
}
function dt(r) {
	let e, t, a;
	const l = [r[2] || {}];
	var c = r[0][1];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = ce(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(n) {
				e && ie(e.$$.fragment, n), (t = I());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 4 ? ae(l, [oe(n[2] || {})]) : {};
				if (c !== (c = n[0][1])) {
					if (e) {
						G();
						const d = e;
						N(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							M();
					}
					c
						? ((e = new c(u())), z(e.$$.fragment), x(e.$$.fragment, 1), B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && x(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && N(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && j(t), e && J(e, n);
			}
		}
	);
}
function pt(r) {
	let e, t, a;
	const l = [r[2] || {}];
	var c = r[0][1];
	function u(n) {
		let s = { $$slots: { default: [ht] }, $$scope: { ctx: n } };
		for (let i = 0; i < l.length; i += 1) s = ce(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u(r))),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(n) {
				e && ie(e.$$.fragment, n), (t = I());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 4 ? ae(l, [oe(n[2] || {})]) : {};
				if ((s & 521 && (i.$$scope = { dirty: s, ctx: n }), c !== (c = n[0][1]))) {
					if (e) {
						G();
						const d = e;
						N(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							M();
					}
					c
						? ((e = new c(u(n))), z(e.$$.fragment), x(e.$$.fragment, 1), B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && x(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && N(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && j(t), e && J(e, n);
			}
		}
	);
}
function ht(r) {
	let e, t, a;
	const l = [r[3] || {}];
	var c = r[0][2];
	function u(n) {
		let s = {};
		for (let i = 0; i < l.length; i += 1) s = ce(s, l[i]);
		return { props: s };
	}
	return (
		c && (e = new c(u())),
		{
			c() {
				e && z(e.$$.fragment), (t = I());
			},
			l(n) {
				e && ie(e.$$.fragment, n), (t = I());
			},
			m(n, s) {
				e && B(e, n, s), q(n, t, s), (a = !0);
			},
			p(n, s) {
				const i = s & 8 ? ae(l, [oe(n[3] || {})]) : {};
				if (c !== (c = n[0][2])) {
					if (e) {
						G();
						const d = e;
						N(d.$$.fragment, 1, 0, () => {
							J(d, 1);
						}),
							M();
					}
					c
						? ((e = new c(u())), z(e.$$.fragment), x(e.$$.fragment, 1), B(e, t.parentNode, t))
						: (e = null);
				} else c && e.$set(i);
			},
			i(n) {
				a || (e && x(e.$$.fragment, n), (a = !0));
			},
			o(n) {
				e && N(e.$$.fragment, n), (a = !1);
			},
			d(n) {
				n && j(t), e && J(e, n);
			}
		}
	);
}
function _t(r) {
	let e, t, a, l;
	const c = [pt, dt],
		u = [];
	function n(s, i) {
		return s[0][2] ? 0 : 1;
	}
	return (
		(e = n(r)),
		(t = u[e] = c[e](r)),
		{
			c() {
				t.c(), (a = I());
			},
			l(s) {
				t.l(s), (a = I());
			},
			m(s, i) {
				u[e].m(s, i), q(s, a, i), (l = !0);
			},
			p(s, i) {
				let d = e;
				(e = n(s)),
					e === d
						? u[e].p(s, i)
						: (G(),
						  N(u[d], 1, 1, () => {
								u[d] = null;
						  }),
						  M(),
						  (t = u[e]),
						  t ? t.p(s, i) : ((t = u[e] = c[e](s)), t.c()),
						  x(t, 1),
						  t.m(a.parentNode, a));
			},
			i(s) {
				l || (x(t), (l = !0));
			},
			o(s) {
				N(t), (l = !1);
			},
			d(s) {
				u[e].d(s), s && j(a);
			}
		}
	);
}
function je(r) {
	let e,
		t = r[5] && Ve(r);
	return {
		c() {
			(e = nt('div')), t && t.c(), this.h();
		},
		l(a) {
			e = rt(a, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var l = st(e);
			t && t.l(l), l.forEach(j), this.h();
		},
		h() {
			$e(e, 'id', 'svelte-announcer'),
				$e(e, 'aria-live', 'assertive'),
				$e(e, 'aria-atomic', 'true'),
				K(e, 'position', 'absolute'),
				K(e, 'left', '0'),
				K(e, 'top', '0'),
				K(e, 'clip', 'rect(0 0 0 0)'),
				K(e, 'clip-path', 'inset(50%)'),
				K(e, 'overflow', 'hidden'),
				K(e, 'white-space', 'nowrap'),
				K(e, 'width', '1px'),
				K(e, 'height', '1px');
		},
		m(a, l) {
			q(a, e, l), t && t.m(e, null);
		},
		p(a, l) {
			a[5] ? (t ? t.p(a, l) : ((t = Ve(a)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(a) {
			a && j(e), t && t.d();
		}
	};
}
function Ve(r) {
	let e;
	return {
		c() {
			e = it(r[6]);
		},
		l(t) {
			e = at(t, r[6]);
		},
		m(t, a) {
			q(t, e, a);
		},
		p(t, a) {
			a & 64 && ot(e, t[6]);
		},
		d(t) {
			t && j(e);
		}
	};
}
function mt(r) {
	let e, t, a, l, c;
	const u = [ut, ft],
		n = [];
	function s(d, R) {
		return d[0][1] ? 0 : 1;
	}
	(e = s(r)), (t = n[e] = u[e](r));
	let i = r[4] && je(r);
	return {
		c() {
			t.c(), (a = Ze()), i && i.c(), (l = I());
		},
		l(d) {
			t.l(d), (a = Qe(d)), i && i.l(d), (l = I());
		},
		m(d, R) {
			n[e].m(d, R), q(d, a, R), i && i.m(d, R), q(d, l, R), (c = !0);
		},
		p(d, [R]) {
			let E = e;
			(e = s(d)),
				e === E
					? n[e].p(d, R)
					: (G(),
					  N(n[E], 1, 1, () => {
							n[E] = null;
					  }),
					  M(),
					  (t = n[e]),
					  t ? t.p(d, R) : ((t = n[e] = u[e](d)), t.c()),
					  x(t, 1),
					  t.m(a.parentNode, a)),
				d[4]
					? i
						? i.p(d, R)
						: ((i = je(d)), i.c(), i.m(l.parentNode, l))
					: i && (i.d(1), (i = null));
		},
		i(d) {
			c || (x(t), (c = !0));
		},
		o(d) {
			N(t), (c = !1);
		},
		d(d) {
			n[e].d(d), d && j(a), i && i.d(d), d && j(l);
		}
	};
}
function gt(r, e, t) {
	let { stores: a } = e,
		{ page: l } = e,
		{ components: c } = e,
		{ props_0: u = null } = e,
		{ props_1: n = null } = e,
		{ props_2: s = null } = e;
	et('__svelte__', a), tt(a.page.notify);
	let i = !1,
		d = !1,
		R = null;
	return (
		Le(() => {
			const E = a.page.subscribe(() => {
				i && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
			});
			return t(4, (i = !0)), E;
		}),
		(r.$$set = (E) => {
			'stores' in E && t(7, (a = E.stores)),
				'page' in E && t(8, (l = E.page)),
				'components' in E && t(0, (c = E.components)),
				'props_0' in E && t(1, (u = E.props_0)),
				'props_1' in E && t(2, (n = E.props_1)),
				'props_2' in E && t(3, (s = E.props_2));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 384 && a.page.set(l);
		}),
		[c, u, n, s, i, d, R, a, l]
	);
}
class wt extends Xe {
	constructor(e) {
		super(),
			He(this, e, gt, mt, Ge, {
				stores: 7,
				page: 8,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3
			});
	}
}
const bt = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	yt = function (r) {
		return '/' + r;
	},
	qe = {},
	Y = function (e, t, a) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((l) => {
						if (((l = yt(l)), l in qe)) return;
						qe[l] = !0;
						const c = l.endsWith('.css'),
							u = c ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${l}"]${u}`)) return;
						const n = document.createElement('link');
						if (
							((n.rel = c ? 'stylesheet' : bt),
							c || ((n.as = 'script'), (n.crossOrigin = '')),
							(n.href = l),
							document.head.appendChild(n),
							c)
						)
							return new Promise((s, i) => {
								n.addEventListener('load', s),
									n.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${l}`)));
							});
					})
			  ).then(() => e());
	},
	vt = {},
	pe = [
		() =>
			Y(
				() => import('./pages/__layout.svelte-5fb9e33b.js'),
				[
					'_app/immutable/pages/__layout.svelte-5fb9e33b.js',
					'_app/immutable/assets/__layout-00f6067f.css',
					'_app/immutable/chunks/index-5d6d97c1.js'
				]
			),
		() =>
			Y(
				() => import('./error.svelte-c5976a8b.js'),
				['_app/immutable/error.svelte-c5976a8b.js', '_app/immutable/chunks/index-5d6d97c1.js']
			),
		() =>
			Y(
				() => import('./pages/faq.svelte-0d657444.js'),
				[
					'_app/immutable/pages/faq.svelte-0d657444.js',
					'_app/immutable/chunks/index-5d6d97c1.js',
					'_app/immutable/chunks/paths-b9644fda.js',
					'_app/immutable/chunks/home-d8742978.js',
					'_app/immutable/chunks/Footer-972a73f8.js'
				]
			),
		() =>
			Y(
				() => import('./pages/index.svelte-e54ac4b2.js'),
				[
					'_app/immutable/pages/index.svelte-e54ac4b2.js',
					'_app/immutable/assets/index-dadff33c.css',
					'_app/immutable/chunks/index-5d6d97c1.js',
					'_app/immutable/chunks/paths-b9644fda.js',
					'_app/immutable/chunks/Footer-972a73f8.js'
				]
			),
		() =>
			Y(
				() => import('./pages/register.svelte-38ff7455.js'),
				[
					'_app/immutable/pages/register.svelte-38ff7455.js',
					'_app/immutable/chunks/index-5d6d97c1.js',
					'_app/immutable/chunks/paths-b9644fda.js',
					'_app/immutable/chunks/home-d8742978.js',
					'_app/immutable/chunks/Footer-972a73f8.js'
				]
			),
		() =>
			Y(
				() => import('./pages/resources.svelte-0ec7b88f.js'),
				[
					'_app/immutable/pages/resources.svelte-0ec7b88f.js',
					'_app/immutable/chunks/index-5d6d97c1.js',
					'_app/immutable/chunks/paths-b9644fda.js',
					'_app/immutable/chunks/home-d8742978.js',
					'_app/immutable/chunks/Footer-972a73f8.js'
				]
			),
		() =>
			Y(
				() => import('./pages/schedule.svelte-aaea0a3b.js'),
				[
					'_app/immutable/pages/schedule.svelte-aaea0a3b.js',
					'_app/immutable/chunks/index-5d6d97c1.js',
					'_app/immutable/chunks/paths-b9644fda.js',
					'_app/immutable/chunks/home-d8742978.js',
					'_app/immutable/chunks/Footer-972a73f8.js'
				]
			)
	],
	$t = {
		'': [[0, 3], [1]],
		faq: [[0, 2], [1]],
		register: [[0, 4], [1]],
		resources: [[0, 5], [1]],
		schedule: [[0, 6], [1]]
	};
function Et(r) {
	r.client;
}
function Vt(r) {}
function ze(r) {
	return r instanceof Error || (r && r.name && r.message) ? r : new Error(JSON.stringify(r));
}
function Be(r) {
	if (!r) return {};
	if (r.fallthrough)
		throw new Error(
			'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
		);
	if ('maxage' in r) throw new Error('maxage should be replaced with cache: { maxage }');
	const e = r.status && r.status >= 400 && r.status <= 599 && !r.redirect;
	if (r.error || e) {
		const t = r.status;
		if (!r.error && e) return { status: t || 500, error: new Error(`${t}`) };
		const a = typeof r.error == 'string' ? new Error(r.error) : r.error;
		return a instanceof Error
			? !t || t < 400 || t > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: a })
				: { status: t, error: a }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof a}"`
					)
			  };
	}
	if (r.redirect) {
		if (!r.status || Math.floor(r.status / 100) !== 3)
			throw new Error(
				'"redirect" property returned from load() must be accompanied by a 3xx status code'
			);
		if (typeof r.redirect != 'string')
			throw new Error('"redirect" property returned from load() must be a string');
	}
	if (
		r.dependencies &&
		(!Array.isArray(r.dependencies) || r.dependencies.some((t) => typeof t != 'string'))
	)
		throw new Error('"dependencies" property returned from load() must be of type string[]');
	if (r.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return r;
}
function kt(r, e) {
	return r === '/' || e === 'ignore'
		? r
		: e === 'never'
		? r.endsWith('/')
			? r.slice(0, -1)
			: r
		: e === 'always' && !r.endsWith('/')
		? r + '/'
		: r;
}
function Lt(r) {
	for (const e in r)
		r[e] = r[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return r;
}
class Rt extends URL {
	get hash() {
		throw new Error(
			'url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.'
		);
	}
}
function Je(r) {
	let e = r.baseURI;
	if (!e) {
		const t = r.getElementsByTagName('base');
		e = t.length ? t[0].href : r.URL;
	}
	return e;
}
function Re() {
	return { x: pageXOffset, y: pageYOffset };
}
function Ke(r) {
	return r.composedPath().find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function We(r) {
	return r instanceof SVGAElement ? new URL(r.href.baseVal, document.baseURI) : new URL(r.href);
}
function Fe(r) {
	const e = de(r);
	let t = !0;
	function a() {
		(t = !0), e.update((u) => u);
	}
	function l(u) {
		(t = !1), e.set(u);
	}
	function c(u) {
		let n;
		return e.subscribe((s) => {
			(n === void 0 || (t && s !== n)) && u((n = s));
		});
	}
	return { notify: a, set: l, subscribe: c };
}
function St() {
	const { set: r, subscribe: e } = de(!1);
	let t;
	async function a() {
		clearTimeout(t);
		const l = await fetch(`${lt}/_app/version.json`, {
			headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
		});
		if (l.ok) {
			const { version: c } = await l.json(),
				u = c !== '1675305405456';
			return u && (r(!0), clearTimeout(t)), u;
		} else throw new Error(`Version check failed: ${l.status}`);
	}
	return { subscribe: e, check: a };
}
function Ut(r) {
	let e = 5381,
		t = r.length;
	if (typeof r == 'string') for (; t; ) e = (e * 33) ^ r.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ r[--t];
	return (e >>> 0).toString(36);
}
const Se = window.fetch;
function At(r, e) {
	let a = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof r == 'string' ? r : r.url
	)}]`;
	e && typeof e.body == 'string' && (a += `[sveltekit\\:data-body="${Ut(e.body)}"]`);
	const l = document.querySelector(a);
	if (l && l.textContent) {
		const { body: c, ...u } = JSON.parse(l.textContent);
		return Promise.resolve(new Response(c, u));
	}
	return Se(r, e);
}
const Ot = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Pt(r) {
	const e = [],
		t = [];
	let a = !0;
	return {
		pattern:
			r === ''
				? /^\/$/
				: new RegExp(
						`^${decodeURIComponent(r)
							.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
							.map((c, u, n) => {
								const s = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
								if (s) return e.push(s[1]), t.push(s[2]), '(?:/(.*))?';
								const i = u === n.length - 1;
								return (
									c &&
									'/' +
										c
											.split(/\[(.+?)\]/)
											.map((d, R) => {
												if (R % 2) {
													const E = Ot.exec(d);
													if (!E)
														throw new Error(
															`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, ee, X, le] = E;
													return e.push(X), t.push(le), ee ? '(.*?)' : '([^/]+?)';
												}
												return (
													i && d.includes('.') && (a = !1),
													d
														.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${a ? '/?' : ''}$`
				  ),
		names: e,
		types: t
	};
}
function Tt(r, e, t, a) {
	const l = {};
	for (let c = 0; c < e.length; c += 1) {
		const u = e[c],
			n = t[c],
			s = r[c + 1] || '';
		if (n) {
			const i = a[n];
			if (!i) throw new Error(`Missing "${n}" param matcher`);
			if (!i(s)) return;
		}
		l[u] = s;
	}
	return l;
}
function It(r, e, t) {
	return Object.entries(e).map(([l, [c, u, n]]) => {
		const { pattern: s, names: i, types: d } = Pt(l);
		return {
			id: l,
			exec: (R) => {
				const E = s.exec(R);
				if (E) return Tt(E, i, d, t);
			},
			a: c.map((R) => r[R]),
			b: u.map((R) => r[R]),
			has_shadow: !!n
		};
	});
}
const Me = 'sveltekit:scroll',
	W = 'sveltekit:index',
	Ee = It(pe, $t, vt),
	Nt = pe[0](),
	xt = pe[1](),
	Ye = {};
let se = {};
try {
	se = JSON.parse(sessionStorage[Me]);
} catch {}
function ke(r) {
	se[r] = Re();
}
function Ct({ target: r, session: e, base: t, trailing_slash: a }) {
	var Ce;
	const l = new Map(),
		c = [],
		u = { url: Fe({}), page: Fe({}), navigating: de(null), session: de(e), updated: St() },
		n = { id: null, promise: null },
		s = { before_navigate: [], after_navigate: [] };
	let i = { branch: [], error: null, session_id: 0, stuff: Ye, url: null },
		d = !1,
		R = !0,
		E = !1,
		ee = 1,
		X = null,
		le,
		Ue,
		Ae = !1;
	u.session.subscribe(async (o) => {
		(Ue = o),
			!(!Ae || ((ee += 1), !i.branch.some((_) => (_ == null ? void 0 : _.uses.session)))) &&
				ge(new URL(location.href), [], !0);
	}),
		(Ae = !0);
	let H = !0,
		C = (Ce = history.state) == null ? void 0 : Ce[W];
	C || ((C = Date.now()), history.replaceState({ ...history.state, [W]: C }, '', location.href));
	const he = se[C];
	he && ((history.scrollRestoration = 'manual'), scrollTo(he.x, he.y));
	let _e = !1,
		me,
		Oe;
	async function Pe(
		o,
		{ noscroll: p = !1, replaceState: _ = !1, keepfocus: f = !1, state: h = {} },
		m
	) {
		if ((typeof o == 'string' && (o = new URL(o, Je(document))), H))
			return be({
				url: o,
				scroll: p ? Re() : null,
				keepfocus: f,
				redirect_chain: m,
				details: { state: h, replaceState: _ },
				accepted: () => {},
				blocked: () => {}
			});
		await re(o);
	}
	async function Te(o) {
		const p = xe(o);
		if (!p) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (n.promise = Ne(p, !1)), (n.id = p.id), n.promise;
	}
	async function ge(o, p, _, f, h) {
		var L, U;
		const m = xe(o),
			$ = (Oe = {});
		let g = m && (await Ne(m, _));
		if (
			(!g &&
				o.origin === location.origin &&
				o.pathname === location.pathname &&
				(g = await ne({
					status: 404,
					error: new Error(`Not found: ${o.pathname}`),
					url: o,
					routeId: null
				})),
			!g)
		)
			return await re(o), !1;
		if (((o = (m == null ? void 0 : m.url) || o), Oe !== $)) return !1;
		if (((c.length = 0), g.redirect))
			if (p.length > 10 || p.includes(o.pathname))
				g = await ne({ status: 500, error: new Error('Redirect loop'), url: o, routeId: null });
			else
				return (
					H
						? Pe(new URL(g.redirect, o).href, {}, [...p, o.pathname])
						: await re(new URL(g.redirect, location.href)),
					!1
				);
		else
			((U = (L = g.props) == null ? void 0 : L.page) == null ? void 0 : U.status) >= 400 &&
				(await u.updated.check()) &&
				(await re(o));
		if (((E = !0), f && f.details)) {
			const { details: k } = f,
				O = k.replaceState ? 0 : 1;
			(k.state[W] = C += O), history[k.replaceState ? 'replaceState' : 'pushState'](k.state, '', o);
		}
		if (
			(d ? ((i = g.state), g.props.page && (g.props.page.url = o), le.$set(g.props)) : Ie(g), f)
		) {
			const { scroll: k, keepfocus: O } = f;
			if (!O) {
				const y = document.body,
					b = y.getAttribute('tabindex');
				(y.tabIndex = -1),
					y.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var v;
						(v = getSelection()) == null || v.removeAllRanges();
					}),
					b !== null ? y.setAttribute('tabindex', b) : y.removeAttribute('tabindex');
			}
			if ((await De(), R)) {
				const y = o.hash && document.getElementById(o.hash.slice(1));
				k ? scrollTo(k.x, k.y) : y ? y.scrollIntoView() : scrollTo(0, 0);
			}
		} else await De();
		(n.promise = null), (n.id = null), (R = !0), g.props.page && (me = g.props.page);
		const w = g.state.branch[g.state.branch.length - 1];
		(H = (w == null ? void 0 : w.module.router) !== !1), h && h(), (E = !1);
	}
	function Ie(o) {
		i = o.state;
		const p = document.querySelector('style[data-sveltekit]');
		if (
			(p && p.remove(),
			(me = o.props.page),
			(le = new wt({ target: r, props: { ...o.props, stores: u }, hydrate: !0 })),
			H)
		) {
			const _ = { from: null, to: new URL(location.href) };
			s.after_navigate.forEach((f) => f(_));
		}
		d = !0;
	}
	async function we({ url: o, params: p, stuff: _, branch: f, status: h, error: m, routeId: $ }) {
		var y, b;
		const g = f.filter(Boolean),
			w = g.find((v) => {
				var S;
				return (S = v.loaded) == null ? void 0 : S.redirect;
			}),
			L = {
				redirect: (y = w == null ? void 0 : w.loaded) == null ? void 0 : y.redirect,
				state: { url: o, params: p, branch: f, error: m, stuff: _, session_id: ee },
				props: { components: g.map((v) => v.module.default) }
			};
		for (let v = 0; v < g.length; v += 1)
			if (!i.branch.some((S) => S === g[v])) {
				const S = g[v].loaded;
				L.props[`props_${v}`] = S ? await S.props : null;
			}
		if (!i.url || o.href !== i.url.href || i.error !== m || i.stuff !== _) {
			L.props.page = { error: m, params: p, routeId: $, status: h, stuff: _, url: o };
			const v = (S, V) => {
				Object.defineProperty(L.props.page, S, {
					get: () => {
						throw new Error(`$page.${S} has been replaced by $page.url.${V}`);
					}
				});
			};
			v('origin', 'origin'), v('path', 'pathname'), v('query', 'searchParams');
		}
		const k = g[g.length - 1],
			O = (b = k == null ? void 0 : k.loaded) == null ? void 0 : b.cache;
		if (O) {
			const v = o.pathname + o.search;
			let S = !1;
			const V = () => {
					l.get(v) === L && l.delete(v), P(), clearTimeout(A);
				},
				A = setTimeout(V, O.maxage * 1e3),
				P = u.session.subscribe(() => {
					S && V();
				});
			(S = !0), l.set(v, L);
		}
		return L;
	}
	async function te({
		status: o,
		error: p,
		module: _,
		url: f,
		params: h,
		stuff: m,
		props: $,
		routeId: g
	}) {
		const w = {
			module: _,
			uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() },
			loaded: null,
			stuff: m
		};
		function L(y) {
			const { href: b } = new URL(y, f);
			w.uses.dependencies.add(b);
		}
		$ && w.uses.dependencies.add(f.href);
		const U = {};
		for (const y in h)
			Object.defineProperty(U, y, {
				get() {
					return w.uses.params.add(y), h[y];
				},
				enumerable: !0
			});
		const k = Ue,
			O = new Rt(f);
		if (_.load) {
			const y = {
				routeId: g,
				params: U,
				props: $ || {},
				get url() {
					return (w.uses.url = !0), O;
				},
				get session() {
					return (w.uses.session = !0), k;
				},
				get stuff() {
					return (w.uses.stuff = !0), { ...m };
				},
				async fetch(b, v) {
					let S;
					typeof b == 'string'
						? (S = b)
						: ((S = b.url),
						  (v = {
								body: b.method === 'GET' || b.method === 'HEAD' ? void 0 : await b.blob(),
								cache: b.cache,
								credentials: b.credentials,
								headers: b.headers,
								integrity: b.integrity,
								keepalive: b.keepalive,
								method: b.method,
								mode: b.mode,
								redirect: b.redirect,
								referrer: b.referrer,
								referrerPolicy: b.referrerPolicy,
								signal: b.signal,
								...v
						  }));
					const V = new URL(S, f).href;
					return L(V), d ? Se(V, v) : At(S, v);
				},
				status: o != null ? o : null,
				error: p != null ? p : null
			};
			(w.loaded = Be(await _.load.call(null, y))),
				w.loaded.stuff && (w.stuff = w.loaded.stuff),
				w.loaded.dependencies && w.loaded.dependencies.forEach(L);
		} else $ && (w.loaded = Be({ props: $ }));
		return w;
	}
	async function Ne({ id: o, url: p, params: _, route: f }, h) {
		var b, v, S, V;
		if (n.id === o && n.promise) return n.promise;
		if (!h) {
			const A = l.get(o);
			if (A) return A;
		}
		const { a: m, b: $, has_shadow: g } = f,
			w = i.url && {
				url: o !== i.url.pathname + i.url.search,
				params: Object.keys(_).filter((A) => i.params[A] !== _[A]),
				session: ee !== i.session_id
			};
		let L = [],
			U = Ye,
			k = !1,
			O = 200,
			y = null;
		m.forEach((A) => A().catch(() => {}));
		e: for (let A = 0; A < m.length; A += 1) {
			let P;
			try {
				if (!m[A]) continue;
				const T = await m[A](),
					D = i.branch[A];
				if (
					!D ||
					T !== D.module ||
					(w.url && D.uses.url) ||
					w.params.some((F) => D.uses.params.has(F)) ||
					(w.session && D.uses.session) ||
					Array.from(D.uses.dependencies).some((F) => c.some((ue) => ue(F))) ||
					(k && D.uses.stuff)
				) {
					let F = {};
					const ue = g && A === m.length - 1;
					if (ue) {
						const Z = await Se(
							`${p.pathname}${p.pathname.endsWith('/') ? '' : '/'}__data.json${p.search}`,
							{ headers: { 'x-sveltekit-load': 'true' } }
						);
						if (Z.ok) {
							const ye = Z.headers.get('x-sveltekit-location');
							if (ye) return { redirect: ye, props: {}, state: i };
							F = Z.status === 204 ? {} : await Z.json();
						} else {
							O = Z.status;
							try {
								y = await Z.json();
							} catch {
								y = new Error('Failed to load data');
							}
						}
					}
					if (
						(y ||
							(P = await te({ module: T, url: p, params: _, props: F, stuff: U, routeId: f.id })),
						P && (ue && (P.uses.url = !0), P.loaded))
					) {
						if (
							(P.loaded.error &&
								((O = (b = P.loaded.status) != null ? b : 500), (y = P.loaded.error)),
							P.loaded.redirect)
						)
							return { redirect: P.loaded.redirect, props: {}, state: i };
						P.loaded.stuff && (k = !0);
					}
				} else P = D;
			} catch (T) {
				(O = 500), (y = ze(T));
			}
			if (y) {
				for (; A--; )
					if ($[A]) {
						let T,
							D,
							fe = A;
						for (; !(D = L[fe]); ) fe -= 1;
						try {
							if (
								((T = await te({
									status: O,
									error: y,
									module: await $[A](),
									url: p,
									params: _,
									stuff: D.stuff,
									routeId: f.id
								})),
								(v = T == null ? void 0 : T.loaded) != null && v.error)
							)
								continue;
							(S = T == null ? void 0 : T.loaded) != null &&
								S.stuff &&
								(U = { ...U, ...T.loaded.stuff }),
								(L = L.slice(0, fe + 1).concat(T));
							break e;
						} catch {
							continue;
						}
					}
				return await ne({ status: O, error: y, url: p, routeId: f.id });
			} else
				(V = P == null ? void 0 : P.loaded) != null && V.stuff && (U = { ...U, ...P.loaded.stuff }),
					L.push(P);
		}
		return await we({ url: p, params: _, stuff: U, branch: L, status: O, error: y, routeId: f.id });
	}
	async function ne({ status: o, error: p, url: _, routeId: f }) {
		var g, w;
		const h = {},
			m = await te({ module: await Nt, url: _, params: h, stuff: {}, routeId: f }),
			$ = await te({
				status: o,
				error: p,
				module: await xt,
				url: _,
				params: h,
				stuff: (m && m.loaded && m.loaded.stuff) || {},
				routeId: f
			});
		return await we({
			url: _,
			params: h,
			stuff: {
				...((g = m == null ? void 0 : m.loaded) == null ? void 0 : g.stuff),
				...((w = $ == null ? void 0 : $.loaded) == null ? void 0 : w.stuff)
			},
			branch: [m, $],
			status: o,
			error: p,
			routeId: f
		});
	}
	function xe(o) {
		if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
		const p = decodeURI(o.pathname.slice(t.length) || '/');
		for (const _ of Ee) {
			const f = _.exec(p);
			if (f) {
				const h = new URL(o.origin + kt(o.pathname, a) + o.search + o.hash);
				return { id: h.pathname + h.search, route: _, params: Lt(f), url: h };
			}
		}
	}
	async function be({
		url: o,
		scroll: p,
		keepfocus: _,
		redirect_chain: f,
		details: h,
		accepted: m,
		blocked: $
	}) {
		const g = i.url;
		let w = !1;
		const L = { from: g, to: o, cancel: () => (w = !0) };
		if ((s.before_navigate.forEach((U) => U(L)), w)) {
			$();
			return;
		}
		ke(C),
			m(),
			d && u.navigating.set({ from: i.url, to: o }),
			await ge(o, f, !1, { scroll: p, keepfocus: _, details: h }, () => {
				const U = { from: g, to: o };
				s.after_navigate.forEach((k) => k(U)), u.navigating.set(null);
			});
	}
	function re(o) {
		return (location.href = o.href), new Promise(() => {});
	}
	return {
		after_navigate: (o) => {
			Le(
				() => (
					s.after_navigate.push(o),
					() => {
						const p = s.after_navigate.indexOf(o);
						s.after_navigate.splice(p, 1);
					}
				)
			);
		},
		before_navigate: (o) => {
			Le(
				() => (
					s.before_navigate.push(o),
					() => {
						const p = s.before_navigate.indexOf(o);
						s.before_navigate.splice(p, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(E || !d) && (R = !1);
		},
		goto: (o, p = {}) => Pe(o, p, []),
		invalidate: (o) => {
			if (typeof o == 'function') c.push(o);
			else {
				const { href: p } = new URL(o, location.href);
				c.push((_) => _ === p);
			}
			return (
				X ||
					(X = Promise.resolve().then(async () => {
						await ge(new URL(location.href), [], !0), (X = null);
					})),
				X
			);
		},
		prefetch: async (o) => {
			const p = new URL(o, Je(document));
			await Te(p);
		},
		prefetch_routes: async (o) => {
			const _ = (o ? Ee.filter((f) => o.some((h) => f.exec(h))) : Ee).map((f) =>
				Promise.all(f.a.map((h) => h()))
			);
			await Promise.all(_);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (f) => {
					let h = !1;
					const m = { from: i.url, to: null, cancel: () => (h = !0) };
					s.before_navigate.forEach(($) => $(m)),
						h ? (f.preventDefault(), (f.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						ke(C);
						try {
							sessionStorage[Me] = JSON.stringify(se);
						} catch {}
					}
				});
			const o = (f) => {
				const h = Ke(f);
				h && h.href && h.hasAttribute('sveltekit:prefetch') && Te(We(h));
			};
			let p;
			const _ = (f) => {
				clearTimeout(p),
					(p = setTimeout(() => {
						var h;
						(h = f.target) == null ||
							h.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', o),
				addEventListener('mousemove', _),
				addEventListener('sveltekit:trigger_prefetch', o),
				addEventListener('click', (f) => {
					if (
						!H ||
						f.button ||
						f.which !== 1 ||
						f.metaKey ||
						f.ctrlKey ||
						f.shiftKey ||
						f.altKey ||
						f.defaultPrevented
					)
						return;
					const h = Ke(f);
					if (!h || !h.href) return;
					const m = h instanceof SVGAElement,
						$ = We(h);
					if (!m && $.origin === 'null') return;
					const g = (h.getAttribute('rel') || '').split(/\s+/);
					if (
						h.hasAttribute('download') ||
						g.includes('external') ||
						h.hasAttribute('sveltekit:reload') ||
						(m ? h.target.baseVal : h.target)
					)
						return;
					const [w, L] = $.href.split('#');
					if (L !== void 0 && w === location.href.split('#')[0]) {
						(_e = !0), ke(C), u.page.set({ ...me, url: $ }), u.page.notify();
						return;
					}
					be({
						url: $,
						scroll: h.hasAttribute('sveltekit:noscroll') ? Re() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: $.href === location.href },
						accepted: () => f.preventDefault(),
						blocked: () => f.preventDefault()
					});
				}),
				addEventListener('popstate', (f) => {
					if (f.state && H) {
						if (f.state[W] === C) return;
						be({
							url: new URL(location.href),
							scroll: se[f.state[W]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								C = f.state[W];
							},
							blocked: () => {
								const h = C - f.state[W];
								history.go(h);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					_e &&
						((_e = !1), history.replaceState({ ...history.state, [W]: ++C }, '', location.href));
				});
			for (const f of document.querySelectorAll('link')) f.rel === 'icon' && (f.href = f.href);
			addEventListener('pageshow', (f) => {
				f.persisted && u.navigating.set(null);
			});
		},
		_hydrate: async ({ status: o, error: p, nodes: _, params: f, routeId: h }) => {
			var U;
			const m = new URL(location.href),
				$ = [];
			let g = {},
				w,
				L;
			try {
				for (let k = 0; k < _.length; k += 1) {
					const O = k === _.length - 1;
					let y;
					if (O) {
						const v = document.querySelector('script[sveltekit\\:data-type="props"]');
						v && (y = JSON.parse(v.textContent));
					}
					const b = await te({
						module: await pe[_[k]](),
						url: m,
						params: f,
						stuff: g,
						status: O ? o : void 0,
						error: O ? p : void 0,
						props: y,
						routeId: h
					});
					if ((y && (b.uses.dependencies.add(m.href), (b.uses.url = !0)), $.push(b), b && b.loaded))
						if (b.loaded.error) {
							if (p) throw b.loaded.error;
							L = {
								status: (U = b.loaded.status) != null ? U : 500,
								error: b.loaded.error,
								url: m,
								routeId: h
							};
						} else b.loaded.stuff && (g = { ...g, ...b.loaded.stuff });
				}
				w = L
					? await ne(L)
					: await we({ url: m, params: f, stuff: g, branch: $, status: o, error: p, routeId: h });
			} catch (k) {
				if (p) throw k;
				w = await ne({ status: 500, error: ze(k), url: m, routeId: h });
			}
			w.redirect && (await re(new URL(w.redirect, location.href))), Ie(w);
		}
	};
}
async function qt({
	paths: r,
	target: e,
	session: t,
	route: a,
	spa: l,
	trailing_slash: c,
	hydrate: u
}) {
	const n = Ct({ target: e, session: t, base: r.base, trailing_slash: c });
	Et({ client: n }),
		ct(r),
		u && (await n._hydrate(u)),
		a && (l && n.goto(location.href, { replaceState: !0 }), n._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Vt as set_public_env, qt as start };
