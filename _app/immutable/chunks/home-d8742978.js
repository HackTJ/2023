import {
	S as m,
	i as x,
	s as C,
	D as _,
	L as h,
	M as c,
	p as v,
	h as i,
	q as d,
	N as u,
	b as L,
	J as f,
	A as w,
	n as g,
	O as p
} from './index-5d6d97c1.js';
function B(n) {
	let a,
		e,
		s,
		o = [n[0], { fill: 'currentColor' }, { viewBox: '0 0 512 512' }],
		l = {};
	for (let t = 0; t < o.length; t += 1) l = _(l, o[t]);
	return {
		c() {
			(a = h('svg')), (e = h('path')), (s = h('path')), this.h();
		},
		l(t) {
			a = c(t, 'svg', { fill: !0, viewBox: !0 });
			var r = v(a);
			(e = c(r, 'path', { d: !0 })),
				v(e).forEach(i),
				(s = c(r, 'path', { d: !0 })),
				v(s).forEach(i),
				r.forEach(i),
				this.h();
		},
		h() {
			d(
				e,
				'd',
				'M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z'
			),
				d(
					s,
					'd',
					'm490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z'
				),
				u(a, l);
		},
		m(t, r) {
			L(t, a, r), f(a, e), f(a, s);
		},
		p(t, [r]) {
			u(a, (l = w(o, [r & 1 && t[0], { fill: 'currentColor' }, { viewBox: '0 0 512 512' }])));
		},
		i: g,
		o: g,
		d(t) {
			t && i(a);
		}
	};
}
function E(n, a, e) {
	return (
		(n.$$set = (s) => {
			e(0, (a = _(_({}, a), p(s))));
		}),
		(a = p(a)),
		[a]
	);
}
class V extends m {
	constructor(a) {
		super(), x(this, a, E, B, C, {});
	}
}
export { V as H };
