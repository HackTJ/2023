import {
	S as Q,
	i as Y,
	s as z,
	l as b,
	u as S,
	a as P,
	m as v,
	p as w,
	v as O,
	h as p,
	c as $,
	q as g,
	b as N,
	J as f,
	w as q,
	n as A,
	x as R,
	y as B,
	z as L,
	f as E,
	d as W,
	t as C,
	C as M,
	K as J,
	g as K
} from '../chunks/index-5d6d97c1.js';
import { b as U } from '../chunks/paths-b9644fda.js';
import { H as G } from '../chunks/home-d8742978.js';
import { F as Z } from '../chunks/Footer-972a73f8.js';
function ee(i) {
	let e, t, r, c, _, n, y, k, l, x;
	return {
		c() {
			(e = b('div')),
				(t = b('div')),
				(r = b('h1')),
				(c = S(i[0])),
				(_ = P()),
				(n = b('p')),
				(y = S(i[1])),
				(k = P()),
				(l = b('a')),
				(x = S('Open Resource')),
				this.h();
		},
		l(u) {
			e = v(u, 'DIV', { class: !0 });
			var d = w(e);
			t = v(d, 'DIV', {});
			var m = w(t);
			r = v(m, 'H1', { class: !0 });
			var s = w(r);
			(c = O(s, i[0])), s.forEach(p), (_ = $(m)), (n = v(m, 'P', { class: !0 }));
			var I = w(n);
			(y = O(I, i[1])),
				I.forEach(p),
				m.forEach(p),
				(k = $(d)),
				(l = v(d, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var a = w(l);
			(x = O(a, 'Open Resource')), a.forEach(p), d.forEach(p), this.h();
		},
		h() {
			g(r, 'class', 'font-bold text-2xl'),
				g(n, 'class', 'mt-2'),
				g(l, 'href', i[2]),
				g(l, 'target', '_blank'),
				g(l, 'rel', 'noopener noreferred'),
				g(
					l,
					'class',
					'block mt-4 text-center py-4 px-6 font-bold rounded-xl bg-black hover:bg-blackberry-800 text-white w-full'
				),
				g(
					e,
					'class',
					'p-6 bg-blueberry-200 text-blackberry-800 rounded-2xl flex flex-col justify-between'
				);
		},
		m(u, d) {
			N(u, e, d), f(e, t), f(t, r), f(r, c), f(t, _), f(t, n), f(n, y), f(e, k), f(e, l), f(l, x);
		},
		p(u, [d]) {
			d & 1 && q(c, u[0]), d & 2 && q(y, u[1]), d & 4 && g(l, 'href', u[2]);
		},
		i: A,
		o: A,
		d(u) {
			u && p(e);
		}
	};
}
function te(i, e, t) {
	let { title: r, description: c, href: _ } = e;
	return (
		(i.$$set = (n) => {
			'title' in n && t(0, (r = n.title)),
				'description' in n && t(1, (c = n.description)),
				'href' in n && t(2, (_ = n.href));
		}),
		[r, c, _]
	);
}
class re extends Q {
	constructor(e) {
		super(), Y(this, e, te, ee, z, { title: 0, description: 1, href: 2 });
	}
}
const D = [
	{
		title: 'Python',
		description:
			'Python is a high-level programming language that serves as a great first coding language to learn and for general-purpose software engineering. Python can be valuable to know and has grown in popularity as it is an open-source language and has many resources that can support new coders.',
		href: 'https://docs.google.com/document/d/e/2PACX-1vQlx4WjhDlsmvwigkAxDWICOsaYA9gYEGqPtz10IHSNYy5Bw5duyzL93kOwNERSM5V8O9Cnt65-gk6w/pub'
	},
	{
		title: 'Javascript',
		description:
			"Five words: world's most popular programming language. If you\u2019re interested in website development, this is the most important programming language to know! It\u2019s the default language of the internet and very valuable for game designers (perfect for a hackathon\u2026) It\u2019s also easy to learn!",
		href: 'https://docs.google.com/document/d/e/2PACX-1vRhPFapMdBVmwfWlPbH2Ld7N-2jYrwoEOGHcQKm84qXv5wsDjX2VBwO9n1IOsPl_QJX3UMPHd3E5okB/pub'
	},
	{
		title: 'HTML/CSS',
		description:
			"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. Using HTML, you can define headers, paragraphs, links, images, and more, so your browser knows how to structure the web page you're looking at. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ",
		href: 'https://docs.google.com/document/d/e/2PACX-1vQegX0Ukn7X2HX-AraYg70VrByO3j2EWhkQEvoFcs9AFfL34ojgICmfeXrgSz9ObEqk6_iqRP7E7qwK/pub'
	}
];
function T(i, e, t) {
	const r = i.slice();
	return (r[0] = e[t].title), (r[1] = e[t].href), (r[2] = e[t].description), r;
}
function F(i) {
	let e, t;
	return (
		(e = new re({ props: { title: i[0], href: i[1], description: i[2] } })),
		{
			c() {
				R(e.$$.fragment);
			},
			l(r) {
				B(e.$$.fragment, r);
			},
			m(r, c) {
				L(e, r, c), (t = !0);
			},
			p: A,
			i(r) {
				t || (E(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				C(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				M(e, r);
			}
		}
	);
}
function ae(i) {
	let e, t, r, c, _, n, y, k, l, x, u, d;
	c = new G({ props: { width: '32px', class: 'text-theme-100 hover:text-theme-200' } });
	let m = D,
		s = [];
	for (let a = 0; a < m.length; a += 1) s[a] = F(T(i, m, a));
	const I = (a) =>
		C(s[a], 1, 1, () => {
			s[a] = null;
		});
	return (
		(u = new Z({ props: { class: 'mt-8' } })),
		{
			c() {
				(e = b('section')),
					(t = b('div')),
					(r = b('a')),
					R(c.$$.fragment),
					(_ = P()),
					(n = b('h1')),
					(y = S('Beginner Resources')),
					(k = P()),
					(l = b('div'));
				for (let a = 0; a < s.length; a += 1) s[a].c();
				(x = P()), R(u.$$.fragment), this.h();
			},
			l(a) {
				e = v(a, 'SECTION', { class: !0 });
				var h = w(e);
				t = v(h, 'DIV', { class: !0 });
				var o = w(t);
				r = v(o, 'A', { href: !0 });
				var H = w(r);
				B(c.$$.fragment, H), H.forEach(p), (_ = $(o)), (n = v(o, 'H1', { class: !0 }));
				var V = w(n);
				(y = O(V, 'Beginner Resources')),
					V.forEach(p),
					(k = $(o)),
					(l = v(o, 'DIV', { class: !0 }));
				var j = w(l);
				for (let X = 0; X < s.length; X += 1) s[X].l(j);
				j.forEach(p), o.forEach(p), (x = $(h)), B(u.$$.fragment, h), h.forEach(p), this.h();
			},
			h() {
				g(r, 'href', U + '/'),
					g(n, 'class', 'text-5xl font-black text-white mt-8'),
					g(
						l,
						'class',
						'mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'
					),
					g(t, 'class', 'p-8 md:p-12'),
					g(e, 'class', 'text-blueberry-200 flex flex-col justify-between min-h-screen');
			},
			m(a, h) {
				N(a, e, h), f(e, t), f(t, r), L(c, r, null), f(t, _), f(t, n), f(n, y), f(t, k), f(t, l);
				for (let o = 0; o < s.length; o += 1) s[o].m(l, null);
				f(e, x), L(u, e, null), (d = !0);
			},
			p(a, [h]) {
				if (h & 0) {
					m = D;
					let o;
					for (o = 0; o < m.length; o += 1) {
						const H = T(a, m, o);
						s[o]
							? (s[o].p(H, h), E(s[o], 1))
							: ((s[o] = F(H)), s[o].c(), E(s[o], 1), s[o].m(l, null));
					}
					for (K(), o = m.length; o < s.length; o += 1) I(o);
					W();
				}
			},
			i(a) {
				if (!d) {
					E(c.$$.fragment, a);
					for (let h = 0; h < m.length; h += 1) E(s[h]);
					E(u.$$.fragment, a), (d = !0);
				}
			},
			o(a) {
				C(c.$$.fragment, a), (s = s.filter(Boolean));
				for (let h = 0; h < s.length; h += 1) C(s[h]);
				C(u.$$.fragment, a), (d = !1);
			},
			d(a) {
				a && p(e), M(c), J(s, a), M(u);
			}
		}
	);
}
class ie extends Q {
	constructor(e) {
		super(), Y(this, e, null, ae, z, {});
	}
}
export { ie as default };
