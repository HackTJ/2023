import {
	S as te,
	i as ne,
	s as re,
	F as oe,
	l as h,
	u as P,
	a as w,
	m as d,
	p as y,
	v as E,
	h as a,
	c as k,
	q as x,
	b as v,
	J as l,
	w as se,
	G as ae,
	H as le,
	I as ie,
	f as I,
	t as M,
	n as Q,
	x as j,
	y as L,
	z as O,
	C as Y
} from '../chunks/index-5d6d97c1.js';
import { b as ue } from '../chunks/paths-b9644fda.js';
import { H as fe } from '../chunks/home-d8742978.js';
import { F as ce } from '../chunks/Footer-972a73f8.js';
function he(m) {
	let e, r;
	return {
		c() {
			(e = h('a')), (r = P(m[2])), this.h();
		},
		l(s) {
			e = d(s, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var o = y(e);
			(r = E(o, m[2])), o.forEach(a), this.h();
		},
		h() {
			x(e, 'href', m[1]),
				x(e, 'target', '_blank'),
				x(e, 'rel', 'noopener noreferred'),
				x(
					e,
					'class',
					'block mt-4 text-center py-3 px-4 bg-theme-100 hover:bg-theme-200 text-blueberry-800 font-bold rounded-2xl'
				);
		},
		m(s, o) {
			v(s, e, o), l(e, r);
		},
		p(s, o) {
			o & 4 && se(r, s[2]), o & 2 && x(e, 'href', s[1]);
		},
		d(s) {
			s && a(e);
		}
	};
}
function de(m) {
	let e, r;
	return {
		c() {
			(e = h('div')), (r = P('Not Available Yet!')), this.h();
		},
		l(s) {
			e = d(s, 'DIV', { class: !0 });
			var o = y(e);
			(r = E(o, 'Not Available Yet!')), o.forEach(a), this.h();
		},
		h() {
			x(
				e,
				'class',
				'block mt-4 text-center py-3 px-4 bg-gray-400 text-blueberry-800 font-bold rounded-2xl'
			);
		},
		m(s, o) {
			v(s, e, o), l(e, r);
		},
		p: Q,
		d(s) {
			s && a(e);
		}
	};
}
function pe(m) {
	let e, r, s, o, p, i, f;
	const u = m[5].default,
		n = oe(u, m, m[4], null);
	function $(t, c) {
		return t[3] ? de : he;
	}
	let g = $(m),
		b = g(m);
	return {
		c() {
			(e = h('div')),
				(r = h('div')),
				(s = h('h2')),
				(o = P(m[0])),
				(p = w()),
				n && n.c(),
				(i = w()),
				b.c(),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var c = y(e);
			r = d(c, 'DIV', {});
			var C = y(r);
			s = d(C, 'H2', { class: !0 });
			var A = y(s);
			(o = E(A, m[0])),
				A.forEach(a),
				(p = k(C)),
				n && n.l(C),
				C.forEach(a),
				(i = k(c)),
				b.l(c),
				c.forEach(a),
				this.h();
		},
		h() {
			x(s, 'class', 'text-theme-100 text-3xl font-black mb-2'),
				x(e, 'class', 'flex flex-col flex-1 justify-between');
		},
		m(t, c) {
			v(t, e, c),
				l(e, r),
				l(r, s),
				l(s, o),
				l(r, p),
				n && n.m(r, null),
				l(e, i),
				b.m(e, null),
				(f = !0);
		},
		p(t, [c]) {
			(!f || c & 1) && se(o, t[0]),
				n && n.p && (!f || c & 16) && ae(n, u, t, t[4], f ? ie(u, t[4], c, null) : le(t[4]), null),
				g === (g = $(t)) && b ? b.p(t, c) : (b.d(1), (b = g(t)), b && (b.c(), b.m(e, null)));
		},
		i(t) {
			f || (I(n, t), (f = !0));
		},
		o(t) {
			M(n, t), (f = !1);
		},
		d(t) {
			t && a(e), n && n.d(t), b.d();
		}
	};
}
function me(m, e, r) {
	let { $$slots: s = {}, $$scope: o } = e,
		{ title: p } = e,
		{ link: i } = e,
		{ linkText: f } = e,
		{ disabled: u = !1 } = e;
	return (
		(m.$$set = (n) => {
			'title' in n && r(0, (p = n.title)),
				'link' in n && r(1, (i = n.link)),
				'linkText' in n && r(2, (f = n.linkText)),
				'disabled' in n && r(3, (u = n.disabled)),
				'$$scope' in n && r(4, (o = n.$$scope));
		}),
		[p, i, f, u, o, s]
	);
}
class Z extends te {
	constructor(e) {
		super(), ne(this, e, me, pe, re, { title: 0, link: 1, linkText: 2, disabled: 3 });
	}
}
function ge(m) {
	let e, r, s, o, p;
	return {
		c() {
			(e = h('p')),
				(r = P(`Participants must be current high school students. Computer science and engineering
					experience is not necessary, as we'll have workshops and mentors so you can learn.
					Please note that registering alone does not guarantee you will receive a ticket. Admission
					decisions will be made based on a variety of factors including the date/time you register.`)),
				(s = h('br')),
				(o = h('br')),
				(p = P(`
					Mentor, Judge, Volunteer, and Photographer Registration is coming soon!`));
		},
		l(i) {
			e = d(i, 'P', {});
			var f = y(e);
			(r = E(
				f,
				`Participants must be current high school students. Computer science and engineering
					experience is not necessary, as we'll have workshops and mentors so you can learn.
					Please note that registering alone does not guarantee you will receive a ticket. Admission
					decisions will be made based on a variety of factors including the date/time you register.`
			)),
				(s = d(f, 'BR', {})),
				(o = d(f, 'BR', {})),
				(p = E(
					f,
					`
					Mentor, Judge, Volunteer, and Photographer Registration is coming soon!`
				)),
				f.forEach(a);
		},
		m(i, f) {
			v(i, e, f), l(e, r), l(e, s), l(e, o), l(e, p);
		},
		p: Q,
		d(i) {
			i && a(e);
		}
	};
}
function be(m) {
	let e, r, s, o, p, i, f;
	return {
		c() {
			(e = h('p')),
				(r = P(`Judges must be present during the entire judging process (9:00 a.m. to 11:00 a.m. on
					Sunday), but not necessarily during the entire hackathon. Computer science and engineering
					experience is preferred but not required.`)),
				(s = w()),
				(o = h('br')),
				(p = w()),
				(i = h('p')),
				(f =
					P(`Mentors help students if they have any technical questions, and don't have to be present
					online the entire time. Computer science and engineering experience is required.`));
		},
		l(u) {
			e = d(u, 'P', {});
			var n = y(e);
			(r = E(
				n,
				`Judges must be present during the entire judging process (9:00 a.m. to 11:00 a.m. on
					Sunday), but not necessarily during the entire hackathon. Computer science and engineering
					experience is preferred but not required.`
			)),
				n.forEach(a),
				(s = k(u)),
				(o = d(u, 'BR', {})),
				(p = k(u)),
				(i = d(u, 'P', {}));
			var $ = y(i);
			(f = E(
				$,
				`Mentors help students if they have any technical questions, and don't have to be present
					online the entire time. Computer science and engineering experience is required.`
			)),
				$.forEach(a);
		},
		m(u, n) {
			v(u, e, n), l(e, r), v(u, s, n), v(u, o, n), v(u, p, n), v(u, i, n), l(i, f);
		},
		p: Q,
		d(u) {
			u && a(e), u && a(s), u && a(o), u && a(p), u && a(i);
		}
	};
}
function _e(m) {
	let e, r, s, o, p, i, f, u, n, $, g, b;
	return {
		c() {
			(e = h('p')),
				(r = P(`Photographers are only needed for 2 hours at a time (aside from the 2.5 hr shift on
					Sunday), but can sign up for multiple shifts. Participants can also be photographers.`)),
				(s = w()),
				(o = h('br')),
				(p = w()),
				(i = h('p')),
				(f =
					P(`Photographers who are not participants will be given food and sponsor swag, but are NOT
					allowed to sign up for the 10pm-12am or 12am-2pm shifts.`)),
				(u = w()),
				(n = h('br')),
				($ = w()),
				(g = h('p')),
				(b = P(`This year, because of county regulations, only photographers who are part of Fairfax
					County Public Schools will be able to attend the in-person event.`));
		},
		l(t) {
			e = d(t, 'P', {});
			var c = y(e);
			(r = E(
				c,
				`Photographers are only needed for 2 hours at a time (aside from the 2.5 hr shift on
					Sunday), but can sign up for multiple shifts. Participants can also be photographers.`
			)),
				c.forEach(a),
				(s = k(t)),
				(o = d(t, 'BR', {})),
				(p = k(t)),
				(i = d(t, 'P', {}));
			var C = y(i);
			(f = E(
				C,
				`Photographers who are not participants will be given food and sponsor swag, but are NOT
					allowed to sign up for the 10pm-12am or 12am-2pm shifts.`
			)),
				C.forEach(a),
				(u = k(t)),
				(n = d(t, 'BR', {})),
				($ = k(t)),
				(g = d(t, 'P', {}));
			var A = y(g);
			(b = E(
				A,
				`This year, because of county regulations, only photographers who are part of Fairfax
					County Public Schools will be able to attend the in-person event.`
			)),
				A.forEach(a);
		},
		m(t, c) {
			v(t, e, c),
				l(e, r),
				v(t, s, c),
				v(t, o, c),
				v(t, p, c),
				v(t, i, c),
				l(i, f),
				v(t, u, c),
				v(t, n, c),
				v(t, $, c),
				v(t, g, c),
				l(g, b);
		},
		p: Q,
		d(t) {
			t && a(e),
				t && a(s),
				t && a(o),
				t && a(p),
				t && a(i),
				t && a(u),
				t && a(n),
				t && a($),
				t && a(g);
		}
	};
}
function ve(m) {
	let e, r, s, o, p, i, f, u, n, $, g, b, t, c, C, A, z, S, V, K, B, W, J, X, q, G;
	return (
		(o = new fe({ props: { width: '32px', class: 'text-theme-100 hover:text-theme-200' } })),
		(V = new Z({
			props: {
				title: 'Participant',
				link: 'https://forms.gle/sayeNtjrL95pk9647',
				linkText: 'Participant Registration',
				$$slots: { default: [ge] },
				$$scope: { ctx: m }
			}
		})),
		(B = new Z({
			props: {
				title: 'Mentor/Judge/Volunteer',
				link: 'https://forms.gle/R5cgvRmeKSaVhZNY9',
				linkText: 'Mentor/Judge/Volunteer Registration',
				disabled: !0,
				$$slots: { default: [be] },
				$$scope: { ctx: m }
			}
		})),
		(J = new Z({
			props: {
				title: 'Photographer',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSd-Q9vTl-xkA2DhxWSOO2GcBXTD9CcCr-juxe27faky3gLHdw/viewform?usp=sf_link',
				linkText: 'Photographer',
				disabled: !0,
				$$slots: { default: [_e] },
				$$scope: { ctx: m }
			}
		})),
		(q = new ce({ props: { class: 'mt-8' } })),
		{
			c() {
				(e = h('section')),
					(r = h('div')),
					(s = h('a')),
					j(o.$$.fragment),
					(p = w()),
					(i = h('h1')),
					(f = P('Registration')),
					(u = w()),
					(n = h('p')),
					($ =
						P(`Registration opened on January 28, 2023 at 7:00 pm EST and will close on February 11, 2023 at 11:59
			pm EST. All attendees must adhere to the
			`)),
					(g = h('a')),
					(b = h('b')),
					(t = P('MLH Code of Conduct')),
					(c = P('.')),
					(C = h('br')),
					(A = h('br')),
					(z = w()),
					(S = h('div')),
					j(V.$$.fragment),
					(K = w()),
					j(B.$$.fragment),
					(W = w()),
					j(J.$$.fragment),
					(X = w()),
					j(q.$$.fragment),
					this.h();
			},
			l(_) {
				e = d(_, 'SECTION', { class: !0 });
				var R = y(e);
				r = d(R, 'DIV', { class: !0 });
				var T = y(r);
				s = d(T, 'A', { href: !0 });
				var D = y(s);
				L(o.$$.fragment, D), D.forEach(a), (p = k(T)), (i = d(T, 'H1', { class: !0 }));
				var N = y(i);
				(f = E(N, 'Registration')), N.forEach(a), (u = k(T)), (n = d(T, 'P', {}));
				var F = y(n);
				($ = E(
					F,
					`Registration opened on January 28, 2023 at 7:00 pm EST and will close on February 11, 2023 at 11:59
			pm EST. All attendees must adhere to the
			`
				)),
					(g = d(F, 'A', { class: !0, href: !0, target: !0, rel: !0 }));
				var U = y(g);
				b = d(U, 'B', {});
				var ee = y(b);
				(t = E(ee, 'MLH Code of Conduct')),
					ee.forEach(a),
					U.forEach(a),
					(c = E(F, '.')),
					(C = d(F, 'BR', {})),
					(A = d(F, 'BR', {})),
					F.forEach(a),
					(z = k(T)),
					(S = d(T, 'DIV', { class: !0 }));
				var H = y(S);
				L(V.$$.fragment, H),
					(K = k(H)),
					L(B.$$.fragment, H),
					(W = k(H)),
					L(J.$$.fragment, H),
					H.forEach(a),
					T.forEach(a),
					(X = k(R)),
					L(q.$$.fragment, R),
					R.forEach(a),
					this.h();
			},
			h() {
				x(s, 'href', ue + '/'),
					x(i, 'class', 'text-5xl font-black text-white mt-8 mb-2'),
					x(g, 'class', 'text-theme-100 hover:text-theme-200 underline'),
					x(g, 'href', 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf'),
					x(g, 'target', '_blank'),
					x(g, 'rel', 'noreferrer'),
					x(
						S,
						'class',
						'flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-12 mt-4 h-full grow'
					),
					x(r, 'class', 'p-8 md:p-12 flex flex-col grow'),
					x(e, 'class', 'text-blueberry-200 flex flex-col justify-between min-h-screen');
			},
			m(_, R) {
				v(_, e, R),
					l(e, r),
					l(r, s),
					O(o, s, null),
					l(r, p),
					l(r, i),
					l(i, f),
					l(r, u),
					l(r, n),
					l(n, $),
					l(n, g),
					l(g, b),
					l(b, t),
					l(n, c),
					l(n, C),
					l(n, A),
					l(r, z),
					l(r, S),
					O(V, S, null),
					l(S, K),
					O(B, S, null),
					l(S, W),
					O(J, S, null),
					l(e, X),
					O(q, e, null),
					(G = !0);
			},
			p(_, [R]) {
				const T = {};
				R & 1 && (T.$$scope = { dirty: R, ctx: _ }), V.$set(T);
				const D = {};
				R & 1 && (D.$$scope = { dirty: R, ctx: _ }), B.$set(D);
				const N = {};
				R & 1 && (N.$$scope = { dirty: R, ctx: _ }), J.$set(N);
			},
			i(_) {
				G ||
					(I(o.$$.fragment, _),
					I(V.$$.fragment, _),
					I(B.$$.fragment, _),
					I(J.$$.fragment, _),
					I(q.$$.fragment, _),
					(G = !0));
			},
			o(_) {
				M(o.$$.fragment, _),
					M(V.$$.fragment, _),
					M(B.$$.fragment, _),
					M(J.$$.fragment, _),
					M(q.$$.fragment, _),
					(G = !1);
			},
			d(_) {
				_ && a(e), Y(o), Y(V), Y(B), Y(J), Y(q);
			}
		}
	);
}
class ke extends te {
	constructor(e) {
		super(), ne(this, e, null, ve, re, {});
	}
}
export { ke as default };
