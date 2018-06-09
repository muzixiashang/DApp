! function(o, t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["Zepto", "iscroll-zoom", "hammer", "lrz"], t) : "object" == typeof exports ? module.exports = t(require("Zepto"), require("iscroll-zoom"), require("hammer"), require("lrz")) : o.PhotoClip = t(o.Zepto, o.IScroll, o.Hammer, o.lrz)
}(this, function(o, t, e, n) {
	"use strict";

	function i(t, e) {
		var n = o.extend({}, l, e);
		a.call(this, t, n)
	}

	function a(i, a) {
		function u() {
			dt = !0, vt.append(this), k(lt, function() {
				ct = this.naturalWidth, ut = this.naturalHeight
			}, this), k(gt, function() {
				f()
			}), $.call(Z, this)
		}

		function p() {
			var o = {
				zoom: !0,
				scrollX: !0,
				scrollY: !0,
				freeScroll: !0,
				mouseWheel: !0,
				wheelAction: "zoom"
			};
			St = new t(mt[0], o)
		}

		function f() {
			It = 0, Wt = 0, Et = 0, pt = ct, ft = ut, vt.css({
				width: ct,
				height: ut
			}), L(vt, It, Wt, Et), d(ct, ut), St.zoom(St.options.zoomStart);
			var o = .5 * (ot - ct * St.scale),
				t = .5 * (tt - ut * St.scale);
			St.scrollTo(o, t)
		}

		function d(o, t) {
			F(o, t), St.scale < St.options.zoomMin && St.zoom(St.options.zoomMin), gt.css({
				width: o,
				height: t
			}), mt.append(gt), St.refresh()
		}

		function h() {
			if(s) {
				Ft = new e.Manager(gt[0]), Ft.add(new e.Rotate);
				var o, t;
				Ft.on("rotatemove", function(e) {
					jt || (o = e.rotation, o > 180 ? o -= 360 : -180 > o && (o += 360), t = o > 0 ? 1 : 0 > o ? -1 : 0)
				}), Ft.on("rotateend", function(e) {
					jt || Math.abs(o) > 30 && (1 == t ? m(e.center) : -1 == t && g(e.center))
				})
			} else gt.on("dblclick", function(o) {
				m({
					x: o.clientX,
					y: o.clientY
				})
			})
		}

		function m(o) {
			v(90, o)
		}

		function g(o) {
			v(-90, o)
		}

		function v(o, t) {
			if(!jt) {
				jt = !0;
				var e;
				e = t ? w(gt, t.x, t.y) : z(gt, mt, .5 * ot, .5 * tt);
				var n = T(Et, e),
					i = n.x,
					a = n.y,
					r = 0,
					s = 0,
					l = 0,
					c = 0,
					u = Et + o;
				90 == u || -270 == u ? (r = i + a, s = a - i, u > Et ? (l = ut - i - a, c = i - a) : Et > u && (l = ut - a - (ct - i), c = i + a - ut), pt = ut, ft = ct) : 180 == u || -180 == u ? (r = 2 * i, s = 2 * a, u > Et ? (l = ct - i - (ut - a), c = ut - (i + a)) : Et > u && (l = ct - (i + a), c = ut - a - (ct - i)), pt = ct, ft = ut) : 270 == u || -90 == u ? (r = i - a, s = i + a, u > Et ? (l = i + a - ct, c = ct - i - (ut - a)) : Et > u && (l = a - i, c = ct - i - a), pt = ut, ft = ct) : (0 == u || 360 == u || -360 == u) && (r = 0, s = 0, u > Et ? (l = i - a, c = i + a - ct) : Et > u && (l = i + a - ut, c = a - i), pt = ct, ft = ut), 0 == Et ? (It = 0, Wt = 0) : 90 == Et || -270 == Et ? (It -= i + a, Wt -= a - i) : 180 == Et || -180 == Et ? (It -= 2 * i, Wt -= 2 * a) : (270 == Et || -90 == Et) && (It -= i - a, Wt -= i + a), It = It.toFixed(2) - 0, Wt = Wt.toFixed(2) - 0, L(vt, It, Wt, Et, i, a), A(vt, It, Wt, u, 200, function() {
					jt = !1, Et = u % 360, It += r + l, Wt += s + c, It = It.toFixed(2) - 0, Wt = Wt.toFixed(2) - 0, L(vt, It, Wt, Et), St.scrollTo(St.x - l * St.scale, St.y - c * St.scale), d(pt, ft)
				})
			}
		}

		function b() {
			Mt = document.createElement("canvas")
		}

		function x() {
			if(!dt) return void showWarn("当前没有图片可以裁剪!", "确定");
			var o = z(gt, mt),
				t = St.scale,
				e = Mt.getContext("2d");
			e.clearRect(0, 0, Mt.width, Mt.height), e.save(), it && at ? (Mt.width = it, Mt.height = at, e.scale(it / ot * t, at / tt * t)) : (Mt.width = ot / t, Mt.height = tt / t), e.translate(It - o.x / t, Wt - o.y / t), e.rotate(Et * Math.PI / 180), e.drawImage(lt[0], 0, 0), e.restore();
			var n = Mt.toDataURL(O, D);
			bt.css("background-image", "url(" + n + ")"), J.call(Z, n)
		}

		function y() {
			I()
		}

		function z(o, t, e, n) {
			e = e || 0, n = n || 0;
			var i, a;
			return k(o, function() {
				i = o.offset()
			}), k(t, function() {
				a = t.offset()
			}), {
				x: a.left - i.left + e,
				y: a.top - i.top + n
			}
		}

		function w(o, t, e) {
			t = t || 0, e = e || 0;
			var n;
			return k(o, function() {
				n = o.offset()
			}), {
				x: t + Rt.scrollLeft() - n.left,
				y: e + Rt.scrollTop() - n.top
			}
		}

		function k(t, e, n) {
			var i = o();
			o.each(t, function() {}), "function" == typeof e && e.call(n || this), i.hide()
		}

		function T(o, t) {
			var e = St.scale,
				n = {};
			return 0 == o ? (n.x = t.x / e, n.y = t.y / e) : 90 == o || -270 == o ? (n.x = t.y / e, n.y = ut - t.x / e) : 180 == o || -180 == o ? (n.x = ct - t.x / e, n.y = ut - t.y / e) : (270 == o || -90 == o) && (n.x = ct - t.y / e, n.y = t.x / e), n
		}

		function M(o, t, e, n) {
			var i = o / e,
				a = t / n;
			return i > a ? i : a
		}

		function F(o, t) {
			St.options.zoomMin = M(ot, tt, o, t), St.options.zoomMax = Math.max(1, St.options.zoomMin), St.options.zoomStart = Math.min(St.options.zoomMax, M(Ct, Lt, o, t))
		}

		function S() {
			lt && lt.length && (lt.off(), lt.remove(), delete lt[0])
		}

		function C(t) {
			S(), lt = o("<img>").css({
				"user-select": "none",
				"pointer-events": "none"
			}), rt || (rt = !0, B.call(Z, lt[0])), lt.on("load", u), lt.attr("src", t)
		}

		function L(o, t, e, n, i, a) {
			i = i || 0, a = a || 0;
			var r = {};
			r[c + "transform"] = "translateZ(0) translate(" + t + "px," + e + "px) rotate(" + n + "deg)", r[c + "transform-origin"] = i + "px " + a + "px", o.css(r)
		}

		function A(o, t, e, n, i, a) {
			o.css(c + "transform"), o.css(c + "transition", c + "transform " + i + "ms"), o.one(r, function() {
				o.css(c + "transition", ""), a.call(this)
			}), o.css(c + "transform", "translateZ(0) translate(" + t + "px," + e + "px) rotate(" + n + "deg)")
		}

		function R(o) {
			var t = o + "";
			return /%$/.test(t)
		}

		function j() {
			ht = o(i).css({
				"user-select": "none",
				overflow: "hidden"
			}), "static" == ht.css("position") && ht.css("position", "relative"), mt = o('<div class="photo-clip-view">').css({
				position: "absolute",
				left: "50%",
				top: "50%"
			}).appendTo(ht), gt = o('<div class="photo-clip-moveLayer">').appendTo(mt), vt = o('<div class="photo-clip-rotateLayer">').appendTo(gt);
			var t = o('<div class="photo-clip-mask">').css({
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%",
				"pointer-events": "none"
			}).appendTo(ht);
			xt = o('<div class="photo-clip-mask-left">').css({
				position: "absolute",
				left: 0,
				right: "50%",
				top: "50%",
				bottom: "50%",
				width: "auto",
				"background-color": "rgba(0,0,0,.5)"
			}).appendTo(t), yt = o('<div class="photo-clip-mask-right">').css({
				position: "absolute",
				left: "50%",
				right: 0,
				top: "50%",
				bottom: "50%",
				"background-color": "rgba(0,0,0,.5)"
			}).appendTo(t), zt = o('<div class="photo-clip-mask-top">').css({
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: "50%",
				"background-color": "rgba(0,0,0,.5)"
			}).appendTo(t), wt = o('<div class="photo-clip-mask-bottom">').css({
				position: "absolute",
				left: 0,
				right: 0,
				top: "50%",
				bottom: 0,
				"background-color": "rgba(0,0,0,.5)"
			}).appendTo(t), Tt = o('<div class="photo-clip-area">').css({
				border: "1px dashed #ddd",
				position: "absolute",
				left: "50%",
				top: "50%"
			}).appendTo(t), bt = o(X), bt.length && bt.css({
				"background-color": "#666",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"background-size": "contain"
			})
		}

		function I(o, t) {
			var e = et,
				n = nt;
			if("number" == typeof o && (et = o), "number" == typeof t && (nt = t), ot = et, tt = nt, (N || V) && (_ = et / nt), k(ht, function() {
					Ct = ht.width(), Lt = ht.height()
				}), N && (ot = Ct / 100 * parseFloat(N), V || (tt = ot / _)), V && (tt = Lt / 100 * parseFloat(V), N || (ot = tt * _)), mt.css({
					width: ot,
					height: tt,
					"margin-left": -ot / 2,
					"margin-top": -tt / 2
				}), xt.css({
					"margin-right": ot / 2,
					"margin-top": -tt / 2,
					"margin-bottom": -tt / 2
				}), yt.css({
					"margin-left": ot / 2,
					"margin-top": -tt / 2,
					"margin-bottom": -tt / 2
				}), zt.css({
					"margin-bottom": tt / 2
				}), wt.css({
					"margin-top": tt / 2
				}), Tt.css({
					width: ot,
					height: tt,
					"margin-left": -ot / 2 - 1,
					"margin-top": -tt / 2 - 1
				}), pt && ft) {
				var i = (ot - e) / 2 * St.scale,
					a = (tt - n) / 2 * St.scale;
				St.scrollBy(i, a), d(pt, ft)
			}
		}

		function W(o) {
			C(o)
		}

		function E() {
			st.off("change"), st = null, At.off("click"), At = null, Ft ? (Ft.off("rotatemove"), Ft.off("rotateend"), Ft.destroy(), Ft = null) : gt.off("dblclick"), St.destroy(), St = null, ht.empty(), ht = null, mt = null, gt = null, vt = null, xt = null, yt = null, zt = null, wt = null, kt = null, Tt = null, bt.css({
				"background-color": "",
				"background-repeat": "",
				"background-position": "",
				"background-size": ""
			}), bt = null, lt = null, Mt = null
		}
		var Z = this,
			q = a.size,
			P = a.adaptive,
			H = a.outputSize,
			O = a.outputType || "image/jpeg",
			D = a.outputQuality,
			Q = a.file,
			U = a.source,
			X = a.view,
			Y = a.ok,
			B = a.loadStart,
			$ = a.loadComplete,
			G = a.loadError,
			J = a.clipFinish,
			K = a.lrzOption;
		o.isArray(q) || (q = l.size), o.isArray(H) || (H = l.outputSize);
		var N, V, _, ot, tt, et = q[0] || l.size[0],
			nt = q[1] || l.size[1],
			it = Math.max(H[0], 0),
			at = Math.max(H[1], 0);
		o.isArray(P) && (P[0] && (N = R(P[0]) ? P[0] : !1), P[1] && (V = R(P[1]) ? P[1] : !1)), "jpg" === O ? O = "image/jpeg" : "png" === O && (O = "image/png");
		var rt = !1;
		if(Q)
			if(window.FileReader) {
				var st = o(Q);
				st.length && (s || st.attr("accept", "image/jpeg, image/x-png, image/gif"), st.on("change", function() {
					if(this.files.length) {
						var o = this.files[0];
						if(!/image\/\w+/.test(o.type)) return console.log("图片格式不正确，请选择正确格式的图片文件！"), G.call(Z, "Image format error"), !1;
						rt || (rt = !0, B.call(Z, o));
						var t = new FileReader;
						t.onprogress = function(o) {
							console.log((o.loaded / o.total * 100).toFixed() + "%")
						}, t.onload = function() {
							n(o, K).then(function(o) {
								C(o.base64), rt = !1
							}).catch(function(o) {
								console.log("图片处理失败"), G.call(Z, o), rt = !1
							})
						}, t.onerror = function(o) {
							console.log("图片加载失败"), G.call(Z, o), rt = !1
						}, t.readAsDataURL(o)
					}
				}), st.click(function() {
					this.value = ""
				}))
			} else alert("您的浏览器不支持 HTML5 的 FileReader API，因此不能使用 file 控件上传图片！");
		U && W(U);
		var lt, ct, ut, pt, ft, dt, ht, mt, gt, vt, bt, xt, yt, zt, wt, kt, Tt, Mt, Ft, St, Ct, Lt;
		j(), p(), h(), b();
		var At = o(Y);
		At.length && At.on("click", function() {
			x()
		});
		var Rt = o(window);
		y(), Rt.resize(y);
		var jt, It, Wt, Et;
		Z.setSize = I, Z.setImg = W, Z.rotateCW = m, Z.rotateCCW = g, Z.destroy = E
	}
	var r, s = !!navigator.userAgent.match(/mobile/i),
		l = {
			size: [260, 260],
			adaptive: null,
			outputSize: [0, 0],
			outputType: "jpg",
			outputQuality: 1,
			file: "",
			source: "",
			view: "",
			ok: "",
			loadStart: function() {},
			loadComplete: function() {},
			loadError: function() {},
			clipFinish: function() {},
			lrzOption: {}
		},
		c = "";
	return function() {
		var o, t = {
				Webkit: "webkit",
				Moz: "",
				O: "o"
			},
			e = document.documentElement,
			n = function(t) {
				return o ? o + t : t.toLowerCase()
			};
		for(var i in t)
			if(void 0 !== e.style[i + "TransitionProperty"]) {
				c = "-" + i.toLowerCase() + "-", o = t[i];
				break
			}
		r = n("TransitionEnd")
	}(), i
});