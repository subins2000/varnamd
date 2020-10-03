/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-localstorage-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function A (a) {
    j.cssText = a
  }
  function B (a, b) {
    return A(n.join(a + ';') + (b || ''))
  }
  function C (a, b) {
    return typeof a === b
  }
  function D (a, b) {
    return !!~('' + a).indexOf(b)
  }
  function E (a, b) {
    for (var d in a) {
      var e = a[d]
      if (!D(e, '-') && j[e] !== c) return b == 'pfx' ? e : !0
    }
    return !1
  }
  function F (a, b, d) {
    for (var e in a) {
      var f = b[a[e]]
      if (f !== c) return d === !1 ? a[e] : C(f, 'function') ? f.bind(d || b) : f
    }
    return !1
  }
  function G (a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1)
    var e = (a + ' ' + p.join(d + ' ') + d).split(' ')
    return C(b, 'string') || C(b, 'undefined') ? E(e, b) : ((e = (a + ' ' + q.join(d + ' ') + d).split(' ')), F(e, b, c))
  }
  var d = '2.6.2'
  var e = {}
  var f = !0
  var g = b.documentElement
  var h = 'modernizr'
  var i = b.createElement(h)
  var j = i.style
  var k
  var l = ':)'
  var m = {}.toString
  var n = ' -webkit- -moz- -o- -ms- '.split(' ')
  var o = 'Webkit Moz O ms'
  var p = o.split(' ')
  var q = o.toLowerCase().split(' ')
  var r = {}
  var s = {}
  var t = {}
  var u = []
  var v = u.slice
  var w
  var x = function (a, c, d, e) {
    var f
    var i
    var j
    var k
    var l = b.createElement('div')
    var m = b.body
    var n = m || b.createElement('body')
    if (parseInt(d, 10)) while (d--) (j = b.createElement('div')), (j.id = e ? e[d] : h + (d + 1)), l.appendChild(j)
    return (
      (f = ['&#173;', '<style id="s', h, '">', a, '</style>'].join('')),
      (l.id = h),
      ((m ? l : n).innerHTML += f),
      n.appendChild(l),
      m || ((n.style.background = ''), (n.style.overflow = 'hidden'), (k = g.style.overflow), (g.style.overflow = 'hidden'), g.appendChild(n)),
      (i = c(l, a)),
      m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), (g.style.overflow = k)),
      !!i
    )
  }
  var y = {}.hasOwnProperty
  var z
  !C(y, 'undefined') && !C(y.call, 'undefined')
    ? (z = function (a, b) {
      return y.call(a, b)
    })
    : (z = function (a, b) {
      return b in a && C(a.constructor.prototype[b], 'undefined')
    }),
  Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this
        if (typeof c !== 'function') throw new TypeError()
        var d = v.call(arguments, 1)
        var e = function () {
          if (this instanceof e) {
            var a = function () {}
            a.prototype = c.prototype
            var f = new a()
            var g = c.apply(f, d.concat(v.call(arguments)))
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(v.call(arguments)))
        }
        return e
      }),
  (r.flexbox = function () {
    return G('flexWrap')
  }),
  (r.flexboxlegacy = function () {
    return G('boxDirection')
  }),
  (r.rgba = function () {
    return A('background-color:rgba(150,255,150,.5)'), D(j.backgroundColor, 'rgba')
  }),
  (r.hsla = function () {
    return A('background-color:hsla(120,40%,100%,.5)'), D(j.backgroundColor, 'rgba') || D(j.backgroundColor, 'hsla')
  }),
  (r.multiplebgs = function () {
    return A('background:url(https://),url(https://),red url(https://)'), /(url\s*\(.*?){3}/.test(j.background)
  }),
  (r.backgroundsize = function () {
    return G('backgroundSize')
  }),
  (r.borderimage = function () {
    return G('borderImage')
  }),
  (r.borderradius = function () {
    return G('borderRadius')
  }),
  (r.boxshadow = function () {
    return G('boxShadow')
  }),
  (r.textshadow = function () {
    return b.createElement('div').style.textShadow === ''
  }),
  (r.opacity = function () {
    return B('opacity:.55'), /^0.55$/.test(j.opacity)
  }),
  (r.cssanimations = function () {
    return G('animationName')
  }),
  (r.csscolumns = function () {
    return G('columnCount')
  }),
  (r.cssgradients = function () {
    var a = 'background-image:'
    var b = 'gradient(linear,left top,right bottom,from(#9f9),to(white));'
    var c = 'linear-gradient(left top,#9f9, white);'
    return A((a + '-webkit- '.split(' ').join(b + a) + n.join(c + a)).slice(0, -a.length)), D(j.backgroundImage, 'gradient')
  }),
  (r.cssreflections = function () {
    return G('boxReflect')
  }),
  (r.csstransforms = function () {
    return !!G('transform')
  }),
  (r.csstransforms3d = function () {
    var a = !!G('perspective')
    return (
      a &&
          'webkitPerspective' in g.style &&
          x('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
          }),
      a
    )
  }),
  (r.csstransitions = function () {
    return G('transition')
  }),
  (r.fontface = function () {
    var a
    return (
      x('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
        var e = b.getElementById('smodernizr')
        var f = e.sheet || e.styleSheet
        var g = f ? (f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || '') : ''
        a = /src/i.test(g) && g.indexOf(d.split(' ')[0]) === 0
      }),
      a
    )
  }),
  (r.generatedcontent = function () {
    var a
    return (
      x(['#', h, '{font:0/0 a}#', h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(''), function (b) {
        a = b.offsetHeight >= 3
      }),
      a
    )
  }),
  (r.localstorage = function () {
    try {
      return localStorage.setItem(h, h), localStorage.removeItem(h), !0
    } catch (a) {
      return !1
    }
  })
  for (var H in r) z(r, H) && ((w = H.toLowerCase()), (e[w] = r[H]()), u.push((e[w] ? '' : 'no-') + w))
  return (
    (e.addTest = function (a, b) {
      if (typeof a === 'object') for (var d in a) z(a, d) && e.addTest(d, a[d])
      else {
        a = a.toLowerCase()
        if (e[a] !== c) return e;
        (b = typeof b === 'function' ? b() : b), typeof f !== 'undefined' && f && (g.className += ' ' + (b ? '' : 'no-') + a), (e[a] = b)
      }
      return e
    }),
    A(''),
    (i = k = null),
    (function (a, b) {
      function k (a, b) {
        var c = a.createElement('p')
        var d = a.getElementsByTagName('head')[0] || a.documentElement
        return (c.innerHTML = 'x<style>' + b + '</style>'), d.insertBefore(c.lastChild, d.firstChild)
      }
      function l () {
        var a = r.elements
        return typeof a === 'string' ? a.split(' ') : a
      }
      function m (a) {
        var b = i[a[g]]
        return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b
      }
      function n (a, c, f) {
        c || (c = b)
        if (j) return c.createElement(a)
        f || (f = m(c))
        var g
        return f.cache[a] ? (g = f.cache[a].cloneNode()) : e.test(a) ? (g = (f.cache[a] = f.createElem(a)).cloneNode()) : (g = f.createElem(a)), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
      }
      function o (a, c) {
        a || (a = b)
        if (j) return a.createDocumentFragment()
        c = c || m(a)
        var d = c.frag.cloneNode()
        var e = 0
        var f = l()
        var g = f.length
        for (; e < g; e++) d.createElement(f[e])
        return d
      }
      function p (a, b) {
        b.cache || ((b.cache = {}), (b.createElem = a.createElement), (b.createFrag = a.createDocumentFragment), (b.frag = b.createFrag())),
        (a.createElement = function (c) {
          return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }),
        (a.createDocumentFragment = Function(
          'h,f',
          'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              l()
                .join()
                .replace(/\w+/g, function (a) {
                  return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) +
              ');return n}'
        )(r, b.frag))
      }
      function q (a) {
        a || (a = b)
        var c = m(a)
        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, 'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}')), j || p(a, c), a
      }
      var c = a.html5 || {}
      var d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i
      var e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i
      var f
      var g = '_html5shiv'
      var h = 0
      var i = {}
      var j;
      (function () {
        try {
          var a = b.createElement('a');
          (a.innerHTML = '<xyz></xyz>'),
          (f = 'hidden' in a),
          (j =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement('a')
                var a = b.createDocumentFragment()
                return typeof a.cloneNode === 'undefined' || typeof a.createDocumentFragment === 'undefined' || typeof a.createElement === 'undefined'
              })())
        } catch (c) {
          (f = !0), (j = !0)
        }
      })()
      var r = {
        elements: c.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: 'default',
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o
      };
      (a.html5 = r), q(b)
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.testProp = function (a) {
      return E([a])
    }),
    (e.testAllProps = G),
    (e.testStyles = x),
    (g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (f ? ' js ' + u.join(' ') : '')),
    e
  )
})(this, this.document)),
(function (a, b, c) {
  function d (a) {
    return o.call(a) == '[object Function]'
  }
  function e (a) {
    return typeof a === 'string'
  }
  function f () {}
  function g (a) {
    return !a || a == 'loaded' || a == 'complete' || a == 'uninitialized'
  }
  function h () {
    var a = p.shift();
    (q = 1),
    a
      ? a.t
        ? m(function () {
          (a.t == 'c' ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0)
        : (a(), h())
      : (q = 0)
  }
  function i (a, c, d, e, f, i, j) {
    function k (b) {
      if (!o && g(l.readyState) && ((u.r = o = 1), !q && h(), (l.onload = l.onreadystatechange = null), b)) {
        a != 'img' &&
            m(function () {
              t.removeChild(l)
            }, 50)
        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
      }
    }
    var j = j || B.errorTimeout
    var l = b.createElement(a)
    var o = 0
    var r = 0
    var u = { t: d, s: c, e: f, a: i, x: j }
    y[c] === 1 && ((r = 1), (y[c] = [])),
    a == 'object' ? (l.data = c) : ((l.src = c), (l.type = a)),
    (l.width = l.height = '0'),
    (l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r)
    }),
    p.splice(e, 0, u),
    a != 'img' && (r || y[c] === 2 ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
  }
  function j (a, b, c, d, f) {
    return (q = 0), (b = b || 'j'), e(a) ? i(b == 'c' ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), p.length == 1 && h()), this
  }
  function k () {
    var a = B
    return (a.loader = { load: j, i: 0 }), a
  }
  var l = b.documentElement
  var m = a.setTimeout
  var n = b.getElementsByTagName('script')[0]
  var o = {}.toString
  var p = []
  var q = 0
  var r = 'MozAppearance' in l.style
  var s = r && !!b.createRange().compareNode
  var t = s ? l : n.parentNode
  var l = a.opera && o.call(a.opera) == '[object Opera]'
  var l = !!b.attachEvent && !l
  var u = r ? 'object' : l ? 'script' : 'img'
  var v = l ? 'script' : u
  var w =
        Array.isArray ||
        function (a) {
          return o.call(a) == '[object Array]'
        }
  var x = []
  var y = {}
  var z = {
    timeout: function (a, b) {
      return b.length && (a.timeout = b[0]), a
    }
  }
  var A
  var B;
  (B = function (a) {
    function b (a) {
      var a = a.split('!')
      var b = x.length
      var c = a.pop()
      var d = a.length
      var c = { url: c, origUrl: c, prefixes: a }
      var e
      var f
      var g
      for (f = 0; f < d; f++) (g = a[f].split('=')), (e = z[g.shift()]) && (c = e(c, g))
      for (f = 0; f < b; f++) c = x[f](c)
      return c
    }
    function g (a, e, f, g, h) {
      var i = b(a)
      var j = i.autoCallback
      i.url.split('.').pop().split('?').shift(),
      i.bypass ||
            (e && (e = d(e) ? e : e[a] || e[g] || e[a.split('/').pop().split('?')[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
              f.load(i.url, i.forceCSS || (!i.forceJS && i.url.split('.').pop().split('?').shift() == 'css') ? 'c' : c, i.noexec, i.attrs, i.timeout),
              (d(e) || d(j)) &&
                  f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), (y[i.url] = 2)
                  })))
    }
    function h (a, b) {
      function c (a, c) {
        if (a) {
          if (e(a)) {
            c ||
                (j = function () {
                  var a = [].slice.call(arguments)
                  k.apply(this, a), l()
                }),
            g(a, j, b, 0, h)
          } else if (Object(a) === a) {
            for (n in ((m = (function () {
              var b = 0
              var c
              for (c in a) a.hasOwnProperty(c) && b++
              return b
            })()),
            a)) {
              a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                        var a = [].slice.call(arguments)
                        k.apply(this, a), l()
                      })
                      : (j[n] = (function (a) {
                        return function () {
                          var b = [].slice.call(arguments)
                          a && a.apply(this, b), l()
                        }
                      })(k[n]))),
                  g(a[n], j, b, n, h))
            }
          }
        } else !c && l()
      }
      var h = !!a.test
      var i = a.load || a.both
      var j = a.callback || f
      var k = j
      var l = a.complete || f
      var m
      var n
      c(h ? a.yep : a.nope, !!i), i && c(i)
    }
    var i
    var j
    var l = this.yepnope.loader
    if (e(a)) g(a, 0, l, 0)
    else if (w(a)) for (i = 0; i < a.length; i++) (j = a[i]), e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l)
    else Object(a) === a && h(a, l)
  }),
  (B.addPrefix = function (a, b) {
    z[a] = b
  }),
  (B.addFilter = function (a) {
    x.push(a)
  }),
  (B.errorTimeout = 1e4),
  b.readyState == null &&
        b.addEventListener &&
        ((b.readyState = 'loading'),
        b.addEventListener(
          'DOMContentLoaded',
          (A = function () {
            b.removeEventListener('DOMContentLoaded', A, 0), (b.readyState = 'complete')
          }),
          0
        )),
  (a.yepnope = k()),
  (a.yepnope.executeStack = h),
  (a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement('script')
    var l
    var o
    var e = e || B.errorTimeout
    k.src = a
    for (o in d) k.setAttribute(o, d[o]);
    (c = j ? h : c || f),
    (k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && ((l = 1), c(), (k.onload = k.onreadystatechange = null))
    }),
    m(function () {
      l || ((l = 1), c(1))
    }, e),
    i ? k.onload() : n.parentNode.insertBefore(k, n)
  }),
  (a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement('link')
    var j
    var c = i ? h : c || f;
    (e.href = a), (e.rel = 'stylesheet'), (e.type = 'text/css')
    for (j in d) e.setAttribute(j, d[j])
    g || (n.parentNode.insertBefore(e, n), m(c, 0))
  })
})(this, document),
(Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0))
})
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//        A A L
//        T C A
//        T K B
//
//   <http://www.attacklab.net/>
//
//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//
//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//
//
// Showdown namespace
//
var Showdown = {};
(Showdown.converter = function () {
  var e
  var t
  var n
  var r = 0
  this.makeHtml = function (r) {
    return (
      (e = new Array()),
      (t = new Array()),
      (n = new Array()),
      (r = r.replace(/~/g, '~T')),
      (r = r.replace(/\$/g, '~D')),
      (r = r.replace(/\r\n/g, '\n')),
      (r = r.replace(/\r/g, '\n')),
      (r = '\n\n' + r + '\n\n'),
      (r = M(r)),
      (r = r.replace(/^[ \t]+$/gm, '')),
      (r = y(r)),
      (r = s(r)),
      (r = i(r)),
      (r = u(r)),
      (r = A(r)),
      (r = r.replace(/~D/g, '$$')),
      (r = r.replace(/~T/g, '~')),
      r
    )
  }
  var i = function (n) {
    var n = n.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm, function (n, r, i, s, o) {
      return (r = r.toLowerCase()), (e[r] = N(i)), s ? s + o : (o && (t[r] = o.replace(/"/g, '&quot;')), '')
    })
    return n
  }
  var s = function (e) {
    e = e.replace(/\n/g, '\n\n')
    var t = 'p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside'
    var n = 'p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside'
    return (
      (e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, o)),
      (e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, o)),
      (e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, o)),
      (e = e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, o)),
      (e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, o)),
      (e = e.replace(/\n\n/g, '\n')),
      e
    )
  }
  var o = function (e, t) {
    var r = t
    return (r = r.replace(/\n\n/g, '\n')), (r = r.replace(/^\n/, '')), (r = r.replace(/\n+$/g, '')), (r = '\n\n~K' + (n.push(r) - 1) + 'K\n\n'), r
  }
  var u = function (e) {
    e = d(e)
    var t = b('<hr />')
    return (
      (e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, t)),
      (e = e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, t)),
      (e = e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, t)),
      (e = m(e)),
      (e = g(e)),
      (e = x(e)),
      (e = s(e)),
      (e = T(e)),
      e
    )
  }
  var a = function (e) {
    return (e = w(e)), (e = f(e)), (e = C(e)), (e = h(e)), (e = l(e)), (e = k(e)), (e = N(e)), (e = S(e)), (e = e.replace(/  +\n/g, ' <br />\n')), e
  }
  var f = function (e) {
    var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi
    return (
      (e = e.replace(t, function (e) {
        var t = e.replace(/(.)<\/?code>(?=.)/g, '$1`')
        return (t = _(t, '\\`*_')), t
      })),
      e
    )
  }
  var l = function (e) {
    return (
      (e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, c)),
      (e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, c)),
      (e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, c)),
      e
    )
  }
  var c = function (n, r, i, s, o, u, a, f) {
    f == undefined && (f = '')
    var l = r
    var c = i
    var h = s.toLowerCase()
    var p = o
    var d = f
    if (p == '') {
      h == '' && (h = c.toLowerCase().replace(/ ?\n/g, ' ')), (p = '#' + h)
      if (e[h] != undefined) (p = e[h]), t[h] != undefined && (d = t[h])
      else {
        if (!(l.search(/\(\s*\)$/m) > -1)) return l
        p = ''
      }
    }
    p = _(p, '*_')
    var v = '<a href="' + p + '"'
    return d != '' && ((d = d.replace(/"/g, '&quot;')), (d = _(d, '*_')), (v += ' title="' + d + '"')), (v += '>' + c + '</a>'), v
  }
  var h = function (e) {
    return (e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, p)), (e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, p)), e
  }
  var p = function (n, r, i, s, o, u, a, f) {
    var l = r
    var c = i
    var h = s.toLowerCase()
    var p = o
    var d = f
    d || (d = '')
    if (p == '') {
      h == '' && (h = c.toLowerCase().replace(/ ?\n/g, ' ')), (p = '#' + h)
      if (e[h] == undefined) return l;
      (p = e[h]), t[h] != undefined && (d = t[h])
    }
    (c = c.replace(/"/g, '&quot;')), (p = _(p, '*_'))
    var v = '<img src="' + p + '" alt="' + c + '"'
    return (d = d.replace(/"/g, '&quot;')), (d = _(d, '*_')), (v += ' title="' + d + '"'), (v += ' />'), v
  }
  var d = function (e) {
    function t (e) {
      return e.replace(/[^\w]/g, '').toLowerCase()
    }
    return (
      (e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function (e, n) {
        return b('<h1 id="' + t(n) + '">' + a(n) + '</h1>')
      })),
      (e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function (e, n) {
        return b('<h2 id="' + t(n) + '">' + a(n) + '</h2>')
      })),
      (e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function (e, n, r) {
        var i = n.length
        return b('<h' + i + ' id="' + t(r) + '">' + a(r) + '</h' + i + '>')
      })),
      e
    )
  }
  var v
  var m = function (e) {
    e += '~0'
    var t = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm
    return (
      r
        ? (e = e.replace(t, function (e, t, n) {
          var r = t
          var i = n.search(/[*+-]/g) > -1 ? 'ul' : 'ol'
          r = r.replace(/\n{2,}/g, '\n\n\n')
          var s = v(r)
          return (s = s.replace(/\s+$/, '')), (s = '<' + i + '>' + s + '</' + i + '>\n'), s
        }))
        : ((t = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g),
        (e = e.replace(t, function (e, t, n, r) {
          var i = t
          var s = n
          var o = r.search(/[*+-]/g) > -1 ? 'ul' : 'ol'
          var s = s.replace(/\n{2,}/g, '\n\n\n')
          var u = v(s)
          return (u = i + '<' + o + '>\n' + u + '</' + o + '>\n'), u
        }))),
      (e = e.replace(/~0/, '')),
      e
    )
  }
  v = function (e) {
    return (
      r++,
      (e = e.replace(/\n{2,}$/, '\n')),
      (e += '~0'),
      (e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function (e, t, n, r, i) {
        var s = i
        var o = t
        var f = n
        return o || s.search(/\n{2,}/) > -1 ? (s = u(O(s))) : ((s = m(O(s))), (s = s.replace(/\n$/, '')), (s = a(s))), '<li>' + s + '</li>\n'
      })),
      (e = e.replace(/~0/g, '')),
      r--,
      e
    )
  }
  var g = function (e) {
    return (
      (e += '~0'),
      (e = e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function (e, t, n) {
        var r = t
        var i = n
        return (r = E(O(r))), (r = M(r)), (r = r.replace(/^\n+/g, '')), (r = r.replace(/\n+$/g, '')), (r = '<pre><code>' + r + '\n</code></pre>'), b(r) + i
      })),
      (e = e.replace(/~0/, '')),
      e
    )
  }
  var y = function (e) {
    return (
      (e += '~0'),
      (e = e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (e, t, n) {
        var r = t
        var i = n
        return (i = E(i)), (i = M(i)), (i = i.replace(/^\n+/g, '')), (i = i.replace(/\n+$/g, '')), (i = '<pre><code' + (r ? ' class="' + r + '"' : '') + '>' + i + '\n</code></pre>'), b(i)
      })),
      (e = e.replace(/~0/, '')),
      e
    )
  }
  var b = function (e) {
    return (e = e.replace(/(^\n+|\n+$)/g, '')), '\n\n~K' + (n.push(e) - 1) + 'K\n\n'
  }
  var w = function (e) {
    return (
      (e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (e, t, n, r, i) {
        var s = r
        return (s = s.replace(/^([ \t]*)/g, '')), (s = s.replace(/[ \t]*$/g, '')), (s = E(s)), t + '<code>' + s + '</code>'
      })),
      e
    )
  }
  var E = function (e) {
    return (e = e.replace(/&/g, '&amp;')), (e = e.replace(/</g, '&lt;')), (e = e.replace(/>/g, '&gt;')), (e = _(e, '*_{}[]\\', !1)), e
  }
  var S = function (e) {
    return (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>')), (e = e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>')), e
  }
  var x = function (e) {
    return (
      (e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (e, t) {
        var n = t
        return (
          (n = n.replace(/^[ \t]*>[ \t]?/gm, '~0')),
          (n = n.replace(/~0/g, '')),
          (n = n.replace(/^[ \t]+$/gm, '')),
          (n = u(n)),
          (n = n.replace(/(^|\n)/g, '$1  ')),
          (n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
            var n = t
            return (n = n.replace(/^ {2}/gm, '~0')), (n = n.replace(/~0/g, '')), n
          })),
          b('<blockquote>\n' + n + '\n</blockquote>')
        )
      })),
      e
    )
  }
  var T = function (e) {
    (e = e.replace(/^\n+/g, '')), (e = e.replace(/\n+$/g, ''))
    var t = e.split(/\n{2,}/g)
    var r = new Array()
    var i = t.length
    for (var s = 0; s < i; s++) {
      var o = t[s]
      o.search(/~K(\d+)K/g) >= 0 ? r.push(o) : o.search(/\S/) >= 0 && ((o = a(o)), (o = o.replace(/^([ \t]*)/g, '<p>')), (o += '</p>'), r.push(o))
    }
    i = r.length
    for (var s = 0; s < i; s++) {
      while (r[s].search(/~K(\d+)K/) >= 0) {
        var u = n[RegExp.$1];
        (u = u.replace(/\$/g, '$$$$')), (r[s] = r[s].replace(/~K\d+K/, u))
      }
    }
    return r.join('\n\n')
  }
  var N = function (e) {
    return (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;')), (e = e.replace(/<(?![a-z\/?\$!])/gi, '&lt;')), e
  }
  var C = function (e) {
    return (e = e.replace(/\\(\\)/g, D)), (e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, D)), e
  }
  var k = function (e) {
    return (
      (e = e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>')),
      (e = e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function (e, t) {
        return L(A(t))
      })),
      e
    )
  }
  var L = function (e) {
    function t (e) {
      var t = '0123456789ABCDEF'
      var n = e.charCodeAt(0)
      return t.charAt(n >> 4) + t.charAt(n & 15)
    }
    var n = [
      function (e) {
        return '&#' + e.charCodeAt(0) + ';'
      },
      function (e) {
        return '&#x' + t(e) + ';'
      },
      function (e) {
        return e
      }
    ]
    return (
      (e = 'mailto:' + e),
      (e = e.replace(/./g, function (e) {
        if (e == '@') e = n[Math.floor(Math.random() * 2)](e)
        else if (e != ':') {
          var t = Math.random()
          e = t > 0.9 ? n[2](e) : t > 0.45 ? n[1](e) : n[0](e)
        }
        return e
      })),
      (e = '<a href="' + e + '">' + e + '</a>'),
      (e = e.replace(/">.+:/g, '">')),
      e
    )
  }
  var A = function (e) {
    return (
      (e = e.replace(/~E(\d+)E/g, function (e, t) {
        var n = parseInt(t)
        return String.fromCharCode(n)
      })),
      e
    )
  }
  var O = function (e) {
    return (e = e.replace(/^(\t|[ ]{1,4})/gm, '~0')), (e = e.replace(/~0/g, '')), e
  }
  var M = function (e) {
    return (
      (e = e.replace(/\t(?=\t)/g, '    ')),
      (e = e.replace(/\t/g, '~A~B')),
      (e = e.replace(/~B(.+?)~A/g, function (e, t, n) {
        var r = t
        var i = 4 - (r.length % 4)
        for (var s = 0; s < i; s++) r += ' '
        return r
      })),
      (e = e.replace(/~A/g, '    ')),
      (e = e.replace(/~B/g, '')),
      e
    )
  }
  var _ = function (e, t, n) {
    var r = '([' + t.replace(/([\[\]\\])/g, '\\$1') + '])'
    n && (r = '\\\\' + r)
    var i = new RegExp(r, 'g')
    return (e = e.replace(i, D)), e
  }
  var D = function (e, t) {
    var n = t.charCodeAt(0)
    return '~E' + n + 'E'
  }
}),
typeof module !== 'undefined' && (module.exports = Showdown)
/**
 * Bootstrap.js by @fat & @mdo
 * plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!(function (a) {
  a(function () {
    a.support.transition = (function () {
      var a = (function () {
        var a = document.createElement('bootstrap')
        var b = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' }
        var c
        for (c in b) if (a.style[c] !== undefined) return b[c]
      })()
      return a && { end: a }
    })()
  })
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.options = c), (this.$element = a(b).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', a.proxy(this.hide, this))), this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  };
  (b.prototype = {
    constructor: b,
    toggle: function () {
      return this[this.isShown ? 'hide' : 'show']()
    },
    show: function () {
      var b = this
      var c = a.Event('show')
      this.$element.trigger(c)
      if (this.isShown || c.isDefaultPrevented()) return
      a('body').addClass('modal-open'),
      (this.isShown = !0),
      this.escape(),
      this.backdrop(function () {
        var c = a.support.transition && b.$element.hasClass('fade')
        b.$element.parent().length || b.$element.appendTo(document.body),
        b.$element.show(),
        c && b.$element[0].offsetWidth,
        b.$element.addClass('in').attr('aria-hidden', !1).focus(),
        b.enforceFocus(),
        c
          ? b.$element.one(a.support.transition.end, function () {
            b.$element.trigger('shown')
          })
          : b.$element.trigger('shown')
      })
    },
    hide: function (b) {
      b && b.preventDefault()
      var c = this;
      (b = a.Event('hide')), this.$element.trigger(b)
      if (!this.isShown || b.isDefaultPrevented()) return;
      (this.isShown = !1),
      a('body').removeClass('modal-open'),
      this.escape(),
      a(document).off('focusin.modal'),
      this.$element.removeClass('in').attr('aria-hidden', !0),
      a.support.transition && this.$element.hasClass('fade') ? this.hideWithTransition() : this.hideModal()
    },
    enforceFocus: function () {
      var b = this
      a(document).on('focusin.modal', function (a) {
        b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
      })
    },
    escape: function () {
      var a = this
      this.isShown && this.options.keyboard
        ? this.$element.on('keyup.dismiss.modal', function (b) {
          b.which == 27 && a.hide()
        })
        : this.isShown || this.$element.off('keyup.dismiss.modal')
    },
    hideWithTransition: function () {
      var b = this
      var c = setTimeout(function () {
        b.$element.off(a.support.transition.end), b.hideModal()
      }, 500)
      this.$element.one(a.support.transition.end, function () {
        clearTimeout(c), b.hideModal()
      })
    },
    hideModal: function (a) {
      this.$element.hide().trigger('hidden'), this.backdrop()
    },
    removeBackdrop: function () {
      this.$backdrop.remove(), (this.$backdrop = null)
    },
    backdrop: function (b) {
      var c = this
      var d = this.$element.hasClass('fade') ? 'fade' : ''
      if (this.isShown && this.options.backdrop) {
        var e = a.support.transition && d;
        (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body)),
        this.options.backdrop != 'static' && this.$backdrop.click(a.proxy(this.hide, this)),
        e && this.$backdrop[0].offsetWidth,
        this.$backdrop.addClass('in'),
        e ? this.$backdrop.one(a.support.transition.end, b) : b()
      } else {
        !this.isShown && this.$backdrop
          ? (this.$backdrop.removeClass('in'), a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one(a.support.transition.end, a.proxy(this.removeBackdrop, this)) : this.removeBackdrop())
          : b && b()
      }
    }
  }),
  (a.fn.modal = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('modal')
      var f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c === 'object' && c)
      e || d.data('modal', (e = new b(this, f))), typeof c === 'string' ? e[c]() : f.show && e.show()
    })
  }),
  (a.fn.modal.defaults = { backdrop: !0, keyboard: !0, show: !0 }),
  (a.fn.modal.Constructor = b),
  a(function () {
    a('body').on('click.modal.data-api', '[data-toggle="modal"]', function (b) {
      var c = a(this)
      var d = c.attr('href')
      var e = a(c.attr('data-target') || (d && d.replace(/.*(?=#[^\s]+$)/, '')))
      var f = e.data('modal') ? 'toggle' : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data())
      b.preventDefault(),
      e.modal(f).one('hide', function () {
        c.focus()
      })
    })
  })
})(window.jQuery),
!(function (a) {
  function d () {
    e(a(b)).removeClass('open')
  }
  function e (b) {
    var c = b.attr('data-target')
    var d
    return c || ((c = b.attr('href')), (c = c && c.replace(/.*(?=#[^\s]*$)/, ''))), (d = a(c)), d.length || (d = b.parent()), d
  }
  var b = '[data-toggle=dropdown]'
  var c = function (b) {
    var c = a(b).on('click.dropdown.data-api', this.toggle)
    a('html').on('click.dropdown.data-api', function () {
      c.parent().removeClass('open')
    })
  };
  (c.prototype = {
    constructor: c,
    toggle: function (b) {
      var c = a(this)
      var f
      var g
      if (c.is('.disabled, :disabled')) return
      return (f = e(c)), (g = f.hasClass('open')), d(), g || (f.toggleClass('open'), c.focus()), !1
    },
    keydown: function (b) {
      var c, d, f, g, h, i
      if (!/(38|40|27)/.test(b.keyCode)) return;
      (c = a(this)), b.preventDefault(), b.stopPropagation()
      if (c.is('.disabled, :disabled')) return;
      (g = e(c)), (h = g.hasClass('open'))
      if (!h || (h && b.keyCode == 27)) return c.click()
      d = a('[role=menu] li:not(.divider) a', g)
      if (!d.length) return;
      (i = d.index(d.filter(':focus'))), b.keyCode == 38 && i > 0 && i--, b.keyCode == 40 && i < d.length - 1 && i++, ~i || (i = 0), d.eq(i).focus()
    }
  }),
  (a.fn.dropdown = function (b) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('dropdown')
      e || d.data('dropdown', (e = new c(this))), typeof b === 'string' && e[b].call(d)
    })
  }),
  (a.fn.dropdown.Constructor = c),
  a(function () {
    a('html').on('click.dropdown.data-api touchstart.dropdown.data-api', d),
    a('body')
      .on('click.dropdown touchstart.dropdown.data-api', '.dropdown', function (a) {
        a.stopPropagation()
      })
      .on('click.dropdown.data-api touchstart.dropdown.data-api', b, c.prototype.toggle)
      .on('keydown.dropdown.data-api touchstart.dropdown.data-api', b + ', [role=menu]', c.prototype.keydown)
  })
})(window.jQuery),
!(function (a) {
  function b (b, c) {
    var d = a.proxy(this.process, this)
    var e = a(b).is('body') ? a(window) : a(b)
    var f;
    (this.options = a.extend({}, a.fn.scrollspy.defaults, c)),
    (this.$scrollElement = e.on('scroll.scroll-spy.data-api', d)),
    (this.selector = (this.options.target || ((f = a(b).attr('href')) && f.replace(/.*(?=#[^\s]+$)/, '')) || '') + ' .nav li > a'),
    (this.$body = a('body')),
    this.refresh(),
    this.process()
  }
  (b.prototype = {
    constructor: b,
    refresh: function () {
      var b = this
      var c;
      (this.offsets = a([])),
      (this.targets = a([])),
      (c = this.$body
        .find(this.selector)
        .map(function () {
          var b = a(this)
          var c = b.data('target') || b.attr('href')
          var d = /^#\w/.test(c) && a(c)
          return (d && d.length && [[d.position().top, c]]) || null
        })
        .sort(function (a, b) {
          return a[0] - b[0]
        })
        .each(function () {
          b.offsets.push(this[0]), b.targets.push(this[1])
        }))
    },
    process: function () {
      var a = this.$scrollElement.scrollTop() + this.options.offset
      var b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
      var c = b - this.$scrollElement.height()
      var d = this.offsets
      var e = this.targets
      var f = this.activeTarget
      var g
      if (a >= c) return f != (g = e.last()[0]) && this.activate(g)
      for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
    },
    activate: function (b) {
      var c, d;
      (this.activeTarget = b),
      a(this.selector).parent('.active').removeClass('active'),
      (d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'),
      (c = a(d).parent('li').addClass('active')),
      c.parent('.dropdown-menu').length && (c = c.closest('li.dropdown').addClass('active')),
      c.trigger('activate')
    }
  }),
  (a.fn.scrollspy = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('scrollspy')
      var f = typeof c === 'object' && c
      e || d.data('scrollspy', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.scrollspy.Constructor = b),
  (a.fn.scrollspy.defaults = { offset: 10 }),
  a(window).on('load', function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this)
      b.scrollspy(b.data())
    })
  })
})(window.jQuery),
!(function (a) {
  var b = function (b) {
    this.element = a(b)
  };
  (b.prototype = {
    constructor: b,
    show: function () {
      var b = this.element
      var c = b.closest('ul:not(.dropdown-menu)')
      var d = b.attr('data-target')
      var e
      var f
      var g
      d || ((d = b.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, '')))
      if (b.parent('li').hasClass('active')) return;
      (e = c.find('.active a').last()[0]), (g = a.Event('show', { relatedTarget: e })), b.trigger(g)
      if (g.isDefaultPrevented()) return;
      (f = a(d)),
      this.activate(b.parent('li'), c),
      this.activate(f, f.parent(), function () {
        b.trigger({ type: 'shown', relatedTarget: e })
      })
    },
    activate: function (b, c, d) {
      function g () {
        e.removeClass('active').find('> .dropdown-menu > .active').removeClass('active'),
        b.addClass('active'),
        f ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'),
        b.parent('.dropdown-menu') && b.closest('li.dropdown').addClass('active'),
        d && d()
      }
      var e = c.find('> .active')
      var f = d && a.support.transition && e.hasClass('fade')
      f ? e.one(a.support.transition.end, g) : g(), e.removeClass('in')
    }
  }),
  (a.fn.tab = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('tab')
      e || d.data('tab', (e = new b(this))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.tab.Constructor = b),
  a(function () {
    a('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
      b.preventDefault(), a(this).tab('show')
    })
  })
})(window.jQuery),
!(function (a) {
  var b = function (a, b) {
    this.init('tooltip', a, b)
  };
  (b.prototype = {
    constructor: b,
    init: function (b, c, d) {
      var e, f;
      (this.type = b),
      (this.$element = a(c)),
      (this.options = this.getOptions(d)),
      (this.enabled = !0),
      this.options.trigger == 'click'
        ? this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this))
        : this.options.trigger != 'manual' &&
              ((e = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'),
              (f = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'),
              this.$element.on(e + '.' + this.type, this.options.selector, a.proxy(this.enter, this)),
              this.$element.on(f + '.' + this.type, this.options.selector, a.proxy(this.leave, this))),
      this.options.selector ? (this._options = a.extend({}, this.options, { trigger: 'manual', selector: '' })) : this.fixTitle()
    },
    getOptions: function (b) {
      return (b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data())), b.delay && typeof b.delay === 'number' && (b.delay = { show: b.delay, hide: b.delay }), b
    },
    enter: function (b) {
      var c = a(b.currentTarget)[this.type](this._options).data(this.type)
      if (!c.options.delay || !c.options.delay.show) return c.show()
      clearTimeout(this.timeout),
      (c.hoverState = 'in'),
      (this.timeout = setTimeout(function () {
        c.hoverState == 'in' && c.show()
      }, c.options.delay.show))
    },
    leave: function (b) {
      var c = a(b.currentTarget)[this.type](this._options).data(this.type)
      this.timeout && clearTimeout(this.timeout)
      if (!c.options.delay || !c.options.delay.hide) return c.hide();
      (c.hoverState = 'out'),
      (this.timeout = setTimeout(function () {
        c.hoverState == 'out' && c.hide()
      }, c.options.delay.hide))
    },
    show: function () {
      var a, b, c, d, e, f, g
      if (this.hasContent() && this.enabled) {
        (a = this.tip()),
        this.setContent(),
        this.options.animation && a.addClass('fade'),
        (f = typeof this.options.placement === 'function' ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement),
        (b = /in/.test(f)),
        a
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(b ? this.$element : document.body),
        (c = this.getPosition(b)),
        (d = a[0].offsetWidth),
        (e = a[0].offsetHeight)
        switch (b ? f.split(' ')[1] : f) {
          case 'bottom':
            g = { top: c.top + c.height, left: c.left + c.width / 2 - d / 2 }
            break
          case 'top':
            g = { top: c.top - e, left: c.left + c.width / 2 - d / 2 }
            break
          case 'left':
            g = { top: c.top + c.height / 2 - e / 2, left: c.left - d }
            break
          case 'right':
            g = { top: c.top + c.height / 2 - e / 2, left: c.left + c.width }
        }
        a.css(g).addClass(f).addClass('in')
      }
    },
    setContent: function () {
      var a = this.tip()
      var b = this.getTitle()
      a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b), a.removeClass('fade in top bottom left right')
    },
    hide: function () {
      function d () {
        var b = setTimeout(function () {
          c.off(a.support.transition.end).remove()
        }, 500)
        c.one(a.support.transition.end, function () {
          clearTimeout(b), c.remove()
        })
      }
      var b = this
      var c = this.tip()
      return c.removeClass('in'), a.support.transition && this.$tip.hasClass('fade') ? d() : c.remove(), this
    },
    fixTitle: function () {
      var a = this.$element;
      (a.attr('title') || typeof a.attr('data-original-title') !== 'string') && a.attr('data-original-title', a.attr('title') || '').removeAttr('title')
    },
    hasContent: function () {
      return this.getTitle()
    },
    getPosition: function (b) {
      return a.extend({}, b ? { top: 0, left: 0 } : this.$element.offset(), { width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight })
    },
    getTitle: function () {
      var a
      var b = this.$element
      var c = this.options
      return (a = b.attr('data-original-title') || (typeof c.title === 'function' ? c.title.call(b[0]) : c.title)), a
    },
    tip: function () {
      return (this.$tip = this.$tip || a(this.options.template))
    },
    validate: function () {
      this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null))
    },
    enable: function () {
      this.enabled = !0
    },
    disable: function () {
      this.enabled = !1
    },
    toggleEnabled: function () {
      this.enabled = !this.enabled
    },
    toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    },
    destroy: function () {
      this.hide()
        .$element.off('.' + this.type)
        .removeData(this.type)
    }
  }),
  (a.fn.tooltip = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('tooltip')
      var f = typeof c === 'object' && c
      e || d.data('tooltip', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.tooltip.Constructor = b),
  (a.fn.tooltip.defaults = { animation: !0, placement: 'top', selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: 'hover', title: '', delay: 0, html: !0 })
})(window.jQuery),
!(function (a) {
  var b = function (a, b) {
    this.init('popover', a, b)
  };
  (b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
    constructor: b,
    setContent: function () {
      var a = this.tip()
      var b = this.getTitle()
      var c = this.getContent()
      a.find('.popover-title')[this.options.html ? 'html' : 'text'](b), a.find('.popover-content > *')[this.options.html ? 'html' : 'text'](c), a.removeClass('fade top bottom left right in')
    },
    hasContent: function () {
      return this.getTitle() || this.getContent()
    },
    getContent: function () {
      var a
      var b = this.$element
      var c = this.options
      return (a = b.attr('data-content') || (typeof c.content === 'function' ? c.content.call(b[0]) : c.content)), a
    },
    tip: function () {
      return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    },
    destroy: function () {
      this.hide()
        .$element.off('.' + this.type)
        .removeData(this.type)
    }
  })),
  (a.fn.popover = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('popover')
      var f = typeof c === 'object' && c
      e || d.data('popover', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.popover.Constructor = b),
  (a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  }))
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.options = a.extend({}, a.fn.affix.defaults, c)), (this.$window = a(window).on('scroll.affix.data-api', a.proxy(this.checkPosition, this))), (this.$element = a(b)), this.checkPosition()
  };
  (b.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return
    var b = a(document).height()
    var c = this.$window.scrollTop()
    var d = this.$element.offset()
    var e = this.options.offset
    var f = e.bottom
    var g = e.top
    var h = 'affix affix-top affix-bottom'
    var i
    typeof e !== 'object' && (f = g = e),
    typeof g === 'function' && (g = e.top()),
    typeof f === 'function' && (f = e.bottom()),
    (i = this.unpin != null && c + this.unpin <= d.top ? !1 : f != null && d.top + this.$element.height() >= b - f ? 'bottom' : g != null && c <= g ? 'top' : !1)
    if (this.affixed === i) return;
    (this.affixed = i), (this.unpin = i == 'bottom' ? d.top - c : null), this.$element.removeClass(h).addClass('affix' + (i ? '-' + i : ''))
  }),
  (a.fn.affix = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('affix')
      var f = typeof c === 'object' && c
      e || d.data('affix', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.affix.Constructor = b),
  (a.fn.affix.defaults = { offset: 0 }),
  a(window).on('load', function () {
    a('[data-spy="affix"]').each(function () {
      var b = a(this)
      var c = b.data();
      (c.offset = c.offset || {}), c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
    })
  })
})(window.jQuery),
!(function (a) {
  var b = '[data-dismiss="alert"]'
  var c = function (c) {
    a(c).on('click', b, this.close)
  };
  (c.prototype.close = function (b) {
    function f () {
      e.trigger('closed').remove()
    }
    var c = a(this)
    var d = c.attr('data-target')
    var e
    d || ((d = c.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, ''))), (e = a(d)), b && b.preventDefault(), e.length || (e = c.hasClass('alert') ? c : c.parent()), e.trigger((b = a.Event('close')))
    if (b.isDefaultPrevented()) return
    e.removeClass('in'), a.support.transition && e.hasClass('fade') ? e.on(a.support.transition.end, f) : f()
  }),
  (a.fn.alert = function (b) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('alert')
      e || d.data('alert', (e = new c(this))), typeof b === 'string' && e[b].call(d)
    })
  }),
  (a.fn.alert.Constructor = c),
  a(function () {
    a('body').on('click.alert.data-api', b, c.prototype.close)
  })
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.$element = a(b)), (this.options = a.extend({}, a.fn.button.defaults, c))
  };
  (b.prototype.setState = function (a) {
    var b = 'disabled'
    var c = this.$element
    var d = c.data()
    var e = c.is('input') ? 'val' : 'html';
    (a += 'Text'),
    d.resetText || c.data('resetText', c[e]()),
    c[e](d[a] || this.options[a]),
    setTimeout(function () {
      a == 'loadingText' ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
    }, 0)
  }),
  (b.prototype.toggle = function () {
    var a = this.$element.parent('[data-toggle="buttons-radio"]')
    a && a.find('.active').removeClass('active'), this.$element.toggleClass('active')
  }),
  (a.fn.button = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('button')
      var f = typeof c === 'object' && c
      e || d.data('button', (e = new b(this, f))), c == 'toggle' ? e.toggle() : c && e.setState(c)
    })
  }),
  (a.fn.button.defaults = { loadingText: 'loading...' }),
  (a.fn.button.Constructor = b),
  a(function () {
    a('body').on('click.button.data-api', '[data-toggle^=button]', function (b) {
      var c = a(b.target)
      c.hasClass('btn') || (c = c.closest('.btn')), c.button('toggle')
    })
  })
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.$element = a(b)), (this.options = a.extend({}, a.fn.collapse.defaults, c)), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
  };
  (b.prototype = {
    constructor: b,
    dimension: function () {
      var a = this.$element.hasClass('width')
      return a ? 'width' : 'height'
    },
    show: function () {
      var b, c, d, e
      if (this.transitioning) return;
      (b = this.dimension()), (c = a.camelCase(['scroll', b].join('-'))), (d = this.$parent && this.$parent.find('> .accordion-group > .in'))
      if (d && d.length) {
        e = d.data('collapse')
        if (e && e.transitioning) return
        d.collapse('hide'), e || d.data('collapse', null)
      }
      this.$element[b](0), this.transition('addClass', a.Event('show'), 'shown'), a.support.transition && this.$element[b](this.$element[0][c])
    },
    hide: function () {
      var b
      if (this.transitioning) return;
      (b = this.dimension()), this.reset(this.$element[b]()), this.transition('removeClass', a.Event('hide'), 'hidden'), this.$element[b](0)
    },
    reset: function (a) {
      var b = this.dimension()
      return this.$element.removeClass('collapse')[b](a || 'auto')[0].offsetWidth, this.$element[a !== null ? 'addClass' : 'removeClass']('collapse'), this
    },
    transition: function (b, c, d) {
      var e = this
      var f = function () {
        c.type == 'show' && e.reset(), (e.transitioning = 0), e.$element.trigger(d)
      }
      this.$element.trigger(c)
      if (c.isDefaultPrevented()) return;
      (this.transitioning = 1), this.$element[b]('in'), a.support.transition && this.$element.hasClass('collapse') ? this.$element.one(a.support.transition.end, f) : f()
    },
    toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
  }),
  (a.fn.collapse = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('collapse')
      var f = typeof c === 'object' && c
      e || d.data('collapse', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.collapse.defaults = { toggle: !0 }),
  (a.fn.collapse.Constructor = b),
  a(function () {
    a('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (b) {
      var c = a(this)
      var d
      var e = c.attr('data-target') || b.preventDefault() || ((d = c.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''))
      var f = a(e).data('collapse') ? 'toggle' : c.data()
      c[a(e).hasClass('in') ? 'addClass' : 'removeClass']('collapsed'), a(e).collapse(f)
    })
  })
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.$element = a(b)), (this.options = c), this.options.slide && this.slide(this.options.slide), this.options.pause == 'hover' && this.$element.on('mouseenter', a.proxy(this.pause, this)).on('mouseleave', a.proxy(this.cycle, this))
  };
  (b.prototype = {
    cycle: function (b) {
      return b || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    },
    to: function (b) {
      var c = this.$element.find('.item.active')
      var d = c.parent().children()
      var e = d.index(c)
      var f = this
      if (b > d.length - 1 || b < 0) return
      return this.sliding
        ? this.$element.one('slid', function () {
          f.to(b)
        })
        : e == b
          ? this.pause().cycle()
          : this.slide(b > e ? 'next' : 'prev', a(d[b]))
    },
    pause: function (b) {
      return b || (this.paused = !0), this.$element.find('.next, .prev').length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle()), clearInterval(this.interval), (this.interval = null), this
    },
    next: function () {
      if (this.sliding) return
      return this.slide('next')
    },
    prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    },
    slide: function (b, c) {
      var d = this.$element.find('.item.active')
      var e = c || d[b]()
      var f = this.interval
      var g = b == 'next' ? 'left' : 'right'
      var h = b == 'next' ? 'first' : 'last'
      var i = this
      var j = a.Event('slide', { relatedTarget: e[0] });
      (this.sliding = !0), f && this.pause(), (e = e.length ? e : this.$element.find('.item')[h]())
      if (e.hasClass('active')) return
      if (a.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(j)
        if (j.isDefaultPrevented()) return
        e.addClass(b),
        e[0].offsetWidth,
        d.addClass(g),
        e.addClass(g),
        this.$element.one(a.support.transition.end, function () {
          e.removeClass([b, g].join(' ')).addClass('active'),
          d.removeClass(['active', g].join(' ')),
          (i.sliding = !1),
          setTimeout(function () {
            i.$element.trigger('slid')
          }, 0)
        })
      } else {
        this.$element.trigger(j)
        if (j.isDefaultPrevented()) return
        d.removeClass('active'), e.addClass('active'), (this.sliding = !1), this.$element.trigger('slid')
      }
      return f && this.cycle(), this
    }
  }),
  (a.fn.carousel = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('carousel')
      var f = a.extend({}, a.fn.carousel.defaults, typeof c === 'object' && c)
      var g = typeof c === 'string' ? c : f.slide
      e || d.data('carousel', (e = new b(this, f))), typeof c === 'number' ? e.to(c) : g ? e[g]() : f.interval && e.cycle()
    })
  }),
  (a.fn.carousel.defaults = { interval: 5e3, pause: 'hover' }),
  (a.fn.carousel.Constructor = b),
  a(function () {
    a('body').on('click.carousel.data-api', '[data-slide]', function (b) {
      var c = a(this)
      var d
      var e = a(c.attr('data-target') || ((d = c.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, '')))
      var f = !e.data('modal') && a.extend({}, e.data(), c.data())
      e.carousel(f), b.preventDefault()
    })
  })
})(window.jQuery),
!(function (a) {
  var b = function (b, c) {
    (this.$element = a(b)),
    (this.options = a.extend({}, a.fn.typeahead.defaults, c)),
    (this.matcher = this.options.matcher || this.matcher),
    (this.sorter = this.options.sorter || this.sorter),
    (this.highlighter = this.options.highlighter || this.highlighter),
    (this.updater = this.options.updater || this.updater),
    (this.$menu = a(this.options.menu).appendTo('body')),
    (this.source = this.options.source),
    (this.shown = !1),
    this.listen()
  };
  (b.prototype = {
    constructor: b,
    select: function () {
      var a = this.$menu.find('.active').attr('data-value')
      return this.$element.val(this.updater(a)).change(), this.hide()
    },
    updater: function (a) {
      return a
    },
    show: function () {
      var b = a.extend({}, this.$element.offset(), { height: this.$element[0].offsetHeight })
      return this.$menu.css({ top: b.top + b.height, left: b.left }), this.$menu.show(), (this.shown = !0), this
    },
    hide: function () {
      return this.$menu.hide(), (this.shown = !1), this
    },
    lookup: function (b) {
      var c
      return (
        (this.query = this.$element.val()),
        !this.query || this.query.length < this.options.minLength ? (this.shown ? this.hide() : this) : ((c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source), c ? this.process(c) : this)
      )
    },
    process: function (b) {
      var c = this
      return (
        (b = a.grep(b, function (a) {
          return c.matcher(a)
        })),
        (b = this.sorter(b)),
        b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
      )
    },
    matcher: function (a) {
      return ~a.toLowerCase().indexOf(this.query.toLowerCase())
    },
    sorter: function (a) {
      var b = []
      var c = []
      var d = []
      var e
      while ((e = a.shift())) e.toLowerCase().indexOf(this.query.toLowerCase()) ? (~e.indexOf(this.query) ? c.push(e) : d.push(e)) : b.push(e)
      return b.concat(c, d)
    },
    highlighter: function (a) {
      var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return a.replace(new RegExp('(' + b + ')', 'ig'), function (a, b) {
        return '<strong>' + b + '</strong>'
      })
    },
    render: function (b) {
      var c = this
      return (
        (b = a(b).map(function (b, d) {
          return (b = a(c.options.item).attr('data-value', d)), b.find('a').html(c.highlighter(d)), b[0]
        })),
        b.first().addClass('active'),
        this.$menu.html(b),
        this
      )
    },
    next: function (b) {
      var c = this.$menu.find('.active').removeClass('active')
      var d = c.next()
      d.length || (d = a(this.$menu.find('li')[0])), d.addClass('active')
    },
    prev: function (a) {
      var b = this.$menu.find('.active').removeClass('active')
      var c = b.prev()
      c.length || (c = this.$menu.find('li').last()), c.addClass('active')
    },
    listen: function () {
      this.$element.on('blur', a.proxy(this.blur, this)).on('keypress', a.proxy(this.keypress, this)).on('keyup', a.proxy(this.keyup, this)),
      (a.browser.webkit || a.browser.msie) && this.$element.on('keydown', a.proxy(this.keydown, this)),
      this.$menu.on('click', a.proxy(this.click, this)).on('mouseenter', 'li', a.proxy(this.mouseenter, this))
    },
    move: function (a) {
      if (!this.shown) return
      switch (a.keyCode) {
        case 9:
        case 13:
        case 27:
          a.preventDefault()
          break
        case 38:
          a.preventDefault(), this.prev()
          break
        case 40:
          a.preventDefault(), this.next()
      }
      a.stopPropagation()
    },
    keydown: function (b) {
      (this.suppressKeyPressRepeat = !~a.inArray(b.keyCode, [40, 38, 9, 13, 27])), this.move(b)
    },
    keypress: function (a) {
      if (this.suppressKeyPressRepeat) return
      this.move(a)
    },
    keyup: function (a) {
      switch (a.keyCode) {
        case 40:
        case 38:
          break
        case 9:
        case 13:
          if (!this.shown) return
          this.select()
          break
        case 27:
          if (!this.shown) return
          this.hide()
          break
        default:
          this.lookup()
      }
      a.stopPropagation(), a.preventDefault()
    },
    blur: function (a) {
      var b = this
      setTimeout(function () {
        b.hide()
      }, 150)
    },
    click: function (a) {
      a.stopPropagation(), a.preventDefault(), this.select()
    },
    mouseenter: function (b) {
      this.$menu.find('.active').removeClass('active'), a(b.currentTarget).addClass('active')
    }
  }),
  (a.fn.typeahead = function (c) {
    return this.each(function () {
      var d = a(this)
      var e = d.data('typeahead')
      var f = typeof c === 'object' && c
      e || d.data('typeahead', (e = new b(this, f))), typeof c === 'string' && e[c]()
    })
  }),
  (a.fn.typeahead.defaults = { source: [], items: 8, menu: '<ul class="typeahead dropdown-menu"></ul>', item: '<li><a href="#"></a></li>', minLength: 1 }),
  (a.fn.typeahead.Constructor = b),
  a(function () {
    a('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (b) {
      var c = a(this)
      if (c.data('typeahead')) return
      b.preventDefault(), c.typeahead(c.data())
    })
  })
})(window.jQuery)
window.CodeMirror = (function () {
  'use strict'
  function a (g, j) {
    function k (a) {
      (bd.onDragEvent && bd.onDragEvent(ee, A(a))) || D(a)
    }
    function p (a) {
      return a >= 0 && a < zd.size
    }
    function q (a) {
      return u(zd, a)
    }
    function z (a, b) {
      Kd = !0
      for (var c = b - a.height, d = a; d; d = d.parent) d.height += c
    }
    function C (a, b) {
      return a.styles || a.highlight(vd, (a.stateAfter = Wc(v(a))), bd.tabSize), a.getContent(bd.tabSize, b, bd.lineWrapping)
    }
    function J (a) {
      var b = { line: 0, ch: 0 }
      Fb(b, { line: zd.size - 1, ch: q(zd.size - 1).text.length }, xb(a), b, b), (Fd = !0)
    }
    function V (a) {
      var b = []
      return (
        zd.iter(0, zd.size, function (a) {
          b.push(a.text)
        }),
        b.join(a || '\n')
      )
    }
    function _ () {
      Math.abs(hd.scrollTop - Od) > 1 && ((Od = sd.scrollTop = hd.scrollTop), ac([]))
    }
    function ab () {
      bd.fixedGutter && pd.style.left != sd.scrollLeft + 'px' && (pd.style.left = sd.scrollLeft + 'px'),
      Math.abs(sd.scrollTop - Od) > 1 && ((Od = sd.scrollTop), hd.scrollTop != Od && (hd.scrollTop = Od), ac([])),
      bd.onScroll && bd.onScroll(ee)
    }
    function db (a) {
      function b (b) {
        lb && (sd.draggable = !1), (Ed = !1), m(), n(), Math.abs(a.clientX - b.clientX) + Math.abs(a.clientY - b.clientY) < 10 && (B(b), jc(g.line, g.ch, !0), Wb())
      }
      function c (a) {
        if (i == 'single') gc(g, a)
        else if (i == 'double') {
          var b = qc(a)
          Q(a, o) ? gc(b.from, p) : gc(o, b.to)
        } else i == 'triple' && (Q(a, o) ? gc(p, lc({ line: a.line, ch: 0 })) : gc(o, lc({ line: a.line + 1, ch: 0 })))
      }
      function d (a) {
        var b = Rc(a, !0)
        if (b && !P(b, l)) {
          wd || Db(), (l = b), c(b), (Fd = !1)
          var e = _b();
          (b.line >= e.to || b.line < e.from) &&
            (k = setTimeout(
              _c(function () {
                d(a)
              }),
              150
            ))
        }
      }
      function e (a) {
        clearTimeout(k)
        var b = Rc(a)
        b && c(b), B(a), Wb(), (Fd = !0), q(), m()
      }
      fc(G(a, 'shiftKey'))
      for (var f = E(a); f != td; f = f.parentNode) if (f.parentNode == rd && f != qd) return
      for (var f = E(a); f != td; f = f.parentNode) if (f.parentNode == od) return bd.onGutterClick && bd.onGutterClick(ee, X(od.childNodes, f) + Td, a), B(a)
      var g = Rc(a)
      switch (F(a)) {
        case 3:
          return gb && Sc(a), void 0
        case 2:
          return g && jc(g.line, g.ch, !0), setTimeout(Wb, 20), B(a), void 0
      }
      if (!g) return E(a) == sd && B(a), void 0
      wd || Db()
      var h = +new Date()
      var i = 'single'
      if (Dd && Dd.time > h - 400 && P(Dd.pos, g)) (i = 'triple'), B(a), setTimeout(Wb, 20), rc(g.line)
      else if (Cd && Cd.time > h - 400 && P(Cd.pos, g)) {
        (i = 'double'), (Dd = { time: h, pos: g }), B(a)
        var j = qc(g)
        gc(j.from, j.to)
      } else Cd = { time: h, pos: g }
      var k
      var l = g
      if (bd.dragDrop && tb && !bd.readOnly && !P(Nd.from, Nd.to) && !Q(g, Nd.from) && !Q(Nd.to, g) && i == 'single') {
        lb && (sd.draggable = !0)
        var m = H(document, 'mouseup', _c(b), !0)
        var n = H(sd, 'drop', _c(b), !0)
        return (Ed = !0), sd.dragDrop && sd.dragDrop(), void 0
      }
      B(a), i == 'single' && jc(g.line, g.ch, !0)
      var o = Nd.from
      var p = Nd.to
      var q = H(
        document,
        'mousemove',
        _c(function (a) {
          clearTimeout(k), B(a), hb || F(a) ? d(a) : e(a)
        }),
        !0
      )
      var m = H(document, 'mouseup', _c(e), !0)
    }
    function mb (a) {
      for (var b = E(a); b != td; b = b.parentNode) if (b.parentNode == od) return B(a)
      B(a)
    }
    function ob (a) {
      if (!bd.onDragEvent || !bd.onDragEvent(ee, A(a))) {
        B(a)
        var b = Rc(a, !0)
        var c = a.dataTransfer.files
        if (b && !bd.readOnly) {
          if (c && c.length && window.FileReader && window.File) {
            for (
              var d = c.length,
                e = Array(d),
                f = 0,
                g = function (a, c) {
                  var g = new FileReader();
                  (g.onload = function () {
                    (e[c] = g.result),
                    ++f == d &&
                        ((b = lc(b)),
                        _c(function () {
                          var a = Nb(e.join(''), b, b)
                          gc(b, a)
                        })())
                  }),
                  g.readAsText(a)
                },
                h = 0;
              d > h;
              ++h
            ) { g(c[h], h) }
          } else {
            if (Ed && !Q(b, Nd.from) && !Q(Nd.to, b)) return
            try {
              var e = a.dataTransfer.getData('Text')
              e &&
                ad(function () {
                  var a = Nd.from
                  var c = Nd.to
                  gc(b, b), Ed && Nb('', a, c), Ob(e), Wb()
                })
            } catch (a) {}
          }
        }
      }
    }
    function rb (a) {
      var b = Rb()
      a.dataTransfer.setData('Text', b), a.dataTransfer.setDragImage && a.dataTransfer.setDragImage(S('img'), 0, 0)
    }
    function ub (a, b) {
      if (typeof a === 'string' && ((a = eb[a]), !a)) return !1
      var c = Bd
      try {
        bd.readOnly && (Qd = !0), b && (Bd = null), a(ee)
      } catch (d) {
        if (d != sb) throw d
        return !1
      } finally {
        (Bd = c), (Qd = !1)
      }
      return !0
    }
    function vb (a) {
      function e () {
        k = !0
      }
      var f = b(bd.keyMap)
      var g = f.auto
      clearTimeout(de),
      g &&
          !d(a) &&
          (de = setTimeout(function () {
            b(bd.keyMap) == f && (bd.keyMap = g.call ? g.call(null, ee) : g)
          }, 50))
      var h = zb[G(a, 'keyCode')]
      var i = !1
      var j = nb && $
      if (h == null || a.altGraphKey) return !1
      G(a, 'altKey') && (h = 'Alt-' + h), G(a, j ? 'metaKey' : 'ctrlKey') && (h = 'Ctrl-' + h), G(a, j ? 'ctrlKey' : 'metaKey') && (h = 'Cmd-' + h)
      var k = !1
      return (
        (i = G(a, 'shiftKey')
          ? c(
            'Shift-' + h,
            bd.extraKeys,
            bd.keyMap,
            function (a) {
              return ub(a, !0)
            },
            e
          ) ||
            c(
              h,
              bd.extraKeys,
              bd.keyMap,
              function (a) {
                return typeof a === 'string' && /^go[A-Z]/.test(a) ? ub(a) : void 0
              },
              e
            )
          : c(h, bd.extraKeys, bd.keyMap, ub, e)),
        k && (i = !1),
        i && (B(a), Tc(), jb && ((a.oldKeyCode = a.keyCode), (a.keyCode = 0))),
        i
      )
    }
    function wb (a, b) {
      var d = c("'" + b + "'", bd.extraKeys, bd.keyMap, function (a) {
        return ub(a, !0)
      })
      return d && (B(a), Tc()), d
    }
    function Ab (a) {
      if ((wd || Db(), hb && a.keyCode == 27 && (a.returnValue = !1), Zd && Ub() && (Zd = !1), !bd.onKeyEvent || !bd.onKeyEvent(ee, A(a)))) {
        var b = G(a, 'keyCode')
        fc(b == 16 || G(a, 'shiftKey'))
        var c = vb(a)
        nb && ((fe = c ? b : null), !c && b == 88 && G(a, $ ? 'metaKey' : 'ctrlKey') && Ob(''))
      }
    }
    function Bb (a) {
      if ((Zd && Ub(), !bd.onKeyEvent || !bd.onKeyEvent(ee, A(a)))) {
        var b = G(a, 'keyCode')
        var c = G(a, 'charCode')
        if (nb && b == fe) return (fe = null), B(a), void 0
        if (!((nb && (!a.which || a.which < 10)) || pb) || !vb(a)) {
          var d = String.fromCharCode(c == null ? b : c)
          bd.electricChars &&
            vd.electricChars &&
            bd.smartIndent &&
            !bd.readOnly &&
            vd.electricChars.indexOf(d) > -1 &&
            setTimeout(
              _c(function () {
                tc(Nd.to.line, 'smart')
              }),
              75
            ),
          wb(a, d) || Tb()
        }
      }
    }
    function Cb (a) {
      (bd.onKeyEvent && bd.onKeyEvent(ee, A(a))) || (G(a, 'keyCode') == 16 && (Bd = null))
    }
    function Db () {
      bd.readOnly != 'nocursor' && (wd || (bd.onFocus && bd.onFocus(ee), (wd = !0), sd.className.search(/\bCodeMirror-focused\b/) == -1 && (sd.className += ' CodeMirror-focused')), Sb(), Tc())
    }
    function Eb () {
      wd &&
        (bd.onBlur && bd.onBlur(ee),
        (wd = !1),
        Md &&
          _c(function () {
            Md && (Md(), (Md = null))
          })(),
        (sd.className = sd.className.replace(' CodeMirror-focused', ''))),
      clearInterval(ud),
      setTimeout(function () {
        wd || (Bd = null)
      }, 150)
    }
    function Fb (a, b, c, d, e) {
      if (!Qd) {
        var f = []
        if (
          (zd.iter(a.line, b.line + 1, function (a) {
            f.push(o(a.text, a.markedSpans))
          }),
          _d)
        ) { for (_d.addChange(a.line, c.length, f); _d.done.length > bd.undoDepth;) _d.done.shift() }
        var g = l(n(f[0]), n(N(f)), a.ch, b.ch, c)
        Jb(a, b, g, d, e)
      }
    }
    function Gb (a, b) {
      if (a.length) {
        for (var c = a.pop(), d = [], e = c.length - 1; e >= 0; e -= 1) {
          var f = c[e]
          var g = []
          var h = f.start + f.added
          zd.iter(f.start, h, function (a) {
            g.push(o(a.text, a.markedSpans))
          }),
          d.push({ start: f.start, added: f.old.length, old: g })
          var i = { line: f.start + f.old.length - 1, ch: W(m(N(g)), m(N(f.old))) }
          Jb({ line: f.start, ch: 0 }, { line: h - 1, ch: q(h - 1).text.length }, f.old, i, i)
        }
        (Fd = !0), b.push(d)
      }
    }
    function Hb () {
      Gb(_d.done, _d.undone)
    }
    function Ib () {
      Gb(_d.undone, _d.done)
    }
    function Jb (a, b, c, d, e) {
      function f (a) {
        return a <= Math.min(b.line, b.line + u) ? a : a + u
      }
      if (!Qd) {
        var g = !1
        var h = Wd.text.length
        bd.lineWrapping ||
          zd.iter(a.line, b.line + 1, function (a) {
            return a.hidden || a.text.length != h ? void 0 : ((g = !0), !0)
          }),
        (a.line != b.line || c.length > 1) && (Kd = !0)
        var i = b.line - a.line
        var j = q(a.line)
        var k = q(b.line)
        var l = N(c)
        if (a.ch == 0 && b.ch == 0 && m(l) == '') {
          for (var o = [], p = 0, s = c.length - 1; s > p; ++p) o.push(new r(m(c[p]), n(c[p])))
          k.update(k.text, n(l)), i && zd.remove(a.line, i, Ld), o.length && zd.insert(a.line, o)
        } else if (j == k) {
          if (c.length == 1) j.update(j.text.slice(0, a.ch) + m(c[0]) + j.text.slice(b.ch), n(c[0]))
          else {
            for (var o = [], p = 1, s = c.length - 1; s > p; ++p) o.push(new r(m(c[p]), n(c[p])))
            o.push(new r(m(l) + j.text.slice(b.ch), n(l))), j.update(j.text.slice(0, a.ch) + m(c[0]), n(c[0])), zd.insert(a.line + 1, o)
          }
        } else if (c.length == 1) j.update(j.text.slice(0, a.ch) + m(c[0]) + k.text.slice(b.ch), n(c[0])), zd.remove(a.line + 1, i, Ld)
        else {
          var o = []
          j.update(j.text.slice(0, a.ch) + m(c[0]), n(c[0])), k.update(m(l) + k.text.slice(b.ch), n(l))
          for (var p = 1, s = c.length - 1; s > p; ++p) o.push(new r(m(c[p]), n(c[p])))
          i > 1 && zd.remove(a.line + 1, i - 1, Ld), zd.insert(a.line + 1, o)
        }
        if (bd.lineWrapping) {
          var t = Math.max(5, sd.clientWidth / Oc() - 3)
          zd.iter(a.line, a.line + c.length, function (a) {
            if (!a.hidden) {
              var b = Math.ceil(a.text.length / t) || 1
              b != a.height && z(a, b)
            }
          })
        } else {
          zd.iter(a.line, a.line + c.length, function (a) {
            var b = a.text
            !a.hidden && b.length > h && ((Wd = a), (h = b.length), (Yd = !0), (g = !1))
          }),
          g && (Xd = !0)
        }
        (Ad = Math.min(Ad, a.line)), Yc(400)
        var u = c.length - i - 1
        if ((Hd.push({ from: a.line, to: b.line + 1, diff: u }), bd.onChange)) {
          for (var p = 0; p < c.length; ++p) typeof c[p] !== 'string' && (c[p] = c[p].text)
          var v = { from: a, to: b, text: c }
          if (Id) {
            for (var w = Id; w.next; w = w.next);
            w.next = v
          } else Id = v
        }
        hc(lc(d), lc(e), f(Nd.from.line), f(Nd.to.line))
      }
    }
    function Kb () {
      var a = zd.height * Nc() + 2 * Pc()
      return 0.99 * a > sd.offsetHeight ? a : !1
    }
    function Lb (a) {
      var b = Kb();
      (hd.style.display = b ? 'block' : 'none'),
      b
        ? ((gd.style.height = rd.style.minHeight = b + 'px'),
        (hd.style.height = sd.clientHeight + 'px'),
        a != null &&
              ((hd.scrollTop = sd.scrollTop = a),
              lb &&
                setTimeout(function () {
                  hd.scrollTop == a && ((hd.scrollTop = a + (a ? -1 : 1)), (hd.scrollTop = a))
                }, 0)))
        : (rd.style.minHeight = ''),
      (qd.style.top = Sd * Nc() + 'px')
    }
    function Mb () {
      (Wd = q(0)), (Yd = !0)
      var a = Wd.text.length
      zd.iter(1, zd.size, function (b) {
        var c = b.text
        !b.hidden && c.length > a && ((a = c.length), (Wd = b))
      }),
      (Xd = !1)
    }
    function Nb (a, b, c) {
      function d (d) {
        if (Q(d, b)) return d
        if (!Q(c, d)) return e
        var f = d.line + a.length - (c.line - b.line) - 1
        var g = d.ch
        return d.line == c.line && (g += N(a).length - (c.ch - (c.line == b.line ? b.ch : 0))), { line: f, ch: g }
      }
      (b = lc(b)), (c = c ? lc(c) : b), (a = xb(a))
      var e
      return (
        Pb(a, b, c, function (a) {
          return (e = a), { from: d(Nd.from), to: d(Nd.to) }
        }),
        e
      )
    }
    function Ob (a, b) {
      Pb(xb(a), Nd.from, Nd.to, function (a) {
        return b == 'end' ? { from: a, to: a } : b == 'start' ? { from: Nd.from, to: Nd.from } : { from: Nd.from, to: a }
      })
    }
    function Pb (a, b, c, d) {
      var e = a.length == 1 ? a[0].length + b.ch : N(a).length
      var f = d({ line: b.line + a.length - 1, ch: e })
      Fb(b, c, a, f.from, f.to)
    }
    function Qb (a, b, c) {
      var d = a.line
      var e = b.line
      if (d == e) return q(d).text.slice(a.ch, b.ch)
      var f = [q(d).text.slice(a.ch)]
      return (
        zd.iter(d + 1, e, function (a) {
          f.push(a.text)
        }),
        f.push(q(e).text.slice(0, b.ch)),
        f.join(c || '\n')
      )
    }
    function Rb (a) {
      return Qb(Nd.from, Nd.to, a)
    }
    function Sb () {
      Zd ||
        xd.set(bd.pollInterval, function () {
          Ub(), wd && Sb()
        })
    }
    function Tb () {
      function a () {
        var c = Ub()
        c || b ? ((Zd = !1), Sb()) : ((b = !0), xd.set(60, a))
      }
      var b = !1;
      (Zd = !0), xd.set(20, a)
    }
    function Ub () {
      if (!wd || yb(ed) || bd.readOnly) return !1
      var a = ed.value
      if (a == ge) return !1
      oe || Zc(), (Bd = null)
      for (var b = 0, c = Math.min(ge.length, a.length); c > b && ge[b] == a[b];) ++b
      return (
        b < ge.length ? (Nd.from = { line: Nd.from.line, ch: Nd.from.ch - (ge.length - b) }) : Pd && P(Nd.from, Nd.to) && !Rd && (Nd.to = { line: Nd.to.line, ch: Math.min(q(Nd.to.line).text.length, Nd.to.ch + (a.length - b)) }),
        Ob(a.slice(b), 'end'),
        a.length > 1e3 ? (ed.value = ge = '') : (ge = a),
        oe || $c(),
        (Rd = !1),
        !0
      )
    }
    function Vb (a) {
      P(Nd.from, Nd.to) ? a && (ge = ed.value = '') : ((ge = ''), (ed.value = Rb()), wd && O(ed))
    }
    function Wb () {
      bd.readOnly != 'nocursor' && ed.focus()
    }
    function Xb () {
      var a = Yb()
      if ((Zb(a.x, a.y, a.x, a.yBot), wd)) {
        var b = rd.getBoundingClientRect()
        var c = null
        if ((a.y + b.top < 0 ? (c = !0) : a.y + b.top + Nc() > (window.innerHeight || document.documentElement.clientHeight) && (c = !1), c != null)) {
          var d = kd.style.display == 'none'
          d && ((kd.style.display = ''), (kd.style.left = a.x + 'px'), (kd.style.top = a.y - Sd + 'px')), kd.scrollIntoView(c), d && (kd.style.display = 'none')
        }
      }
    }
    function Yb () {
      var a = Kc(Nd.inverted ? Nd.from : Nd.to)
      var b = bd.lineWrapping ? Math.min(a.x, nd.offsetWidth) : a.x
      return { x: b, y: a.y, yBot: a.yBot }
    }
    function Zb (a, b, c, d) {
      var e = $b(a, b, c, d)
      e.scrollLeft != null && (sd.scrollLeft = e.scrollLeft), e.scrollTop != null && (hd.scrollTop = sd.scrollTop = e.scrollTop)
    }
    function $b (a, b, c, d) {
      var e = Qc()
      var f = Pc();
      (b += f), (d += f), (a += e), (c += e)
      var g = sd.clientHeight
      var h = hd.scrollTop
      var i = {}
      var j = Kb() || 1 / 0
      var k = f + 10 > b
      var l = d + f > j - 10
      h > b ? (i.scrollTop = k ? 0 : Math.max(0, b)) : d > h + g && (i.scrollTop = (l ? j : d) - g)
      var m = sd.clientWidth
      var n = sd.scrollLeft
      var o = bd.fixedGutter ? pd.clientWidth : 0
      var p = o + e + 10 > a
      return n + o > a || p ? (p && (a = 0), (i.scrollLeft = Math.max(0, a - 10 - o))) : c > m + n - 3 && (i.scrollLeft = c + 10 - m), i
    }
    function _b (a) {
      var b = Nc()
      var c = (a != null ? a : hd.scrollTop) - Pc()
      var d = Math.max(0, Math.floor(c / b))
      var e = Math.ceil((c + sd.clientHeight) / b)
      return { from: w(zd, d), to: w(zd, e) }
    }
    function ac (a, b, c) {
      function d () {
        var a = id.firstChild
        var b = !1
        return (
          zd.iter(Td, Ud, function (c) {
            if (a) {
              if (!c.hidden) {
                var d = Math.round(a.offsetHeight / l) || 1
                c.height != d && (z(c, d), (Kd = b = !0))
              }
              a = a.nextSibling
            }
          }),
          b
        )
      }
      if (!sd.clientWidth) return (Td = Ud = Sd = 0), void 0
      var e = _b(c)
      if (a !== !0 && a.length == 0 && e.from > Td && e.to < Ud) return Lb(c), void 0
      var f = Math.max(e.from - 100, 0)
      var g = Math.min(zd.size, e.to + 100)
      f > Td && f - Td < 20 && (f = Td), Ud > g && Ud - g < 20 && (g = Math.min(zd.size, Ud))
      for (var h = a === !0 ? [] : bc([{ from: Td, to: Ud, domStart: 0 }], a), i = 0, j = 0; j < h.length; ++j) {
        var k = h[j]
        k.from < f && ((k.domStart += f - k.from), (k.from = f)), k.to > g && (k.to = g), k.from >= k.to ? h.splice(j--, 1) : (i += k.to - k.from)
      }
      if (i == g - f && f == Td && g == Ud) return Lb(c), void 0
      h.sort(function (a, b) {
        return a.domStart - b.domStart
      })
      var l = Nc()
      var m = pd.style.display;
      (id.style.display = 'none'), cc(f, g, h), (id.style.display = pd.style.display = '')
      var n = f != Td || g != Ud || Vd != sd.clientHeight + l
      if (
        (n && (Vd = sd.clientHeight + l),
        (f != Td || (g != Ud && bd.onViewportChange)) &&
          setTimeout(function () {
            bd.onViewportChange && bd.onViewportChange(ee, f, g)
          }),
        (Td = f),
        (Ud = g),
        (Sd = x(zd, f)),
        Yc(100),
        id.childNodes.length != Ud - Td)
      ) { throw new Error('BAD PATCH! ' + JSON.stringify(h) + ' size=' + (Ud - Td) + ' nodes=' + id.childNodes.length) }
      return bd.lineWrapping && d(), (pd.style.display = m), (n || Kd) && dc() && bd.lineWrapping && d() && dc(), Lb(c), ec(), !b && bd.onUpdate && bd.onUpdate(ee), !0
    }
    function bc (a, b) {
      for (var c = 0, d = b.length || 0; d > c; ++c) {
        for (var e = b[c], f = [], g = e.diff || 0, h = 0, i = a.length; i > h; ++h) {
          var j = a[h]
          e.to <= j.from && e.diff
            ? f.push({ from: j.from + g, to: j.to + g, domStart: j.domStart })
            : e.to <= j.from || e.from >= j.to
              ? f.push(j)
              : (e.from > j.from && f.push({ from: j.from, to: e.from, domStart: j.domStart }), e.to < j.to && f.push({ from: e.to + g, to: j.to + g, domStart: j.domStart + (e.to - j.from) }))
        }
        a = f
      }
      return a
    }
    function cc (a, b, c) {
      function d (a) {
        var b = a.nextSibling
        return a.parentNode.removeChild(a), b
      }
      if (c.length) {
        for (var e = 0, f = id.firstChild, g = 0; g < c.length; ++g) {
          for (var h = c[g]; h.domStart > e;) (f = d(f)), e++
          for (var i = 0, j = h.to - h.from; j > i; ++i) (f = f.nextSibling), e++
        }
        for (; f;) f = d(f)
      } else T(id)
      var k = c.shift()
      var f = id.firstChild
      var i = a
      zd.iter(a, b, function (a) {
        if ((k && k.to == i && (k = c.shift()), !k || k.from > i)) {
          if (a.hidden) var b = S('pre')
          else {
            var b = C(a)
            if ((a.className && (b.className = a.className), a.bgClassName)) {
              var d = S('pre', ' ', a.bgClassName, 'position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2')
              b = S('div', [d, b], null, 'position: relative')
            }
          }
          id.insertBefore(b, f)
        } else f = f.nextSibling
        ++i
      })
    }
    function dc () {
      if (bd.gutter || bd.lineNumbers) {
        var a = qd.offsetHeight
        var b = sd.clientHeight
        pd.style.height = (a - b < 2 ? b : a) + 'px'
        var c
        var d = document.createDocumentFragment()
        var e = Td
        if (
          (zd.iter(Td, Math.max(Ud, Td + 1), function (a) {
            if (a.hidden) d.appendChild(S('pre'))
            else {
              var b = a.gutterMarker
              var f = bd.lineNumbers ? bd.lineNumberFormatter(e + bd.firstLineNumber) : null
              b && b.text ? (f = b.text.replace('%N%', f != null ? f : '')) : f == null && (f = ' ')
              var g = d.appendChild(S('pre', null, b && b.style))
              g.innerHTML = f
              for (var h = 1; h < a.height; ++h) g.appendChild(S('br')), g.appendChild(document.createTextNode(' '))
              b || (c = e)
            }
            ++e
          }),
          (pd.style.display = 'none'),
          U(od, d),
          c != null && bd.lineNumbers)
        ) {
          for (var f = od.childNodes[c - Td], g = String(zd.size).length, h = L(f.firstChild), i = ''; h.length + i.length < g;) i += ' '
          i && f.insertBefore(document.createTextNode(i), f.firstChild)
        }
        pd.style.display = ''
        var j = Math.abs((parseInt(nd.style.marginLeft) || 0) - pd.offsetWidth) > 2
        return (nd.style.marginLeft = pd.offsetWidth + 'px'), (Kd = !1), j
      }
    }
    function ec () {
      var a = P(Nd.from, Nd.to)
      var b = Kc(Nd.from, !0)
      var c = a ? b : Kc(Nd.to, !0)
      var d = Nd.inverted ? b : c
      var e = Nc()
      var f = K(td)
      var g = K(id)
      if (((fd.style.top = Math.max(0, Math.min(sd.offsetHeight, d.y + g.top - f.top)) + 'px'), (fd.style.left = Math.max(0, Math.min(sd.offsetWidth, d.x + g.left - f.left)) + 'px'), a)) { (kd.style.top = d.y + 'px'), (kd.style.left = (bd.lineWrapping ? Math.min(d.x, nd.offsetWidth) : d.x) + 'px'), (kd.style.display = ''), (jd.style.display = 'none') } else {
        var h = b.y == c.y
        var i = document.createDocumentFragment()
        var j = nd.clientWidth || nd.offsetWidth
        var k = nd.clientHeight || nd.offsetHeight
        var l = function (a, b, c, d) {
          var e = kb ? 'width: ' + (c ? j - c - a : j) + 'px' : 'right: ' + c + 'px'
          i.appendChild(S('div', null, 'CodeMirror-selected', 'position: absolute; left: ' + a + 'px; top: ' + b + 'px; ' + e + '; height: ' + d + 'px'))
        }
        if (Nd.from.ch && b.y >= 0) {
          var m = h ? j - c.x : 0
          l(b.x, b.y, m, e)
        }
        var n = Math.max(0, b.y + (Nd.from.ch ? e : 0))
        var o = Math.min(c.y, k) - n
        o > 0.2 * e && l(0, n, 0, o), (h && Nd.from.ch) || !(c.y < k - 0.5 * e) || l(0, c.y, j - c.x, e), U(jd, i), (kd.style.display = 'none'), (jd.style.display = '')
      }
    }
    function fc (a) {
      Bd = a ? Bd || (Nd.inverted ? Nd.to : Nd.from) : null
    }
    function gc (a, b) {
      var c = Bd && lc(Bd)
      c && (Q(c, a) ? (a = c) : Q(b, c) && (b = c)), hc(a, b), (Gd = !0)
    }
    function hc (a, b, c, d) {
      if ((($d = null), c == null && ((c = Nd.from.line), (d = Nd.to.line)), !P(Nd.from, a) || !P(Nd.to, b))) {
        if (Q(b, a)) {
          var e = b;
          (b = a), (a = e)
        }
        if (a.line != c) {
          var f = ic(a, c, Nd.from.ch)
          f ? (a = f) : Hc(a.line, !1)
        }
        if ((b.line != d && (b = ic(b, d, Nd.to.ch)), P(a, b) ? (Nd.inverted = !1) : P(a, Nd.to) ? (Nd.inverted = !1) : P(b, Nd.from) && (Nd.inverted = !0), bd.autoClearEmptyLines && P(Nd.from, Nd.to))) {
          var g = Nd.inverted ? a : b
          if (g.line != Nd.from.line && Nd.from.line < zd.size) {
            var h = q(Nd.from.line);
            /^\s+$/.test(h.text) &&
              setTimeout(
                _c(function () {
                  if (h.parent && /^\s+$/.test(h.text)) {
                    var a = v(h)
                    Nb('', { line: a, ch: 0 }, { line: a, ch: h.text.length })
                  }
                }, 10)
              )
          }
        }
        (Nd.from = a), (Nd.to = b), (Jd = !0)
      }
    }
    function ic (a, b, c) {
      function d (b) {
        for (var d = a.line + b, e = b == 1 ? zd.size : -1; d != e;) {
          var g = q(d)
          if (!g.hidden) {
            var h = a.ch
            return (f || h > c || h > g.text.length) && (h = g.text.length), { line: d, ch: h }
          }
          d += b
        }
      }
      var e = q(a.line)
      var f = a.ch == e.text.length && a.ch != c
      return e.hidden ? (a.line >= b ? d(1) || d(-1) : d(-1) || d(1)) : a
    }
    function jc (a, b, c) {
      var d = lc({ line: a, ch: b || 0 });
      (c ? gc : hc)(d, d)
    }
    function kc (a) {
      return Math.max(0, Math.min(a, zd.size - 1))
    }
    function lc (a) {
      if (a.line < 0) return { line: 0, ch: 0 }
      if (a.line >= zd.size) return { line: zd.size - 1, ch: q(zd.size - 1).text.length }
      var b = a.ch
      var c = q(a.line).text.length
      return b == null || b > c ? { line: a.line, ch: c } : b < 0 ? { line: a.line, ch: 0 } : a
    }
    function mc (a, b) {
      function c () {
        for (var b = f + a, c = a < 0 ? -1 : zd.size; b != c; b += a) {
          var d = q(b)
          if (!d.hidden) return (f = b), (h = d), !0
        }
      }
      function d (b) {
        if (g == (a < 0 ? 0 : h.text.length)) {
          if (b || !c()) return !1
          g = a < 0 ? h.text.length : 0
        } else g += a
        return !0
      }
      var e = Nd.inverted ? Nd.from : Nd.to
      var f = e.line
      var g = e.ch
      var h = q(f)
      if (b == 'char') d()
      else if (b == 'column') d(!0)
      else if (b == 'word') {
        for (var i = !1; !(a < 0) || d();) {
          if (Y(h.text.charAt(g))) i = !0
          else if (i) {
            a < 0 && ((a = 1), d())
            break
          }
          if (a > 0 && !d()) break
        }
      }
      return { line: f, ch: g }
    }
    function nc (a, b) {
      var c = a < 0 ? Nd.from : Nd.to;
      (Bd || P(Nd.from, Nd.to)) && (c = mc(a, b)), jc(c.line, c.ch, !0)
    }
    function oc (a, b) {
      P(Nd.from, Nd.to) ? (a < 0 ? Nb('', mc(a, b), Nd.to) : Nb('', Nd.from, mc(a, b))) : Nb('', Nd.from, Nd.to), (Gd = !0)
    }
    function pc (a, b) {
      var c = Kc(Nd.inverted ? Nd.from : Nd.to, !0)
      if (($d != null && (c.x = $d), b == 'page')) {
        var d = Math.min(sd.clientHeight, window.innerHeight || document.documentElement.clientHeight)
        var e = Lc(c.x, c.y + d * a)
      } else if (b == 'line') {
        var f = Nc()
        var e = Lc(c.x, c.y + 0.5 * f + a * f)
      }
      b == 'page' && (hd.scrollTop += Kc(e, !0).y - c.y), jc(e.line, e.ch, !0), ($d = c.x)
    }
    function qc (a) {
      var b = q(a.line).text
      var c = a.ch
      var d = a.ch
      if (b) {
        a.after === !1 || d == b.length ? --c : ++d
        for (
          var e = b.charAt(c),
            f = Y(e)
              ? Y
              : /\s/.test(e)
                ? function (a) {
                  return /\s/.test(a)
                }
                : function (a) {
                  return !/\s/.test(a) && Y(a)
                };
          c > 0 && f(b.charAt(c - 1));

        ) { --c }
        for (; d < b.length && f(b.charAt(d));) ++d
      }
      return { from: { line: a.line, ch: c }, to: { line: a.line, ch: d } }
    }
    function rc (a) {
      gc({ line: a, ch: 0 }, lc({ line: a + 1, ch: 0 }))
    }
    function sc (a) {
      if (P(Nd.from, Nd.to)) return tc(Nd.from.line, a)
      for (var b = Nd.to.line - (Nd.to.ch ? 0 : 1), c = Nd.from.line; b >= c; ++c) tc(c, a)
    }
    function tc (a, b) {
      if ((b || (b = 'add'), b == 'smart')) {
        if (vd.indent) var c = Wc(a)
        else b = 'prev'
      }
      var d
      var e = q(a)
      var f = e.indentation(bd.tabSize)
      var g = e.text.match(/^\s*/)[0]
      b == 'smart' && ((d = vd.indent(c, e.text.slice(g.length), e.text)), d == sb && (b = 'prev')),
      b == 'prev' ? (d = a ? q(a - 1).indentation(bd.tabSize) : 0) : b == 'add' ? (d = f + bd.indentUnit) : b == 'subtract' && (d = f - bd.indentUnit),
      (d = Math.max(0, d))
      var h = ''
      var i = 0
      if (bd.indentWithTabs) for (var j = Math.floor(d / bd.tabSize); j; --j) (i += bd.tabSize), (h += '  ')
      d > i && (h += M(d - i)), h != g && Nb(h, { line: a, ch: 0 }, { line: a, ch: g.length }), (e.stateAfter = null)
    }
    function uc () {
      (vd = a.getMode(bd, bd.mode)),
      zd.iter(0, zd.size, function (a) {
        a.stateAfter = null
      }),
      (Ad = 0),
      Yc(100)
    }
    function vc () {
      var a = bd.gutter || bd.lineNumbers;
      (pd.style.display = a ? '' : 'none'), a ? (Kd = !0) : (id.parentNode.style.marginLeft = 0)
    }
    function wc () {
      if (bd.lineWrapping) {
        td.className += ' CodeMirror-wrap'
        var a = sd.clientWidth / Oc() - 3
        zd.iter(0, zd.size, function (b) {
          if (!b.hidden) {
            var c = Math.ceil(b.text.length / a) || 1
            c != 1 && z(b, c)
          }
        }),
        (nd.style.minWidth = ld.style.left = '')
      } else {
        (td.className = td.className.replace(' CodeMirror-wrap', '')),
        Mb(),
        zd.iter(0, zd.size, function (a) {
          a.height == 1 || a.hidden || z(a, 1)
        })
      }
      Hd.push({ from: 0, to: zd.size })
    }
    function xc () {
      sd.className = sd.className.replace(/\s*cm-s-\S+/g, '') + bd.theme.replace(/(^|\s)\s*/g, ' cm-s-')
    }
    function yc () {
      var a = fb[bd.keyMap].style
      td.className = td.className.replace(/\s*cm-keymap-\S+/g, '') + (a ? ' cm-keymap-' + a : '')
    }
    function zc (a, b) {
      (this.lines = []), (this.type = a), b && (this.style = b)
    }
    function Ac (a, b, c, d) {
      (a = lc(a)), (b = lc(b))
      var e = new zc('range', c)
      if (d) for (var f in d) d.hasOwnProperty(f) && (e[f] = d[f])
      var g = a.line
      return (
        zd.iter(g, b.line + 1, function (c) {
          var d = { from: g == a.line ? a.ch : null, to: g == b.line ? b.ch : null, marker: e };
          (c.markedSpans = (c.markedSpans || []).concat([d])), e.lines.push(c), ++g
        }),
        Hd.push({ from: a.line, to: b.line + 1 }),
        e
      )
    }
    function Bc (a) {
      a = lc(a)
      var b = new zc('bookmark')
      var c = q(a.line)
      _d.addChange(a.line, 1, [o(c.text, c.markedSpans)], !0)
      var d = { from: a.ch, to: a.ch, marker: b }
      return (c.markedSpans = (c.markedSpans || []).concat([d])), b.lines.push(c), b
    }
    function Cc (a) {
      a = lc(a)
      var b = []
      var c = q(a.line).markedSpans
      if (c) {
        for (var d = 0; d < c.length; ++d) {
          var e = c[d];
          (e.from == null || e.from <= a.ch) && (e.to == null || e.to >= a.ch) && b.push(e.marker)
        }
      }
      return b
    }
    function Dc (a, b, c) {
      return typeof a === 'number' && (a = q(kc(a))), (a.gutterMarker = { text: b, style: c }), (Kd = !0), a
    }
    function Ec (a) {
      typeof a === 'number' && (a = q(kc(a))), (a.gutterMarker = null), (Kd = !0)
    }
    function Fc (a, b) {
      var c = a
      var d = a
      return typeof a === 'number' ? (d = q(kc(a))) : (c = v(a)), c == null ? null : b(d, c) ? (Hd.push({ from: c, to: c + 1 }), d) : null
    }
    function Gc (a, b, c) {
      return Fc(a, function (a) {
        return a.className != b || a.bgClassName != c ? ((a.className = b), (a.bgClassName = c), !0) : void 0
      })
    }
    function Hc (a, b) {
      return Fc(a, function (a, c) {
        if (a.hidden != b) {
          (a.hidden = b), bd.lineWrapping || (b && a.text.length == Wd.text.length ? (Xd = !0) : !b && a.text.length > Wd.text.length && ((Wd = a), (Xd = !1))), z(a, b ? 0 : 1)
          var d = Nd.from.line
          var e = Nd.to.line
          if (b && (d == c || e == c)) {
            var f = d == c ? ic({ line: d, ch: 0 }, d, 0) : Nd.from
            var g = e == c ? ic({ line: e, ch: 0 }, e, 0) : Nd.to
            if (!g) return
            hc(f, g)
          }
          return (Kd = !0)
        }
      })
    }
    function Ic (a) {
      if (typeof a === 'number') {
        if (!p(a)) return null
        var b = a
        if (((a = q(a)), !a)) return null
      } else {
        var b = v(a)
        if (b == null) return null
      }
      var c = a.gutterMarker
      return { line: b, handle: a, text: a.text, markerText: c && c.text, markerClass: c && c.style, lineClass: a.className, bgClass: a.bgClassName }
    }
    function Jc (a, b) {
      if (b == 0) return { top: 0, left: 0 }
      var c = C(a, b)
      U(md, c)
      var d = c.anchor
      var e = d.offsetTop
      var f = d.offsetLeft
      if (hb && e == 0 && f == 0) {
        var g = S('span', 'x')
        d.parentNode.insertBefore(g, d.nextSibling), (e = g.offsetTop)
      }
      return { top: e, left: f }
    }
    function Kc (a, b) {
      var c
      var d = Nc()
      var e = d * (x(zd, a.line) - (b ? Sd : 0))
      if (a.ch == 0) c = 0
      else {
        var f = Jc(q(a.line), a.ch);
        (c = f.left), bd.lineWrapping && (e += Math.max(0, f.top))
      }
      return { x: c, y: e, yBot: e + d }
    }
    function Lc (a, b) {
      function c (a) {
        var b = Jc(h, a)
        if (j) {
          var c = Math.round(b.top / d)
          return (m = c != k), Math.max(0, b.left + (c - k) * sd.clientWidth)
        }
        return b.left
      }
      var d = Nc()
      var e = Oc()
      var f = Sd + Math.floor(b / d)
      if (f < 0) return { line: 0, ch: 0 }
      var g = w(zd, f)
      if (g >= zd.size) return { line: zd.size - 1, ch: q(zd.size - 1).text.length }
      var h = q(g)
      var i = h.text
      var j = bd.lineWrapping
      var k = j ? f - x(zd, g) : 0
      if (a <= 0 && k == 0) return { line: g, ch: 0 }
      for (var l, m = !1, n = 0, o = 0, p = i.length, r = Math.min(p, Math.ceil((a + 0.9 * k * sd.clientWidth) / e)); ;) {
        var s = c(r)
        if (!(a >= s && p > r)) {
          (l = s), (p = r)
          break
        }
        r = Math.min(p, Math.ceil(1.2 * r))
      }
      if (a > l) return { line: g, ch: p }
      for (r = Math.floor(0.8 * p), s = c(r), a > s && ((n = r), (o = s)); ;) {
        if (p - n <= 1) {
          var t = l - a > a - o
          return { line: g, ch: t ? n : p, after: t }
        }
        var u = Math.ceil((n + p) / 2)
        var v = c(u)
        v > a ? ((p = u), (l = v), m && (l += 1e3)) : ((n = u), (o = v))
      }
    }
    function Mc (a) {
      var b = Kc(a, !0)
      var c = K(nd)
      return { x: c.left + b.x, y: c.top + b.y, yBot: c.top + b.yBot }
    }
    function Nc () {
      if (je == null) {
        je = S('pre')
        for (var a = 0; a < 49; ++a) je.appendChild(document.createTextNode('x')), je.appendChild(S('br'))
        je.appendChild(document.createTextNode('x'))
      }
      var b = id.clientHeight
      return b == ie ? he : ((ie = b), U(md, je.cloneNode(!0)), (he = md.firstChild.offsetHeight / 50 || 1), T(md), he)
    }
    function Oc () {
      if (sd.clientWidth == me) return ke
      me = sd.clientWidth
      var a = S('span', 'x')
      var b = S('pre', [a])
      return U(md, b), (ke = a.offsetWidth || 10)
    }
    function Pc () {
      return nd.offsetTop
    }
    function Qc () {
      return nd.offsetLeft
    }
    function Rc (a, b) {
      var c
      var d
      var e = K(sd, !0)
      try {
        (c = a.clientX), (d = a.clientY)
      } catch (a) {
        return null
      }
      if (!b && (c - e.left > sd.clientWidth || d - e.top > sd.clientHeight)) return null
      var f = K(nd, !0)
      return Lc(c - f.left, d - f.top)
    }
    function Sc (a) {
      function b () {
        if (((fd.style.position = 'relative'), (ed.style.cssText = e), jb && (hd.scrollTop = d), Sb(), ed.selectionStart != null)) {
          clearTimeout(le)
          var a = (ed.value = ' ' + (P(Nd.from, Nd.to) ? '' : ed.value))
          var b = 0;
          (ge = ' '),
          (ed.selectionStart = 1),
          (ed.selectionEnd = a.length),
          (le = setTimeout(function c () {
            ge == ' ' && ed.selectionStart == 0 ? _c(eb.selectAll)(ee) : b++ < 10 ? (le = setTimeout(c, 500)) : Vb()
          }, 200))
        }
      }
      var c = Rc(a)
      var d = hd.scrollTop
      if (c && !nb) {
        (P(Nd.from, Nd.to) || Q(c, Nd.from) || !Q(c, Nd.to)) && _c(jc)(c.line, c.ch)
        var e = ed.style.cssText
        if (
          ((fd.style.position = 'absolute'),
          (ed.style.cssText =
            'position: fixed; width: 30px; height: 30px; top: ' +
            (a.clientY - 5) +
            'px; left: ' +
            (a.clientX - 5) +
            'px; z-index: 1000; background: white; ' +
            'border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
          Wb(),
          Vb(!0),
          P(Nd.from, Nd.to) && (ed.value = ge = ' '),
          gb)
        ) {
          D(a)
          var f = H(
            window,
            'mouseup',
            function () {
              f(), setTimeout(b, 20)
            },
            !0
          )
        } else setTimeout(b, 50)
      }
    }
    function Tc () {
      clearInterval(ud)
      var a = !0;
      (kd.style.visibility = ''),
      (ud = setInterval(function () {
        kd.style.visibility = (a = !a) ? '' : 'hidden'
      }, bd.cursorBlinkRate))
    }
    function Uc (a) {
      function b (a, b, c) {
        if (a.text) {
          for (var d, e = a.styles, f = g ? 0 : a.text.length - 1, i = g ? 0 : e.length - 2, j = g ? e.length : -2; i != j; i += 2 * h) {
            var k = e[i]
            if (e[i + 1] == m) {
              for (var l = g ? 0 : k.length - 1, p = g ? k.length : -1; l != p; l += h, f += h) {
                if (f >= b && c > f && o.test((d = k.charAt(l)))) {
                  var q = ne[d]
                  if ((q.charAt(1) == '>') == g) n.push(d)
                  else {
                    if (n.pop() != q.charAt(0)) return { pos: f, match: !1 }
                    if (!n.length) return { pos: f, match: !0 }
                  }
                }
              }
            } else f += h * k.length
          }
        }
      }
      var c = Nd.inverted ? Nd.from : Nd.to
      var d = q(c.line)
      var e = c.ch - 1
      var f = (e >= 0 && ne[d.text.charAt(e)]) || ne[d.text.charAt(++e)]
      if (f) {
        for (var g = (f.charAt(0), f.charAt(1) == '>'), h = g ? 1 : -1, i = d.styles, j = e + 1, k = 0, l = i.length; l > k; k += 2) {
          if ((j -= i[k].length) <= 0) {
            var m = i[k + 1]
            break
          }
        }
        for (var n = [d.text.charAt(e)], o = /[(){}[\]]/, k = c.line, l = g ? Math.min(k + 100, zd.size) : Math.max(-1, k - 100); k != l; k += h) {
          var d = q(k)
          var p = k == c.line
          var r = b(d, p && g ? e + 1 : 0, p && !g ? e : d.text.length)
          if (r) break
        }
        r || (r = { pos: null, match: !1 })
        var m = r.match ? 'CodeMirror-matchingbracket' : 'CodeMirror-nonmatchingbracket'
        var s = Ac({ line: c.line, ch: e }, { line: c.line, ch: e + 1 }, m)
        var t = r.pos != null && Ac({ line: k, ch: r.pos }, { line: k, ch: r.pos + 1 }, m)
        var u = _c(function () {
          s.clear(), t && t.clear()
        })
        a ? setTimeout(u, 800) : (Md = u)
      }
    }
    function Vc (a) {
      for (var b, c, d = a, e = a - 40; d > e; --d) {
        if (d == 0) return 0
        var f = q(d - 1)
        if (f.stateAfter) return d
        var g = f.indentation(bd.tabSize);
        (c == null || b > g) && ((c = d - 1), (b = g))
      }
      return c
    }
    function Wc (a) {
      var b = Vc(a)
      var c = b && q(b - 1).stateAfter
      return (
        (c = c ? e(vd, c) : f(vd)),
        zd.iter(b, a, function (d) {
          d.process(vd, c, bd.tabSize), (d.stateAfter = b == a - 1 || b % 5 == 0 ? e(vd, c) : null)
        }),
        c
      )
    }
    function Xc () {
      if (!(Ad >= Ud)) {
        var a = +new Date() + bd.workTime
        var b = e(vd, Wc(Ad))
        var c = Ad
        zd.iter(Ad, Ud, function (c) {
          return Ad >= Td ? (c.highlight(vd, b, bd.tabSize), (c.stateAfter = e(vd, b))) : (c.process(vd, b, bd.tabSize), (c.stateAfter = Ad % 5 == 0 ? e(vd, b) : null)), ++Ad, +new Date() > a ? (Yc(bd.workDelay), !0) : void 0
        }),
        Ud > c &&
            Ad >= Td &&
            _c(function () {
              Hd.push({ from: c, to: Ad })
            })()
      }
    }
    function Yc (a) {
      Ud > Ad && yd.set(a, Xc)
    }
    function Zc () {
      (Fd = Gd = Id = null), (Hd = []), (Jd = !1), (Ld = [])
    }
    function $c () {
      if ((Xd && Mb(), Yd && !bd.lineWrapping)) {
        var a = ld.offsetWidth
        var b = Jc(Wd, Wd.text.length).left
        ib || ((ld.style.left = b + 'px'), (nd.style.minWidth = b + a + 'px')), (Yd = !1)
      }
      var c, d
      if (Jd) {
        var e = Yb()
        c = $b(e.x, e.y, e.x, e.yBot)
      }
      (Hd.length || (c && c.scrollTop != null)) && (d = ac(Hd, !0, c && c.scrollTop)),
      d || (Jd && ec(), Kd && dc()),
      c && Xb(),
      Jd && Tc(),
      wd && (Fd === !0 || (Fd !== !1 && Jd)) && Vb(Gd),
      Jd &&
          bd.matchBrackets &&
          setTimeout(
            _c(function () {
              Md && (Md(), (Md = null)), P(Nd.from, Nd.to) && Uc(!1)
            }),
            20
          )
      var f = Jd
      var g = Ld
      Id && bd.onChange && ee && bd.onChange(ee, Id), f && bd.onCursorActivity && bd.onCursorActivity(ee)
      for (var h = 0; h < g.length; ++h) g[h](ee)
      d && bd.onUpdate && bd.onUpdate(ee)
    }
    function _c (a) {
      return function () {
        oe++ || Zc()
        try {
          var b = a.apply(this, arguments)
        } finally {
          --oe || $c()
        }
        return b
      }
    }
    function ad (a) {
      _d.startCompound()
      try {
        return a()
      } finally {
        _d.endCompound()
      }
    }
    var bd = {}
    var cd = a.defaults
    for (var dd in cd) cd.hasOwnProperty(dd) && (bd[dd] = (j && j.hasOwnProperty(dd) ? j : cd)[dd])
    var ed = S('textarea', null, null, 'position: absolute; padding: 0; width: 1px; height: 1em')
    ed.setAttribute('wrap', 'off'), ed.setAttribute('autocorrect', 'off'), ed.setAttribute('autocapitalize', 'off')
    var fd = S('div', [ed], null, 'overflow: hidden; position: relative; width: 3px; height: 0px;')
    var gd = S('div', null, 'CodeMirror-scrollbar-inner')
    var hd = S('div', [gd], 'CodeMirror-scrollbar')
    var id = S('div')
    var jd = S('div', null, null, 'position: relative; z-index: -1')
    var kd = S('pre', ' ', 'CodeMirror-cursor')
    var ld = S('pre', ' ', 'CodeMirror-cursor', 'visibility: hidden')
    var md = S('div', null, null, 'position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden;')
    var nd = S('div', [md, kd, ld, jd, id], null, 'position: relative; z-index: 0')
    var od = S('div', null, 'CodeMirror-gutter-text')
    var pd = S('div', [od], 'CodeMirror-gutter')
    var qd = S('div', [pd, S('div', [nd], 'CodeMirror-lines')], null, 'position: relative')
    var rd = S('div', [qd], null, 'position: relative')
    var sd = S('div', [rd], 'CodeMirror-scroll')
    sd.setAttribute('tabIndex', '-1')
    var td = S('div', [fd, hd, sd], 'CodeMirror' + (bd.lineWrapping ? ' CodeMirror-wrap' : ''))
    g.appendChild ? g.appendChild(td) : g(td),
    xc(),
    yc(),
    Z && (ed.style.width = '0px'),
    lb || (sd.draggable = !0),
    (nd.style.outline = 'none'),
    bd.tabindex != null && (ed.tabIndex = bd.tabindex),
    bd.autofocus && Wb(),
    bd.gutter || bd.lineNumbers || (pd.style.display = 'none'),
    pb && ((fd.style.height = '1px'), (fd.style.position = 'absolute')),
    qb ? ((hd.style.zIndex = -2), (hd.style.visibility = 'hidden')) : ib && (hd.style.minWidth = '18px')
    var ud
    var vd
    var wd
    var xd = new I()
    var yd = new I()
    var zd = new t([new s([new r('')])])
    var Ad = 0
    uc()
    var Bd
    var Cd
    var Dd
    var Ed
    var Fd
    var Gd
    var Hd
    var Id
    var Jd
    var Kd
    var Ld
    var Md
    var Nd = { from: { line: 0, ch: 0 }, to: { line: 0, ch: 0 }, inverted: !1 }
    var Od = 0
    var Pd = !1
    var Qd = !1
    var Rd = !1
    var Sd = 0
    var Td = 0
    var Ud = 0
    var Vd = 0
    var Wd = q(0)
    var Xd = !1
    var Yd = !0
    var Zd = !1
    var $d = null
    _c(function () {
      J(bd.value || ''), (Fd = !1)
    })()
    var _d = new y()
    H(sd, 'mousedown', _c(db)),
    H(sd, 'dblclick', _c(mb)),
    H(nd, 'selectstart', B),
    gb || H(sd, 'contextmenu', Sc),
    H(sd, 'scroll', ab),
    H(hd, 'scroll', _),
    H(hd, 'mousedown', function () {
      wd && setTimeout(Wb, 0)
    })
    var ae = H(
      window,
      'resize',
      function () {
        td.parentNode ? ac(!0) : ae()
      },
      !0
    )
    H(ed, 'keyup', _c(Cb)),
    H(ed, 'input', Tb),
    H(ed, 'keydown', _c(Ab)),
    H(ed, 'keypress', _c(Bb)),
    H(ed, 'focus', Db),
    H(ed, 'blur', Eb),
    bd.dragDrop && (H(sd, 'dragstart', rb), H(sd, 'dragenter', k), H(sd, 'dragover', k), H(sd, 'drop', _c(ob))),
    H(sd, 'paste', function () {
      Wb(), Tb()
    }),
    H(ed, 'paste', function () {
      (Rd = !0), Tb()
    }),
    H(
      ed,
      'cut',
      _c(function () {
        bd.readOnly || Ob('')
      })
    ),
    pb &&
        H(rd, 'mouseup', function () {
          document.activeElement == ed && ed.blur(), Wb()
        })
    var be
    try {
      be = document.activeElement == ed
    } catch (ce) {}
    be || bd.autofocus ? setTimeout(Db, 20) : Eb()
    var de
    var ee = (td.CodeMirror = {
      getValue: V,
      setValue: _c(J),
      getSelection: Rb,
      replaceSelection: _c(Ob),
      focus: function () {
        window.focus(), Wb(), Db(), Tb()
      },
      setOption: function (a, b) {
        var c = bd[a];
        (bd[a] = b),
        a == 'mode' || a == 'indentUnit'
          ? uc()
          : a == 'readOnly' && b == 'nocursor'
            ? (Eb(), ed.blur())
            : a != 'readOnly' || b
              ? a == 'theme'
                ? xc()
                : a == 'lineWrapping' && c != b
                  ? _c(wc)()
                  : a == 'tabSize'
                    ? ac(!0)
                    : a == 'keyMap'
                      ? yc()
                      : a == 'tabindex' && (ed.tabIndex = b)
              : Vb(!0),
        (a == 'lineNumbers' || a == 'gutter' || a == 'firstLineNumber' || a == 'theme' || a == 'lineNumberFormatter') && (vc(), ac(!0))
      },
      getOption: function (a) {
        return bd[a]
      },
      getMode: function () {
        return vd
      },
      undo: _c(Hb),
      redo: _c(Ib),
      indentLine: _c(function (a, b) {
        typeof b !== 'string' && (b = b == null ? (bd.smartIndent ? 'smart' : 'prev') : b ? 'add' : 'subtract'), p(a) && tc(a, b)
      }),
      indentSelection: _c(sc),
      historySize: function () {
        return { undo: _d.done.length, redo: _d.undone.length }
      },
      clearHistory: function () {
        _d = new y()
      },
      setHistory: function (a) {
        (_d = new y()), (_d.done = a.done), (_d.undone = a.undone)
      },
      getHistory: function () {
        function a (a) {
          for (var b, c = 0, d = []; c < a.length; ++c) {
            d.push((b = []))
            for (var e = 0, f = a[c]; e < f.length; ++e) {
              var g = []
              var h = f[e]
              b.push({ start: h.start, added: h.added, old: g })
              for (var i = 0; i < h.old.length; ++i) g.push(m(h.old[i]))
            }
          }
          return d
        }
        return { done: a(_d.done), undone: a(_d.undone) }
      },
      matchBrackets: _c(function () {
        Uc(!0)
      }),
      getTokenAt: _c(function (a) {
        return (a = lc(a)), q(a.line).getTokenAt(vd, Wc(a.line), bd.tabSize, a.ch)
      }),
      getStateAfter: function (a) {
        return (a = kc(a == null ? zd.size - 1 : a)), Wc(a + 1)
      },
      cursorCoords: function (a, b) {
        return a == null && (a = Nd.inverted), this.charCoords(a ? Nd.from : Nd.to, b)
      },
      charCoords: function (a, b) {
        return (a = lc(a)), b == 'local' ? Kc(a, !1) : b == 'div' ? Kc(a, !0) : Mc(a)
      },
      coordsChar: function (a) {
        var b = K(nd)
        return Lc(a.x - b.left, a.y - b.top)
      },
      defaultTextHeight: function () {
        return Nc()
      },
      markText: _c(Ac),
      setBookmark: Bc,
      findMarksAt: Cc,
      setMarker: _c(Dc),
      clearMarker: _c(Ec),
      setLineClass: _c(Gc),
      hideLine: _c(function (a) {
        return Hc(a, !0)
      }),
      showLine: _c(function (a) {
        return Hc(a, !1)
      }),
      onDeleteLine: function (a, b) {
        if (typeof a === 'number') {
          if (!p(a)) return null
          a = q(a)
        }
        return (a.handlers || (a.handlers = [])).push(b), a
      },
      lineInfo: Ic,
      getViewport: function () {
        return { from: Td, to: Ud }
      },
      addWidget: function (a, b, c, d, e) {
        a = Kc(lc(a))
        var f = a.yBot
        var g = a.x
        if (((b.style.position = 'absolute'), rd.appendChild(b), d == 'over')) f = a.y
        else if (d == 'near') {
          var h = Math.max(sd.offsetHeight, zd.height * Nc())
          var i = Math.max(rd.clientWidth, nd.clientWidth) - Qc()
          a.yBot + b.offsetHeight > h && a.y > b.offsetHeight && (f = a.y - b.offsetHeight), g + b.offsetWidth > i && (g = i - b.offsetWidth)
        }
        (b.style.top = f + Pc() + 'px'),
        (b.style.left = b.style.right = ''),
        e == 'right' ? ((g = rd.clientWidth - b.offsetWidth), (b.style.right = '0px')) : (e == 'left' ? (g = 0) : e == 'middle' && (g = (rd.clientWidth - b.offsetWidth) / 2), (b.style.left = g + Qc() + 'px')),
        c && Zb(g, f, g + b.offsetWidth, f + b.offsetHeight)
      },
      lineCount: function () {
        return zd.size
      },
      clipPos: lc,
      getCursor: function (a) {
        return a == null && (a = Nd.inverted), R(a ? Nd.from : Nd.to)
      },
      somethingSelected: function () {
        return !P(Nd.from, Nd.to)
      },
      setCursor: _c(function (a, b, c) {
        b == null && typeof a.line === 'number' ? jc(a.line, a.ch, c) : jc(a, b, c)
      }),
      setSelection: _c(function (a, b, c) {
        (c ? gc : hc)(lc(a), lc(b || a))
      }),
      getLine: function (a) {
        return p(a) ? q(a).text : void 0
      },
      getLineHandle: function (a) {
        return p(a) ? q(a) : void 0
      },
      setLine: _c(function (a, b) {
        p(a) && Nb(b, { line: a, ch: 0 }, { line: a, ch: q(a).text.length })
      }),
      removeLine: _c(function (a) {
        p(a) && Nb('', { line: a, ch: 0 }, lc({ line: a + 1, ch: 0 }))
      }),
      replaceRange: _c(Nb),
      getRange: function (a, b, c) {
        return Qb(lc(a), lc(b), c)
      },
      triggerOnKeyDown: _c(Ab),
      execCommand: function (a) {
        return eb[a](ee)
      },
      moveH: _c(nc),
      deleteH: _c(oc),
      moveV: _c(pc),
      toggleOverwrite: function () {
        Pd ? ((Pd = !1), (kd.className = kd.className.replace(' CodeMirror-overwrite', ''))) : ((Pd = !0), (kd.className += ' CodeMirror-overwrite'))
      },
      posFromIndex: function (a) {
        var b
        var c = 0
        return (
          zd.iter(0, zd.size, function (d) {
            var e = d.text.length + 1
            return e > a ? ((b = a), !0) : ((a -= e), ++c, void 0)
          }),
          lc({ line: c, ch: b })
        )
      },
      indexFromPos: function (a) {
        if (a.line < 0 || a.ch < 0) return 0
        var b = a.ch
        return (
          zd.iter(0, a.line, function (a) {
            b += a.text.length + 1
          }),
          b
        )
      },
      scrollTo: function (a, b) {
        a != null && (sd.scrollLeft = a), b != null && (hd.scrollTop = sd.scrollTop = b), ac([])
      },
      getScrollInfo: function () {
        return { x: sd.scrollLeft, y: hd.scrollTop, height: hd.scrollHeight, width: sd.scrollWidth }
      },
      scrollIntoView: function (a) {
        var b = Kc(a ? lc(a) : Nd.inverted ? Nd.from : Nd.to)
        Zb(b.x, b.y, b.x, b.yBot)
      },
      setSize: function (a, b) {
        function c (a) {
          return (a = String(a)), /^\d+$/.test(a) ? a + 'px' : a
        }
        a != null && (td.style.width = c(a)), b != null && (sd.style.height = c(b)), ee.refresh()
      },
      operation: function (a) {
        return _c(a)()
      },
      compoundChange: function (a) {
        return ad(a)
      },
      refresh: function () {
        ac(!0, null, Od), hd.scrollHeight > Od && (hd.scrollTop = Od)
      },
      getInputField: function () {
        return ed
      },
      getWrapperElement: function () {
        return td
      },
      getScrollerElement: function () {
        return sd
      },
      getGutterElement: function () {
        return pd
      }
    })
    var fe = null
    var ge = '';
    (zc.prototype.clear = _c(function () {
      for (var a, b, c = 0; c < this.lines.length; ++c) {
        var d = this.lines[c]
        var e = h(d.markedSpans, this)
        e.from != null && (a = v(d)), e.to != null && (b = v(d)), (d.markedSpans = i(d.markedSpans, e))
      }
      a != null && Hd.push({ from: a, to: b + 1 }), (this.lines.length = 0), (this.explicitlyCleared = !0)
    })),
    (zc.prototype.find = function () {
      for (var a, b, c = 0; c < this.lines.length; ++c) {
        var d = this.lines[c]
        var e = h(d.markedSpans, this)
        if (e.from != null || e.to != null) {
          var f = v(d)
          e.from != null && (a = { line: f, ch: e.from }), e.to != null && (b = { line: f, ch: e.to })
        }
      }
      return this.type == 'bookmark' ? a : a && { from: a, to: b }
    })
    var he
    var ie
    var je
    var ke
    var le
    var me = 0
    var ne = { '(': ')>', ')': '(<', '[': ']>', ']': '[<', '{': '}>', '}': '{<' }
    var oe = 0
    for (var pe in bb) bb.propertyIsEnumerable(pe) && !ee.propertyIsEnumerable(pe) && (ee[pe] = bb[pe])
    for (var qe = 0; qe < cb.length; ++qe) cb[qe](ee)
    return ee
  }
  function b (a) {
    return typeof a === 'string' ? fb[a] : a
  }
  function c (a, c, d, e, f) {
    function g (c) {
      c = b(c)
      var d = c[a]
      if (d === !1) return f && f(), !0
      if (d != null && e(d)) return !0
      if (c.nofallthrough) return f && f(), !0
      var h = c.fallthrough
      if (h == null) return !1
      if (Object.prototype.toString.call(h) != '[object Array]') return g(h)
      for (var i = 0, j = h.length; j > i; ++i) if (g(h[i])) return !0
      return !1
    }
    return c && g(c) ? !0 : g(d)
  }
  function d (a) {
    var b = zb[G(a, 'keyCode')]
    return b == 'Ctrl' || b == 'Alt' || b == 'Shift' || b == 'Mod'
  }
  function e (a, b) {
    if (b === !0) return b
    if (a.copyState) return a.copyState(b)
    var c = {}
    for (var d in b) {
      var e = b[d]
      e instanceof Array && (e = e.concat([])), (c[d] = e)
    }
    return c
  }
  function f (a, b, c) {
    return a.startState ? a.startState(b, c) : !0
  }
  function g (a, b) {
    (this.pos = this.start = 0), (this.string = a), (this.tabSize = b || 8)
  }
  function h (a, b) {
    if (a) {
      for (var c = 0; c < a.length; ++c) {
        var d = a[c]
        if (d.marker == b) return d
      }
    }
  }
  function i (a, b) {
    for (var c, d = 0; d < a.length; ++d) a[d] != b && (c || (c = [])).push(a[d])
    return c
  }
  function j (a, b, c) {
    if (a) {
      for (var d, e = 0; e < a.length; ++e) {
        var f = a[e]
        var g = f.marker
        var h = f.from == null || (g.inclusiveLeft ? f.from <= b : f.from < b)
        if (h || (g.type == 'bookmark' && f.from == b && f.from != c)) {
          var i = f.to == null || (g.inclusiveRight ? f.to >= b : f.to > b);
          (d || (d = [])).push({ from: f.from, to: i ? null : f.to, marker: g })
        }
      }
    }
    return d
  }
  function k (a, b) {
    if (a) {
      for (var c, d = 0; d < a.length; ++d) {
        var e = a[d]
        var f = e.marker
        var g = e.to == null || (f.inclusiveRight ? e.to >= b : e.to > b)
        if (g || (f.type == 'bookmark' && e.from == b)) {
          var h = e.from == null || (f.inclusiveLeft ? e.from <= b : e.from < b);
          (c || (c = [])).push({ from: h ? null : e.from - b, to: e.to == null ? null : e.to - b, marker: f })
        }
      }
    }
    return c
  }
  function l (a, b, c, d, e) {
    if (!a && !b) return e
    var f = j(a, c)
    var g = k(b, d)
    var i = e.length == 1
    var l = N(e).length + (i ? c : 0)
    if (f) {
      for (var m = 0; m < f.length; ++m) {
        var n = f[m]
        if (n.to == null) {
          var p = h(g, n.marker)
          p ? i && (n.to = p.to == null ? null : p.to + l) : (n.to = c)
        }
      }
    }
    if (g) {
      for (var m = 0; m < g.length; ++m) {
        var n = g[m]
        if ((n.to != null && (n.to += l), n.from == null)) {
          var p = h(f, n.marker)
          p || ((n.from = l), i && (f || (f = [])).push(n))
        } else (n.from += l), i && (f || (f = [])).push(n)
      }
    }
    var q = [o(e[0], f)]
    if (!i) {
      var r
      var s = e.length - 2
      if (s > 0 && f) for (var m = 0; m < f.length; ++m) f[m].to == null && (r || (r = [])).push({ from: null, to: null, marker: f[m].marker })
      for (var m = 0; s > m; ++m) q.push(o(e[m + 1], r))
      q.push(o(N(e), g))
    }
    return q
  }
  function m (a) {
    return typeof a === 'string' ? a : a.text
  }
  function n (a) {
    if (typeof a === 'string') return null
    for (var b = a.markedSpans, c = null, d = 0; d < b.length; ++d) b[d].marker.explicitlyCleared ? c || (c = b.slice(0, d)) : c && c.push(b[d])
    return c ? (c.length ? c : null) : b
  }
  function o (a, b) {
    return b ? { text: a, markedSpans: b } : a
  }
  function p (a) {
    var b = a.markedSpans
    if (b) {
      for (var c = 0; c < b.length; ++c) {
        var d = b[c].marker.lines
        var e = X(d, a)
        d.splice(e, 1)
      }
      a.markedSpans = null
    }
  }
  function q (a, b) {
    if (b) {
      for (var c = 0; c < b.length; ++c) b[c].marker.lines.push(a)
      a.markedSpans = b
    }
  }
  function r (a, b) {
    (this.text = a), (this.height = 1), q(this, b)
  }
  function s (a) {
    (this.lines = a), (this.parent = null)
    for (var b = 0, c = a.length, d = 0; c > b; ++b) (a[b].parent = this), (d += a[b].height)
    this.height = d
  }
  function t (a) {
    this.children = a
    for (var b = 0, c = 0, d = 0, e = a.length; e > d; ++d) {
      var f = a[d];
      (b += f.chunkSize()), (c += f.height), (f.parent = this)
    }
    (this.size = b), (this.height = c), (this.parent = null)
  }
  function u (a, b) {
    for (; !a.lines;) {
      for (var c = 0; ; ++c) {
        var d = a.children[c]
        var e = d.chunkSize()
        if (e > b) {
          a = d
          break
        }
        b -= e
      }
    }
    return a.lines[b]
  }
  function v (a) {
    if (a.parent == null) return null
    for (var b = a.parent, c = X(b.lines, a), d = b.parent; d; b = d, d = d.parent) {
      var e = 0
      for (d.children.length; d.children[e] != b; ++e) c += d.children[e].chunkSize()
    }
    return c
  }
  function w (a, b) {
    var c = 0
    a: do {
      for (var d = 0, e = a.children.length; e > d; ++d) {
        var f = a.children[d]
        var g = f.height
        if (g > b) {
          a = f
          continue a
        }
        (b -= g), (c += f.chunkSize())
      }
      return c
    } while (!a.lines)
    for (var d = 0, e = a.lines.length; e > d; ++d) {
      var h = a.lines[d]
      var i = h.height
      if (i > b) break
      b -= i
    }
    return c + d
  }
  function x (a, b) {
    var c = 0
    a: do {
      for (var d = 0, e = a.children.length; e > d; ++d) {
        var f = a.children[d]
        var g = f.chunkSize()
        if (g > b) {
          a = f
          continue a
        }
        (b -= g), (c += f.height)
      }
      return c
    } while (!a.lines)
    for (var d = 0; b > d; ++d) c += a.lines[d].height
    return c
  }
  function y () {
    (this.time = 0), (this.done = []), (this.undone = []), (this.compound = 0), (this.closed = !1)
  }
  function z () {
    D(this)
  }
  function A (a) {
    return a.stop || (a.stop = z), a
  }
  function B (a) {
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
  }
  function C (a) {
    a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0)
  }
  function D (a) {
    B(a), C(a)
  }
  function E (a) {
    return a.target || a.srcElement
  }
  function F (a) {
    var b = a.which
    return b == null && (1 & a.button ? (b = 1) : 2 & a.button ? (b = 3) : 4 & a.button && (b = 2)), $ && a.ctrlKey && b == 1 && (b = 3), b
  }
  function G (a, b) {
    var c = a.override && a.override.hasOwnProperty(b)
    return c ? a.override[b] : a[b]
  }
  function H (a, b, c, d) {
    if (typeof a.addEventListener === 'function') {
      if ((a.addEventListener(b, c, !1), d)) {
        return function () {
          a.removeEventListener(b, c, !1)
        }
      }
    } else {
      var e = function (a) {
        c(a || window.event)
      }
      if ((a.attachEvent('on' + b, e), d)) {
        return function () {
          a.detachEvent('on' + b, e)
        }
      }
    }
  }
  function I () {
    this.id = null
  }
  function J (a, b, c) {
    b == null && ((b = a.search(/[^\s\u00a0]/)), b == -1 && (b = a.length))
    for (var d = 0, e = 0; b > d; ++d) a.charAt(d) == '  ' ? (e += c - (e % c)) : ++e
    return e
  }
  function K (a, b) {
    try {
      var c = a.getBoundingClientRect()
      c = { top: c.top, left: c.left }
    } catch (d) {
      c = { top: 0, left: 0 }
    }
    if (!b) {
      if (window.pageYOffset == null) {
        var e = document.documentElement || document.body.parentNode
        e.scrollTop == null && (e = document.body), (c.top += e.scrollTop), (c.left += e.scrollLeft)
      } else (c.top += window.pageYOffset), (c.left += window.pageXOffset)
    }
    return c
  }
  function L (a) {
    return a.textContent || a.innerText || a.nodeValue || ''
  }
  function M (a) {
    for (; vb.length <= a;) vb.push(N(vb) + ' ')
    return vb[a]
  }
  function N (a) {
    return a[a.length - 1]
  }
  function O (a) {
    Z ? ((a.selectionStart = 0), (a.selectionEnd = a.value.length)) : a.select()
  }
  function P (a, b) {
    return a.line == b.line && a.ch == b.ch
  }
  function Q (a, b) {
    return a.line < b.line || (a.line == b.line && a.ch < b.ch)
  }
  function R (a) {
    return { line: a.line, ch: a.ch }
  }
  function S (a, b, c, d) {
    var e = document.createElement(a)
    if ((c && (e.className = c), d && (e.style.cssText = d), typeof b === 'string')) V(e, b)
    else if (b) for (var f = 0; f < b.length; ++f) e.appendChild(b[f])
    return e
  }
  function T (a) {
    return (a.innerHTML = ''), a
  }
  function U (a, b) {
    T(a).appendChild(b)
  }
  function V (a, b) {
    jb ? ((a.innerHTML = ''), a.appendChild(document.createTextNode(b))) : (a.textContent = b)
  }
  function W (a, b) {
    if (!b) return 0
    if (!a) return b.length
    for (var c = a.length, d = b.length; c >= 0 && d >= 0 && a.charAt(c) == b.charAt(d); --c, --d);
    return d + 1
  }
  function X (a, b) {
    if (a.indexOf) return a.indexOf(b)
    for (var c = 0, d = a.length; d > c; ++c) if (a[c] == b) return c
    return -1
  }
  function Y (a) {
    return /\w/.test(a) || (a > '' && (a.toUpperCase() != a.toLowerCase() || wb.test(a)))
  }
  a.defaults = {
    value: '',
    mode: null,
    theme: 'default',
    indentUnit: 2,
    indentWithTabs: !1,
    smartIndent: !0,
    tabSize: 4,
    keyMap: 'default',
    extraKeys: null,
    electricChars: !0,
    autoClearEmptyLines: !1,
    onKeyEvent: null,
    onDragEvent: null,
    lineWrapping: !1,
    lineNumbers: !1,
    gutter: !1,
    fixedGutter: !1,
    firstLineNumber: 1,
    readOnly: !1,
    dragDrop: !0,
    onChange: null,
    onCursorActivity: null,
    onViewportChange: null,
    onGutterClick: null,
    onUpdate: null,
    onFocus: null,
    onBlur: null,
    onScroll: null,
    matchBrackets: !1,
    cursorBlinkRate: 530,
    workTime: 100,
    workDelay: 200,
    pollInterval: 100,
    undoDepth: 40,
    tabindex: null,
    autofocus: null,
    lineNumberFormatter: function (a) {
      return a
    }
  }
  var Z = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent)
  var $ = Z || /Mac/.test(navigator.platform);
  /Win/.test(navigator.platform)
  var _ = (a.modes = {})
  var ab = (a.mimeModes = {});
  (a.defineMode = function (b, c) {
    if ((a.defaults.mode || b == 'null' || (a.defaults.mode = b), arguments.length > 2)) {
      c.dependencies = []
      for (var d = 2; d < arguments.length; ++d) c.dependencies.push(arguments[d])
    }
    _[b] = c
  }),
  (a.defineMIME = function (a, b) {
    ab[a] = b
  }),
  (a.resolveMode = function (b) {
    if (typeof b === 'string' && ab.hasOwnProperty(b)) b = ab[b]
    else if (typeof b === 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(b)) return a.resolveMode('application/xml')
    return typeof b === 'string' ? { name: b } : b || { name: 'null' }
  }),
  (a.getMode = function (b, c) {
    var c = a.resolveMode(c)
    var d = _[c.name]
    if (!d) return a.getMode(b, 'text/plain')
    var e = d(b, c)
    if (db.hasOwnProperty(c.name)) {
      var f = db[c.name]
      for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g])
    }
    return (e.name = c.name), e
  }),
  (a.listModes = function () {
    var a = []
    for (var b in _) _.propertyIsEnumerable(b) && a.push(b)
    return a
  }),
  (a.listMIMEs = function () {
    var a = []
    for (var b in ab) ab.propertyIsEnumerable(b) && a.push({ mime: b, mode: ab[b] })
    return a
  })
  var bb = (a.extensions = {})
  a.defineExtension = function (a, b) {
    bb[a] = b
  }
  var cb = []
  a.defineInitHook = function (a) {
    cb.push(a)
  }
  var db = (a.modeExtensions = {})
  a.extendMode = function (a, b) {
    var c = db.hasOwnProperty(a) ? db[a] : (db[a] = {})
    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d])
  }
  var eb = (a.commands = {
    selectAll: function (a) {
      a.setSelection({ line: 0, ch: 0 }, { line: a.lineCount() - 1 })
    },
    killLine: function (a) {
      var b = a.getCursor(!0)
      var c = a.getCursor(!1)
      var d = !P(b, c)
      d || a.getLine(b.line).length != b.ch ? a.replaceRange('', b, d ? c : { line: b.line }) : a.replaceRange('', b, { line: b.line + 1, ch: 0 })
    },
    deleteLine: function (a) {
      var b = a.getCursor().line
      a.replaceRange('', { line: b, ch: 0 }, { line: b })
    },
    undo: function (a) {
      a.undo()
    },
    redo: function (a) {
      a.redo()
    },
    goDocStart: function (a) {
      a.setCursor(0, 0, !0)
    },
    goDocEnd: function (a) {
      a.setSelection({ line: a.lineCount() - 1 }, null, !0)
    },
    goLineStart: function (a) {
      a.setCursor(a.getCursor().line, 0, !0)
    },
    goLineStartSmart: function (a) {
      var b = a.getCursor()
      var c = a.getLine(b.line)
      var d = Math.max(0, c.search(/\S/))
      a.setCursor(b.line, b.ch <= d && b.ch ? 0 : d, !0)
    },
    goLineEnd: function (a) {
      a.setSelection({ line: a.getCursor().line }, null, !0)
    },
    goLineUp: function (a) {
      a.moveV(-1, 'line')
    },
    goLineDown: function (a) {
      a.moveV(1, 'line')
    },
    goPageUp: function (a) {
      a.moveV(-1, 'page')
    },
    goPageDown: function (a) {
      a.moveV(1, 'page')
    },
    goCharLeft: function (a) {
      a.moveH(-1, 'char')
    },
    goCharRight: function (a) {
      a.moveH(1, 'char')
    },
    goColumnLeft: function (a) {
      a.moveH(-1, 'column')
    },
    goColumnRight: function (a) {
      a.moveH(1, 'column')
    },
    goWordLeft: function (a) {
      a.moveH(-1, 'word')
    },
    goWordRight: function (a) {
      a.moveH(1, 'word')
    },
    delCharLeft: function (a) {
      a.deleteH(-1, 'char')
    },
    delCharRight: function (a) {
      a.deleteH(1, 'char')
    },
    delWordLeft: function (a) {
      a.deleteH(-1, 'word')
    },
    delWordRight: function (a) {
      a.deleteH(1, 'word')
    },
    indentAuto: function (a) {
      a.indentSelection('smart')
    },
    indentMore: function (a) {
      a.indentSelection('add')
    },
    indentLess: function (a) {
      a.indentSelection('subtract')
    },
    insertTab: function (a) {
      a.replaceSelection('  ', 'end')
    },
    defaultTab: function (a) {
      a.somethingSelected() ? a.indentSelection('add') : a.replaceSelection(' ', 'end')
    },
    transposeChars: function (a) {
      var b = a.getCursor()
      var c = a.getLine(b.line)
      b.ch > 0 && b.ch < c.length - 1 && a.replaceRange(c.charAt(b.ch) + c.charAt(b.ch - 1), { line: b.line, ch: b.ch - 1 }, { line: b.line, ch: b.ch + 1 })
    },
    newlineAndIndent: function (a) {
      a.replaceSelection('\n', 'end'), a.indentLine(a.getCursor().line)
    },
    toggleOverwrite: function (a) {
      a.toggleOverwrite()
    }
  })
  var fb = (a.keyMap = {});
  (fb.basic = {
    Left: 'goCharLeft',
    Right: 'goCharRight',
    Up: 'goLineUp',
    Down: 'goLineDown',
    End: 'goLineEnd',
    Home: 'goLineStartSmart',
    PageUp: 'goPageUp',
    PageDown: 'goPageDown',
    Delete: 'delCharRight',
    Backspace: 'delCharLeft',
    Tab: 'defaultTab',
    'Shift-Tab': 'indentAuto',
    Enter: 'newlineAndIndent',
    Insert: 'toggleOverwrite'
  }),
  (fb.pcDefault = {
    'Ctrl-A': 'selectAll',
    'Ctrl-D': 'deleteLine',
    'Ctrl-Z': 'undo',
    'Shift-Ctrl-Z': 'redo',
    'Ctrl-Y': 'redo',
    'Ctrl-Home': 'goDocStart',
    'Alt-Up': 'goDocStart',
    'Ctrl-End': 'goDocEnd',
    'Ctrl-Down': 'goDocEnd',
    'Ctrl-Left': 'goWordLeft',
    'Ctrl-Right': 'goWordRight',
    'Alt-Left': 'goLineStart',
    'Alt-Right': 'goLineEnd',
    'Ctrl-Backspace': 'delWordLeft',
    'Ctrl-Delete': 'delWordRight',
    'Ctrl-S': 'save',
    'Ctrl-F': 'find',
    'Ctrl-G': 'findNext',
    'Shift-Ctrl-G': 'findPrev',
    'Shift-Ctrl-F': 'replace',
    'Shift-Ctrl-R': 'replaceAll',
    'Ctrl-[': 'indentLess',
    'Ctrl-]': 'indentMore',
    fallthrough: 'basic'
  }),
  (fb.macDefault = {
    'Cmd-A': 'selectAll',
    'Cmd-D': 'deleteLine',
    'Cmd-Z': 'undo',
    'Shift-Cmd-Z': 'redo',
    'Cmd-Y': 'redo',
    'Cmd-Up': 'goDocStart',
    'Cmd-End': 'goDocEnd',
    'Cmd-Down': 'goDocEnd',
    'Alt-Left': 'goWordLeft',
    'Alt-Right': 'goWordRight',
    'Cmd-Left': 'goLineStart',
    'Cmd-Right': 'goLineEnd',
    'Alt-Backspace': 'delWordLeft',
    'Ctrl-Alt-Backspace': 'delWordRight',
    'Alt-Delete': 'delWordRight',
    'Cmd-S': 'save',
    'Cmd-F': 'find',
    'Cmd-G': 'findNext',
    'Shift-Cmd-G': 'findPrev',
    'Cmd-Alt-F': 'replace',
    'Shift-Cmd-Alt-F': 'replaceAll',
    'Cmd-[': 'indentLess',
    'Cmd-]': 'indentMore',
    fallthrough: ['basic', 'emacsy']
  }),
  (fb.default = $ ? fb.macDefault : fb.pcDefault),
  (fb.emacsy = {
    'Ctrl-F': 'goCharRight',
    'Ctrl-B': 'goCharLeft',
    'Ctrl-P': 'goLineUp',
    'Ctrl-N': 'goLineDown',
    'Alt-F': 'goWordRight',
    'Alt-B': 'goWordLeft',
    'Ctrl-A': 'goLineStart',
    'Ctrl-E': 'goLineEnd',
    'Ctrl-V': 'goPageDown',
    'Shift-Ctrl-V': 'goPageUp',
    'Ctrl-D': 'delCharRight',
    'Ctrl-H': 'delCharLeft',
    'Alt-D': 'delWordRight',
    'Alt-Backspace': 'delWordLeft',
    'Ctrl-K': 'killLine',
    'Ctrl-T': 'transposeChars'
  }),
  (a.isModifierKey = d),
  (a.fromTextArea = function (b, c) {
    function d () {
      b.value = i.getValue()
    }
    if ((c || (c = {}), (c.value = b.value), !c.tabindex && b.tabindex && (c.tabindex = b.tabindex), c.autofocus == null)) {
      var e = document.body
      try {
        e = document.activeElement
      } catch (f) {}
      c.autofocus = e == b || (b.getAttribute('autofocus') != null && e == document.body)
    }
    if (b.form) {
      var g = H(b.form, 'submit', d, !0)
      var h = b.form.submit
      b.form.submit = function j () {
        d(), (b.form.submit = h), b.form.submit(), (b.form.submit = j)
      }
    }
    b.style.display = 'none'
    var i = a(function (a) {
      b.parentNode.insertBefore(a, b.nextSibling)
    }, c)
    return (
      (i.save = d),
      (i.getTextArea = function () {
        return b
      }),
      (i.toTextArea = function () {
        d(), b.parentNode.removeChild(i.getWrapperElement()), (b.style.display = ''), b.form && (g(), typeof b.form.submit === 'function' && (b.form.submit = h))
      }),
      i
    )
  })
  var gb = /gecko\/\d{7}/i.test(navigator.userAgent)
  var hb = /MSIE \d/.test(navigator.userAgent)
  var ib = /MSIE [1-7]\b/.test(navigator.userAgent)
  var jb = /MSIE [1-8]\b/.test(navigator.userAgent)
  var kb = hb && document.documentMode == 5
  var lb = /WebKit\//.test(navigator.userAgent)
  var mb = /Chrome\//.test(navigator.userAgent)
  var nb = /Opera\//.test(navigator.userAgent)
  var ob = /Apple Computer/.test(navigator.vendor)
  var pb = /KHTML\//.test(navigator.userAgent)
  var qb = /Mac OS X 10\D([7-9]|\d\d)\D/.test(navigator.userAgent);
  (a.copyState = e),
  (a.startState = f),
  (a.innerMode = function (a, b) {
    for (; a.innerMode;) {
      var c = a.innerMode(b);
      (b = c.state), (a = c.mode)
    }
    return c || { mode: a, state: b }
  }),
  (g.prototype = {
    eol: function () {
      return this.pos >= this.string.length
    },
    sol: function () {
      return this.pos == 0
    },
    peek: function () {
      return this.string.charAt(this.pos) || void 0
    },
    next: function () {
      return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
    },
    eat: function (a) {
      var b = this.string.charAt(this.pos)
      if (typeof a === 'string') var c = b == a
      else var c = b && (a.test ? a.test(b) : a(b))
      return c ? (++this.pos, b) : void 0
    },
    eatWhile: function (a) {
      for (var b = this.pos; this.eat(a););
      return this.pos > b
    },
    eatSpace: function () {
      for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos
      return this.pos > a
    },
    skipToEnd: function () {
      this.pos = this.string.length
    },
    skipTo: function (a) {
      var b = this.string.indexOf(a, this.pos)
      return b > -1 ? ((this.pos = b), !0) : void 0
    },
    backUp: function (a) {
      this.pos -= a
    },
    column: function () {
      return J(this.string, this.start, this.tabSize)
    },
    indentation: function () {
      return J(this.string, null, this.tabSize)
    },
    match: function (a, b, c) {
      if (typeof a !== 'string') {
        var d = this.string.slice(this.pos).match(a)
        return d && d.index > 0 ? null : (d && b !== !1 && (this.pos += d[0].length), d)
      }
      var e = function (a) {
        return c ? a.toLowerCase() : a
      }
      return e(this.string).indexOf(e(a), this.pos) == this.pos ? (b !== !1 && (this.pos += a.length), !0) : void 0
    },
    current: function () {
      return this.string.slice(this.start, this.pos)
    }
  }),
  (a.StringStream = g)
  var rb = ' '
  gb || (hb && !ib) ? (rb = '​') : nb && (rb = ''),
  (r.prototype = {
    update: function (a, b) {
      (this.text = a), (this.stateAfter = this.styles = null), p(this), q(this, b)
    },
    highlight: function (a, b, c) {
      var d = new g(this.text, c)
      var e = this.styles || (this.styles = [])
      var f = (e.length = 0)
      for (this.text == '' && a.blankLine && a.blankLine(b); !d.eol();) {
        var h = a.token(d, b)
        var i = d.current()
        if (((d.start = d.pos), f && e[f - 1] == h ? (e[f - 2] += i) : i && ((e[f++] = i), (e[f++] = h)), d.pos > 5e3)) {
          (e[f++] = this.text.slice(d.pos)), (e[f++] = null)
          break
        }
      }
    },
    process: function (a, b, c) {
      var d = new g(this.text, c)
      for (this.text == '' && a.blankLine && a.blankLine(b); !d.eol() && d.pos <= 5e3;) a.token(d, b), (d.start = d.pos)
    },
    getTokenAt: function (a, b, c, d) {
      for (var e = this.text, f = new g(e, c); f.pos < d && !f.eol();) {
        f.start = f.pos
        var h = a.token(f, b)
      }
      return { start: f.start, end: f.pos, string: f.current(), className: h || null, state: b }
    },
    indentation: function (a) {
      return J(this.text, null, a)
    },
    getContent: function (a, b, c) {
      function d (b, c, d) {
        if (c) {
          if ((f && hb && c.charAt(0) == ' ' && (c = ' ' + c.slice(1)), (f = !1), h.test(c))) {
            for (var e = document.createDocumentFragment(), i = 0; ;) {
              h.lastIndex = i
              var j = h.exec(c)
              var k = j ? j.index - i : c.length - i
              if ((k && (e.appendChild(document.createTextNode(c.slice(i, i + k))), (g += k)), !j)) break
              if (((i += k + 1), j[0] == '  ')) {
                var l = a - (g % a)
                e.appendChild(S('span', M(l), 'cm-tab')), (g += l)
              } else {
                var m = S('span', '•', 'cm-invalidchar');
                (m.title = '\\u' + j[0].charCodeAt(0).toString(16)), e.appendChild(m), (g += 1)
              }
            }
          } else {
            g += c.length
            var e = document.createTextNode(c)
          }
          d ? b.appendChild(S('span', [e], d)) : b.appendChild(e)
        }
      }
      function e (a) {
        return a ? 'cm-' + a.replace(/ +/g, ' cm-') : null
      }
      var f = !0
      var g = 0
      var h = /[\t\u0000-\u0019\u200b\u2028\u2029\uFEFF]/g
      var i = S('pre')
      var j = d
      if (b != null) {
        var k = 0
        var l = (i.anchor = S('span'))
        j = function (a, e, f) {
          var g = e.length
          if (b >= k && k + g > b) {
            var h = b - k
            if (h && (d(a, e.slice(0, h), f), c)) {
              var i = e.slice(h - 1, h + 1)
              ub.test(i) ? a.appendChild(S('wbr')) : !ib && /\w\w/.test(i) && a.appendChild(document.createTextNode('‍'))
            }
            a.appendChild(l), d(l, nb ? e.slice(h, h + 1) : e.slice(h), f), nb && d(a, e.slice(h + 1), f), b--, (k += g)
          } else (k += g), d(a, e, f), k == b && k == p ? (V(l, rb), a.appendChild(l)) : k > b + 10 && /\s/.test(e) && (j = function () {})
        }
      }
      var m = this.styles
      var n = this.text
      var o = this.markedSpans
      var p = n.length
      if (n || b != null) {
        if (o && o.length) {
          o.sort(function (a, b) {
            return a.from - b.from
          })
          for (
            var q,
              r = 0,
              s = 0,
              t = '',
              u = o[0].from || 0,
              v = [],
              w = 0,
              x = function () {
                for (var a; w < o.length && ((a = o[w]).from == r || a.from == null);) a.marker.type == 'range' && v.push(a), ++w
                u = w < o.length ? o[w].from : 1 / 0
                for (var b = 0; b < v.length; ++b) {
                  var c = v[b].to
                  c == null && (c = 1 / 0), c == r ? v.splice(b--, 1) : (u = Math.min(c, u))
                }
              };
            p > r;

          ) {
            u == r && x()
            for (var y = Math.min(p, u); ;) {
              if (t) {
                for (var z = r + t.length, A = q, B = 0; B < v.length; ++B) {
                  var C = v[B];
                  (A = (A ? A + ' ' : '') + C.marker.style), C.marker.endStyle && C.to === Math.min(z, y) && (A += ' ' + C.marker.endStyle), C.marker.startStyle && C.from === r && (A += ' ' + C.marker.startStyle)
                }
                if ((j(i, z > y ? t.slice(0, y - r) : t, A), z >= y)) {
                  (t = t.slice(y - r)), (r = y)
                  break
                }
                r = z
              }
              (t = m[s++]), (q = e(m[s++]))
            }
          }
        } else {
          for (var s = 0, D = 0; p > D; s += 2) {
            var E = m[s]
            var q = m[s + 1]
            var F = E.length
            D + F > p && (E = E.slice(0, p - D)), (D += F), j(i, E, e(q))
          }
        }
      } else j(i, ' ')
      return i
    },
    cleanUp: function () {
      (this.parent = null), p(this)
    }
  }),
  (s.prototype = {
    chunkSize: function () {
      return this.lines.length
    },
    remove: function (a, b, c) {
      for (var d = a, e = a + b; e > d; ++d) {
        var f = this.lines[d]
        if (((this.height -= f.height), f.cleanUp(), f.handlers)) for (var g = 0; g < f.handlers.length; ++g) c.push(f.handlers[g])
      }
      this.lines.splice(a, b)
    },
    collapse: function (a) {
      a.splice.apply(a, [a.length, 0].concat(this.lines))
    },
    insertHeight: function (a, b, c) {
      (this.height += c), (this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a)))
      for (var d = 0, e = b.length; e > d; ++d) b[d].parent = this
    },
    iterN: function (a, b, c) {
      for (var d = a + b; d > a; ++a) if (c(this.lines[a])) return !0
    }
  }),
  (t.prototype = {
    chunkSize: function () {
      return this.size
    },
    remove: function (a, b, c) {
      this.size -= b
      for (var d = 0; d < this.children.length; ++d) {
        var e = this.children[d]
        var f = e.chunkSize()
        if (f > a) {
          var g = Math.min(b, f - a)
          var h = e.height
          if ((e.remove(a, g, c), (this.height -= h - e.height), f == g && (this.children.splice(d--, 1), (e.parent = null)), (b -= g) == 0)) break
          a = 0
        } else a -= f
      }
      if (this.size - b < 25) {
        var i = []
        this.collapse(i), (this.children = [new s(i)]), (this.children[0].parent = this)
      }
    },
    collapse: function (a) {
      for (var b = 0, c = this.children.length; c > b; ++b) this.children[b].collapse(a)
    },
    insert: function (a, b) {
      for (var c = 0, d = 0, e = b.length; e > d; ++d) c += b[d].height
      this.insertHeight(a, b, c)
    },
    insertHeight: function (a, b, c) {
      (this.size += b.length), (this.height += c)
      for (var d = 0, e = this.children.length; e > d; ++d) {
        var f = this.children[d]
        var g = f.chunkSize()
        if (g >= a) {
          if ((f.insertHeight(a, b, c), f.lines && f.lines.length > 50)) {
            for (; f.lines.length > 50;) {
              var h = f.lines.splice(f.lines.length - 25, 25)
              var i = new s(h);
              (f.height -= i.height), this.children.splice(d + 1, 0, i), (i.parent = this)
            }
            this.maybeSpill()
          }
          break
        }
        a -= g
      }
    },
    maybeSpill: function () {
      if (!(this.children.length <= 10)) {
        var a = this
        do {
          var b = a.children.splice(a.children.length - 5, 5)
          var c = new t(b)
          if (a.parent) {
            (a.size -= c.size), (a.height -= c.height)
            var d = X(a.parent.children, a)
            a.parent.children.splice(d + 1, 0, c)
          } else {
            var e = new t(a.children);
            (e.parent = a), (a.children = [e, c]), (a = e)
          }
          c.parent = a.parent
        } while (a.children.length > 10)
        a.parent.maybeSpill()
      }
    },
    iter: function (a, b, c) {
      this.iterN(a, b - a, c)
    },
    iterN: function (a, b, c) {
      for (var d = 0, e = this.children.length; e > d; ++d) {
        var f = this.children[d]
        var g = f.chunkSize()
        if (g > a) {
          var h = Math.min(b, g - a)
          if (f.iterN(a, h, c)) return !0
          if ((b -= h) == 0) break
          a = 0
        } else a -= g
      }
    }
  }),
  (y.prototype = {
    addChange: function (a, b, c) {
      this.undone.length = 0
      var d = +new Date()
      var e = N(this.done)
      var f = e && N(e)
      var g = d - this.time
      if (e && !this.closed && this.compound) e.push({ start: a, added: b, old: c })
      else if (g > 400 || !f || this.closed || f.start > a + c.length || f.start + f.added < a) this.done.push([{ start: a, added: b, old: c }]), (this.closed = !1)
      else {
        for (var h = Math.max(0, f.start - a), i = Math.max(0, a + c.length - (f.start + f.added)), j = h; j > 0; --j) f.old.unshift(c[j - 1])
        for (var j = i; j > 0; --j) f.old.push(c[c.length - j])
        h && (f.start = a), (f.added += b - (c.length - h - i))
      }
      this.time = d
    },
    startCompound: function () {
      this.compound++ || (this.closed = !0)
    },
    endCompound: function () {
      --this.compound || (this.closed = !0)
    }
  }),
  (a.e_stop = D),
  (a.e_preventDefault = B),
  (a.e_stopPropagation = C),
  (a.connect = H),
  (I.prototype = {
    set: function (a, b) {
      clearTimeout(this.id), (this.id = setTimeout(b, a))
    }
  })
  var sb = (a.Pass = {
    toString: function () {
      return 'CodeMirror.Pass'
    }
  })
  var tb = (function () {
    if (jb) return !1
    var a = S('div')
    return 'draggable' in a || 'dragDrop' in a
  })()
  !(function () {
    var a = S('textarea')
    return (a.value = 'foo\nbar'), a.value.indexOf('\r') > -1 ? '\r\n' : '\n'
  })()
  var ub = /^$/
  gb ? (ub = /$'/) : ob ? (ub = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/) : mb && (ub = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/)
  var vb = ['']
  var wb = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc]/
  var xb =
      '\n\nb'.split(/\n/).length != 3
        ? function (a) {
          for (var b = 0, c = [], d = a.length; d >= b;) {
            var e = a.indexOf('\n', b)
            e == -1 && (e = a.length)
            var f = a.slice(b, a.charAt(e - 1) == '\r' ? e - 1 : e)
            var g = f.indexOf('\r')
            g != -1 ? (c.push(f.slice(0, g)), (b += g + 1)) : (c.push(f), (b = e + 1))
          }
          return c
        }
        : function (a) {
          return a.split(/\r\n?|\n/)
        }
  a.splitLines = xb
  var yb = window.getSelection
    ? function (a) {
      try {
        return a.selectionStart != a.selectionEnd
      } catch (b) {
        return !1
      }
    }
    : function (a) {
      try {
        var b = a.ownerDocument.selection.createRange()
      } catch (c) {}
      return b && b.parentElement() == a ? b.compareEndPoints('StartToEnd', b) != 0 : !1
    }
  a.defineMode('null', function () {
    return {
      token: function (a) {
        a.skipToEnd()
      }
    }
  }),
  a.defineMIME('text/plain', 'null')
  var zb = {
    3: 'Enter',
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Esc',
    32: 'Space',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    44: 'PrintScrn',
    45: 'Insert',
    46: 'Delete',
    59: ';',
    91: 'Mod',
    92: 'Mod',
    93: 'Mod',
    109: '-',
    107: '=',
    127: 'Delete',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'",
    63276: 'PageUp',
    63277: 'PageDown',
    63275: 'End',
    63273: 'Home',
    63234: 'Left',
    63232: 'Up',
    63235: 'Right',
    63233: 'Down',
    63302: 'Insert',
    63272: 'Delete'
  }
  return (
    (a.keyNames = zb),
    (function () {
      for (var a = 0; a < 10; a++) zb[a + 48] = String(a)
      for (var a = 65; a <= 90; a++) zb[a] = String.fromCharCode(a)
      for (var a = 1; a <= 12; a++) zb[a + 111] = zb[a + 63235] = 'F' + a
    })(),
    (a.version = '2.36'),
    a
  )
})()
CodeMirror.defineMode(
  'markdown',
  function (a, b) {
    function c (a, b, c) {
      return (b.f = b.inline = c), c(a, b)
    }
    function d (a, b, c) {
      return (b.f = b.block = c), c(a, b)
    }
    function e (a) {
      return (a.linkTitle = !1), (a.em = !1), (a.strong = !1), (a.quote = !1), q || a.f != g || ((a.f = k), (a.block = f)), null
    }
    function f (a, e) {
      if ((e.list !== !1 && e.indentationDiff >= 0 ? (e.indentationDiff < 4 && (e.indentation -= e.indentationDiff), (e.list = null)) : (e.list = !1), e.indentationDiff >= 4)) return (e.indentation -= 4), a.skipToEnd(), y
      if (a.eatSpace()) return null
      if (a.peek() === '#' || (v && a.match(N))) e.header = !0
      else if (a.eat('>')) e.indentation++, (e.quote = !0)
      else {
        if (a.peek() === '[') return c(a, e, m)
        if (a.match(K, !0)) return B
        if (a.match(L, !0) || a.match(M, !0)) (e.indentation += 4), (e.list = !0)
        else if (b.fencedCodeBlocks && a.match(/^```([\w+#]*)/, !0)) return (e.localMode = t(RegExp.$1)), e.localMode && (e.localState = e.localMode.startState()), d(a, e, h), y
      }
      return c(a, e, e.inline)
    }
    function g (a, b) {
      var c = r.token(a, b.htmlState)
      return q && c === 'tag' && b.htmlState.type !== 'openTag' && !b.htmlState.context && ((b.f = k), (b.block = f)), b.md_inside && a.current().indexOf('>') != -1 && ((b.f = k), (b.block = f), (b.htmlState.context = void 0)), c
    }
    function h (a, b) {
      return a.sol() && a.match(/^```/, !0) ? ((b.localMode = b.localState = null), (b.f = k), (b.block = f), y) : b.localMode ? b.localMode.token(a, b.localState) : (a.skipToEnd(), y)
    }
    function i (a) {
      var b = []
      return a.strong ? b.push(a.em ? J : I) : a.em && b.push(H), a.linkText && b.push(F), a.code && b.push(y), a.header && b.push(x), a.quote && b.push(z), a.list !== !1 && b.push(A), b.length ? b.join(' ') : null
    }
    function j (a, b) {
      return a.match(O, !0) ? i(b) : void 0
    }
    function k (a, e) {
      var f = e.text(a, e)
      if (typeof f !== 'undefined') return f
      if (e.list) return (e.list = null), A
      var h = a.next()
      if (h === '\\') return a.next(), i(e)
      if (e.linkTitle) {
        e.linkTitle = !1
        var j = h
        h === '(' && (j = ')'), (j = (j + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'))
        var k = '^\\s*(?:[^' + j + '\\\\]+|\\\\\\\\|\\\\.)' + j
        if (a.match(new RegExp(k), !0)) return G
      }
      if (h === '`') {
        var m = i(e)
        var n = a.pos
        a.eatWhile('`')
        var o = 1 + a.pos - n
        return e.code ? (o === u ? ((e.code = !1), m) : i(e)) : ((u = o), (e.code = !0), i(e))
      }
      if (e.code) return i(e)
      if (h === '!' && a.match(/\[.*\] ?(?:\(|\[)/, !1)) return a.match(/\[.*\]/), (e.inline = e.f = l), C
      if (h === '[' && a.match(/.*\](\(| ?\[)/, !1)) return (e.linkText = !0), i(e)
      if (h === ']' && e.linkText) {
        var q = i(e)
        return (e.linkText = !1), (e.inline = e.f = l), q
      }
      if (h === '<' && a.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !0)) return c(a, e, p(D, '>'))
      if (h === '<' && a.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !0)) return c(a, e, p(E, '>'))
      if (h === '<' && a.match(/^\w/, !1)) {
        if (a.string.indexOf('>') != -1) {
          var r = a.string.substring(1, a.string.indexOf('>'));
          /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(r) && (e.md_inside = !0)
        }
        return a.backUp(1), d(a, e, g)
      }
      if (h === '<' && a.match(/^\/\w*?>/)) return (e.md_inside = !1), 'tag'
      var s = !1
      if (!b.underscoresBreakWords && h === '_' && a.peek() !== '_' && a.match(/(\w)/, !1)) {
        var t = a.pos - 2
        if (t >= 0) {
          var v = a.string.charAt(t)
          v !== '_' && v.match(/(\w)/, !1) && (s = !0)
        }
      }
      var m = i(e)
      if (h === '*' || (h === '_' && !s)) {
        if (e.strong === h && a.eat(h)) return (e.strong = !1), m
        if (!e.strong && a.eat(h)) return (e.strong = h), i(e)
        if (e.em === h) return (e.em = !1), m
        if (!e.em) return (e.em = h), i(e)
      } else if (h === ' ' && (a.eat('*') || a.eat('_'))) {
        if (a.peek() === ' ') return i(e)
        a.backUp(1)
      }
      return i(e)
    }
    function l (a, b) {
      if (a.eatSpace()) return null
      var d = a.next()
      return d === '(' || d === '[' ? c(a, b, p(G, d === '(' ? ')' : ']')) : 'error'
    }
    function m (a, b) {
      return a.match(/^[^\]]*\]:/, !0) ? ((b.f = n), F) : c(a, b, k)
    }
    function n (a, b) {
      return a.eatSpace() ? null : (a.match(/^[^\s]+/, !0), void 0 === a.peek() ? (b.linkTitle = !0) : a.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), (b.f = b.inline = k), G)
    }
    function o (a) {
      return P[a] || ((a = (a + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')), (P[a] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + a + ')'))), P[a]
    }
    function p (a, b, c) {
      return (
        (c = c || k),
        function (d, e) {
          return d.match(o(b)), (e.inline = e.f = c), a
        }
      )
    }
    var q = CodeMirror.mimeModes.hasOwnProperty('text/html')
    var r = CodeMirror.getMode(a, q ? 'text/html' : 'text/plain')
    var s = { html: 'htmlmixed', js: 'javascript', json: 'application/json', c: 'text/x-csrc', 'c++': 'text/x-c++src', java: 'text/x-java', csharp: 'text/x-csharp', 'c#': 'text/x-csharp' }
    var t = (function () {
      var b
      var c
      var d = {}
      var e = {}
      var f = CodeMirror.listModes()
      for (b = 0; b < f.length; b++) d[f[b]] = f[b]
      var g = CodeMirror.listMIMEs()
      for (b = 0; b < g.length; b++) (c = g[b].mime), (e[c] = g[b].mime)
      for (var h in s) (s[h] in d || s[h] in e) && (d[h] = s[h])
      return function (b) {
        return d[b] ? CodeMirror.getMode(a, d[b]) : null
      }
    })()
    void 0 === b.underscoresBreakWords && (b.underscoresBreakWords = !0), void 0 === b.fencedCodeBlocks && (b.fencedCodeBlocks = !1)
    var u = 0
    var v = !1
    var w = !1
    var x = 'header'
    var y = 'comment'
    var z = 'quote'
    var A = 'string'
    var B = 'hr'
    var C = 'tag'
    var D = 'link'
    var E = 'link'
    var F = 'link'
    var G = 'string'
    var H = 'em'
    var I = 'strong'
    var J = 'emstrong'
    var K = /^([*\-=_])(?:\s*\1){2,}\s*$/
    var L = /^[*\-+]\s+/
    var M = /^[0-9]+\.\s+/
    var N = /^(?:\={1,}|-{1,})$/
    var O = /^[^!\[\]*_\\<>` "'(]+/
    var P = []
    return {
      startState: function () {
        return (v = !1), (w = !1), { f: f, block: f, htmlState: CodeMirror.startState(r), indentation: 0, inline: k, text: j, linkText: !1, linkTitle: !1, em: !1, strong: !1, header: !1, list: !1, quote: !1 }
      },
      copyState: function (a) {
        return {
          f: a.f,
          block: a.block,
          htmlState: CodeMirror.copyState(r, a.htmlState),
          indentation: a.indentation,
          localMode: a.localMode,
          localState: a.localMode ? CodeMirror.copyState(a.localMode, a.localState) : null,
          inline: a.inline,
          text: a.text,
          linkTitle: a.linkTitle,
          em: a.em,
          strong: a.strong,
          header: a.header,
          list: a.list,
          quote: a.quote,
          md_inside: a.md_inside
        }
      },
      token: function (a, b) {
        if (a.sol()) {
          if (a.match(/^\s*$/, !0)) return (v = !1), e(b)
          w && ((v = !0), (w = !1)), (w = !0), (b.header = !1), (b.code = !1), (b.f = b.block)
          var c = a.match(/^\s*/, !0)[0].replace(/\t/g, '    ').length
          var d = 4 * Math.floor((c - b.indentation) / 4)
          if ((d > 4 && (d = 4), (c = b.indentation + d), (b.indentationDiff = c - b.indentation), (b.indentation = c), c > 0)) return null
        }
        return b.f(a, b)
      },
      blankLine: e,
      getType: i
    }
  },
  'xml'
),
CodeMirror.defineMIME('text/x-markdown', 'markdown')
window.VarnamIME = (function () {
  'use strict'
  function a (a) {
    function b () {
      var a = '<div id="' + q + '" class="CodeMirror-completions" style="display: none;"><select multiple="false"></select></div>'
      $('body').append(a)
    }
    function c () {
      $('body').on('dblclick', t, function () {
        d(f()), (v = !0)
      }),
      $(s).keydown(function (a) {
        if (a.keyCode === x.ESCAPE) m(), z.focus()
        else if (h(a.keyCode)) {
          var b = $(this).find(':selected').text()
          if (void 0 !== b && b !== '' && (d(b), a.keyCode == x.ENTER)) return a.preventDefault(), a.stopPropagation(), (v = !0), !0
        }
      })
    }
    function d (a) {
      var b = o(z)
      var c = b.start
      z.charCoords(c)
      var d = b.word
      d !== '' && (z.replaceRange(a, c, b.end), z.focus()), m(), e(a)
    }
    function e (a) {
      void 0 !== B && B !== 'en' && $.post('learn', '{"text":"' + a + '","lang":"' + B + '"}')
    }
    function f () {
      return $(s).find(':selected').text()
    }
    function g () {
      var a = f()
      void 0 !== a && a !== '' && d(a)
    }
    function h (a) {
      var b = $.inArray(a, y) == -1 ? !1 : !0
      return b ? !0 : !1
    }
    function i (a, b) {
      var c = $.event.fix(b)
      if (c.type == 'keydown') {
        if (((v = !1), c.keyCode == x.ESCAPE)) return m(), (E = !0), void 0
        if (u) {
          if (c.keyCode === x.DOWN_ARROW) return $(s).focus(), c.preventDefault(), c.stopPropagation(), !0
          if (h(c.keyCode) && (g(), c.keyCode === x.ENTER)) return c.preventDefault(), c.stopPropagation(), (v = !0), !0
        } else if (c.keyCode == x.SPACE) {
          if (((v = !0), !E)) {
            var d = o(z)
            D[d.word] = d
          }
          E = !1
        } else h(c.keyCode) && (v = !0)
      }
    }
    function j () {
      var a = o(z)
      var b = z.charCoords(a.start)
      a.word !== '' ? k(b.x, b.y, a.word) : m()
    }
    function k (a, b, c) {
      if (B !== 'en') {
        var d = !1
        m(),
        $.ajax({
          url: 'tl/' + B + '/' + c,
          success: function (c) {
            if ((C !== null && C(!1), void 0 !== D[c.input])) {
              var d = D[c.input]
              var e = z.getRange(d.start, d.end)
              e == c.input && z.replaceRange(c.result[0], d.start, d.end), delete D[c.input]
            } else if (o(z).word == c.input) {
              var f = ''
              var g = 0
              $.each(c.result, function (a, b) {
                (f += a === 0 ? '<option selected>' + b + '</option>' : '<option>' + b + '</option>'), g < b.length && (g = b.length)
              }),
              (f += '<option data-english="true">' + c.input + '</option>'),
              $(s)
                .html(f)
                .css('height', c.result.length + 5 + 'em')
                .css('width', g + 2 + 'em'),
              l(a, b),
              (u = !0)
            }
          },
          error: function () {
            console.log('error');
            (d = !0),
            window.setTimeout(function () {
              d && C !== null && C(!0)
            }, 2e3)
          }
        })
      }
    }
    function l (a, b) {
      var c = $('.CodeMirror')
      var d = $(r)
        .css('display', 'block')
        .css('left', a + 'px')
        .css('top', b + 25 + 'px')
      var e = d.height()
      var f = d.width()
      b + e > c.position().top + c.innerHeight() && d.css('top', b - e + 'px'), a + f > c.position().left + c.innerWidth() && d.css('left', a - f + 'px')
    }
    function m () {
      $(r).css('display', 'none'), (u = !1)
    }
    function n (a) {
      return a === null ||
        a === '' ||
        a == ' ' ||
        a == '\n' ||
        a == '.' ||
        a == ' ' ||
        a == '\r' ||
        a == '"' ||
        a == "'" ||
        a == '?' ||
        a == '!' ||
        a == ',' ||
        a == '(' ||
        a == ')' ||
        a == '' ||
        a == '\f' ||
        a == '' ||
        a == '\u2028' ||
        a == '\u2029' ||
        a == '\r' ||
        a == '\n' ||
        a == ';'
        ? !0
        : !1
    }
    function o (a) {
      var b = a.getCursor()
      var c = 0
      var d = 0
      var e = a.getValue().length + 1
      var f = ''
      var g = b.ch
      for (c = b; g && ((f = a.getRange({ line: b.line, ch: g - 1 }, { line: b.line, ch: g })), !n(f));) --g, (c = { line: b.line, ch: g })
      for (d = b, g = b.ch; e > g && ((f = a.getRange({ line: b.line, ch: g }, { line: b.line, ch: g + 1 })), !n(f));) ++g, (d = { line: b.line, ch: g })
      return { start: c, end: d, word: a.getRange(c, d) }
    }
    function p (a, b, c, d, e) {
      window.clearTimeout(w),
      v ||
          ((w = window.setTimeout(function () {
            j()
          }, 10)),
          A !== null && A(a, b, c, d, e))
    }
    var q = 'popup'
    var r = '#' + q
    var s = r + ' select'
    var t = r + s + ' option'
    var u = !1
    var v = !1
    var w = null
    var x = { ESCAPE: 27, ENTER: 13, TAB: 9, SPACE: 32, PERIOD: 190, DOWN_ARROW: 40, QUESTION: 191, EXCLAMATION: 49, COMMA: 188, LEFT_BRACKET: 57, RIGHT_BRACKET: 48, SEMICOLON: 59 }
    var y = [x.ENTER, x.TAB, x.SPACE, x.PERIOD, x.QUESTION, x.EXCLAMATION, x.COMMA, x.LEFT_BRACKET, x.RIGHT_BRACKET, x.SEMICOLON]
    var z = null
    var A = null
    var B = 'en'
    var C = null;
    (z = CodeMirror.fromTextArea(a.textArea, {
      mode: a.mode,
      lineWrapping: !0,
      onChange: p,
      theme: 'ambiance',
      extraKeys: {
        'Ctrl-Space': function () {
          j()
        }
      },
      onKeyEvent: i
    })),
    (window.myCodeMirror = z),
    (A = a.textChangedCallback || null),
    (C = a.errorCallback || null),
    b(),
    c()
    var D = {}
    var E = !1
    var F = {
      setLanguage: function (a) {
        B = a
      },
      getValue: function () {
        return z.getValue()
      },
      dispose: function () {}
    }
    return F.setLanguage(a.language), F
  }
  return a
})()
function resizeFrame () {
  var a = $(window).innerHeight()
  var b = $('.navbar').height()
  var c = a - b - 30
  $('#preview').css('height', c), $('.CodeMirror').css('height', c), $('.CodeMirror-scroll').css('height', c)
}
function selectLastUsedLanguage () {
  if (typeof Storage !== 'undefined' && localStorage.language) {
    var a = JSON.parse(localStorage.language)
    $('.dropdown-toggle').html(a.name + " <span class='caret'></span>"), $('#selected_lang').data('lang', a.code)
  }
}
function hookUnloadEvent () {
  window.onbeforeunload = function (a) {
    return (a = a || window.event), $.trim(myCodeMirror.getValue()) !== '' ? (a && (a.returnValue = 'You will loose the text. Are you sure?'), 'You will loose the text. Are you sure?') : void 0
  }
}
function updatePreview (a) {
  if ($('#preview_div').is(':visible') || a) {
    var b = document.getElementById('preview')
    b.contentWindow.document.body.innerHTML = converter.makeHtml(varnam.getValue())
  }
}
function toggleErrorMessageVisibility (a) {
  a ? $('#network-error').fadeIn('slow') : $('#network-error').fadeOut('slow')
}
var converter = new Showdown.converter()
$(document).ready(function () {
  hookUnloadEvent(), selectLastUsedLanguage()
  var a = {
    textArea: document.getElementById('code'),
    mode: 'markdown',
    lineNumbers: !0,
    textChangedCallback: function () {
      updatePreview()
    },
    language: $('#selected_lang').data('lang'),
    errorCallback: toggleErrorMessageVisibility
  };
  (varnam = VarnamIME(a)), resizeFrame(), $('#preview_div').hide()
}),
jQuery.event.add(window, 'resize', resizeFrame),
$('button').click(function () {
  var a = $(this).data('preview')
  switch (a) {
    case 'editor':
      $('#preview_div').hide(), $('#editor_div').show()
      break
    case 'both':
      $('#preview_div').show(), $('#editor_div').show(), $('#preview_div').css('margin-left', $('#reserve').css('margin-left')), $('#preview_div').removeClass('span12').addClass('span6'), updatePreview()
      break
    case 'preview':
      $('#editor_div').hide(), $('#preview_div').show(), $('#preview_div').css('margin-left', '0'), updatePreview()
  }
}),
$('#printBtn').click(function () {
  updatePreview(!0), window.print()
}),
$('.lang').live('click', function () {
  $('.dropdown-toggle').html($(this).text() + " <span class='caret'></span>"),
  $('#selected_lang').data('lang', $(this).data('lang')),
  varnam.setLanguage($(this).data('lang')),
  typeof Storage !== 'undefined' && (localStorage.language = JSON.stringify({ name: $(this).text(), code: $(this).data('lang') }))
}),
$('#network-error-close').click(function () {
  toggleErrorMessageVisibility(!1)
})
