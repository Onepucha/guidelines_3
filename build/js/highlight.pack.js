"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
  Highlight.js 10.6.0 (eb122d3b)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs = function () {
  "use strict";

  function e(t) {
    return t instanceof Map ? t.clear = t["delete"] = t.set = function () {
      throw Error("map is read-only");
    } : t instanceof Set && (t.add = t.clear = t["delete"] = function () {
      throw Error("set is read-only");
    }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function (n) {
      var s = t[n];
      "object" != _typeof(s) || Object.isFrozen(s) || e(s);
    }), t;
  }

  var t = e,
      n = e;
  t["default"] = n;

  var s = /*#__PURE__*/function () {
    function s(e) {
      _classCallCheck(this, s);

      void 0 === e.data && (e.data = {}), this.data = e.data;
    }

    _createClass(s, [{
      key: "ignoreMatch",
      value: function ignoreMatch() {
        this.ignore = !0;
      }
    }]);

    return s;
  }();

  function r(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }

  function a(e) {
    var n = Object.create(null);

    for (var _t in e) {
      n[_t] = e[_t];
    }

    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return t.forEach(function (e) {
      for (var _t2 in e) {
        n[_t2] = e[_t2];
      }
    }), n;
  }

  var i = function i(e) {
    return !!e.kind;
  };

  var o = /*#__PURE__*/function () {
    function o(e, t) {
      _classCallCheck(this, o);

      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
    }

    _createClass(o, [{
      key: "addText",
      value: function addText(e) {
        this.buffer += r(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        if (!i(e)) return;
        var t = e.kind;
        e.sublanguage || (t = "".concat(this.classPrefix).concat(t)), this.span(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode(e) {
        i(e) && (this.buffer += "</span>");
      }
    }, {
      key: "value",
      value: function value() {
        return this.buffer;
      }
    }, {
      key: "span",
      value: function span(e) {
        this.buffer += "<span class=\"".concat(e, "\">");
      }
    }]);

    return o;
  }();

  var l = /*#__PURE__*/function () {
    function l() {
      _classCallCheck(this, l);

      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode];
    }

    _createClass(l, [{
      key: "top",
      get: function get() {
        return this.stack[this.stack.length - 1];
      }
    }, {
      key: "root",
      get: function get() {
        return this.rootNode;
      }
    }, {
      key: "add",
      value: function add(e) {
        this.top.children.push(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        var t = {
          kind: e,
          children: []
        };
        this.add(t), this.stack.push(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
      }
    }, {
      key: "closeAllNodes",
      value: function closeAllNodes() {
        for (; this.closeNode();) {
          ;
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
    }, {
      key: "walk",
      value: function walk(e) {
        return this.constructor._walk(e, this.rootNode);
      }
    }], [{
      key: "_walk",
      value: function _walk(e, t) {
        var _this = this;

        return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(function (t) {
          return _this._walk(e, t);
        }), e.closeNode(t)), e;
      }
    }, {
      key: "_collapse",
      value: function _collapse(e) {
        "string" != typeof e && e.children && (e.children.every(function (e) {
          return "string" == typeof e;
        }) ? e.children = [e.children.join("")] : e.children.forEach(function (e) {
          l._collapse(e);
        }));
      }
    }]);

    return l;
  }();

  var c = /*#__PURE__*/function (_l) {
    _inherits(c, _l);

    var _super = _createSuper(c);

    function c(e) {
      var _this2;

      _classCallCheck(this, c);

      _this2 = _super.call(this), _this2.options = e;
      return _this2;
    }

    _createClass(c, [{
      key: "addKeyword",
      value: function addKeyword(e, t) {
        "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
      }
    }, {
      key: "addText",
      value: function addText(e) {
        "" !== e && this.add(e);
      }
    }, {
      key: "addSublanguage",
      value: function addSublanguage(e, t) {
        var n = e.root;
        n.kind = t, n.sublanguage = !0, this.add(n);
      }
    }, {
      key: "toHTML",
      value: function toHTML() {
        return new o(this, this.options).value();
      }
    }, {
      key: "finalize",
      value: function finalize() {
        return !0;
      }
    }]);

    return c;
  }(l);

  function u(e) {
    return e ? "string" == typeof e ? e : e.source : null;
  }

  var g = "[a-zA-Z]\\w*",
      d = "[a-zA-Z_]\\w*",
      h = "\\b\\d+(\\.\\d+)?",
      f = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      p = "\\b(0b[01]+)",
      m = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  },
      b = {
    className: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [m]
  },
      x = {
    className: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [m]
  },
      E = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  },
      v = function v(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s = a({
      className: "comment",
      begin: e,
      end: t,
      contains: []
    }, n);
    return s.contains.push(E), s.contains.push({
      className: "doctag",
      begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
      relevance: 0
    }), s;
  },
      w = v("//", "$"),
      N = v("/\\*", "\\*/"),
      y = v("#", "$");

  var R = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: g,
    UNDERSCORE_IDENT_RE: d,
    NUMBER_RE: h,
    C_NUMBER_RE: f,
    BINARY_NUMBER_RE: p,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: function SHEBANG() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = /^#![ ]*\//;
      return e.binary && (e.begin = function () {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        return e.map(function (e) {
          return u(e);
        }).join("");
      }(t, /.*\b/, e.binary, /\b.*/)), a({
        className: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": function onBegin(e, t) {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    BACKSLASH_ESCAPE: m,
    APOS_STRING_MODE: b,
    QUOTE_STRING_MODE: x,
    PHRASAL_WORDS_MODE: E,
    COMMENT: v,
    C_LINE_COMMENT_MODE: w,
    C_BLOCK_COMMENT_MODE: N,
    HASH_COMMENT_MODE: y,
    NUMBER_MODE: {
      className: "number",
      begin: h,
      relevance: 0
    },
    C_NUMBER_MODE: {
      className: "number",
      begin: f,
      relevance: 0
    },
    BINARY_NUMBER_MODE: {
      className: "number",
      begin: p,
      relevance: 0
    },
    CSS_NUMBER_MODE: {
      className: "number",
      begin: h + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [m, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [m]
        }]
      }]
    },
    TITLE_MODE: {
      className: "title",
      begin: g,
      relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
      className: "title",
      begin: d,
      relevance: 0
    },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0
    },
    END_SAME_AS_BEGIN: function END_SAME_AS_BEGIN(e) {
      return Object.assign(e, {
        "on:begin": function onBegin(e, t) {
          t.data._beginMatch = e[1];
        },
        "on:end": function onEnd(e, t) {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        }
      });
    }
  });

  function _(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }

  function k(e, t) {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = _, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
  }

  function O(e, t) {
    Array.isArray(e.illegal) && (e.illegal = function () {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      return "(" + e.map(function (e) {
        return u(e);
      }).join("|") + ")";
    }.apply(void 0, _toConsumableArray(e.illegal)));
  }

  function M(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match;
    }
  }

  function A(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }

  var L = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

  function B(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "keyword";
    var s = {};
    return "string" == typeof e ? r(n, e.split(" ")) : Array.isArray(e) ? r(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(s, B(e[n], t, n));
    }), s;

    function r(e, n) {
      t && (n = n.map(function (e) {
        return e.toLowerCase();
      })), n.forEach(function (t) {
        var n = t.split("|");
        s[n[0]] = [e, I(n[0], n[1])];
      });
    }
  }

  function I(e, t) {
    return t ? Number(t) : function (e) {
      return L.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }

  function T(e, _ref) {
    var t = _ref.plugins;

    function n(t, n) {
      return RegExp(u(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""));
    }

    var s = /*#__PURE__*/function () {
      function s() {
        _classCallCheck(this, s);

        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }

      _createClass(s, [{
        key: "addRule",
        value: function addRule(e, t) {
          t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += function (e) {
            return RegExp(e.toString() + "|").exec("").length - 1;
          }(e) + 1;
        }
      }, {
        key: "compile",
        value: function compile() {
          0 === this.regexes.length && (this.exec = function () {
            return null;
          });
          var e = this.regexes.map(function (e) {
            return e[1];
          });
          this.matcherRe = n(function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "|";
            var n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
            var _s = 0,
                r = "";

            for (var _a = 0; _a < e.length; _a++) {
              _s += 1;
              var _i = _s;

              var _o = u(e[_a]);

              for (_a > 0 && (r += t), r += "("; _o.length > 0;) {
                var _e = n.exec(_o);

                if (null == _e) {
                  r += _o;
                  break;
                }

                r += _o.substring(0, _e.index), _o = _o.substring(_e.index + _e[0].length), "\\" === _e[0][0] && _e[1] ? r += "\\" + (Number(_e[1]) + _i) : (r += _e[0], "(" === _e[0] && _s++);
              }

              r += ")";
            }

            return r;
          }(e), !0), this.lastIndex = 0;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          this.matcherRe.lastIndex = this.lastIndex;
          var t = this.matcherRe.exec(e);
          if (!t) return null;
          var n = t.findIndex(function (e, t) {
            return t > 0 && void 0 !== e;
          }),
              _s2 = this.matchIndexes[n];
          return t.splice(0, n), Object.assign(t, _s2);
        }
      }]);

      return s;
    }();

    var r = /*#__PURE__*/function () {
      function r() {
        _classCallCheck(this, r);

        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }

      _createClass(r, [{
        key: "getMatcher",
        value: function getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e];
          var t = new s();
          return this.rules.slice(e).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                e = _ref3[0],
                n = _ref3[1];

            return t.addRule(e, n);
          }), t.compile(), this.multiRegexes[e] = t, t;
        }
      }, {
        key: "resumingScanAtSamePosition",
        value: function resumingScanAtSamePosition() {
          return 0 !== this.regexIndex;
        }
      }, {
        key: "considerAll",
        value: function considerAll() {
          this.regexIndex = 0;
        }
      }, {
        key: "addRule",
        value: function addRule(e, t) {
          this.rules.push([e, t]), "begin" === t.type && this.count++;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          var t = this.getMatcher(this.regexIndex);
          t.lastIndex = this.lastIndex;
          var n = t.exec(e);
          if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ;else {
            var _t3 = this.getMatcher(0);

            _t3.lastIndex = this.lastIndex + 1, n = _t3.exec(e);
          }
          return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
        }
      }]);

      return r;
    }();

    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = a(e.classNameAliases || {}), function t(s, i) {
      var _ref4;

      var o = s;
      if (s.compiled) return o;
      [M].forEach(function (e) {
        return e(s, i);
      }), e.compilerExtensions.forEach(function (e) {
        return e(s, i);
      }), s.__beforeBegin = null, [k, O, A].forEach(function (e) {
        return e(s, i);
      }), s.compiled = !0;
      var l = null;
      if ("object" == _typeof(s.keywords) && (l = s.keywords.$pattern, delete s.keywords.$pattern), s.keywords && (s.keywords = B(s.keywords, e.case_insensitive)), s.lexemes && l) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
      return l = l || s.lexemes || /\w+/, o.keywordPatternRe = n(l, !0), i && (s.begin || (s.begin = /\B|\b/), o.beginRe = n(s.begin), s.endSameAsBegin && (s.end = s.begin), s.end || s.endsWithParent || (s.end = /\B|\b/), s.end && (o.endRe = n(s.end)), o.terminatorEnd = u(s.end) || "", s.endsWithParent && i.terminatorEnd && (o.terminatorEnd += (s.end ? "|" : "") + i.terminatorEnd)), s.illegal && (o.illegalRe = n(s.illegal)), s.contains || (s.contains = []), s.contains = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(s.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
            return a(e, {
              variants: null
            }, t);
          })), e.cachedVariants ? e.cachedVariants : j(e) ? a(e, {
            starts: e.starts ? a(e.starts) : null
          }) : Object.isFrozen(e) ? a(e) : e;
        }("self" === e ? s : e);
      }))), s.contains.forEach(function (e) {
        t(e, o);
      }), s.starts && t(s.starts, i), o.matcher = function (e) {
        var t = new r();
        return e.contains.forEach(function (e) {
          return t.addRule(e.begin, {
            rule: e,
            type: "begin"
          });
        }), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: "end"
        }), e.illegal && t.addRule(e.illegal, {
          type: "illegal"
        }), t;
      }(o), o;
    }(e);
  }

  function j(e) {
    return !!e && (e.endsWithParent || j(e.starts));
  }

  function S(e) {
    var t = {
      props: ["language", "code", "autodetect"],
      data: function data() {
        return {
          detectedLanguage: "",
          unknownLanguage: !1
        };
      },
      computed: {
        className: function className() {
          return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage;
        },
        highlighted: function highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn("The language \"".concat(this.language, "\" you specified could not be found.")), this.unknownLanguage = !0, r(this.code);
          var t = {};
          return this.autoDetect ? (t = e.highlightAuto(this.code), this.detectedLanguage = t.language) : (t = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), t.value;
        },
        autoDetect: function autoDetect() {
          return !(this.language && (e = this.autodetect, !e && "" !== e));
          var e;
        },
        ignoreIllegals: function ignoreIllegals() {
          return !0;
        }
      },
      render: function render(e) {
        return e("pre", {}, [e("code", {
          "class": this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })]);
      }
    };
    return {
      Component: t,
      VuePlugin: {
        install: function install(e) {
          e.component("highlightjs", t);
        }
      }
    };
  }

  var P = {
    "after:highlightBlock": function afterHighlightBlock(_ref5) {
      var e = _ref5.block,
          t = _ref5.result,
          n = _ref5.text;
      var s = C(e);
      if (!s.length) return;
      var a = document.createElement("div");
      a.innerHTML = t.value, t.value = function (e, t, n) {
        var s = 0,
            a = "";
        var i = [];

        function o() {
          return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t;
        }

        function l(e) {
          a += "<" + D(e) + [].map.call(e.attributes, function (e) {
            return " " + e.nodeName + '="' + r(e.value) + '"';
          }).join("") + ">";
        }

        function c(e) {
          a += "</" + D(e) + ">";
        }

        function u(e) {
          ("start" === e.event ? l : c)(e.node);
        }

        for (; e.length || t.length;) {
          var _t4 = o();

          if (a += r(n.substring(s, _t4[0].offset)), s = _t4[0].offset, _t4 === e) {
            i.reverse().forEach(c);

            do {
              u(_t4.splice(0, 1)[0]), _t4 = o();
            } while (_t4 === e && _t4.length && _t4[0].offset === s);

            i.reverse().forEach(l);
          } else "start" === _t4[0].event ? i.push(_t4[0].node) : i.pop(), u(_t4.splice(0, 1)[0]);
        }

        return a + r(n.substr(s));
      }(s, C(a), n);
    }
  };

  function D(e) {
    return e.nodeName.toLowerCase();
  }

  function C(e) {
    var t = [];
    return function e(n, s) {
      for (var _r = n.firstChild; _r; _r = _r.nextSibling) {
        3 === _r.nodeType ? s += _r.nodeValue.length : 1 === _r.nodeType && (t.push({
          event: "start",
          offset: s,
          node: _r
        }), s = e(_r, s), D(_r).match(/br|hr|img|input/) || t.push({
          event: "stop",
          offset: s,
          node: _r
        }));
      }

      return s;
    }(e, 0), t;
  }

  var H = function H(e) {
    console.error(e);
  },
      U = function U(e) {
    var _console;

    for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      t[_key4 - 1] = arguments[_key4];
    }

    (_console = console).log.apply(_console, ["WARN: " + e].concat(t));
  },
      $ = function $(e, t) {
    console.log("Deprecated as of ".concat(e, ". ").concat(t));
  },
      z = r,
      K = a,
      G = Symbol("nomatch");

  return function (e) {
    var n = Object.create(null),
        r = Object.create(null),
        a = [];
    var i = !0;
    var o = /(^(<[^>]+>|\t|)+|\n)/gm,
        l = "Could not find the language '{}', did you forget to load/include a language module?",
        u = {
      disableAutodetect: !0,
      name: "Plain text",
      contains: []
    };
    var g = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: c
    };

    function d(e) {
      return g.noHighlightRe.test(e);
    }

    function h(e, t, n, s) {
      var r = {
        code: t,
        language: e
      };
      M("before:highlight", r);
      var a = r.result ? r.result : f(r.language, r.code, n, s);
      return a.code = r.code, M("after:highlight", a), a;
    }

    function f(e, t, r, o) {
      var c = t;

      function u(e, t) {
        var n = w.case_insensitive ? t[0].toLowerCase() : t[0];
        return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n];
      }

      function d() {
        null != R.subLanguage ? function () {
          if ("" === M) return;
          var e = null;

          if ("string" == typeof R.subLanguage) {
            if (!n[R.subLanguage]) return void O.addText(M);
            e = f(R.subLanguage, M, !0, k[R.subLanguage]), k[R.subLanguage] = e.top;
          } else e = p(M, R.subLanguage.length ? R.subLanguage : null);

          R.relevance > 0 && (A += e.relevance), O.addSublanguage(e.emitter, e.language);
        }() : function () {
          if (!R.keywords) return void O.addText(M);
          var e = 0;
          R.keywordPatternRe.lastIndex = 0;
          var t = R.keywordPatternRe.exec(M),
              n = "";

          for (; t;) {
            n += M.substring(e, t.index);

            var _s3 = u(R, t);

            if (_s3) {
              var _s4 = _slicedToArray(_s3, 2),
                  _e2 = _s4[0],
                  _r2 = _s4[1];

              O.addText(n), n = "", A += _r2;

              var _a2 = w.classNameAliases[_e2] || _e2;

              O.addKeyword(t[0], _a2);
            } else n += t[0];

            e = R.keywordPatternRe.lastIndex, t = R.keywordPatternRe.exec(M);
          }

          n += M.substr(e), O.addText(n);
        }(), M = "";
      }

      function h(e) {
        return e.className && O.openNode(w.classNameAliases[e.className] || e.className), R = Object.create(e, {
          parent: {
            value: R
          }
        }), R;
      }

      function m(e, t, n) {
        var r = function (e, t) {
          var n = e && e.exec(t);
          return n && 0 === n.index;
        }(e.endRe, n);

        if (r) {
          if (e["on:end"]) {
            var _n2 = new s(e);

            e["on:end"](t, _n2), _n2.ignore && (r = !1);
          }

          if (r) {
            for (; e.endsParent && e.parent;) {
              e = e.parent;
            }

            return e;
          }
        }

        if (e.endsWithParent) return m(e.parent, t, n);
      }

      function b(e) {
        return 0 === R.matcher.regexIndex ? (M += e[0], 1) : (I = !0, 0);
      }

      function x(e) {
        var t = e[0],
            n = c.substr(e.index),
            s = m(R, e, n);
        if (!s) return G;
        var r = R;
        r.skip ? M += t : (r.returnEnd || r.excludeEnd || (M += t), d(), r.excludeEnd && (M = t));

        do {
          R.className && O.closeNode(), R.skip || R.subLanguage || (A += R.relevance), R = R.parent;
        } while (R !== s.parent);

        return s.starts && (s.endSameAsBegin && (s.starts.endRe = s.endRe), h(s.starts)), r.returnEnd ? 0 : t.length;
      }

      var E = {};

      function v(t, n) {
        var a = n && n[0];
        if (M += t, null == a) return d(), 0;

        if ("begin" === E.type && "end" === n.type && E.index === n.index && "" === a) {
          if (M += c.slice(n.index, n.index + 1), !i) {
            var _t5 = Error("0 width match regex");

            throw _t5.languageName = e, _t5.badRule = E.rule, _t5;
          }

          return 1;
        }

        if (E = n, "begin" === n.type) return function (e) {
          var t = e[0],
              n = e.rule,
              r = new s(n),
              a = [n.__beforeBegin, n["on:begin"]];

          for (var _i2 = 0, _a3 = a; _i2 < _a3.length; _i2++) {
            var _n3 = _a3[_i2];
            if (_n3 && (_n3(e, r), r.ignore)) return b(t);
          }

          return n && n.endSameAsBegin && (n.endRe = RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), n.skip ? M += t : (n.excludeBegin && (M += t), d(), n.returnBegin || n.excludeBegin || (M = t)), h(n), n.returnBegin ? 0 : t.length;
        }(n);

        if ("illegal" === n.type && !r) {
          var _e3 = Error('Illegal lexeme "' + a + '" for mode "' + (R.className || "<unnamed>") + '"');

          throw _e3.mode = R, _e3;
        }

        if ("end" === n.type) {
          var _e4 = x(n);

          if (_e4 !== G) return _e4;
        }

        if ("illegal" === n.type && "" === a) return 1;
        if (B > 1e5 && B > 3 * n.index) throw Error("potential infinite loop, way more iterations than matches");
        return M += a, a.length;
      }

      var w = _(e);

      if (!w) throw H(l.replace("{}", e)), Error('Unknown language: "' + e + '"');
      var N = T(w, {
        plugins: a
      });
      var y = "",
          R = o || N;
      var k = {},
          O = new g.__emitter(g);

      (function () {
        var e = [];

        for (var _t6 = R; _t6 !== w; _t6 = _t6.parent) {
          _t6.className && e.unshift(_t6.className);
        }

        e.forEach(function (e) {
          return O.openNode(e);
        });
      })();

      var M = "",
          A = 0,
          L = 0,
          B = 0,
          I = !1;

      try {
        for (R.matcher.considerAll();;) {
          B++, I ? I = !1 : R.matcher.considerAll(), R.matcher.lastIndex = L;

          var _e5 = R.matcher.exec(c);

          if (!_e5) break;

          var _t7 = v(c.substring(L, _e5.index), _e5);

          L = _e5.index + _t7;
        }

        return v(c.substr(L)), O.closeAllNodes(), O.finalize(), y = O.toHTML(), {
          relevance: Math.floor(A),
          value: y,
          language: e,
          illegal: !1,
          emitter: O,
          top: R
        };
      } catch (t) {
        if (t.message && t.message.includes("Illegal")) return {
          illegal: !0,
          illegalBy: {
            msg: t.message,
            context: c.slice(L - 100, L + 100),
            mode: t.mode
          },
          sofar: y,
          relevance: 0,
          value: z(c),
          emitter: O
        };
        if (i) return {
          illegal: !1,
          relevance: 0,
          value: z(c),
          emitter: O,
          language: e,
          top: R,
          errorRaised: t
        };
        throw t;
      }
    }

    function p(e, t) {
      t = t || g.languages || Object.keys(n);

      var s = function (e) {
        var t = {
          relevance: 0,
          emitter: new g.__emitter(g),
          value: z(e),
          illegal: !1,
          top: u
        };
        return t.emitter.addText(e), t;
      }(e),
          r = t.filter(_).filter(O).map(function (t) {
        return f(t, e, !1);
      });

      r.unshift(s);

      var a = r.sort(function (e, t) {
        if (e.relevance !== t.relevance) return t.relevance - e.relevance;

        if (e.language && t.language) {
          if (_(e.language).supersetOf === t.language) return 1;
          if (_(t.language).supersetOf === e.language) return -1;
        }

        return 0;
      }),
          _a4 = _slicedToArray(a, 2),
          i = _a4[0],
          o = _a4[1],
          l = i;

      return l.second_best = o, l;
    }

    var m = {
      "before:highlightBlock": function beforeHighlightBlock(_ref6) {
        var e = _ref6.block;
        g.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"));
      },
      "after:highlightBlock": function afterHighlightBlock(_ref7) {
        var e = _ref7.result;
        g.useBR && (e.value = e.value.replace(/\n/g, "<br>"));
      }
    },
        b = /^(<[^>]+>|\t)+/gm,
        x = {
      "after:highlightBlock": function afterHighlightBlock(_ref8) {
        var e = _ref8.result;
        g.tabReplace && (e.value = e.value.replace(b, function (e) {
          return e.replace(/\t/g, g.tabReplace);
        }));
      }
    };

    function E(e) {
      var t = null;

      var n = function (e) {
        var t = e.className + " ";
        t += e.parentNode ? e.parentNode.className : "";
        var n = g.languageDetectRe.exec(t);

        if (n) {
          var _t8 = _(n[1]);

          return _t8 || (U(l.replace("{}", n[1])), U("Falling back to no-highlight mode for this block.", e)), _t8 ? n[1] : "no-highlight";
        }

        return t.split(/\s+/).find(function (e) {
          return d(e) || _(e);
        });
      }(e);

      if (d(n)) return;
      M("before:highlightBlock", {
        block: e,
        language: n
      }), t = e;
      var s = t.textContent,
          a = n ? h(n, s, !0) : p(s);
      M("after:highlightBlock", {
        block: e,
        result: a,
        text: s
      }), e.innerHTML = a.value, function (e, t, n) {
        var s = t ? r[t] : n;
        e.classList.add("hljs"), s && e.classList.add(s);
      }(e, n, a.language), e.result = {
        language: a.language,
        re: a.relevance,
        relavance: a.relevance
      }, a.second_best && (e.second_best = {
        language: a.second_best.language,
        re: a.second_best.relevance,
        relavance: a.second_best.relevance
      });
    }

    var v = function v() {
      v.called || (v.called = !0, $("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(E));
    };

    var w = !1,
        N = !1;

    function y() {
      N ? document.querySelectorAll("pre code").forEach(E) : w = !0;
    }

    function _(e) {
      return e = (e || "").toLowerCase(), n[e] || n[r[e]];
    }

    function k(e, _ref9) {
      var t = _ref9.languageName;
      "string" == typeof e && (e = [e]), e.forEach(function (e) {
        r[e] = t;
      });
    }

    function O(e) {
      var t = _(e);

      return t && !t.disableAutodetect;
    }

    function M(e, t) {
      var n = e;
      a.forEach(function (e) {
        e[n] && e[n](t);
      });
    }

    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
      N = !0, w && y();
    }, !1), Object.assign(e, {
      highlight: h,
      highlightAuto: p,
      highlightAll: y,
      fixMarkup: function fixMarkup(e) {
        return $("10.2.0", "fixMarkup will be removed entirely in v11.0"), $("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), t = e, g.tabReplace || g.useBR ? t.replace(o, function (e) {
          return "\n" === e ? g.useBR ? "<br>" : e : g.tabReplace ? e.replace(/\t/g, g.tabReplace) : e;
        }) : t;
        var t;
      },
      highlightBlock: E,
      configure: function configure(e) {
        e.useBR && ($("10.3.0", "'useBR' will be removed entirely in v11.0"), $("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), g = K(g, e);
      },
      initHighlighting: v,
      initHighlightingOnLoad: function initHighlightingOnLoad() {
        $("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), w = !0;
      },
      registerLanguage: function registerLanguage(t, s) {
        var r = null;

        try {
          r = s(e);
        } catch (e) {
          if (H("Language definition for '{}' could not be registered.".replace("{}", t)), !i) throw e;
          H(e), r = u;
        }

        r.name || (r.name = t), n[t] = r, r.rawDefinition = s.bind(null, e), r.aliases && k(r.aliases, {
          languageName: t
        });
      },
      listLanguages: function listLanguages() {
        return Object.keys(n);
      },
      getLanguage: _,
      registerAliases: k,
      requireLanguage: function requireLanguage(e) {
        $("10.4.0", "requireLanguage will be removed entirely in v11."), $("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

        var t = _(e);

        if (t) return t;
        throw Error("The '{}' language is required, but not loaded.".replace("{}", e));
      },
      autoDetection: O,
      inherit: K,
      addPlugin: function addPlugin(e) {
        a.push(e);
      },
      vuePlugin: S(e).VuePlugin
    }), e.debugMode = function () {
      i = !1;
    }, e.safeMode = function () {
      i = !0;
    }, e.versionString = "10.6.0";

    for (var _e6 in R) {
      "object" == _typeof(R[_e6]) && t(R[_e6]);
    }

    return Object.assign(e, R), e.addPlugin(m), e.addPlugin(P), e.addPlugin(x), e;
  }({});
}();

"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module && (module.exports = hljs);
hljs.registerLanguage("typescript", function () {
  "use strict";

  var e = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
      a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      s = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

  function t(e) {
    return r("(?=", e, ")");
  }

  function r() {
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }

    return e.map(function (e) {
      return (n = e) ? "string" == typeof n ? n : n.source : null;
      var n;
    }).join("");
  }

  return function (i) {
    var c = {
      $pattern: e,
      keyword: n.concat(["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"]),
      literal: a,
      built_in: s.concat(["any", "void", "number", "boolean", "string", "object", "never", "enum"])
    },
        o = {
      className: "meta",
      begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
    },
        l = function l(e, n, a) {
      var s = e.contains.findIndex(function (e) {
        return e.label === n;
      });
      if (-1 === s) throw Error("can not find mode to replace");
      e.contains.splice(s, 1, a);
    },
        b = function (i) {
      var c = e,
          o = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
          var a = e[0].length + e.index,
              s = e.input[a];
          "<" !== s ? ">" === s && (function (e, _ref10) {
            var n = _ref10.after;
            var a = "</" + e[0].slice(1);
            return -1 !== e.input.indexOf(a, n);
          }(e, {
            after: a
          }) || n.ignoreMatch()) : n.ignoreMatch();
        }
      },
          l = {
        $pattern: e,
        keyword: n,
        literal: a,
        built_in: s
      },
          b = "\\.([0-9](_?[0-9])*)",
          d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
          g = {
        className: "number",
        variants: [{
          begin: "(\\b(".concat(d, ")((").concat(b, ")|\\.)?|(").concat(b, "))[eE][+-]?([0-9](_?[0-9])*)\\b")
        }, {
          begin: "\\b(".concat(d, ")\\b((").concat(b, ")\\b|\\.)?|(").concat(b, ")\\b")
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
        }, {
          begin: "\\b0[0-7]+n?\\b"
        }],
        relevance: 0
      },
          u = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: l,
        contains: []
      },
          E = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [i.BACKSLASH_ESCAPE, u],
          subLanguage: "xml"
        }
      },
          m = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [i.BACKSLASH_ESCAPE, u],
          subLanguage: "css"
        }
      },
          _ = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [i.BACKSLASH_ESCAPE, u]
      },
          y = {
        className: "comment",
        variants: [i.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+",
            contains: [{
              className: "type",
              begin: "\\{",
              end: "\\}",
              relevance: 0
            }, {
              className: "variable",
              begin: c + "(?=\\s*(-)|$)",
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), i.C_BLOCK_COMMENT_MODE, i.C_LINE_COMMENT_MODE]
      },
          p = [i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, E, m, _, g, i.REGEXP_MODE];
      u.contains = p.concat({
        begin: /\{/,
        end: /\}/,
        keywords: l,
        contains: ["self"].concat(p)
      });
      var N = [].concat(y, u.contains),
          f = N.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: l,
        contains: ["self"].concat(N)
      }]),
          A = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: f
      };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: l,
        exports: {
          PARAMS_CONTAINS: f
        },
        illegal: /#(?![$_A-z])/,
        contains: [i.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        }, i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, E, m, _, y, g, {
          begin: r(/[{,\n]\s*/, t(r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:"))),
          relevance: 0,
          contains: [{
            className: "attr",
            begin: c + t("\\s*:"),
            relevance: 0
          }]
        }, {
          begin: "(" + i.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          contains: [y, i.REGEXP_MODE, {
            className: "function",
            begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + i.UNDERSCORE_IDENT_RE + ")\\s*=>",
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                begin: i.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                begin: /\(\s*\)/,
                skip: !0
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: l,
                contains: f
              }]
            }]
          }, {
            begin: /,/,
            relevance: 0
          }, {
            className: "",
            begin: /\s/,
            end: /\s*/,
            skip: !0
          }, {
            variants: [{
              begin: "<>",
              end: "</>"
            }, {
              begin: o.begin,
              "on:begin": o.isTrulyOpeningTag,
              end: o.end
            }],
            subLanguage: "xml",
            contains: [{
              begin: o.begin,
              end: o.end,
              skip: !0,
              contains: ["self"]
            }]
          }],
          relevance: 0
        }, {
          className: "function",
          beginKeywords: "function",
          end: /[{;]/,
          excludeEnd: !0,
          keywords: l,
          contains: ["self", i.inherit(i.TITLE_MODE, {
            begin: c
          }), A],
          illegal: /%/
        }, {
          beginKeywords: "while if switch catch for"
        }, {
          className: "function",
          begin: i.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          contains: [A, i.inherit(i.TITLE_MODE, {
            begin: c
          })]
        }, {
          variants: [{
            begin: "\\." + c
          }, {
            begin: "\\$" + c
          }],
          relevance: 0
        }, {
          className: "class",
          beginKeywords: "class",
          end: /[{;=]/,
          excludeEnd: !0,
          illegal: /[:"[\]]/,
          contains: [{
            beginKeywords: "extends"
          }, i.UNDERSCORE_TITLE_MODE]
        }, {
          begin: /\b(?=constructor)/,
          end: /[{;]/,
          excludeEnd: !0,
          contains: [i.inherit(i.TITLE_MODE, {
            begin: c
          }), "self", A]
        }, {
          begin: "(get|set)\\s+(?=" + c + "\\()",
          end: /\{/,
          keywords: "get set",
          contains: [i.inherit(i.TITLE_MODE, {
            begin: c
          }), {
            begin: /\(\)/
          }, A]
        }, {
          begin: /\$[(.]/
        }]
      };
    }(i);

    return Object.assign(b.keywords, c), b.exports.PARAMS_CONTAINS.push(o), b.contains = b.contains.concat([o, {
      beginKeywords: "namespace",
      end: /\{/,
      excludeEnd: !0
    }, {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: "interface extends"
    }]), l(b, "shebang", i.SHEBANG()), l(b, "use_strict", {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }), b.contains.find(function (e) {
      return "function" === e.className;
    }).relevance = 0, Object.assign(b, {
      name: "TypeScript",
      aliases: ["ts"]
    }), b;
  };
}());
hljs.registerLanguage("less", function () {
  "use strict";

  var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
      t = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
      i = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
      o = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
      n = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse(),
      r = i.concat(o);
  return function (a) {
    var s = function (e) {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
      };
    }(a),
        l = r,
        d = "([\\w-]+|@\\{[\\w-]+\\})",
        c = [],
        g = [],
        b = function b(e) {
      return {
        className: "string",
        begin: "~?" + e + ".*?" + e
      };
    },
        m = function m(e, t, i) {
      return {
        className: e,
        begin: t,
        relevance: i
      };
    },
        u = {
      $pattern: /[a-z-]+/,
      keyword: "and or not only",
      attribute: t.join(" ")
    },
        p = {
      begin: "\\(",
      end: "\\)",
      contains: g,
      keywords: u,
      relevance: 0
    };

    g.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, b("'"), b('"'), a.CSS_NUMBER_MODE, {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    }, s.HEXCOLOR, p, m("variable", "@@?[\\w-]+", 10), m("variable", "@\\{[\\w-]+\\}"), m("built_in", "~?`[^`]*?`"), {
      className: "attribute",
      begin: "[\\w-]+\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    }, s.IMPORTANT);
    var f = g.concat({
      begin: /\{/,
      end: /\}/,
      contains: c
    }),
        h = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{
        beginKeywords: "and not"
      }].concat(g)
    },
        w = {
      begin: d + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [{
        begin: /-(webkit|moz|ms|o)-/
      }, {
        className: "attribute",
        begin: "\\b(" + n.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: g
        }
      }]
    },
        v = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: u,
        returnEnd: !0,
        contains: g,
        relevance: 0
      }
    },
        y = {
      className: "variable",
      variants: [{
        begin: "@[\\w-]+\\s*:",
        relevance: 15
      }, {
        begin: "@[\\w-]+"
      }],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: f
      }
    },
        k = {
      variants: [{
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
      }, {
        begin: d,
        end: /\{/
      }],
      returnBegin: !0,
      returnEnd: !0,
      illegal: "[<='$\"]",
      relevance: 0,
      contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, h, m("keyword", "all\\b"), m("variable", "@\\{[\\w-]+\\}"), {
        begin: "\\b(" + e.join("|") + ")\\b",
        className: "selector-tag"
      }, m("selector-tag", d + "%?", 0), m("selector-id", "#" + d), m("selector-class", "\\." + d, 0), m("selector-tag", "&", 0), s.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-pseudo",
        begin: ":(" + i.join("|") + ")"
      }, {
        className: "selector-pseudo",
        begin: "::(" + o.join("|") + ")"
      }, {
        begin: "\\(",
        end: "\\)",
        contains: f
      }, {
        begin: "!important"
      }]
    },
        E = {
      begin: "[\\w-]+:(:)?(".concat(l.join("|"), ")"),
      returnBegin: !0,
      contains: [k]
    };
    return c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, v, y, E, w, k), {
      name: "Less",
      case_insensitive: !0,
      illegal: "[=>'/<($\"]",
      contains: c
    };
  };
}());
hljs.registerLanguage("css", function () {
  "use strict";

  var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
      t = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
      i = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
      o = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
      r = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();
  return function (n) {
    var a = function (e) {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
      };
    }(n),
        l = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];

    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: {
        keyframePosition: "from to"
      },
      classNameAliases: {
        keyframePosition: "selector-tag"
      },
      contains: [n.C_BLOCK_COMMENT_MODE, {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
      }, n.CSS_NUMBER_MODE, {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      }, {
        className: "selector-class",
        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
        relevance: 0
      }, a.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-pseudo",
        variants: [{
          begin: ":(" + i.join("|") + ")"
        }, {
          begin: "::(" + o.join("|") + ")"
        }]
      }, {
        className: "attribute",
        begin: "\\b(" + r.join("|") + ")\\b"
      }, {
        begin: ":",
        end: "[;}]",
        contains: [a.HEXCOLOR, a.IMPORTANT, n.CSS_NUMBER_MODE].concat(l, [{
          begin: /(url|data-uri)\(/,
          end: /\)/,
          relevance: 0,
          keywords: {
            built_in: "url data-uri"
          },
          contains: [{
            className: "string",
            begin: /[^)]/,
            endsWithParent: !0,
            excludeEnd: !0
          }]
        }, {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        }])
      }, {
        begin: (s = /@/, function () {
          for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            e[_key6] = arguments[_key6];
          }

          return e.map(function (e) {
            return function (e) {
              return e ? "string" == typeof e ? e : e.source : null;
            }(e);
          }).join("");
        }("(?=", s, ")")),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [{
          className: "keyword",
          begin: /@-?\w[\w]*(-\w+)*/
        }, {
          begin: /\s/,
          endsWithParent: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: t.join(" ")
          },
          contains: [{
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          }].concat(l, [n.CSS_NUMBER_MODE])
        }]
      }, {
        className: "selector-tag",
        begin: "\\b(" + e.join("|") + ")\\b"
      }]
    };
    var s;
  };
}());
hljs.registerLanguage("xml", function () {
  "use strict";

  function e(e) {
    return e ? "string" == typeof e ? e : e.source : null;
  }

  function n(e) {
    return a("(?=", e, ")");
  }

  function a() {
    for (var _len7 = arguments.length, n = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      n[_key7] = arguments[_key7];
    }

    return n.map(function (n) {
      return e(n);
    }).join("");
  }

  function s() {
    for (var _len8 = arguments.length, n = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      n[_key8] = arguments[_key8];
    }

    return "(" + n.map(function (n) {
      return e(n);
    }).join("|") + ")";
  }

  return function (e) {
    var t = a(/[A-Z_]/, a("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
        i = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    },
        r = {
      begin: /\s/,
      contains: [{
        className: "meta-keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }]
    },
        c = e.inherit(r, {
      begin: /\(/,
      end: /\)/
    }),
        l = e.inherit(e.APOS_STRING_MODE, {
      className: "meta-string"
    }),
        g = e.inherit(e.QUOTE_STRING_MODE, {
      className: "meta-string"
    }),
        m = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [{
        className: "attr",
        begin: /[A-Za-z0-9._:-]+/,
        relevance: 0
      }, {
        begin: /=\s*/,
        relevance: 0,
        contains: [{
          className: "string",
          endsParent: !0,
          variants: [{
            begin: /"/,
            end: /"/,
            contains: [i]
          }, {
            begin: /'/,
            end: /'/,
            contains: [i]
          }, {
            begin: /[^\s"'=<>`]+/
          }]
        }]
      }]
    };
    return {
      name: "HTML, XML",
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [r, g, l, c, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            contains: [r, c, g, l]
          }]
        }]
      }, e.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, i, {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [m],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"]
        }
      }, {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [m],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"]
        }
      }, {
        className: "tag",
        begin: /<>|<\/>/
      }, {
        className: "tag",
        begin: a(/</, n(a(t, s(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: "name",
          begin: t,
          relevance: 0,
          starts: m
        }]
      }, {
        className: "tag",
        begin: a(/<\//, n(a(t, />/))),
        contains: [{
          className: "name",
          begin: t,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0
        }]
      }]
    };
  };
}());
hljs.registerLanguage("javascript", function () {
  "use strict";

  var e = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
      a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      s = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

  function r(e) {
    return t("(?=", e, ")");
  }

  function t() {
    for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      e[_key9] = arguments[_key9];
    }

    return e.map(function (e) {
      return (n = e) ? "string" == typeof n ? n : n.source : null;
      var n;
    }).join("");
  }

  return function (i) {
    var c = e,
        o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
        var a = e[0].length + e.index,
            s = e.input[a];
        "<" !== s ? ">" === s && (function (e, _ref11) {
          var n = _ref11.after;
          var a = "</" + e[0].slice(1);
          return -1 !== e.input.indexOf(a, n);
        }(e, {
          after: a
        }) || n.ignoreMatch()) : n.ignoreMatch();
      }
    },
        l = {
      $pattern: e,
      keyword: n,
      literal: a,
      built_in: s
    },
        b = "\\.([0-9](_?[0-9])*)",
        g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        d = {
      className: "number",
      variants: [{
        begin: "(\\b(".concat(g, ")((").concat(b, ")|\\.)?|(").concat(b, "))[eE][+-]?([0-9](_?[0-9])*)\\b")
      }, {
        begin: "\\b(".concat(g, ")\\b((").concat(b, ")\\b|\\.)?|(").concat(b, ")\\b")
      }, {
        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
      }, {
        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
      }, {
        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
      }, {
        begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
      }, {
        begin: "\\b0[0-7]+n?\\b"
      }],
      relevance: 0
    },
        E = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: l,
      contains: []
    },
        u = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [i.BACKSLASH_ESCAPE, E],
        subLanguage: "xml"
      }
    },
        _ = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [i.BACKSLASH_ESCAPE, E],
        subLanguage: "css"
      }
    },
        m = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [i.BACKSLASH_ESCAPE, E]
    },
        N = {
      className: "comment",
      variants: [i.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+",
          contains: [{
            className: "type",
            begin: "\\{",
            end: "\\}",
            relevance: 0
          }, {
            className: "variable",
            begin: c + "(?=\\s*(-)|$)",
            endsParent: !0,
            relevance: 0
          }, {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }]
        }]
      }), i.C_BLOCK_COMMENT_MODE, i.C_LINE_COMMENT_MODE]
    },
        y = [i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, u, _, m, d, i.REGEXP_MODE];
    E.contains = y.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ["self"].concat(y)
    });
    var f = [].concat(N, E.contains),
        A = f.concat([{
      begin: /\(/,
      end: /\)/,
      keywords: l,
      contains: ["self"].concat(f)
    }]),
        p = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: l,
      contains: A
    };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: l,
      exports: {
        PARAMS_CONTAINS: A
      },
      illegal: /#(?![$_A-z])/,
      contains: [i.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }), {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, u, _, m, N, d, {
        begin: t(/[{,\n]\s*/, r(t(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:"))),
        relevance: 0,
        contains: [{
          className: "attr",
          begin: c + r("\\s*:"),
          relevance: 0
        }]
      }, {
        begin: "(" + i.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [N, i.REGEXP_MODE, {
          className: "function",
          begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + i.UNDERSCORE_IDENT_RE + ")\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: i.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: !0
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: l,
              contains: A
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          className: "",
          begin: /\s/,
          end: /\s*/,
          skip: !0
        }, {
          variants: [{
            begin: "<>",
            end: "</>"
          }, {
            begin: o.begin,
            "on:begin": o.isTrulyOpeningTag,
            end: o.end
          }],
          subLanguage: "xml",
          contains: [{
            begin: o.begin,
            end: o.end,
            skip: !0,
            contains: ["self"]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: l,
        contains: ["self", i.inherit(i.TITLE_MODE, {
          begin: c
        }), p],
        illegal: /%/
      }, {
        beginKeywords: "while if switch catch for"
      }, {
        className: "function",
        begin: i.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        contains: [p, i.inherit(i.TITLE_MODE, {
          begin: c
        })]
      }, {
        variants: [{
          begin: "\\." + c
        }, {
          begin: "\\$" + c
        }],
        relevance: 0
      }, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{
          beginKeywords: "extends"
        }, i.UNDERSCORE_TITLE_MODE]
      }, {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [i.inherit(i.TITLE_MODE, {
          begin: c
        }), "self", p]
      }, {
        begin: "(get|set)\\s+(?=" + c + "\\()",
        end: /\{/,
        keywords: "get set",
        contains: [i.inherit(i.TITLE_MODE, {
          begin: c
        }), {
          begin: /\(\)/
        }, p]
      }, {
        begin: /\$[(.]/
      }]
    };
  };
}());