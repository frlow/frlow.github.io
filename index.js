(() => {
  // ../ucp-example/dist/elements/chunks/chunk-DPU5ZZQH.js
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../ucp-example/dist/elements/chunks/chunk-PIPGNH2F.js
  var require_react_production_min = __commonJS({
    "../../node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p2 = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (a === null || typeof a !== "object")
          return null;
        a = z && a[z] || a["@@iterator"];
        return typeof a === "function" ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if (typeof a !== "object" && typeof a !== "function" && a != null)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h2 = null;
        if (b != null)
          for (d in b.ref !== void 0 && (h2 = b.ref), b.key !== void 0 && (k = "" + b.key), b)
            J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (g === 1)
          c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++)
            f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps)
          for (d in g = a.defaultProps, g)
            c[d] === void 0 && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h2, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return typeof a === "object" && a !== null && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if (k === "undefined" || k === "boolean")
          a = null;
        var h2 = false;
        if (a === null)
          h2 = true;
        else
          switch (k) {
            case "string":
            case "number":
              h2 = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case l:
                case n:
                  h2 = true;
              }
          }
        if (h2)
          return h2 = a, c = c(h2), a = d === "" ? "." + Q(h2, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
            return a2;
          })) : c != null && (O(c) && (c = N(c, e + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h2 = 0;
        d = d === "" ? "." : d + ":";
        if (I(a))
          for (var g = 0; g < a.length; g++) {
            k = a[g];
            var f = d + Q(k, g);
            h2 += R(k, b, e, f, c);
          }
        else if (f = A(a), typeof f === "function")
          for (a = f.call(a), g = 0; !(k = a.next()).done; )
            k = k.value, f = d + Q(k, g++), h2 += R(k, b, e, f, c);
        else if (k === "object")
          throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S(a, b, e) {
        if (a == null)
          return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (a._status === -1) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (a._status === 0 || a._status === -1)
              a._status = 1, a._result = b2;
          }, function(b2) {
            if (a._status === 0 || a._status === -1)
              a._status = 2, a._result = b2;
          });
          a._status === -1 && (a._status = 0, a._result = b);
        }
        if (a._status === 1)
          return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a))
          throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p2;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.cloneElement = function(a, b, e) {
        if (a === null || a === void 0)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h2 = a._owner;
        if (b != null) {
          b.ref !== void 0 && (k = b.ref, h2 = K.current);
          b.key !== void 0 && (c = "" + b.key);
          if (a.type && a.type.defaultProps)
            var g = a.type.defaultProps;
          for (f in b)
            J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (f === 1)
          d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++)
            g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h2 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: b === void 0 ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.1.0";
    }
  });
  var require_react = __commonJS({
    "../../node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });
  var require_scheduler_production_min = __commonJS({
    "../../node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; 0 < c; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (0 < g(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function h2(a) {
        return a.length === 0 ? null : a[0];
      }
      function k(a) {
        if (a.length === 0)
          return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
              var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
              if (0 > g(C, c))
                n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
              else if (n < e && 0 > g(x, c))
                a[d] = x, a[n] = c, d = n;
              else
                break a;
            }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return c !== 0 ? c : a.id - b.id;
      }
      if (typeof performance === "object" && typeof performance.now === "function") {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p2 = Date, q = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q;
        };
      }
      var l;
      var p2;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = typeof setTimeout === "function" ? setTimeout : null;
      var E = typeof clearTimeout === "function" ? clearTimeout : null;
      var F = typeof setImmediate !== "undefined" ? setImmediate : null;
      typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h2(t); b !== null; ) {
          if (b.callback === null)
            k(t);
          else if (b.startTime <= a)
            k(t), b.sortIndex = b.expirationTime, f(r, b);
          else
            break;
          b = h2(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A)
          if (h2(r) !== null)
            A = true, I(J);
          else {
            var b = h2(t);
            b !== null && K(H, b.startTime - a);
          }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h2(r); v !== null && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if (typeof d === "function") {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              typeof e === "function" ? v.callback = e : v === h2(r) && k(r);
              G(b);
            } else
              k(r);
            v = h2(r);
          }
          if (v !== null)
            var w = true;
          else {
            var m = h2(t);
            m !== null && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (O !== null) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else
          N = false;
      }
      var S;
      if (typeof F === "function")
        S = function() {
          F(R);
        };
      else if (typeof MessageChannel !== "undefined") {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else
        S = function() {
          D(R, 0);
        };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), h2(r) === null && a === h2(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });
  var require_scheduler = __commonJS({
    "../../node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });
  var require_react_dom_production_min = __commonJS({
    "../../node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ba = require_scheduler();
      function p2(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++)
          da.add(b[a]);
      }
      var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function na(a) {
        if (ja.call(ma, a))
          return true;
        if (ja.call(la, a))
          return false;
        if (ka.test(a))
          return ma[a] = true;
        la[a] = true;
        return false;
      }
      function oa(a, b, c, d) {
        if (c !== null && c.type === 0)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (c !== null)
              return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return a !== "data-" && a !== "aria-";
          default:
            return false;
        }
      }
      function pa(a, b, c, d) {
        if (b === null || typeof b === "undefined" || oa(a, b, c, d))
          return true;
        if (d)
          return false;
        if (c !== null)
          switch (c.type) {
            case 3:
              return !b;
            case 4:
              return b === false;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function t(a, b, c, d, e, f, g) {
        this.acceptsBooleans = b === 2 || b === 3 || b === 4;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new t(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new t(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new t(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new t(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new t(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new t(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new t(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new t(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new t(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var qa = /[\-:]([a-z])/g;
      function ra(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(qa, ra);
        z[b] = new t(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(qa, ra);
        z[b] = new t(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(qa, ra);
        z[b] = new t(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new t(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new t("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new t(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function sa(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (e !== null ? e.type !== 0 : d || !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N")
          pa(b, c, e, d) && (c = null), d || e === null ? na(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var ua = Symbol.for("react.element");
      var va = Symbol.for("react.portal");
      var wa = Symbol.for("react.fragment");
      var xa = Symbol.for("react.strict_mode");
      var za = Symbol.for("react.profiler");
      var Aa = Symbol.for("react.provider");
      var Ba = Symbol.for("react.context");
      var Ca = Symbol.for("react.forward_ref");
      var Da = Symbol.for("react.suspense");
      var Ea = Symbol.for("react.suspense_list");
      var Fa = Symbol.for("react.memo");
      var Ga = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ha = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ia = Symbol.iterator;
      function Ja(a) {
        if (a === null || typeof a !== "object")
          return null;
        a = Ia && a[Ia] || a["@@iterator"];
        return typeof a === "function" ? a : null;
      }
      var A = Object.assign;
      var Ka;
      function La(a) {
        if (Ka === void 0)
          try {
            throw Error();
          } catch (c) {
            var b = c.stack.trim().match(/\n( *(at )?)/);
            Ka = b && b[1] || "";
          }
        return "\n" + Ka + a;
      }
      var Ma = false;
      function Na(a, b) {
        if (!a || Ma)
          return "";
        Ma = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l) {
                var d = l;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (l) {
                d = l;
              }
              a.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && typeof l.stack === "string") {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h2 = f.length - 1; 1 <= g && 0 <= h2 && e[g] !== f[h2]; )
              h2--;
            for (; 1 <= g && 0 <= h2; g--, h2--)
              if (e[g] !== f[h2]) {
                if (g !== 1 || h2 !== 1) {
                  do
                    if (g--, h2--, 0 > h2 || e[g] !== f[h2]) {
                      var k = "\n" + e[g].replace(" at new ", " at ");
                      a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                      return k;
                    }
                  while (1 <= g && 0 <= h2);
                }
                break;
              }
          }
        } finally {
          Ma = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? La(a) : "";
      }
      function Oa(a) {
        switch (a.tag) {
          case 5:
            return La(a.type);
          case 16:
            return La("Lazy");
          case 13:
            return La("Suspense");
          case 19:
            return La("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Na(a.type, false), a;
          case 11:
            return a = Na(a.type.render, false), a;
          case 1:
            return a = Na(a.type, true), a;
          default:
            return "";
        }
      }
      function Pa(a) {
        if (a == null)
          return null;
        if (typeof a === "function")
          return a.displayName || a.name || null;
        if (typeof a === "string")
          return a;
        switch (a) {
          case wa:
            return "Fragment";
          case va:
            return "Portal";
          case za:
            return "Profiler";
          case xa:
            return "StrictMode";
          case Da:
            return "Suspense";
          case Ea:
            return "SuspenseList";
        }
        if (typeof a === "object")
          switch (a.$$typeof) {
            case Ba:
              return (a.displayName || "Context") + ".Consumer";
            case Aa:
              return (a._context.displayName || "Context") + ".Provider";
            case Ca:
              var b = a.render;
              a = a.displayName;
              a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
              return a;
            case Fa:
              return b = a.displayName || null, b !== null ? b : Pa(a.type) || "Memo";
            case Ga:
              b = a._payload;
              a = a._init;
              try {
                return Pa(a(b));
              } catch (c) {
              }
          }
        return null;
      }
      function Qa(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Pa(b);
          case 8:
            return b === xa ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof b === "function")
              return b.displayName || b.name || null;
            if (typeof b === "string")
              return b;
        }
        return null;
      }
      function Ra(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Sa(a) {
        var b = a.type;
        return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
      }
      function Ta(a) {
        var b = Sa(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Ua(a) {
        a._valueTracker || (a._valueTracker = Ta(a));
      }
      function Va(a) {
        if (!a)
          return false;
        var b = a._valueTracker;
        if (!b)
          return true;
        var c = b.getValue();
        var d = "";
        a && (d = Sa(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Wa(a) {
        a = a || (typeof document !== "undefined" ? document : void 0);
        if (typeof a === "undefined")
          return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Xa(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
      }
      function Ya(a, b) {
        var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
        c = Ra(b.value != null ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
      }
      function Za(a, b) {
        b = b.checked;
        b != null && sa(a, "checked", b, false);
      }
      function $a(a, b) {
        Za(a, b);
        var c = Ra(b.value), d = b.type;
        if (c != null)
          if (d === "number") {
            if (c === 0 && a.value === "" || a.value != c)
              a.value = "" + c;
          } else
            a.value !== "" + c && (a.value = "" + c);
        else if (d === "submit" || d === "reset") {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Ra(b.defaultValue));
        b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
      }
      function cb(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
            return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        c !== "" && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        c !== "" && (a.name = c);
      }
      function bb(a, b, c) {
        if (b !== "number" || Wa(a.ownerDocument) !== a)
          c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var db = Array.isArray;
      function eb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++)
            b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++)
            e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Ra(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            b !== null || a[e].disabled || (b = a[e]);
          }
          b !== null && (b.selected = true);
        }
      }
      function fb(a, b) {
        if (b.dangerouslySetInnerHTML != null)
          throw Error(p2(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function gb(a, b) {
        var c = b.value;
        if (c == null) {
          c = b.children;
          b = b.defaultValue;
          if (c != null) {
            if (b != null)
              throw Error(p2(92));
            if (db(c)) {
              if (1 < c.length)
                throw Error(p2(93));
              c = c[0];
            }
            b = c;
          }
          b == null && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Ra(c) };
      }
      function hb(a, b) {
        var c = Ra(b.value), d = Ra(b.defaultValue);
        c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
        d != null && (a.defaultValue = "" + d);
      }
      function ib(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
      }
      function jb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function kb(a, b) {
        return a == null || a === "http://www.w3.org/1999/xhtml" ? jb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
      }
      var lb;
      var mb = function(a) {
        return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
          a.innerHTML = b;
        else {
          lb = lb || document.createElement("div");
          lb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = lb.firstChild; a.firstChild; )
            a.removeChild(a.firstChild);
          for (; b.firstChild; )
            a.appendChild(b.firstChild);
        }
      });
      function nb(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && c.nodeType === 3) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var ob = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var pb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ob).forEach(function(a) {
        pb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          ob[b] = ob[a];
        });
      });
      function qb(a, b, c) {
        return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || ob.hasOwnProperty(a) && ob[a] ? ("" + b).trim() : b + "px";
      }
      function rb(a, b) {
        a = a.style;
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = c.indexOf("--") === 0, e = qb(c, b[c], d);
            c === "float" && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
      }
      var sb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function tb(a, b) {
        if (b) {
          if (sb[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
            throw Error(p2(137, a));
          if (b.dangerouslySetInnerHTML != null) {
            if (b.children != null)
              throw Error(p2(60));
            if (typeof b.dangerouslySetInnerHTML !== "object" || !("__html" in b.dangerouslySetInnerHTML))
              throw Error(p2(61));
          }
          if (b.style != null && typeof b.style !== "object")
            throw Error(p2(62));
        }
      }
      function ub(a, b) {
        if (a.indexOf("-") === -1)
          return typeof b.is === "string";
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var vb = null;
      function wb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return a.nodeType === 3 ? a.parentNode : a;
      }
      var xb = null;
      var yb = null;
      var zb = null;
      function Ab(a) {
        if (a = Bb(a)) {
          if (typeof xb !== "function")
            throw Error(p2(280));
          var b = a.stateNode;
          b && (b = Cb(b), xb(a.stateNode, a.type, b));
        }
      }
      function Db(a) {
        yb ? zb ? zb.push(a) : zb = [a] : yb = a;
      }
      function Eb() {
        if (yb) {
          var a = yb, b = zb;
          zb = yb = null;
          Ab(a);
          if (b)
            for (a = 0; a < b.length; a++)
              Ab(b[a]);
        }
      }
      function Fb(a, b) {
        return a(b);
      }
      function Gb() {
      }
      var Hb = false;
      function Ib(a, b, c) {
        if (Hb)
          return a(b, c);
        Hb = true;
        try {
          return Fb(a, b, c);
        } finally {
          if (Hb = false, yb !== null || zb !== null)
            Gb(), Eb();
        }
      }
      function Jb(a, b) {
        var c = a.stateNode;
        if (c === null)
          return null;
        var d = Cb(c);
        if (d === null)
          return null;
        c = d[b];
        a:
          switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
              a = !d;
              break a;
            default:
              a = false;
          }
        if (a)
          return null;
        if (c && typeof c !== "function")
          throw Error(p2(231, b, typeof c));
        return c;
      }
      var Kb = false;
      if (ia)
        try {
          Lb = {};
          Object.defineProperty(Lb, "passive", { get: function() {
            Kb = true;
          } });
          window.addEventListener("test", Lb, Lb);
          window.removeEventListener("test", Lb, Lb);
        } catch (a) {
          Kb = false;
        }
      var Lb;
      function Mb(a, b, c, d, e, f, g, h2, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (n) {
          this.onError(n);
        }
      }
      var Nb = false;
      var Ob = null;
      var Pb = false;
      var Qb = null;
      var Rb = { onError: function(a) {
        Nb = true;
        Ob = a;
      } };
      function Sb(a, b, c, d, e, f, g, h2, k) {
        Nb = false;
        Ob = null;
        Mb.apply(Rb, arguments);
      }
      function Tb(a, b, c, d, e, f, g, h2, k) {
        Sb.apply(this, arguments);
        if (Nb) {
          if (Nb) {
            var l = Ob;
            Nb = false;
            Ob = null;
          } else
            throw Error(p2(198));
          Pb || (Pb = true, Qb = l);
        }
      }
      function Ub(a) {
        var b = a, c = a;
        if (a.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a = b;
          do
            b = a, (b.flags & 4098) !== 0 && (c = b.return), a = b.return;
          while (a);
        }
        return b.tag === 3 ? c : null;
      }
      function Vb(a) {
        if (a.tag === 13) {
          var b = a.memoizedState;
          b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
          if (b !== null)
            return b.dehydrated;
        }
        return null;
      }
      function Wb(a) {
        if (Ub(a) !== a)
          throw Error(p2(188));
      }
      function Xb(a) {
        var b = a.alternate;
        if (!b) {
          b = Ub(a);
          if (b === null)
            throw Error(p2(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (e === null)
            break;
          var f = e.alternate;
          if (f === null) {
            d = e.return;
            if (d !== null) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c)
                return Wb(e), a;
              if (f === d)
                return Wb(e), b;
              f = f.sibling;
            }
            throw Error(p2(188));
          }
          if (c.return !== d.return)
            c = e, d = f;
          else {
            for (var g = false, h2 = e.child; h2; ) {
              if (h2 === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h2 === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g) {
              for (h2 = f.child; h2; ) {
                if (h2 === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h2 === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g)
                throw Error(p2(189));
            }
          }
          if (c.alternate !== d)
            throw Error(p2(190));
        }
        if (c.tag !== 3)
          throw Error(p2(188));
        return c.stateNode.current === c ? a : b;
      }
      function Yb(a) {
        a = Xb(a);
        return a !== null ? Zb(a) : null;
      }
      function Zb(a) {
        if (a.tag === 5 || a.tag === 6)
          return a;
        for (a = a.child; a !== null; ) {
          var b = Zb(a);
          if (b !== null)
            return b;
          a = a.sibling;
        }
        return null;
      }
      var $b = ba.unstable_scheduleCallback;
      var ac = ba.unstable_cancelCallback;
      var bc = ba.unstable_shouldYield;
      var cc = ba.unstable_requestPaint;
      var B = ba.unstable_now;
      var dc = ba.unstable_getCurrentPriorityLevel;
      var ec = ba.unstable_ImmediatePriority;
      var fc = ba.unstable_UserBlockingPriority;
      var gc = ba.unstable_NormalPriority;
      var hc = ba.unstable_LowPriority;
      var ic = ba.unstable_IdlePriority;
      var jc = null;
      var kc = null;
      function lc(a) {
        if (kc && typeof kc.onCommitFiberRoot === "function")
          try {
            kc.onCommitFiberRoot(jc, a, void 0, (a.current.flags & 128) === 128);
          } catch (b) {
          }
      }
      var nc = Math.clz32 ? Math.clz32 : mc;
      var oc = Math.log;
      var pc = Math.LN2;
      function mc(a) {
        a >>>= 0;
        return a === 0 ? 32 : 31 - (oc(a) / pc | 0) | 0;
      }
      var qc = 64;
      var rc = 4194304;
      function sc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function tc(a, b) {
        var c = a.pendingLanes;
        if (c === 0)
          return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (g !== 0) {
          var h2 = g & ~e;
          h2 !== 0 ? d = sc(h2) : (f &= g, f !== 0 && (d = sc(f)));
        } else
          g = c & ~e, g !== 0 ? d = sc(g) : f !== 0 && (d = sc(f));
        if (d === 0)
          return 0;
        if (b !== 0 && b !== d && (b & e) === 0 && (e = d & -d, f = b & -b, e >= f || e === 16 && (f & 4194240) !== 0))
          return b;
        (d & 4) !== 0 && (d |= c & 16);
        b = a.entangledLanes;
        if (b !== 0)
          for (a = a.entanglements, b &= d; 0 < b; )
            c = 31 - nc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function uc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function vc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - nc(f), h2 = 1 << g, k = e[g];
          if (k === -1) {
            if ((h2 & c) === 0 || (h2 & d) !== 0)
              e[g] = uc(h2, b);
          } else
            k <= b && (a.expiredLanes |= h2);
          f &= ~h2;
        }
      }
      function wc(a) {
        a = a.pendingLanes & -1073741825;
        return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function xc() {
        var a = qc;
        qc <<= 1;
        (qc & 4194240) === 0 && (qc = 64);
        return a;
      }
      function yc(a) {
        for (var b = [], c = 0; 31 > c; c++)
          b.push(a);
        return b;
      }
      function zc(a, b, c) {
        a.pendingLanes |= b;
        b !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - nc(b);
        a[b] = c;
      }
      function Ac(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - nc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Bc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - nc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Cc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
      }
      var Dc;
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic = false;
      var Jc = [];
      var Kc = null;
      var Lc = null;
      var Mc = null;
      var Nc = /* @__PURE__ */ new Map();
      var Oc = /* @__PURE__ */ new Map();
      var Pc = [];
      var Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Rc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Kc = null;
            break;
          case "dragenter":
          case "dragleave":
            Lc = null;
            break;
          case "mouseover":
          case "mouseout":
            Mc = null;
            break;
          case "pointerover":
          case "pointerout":
            Nc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Oc.delete(b.pointerId);
        }
      }
      function Sc(a, b, c, d, e, f) {
        if (a === null || a.nativeEvent !== f)
          return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, b !== null && (b = Bb(b), b !== null && Ec(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        e !== null && b.indexOf(e) === -1 && b.push(e);
        return a;
      }
      function Tc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Kc = Sc(Kc, a, b, c, d, e), true;
          case "dragenter":
            return Lc = Sc(Lc, a, b, c, d, e), true;
          case "mouseover":
            return Mc = Sc(Mc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Nc.set(f, Sc(Nc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Oc.set(f, Sc(Oc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Uc(a) {
        var b = Vc(a.target);
        if (b !== null) {
          var c = Ub(b);
          if (c !== null) {
            if (b = c.tag, b === 13) {
              if (b = Vb(c), b !== null) {
                a.blockedOn = b;
                Hc(a.priority, function() {
                  Fc(c);
                });
                return;
              }
            } else if (b === 3 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Wc(a) {
        if (a.blockedOn !== null)
          return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Xc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (c === null) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            vb = d;
            c.target.dispatchEvent(d);
            vb = null;
          } else
            return b = Bb(c), b !== null && Ec(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Yc(a, b, c) {
        Wc(a) && c.delete(b);
      }
      function Zc() {
        Ic = false;
        Kc !== null && Wc(Kc) && (Kc = null);
        Lc !== null && Wc(Lc) && (Lc = null);
        Mc !== null && Wc(Mc) && (Mc = null);
        Nc.forEach(Yc);
        Oc.forEach(Yc);
      }
      function $c(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
      }
      function ad(a) {
        function b(b2) {
          return $c(b2, a);
        }
        if (0 < Jc.length) {
          $c(Jc[0], a);
          for (var c = 1; c < Jc.length; c++) {
            var d = Jc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        Kc !== null && $c(Kc, a);
        Lc !== null && $c(Lc, a);
        Mc !== null && $c(Mc, a);
        Nc.forEach(b);
        Oc.forEach(b);
        for (c = 0; c < Pc.length; c++)
          d = Pc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Pc.length && (c = Pc[0], c.blockedOn === null); )
          Uc(c), c.blockedOn === null && Pc.shift();
      }
      var bd = ta.ReactCurrentBatchConfig;
      var cd = true;
      function dd(a, b, c, d) {
        var e = C, f = bd.transition;
        bd.transition = null;
        try {
          C = 1, ed(a, b, c, d);
        } finally {
          C = e, bd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        var e = C, f = bd.transition;
        bd.transition = null;
        try {
          C = 4, ed(a, b, c, d);
        } finally {
          C = e, bd.transition = f;
        }
      }
      function ed(a, b, c, d) {
        if (cd) {
          var e = Xc(a, b, c, d);
          if (e === null)
            gd(a, b, d, hd, c), Rc(a, d);
          else if (Tc(e, a, b, c, d))
            d.stopPropagation();
          else if (Rc(a, d), b & 4 && -1 < Qc.indexOf(a)) {
            for (; e !== null; ) {
              var f = Bb(e);
              f !== null && Dc(f);
              f = Xc(a, b, c, d);
              f === null && gd(a, b, d, hd, c);
              if (f === e)
                break;
              e = f;
            }
            e !== null && d.stopPropagation();
          } else
            gd(a, b, d, null, c);
        }
      }
      var hd = null;
      function Xc(a, b, c, d) {
        hd = null;
        a = wb(d);
        a = Vc(a);
        if (a !== null)
          if (b = Ub(a), b === null)
            a = null;
          else if (c = b.tag, c === 13) {
            a = Vb(b);
            if (a !== null)
              return a;
            a = null;
          } else if (c === 3) {
            if (b.stateNode.current.memoizedState.isDehydrated)
              return b.tag === 3 ? b.stateNode.containerInfo : null;
            a = null;
          } else
            b !== a && (a = null);
        hd = a;
        return null;
      }
      function id(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (dc()) {
              case ec:
                return 1;
              case fc:
                return 4;
              case gc:
              case hc:
                return 16;
              case ic:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var jd = null;
      var kd = null;
      var ld = null;
      function md() {
        if (ld)
          return ld;
        var a, b = kd, c = b.length, d, e = "value" in jd ? jd.value : jd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++)
          ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
          ;
        return ld = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function nd(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
        a === 10 && (a = 13);
        return 32 <= a || a === 13 ? a : 0;
      }
      function od() {
        return true;
      }
      function pd() {
        return false;
      }
      function qd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a)
            a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? od : pd;
          this.isPropagationStopped = pd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = od);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = od);
        }, persist: function() {
        }, isPersistent: od });
        return b;
      }
      var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var sd = qd(rd);
      var td = A({}, rd, { view: 0, detail: 0 });
      var ud = qd(td);
      var vd;
      var wd;
      var xd;
      var zd = A({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a) {
        return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a)
          return a.movementX;
        a !== xd && (xd && a.type === "mousemove" ? (vd = a.screenX - xd.screenX, wd = a.screenY - xd.screenY) : wd = vd = 0, xd = a);
        return vd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : wd;
      } });
      var Ad = qd(zd);
      var Bd = A({}, zd, { dataTransfer: 0 });
      var Cd = qd(Bd);
      var Dd = A({}, td, { relatedTarget: 0 });
      var Ed = qd(Dd);
      var Fd = A({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Gd = qd(Fd);
      var Hd = A({}, rd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Id = qd(Hd);
      var Jd = A({}, rd, { data: 0 });
      var Kd = qd(Jd);
      var Ld = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Md = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Od(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Nd[a]) ? !!b[a] : false;
      }
      function yd() {
        return Od;
      }
      var Pd = A({}, td, { key: function(a) {
        if (a.key) {
          var b = Ld[a.key] || a.key;
          if (b !== "Unidentified")
            return b;
        }
        return a.type === "keypress" ? (a = nd(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Md[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a) {
        return a.type === "keypress" ? nd(a) : 0;
      }, keyCode: function(a) {
        return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
      }, which: function(a) {
        return a.type === "keypress" ? nd(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
      } });
      var Qd = qd(Pd);
      var Rd = A({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Sd = qd(Rd);
      var Td = A({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd });
      var Ud = qd(Td);
      var Vd = A({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Wd = qd(Vd);
      var Xd = A({}, zd, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Yd = qd(Xd);
      var Zd = [9, 13, 27, 32];
      var $d = ia && "CompositionEvent" in window;
      var ae = null;
      ia && "documentMode" in document && (ae = document.documentMode);
      var be = ia && "TextEvent" in window && !ae;
      var ce = ia && (!$d || ae && 8 < ae && 11 >= ae);
      var de = String.fromCharCode(32);
      var ee = false;
      function fe(a, b) {
        switch (a) {
          case "keyup":
            return Zd.indexOf(b.keyCode) !== -1;
          case "keydown":
            return b.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function ge(a) {
        a = a.detail;
        return typeof a === "object" && "data" in a ? a.data : null;
      }
      var he = false;
      function ie(a, b) {
        switch (a) {
          case "compositionend":
            return ge(b);
          case "keypress":
            if (b.which !== 32)
              return null;
            ee = true;
            return de;
          case "textInput":
            return a = b.data, a === de && ee ? null : a;
          default:
            return null;
        }
      }
      function je(a, b) {
        if (he)
          return a === "compositionend" || !$d && fe(a, b) ? (a = md(), ld = kd = jd = null, he = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return ce && b.locale !== "ko" ? null : b.data;
          default:
            return null;
        }
      }
      var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function le(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b === "input" ? !!ke[a.type] : b === "textarea" ? true : false;
      }
      function me(a, b, c, d) {
        Db(d);
        b = ne(b, "onChange");
        0 < b.length && (c = new sd("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var oe = null;
      var pe = null;
      function qe(a) {
        re(a, 0);
      }
      function se(a) {
        var b = te(a);
        if (Va(b))
          return a;
      }
      function ue(a, b) {
        if (a === "change")
          return b;
      }
      var ve = false;
      if (ia) {
        if (ia) {
          xe = "oninput" in document;
          if (!xe) {
            ye = document.createElement("div");
            ye.setAttribute("oninput", "return;");
            xe = typeof ye.oninput === "function";
          }
          we = xe;
        } else
          we = false;
        ve = we && (!document.documentMode || 9 < document.documentMode);
      }
      var we;
      var xe;
      var ye;
      function ze() {
        oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
      }
      function Ae(a) {
        if (a.propertyName === "value" && se(pe)) {
          var b = [];
          me(b, pe, a, wb(a));
          Ib(qe, b);
        }
      }
      function Be(a, b, c) {
        a === "focusin" ? (ze(), oe = b, pe = c, oe.attachEvent("onpropertychange", Ae)) : a === "focusout" && ze();
      }
      function Ce(a) {
        if (a === "selectionchange" || a === "keyup" || a === "keydown")
          return se(pe);
      }
      function De(a, b) {
        if (a === "click")
          return se(b);
      }
      function Ee(a, b) {
        if (a === "input" || a === "change")
          return se(b);
      }
      function Fe(a, b) {
        return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var Ge = typeof Object.is === "function" ? Object.is : Fe;
      function He(a, b) {
        if (Ge(a, b))
          return true;
        if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
          return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length)
          return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !Ge(a[e], b[e]))
            return false;
        }
        return true;
      }
      function Ie(a) {
        for (; a && a.firstChild; )
          a = a.firstChild;
        return a;
      }
      function Je(a, b) {
        var c = Ie(a);
        a = 0;
        for (var d; c; ) {
          if (c.nodeType === 3) {
            d = a + c.textContent.length;
            if (a <= b && d >= b)
              return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Ie(c);
        }
      }
      function Ke(a, b) {
        return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Ke(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Le() {
        for (var a = window, b = Wa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = typeof b.contentWindow.location.href === "string";
          } catch (d) {
            c = false;
          }
          if (c)
            a = b.contentWindow;
          else
            break;
          b = Wa(a.document);
        }
        return b;
      }
      function Me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
      }
      function Ne(a) {
        var b = Le(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Ke(c.ownerDocument.documentElement, c)) {
          if (d !== null && Me(c)) {
            if (b = d.start, a = d.end, a === void 0 && (a = b), "selectionStart" in c)
              c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = d.end === void 0 ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Je(c, f);
              var g = Je(c, d);
              e && g && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; )
            a.nodeType === 1 && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          typeof c.focus === "function" && c.focus();
          for (c = 0; c < b.length; c++)
            a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Oe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Pe = null;
      var Qe = null;
      var Re = null;
      var Se = false;
      function Te(a, b, c) {
        var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
        Se || Pe == null || Pe !== Wa(d) || (d = Pe, "selectionStart" in d && Me(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Re && He(Re, d) || (Re = d, d = ne(Qe, "onSelect"), 0 < d.length && (b = new sd("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Pe)));
      }
      function Ue(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") };
      var We = {};
      var Xe = {};
      ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
      function Ye(a) {
        if (We[a])
          return We[a];
        if (!Ve[a])
          return a;
        var b = Ve[a], c;
        for (c in b)
          if (b.hasOwnProperty(c) && c in Xe)
            return We[a] = b[c];
        return a;
      }
      var Ze = Ye("animationend");
      var $e = Ye("animationiteration");
      var af = Ye("animationstart");
      var bf = Ye("transitionend");
      var cf = /* @__PURE__ */ new Map();
      var df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ef(a, b) {
        cf.set(a, b);
        fa(b, [a]);
      }
      for (ff = 0; ff < df.length; ff++) {
        gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
        ef(hf, "on" + jf);
      }
      var gf;
      var hf;
      var jf;
      var ff;
      ef(Ze, "onAnimationEnd");
      ef($e, "onAnimationIteration");
      ef(af, "onAnimationStart");
      ef("dblclick", "onDoubleClick");
      ef("focusin", "onFocus");
      ef("focusout", "onBlur");
      ef(bf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
      function mf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Tb(d, b, void 0, a);
        a.currentTarget = null;
      }
      function re(a, b) {
        b = (b & 4) !== 0;
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b)
              for (var g = d.length - 1; 0 <= g; g--) {
                var h2 = d[g], k = h2.instance, l = h2.currentTarget;
                h2 = h2.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                mf(e, h2, l);
                f = k;
              }
            else
              for (g = 0; g < d.length; g++) {
                h2 = d[g];
                k = h2.instance;
                l = h2.currentTarget;
                h2 = h2.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                mf(e, h2, l);
                f = k;
              }
          }
        }
        if (Pb)
          throw a = Qb, Pb = false, Qb = null, a;
      }
      function D(a, b) {
        var c = b[nf];
        c === void 0 && (c = b[nf] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (of(b, a, 2, false), c.add(d));
      }
      function pf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        of(c, a, d, b);
      }
      var qf = "_reactListening" + Math.random().toString(36).slice(2);
      function rf(a) {
        if (!a[qf]) {
          a[qf] = true;
          da.forEach(function(b2) {
            b2 !== "selectionchange" && (lf.has(b2) || pf(b2, false, a), pf(b2, true, a));
          });
          var b = a.nodeType === 9 ? a : a.ownerDocument;
          b === null || b[qf] || (b[qf] = true, pf("selectionchange", false, b));
        }
      }
      function of(a, b, c, d) {
        switch (id(b)) {
          case 1:
            var e = dd;
            break;
          case 4:
            e = fd;
            break;
          default:
            e = ed;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Kb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
        d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function gd(a, b, c, d, e) {
        var f = d;
        if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
          a:
            for (; ; ) {
              if (d === null)
                return;
              var g = d.tag;
              if (g === 3 || g === 4) {
                var h2 = d.stateNode.containerInfo;
                if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
                  break;
                if (g === 4)
                  for (g = d.return; g !== null; ) {
                    var k = g.tag;
                    if (k === 3 || k === 4) {
                      if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                        return;
                    }
                    g = g.return;
                  }
                for (; h2 !== null; ) {
                  g = Vc(h2);
                  if (g === null)
                    return;
                  k = g.tag;
                  if (k === 5 || k === 6) {
                    d = f = g;
                    continue a;
                  }
                  h2 = h2.parentNode;
                }
              }
              d = d.return;
            }
        Ib(function() {
          var d2 = f, e2 = wb(c), g2 = [];
          a: {
            var h22 = cf.get(a);
            if (h22 !== void 0) {
              var k2 = sd, m = a;
              switch (a) {
                case "keypress":
                  if (nd(c) === 0)
                    break a;
                case "keydown":
                case "keyup":
                  k2 = Qd;
                  break;
                case "focusin":
                  m = "focus";
                  k2 = Ed;
                  break;
                case "focusout":
                  m = "blur";
                  k2 = Ed;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Ed;
                  break;
                case "click":
                  if (c.button === 2)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Ad;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Cd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Ud;
                  break;
                case Ze:
                case $e:
                case af:
                  k2 = Gd;
                  break;
                case bf:
                  k2 = Wd;
                  break;
                case "scroll":
                  k2 = ud;
                  break;
                case "wheel":
                  k2 = Yd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Id;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Sd;
              }
              var w = (b & 4) !== 0, J = !w && a === "scroll", v = w ? h22 !== null ? h22 + "Capture" : null : h22;
              w = [];
              for (var x = d2, r; x !== null; ) {
                r = x;
                var F = r.stateNode;
                r.tag === 5 && F !== null && (r = F, v !== null && (F = Jb(x, v), F != null && w.push(sf(x, F, r))));
                if (J)
                  break;
                x = x.return;
              }
              0 < w.length && (h22 = new k2(h22, m, null, c, e2), g2.push({ event: h22, listeners: w }));
            }
          }
          if ((b & 7) === 0) {
            a: {
              h22 = a === "mouseover" || a === "pointerover";
              k2 = a === "mouseout" || a === "pointerout";
              if (h22 && c !== vb && (m = c.relatedTarget || c.fromElement) && (Vc(m) || m[tf]))
                break a;
              if (k2 || h22) {
                h22 = e2.window === e2 ? e2 : (h22 = e2.ownerDocument) ? h22.defaultView || h22.parentWindow : window;
                if (k2) {
                  if (m = c.relatedTarget || c.toElement, k2 = d2, m = m ? Vc(m) : null, m !== null && (J = Ub(m), m !== J || m.tag !== 5 && m.tag !== 6))
                    m = null;
                } else
                  k2 = null, m = d2;
                if (k2 !== m) {
                  w = Ad;
                  F = "onMouseLeave";
                  v = "onMouseEnter";
                  x = "mouse";
                  if (a === "pointerout" || a === "pointerover")
                    w = Sd, F = "onPointerLeave", v = "onPointerEnter", x = "pointer";
                  J = k2 == null ? h22 : te(k2);
                  r = m == null ? h22 : te(m);
                  h22 = new w(F, x + "leave", k2, c, e2);
                  h22.target = J;
                  h22.relatedTarget = r;
                  F = null;
                  Vc(e2) === d2 && (w = new w(v, x + "enter", m, c, e2), w.target = r, w.relatedTarget = J, F = w);
                  J = F;
                  if (k2 && m)
                    b: {
                      w = k2;
                      v = m;
                      x = 0;
                      for (r = w; r; r = uf(r))
                        x++;
                      r = 0;
                      for (F = v; F; F = uf(F))
                        r++;
                      for (; 0 < x - r; )
                        w = uf(w), x--;
                      for (; 0 < r - x; )
                        v = uf(v), r--;
                      for (; x--; ) {
                        if (w === v || v !== null && w === v.alternate)
                          break b;
                        w = uf(w);
                        v = uf(v);
                      }
                      w = null;
                    }
                  else
                    w = null;
                  k2 !== null && vf(g2, h22, k2, w, false);
                  m !== null && J !== null && vf(g2, J, m, w, true);
                }
              }
            }
            a: {
              h22 = d2 ? te(d2) : window;
              k2 = h22.nodeName && h22.nodeName.toLowerCase();
              if (k2 === "select" || k2 === "input" && h22.type === "file")
                var Z = ue;
              else if (le(h22))
                if (ve)
                  Z = Ee;
                else {
                  Z = Ce;
                  var ya = Be;
                }
              else
                (k2 = h22.nodeName) && k2.toLowerCase() === "input" && (h22.type === "checkbox" || h22.type === "radio") && (Z = De);
              if (Z && (Z = Z(a, d2))) {
                me(g2, Z, c, e2);
                break a;
              }
              ya && ya(a, h22, d2);
              a === "focusout" && (ya = h22._wrapperState) && ya.controlled && h22.type === "number" && bb(h22, "number", h22.value);
            }
            ya = d2 ? te(d2) : window;
            switch (a) {
              case "focusin":
                if (le(ya) || ya.contentEditable === "true")
                  Pe = ya, Qe = d2, Re = null;
                break;
              case "focusout":
                Re = Qe = Pe = null;
                break;
              case "mousedown":
                Se = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Se = false;
                Te(g2, c, e2);
                break;
              case "selectionchange":
                if (Oe)
                  break;
              case "keydown":
              case "keyup":
                Te(g2, c, e2);
            }
            var ab;
            if ($d)
              b: {
                switch (a) {
                  case "compositionstart":
                    var ca = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ca = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ca = "onCompositionUpdate";
                    break b;
                }
                ca = void 0;
              }
            else
              he ? fe(a, c) && (ca = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (ca = "onCompositionStart");
            ca && (ce && c.locale !== "ko" && (he || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he && (ab = md()) : (jd = e2, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d2, ca), 0 < ya.length && (ca = new Kd(ca, a, null, c, e2), g2.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge(c), ab !== null && (ca.data = ab))));
            if (ab = be ? ie(a, c) : je(a, c))
              d2 = ne(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Kd("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = ab);
          }
          re(g2, b);
        });
      }
      function sf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function ne(a, b) {
        for (var c = b + "Capture", d = []; a !== null; ) {
          var e = a, f = e.stateNode;
          e.tag === 5 && f !== null && (e = f, f = Jb(a, c), f != null && d.unshift(sf(a, f, e)), f = Jb(a, b), f != null && d.push(sf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function uf(a) {
        if (a === null)
          return null;
        do
          a = a.return;
        while (a && a.tag !== 5);
        return a ? a : null;
      }
      function vf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; c !== null && c !== d; ) {
          var h2 = c, k = h2.alternate, l = h2.stateNode;
          if (k !== null && k === d)
            break;
          h2.tag === 5 && l !== null && (h2 = l, e ? (k = Jb(c, f), k != null && g.unshift(sf(c, k, h2))) : e || (k = Jb(c, f), k != null && g.push(sf(c, k, h2))));
          c = c.return;
        }
        g.length !== 0 && a.push({ event: b, listeners: g });
      }
      var wf = /\r\n?/g;
      var xf = /\u0000|\uFFFD/g;
      function yf(a) {
        return (typeof a === "string" ? a : "" + a).replace(wf, "\n").replace(xf, "");
      }
      function zf(a, b, c) {
        b = yf(b);
        if (yf(a) !== b && c)
          throw Error(p2(425));
      }
      function Af() {
      }
      var Bf = null;
      var Cf = null;
      function Df(a, b) {
        return a === "textarea" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
      }
      var Ef = typeof setTimeout === "function" ? setTimeout : void 0;
      var Ff = typeof clearTimeout === "function" ? clearTimeout : void 0;
      var Gf = typeof Promise === "function" ? Promise : void 0;
      var If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a) {
        return Gf.resolve(null).then(a).catch(Hf);
      } : Ef;
      function Hf(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Jf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && e.nodeType === 8)
            if (c = e.data, c === "/$") {
              if (d === 0) {
                a.removeChild(e);
                ad(b);
                return;
              }
              d--;
            } else
              c !== "$" && c !== "$?" && c !== "$!" || d++;
          c = e;
        } while (c);
        ad(b);
      }
      function Kf(a) {
        for (; a != null; a = a.nextSibling) {
          var b = a.nodeType;
          if (b === 1 || b === 3)
            break;
          if (b === 8) {
            b = a.data;
            if (b === "$" || b === "$!" || b === "$?")
              break;
            if (b === "/$")
              return null;
          }
        }
        return a;
      }
      function Lf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (a.nodeType === 8) {
            var c = a.data;
            if (c === "$" || c === "$!" || c === "$?") {
              if (b === 0)
                return a;
              b--;
            } else
              c === "/$" && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Mf = Math.random().toString(36).slice(2);
      var Nf = "__reactFiber$" + Mf;
      var Of = "__reactProps$" + Mf;
      var tf = "__reactContainer$" + Mf;
      var nf = "__reactEvents$" + Mf;
      var Pf = "__reactListeners$" + Mf;
      var Qf = "__reactHandles$" + Mf;
      function Vc(a) {
        var b = a[Nf];
        if (b)
          return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[tf] || c[Nf]) {
            c = b.alternate;
            if (b.child !== null || c !== null && c.child !== null)
              for (a = Lf(a); a !== null; ) {
                if (c = a[Nf])
                  return c;
                a = Lf(a);
              }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Bb(a) {
        a = a[Nf] || a[tf];
        return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
      }
      function te(a) {
        if (a.tag === 5 || a.tag === 6)
          return a.stateNode;
        throw Error(p2(33));
      }
      function Cb(a) {
        return a[Of] || null;
      }
      var Rf = [];
      var Sf = -1;
      function Tf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Sf || (a.current = Rf[Sf], Rf[Sf] = null, Sf--);
      }
      function G(a, b) {
        Sf++;
        Rf[Sf] = a.current;
        a.current = b;
      }
      var Uf = {};
      var H = Tf(Uf);
      var Vf = Tf(false);
      var Wf = Uf;
      function Xf(a, b) {
        var c = a.type.contextTypes;
        if (!c)
          return Uf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c)
          e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Yf(a) {
        a = a.childContextTypes;
        return a !== null && a !== void 0;
      }
      function Zf() {
        E(Vf);
        E(H);
      }
      function $f(a, b, c) {
        if (H.current !== Uf)
          throw Error(p2(168));
        G(H, b);
        G(Vf, c);
      }
      function ag(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if (typeof d.getChildContext !== "function")
          return c;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in b))
            throw Error(p2(108, Qa(a) || "Unknown", e));
        return A({}, c, d);
      }
      function bg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Uf;
        Wf = H.current;
        G(H, a);
        G(Vf, Vf.current);
        return true;
      }
      function cg(a, b, c) {
        var d = a.stateNode;
        if (!d)
          throw Error(p2(169));
        c ? (a = ag(a, b, Wf), d.__reactInternalMemoizedMergedChildContext = a, E(Vf), E(H), G(H, a)) : E(Vf);
        G(Vf, c);
      }
      var dg = null;
      var eg = false;
      var fg = false;
      function gg(a) {
        dg === null ? dg = [a] : dg.push(a);
      }
      function hg(a) {
        eg = true;
        gg(a);
      }
      function ig() {
        if (!fg && dg !== null) {
          fg = true;
          var a = 0, b = C;
          try {
            var c = dg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (d !== null);
            }
            dg = null;
            eg = false;
          } catch (e) {
            throw dg !== null && (dg = dg.slice(a + 1)), $b(ec, ig), e;
          } finally {
            C = b, fg = false;
          }
        }
        return null;
      }
      var jg = ta.ReactCurrentBatchConfig;
      function kg(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a)
            b[c] === void 0 && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      var lg = Tf(null);
      var mg = null;
      var ng = null;
      var og = null;
      function pg() {
        og = ng = mg = null;
      }
      function qg(a) {
        var b = lg.current;
        E(lg);
        a._currentValue = b;
      }
      function rg(a, b, c) {
        for (; a !== null; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, d !== null && (d.childLanes |= b)) : d !== null && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c)
            break;
          a = a.return;
        }
      }
      function sg(a, b) {
        mg = a;
        og = ng = null;
        a = a.dependencies;
        a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (tg = true), a.firstContext = null);
      }
      function ug(a) {
        var b = a._currentValue;
        if (og !== a)
          if (a = { context: a, memoizedValue: b, next: null }, ng === null) {
            if (mg === null)
              throw Error(p2(308));
            ng = a;
            mg.dependencies = { lanes: 0, firstContext: a };
          } else
            ng = ng.next = a;
        return b;
      }
      var vg = null;
      var wg = false;
      function xg(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function yg(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function zg(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function Ag(a, b) {
        var c = a.updateQueue;
        c !== null && (c = c.shared, Bg(a) ? (a = c.interleaved, a === null ? (b.next = b, vg === null ? vg = [c] : vg.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, a === null ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
      }
      function Cg(a, b, c) {
        b = b.updateQueue;
        if (b !== null && (b = b.shared, (c & 4194240) !== 0)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Bc(a, c);
        }
      }
      function Dg(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (d !== null && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (c !== null) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              f === null ? e = f = g : f = f.next = g;
              c = c.next;
            } while (c !== null);
            f === null ? e = f = b : f = f.next = b;
          } else
            e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        a === null ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function Eg(a, b, c, d) {
        var e = a.updateQueue;
        wg = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h2 = e.shared.pending;
        if (h2 !== null) {
          e.shared.pending = null;
          var k = h2, l = k.next;
          k.next = null;
          g === null ? f = l : g.next = l;
          g = k;
          var n = a.alternate;
          n !== null && (n = n.updateQueue, h2 = n.lastBaseUpdate, h2 !== g && (h2 === null ? n.firstBaseUpdate = l : h2.next = l, n.lastBaseUpdate = k));
        }
        if (f !== null) {
          var u = e.baseState;
          g = 0;
          n = l = k = null;
          h2 = f;
          do {
            var q = h2.lane, y = h2.eventTime;
            if ((d & q) === q) {
              n !== null && (n = n.next = {
                eventTime: y,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var m = a, w = h2;
                q = b;
                y = c;
                switch (w.tag) {
                  case 1:
                    m = w.payload;
                    if (typeof m === "function") {
                      u = m.call(y, u, q);
                      break a;
                    }
                    u = m;
                    break a;
                  case 3:
                    m.flags = m.flags & -65537 | 128;
                  case 0:
                    m = w.payload;
                    q = typeof m === "function" ? m.call(y, u, q) : m;
                    if (q === null || q === void 0)
                      break a;
                    u = A({}, u, q);
                    break a;
                  case 2:
                    wg = true;
                }
              }
              h2.callback !== null && h2.lane !== 0 && (a.flags |= 64, q = e.effects, q === null ? e.effects = [h2] : q.push(h2));
            } else
              y = { eventTime: y, lane: q, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n === null ? (l = n = y, k = u) : n = n.next = y, g |= q;
            h2 = h2.next;
            if (h2 === null)
              if (h2 = e.shared.pending, h2 === null)
                break;
              else
                q = h2, h2 = q.next, q.next = null, e.lastBaseUpdate = q, e.shared.pending = null;
          } while (1);
          n === null && (k = u);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = n;
          b = e.shared.interleaved;
          if (b !== null) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else
            f === null && (e.shared.lanes = 0);
          Fg |= g;
          a.lanes = g;
          a.memoizedState = u;
        }
      }
      function Gg(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (a !== null)
          for (b = 0; b < a.length; b++) {
            var d = a[b], e = d.callback;
            if (e !== null) {
              d.callback = null;
              d = c;
              if (typeof e !== "function")
                throw Error(p2(191, e));
              e.call(d);
            }
          }
      }
      var Hg = new aa.Component().refs;
      function Ig(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = c === null || c === void 0 ? b : A({}, b, c);
        a.memoizedState = c;
        a.lanes === 0 && (a.updateQueue.baseState = c);
      }
      var Mg = { isMounted: function(a) {
        return (a = a._reactInternals) ? Ub(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = Jg(), e = Kg(a), f = zg(d, e);
        f.payload = b;
        c !== void 0 && c !== null && (f.callback = c);
        Ag(a, f);
        b = Lg(a, e, d);
        b !== null && Cg(b, a, e);
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = Jg(), e = Kg(a), f = zg(d, e);
        f.tag = 1;
        f.payload = b;
        c !== void 0 && c !== null && (f.callback = c);
        Ag(a, f);
        b = Lg(a, e, d);
        b !== null && Cg(b, a, e);
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = Jg(), d = Kg(a), e = zg(c, d);
        e.tag = 2;
        b !== void 0 && b !== null && (e.callback = b);
        Ag(a, e);
        b = Lg(a, d, c);
        b !== null && Cg(b, a, d);
      } };
      function Ng(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !He(c, d) || !He(e, f) : true;
      }
      function Og(a, b, c) {
        var d = false, e = Uf;
        var f = b.contextType;
        typeof f === "object" && f !== null ? f = ug(f) : (e = Yf(b) ? Wf : H.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Xf(a, e) : Uf);
        b = new b(c, f);
        a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
        b.updater = Mg;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Pg(a, b, c, d) {
        a = b.state;
        typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
        typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Mg.enqueueReplaceState(b, b.state, null);
      }
      function Qg(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = Hg;
        xg(a);
        var f = b.contextType;
        typeof f === "object" && f !== null ? e.context = ug(f) : (f = Yf(b) ? Wf : H.current, e.context = Xf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        typeof f === "function" && (Ig(a, b, f, c), e.state = a.memoizedState);
        typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Mg.enqueueReplaceState(e, e.state, null), Eg(a, c, e, d), e.state = a.memoizedState);
        typeof e.componentDidMount === "function" && (a.flags |= 4194308);
      }
      var Rg = [];
      var Sg = 0;
      var Tg = null;
      var Ug = 0;
      var Vg = [];
      var Wg = 0;
      var Xg = null;
      var Yg = 1;
      var Zg = "";
      function $g(a, b) {
        Rg[Sg++] = Ug;
        Rg[Sg++] = Tg;
        Tg = a;
        Ug = b;
      }
      function ah(a, b, c) {
        Vg[Wg++] = Yg;
        Vg[Wg++] = Zg;
        Vg[Wg++] = Xg;
        Xg = a;
        var d = Yg;
        a = Zg;
        var e = 32 - nc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - nc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          Yg = 1 << 32 - nc(b) + e | c << e | d;
          Zg = f + a;
        } else
          Yg = 1 << f | c << e | d, Zg = a;
      }
      function bh(a) {
        a.return !== null && ($g(a, 1), ah(a, 1, 0));
      }
      function ch(a) {
        for (; a === Tg; )
          Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
        for (; a === Xg; )
          Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
      }
      var dh = null;
      var eh = null;
      var I = false;
      var fh = null;
      function gh(a, b) {
        var c = hh(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        b === null ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function ih(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return b !== null ? (a.stateNode = b, dh = a, eh = Kf(b.firstChild), true) : false;
          case 6:
            return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, dh = a, eh = null, true) : false;
          case 13:
            return b = b.nodeType !== 8 ? null : b, b !== null ? (c = Xg !== null ? { id: Yg, overflow: Zg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = hh(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, dh = a, eh = null, true) : false;
          default:
            return false;
        }
      }
      function jh(a) {
        return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
      }
      function kh(a) {
        if (I) {
          var b = eh;
          if (b) {
            var c = b;
            if (!ih(a, b)) {
              if (jh(a))
                throw Error(p2(418));
              b = Kf(c.nextSibling);
              var d = dh;
              b && ih(a, b) ? gh(d, c) : (a.flags = a.flags & -4097 | 2, I = false, dh = a);
            }
          } else {
            if (jh(a))
              throw Error(p2(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            dh = a;
          }
        }
      }
      function lh(a) {
        for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
          a = a.return;
        dh = a;
      }
      function mh(a) {
        if (a !== dh)
          return false;
        if (!I)
          return lh(a), I = true, false;
        var b;
        (b = a.tag !== 3) && !(b = a.tag !== 5) && (b = a.type, b = b !== "head" && b !== "body" && !Df(a.type, a.memoizedProps));
        if (b && (b = eh)) {
          if (jh(a)) {
            for (a = eh; a; )
              a = Kf(a.nextSibling);
            throw Error(p2(418));
          }
          for (; b; )
            gh(a, b), b = Kf(b.nextSibling);
        }
        lh(a);
        if (a.tag === 13) {
          a = a.memoizedState;
          a = a !== null ? a.dehydrated : null;
          if (!a)
            throw Error(p2(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (a.nodeType === 8) {
                var c = a.data;
                if (c === "/$") {
                  if (b === 0) {
                    eh = Kf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  c !== "$" && c !== "$!" && c !== "$?" || b++;
              }
              a = a.nextSibling;
            }
            eh = null;
          }
        } else
          eh = dh ? Kf(a.stateNode.nextSibling) : null;
        return true;
      }
      function nh() {
        eh = dh = null;
        I = false;
      }
      function oh(a) {
        fh === null ? fh = [a] : fh.push(a);
      }
      function ph(a, b, c) {
        a = c.ref;
        if (a !== null && typeof a !== "function" && typeof a !== "object") {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (c.tag !== 1)
                throw Error(p2(309));
              var d = c.stateNode;
            }
            if (!d)
              throw Error(p2(147, a));
            var e = d, f = "" + a;
            if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === f)
              return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              b2 === Hg && (b2 = e.refs = {});
              a2 === null ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if (typeof a !== "string")
            throw Error(p2(284));
          if (!c._owner)
            throw Error(p2(290, a));
        }
        return a;
      }
      function qh(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function rh(a) {
        var b = a._init;
        return b(a._payload);
      }
      function sh(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            d2 === null ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a)
            return null;
          for (; d2 !== null; )
            b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
            b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = th(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a)
            return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (d2 !== null)
            return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && b2.alternate === null && (b2.flags |= 2);
          return b2;
        }
        function h2(a2, b2, c2, d2) {
          if (b2 === null || b2.tag !== 6)
            return b2 = uh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === wa)
            return n(a2, b2, c2.props.children, d2, c2.key);
          if (b2 !== null && (b2.elementType === f2 || typeof f2 === "object" && f2 !== null && f2.$$typeof === Ga && rh(f2) === b2.type))
            return d2 = e(b2, c2.props), d2.ref = ph(a2, b2, c2), d2.return = a2, d2;
          d2 = vh(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = ph(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
            return b2 = wh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function n(a2, b2, c2, d2, f2) {
          if (b2 === null || b2.tag !== 7)
            return b2 = xh(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function u(a2, b2, c2) {
          if (typeof b2 === "string" && b2 !== "" || typeof b2 === "number")
            return b2 = uh("" + b2, a2.mode, c2), b2.return = a2, b2;
          if (typeof b2 === "object" && b2 !== null) {
            switch (b2.$$typeof) {
              case ua:
                return c2 = vh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = ph(a2, null, b2), c2.return = a2, c2;
              case va:
                return b2 = wh(b2, a2.mode, c2), b2.return = a2, b2;
              case Ga:
                var d2 = b2._init;
                return u(a2, d2(b2._payload), c2);
            }
            if (db(b2) || Ja(b2))
              return b2 = xh(b2, a2.mode, c2, null), b2.return = a2, b2;
            qh(a2, b2);
          }
          return null;
        }
        function q(a2, b2, c2, d2) {
          var e2 = b2 !== null ? b2.key : null;
          if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
            return e2 !== null ? null : h2(a2, b2, "" + c2, d2);
          if (typeof c2 === "object" && c2 !== null) {
            switch (c2.$$typeof) {
              case ua:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case va:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ga:
                return e2 = c2._init, q(a2, b2, e2(c2._payload), d2);
            }
            if (db(c2) || Ja(c2))
              return e2 !== null ? null : n(a2, b2, c2, d2, null);
            qh(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
            return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
          if (typeof d2 === "object" && d2 !== null) {
            switch (d2.$$typeof) {
              case ua:
                return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case va:
                return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ga:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (db(d2) || Ja(d2))
              return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
            qh(b2, d2);
          }
          return null;
        }
        function m(e2, g2, h22, k2) {
          for (var l2 = null, n2 = null, r = g2, m2 = g2 = 0, x = null; r !== null && m2 < h22.length; m2++) {
            r.index > m2 ? (x = r, r = null) : x = r.sibling;
            var v = q(e2, r, h22[m2], k2);
            if (v === null) {
              r === null && (r = x);
              break;
            }
            a && r && v.alternate === null && b(e2, r);
            g2 = f(v, g2, m2);
            n2 === null ? l2 = v : n2.sibling = v;
            n2 = v;
            r = x;
          }
          if (m2 === h22.length)
            return c(e2, r), I && $g(e2, m2), l2;
          if (r === null) {
            for (; m2 < h22.length; m2++)
              r = u(e2, h22[m2], k2), r !== null && (g2 = f(r, g2, m2), n2 === null ? l2 = r : n2.sibling = r, n2 = r);
            I && $g(e2, m2);
            return l2;
          }
          for (r = d(e2, r); m2 < h22.length; m2++)
            x = y(r, e2, m2, h22[m2], k2), x !== null && (a && x.alternate !== null && r.delete(x.key === null ? m2 : x.key), g2 = f(x, g2, m2), n2 === null ? l2 = x : n2.sibling = x, n2 = x);
          a && r.forEach(function(a2) {
            return b(e2, a2);
          });
          I && $g(e2, m2);
          return l2;
        }
        function w(e2, g2, h22, k2) {
          var l2 = Ja(h22);
          if (typeof l2 !== "function")
            throw Error(p2(150));
          h22 = l2.call(h22);
          if (h22 == null)
            throw Error(p2(151));
          for (var n2 = l2 = null, m2 = g2, r = g2 = 0, x = null, v = h22.next(); m2 !== null && !v.done; r++, v = h22.next()) {
            m2.index > r ? (x = m2, m2 = null) : x = m2.sibling;
            var w2 = q(e2, m2, v.value, k2);
            if (w2 === null) {
              m2 === null && (m2 = x);
              break;
            }
            a && m2 && w2.alternate === null && b(e2, m2);
            g2 = f(w2, g2, r);
            n2 === null ? l2 = w2 : n2.sibling = w2;
            n2 = w2;
            m2 = x;
          }
          if (v.done)
            return c(e2, m2), I && $g(e2, r), l2;
          if (m2 === null) {
            for (; !v.done; r++, v = h22.next())
              v = u(e2, v.value, k2), v !== null && (g2 = f(v, g2, r), n2 === null ? l2 = v : n2.sibling = v, n2 = v);
            I && $g(e2, r);
            return l2;
          }
          for (m2 = d(e2, m2); !v.done; r++, v = h22.next())
            v = y(m2, e2, r, v.value, k2), v !== null && (a && v.alternate !== null && m2.delete(v.key === null ? r : v.key), g2 = f(v, g2, r), n2 === null ? l2 = v : n2.sibling = v, n2 = v);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && $g(e2, r);
          return l2;
        }
        function J(a2, d2, f2, h22) {
          typeof f2 === "object" && f2 !== null && f2.type === wa && f2.key === null && (f2 = f2.props.children);
          if (typeof f2 === "object" && f2 !== null) {
            switch (f2.$$typeof) {
              case ua:
                a: {
                  for (var k2 = f2.key, l2 = d2; l2 !== null; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === wa) {
                        if (l2.tag === 7) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga && rh(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = ph(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else
                      b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === wa ? (d2 = xh(f2.props.children, a2.mode, h22, f2.key), d2.return = a2, a2 = d2) : (h22 = vh(f2.type, f2.key, f2.props, null, a2.mode, h22), h22.ref = ph(a2, d2, f2), h22.return = a2, a2 = h22);
                }
                return g(a2);
              case va:
                a: {
                  for (l2 = f2.key; d2 !== null; ) {
                    if (d2.key === l2)
                      if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                        c(a2, d2.sibling);
                        d2 = e(d2, f2.children || []);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      } else {
                        c(a2, d2);
                        break;
                      }
                    else
                      b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = wh(f2, a2.mode, h22);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ga:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h22);
            }
            if (db(f2))
              return m(a2, d2, f2, h22);
            if (Ja(f2))
              return w(a2, d2, f2, h22);
            qh(a2, f2);
          }
          return typeof f2 === "string" && f2 !== "" || typeof f2 === "number" ? (f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = uh(f2, a2.mode, h22), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var yh = sh(true);
      var zh = sh(false);
      var Ah = {};
      var Bh = Tf(Ah);
      var Ch = Tf(Ah);
      var Dh = Tf(Ah);
      function Eh(a) {
        if (a === Ah)
          throw Error(p2(174));
        return a;
      }
      function Fh(a, b) {
        G(Dh, b);
        G(Ch, a);
        G(Bh, Ah);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : kb(null, "");
            break;
          default:
            a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = kb(b, a);
        }
        E(Bh);
        G(Bh, b);
      }
      function Gh() {
        E(Bh);
        E(Ch);
        E(Dh);
      }
      function Hh(a) {
        Eh(Dh.current);
        var b = Eh(Bh.current);
        var c = kb(b, a.type);
        b !== c && (G(Ch, a), G(Bh, c));
      }
      function Ih(a) {
        Ch.current === a && (E(Bh), E(Ch));
      }
      var K = Tf(0);
      function Jh(a) {
        for (var b = a; b !== null; ) {
          if (b.tag === 13) {
            var c = b.memoizedState;
            if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
              return b;
          } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
            if ((b.flags & 128) !== 0)
              return b;
          } else if (b.child !== null) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a)
            break;
          for (; b.sibling === null; ) {
            if (b.return === null || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Kh = [];
      function Lh() {
        for (var a = 0; a < Kh.length; a++)
          Kh[a]._workInProgressVersionPrimary = null;
        Kh.length = 0;
      }
      var Mh = ta.ReactCurrentDispatcher;
      var Nh = ta.ReactCurrentBatchConfig;
      var Oh = 0;
      var L = null;
      var M = null;
      var N = null;
      var Ph = false;
      var Qh = false;
      var Rh = 0;
      var Sh = 0;
      function O() {
        throw Error(p2(321));
      }
      function Th(a, b) {
        if (b === null)
          return false;
        for (var c = 0; c < b.length && c < a.length; c++)
          if (!Ge(a[c], b[c]))
            return false;
        return true;
      }
      function Uh(a, b, c, d, e, f) {
        Oh = f;
        L = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Mh.current = a === null || a.memoizedState === null ? Vh : Wh;
        a = c(d, e);
        if (Qh) {
          f = 0;
          do {
            Qh = false;
            Rh = 0;
            if (25 <= f)
              throw Error(p2(301));
            f += 1;
            N = M = null;
            b.updateQueue = null;
            Mh.current = Xh;
            a = c(d, e);
          } while (Qh);
        }
        Mh.current = Yh;
        b = M !== null && M.next !== null;
        Oh = 0;
        N = M = L = null;
        Ph = false;
        if (b)
          throw Error(p2(300));
        return a;
      }
      function Zh() {
        var a = Rh !== 0;
        Rh = 0;
        return a;
      }
      function $h() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        N === null ? L.memoizedState = N = a : N = N.next = a;
        return N;
      }
      function ai() {
        if (M === null) {
          var a = L.alternate;
          a = a !== null ? a.memoizedState : null;
        } else
          a = M.next;
        var b = N === null ? L.memoizedState : N.next;
        if (b !== null)
          N = b, M = a;
        else {
          if (a === null)
            throw Error(p2(310));
          M = a;
          a = { memoizedState: M.memoizedState, baseState: M.baseState, baseQueue: M.baseQueue, queue: M.queue, next: null };
          N === null ? L.memoizedState = N = a : N = N.next = a;
        }
        return N;
      }
      function bi(a, b) {
        return typeof b === "function" ? b(a) : b;
      }
      function ci(a) {
        var b = ai(), c = b.queue;
        if (c === null)
          throw Error(p2(311));
        c.lastRenderedReducer = a;
        var d = M, e = d.baseQueue, f = c.pending;
        if (f !== null) {
          if (e !== null) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (e !== null) {
          f = e.next;
          d = d.baseState;
          var h2 = g = null, k = null, l = f;
          do {
            var n = l.lane;
            if ((Oh & n) === n)
              k !== null && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var u = {
                lane: n,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              k === null ? (h2 = k = u, g = d) : k = k.next = u;
              L.lanes |= n;
              Fg |= n;
            }
            l = l.next;
          } while (l !== null && l !== f);
          k === null ? g = d : k.next = h2;
          Ge(d, b.memoizedState) || (tg = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (a !== null) {
          e = a;
          do
            f = e.lane, L.lanes |= f, Fg |= f, e = e.next;
          while (e !== a);
        } else
          e === null && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function di(a) {
        var b = ai(), c = b.queue;
        if (c === null)
          throw Error(p2(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (e !== null) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          Ge(f, b.memoizedState) || (tg = true);
          b.memoizedState = f;
          b.baseQueue === null && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function ei() {
      }
      function fi(a, b) {
        var c = L, d = ai(), e = b(), f = !Ge(d.memoizedState, e);
        f && (d.memoizedState = e, tg = true);
        d = d.queue;
        gi(hi.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || N !== null && N.memoizedState.tag & 1) {
          c.flags |= 2048;
          ii(9, ji.bind(null, c, d, e, b), void 0, null);
          if (P === null)
            throw Error(p2(349));
          (Oh & 30) !== 0 || ki(c, b, e);
        }
        return e;
      }
      function ki(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = L.updateQueue;
        b === null ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.stores = [a]) : (c = b.stores, c === null ? b.stores = [a] : c.push(a));
      }
      function ji(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        li(b) && Lg(a, 1, -1);
      }
      function hi(a, b, c) {
        return c(function() {
          li(b) && Lg(a, 1, -1);
        });
      }
      function li(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !Ge(a, c);
        } catch (d) {
          return true;
        }
      }
      function mi(a) {
        var b = $h();
        typeof a === "function" && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ni.bind(null, L, a);
        return [b.memoizedState, a];
      }
      function ii(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = L.updateQueue;
        b === null ? (b = { lastEffect: null, stores: null }, L.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function oi() {
        return ai().memoizedState;
      }
      function pi(a, b, c, d) {
        var e = $h();
        L.flags |= a;
        e.memoizedState = ii(1 | b, c, void 0, d === void 0 ? null : d);
      }
      function qi(a, b, c, d) {
        var e = ai();
        d = d === void 0 ? null : d;
        var f = void 0;
        if (M !== null) {
          var g = M.memoizedState;
          f = g.destroy;
          if (d !== null && Th(d, g.deps)) {
            e.memoizedState = ii(b, c, f, d);
            return;
          }
        }
        L.flags |= a;
        e.memoizedState = ii(1 | b, c, f, d);
      }
      function ri(a, b) {
        return pi(8390656, 8, a, b);
      }
      function gi(a, b) {
        return qi(2048, 8, a, b);
      }
      function si(a, b) {
        return qi(4, 2, a, b);
      }
      function ti(a, b) {
        return qi(4, 4, a, b);
      }
      function ui(a, b) {
        if (typeof b === "function")
          return a = a(), b(a), function() {
            b(null);
          };
        if (b !== null && b !== void 0)
          return a = a(), b.current = a, function() {
            b.current = null;
          };
      }
      function vi(a, b, c) {
        c = c !== null && c !== void 0 ? c.concat([a]) : null;
        return qi(4, 4, ui.bind(null, b, a), c);
      }
      function wi() {
      }
      function xi(a, b) {
        var c = ai();
        b = b === void 0 ? null : b;
        var d = c.memoizedState;
        if (d !== null && b !== null && Th(b, d[1]))
          return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function yi(a, b) {
        var c = ai();
        b = b === void 0 ? null : b;
        var d = c.memoizedState;
        if (d !== null && b !== null && Th(b, d[1]))
          return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function zi(a, b, c) {
        if ((Oh & 21) === 0)
          return a.baseState && (a.baseState = false, tg = true), a.memoizedState = c;
        Ge(c, b) || (c = xc(), L.lanes |= c, Fg |= c, a.baseState = true);
        return b;
      }
      function Ai(a, b) {
        var c = C;
        C = c !== 0 && 4 > c ? c : 4;
        a(true);
        var d = Nh.transition;
        Nh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Nh.transition = d;
        }
      }
      function Bi() {
        return ai().memoizedState;
      }
      function Ci(a, b, c) {
        var d = Kg(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        Di(a) ? Ei(b, c) : (Fi(a, b, c), c = Jg(), a = Lg(a, d, c), a !== null && Gi(a, b, d));
      }
      function ni(a, b, c) {
        var d = Kg(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Di(a))
          Ei(b, e);
        else {
          Fi(a, b, e);
          var f = a.alternate;
          if (a.lanes === 0 && (f === null || f.lanes === 0) && (f = b.lastRenderedReducer, f !== null))
            try {
              var g = b.lastRenderedState, h2 = f(g, c);
              e.hasEagerState = true;
              e.eagerState = h2;
              if (Ge(h2, g))
                return;
            } catch (k) {
            } finally {
            }
          c = Jg();
          a = Lg(a, d, c);
          a !== null && Gi(a, b, d);
        }
      }
      function Di(a) {
        var b = a.alternate;
        return a === L || b !== null && b === L;
      }
      function Ei(a, b) {
        Qh = Ph = true;
        var c = a.pending;
        c === null ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Fi(a, b, c) {
        Bg(a) ? (a = b.interleaved, a === null ? (c.next = c, vg === null ? vg = [b] : vg.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, a === null ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
      }
      function Gi(a, b, c) {
        if ((c & 4194240) !== 0) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Bc(a, c);
        }
      }
      var Yh = { readContext: ug, useCallback: O, useContext: O, useEffect: O, useImperativeHandle: O, useInsertionEffect: O, useLayoutEffect: O, useMemo: O, useReducer: O, useRef: O, useState: O, useDebugValue: O, useDeferredValue: O, useTransition: O, useMutableSource: O, useSyncExternalStore: O, useId: O, unstable_isNewReconciler: false };
      var Vh = { readContext: ug, useCallback: function(a, b) {
        $h().memoizedState = [a, b === void 0 ? null : b];
        return a;
      }, useContext: ug, useEffect: ri, useImperativeHandle: function(a, b, c) {
        c = c !== null && c !== void 0 ? c.concat([a]) : null;
        return pi(4194308, 4, ui.bind(null, b, a), c);
      }, useLayoutEffect: function(a, b) {
        return pi(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return pi(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = $h();
        b = b === void 0 ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = $h();
        b = c !== void 0 ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = Ci.bind(null, L, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = $h();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: mi, useDebugValue: wi, useDeferredValue: function(a) {
        return $h().memoizedState = a;
      }, useTransition: function() {
        var a = mi(false), b = a[0];
        a = Ai.bind(null, a[1]);
        $h().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = L, e = $h();
        if (I) {
          if (c === void 0)
            throw Error(p2(407));
          c = c();
        } else {
          c = b();
          if (P === null)
            throw Error(p2(349));
          (Oh & 30) !== 0 || ki(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        ri(hi.bind(null, d, f, a), [a]);
        d.flags |= 2048;
        ii(9, ji.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = $h(), b = P.identifierPrefix;
        if (I) {
          var c = Zg;
          var d = Yg;
          c = (d & ~(1 << 32 - nc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Rh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else
          c = Sh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Wh = {
        readContext: ug,
        useCallback: xi,
        useContext: ug,
        useEffect: gi,
        useImperativeHandle: vi,
        useInsertionEffect: si,
        useLayoutEffect: ti,
        useMemo: yi,
        useReducer: ci,
        useRef: oi,
        useState: function() {
          return ci(bi);
        },
        useDebugValue: wi,
        useDeferredValue: function(a) {
          var b = ai();
          return zi(b, M.memoizedState, a);
        },
        useTransition: function() {
          var a = ci(bi)[0], b = ai().memoizedState;
          return [a, b];
        },
        useMutableSource: ei,
        useSyncExternalStore: fi,
        useId: Bi,
        unstable_isNewReconciler: false
      };
      var Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
        return di(bi);
      }, useDebugValue: wi, useDeferredValue: function(a) {
        var b = ai();
        return M === null ? b.memoizedState = a : zi(b, M.memoizedState, a);
      }, useTransition: function() {
        var a = di(bi)[0], b = ai().memoizedState;
        return [a, b];
      }, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
      function Hi(a, b) {
        try {
          var c = "", d = b;
          do
            c += Oa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e };
      }
      function Ii(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Ji = typeof WeakMap === "function" ? WeakMap : Map;
      function Ki(a, b, c) {
        c = zg(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Li || (Li = true, Mi = d);
          Ii(a, b);
        };
        return c;
      }
      function Ni(a, b, c) {
        c = zg(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if (typeof d === "function") {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Ii(a, b);
          };
        }
        var f = a.stateNode;
        f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
          Ii(a, b);
          typeof d !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
        });
        return c;
      }
      function Pi(a, b, c) {
        var d = a.pingCache;
        if (d === null) {
          d = a.pingCache = new Ji();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else
          e = d.get(b), e === void 0 && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Qi.bind(null, a, b, c), b.then(a, a));
      }
      function Ri(a) {
        do {
          var b;
          if (b = a.tag === 13)
            b = a.memoizedState, b = b !== null ? b.dehydrated !== null ? true : false : true;
          if (b)
            return a;
          a = a.return;
        } while (a !== null);
        return null;
      }
      function Si(a, b, c, d, e) {
        if ((a.mode & 1) === 0)
          return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b = zg(-1, 1), b.tag = 2, Ag(c, b))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Ti;
      var Ui;
      var Vi;
      var Wi;
      Ti = function(a, b) {
        for (var c = b.child; c !== null; ) {
          if (c.tag === 5 || c.tag === 6)
            a.appendChild(c.stateNode);
          else if (c.tag !== 4 && c.child !== null) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === b)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Ui = function() {
      };
      Vi = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          Eh(Bh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Xa(a, e);
              d = Xa(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = fb(a, e);
              d = fb(a, d);
              f = [];
              break;
            default:
              typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = Af);
          }
          tb(c, d);
          var g;
          c = null;
          for (l in e)
            if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
              if (l === "style") {
                var h2 = e[l];
                for (g in h2)
                  h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
              } else
                l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h2 = e != null ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h2 && (k != null || h2 != null))
              if (l === "style")
                if (h2) {
                  for (g in h2)
                    !h2.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                  for (g in k)
                    k.hasOwnProperty(g) && h2[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                } else
                  c || (f || (f = []), f.push(l, c)), c = k;
              else
                l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, k != null && h2 !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ea.hasOwnProperty(l) ? (k != null && l === "onScroll" && D("scroll", a), f || h2 === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l)
            b.flags |= 4;
        }
      };
      Wi = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Xi(a, b) {
        if (!I)
          switch (a.tailMode) {
            case "hidden":
              b = a.tail;
              for (var c = null; b !== null; )
                b.alternate !== null && (c = b), b = b.sibling;
              c === null ? a.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a.tail;
              for (var d = null; c !== null; )
                c.alternate !== null && (d = c), c = c.sibling;
              d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
          }
      }
      function Q(a) {
        var b = a.alternate !== null && a.alternate.child === a.child, c = 0, d = 0;
        if (b)
          for (var e = a.child; e !== null; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else
          for (e = a.child; e !== null; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Yi(a, b, c) {
        var d = b.pendingProps;
        ch(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Q(b), null;
          case 1:
            return Yf(b.type) && Zf(), Q(b), null;
          case 3:
            d = b.stateNode;
            Gh();
            E(Vf);
            E(H);
            Lh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (a === null || a.child === null)
              mh(b) ? b.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b.flags & 256) === 0 || (b.flags |= 1024, fh !== null && (Zi(fh), fh = null));
            Ui(a, b);
            Q(b);
            return null;
          case 5:
            Ih(b);
            var e = Eh(Dh.current);
            c = b.type;
            if (a !== null && b.stateNode != null)
              Vi(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (b.stateNode === null)
                  throw Error(p2(166));
                Q(b);
                return null;
              }
              a = Eh(Bh.current);
              if (mh(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Nf] = b;
                d[Of] = f;
                a = (b.mode & 1) !== 0;
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < kf.length; e++)
                      D(kf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D("error", d);
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Ya(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    gb(d, f), D("invalid", d);
                }
                tb(c, f);
                e = null;
                for (var g in f)
                  if (f.hasOwnProperty(g)) {
                    var h2 = f[g];
                    g === "children" ? typeof h2 === "string" ? d.textContent !== h2 && (f.suppressHydrationWarning !== true && zf(d.textContent, h2, a), e = ["children", h2]) : typeof h2 === "number" && d.textContent !== "" + h2 && (f.suppressHydrationWarning !== true && zf(d.textContent, h2, a), e = ["children", "" + h2]) : ea.hasOwnProperty(g) && h2 != null && g === "onScroll" && D("scroll", d);
                  }
                switch (c) {
                  case "input":
                    Ua(d);
                    cb(d, f, true);
                    break;
                  case "textarea":
                    Ua(d);
                    ib(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof f.onClick === "function" && (d.onclick = Af);
                }
                d = e;
                b.updateQueue = d;
                d !== null && (b.flags |= 4);
              } else {
                g = e.nodeType === 9 ? e : e.ownerDocument;
                a === "http://www.w3.org/1999/xhtml" && (a = jb(c));
                a === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Nf] = b;
                a[Of] = d;
                Ti(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = ub(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < kf.length; e++)
                        D(kf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D("error", a);
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Ya(a, d);
                      e = Xa(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      gb(a, d);
                      e = fb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  tb(c, e);
                  h2 = e;
                  for (f in h2)
                    if (h2.hasOwnProperty(f)) {
                      var k = h2[f];
                      f === "style" ? rb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && mb(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && nb(a, k) : typeof k === "number" && nb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ea.hasOwnProperty(f) ? k != null && f === "onScroll" && D("scroll", a) : k != null && sa(a, f, k, g));
                    }
                  switch (c) {
                    case "input":
                      Ua(a);
                      cb(a, d, false);
                      break;
                    case "textarea":
                      Ua(a);
                      ib(a);
                      break;
                    case "option":
                      d.value != null && a.setAttribute("value", "" + Ra(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      f != null ? eb(a, !!d.multiple, f, false) : d.defaultValue != null && eb(a, !!d.multiple, d.defaultValue, true);
                      break;
                    default:
                      typeof e.onClick === "function" && (a.onclick = Af);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              b.ref !== null && (b.flags |= 512, b.flags |= 2097152);
            }
            Q(b);
            return null;
          case 6:
            if (a && b.stateNode != null)
              Wi(a, b, a.memoizedProps, d);
            else {
              if (typeof d !== "string" && b.stateNode === null)
                throw Error(p2(166));
              c = Eh(Dh.current);
              Eh(Bh.current);
              if (mh(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Nf] = b;
                if (f = d.nodeValue !== c) {
                  if (a = dh, a !== null)
                    switch (a.tag) {
                      case 3:
                        zf(d.nodeValue, c, (a.mode & 1) !== 0);
                        break;
                      case 5:
                        a.memoizedProps.suppressHydrationWarning !== true && zf(d.nodeValue, c, (a.mode & 1) !== 0);
                    }
                }
                f && (b.flags |= 4);
              } else
                d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Nf] = b, b.stateNode = d;
            }
            Q(b);
            return null;
          case 13:
            E(K);
            d = b.memoizedState;
            if (I && eh !== null && (b.mode & 1) !== 0 && (b.flags & 128) === 0) {
              for (d = eh; d; )
                d = Kf(d.nextSibling);
              nh();
              b.flags |= 98560;
              return b;
            }
            if (d !== null && d.dehydrated !== null) {
              d = mh(b);
              if (a === null) {
                if (!d)
                  throw Error(p2(318));
                d = b.memoizedState;
                d = d !== null ? d.dehydrated : null;
                if (!d)
                  throw Error(p2(317));
                d[Nf] = b;
              } else
                nh(), (b.flags & 128) === 0 && (b.memoizedState = null), b.flags |= 4;
              Q(b);
              return null;
            }
            fh !== null && (Zi(fh), fh = null);
            if ((b.flags & 128) !== 0)
              return b.lanes = c, b;
            d = d !== null;
            c = false;
            a === null ? mh(b) : c = a.memoizedState !== null;
            d !== c && d && (b.child.flags |= 8192, (b.mode & 1) !== 0 && (a === null || (K.current & 1) !== 0 ? R === 0 && (R = 3) : $i()));
            b.updateQueue !== null && (b.flags |= 4);
            Q(b);
            return null;
          case 4:
            return Gh(), Ui(a, b), a === null && rf(b.stateNode.containerInfo), Q(b), null;
          case 10:
            return qg(b.type._context), Q(b), null;
          case 17:
            return Yf(b.type) && Zf(), Q(b), null;
          case 19:
            E(K);
            f = b.memoizedState;
            if (f === null)
              return Q(b), null;
            d = (b.flags & 128) !== 0;
            g = f.rendering;
            if (g === null)
              if (d)
                Xi(f, false);
              else {
                if (R !== 0 || a !== null && (a.flags & 128) !== 0)
                  for (a = b.child; a !== null; ) {
                    g = Jh(a);
                    if (g !== null) {
                      b.flags |= 128;
                      Xi(f, false);
                      d = g.updateQueue;
                      d !== null && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c;
                      for (c = b.child; c !== null; )
                        f = c, a = d, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                      G(K, K.current & 1 | 2);
                      return b.child;
                    }
                    a = a.sibling;
                  }
                f.tail !== null && B() > aj && (b.flags |= 128, d = true, Xi(f, false), b.lanes = 4194304);
              }
            else {
              if (!d)
                if (a = Jh(g), a !== null) {
                  if (b.flags |= 128, d = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Xi(f, true), f.tail === null && f.tailMode === "hidden" && !g.alternate && !I)
                    return Q(b), null;
                } else
                  2 * B() - f.renderingStartTime > aj && c !== 1073741824 && (b.flags |= 128, d = true, Xi(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, c !== null ? c.sibling = g : b.child = g, f.last = g);
            }
            if (f.tail !== null)
              return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = K.current, G(K, d ? c & 1 | 2 : c & 1), b;
            Q(b);
            return null;
          case 22:
          case 23:
            return bj(), d = b.memoizedState !== null, a !== null && a.memoizedState !== null !== d && (b.flags |= 8192), d && (b.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b.tag));
      }
      var dj = ta.ReactCurrentOwner;
      var tg = false;
      function ej(a, b, c, d) {
        b.child = a === null ? zh(b, null, c, d) : yh(b, a.child, c, d);
      }
      function fj(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        sg(b, e);
        d = Uh(a, b, c, d, f, e);
        c = Zh();
        if (a !== null && !tg)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
        I && c && bh(b);
        b.flags |= 1;
        ej(a, b, d, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (a === null) {
          var f = c.type;
          if (typeof f === "function" && !ij(f) && f.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
            return b.tag = 15, b.type = f, jj(a, b, f, d, e);
          a = vh(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if ((a.lanes & e) === 0) {
          var g = f.memoizedProps;
          c = c.compare;
          c = c !== null ? c : He;
          if (c(g, d) && a.ref === b.ref)
            return gj(a, b, e);
        }
        b.flags |= 1;
        a = th(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function jj(a, b, c, d, e) {
        if (a !== null) {
          var f = a.memoizedProps;
          if (He(f, d) && a.ref === b.ref)
            if (tg = false, b.pendingProps = d = f, (a.lanes & e) !== 0)
              (a.flags & 131072) !== 0 && (tg = true);
            else
              return b.lanes = a.lanes, gj(a, b, e);
        }
        return kj(a, b, c, d, e);
      }
      function lj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
        if (d.mode === "hidden")
          if ((b.mode & 1) === 0)
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c;
          else if ((c & 1073741824) !== 0)
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = f !== null ? f.baseLanes : c, G(mj, cj), cj |= d;
          else
            return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(mj, cj), cj |= a, null;
        else
          f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(mj, cj), cj |= d;
        ej(a, b, e, c);
        return b.child;
      }
      function nj(a, b) {
        var c = b.ref;
        if (a === null && c !== null || a !== null && a.ref !== c)
          b.flags |= 512, b.flags |= 2097152;
      }
      function kj(a, b, c, d, e) {
        var f = Yf(c) ? Wf : H.current;
        f = Xf(b, f);
        sg(b, e);
        c = Uh(a, b, c, d, f, e);
        d = Zh();
        if (a !== null && !tg)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, gj(a, b, e);
        I && d && bh(b);
        b.flags |= 1;
        ej(a, b, c, e);
        return b.child;
      }
      function oj(a, b, c, d, e) {
        if (Yf(c)) {
          var f = true;
          bg(b);
        } else
          f = false;
        sg(b, e);
        if (b.stateNode === null)
          a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Og(b, c, d), Qg(b, c, d, e), d = true;
        else if (a === null) {
          var g = b.stateNode, h2 = b.memoizedProps;
          g.props = h2;
          var k = g.context, l = c.contextType;
          typeof l === "object" && l !== null ? l = ug(l) : (l = Yf(c) ? Wf : H.current, l = Xf(b, l));
          var n = c.getDerivedStateFromProps, u = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
          u || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== d || k !== l) && Pg(b, g, d, l);
          wg = false;
          var q = b.memoizedState;
          g.state = q;
          Eg(b, d, g, e);
          k = b.memoizedState;
          h2 !== d || q !== k || Vf.current || wg ? (typeof n === "function" && (Ig(b, c, n, d), k = b.memoizedState), (h2 = wg || Ng(b, c, h2, d, q, k, l)) ? (u || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4194308)) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h2) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          yg(a, b);
          h2 = b.memoizedProps;
          l = b.type === b.elementType ? h2 : kg(b.type, h2);
          g.props = l;
          u = b.pendingProps;
          q = g.context;
          k = c.contextType;
          typeof k === "object" && k !== null ? k = ug(k) : (k = Yf(c) ? Wf : H.current, k = Xf(b, k));
          var y = c.getDerivedStateFromProps;
          (n = typeof y === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== u || q !== k) && Pg(b, g, d, k);
          wg = false;
          q = b.memoizedState;
          g.state = q;
          Eg(b, d, g, e);
          var m = b.memoizedState;
          h2 !== u || q !== m || Vf.current || wg ? (typeof y === "function" && (Ig(b, c, y, d), m = b.memoizedState), (l = wg || Ng(b, c, l, d, q, m, k) || false) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, m, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, m, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 1024)) : (typeof g.componentDidUpdate !== "function" || h2 === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = m), g.props = d, g.state = m, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h2 === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return pj(a, b, c, d, f, e);
      }
      function pj(a, b, c, d, e, f) {
        nj(a, b);
        var g = (b.flags & 128) !== 0;
        if (!d && !g)
          return e && cg(b, c, false), gj(a, b, f);
        d = b.stateNode;
        dj.current = b;
        var h2 = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
        b.flags |= 1;
        a !== null && g ? (b.child = yh(b, a.child, null, f), b.child = yh(b, null, h2, f)) : ej(a, b, h2, f);
        b.memoizedState = d.state;
        e && cg(b, c, true);
        return b.child;
      }
      function qj(a) {
        var b = a.stateNode;
        b.pendingContext ? $f(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $f(a, b.context, false);
        Fh(a, b.containerInfo);
      }
      function rj(a, b, c, d, e) {
        nh();
        oh(e);
        b.flags |= 256;
        ej(a, b, c, d);
        return b.child;
      }
      var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function tj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function uj(a, b) {
        return { baseLanes: a.baseLanes | b, cachePool: null, transitions: a.transitions };
      }
      function vj(a, b, c) {
        var d = b.pendingProps, e = K.current, f = false, g = (b.flags & 128) !== 0, h2;
        (h2 = g) || (h2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
        if (h2)
          f = true, b.flags &= -129;
        else if (a === null || a.memoizedState !== null)
          e |= 1;
        G(K, e & 1);
        if (a === null) {
          kh(b);
          a = b.memoizedState;
          if (a !== null && (a = a.dehydrated, a !== null))
            return (b.mode & 1) === 0 ? b.lanes = 1 : a.data === "$!" ? b.lanes = 8 : b.lanes = 1073741824, null;
          e = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, e = { mode: "hidden", children: e }, (d & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = e) : f = wj(e, d, 0, null), a = xh(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = tj(c), b.memoizedState = sj, a) : xj(b, e);
        }
        e = a.memoizedState;
        if (e !== null) {
          h2 = e.dehydrated;
          if (h2 !== null) {
            if (g) {
              if (b.flags & 256)
                return b.flags &= -257, yj(a, b, c, Error(p2(422)));
              if (b.memoizedState !== null)
                return b.child = a.child, b.flags |= 128, null;
              f = d.fallback;
              e = b.mode;
              d = wj({ mode: "visible", children: d.children }, e, 0, null);
              f = xh(f, e, c, null);
              f.flags |= 2;
              d.return = b;
              f.return = b;
              d.sibling = f;
              b.child = d;
              (b.mode & 1) !== 0 && yh(b, a.child, null, c);
              b.child.memoizedState = tj(c);
              b.memoizedState = sj;
              return f;
            }
            if ((b.mode & 1) === 0)
              b = yj(a, b, c, null);
            else if (h2.data === "$!")
              b = yj(a, b, c, Error(p2(419)));
            else if (d = (c & a.childLanes) !== 0, tg || d) {
              d = P;
              if (d !== null) {
                switch (c & -c) {
                  case 4:
                    f = 2;
                    break;
                  case 16:
                    f = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    f = 32;
                    break;
                  case 536870912:
                    f = 268435456;
                    break;
                  default:
                    f = 0;
                }
                d = (f & (d.suspendedLanes | c)) !== 0 ? 0 : f;
                d !== 0 && d !== e.retryLane && (e.retryLane = d, Lg(a, d, -1));
              }
              $i();
              b = yj(a, b, c, Error(p2(421)));
            } else
              h2.data === "$?" ? (b.flags |= 128, b.child = a.child, b = zj.bind(null, a), h2._reactRetry = b, b = null) : (c = e.treeContext, eh = Kf(h2.nextSibling), dh = b, I = true, fh = null, c !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c.id, Zg = c.overflow, Xg = b), b = xj(b, b.pendingProps.children), b.flags |= 4096);
            return b;
          }
          if (f)
            return d = Aj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? tj(c) : uj(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
          c = Bj(a, b, d.children, c);
          b.memoizedState = null;
          return c;
        }
        if (f)
          return d = Aj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? tj(c) : uj(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = sj, d;
        c = Bj(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      function xj(a, b) {
        b = wj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function Bj(a, b, c, d) {
        var e = a.child;
        a = e.sibling;
        c = th(e, { mode: "visible", children: c });
        (b.mode & 1) === 0 && (c.lanes = d);
        c.return = b;
        c.sibling = null;
        a !== null && (d = b.deletions, d === null ? (b.deletions = [a], b.flags |= 16) : d.push(a));
        return b.child = c;
      }
      function Aj(a, b, c, d, e) {
        var f = b.mode;
        a = a.child;
        var g = a.sibling, h2 = { mode: "hidden", children: c };
        (f & 1) === 0 && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h2, b.deletions = null) : (c = th(a, h2), c.subtreeFlags = a.subtreeFlags & 14680064);
        g !== null ? d = th(g, d) : (d = xh(d, f, e, null), d.flags |= 2);
        d.return = b;
        c.return = b;
        c.sibling = d;
        b.child = c;
        return d;
      }
      function yj(a, b, c, d) {
        d !== null && oh(d);
        yh(b, a.child, null, c);
        a = xj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function Cj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        d !== null && (d.lanes |= b);
        rg(a.return, b, c);
      }
      function Dj(a, b, c, d, e) {
        var f = a.memoizedState;
        f === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function Ej(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        ej(a, b, d.children, c);
        d = K.current;
        if ((d & 2) !== 0)
          d = d & 1 | 2, b.flags |= 128;
        else {
          if (a !== null && (a.flags & 128) !== 0)
            a:
              for (a = b.child; a !== null; ) {
                if (a.tag === 13)
                  a.memoizedState !== null && Cj(a, c, b);
                else if (a.tag === 19)
                  Cj(a, c, b);
                else if (a.child !== null) {
                  a.child.return = a;
                  a = a.child;
                  continue;
                }
                if (a === b)
                  break a;
                for (; a.sibling === null; ) {
                  if (a.return === null || a.return === b)
                    break a;
                  a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
              }
          d &= 1;
        }
        G(K, d);
        if ((b.mode & 1) === 0)
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; c !== null; )
                a = c.alternate, a !== null && Jh(a) === null && (e = c), c = c.sibling;
              c = e;
              c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              Dj(b, false, e, c, f);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; e !== null; ) {
                a = e.alternate;
                if (a !== null && Jh(a) === null) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              Dj(b, true, c, null, f);
              break;
            case "together":
              Dj(b, false, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function gj(a, b, c) {
        a !== null && (b.dependencies = a.dependencies);
        Fg |= b.lanes;
        if ((c & b.childLanes) === 0)
          return null;
        if (a !== null && b.child !== a.child)
          throw Error(p2(153));
        if (b.child !== null) {
          a = b.child;
          c = th(a, a.pendingProps);
          b.child = c;
          for (c.return = b; a.sibling !== null; )
            a = a.sibling, c = c.sibling = th(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function Fj(a, b, c) {
        switch (b.tag) {
          case 3:
            qj(b);
            nh();
            break;
          case 5:
            Hh(b);
            break;
          case 1:
            Yf(b.type) && bg(b);
            break;
          case 4:
            Fh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(lg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (d !== null) {
              if (d.dehydrated !== null)
                return G(K, K.current & 1), b.flags |= 128, null;
              if ((c & b.child.childLanes) !== 0)
                return vj(a, b, c);
              G(K, K.current & 1);
              a = gj(a, b, c);
              return a !== null ? a.sibling : null;
            }
            G(K, K.current & 1);
            break;
          case 19:
            d = (c & b.childLanes) !== 0;
            if ((a.flags & 128) !== 0) {
              if (d)
                return Ej(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(K, K.current);
            if (d)
              break;
            else
              return null;
          case 22:
          case 23:
            return b.lanes = 0, lj(a, b, c);
        }
        return gj(a, b, c);
      }
      function Gj(a, b) {
        ch(b);
        switch (b.tag) {
          case 1:
            return Yf(b.type) && Zf(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return Gh(), E(Vf), E(H), Lh(), a = b.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Ih(b), null;
          case 13:
            E(K);
            a = b.memoizedState;
            if (a !== null && a.dehydrated !== null) {
              if (b.alternate === null)
                throw Error(p2(340));
              nh();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(K), null;
          case 4:
            return Gh(), null;
          case 10:
            return qg(b.type._context), null;
          case 22:
          case 23:
            return bj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Hj = false;
      var S = false;
      var Ij = typeof WeakSet === "function" ? WeakSet : Set;
      var T = null;
      function Jj(a, b) {
        var c = a.ref;
        if (c !== null)
          if (typeof c === "function")
            try {
              c(null);
            } catch (d) {
              U(a, b, d);
            }
          else
            c.current = null;
      }
      function Kj(a, b, c) {
        try {
          c();
        } catch (d) {
          U(a, b, d);
        }
      }
      var Lj = false;
      function Mj(a, b) {
        Bf = cd;
        a = Le();
        if (Me(a)) {
          if ("selectionStart" in a)
            var c = { start: a.selectionStart, end: a.selectionEnd };
          else
            a: {
              c = (c = a.ownerDocument) && c.defaultView || window;
              var d = c.getSelection && c.getSelection();
              if (d && d.rangeCount !== 0) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                  c.nodeType, f.nodeType;
                } catch (Z) {
                  c = null;
                  break a;
                }
                var g = 0, h2 = -1, k = -1, l = 0, n = 0, u = a, q = null;
                b:
                  for (; ; ) {
                    for (var y; ; ) {
                      u !== c || e !== 0 && u.nodeType !== 3 || (h2 = g + e);
                      u !== f || d !== 0 && u.nodeType !== 3 || (k = g + d);
                      u.nodeType === 3 && (g += u.nodeValue.length);
                      if ((y = u.firstChild) === null)
                        break;
                      q = u;
                      u = y;
                    }
                    for (; ; ) {
                      if (u === a)
                        break b;
                      q === c && ++l === e && (h2 = g);
                      q === f && ++n === d && (k = g);
                      if ((y = u.nextSibling) !== null)
                        break;
                      u = q;
                      q = u.parentNode;
                    }
                    u = y;
                  }
                c = h2 === -1 || k === -1 ? null : { start: h2, end: k };
              } else
                c = null;
            }
          c = c || { start: 0, end: 0 };
        } else
          c = null;
        Cf = { focusedElem: a, selectionRange: c };
        cd = false;
        for (T = b; T !== null; )
          if (b = T, a = b.child, (b.subtreeFlags & 1028) !== 0 && a !== null)
            a.return = b, T = a;
          else
            for (; T !== null; ) {
              b = T;
              try {
                var m = b.alternate;
                if ((b.flags & 1024) !== 0)
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (m !== null) {
                        var w = m.memoizedProps, J = m.memoizedState, v = b.stateNode, x = v.getSnapshotBeforeUpdate(b.elementType === b.type ? w : kg(b.type, w), J);
                        v.__reactInternalSnapshotBeforeUpdate = x;
                      }
                      break;
                    case 3:
                      var r = b.stateNode.containerInfo;
                      if (r.nodeType === 1)
                        r.textContent = "";
                      else if (r.nodeType === 9) {
                        var F = r.body;
                        F != null && (F.textContent = "");
                      }
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p2(163));
                  }
              } catch (Z) {
                U(b, b.return, Z);
              }
              a = b.sibling;
              if (a !== null) {
                a.return = b.return;
                T = a;
                break;
              }
              T = b.return;
            }
        m = Lj;
        Lj = false;
        return m;
      }
      function Nj(a, b, c) {
        var d = b.updateQueue;
        d = d !== null ? d.lastEffect : null;
        if (d !== null) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              f !== void 0 && Kj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Oj(a, b) {
        b = b.updateQueue;
        b = b !== null ? b.lastEffect : null;
        if (b !== null) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Pj(a) {
        var b = a.ref;
        if (b !== null) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          typeof b === "function" ? b(a) : b.current = a;
        }
      }
      function Qj(a) {
        var b = a.alternate;
        b !== null && (a.alternate = null, Qj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        a.tag === 5 && (b = a.stateNode, b !== null && (delete b[Nf], delete b[Of], delete b[nf], delete b[Pf], delete b[Qf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Rj(a) {
        return a.tag === 5 || a.tag === 3 || a.tag === 4;
      }
      function Sj(a) {
        a:
          for (; ; ) {
            for (; a.sibling === null; ) {
              if (a.return === null || Rj(a.return))
                return null;
              a = a.return;
            }
            a.sibling.return = a.return;
            for (a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
              if (a.flags & 2)
                continue a;
              if (a.child === null || a.tag === 4)
                continue a;
              else
                a.child.return = a, a = a.child;
            }
            if (!(a.flags & 2))
              return a.stateNode;
          }
      }
      function Tj(a, b, c) {
        var d = a.tag;
        if (d === 5 || d === 6)
          a = a.stateNode, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = Af));
        else if (d !== 4 && (a = a.child, a !== null))
          for (Tj(a, b, c), a = a.sibling; a !== null; )
            Tj(a, b, c), a = a.sibling;
      }
      function Uj(a, b, c) {
        var d = a.tag;
        if (d === 5 || d === 6)
          a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (d !== 4 && (a = a.child, a !== null))
          for (Uj(a, b, c), a = a.sibling; a !== null; )
            Uj(a, b, c), a = a.sibling;
      }
      var V = null;
      var Vj = false;
      function Wj(a, b, c) {
        for (c = c.child; c !== null; )
          Xj(a, b, c), c = c.sibling;
      }
      function Xj(a, b, c) {
        if (kc && typeof kc.onCommitFiberUnmount === "function")
          try {
            kc.onCommitFiberUnmount(jc, c);
          } catch (h2) {
          }
        switch (c.tag) {
          case 5:
            S || Jj(c, b);
          case 6:
            var d = V, e = Vj;
            V = null;
            Wj(a, b, c);
            V = d;
            Vj = e;
            V !== null && (Vj ? (a = V, c = c.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c)) : V.removeChild(c.stateNode));
            break;
          case 18:
            V !== null && (Vj ? (a = V, c = c.stateNode, a.nodeType === 8 ? Jf(a.parentNode, c) : a.nodeType === 1 && Jf(a, c), ad(a)) : Jf(V, c.stateNode));
            break;
          case 4:
            d = V;
            e = Vj;
            V = c.stateNode.containerInfo;
            Vj = true;
            Wj(a, b, c);
            V = d;
            Vj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!S && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                g !== void 0 && ((f & 2) !== 0 ? Kj(c, b, g) : (f & 4) !== 0 && Kj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Wj(a, b, c);
            break;
          case 1:
            if (!S && (Jj(c, b), d = c.stateNode, typeof d.componentWillUnmount === "function"))
              try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
              } catch (h2) {
                U(c, b, h2);
              }
            Wj(a, b, c);
            break;
          case 21:
            Wj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (S = (d = S) || c.memoizedState !== null, Wj(a, b, c), S = d) : Wj(a, b, c);
            break;
          default:
            Wj(a, b, c);
        }
      }
      function Yj(a) {
        var b = a.updateQueue;
        if (b !== null) {
          a.updateQueue = null;
          var c = a.stateNode;
          c === null && (c = a.stateNode = new Ij());
          b.forEach(function(b2) {
            var d = Zj.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ak(a, b) {
        var c = b.deletions;
        if (c !== null)
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            try {
              var f = a, g = b, h2 = g;
              a:
                for (; h2 !== null; ) {
                  switch (h2.tag) {
                    case 5:
                      V = h2.stateNode;
                      Vj = false;
                      break a;
                    case 3:
                      V = h2.stateNode.containerInfo;
                      Vj = true;
                      break a;
                    case 4:
                      V = h2.stateNode.containerInfo;
                      Vj = true;
                      break a;
                  }
                  h2 = h2.return;
                }
              if (V === null)
                throw Error(p2(160));
              Xj(f, g, e);
              V = null;
              Vj = false;
              var k = e.alternate;
              k !== null && (k.return = null);
              e.return = null;
            } catch (l) {
              U(e, b, l);
            }
          }
        if (b.subtreeFlags & 12854)
          for (b = b.child; b !== null; )
            bk(b, a), b = b.sibling;
      }
      function bk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ak(b, a);
            ck(a);
            if (d & 4) {
              try {
                Nj(3, a, a.return), Oj(3, a);
              } catch (m) {
                U(a, a.return, m);
              }
              try {
                Nj(5, a, a.return);
              } catch (m) {
                U(a, a.return, m);
              }
            }
            break;
          case 1:
            ak(b, a);
            ck(a);
            d & 512 && c !== null && Jj(c, c.return);
            break;
          case 5:
            ak(b, a);
            ck(a);
            d & 512 && c !== null && Jj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                nb(e, "");
              } catch (m) {
                U(a, a.return, m);
              }
            }
            if (d & 4 && (e = a.stateNode, e != null)) {
              var f = a.memoizedProps, g = c !== null ? c.memoizedProps : f, h2 = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (k !== null)
                try {
                  h2 === "input" && f.type === "radio" && f.name != null && Za(e, f);
                  ub(h2, g);
                  var l = ub(h2, f);
                  for (g = 0; g < k.length; g += 2) {
                    var n = k[g], u = k[g + 1];
                    n === "style" ? rb(e, u) : n === "dangerouslySetInnerHTML" ? mb(e, u) : n === "children" ? nb(e, u) : sa(e, n, u, l);
                  }
                  switch (h2) {
                    case "input":
                      $a(e, f);
                      break;
                    case "textarea":
                      hb(e, f);
                      break;
                    case "select":
                      var q = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f.multiple;
                      var y = f.value;
                      y != null ? eb(e, !!f.multiple, y, false) : q !== !!f.multiple && (f.defaultValue != null ? eb(e, !!f.multiple, f.defaultValue, true) : eb(e, !!f.multiple, f.multiple ? [] : "", false));
                  }
                  e[Of] = f;
                } catch (m) {
                  U(a, a.return, m);
                }
            }
            break;
          case 6:
            ak(b, a);
            ck(a);
            if (d & 4) {
              if (a.stateNode === null)
                throw Error(p2(162));
              l = a.stateNode;
              n = a.memoizedProps;
              try {
                l.nodeValue = n;
              } catch (m) {
                U(a, a.return, m);
              }
            }
            break;
          case 3:
            ak(b, a);
            ck(a);
            if (d & 4 && c !== null && c.memoizedState.isDehydrated)
              try {
                ad(b.containerInfo);
              } catch (m) {
                U(a, a.return, m);
              }
            break;
          case 4:
            ak(b, a);
            ck(a);
            break;
          case 13:
            ak(b, a);
            ck(a);
            l = a.child;
            l.flags & 8192 && l.memoizedState !== null && (l.alternate === null || l.alternate.memoizedState === null) && (dk = B());
            d & 4 && Yj(a);
            break;
          case 22:
            l = c !== null && c.memoizedState !== null;
            a.mode & 1 ? (S = (n = S) || l, ak(b, a), S = n) : ak(b, a);
            ck(a);
            if (d & 8192) {
              n = a.memoizedState !== null;
              a:
                for (u = null, q = a; ; ) {
                  if (q.tag === 5) {
                    if (u === null) {
                      u = q;
                      try {
                        e = q.stateNode, n ? (f = e.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (h2 = q.stateNode, k = q.memoizedProps.style, g = k !== void 0 && k !== null && k.hasOwnProperty("display") ? k.display : null, h2.style.display = qb("display", g));
                      } catch (m) {
                        U(a, a.return, m);
                      }
                    }
                  } else if (q.tag === 6) {
                    if (u === null)
                      try {
                        q.stateNode.nodeValue = n ? "" : q.memoizedProps;
                      } catch (m) {
                        U(a, a.return, m);
                      }
                  } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === a) && q.child !== null) {
                    q.child.return = q;
                    q = q.child;
                    continue;
                  }
                  if (q === a)
                    break a;
                  for (; q.sibling === null; ) {
                    if (q.return === null || q.return === a)
                      break a;
                    u === q && (u = null);
                    q = q.return;
                  }
                  u === q && (u = null);
                  q.sibling.return = q.return;
                  q = q.sibling;
                }
              if (n && !l && (a.mode & 1) !== 0)
                for (T = a, a = a.child; a !== null; ) {
                  for (l = T = a; T !== null; ) {
                    n = T;
                    u = n.child;
                    switch (n.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Nj(4, n, n.return);
                        break;
                      case 1:
                        Jj(n, n.return);
                        f = n.stateNode;
                        if (typeof f.componentWillUnmount === "function") {
                          q = n;
                          y = n.return;
                          try {
                            e = q, f.props = e.memoizedProps, f.state = e.memoizedState, f.componentWillUnmount();
                          } catch (m) {
                            U(q, y, m);
                          }
                        }
                        break;
                      case 5:
                        Jj(n, n.return);
                        break;
                      case 22:
                        if (n.memoizedState !== null) {
                          ek(l);
                          continue;
                        }
                    }
                    u !== null ? (u.return = n, T = u) : ek(l);
                  }
                  a = a.sibling;
                }
            }
            break;
          case 19:
            ak(b, a);
            ck(a);
            d & 4 && Yj(a);
            break;
          case 21:
            break;
          default:
            ak(b, a), ck(a);
        }
      }
      function ck(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; c !== null; ) {
                if (Rj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (nb(e, ""), d.flags &= -33);
                var f = Sj(a);
                Uj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h2 = Sj(a);
                Tj(a, h2, g);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k) {
            U(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function fk(a, b, c) {
        T = a;
        gk(a, b, c);
      }
      function gk(a, b, c) {
        for (var d = (a.mode & 1) !== 0; T !== null; ) {
          var e = T, f = e.child;
          if (e.tag === 22 && d) {
            var g = e.memoizedState !== null || Hj;
            if (!g) {
              var h2 = e.alternate, k = h2 !== null && h2.memoizedState !== null || S;
              h2 = Hj;
              var l = S;
              Hj = g;
              if ((S = k) && !l)
                for (T = e; T !== null; )
                  g = T, k = g.child, g.tag === 22 && g.memoizedState !== null ? hk(e) : k !== null ? (k.return = g, T = k) : hk(e);
              for (; f !== null; )
                T = f, gk(f, b, c), f = f.sibling;
              T = e;
              Hj = h2;
              S = l;
            }
            ik(a, b, c);
          } else
            (e.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = e, T = f) : ik(a, b, c);
        }
      }
      function ik(a) {
        for (; T !== null; ) {
          var b = T;
          if ((b.flags & 8772) !== 0) {
            var c = b.alternate;
            try {
              if ((b.flags & 8772) !== 0)
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    S || Oj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !S)
                      if (c === null)
                        d.componentDidMount();
                      else {
                        var e = b.elementType === b.type ? c.memoizedProps : kg(b.type, c.memoizedProps);
                        d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f = b.updateQueue;
                    f !== null && Gg(b, f, d);
                    break;
                  case 3:
                    var g = b.updateQueue;
                    if (g !== null) {
                      c = null;
                      if (b.child !== null)
                        switch (b.child.tag) {
                          case 5:
                            c = b.child.stateNode;
                            break;
                          case 1:
                            c = b.child.stateNode;
                        }
                      Gg(b, g, c);
                    }
                    break;
                  case 5:
                    var h2 = b.stateNode;
                    if (c === null && b.flags & 4) {
                      c = h2;
                      var k = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k.autoFocus && c.focus();
                          break;
                        case "img":
                          k.src && (c.src = k.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (b.memoizedState === null) {
                      var l = b.alternate;
                      if (l !== null) {
                        var n = l.memoizedState;
                        if (n !== null) {
                          var u = n.dehydrated;
                          u !== null && ad(u);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                    break;
                  default:
                    throw Error(p2(163));
                }
              S || b.flags & 512 && Pj(b);
            } catch (q) {
              U(b, b.return, q);
            }
          }
          if (b === a) {
            T = null;
            break;
          }
          c = b.sibling;
          if (c !== null) {
            c.return = b.return;
            T = c;
            break;
          }
          T = b.return;
        }
      }
      function ek(a) {
        for (; T !== null; ) {
          var b = T;
          if (b === a) {
            T = null;
            break;
          }
          var c = b.sibling;
          if (c !== null) {
            c.return = b.return;
            T = c;
            break;
          }
          T = b.return;
        }
      }
      function hk(a) {
        for (; T !== null; ) {
          var b = T;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Oj(4, b);
                } catch (k) {
                  U(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if (typeof d.componentDidMount === "function") {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    U(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Pj(b);
                } catch (k) {
                  U(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Pj(b);
                } catch (k) {
                  U(b, g, k);
                }
            }
          } catch (k) {
            U(b, b.return, k);
          }
          if (b === a) {
            T = null;
            break;
          }
          var h2 = b.sibling;
          if (h2 !== null) {
            h2.return = b.return;
            T = h2;
            break;
          }
          T = b.return;
        }
      }
      var jk = Math.ceil;
      var kk = ta.ReactCurrentDispatcher;
      var lk = ta.ReactCurrentOwner;
      var mk = ta.ReactCurrentBatchConfig;
      var W = 0;
      var P = null;
      var X = null;
      var Y = 0;
      var cj = 0;
      var mj = Tf(0);
      var R = 0;
      var nk = null;
      var Fg = 0;
      var ok = 0;
      var pk = 0;
      var qk = null;
      var rk = null;
      var dk = 0;
      var aj = Infinity;
      var sk = null;
      var Li = false;
      var Mi = null;
      var Oi = null;
      var tk = false;
      var uk = null;
      var vk = 0;
      var wk = 0;
      var xk = null;
      var yk = -1;
      var zk = 0;
      function Jg() {
        return (W & 6) !== 0 ? B() : yk !== -1 ? yk : yk = B();
      }
      function Kg(a) {
        if ((a.mode & 1) === 0)
          return 1;
        if ((W & 2) !== 0 && Y !== 0)
          return Y & -Y;
        if (jg.transition !== null)
          return zk === 0 && (zk = xc()), zk;
        a = C;
        if (a !== 0)
          return a;
        a = window.event;
        a = a === void 0 ? 16 : id(a.type);
        return a;
      }
      function Lg(a, b, c) {
        if (50 < wk)
          throw wk = 0, xk = null, Error(p2(185));
        var d = Ak(a, b);
        if (d === null)
          return null;
        zc(d, b, c);
        if ((W & 2) === 0 || d !== P)
          d === P && ((W & 2) === 0 && (ok |= b), R === 4 && Bk(d, Y)), Ck(d, c), b === 1 && W === 0 && (a.mode & 1) === 0 && (aj = B() + 500, eg && ig());
        return d;
      }
      function Ak(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        c !== null && (c.lanes |= b);
        c = a;
        for (a = a.return; a !== null; )
          a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
        return c.tag === 3 ? c.stateNode : null;
      }
      function Bg(a) {
        return (P !== null || vg !== null) && (a.mode & 1) !== 0 && (W & 2) === 0;
      }
      function Ck(a, b) {
        var c = a.callbackNode;
        vc(a, b);
        var d = tc(a, a === P ? Y : 0);
        if (d === 0)
          c !== null && ac(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          c != null && ac(c);
          if (b === 1)
            a.tag === 0 ? hg(Dk.bind(null, a)) : gg(Dk.bind(null, a)), If(function() {
              W === 0 && ig();
            }), c = null;
          else {
            switch (Cc(d)) {
              case 1:
                c = ec;
                break;
              case 4:
                c = fc;
                break;
              case 16:
                c = gc;
                break;
              case 536870912:
                c = ic;
                break;
              default:
                c = gc;
            }
            c = Ek(c, Fk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Fk(a, b) {
        yk = -1;
        zk = 0;
        if ((W & 6) !== 0)
          throw Error(p2(327));
        var c = a.callbackNode;
        if (Gk() && a.callbackNode !== c)
          return null;
        var d = tc(a, a === P ? Y : 0);
        if (d === 0)
          return null;
        if ((d & 30) !== 0 || (d & a.expiredLanes) !== 0 || b)
          b = Hk(a, d);
        else {
          b = d;
          var e = W;
          W |= 2;
          var f = Ik();
          if (P !== a || Y !== b)
            sk = null, aj = B() + 500, Jk(a, b);
          do
            try {
              Kk();
              break;
            } catch (h2) {
              Lk(a, h2);
            }
          while (1);
          pg();
          kk.current = f;
          W = e;
          X !== null ? b = 0 : (P = null, Y = 0, b = R);
        }
        if (b !== 0) {
          b === 2 && (e = wc(a), e !== 0 && (d = e, b = Mk(a, e)));
          if (b === 1)
            throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
          if (b === 6)
            Bk(a, d);
          else {
            e = a.current.alternate;
            if ((d & 30) === 0 && !Nk(e) && (b = Hk(a, d), b === 2 && (f = wc(a), f !== 0 && (d = f, b = Mk(a, f))), b === 1))
              throw c = nk, Jk(a, 0), Bk(a, d), Ck(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Ok(a, rk, sk);
                break;
              case 3:
                Bk(a, d);
                if ((d & 130023424) === d && (b = dk + 500 - B(), 10 < b)) {
                  if (tc(a, 0) !== 0)
                    break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    Jg();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), b);
                  break;
                }
                Ok(a, rk, sk);
                break;
              case 4:
                Bk(a, d);
                if ((d & 4194240) === d)
                  break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - nc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * jk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), d);
                  break;
                }
                Ok(a, rk, sk);
                break;
              case 5:
                Ok(a, rk, sk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Ck(a, B());
        return a.callbackNode === c ? Fk.bind(null, a) : null;
      }
      function Mk(a, b) {
        var c = qk;
        a.current.memoizedState.isDehydrated && (Jk(a, b).flags |= 256);
        a = Hk(a, b);
        a !== 2 && (b = rk, rk = c, b !== null && Zi(b));
        return a;
      }
      function Zi(a) {
        rk === null ? rk = a : rk.push.apply(rk, a);
      }
      function Nk(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (c !== null && (c = c.stores, c !== null))
              for (var d = 0; d < c.length; d++) {
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                  if (!Ge(f(), e))
                    return false;
                } catch (g) {
                  return false;
                }
              }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && c !== null)
            c.return = b, b = c;
          else {
            if (b === a)
              break;
            for (; b.sibling === null; ) {
              if (b.return === null || b.return === a)
                return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Bk(a, b) {
        b &= ~pk;
        b &= ~ok;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - nc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Dk(a) {
        if ((W & 6) !== 0)
          throw Error(p2(327));
        Gk();
        var b = tc(a, 0);
        if ((b & 1) === 0)
          return Ck(a, B()), null;
        var c = Hk(a, b);
        if (a.tag !== 0 && c === 2) {
          var d = wc(a);
          d !== 0 && (b = d, c = Mk(a, d));
        }
        if (c === 1)
          throw c = nk, Jk(a, 0), Bk(a, b), Ck(a, B()), c;
        if (c === 6)
          throw Error(p2(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Ok(a, rk, sk);
        Ck(a, B());
        return null;
      }
      function Pk(a, b) {
        var c = W;
        W |= 1;
        try {
          return a(b);
        } finally {
          W = c, W === 0 && (aj = B() + 500, eg && ig());
        }
      }
      function Qk(a) {
        uk !== null && uk.tag === 0 && (W & 6) === 0 && Gk();
        var b = W;
        W |= 1;
        var c = mk.transition, d = C;
        try {
          if (mk.transition = null, C = 1, a)
            return a();
        } finally {
          C = d, mk.transition = c, W = b, (W & 6) === 0 && ig();
        }
      }
      function bj() {
        cj = mj.current;
        E(mj);
      }
      function Jk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        c !== -1 && (a.timeoutHandle = -1, Ff(c));
        if (X !== null)
          for (c = X.return; c !== null; ) {
            var d = c;
            ch(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                d !== null && d !== void 0 && Zf();
                break;
              case 3:
                Gh();
                E(Vf);
                E(H);
                Lh();
                break;
              case 5:
                Ih(d);
                break;
              case 4:
                Gh();
                break;
              case 13:
                E(K);
                break;
              case 19:
                E(K);
                break;
              case 10:
                qg(d.type._context);
                break;
              case 22:
              case 23:
                bj();
            }
            c = c.return;
          }
        P = a;
        X = a = th(a.current, null);
        Y = cj = b;
        R = 0;
        nk = null;
        pk = ok = Fg = 0;
        rk = qk = null;
        if (vg !== null) {
          for (b = 0; b < vg.length; b++)
            if (c = vg[b], d = c.interleaved, d !== null) {
              c.interleaved = null;
              var e = d.next, f = c.pending;
              if (f !== null) {
                var g = f.next;
                f.next = e;
                d.next = g;
              }
              c.pending = d;
            }
          vg = null;
        }
        return a;
      }
      function Lk(a, b) {
        do {
          var c = X;
          try {
            pg();
            Mh.current = Yh;
            if (Ph) {
              for (var d = L.memoizedState; d !== null; ) {
                var e = d.queue;
                e !== null && (e.pending = null);
                d = d.next;
              }
              Ph = false;
            }
            Oh = 0;
            N = M = L = null;
            Qh = false;
            Rh = 0;
            lk.current = null;
            if (c === null || c.return === null) {
              R = 1;
              nk = b;
              X = null;
              break;
            }
            a: {
              var f = a, g = c.return, h2 = c, k = b;
              b = Y;
              h2.flags |= 32768;
              if (k !== null && typeof k === "object" && typeof k.then === "function") {
                var l = k, n = h2, u = n.tag;
                if ((n.mode & 1) === 0 && (u === 0 || u === 11 || u === 15)) {
                  var q = n.alternate;
                  q ? (n.updateQueue = q.updateQueue, n.memoizedState = q.memoizedState, n.lanes = q.lanes) : (n.updateQueue = null, n.memoizedState = null);
                }
                var y = Ri(g);
                if (y !== null) {
                  y.flags &= -257;
                  Si(y, g, h2, f, b);
                  y.mode & 1 && Pi(f, l, b);
                  b = y;
                  k = l;
                  var m = b.updateQueue;
                  if (m === null) {
                    var w = /* @__PURE__ */ new Set();
                    w.add(k);
                    b.updateQueue = w;
                  } else
                    m.add(k);
                  break a;
                } else {
                  if ((b & 1) === 0) {
                    Pi(f, l, b);
                    $i();
                    break a;
                  }
                  k = Error(p2(426));
                }
              } else if (I && h2.mode & 1) {
                var J = Ri(g);
                if (J !== null) {
                  (J.flags & 65536) === 0 && (J.flags |= 256);
                  Si(J, g, h2, f, b);
                  oh(k);
                  break a;
                }
              }
              f = k;
              R !== 4 && (R = 2);
              qk === null ? qk = [f] : qk.push(f);
              k = Hi(k, h2);
              h2 = g;
              do {
                switch (h2.tag) {
                  case 3:
                    h2.flags |= 65536;
                    b &= -b;
                    h2.lanes |= b;
                    var v = Ki(h2, k, b);
                    Dg(h2, v);
                    break a;
                  case 1:
                    f = k;
                    var x = h2.type, r = h2.stateNode;
                    if ((h2.flags & 128) === 0 && (typeof x.getDerivedStateFromError === "function" || r !== null && typeof r.componentDidCatch === "function" && (Oi === null || !Oi.has(r)))) {
                      h2.flags |= 65536;
                      b &= -b;
                      h2.lanes |= b;
                      var F = Ni(h2, f, b);
                      Dg(h2, F);
                      break a;
                    }
                }
                h2 = h2.return;
              } while (h2 !== null);
            }
            Rk(c);
          } catch (Z) {
            b = Z;
            X === c && c !== null && (X = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Ik() {
        var a = kk.current;
        kk.current = Yh;
        return a === null ? Yh : a;
      }
      function $i() {
        if (R === 0 || R === 3 || R === 2)
          R = 4;
        P === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P, Y);
      }
      function Hk(a, b) {
        var c = W;
        W |= 2;
        var d = Ik();
        if (P !== a || Y !== b)
          sk = null, Jk(a, b);
        do
          try {
            Sk();
            break;
          } catch (e) {
            Lk(a, e);
          }
        while (1);
        pg();
        W = c;
        kk.current = d;
        if (X !== null)
          throw Error(p2(261));
        P = null;
        Y = 0;
        return R;
      }
      function Sk() {
        for (; X !== null; )
          Tk(X);
      }
      function Kk() {
        for (; X !== null && !bc(); )
          Tk(X);
      }
      function Tk(a) {
        var b = Uk(a.alternate, a, cj);
        a.memoizedProps = a.pendingProps;
        b === null ? Rk(a) : X = b;
        lk.current = null;
      }
      function Rk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if ((b.flags & 32768) === 0) {
            if (c = Yi(c, b, cj), c !== null) {
              X = c;
              return;
            }
          } else {
            c = Gj(c, b);
            if (c !== null) {
              c.flags &= 32767;
              X = c;
              return;
            }
            if (a !== null)
              a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              R = 6;
              X = null;
              return;
            }
          }
          b = b.sibling;
          if (b !== null) {
            X = b;
            return;
          }
          X = b = a;
        } while (b !== null);
        R === 0 && (R = 5);
      }
      function Ok(a, b, c) {
        var d = C, e = mk.transition;
        try {
          mk.transition = null, C = 1, Vk(a, b, c, d);
        } finally {
          mk.transition = e, C = d;
        }
        return null;
      }
      function Vk(a, b, c, d) {
        do
          Gk();
        while (uk !== null);
        if ((W & 6) !== 0)
          throw Error(p2(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (c === null)
          return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current)
          throw Error(p2(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Ac(a, f);
        a === P && (X = P = null, Y = 0);
        (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
          Gk();
          return null;
        }));
        f = (c.flags & 15990) !== 0;
        if ((c.subtreeFlags & 15990) !== 0 || f) {
          f = mk.transition;
          mk.transition = null;
          var g = C;
          C = 1;
          var h2 = W;
          W |= 4;
          lk.current = null;
          Mj(a, c);
          bk(c, a);
          Ne(Cf);
          cd = !!Bf;
          Cf = Bf = null;
          a.current = c;
          fk(c, a, e);
          cc();
          W = h2;
          C = g;
          mk.transition = f;
        } else
          a.current = c;
        tk && (tk = false, uk = a, vk = e);
        f = a.pendingLanes;
        f === 0 && (Oi = null);
        lc(c.stateNode, d);
        Ck(a, B());
        if (b !== null)
          for (d = a.onRecoverableError, c = 0; c < b.length; c++)
            d(b[c]);
        if (Li)
          throw Li = false, a = Mi, Mi = null, a;
        (vk & 1) !== 0 && a.tag !== 0 && Gk();
        f = a.pendingLanes;
        (f & 1) !== 0 ? a === xk ? wk++ : (wk = 0, xk = a) : wk = 0;
        ig();
        return null;
      }
      function Gk() {
        if (uk !== null) {
          var a = Cc(vk), b = mk.transition, c = C;
          try {
            mk.transition = null;
            C = 16 > a ? 16 : a;
            if (uk === null)
              var d = false;
            else {
              a = uk;
              uk = null;
              vk = 0;
              if ((W & 6) !== 0)
                throw Error(p2(331));
              var e = W;
              W |= 4;
              for (T = a.current; T !== null; ) {
                var f = T, g = f.child;
                if ((T.flags & 16) !== 0) {
                  var h2 = f.deletions;
                  if (h2 !== null) {
                    for (var k = 0; k < h2.length; k++) {
                      var l = h2[k];
                      for (T = l; T !== null; ) {
                        var n = T;
                        switch (n.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Nj(8, n, f);
                        }
                        var u = n.child;
                        if (u !== null)
                          u.return = n, T = u;
                        else
                          for (; T !== null; ) {
                            n = T;
                            var q = n.sibling, y = n.return;
                            Qj(n);
                            if (n === l) {
                              T = null;
                              break;
                            }
                            if (q !== null) {
                              q.return = y;
                              T = q;
                              break;
                            }
                            T = y;
                          }
                      }
                    }
                    var m = f.alternate;
                    if (m !== null) {
                      var w = m.child;
                      if (w !== null) {
                        m.child = null;
                        do {
                          var J = w.sibling;
                          w.sibling = null;
                          w = J;
                        } while (w !== null);
                      }
                    }
                    T = f;
                  }
                }
                if ((f.subtreeFlags & 2064) !== 0 && g !== null)
                  g.return = f, T = g;
                else
                  b:
                    for (; T !== null; ) {
                      f = T;
                      if ((f.flags & 2048) !== 0)
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Nj(9, f, f.return);
                        }
                      var v = f.sibling;
                      if (v !== null) {
                        v.return = f.return;
                        T = v;
                        break b;
                      }
                      T = f.return;
                    }
              }
              var x = a.current;
              for (T = x; T !== null; ) {
                g = T;
                var r = g.child;
                if ((g.subtreeFlags & 2064) !== 0 && r !== null)
                  r.return = g, T = r;
                else
                  b:
                    for (g = x; T !== null; ) {
                      h2 = T;
                      if ((h2.flags & 2048) !== 0)
                        try {
                          switch (h2.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Oj(9, h2);
                          }
                        } catch (Z) {
                          U(h2, h2.return, Z);
                        }
                      if (h2 === g) {
                        T = null;
                        break b;
                      }
                      var F = h2.sibling;
                      if (F !== null) {
                        F.return = h2.return;
                        T = F;
                        break b;
                      }
                      T = h2.return;
                    }
              }
              W = e;
              ig();
              if (kc && typeof kc.onPostCommitFiberRoot === "function")
                try {
                  kc.onPostCommitFiberRoot(jc, a);
                } catch (Z) {
                }
              d = true;
            }
            return d;
          } finally {
            C = c, mk.transition = b;
          }
        }
        return false;
      }
      function Wk(a, b, c) {
        b = Hi(c, b);
        b = Ki(a, b, 1);
        Ag(a, b);
        b = Jg();
        a = Ak(a, 1);
        a !== null && (zc(a, 1, b), Ck(a, b));
      }
      function U(a, b, c) {
        if (a.tag === 3)
          Wk(a, a, c);
        else
          for (; b !== null; ) {
            if (b.tag === 3) {
              Wk(b, a, c);
              break;
            } else if (b.tag === 1) {
              var d = b.stateNode;
              if (typeof b.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Oi === null || !Oi.has(d))) {
                a = Hi(c, a);
                a = Ni(b, a, 1);
                Ag(b, a);
                a = Jg();
                b = Ak(b, 1);
                b !== null && (zc(b, 1, a), Ck(b, a));
                break;
              }
            }
            b = b.return;
          }
      }
      function Qi(a, b, c) {
        var d = a.pingCache;
        d !== null && d.delete(b);
        b = Jg();
        a.pingedLanes |= a.suspendedLanes & c;
        P === a && (Y & c) === c && (R === 4 || R === 3 && (Y & 130023424) === Y && 500 > B() - dk ? Jk(a, 0) : pk |= c);
        Ck(a, b);
      }
      function Xk(a, b) {
        b === 0 && ((a.mode & 1) === 0 ? b = 1 : (b = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
        var c = Jg();
        a = Ak(a, b);
        a !== null && (zc(a, b, c), Ck(a, c));
      }
      function zj(a) {
        var b = a.memoizedState, c = 0;
        b !== null && (c = b.retryLane);
        Xk(a, c);
      }
      function Zj(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            e !== null && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        d !== null && d.delete(b);
        Xk(a, c);
      }
      var Uk;
      Uk = function(a, b, c) {
        if (a !== null)
          if (a.memoizedProps !== b.pendingProps || Vf.current)
            tg = true;
          else {
            if ((a.lanes & c) === 0 && (b.flags & 128) === 0)
              return tg = false, Fj(a, b, c);
            tg = (a.flags & 131072) !== 0 ? true : false;
          }
        else
          tg = false, I && (b.flags & 1048576) !== 0 && ah(b, Ug, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            var e = Xf(b, H.current);
            sg(b, c);
            e = Uh(null, b, d, a, e, c);
            var f = Zh();
            b.flags |= 1;
            typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0 ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Yf(d) ? (f = true, bg(b)) : f = false, b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, xg(b), e.updater = Mg, b.stateNode = e, e._reactInternals = b, Qg(b, d, a, c), b = pj(null, b, d, true, f, c)) : (b.tag = 0, I && f && bh(b), ej(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Yk(d);
              a = kg(d, a);
              switch (e) {
                case 0:
                  b = kj(null, b, d, a, c);
                  break a;
                case 1:
                  b = oj(null, b, d, a, c);
                  break a;
                case 11:
                  b = fj(null, b, d, a, c);
                  break a;
                case 14:
                  b = hj(null, b, d, kg(d.type, a), c);
                  break a;
              }
              throw Error(p2(306, d, ""));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), kj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), oj(a, b, d, e, c);
          case 3:
            a: {
              qj(b);
              if (a === null)
                throw Error(p2(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              yg(a, b);
              Eg(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated)
                if (f = {
                  element: d,
                  isDehydrated: false,
                  cache: g.cache,
                  pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                  transitions: g.transitions
                }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                  e = Error(p2(423));
                  b = rj(a, b, d, c, e);
                  break a;
                } else if (d !== e) {
                  e = Error(p2(424));
                  b = rj(a, b, d, c, e);
                  break a;
                } else
                  for (eh = Kf(b.stateNode.containerInfo.firstChild), dh = b, I = true, fh = null, c = zh(b, null, d, c), b.child = c; c; )
                    c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                nh();
                if (d === e) {
                  b = gj(a, b, c);
                  break a;
                }
                ej(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Hh(b), a === null && kh(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Df(d, e) ? g = null : f !== null && Df(d, f) && (b.flags |= 32), nj(a, b), ej(a, b, g, c), b.child;
          case 6:
            return a === null && kh(b), null;
          case 13:
            return vj(a, b, c);
          case 4:
            return Fh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = yh(b, null, d, c) : ej(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), fj(a, b, d, e, c);
          case 7:
            return ej(a, b, b.pendingProps, c), b.child;
          case 8:
            return ej(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return ej(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(lg, d._currentValue);
              d._currentValue = g;
              if (f !== null)
                if (Ge(f.value, g)) {
                  if (f.children === e.children && !Vf.current) {
                    b = gj(a, b, c);
                    break a;
                  }
                } else
                  for (f = b.child, f !== null && (f.return = b); f !== null; ) {
                    var h2 = f.dependencies;
                    if (h2 !== null) {
                      g = f.child;
                      for (var k = h2.firstContext; k !== null; ) {
                        if (k.context === d) {
                          if (f.tag === 1) {
                            k = zg(-1, c & -c);
                            k.tag = 2;
                            var l = f.updateQueue;
                            if (l !== null) {
                              l = l.shared;
                              var n = l.pending;
                              n === null ? k.next = k : (k.next = n.next, n.next = k);
                              l.pending = k;
                            }
                          }
                          f.lanes |= c;
                          k = f.alternate;
                          k !== null && (k.lanes |= c);
                          rg(f.return, c, b);
                          h2.lanes |= c;
                          break;
                        }
                        k = k.next;
                      }
                    } else if (f.tag === 10)
                      g = f.type === b.type ? null : f.child;
                    else if (f.tag === 18) {
                      g = f.return;
                      if (g === null)
                        throw Error(p2(341));
                      g.lanes |= c;
                      h2 = g.alternate;
                      h2 !== null && (h2.lanes |= c);
                      rg(g, c, b);
                      g = f.sibling;
                    } else
                      g = f.child;
                    if (g !== null)
                      g.return = f;
                    else
                      for (g = f; g !== null; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        f = g.sibling;
                        if (f !== null) {
                          f.return = g.return;
                          g = f;
                          break;
                        }
                        g = g.return;
                      }
                    f = g;
                  }
              ej(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, sg(b, c), e = ug(e), d = d(e), b.flags |= 1, ej(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = kg(d, b.pendingProps), e = kg(d.type, e), hj(a, b, d, e, c);
          case 15:
            return jj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : kg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Yf(d) ? (a = true, bg(b)) : a = false, sg(b, c), Og(b, d, e), Qg(b, d, e, c), pj(null, b, d, true, a, c);
          case 19:
            return Ej(a, b, c);
          case 22:
            return lj(a, b, c);
        }
        throw Error(p2(156, b.tag));
      };
      function Ek(a, b) {
        return $b(a, b);
      }
      function Zk(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function hh(a, b, c, d) {
        return new Zk(a, b, c, d);
      }
      function ij(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Yk(a) {
        if (typeof a === "function")
          return ij(a) ? 1 : 0;
        if (a !== void 0 && a !== null) {
          a = a.$$typeof;
          if (a === Ca)
            return 11;
          if (a === Fa)
            return 14;
        }
        return 2;
      }
      function th(a, b) {
        var c = a.alternate;
        c === null ? (c = hh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function vh(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if (typeof a === "function")
          ij(a) && (g = 1);
        else if (typeof a === "string")
          g = 5;
        else
          a:
            switch (a) {
              case wa:
                return xh(c.children, e, f, b);
              case xa:
                g = 8;
                e |= 8;
                break;
              case za:
                return a = hh(12, c, b, e | 2), a.elementType = za, a.lanes = f, a;
              case Da:
                return a = hh(13, c, b, e), a.elementType = Da, a.lanes = f, a;
              case Ea:
                return a = hh(19, c, b, e), a.elementType = Ea, a.lanes = f, a;
              case Ha:
                return wj(c, e, f, b);
              default:
                if (typeof a === "object" && a !== null)
                  switch (a.$$typeof) {
                    case Aa:
                      g = 10;
                      break a;
                    case Ba:
                      g = 9;
                      break a;
                    case Ca:
                      g = 11;
                      break a;
                    case Fa:
                      g = 14;
                      break a;
                    case Ga:
                      g = 16;
                      d = null;
                      break a;
                  }
                throw Error(p2(130, a == null ? a : typeof a, ""));
            }
        b = hh(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function xh(a, b, c, d) {
        a = hh(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function wj(a, b, c, d) {
        a = hh(22, a, d, b);
        a.elementType = Ha;
        a.lanes = c;
        a.stateNode = {};
        return a;
      }
      function uh(a, b, c) {
        a = hh(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function wh(a, b, c) {
        b = hh(4, a.children !== null ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function $k(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = yc(0);
        this.expirationTimes = yc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = yc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function al(a, b, c, d, e, f, g, h2, k) {
        a = new $k(a, b, c, h2, k);
        b === 1 ? (b = 1, f === true && (b |= 8)) : b = 0;
        f = hh(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        xg(f);
        return a;
      }
      function bl(a, b, c) {
        var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: va, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function cl(a) {
        if (!a)
          return Uf;
        a = a._reactInternals;
        a: {
          if (Ub(a) !== a || a.tag !== 1)
            throw Error(p2(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Yf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (b !== null);
          throw Error(p2(171));
        }
        if (a.tag === 1) {
          var c = a.type;
          if (Yf(c))
            return ag(a, c, b);
        }
        return b;
      }
      function dl(a, b, c, d, e, f, g, h2, k) {
        a = al(c, d, true, a, e, f, g, h2, k);
        a.context = cl(null);
        c = a.current;
        d = Jg();
        e = Kg(c);
        f = zg(d, e);
        f.callback = b !== void 0 && b !== null ? b : null;
        Ag(c, f);
        a.current.lanes = e;
        zc(a, e, d);
        Ck(a, d);
        return a;
      }
      function el(a, b, c, d) {
        var e = b.current, f = Jg(), g = Kg(e);
        c = cl(c);
        b.context === null ? b.context = c : b.pendingContext = c;
        b = zg(f, g);
        b.payload = { element: a };
        d = d === void 0 ? null : d;
        d !== null && (b.callback = d);
        Ag(e, b);
        a = Lg(e, g, f);
        a !== null && Cg(a, e, g);
        return g;
      }
      function fl(a) {
        a = a.current;
        if (!a.child)
          return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function gl(a, b) {
        a = a.memoizedState;
        if (a !== null && a.dehydrated !== null) {
          var c = a.retryLane;
          a.retryLane = c !== 0 && c < b ? c : b;
        }
      }
      function hl(a, b) {
        gl(a, b);
        (a = a.alternate) && gl(a, b);
      }
      function il() {
        return null;
      }
      var jl = typeof reportError === "function" ? reportError : function(a) {
        console.error(a);
      };
      function kl(a) {
        this._internalRoot = a;
      }
      ll.prototype.render = kl.prototype.render = function(a) {
        var b = this._internalRoot;
        if (b === null)
          throw Error(p2(409));
        el(a, b, null, null);
      };
      ll.prototype.unmount = kl.prototype.unmount = function() {
        var a = this._internalRoot;
        if (a !== null) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Qk(function() {
            el(null, a, null, null);
          });
          b[tf] = null;
        }
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ll.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Gc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Pc.length && b !== 0 && b < Pc[c].priority; c++)
            ;
          Pc.splice(c, 0, a);
          c === 0 && Uc(a);
        }
      };
      function ml(a) {
        return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
      }
      function nl(a) {
        return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
      }
      function ol() {
      }
      function pl(a, b, c, d, e) {
        if (e) {
          if (typeof d === "function") {
            var f = d;
            d = function() {
              var a2 = fl(g);
              f.call(a2);
            };
          }
          var g = dl(b, d, a, 0, null, false, false, "", ol);
          a._reactRootContainer = g;
          a[tf] = g.current;
          rf(a.nodeType === 8 ? a.parentNode : a);
          Qk();
          return g;
        }
        for (; e = a.lastChild; )
          a.removeChild(e);
        if (typeof d === "function") {
          var h2 = d;
          d = function() {
            var a2 = fl(k);
            h2.call(a2);
          };
        }
        var k = al(a, 0, false, null, null, false, false, "", ol);
        a._reactRootContainer = k;
        a[tf] = k.current;
        rf(a.nodeType === 8 ? a.parentNode : a);
        Qk(function() {
          el(b, k, c, d);
        });
        return k;
      }
      function ql(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if (typeof e === "function") {
            var h2 = e;
            e = function() {
              var a2 = fl(g);
              h2.call(a2);
            };
          }
          el(b, g, a, e);
        } else
          g = pl(c, b, a, e, d);
        return fl(g);
      }
      Dc = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = sc(b.pendingLanes);
              c !== 0 && (Bc(b, c | 1), Ck(b, B()), (W & 6) === 0 && (aj = B() + 500, ig()));
            }
            break;
          case 13:
            var d = Jg();
            Qk(function() {
              return Lg(a, 1, d);
            });
            hl(a, 1);
        }
      };
      Ec = function(a) {
        if (a.tag === 13) {
          var b = Jg();
          Lg(a, 134217728, b);
          hl(a, 134217728);
        }
      };
      Fc = function(a) {
        if (a.tag === 13) {
          var b = Jg(), c = Kg(a);
          Lg(a, c, b);
          hl(a, c);
        }
      };
      Gc = function() {
        return C;
      };
      Hc = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      xb = function(a, b, c) {
        switch (b) {
          case "input":
            $a(a, c);
            b = c.name;
            if (c.type === "radio" && b != null) {
              for (c = a; c.parentNode; )
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Cb(d);
                  if (!e)
                    throw Error(p2(90));
                  Va(d);
                  $a(d, e);
                }
              }
            }
            break;
          case "textarea":
            hb(a, c);
            break;
          case "select":
            b = c.value, b != null && eb(a, !!c.multiple, b, false);
        }
      };
      Fb = Pk;
      Gb = Qk;
      var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] };
      var sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
      var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Yb(a);
        return a === null ? null : a.stateNode;
      }, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
        ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ul.isDisabled && ul.supportsFiber)
          try {
            jc = ul.inject(tl), kc = ul;
          } catch (a) {
          }
      }
      var ul;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ml(b))
          throw Error(p2(200));
        return bl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!ml(a))
          throw Error(p2(299));
        var c = false, d = "", e = jl;
        b !== null && b !== void 0 && (b.unstable_strictMode === true && (c = true), b.identifierPrefix !== void 0 && (d = b.identifierPrefix), b.onRecoverableError !== void 0 && (e = b.onRecoverableError));
        b = al(a, 1, false, null, null, c, false, d, e);
        a[tf] = b.current;
        rf(a.nodeType === 8 ? a.parentNode : a);
        return new kl(b);
      };
      exports.findDOMNode = function(a) {
        if (a == null)
          return null;
        if (a.nodeType === 1)
          return a;
        var b = a._reactInternals;
        if (b === void 0) {
          if (typeof a.render === "function")
            throw Error(p2(188));
          a = Object.keys(a).join(",");
          throw Error(p2(268, a));
        }
        a = Yb(b);
        a = a === null ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Qk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!nl(b))
          throw Error(p2(200));
        return ql(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!ml(a))
          throw Error(p2(405));
        var d = c != null && c.hydratedSources || null, e = false, f = "", g = jl;
        c !== null && c !== void 0 && (c.unstable_strictMode === true && (e = true), c.identifierPrefix !== void 0 && (f = c.identifierPrefix), c.onRecoverableError !== void 0 && (g = c.onRecoverableError));
        b = dl(b, null, a, 1, c != null ? c : null, e, false, f, g);
        a[tf] = b.current;
        rf(a);
        if (d)
          for (a = 0; a < d.length; a++)
            c = d[a], e = c._getVersion, e = e(c._source), b.mutableSourceEagerHydrationData == null ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
        return new ll(b);
      };
      exports.render = function(a, b, c) {
        if (!nl(b))
          throw Error(p2(200));
        return ql(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!nl(a))
          throw Error(p2(40));
        return a._reactRootContainer ? (Qk(function() {
          ql(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[tf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Pk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!nl(c))
          throw Error(p2(200));
        if (a == null || a._reactInternals === void 0)
          throw Error(p2(38));
        return ql(a, b, c, false, d);
      };
      exports.version = "18.1.0-next-22edb9f77-20220426";
    }
  });
  var require_react_dom = __commonJS({
    "../../node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../ucp-example/dist/elements/ReactDemo.js
  var import_react2 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());
  var import_react = __toESM(require_react());
  var ReactDemo_default = ({
    text: text2,
    onMyclick
  }) => {
    return /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: () => onMyclick("React click")
    }, text2);
  };
  var ReactWc = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {
        text: (() => {
          const value = this.attributes.getNamedItem("text")?.value;
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        })(),
        onMyclick: (args2) => this.dispatchEvent(new CustomEvent("ex-myclick", { bubbles: true, detail: [args2] }))
      };
      (0, import_react_dom.createRoot)(rootEl).render(/* @__PURE__ */ import_react2.default.createElement(ReactDemo_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = ``;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return ["text"];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-demo", ReactWc);

  // ../ucp-example/dist/elements/ReactEmits.js
  var import_react22 = __toESM(require_react());
  var import_react_dom2 = __toESM(require_react_dom());
  var import_react3 = __toESM(require_react());
  var ReactEmits_default = ({
    onStringevent,
    onVoidevent,
    onObjevent,
    onNumevent
  }) => {
    return /* @__PURE__ */ import_react3.default.createElement("button", {
      onClick: () => {
        onStringevent("demo");
        onNumevent(5);
        onObjevent({ value: "val" });
        onVoidevent();
      }
    }, "Send event");
  };
  var ReactWc2 = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {
        onStringevent: (args2) => this.dispatchEvent(new CustomEvent("ex-stringevent", { bubbles: true, detail: [args2] })),
        onNumevent: (args2) => this.dispatchEvent(new CustomEvent("ex-numevent", { bubbles: true, detail: [args2] })),
        onObjevent: (args2) => this.dispatchEvent(new CustomEvent("ex-objevent", { bubbles: true, detail: [args2] })),
        onVoidevent: (args2) => this.dispatchEvent(new CustomEvent("ex-voidevent", { bubbles: true, detail: [args2] }))
      };
      (0, import_react_dom2.createRoot)(rootEl).render(/* @__PURE__ */ import_react22.default.createElement(ReactEmits_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = ``;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return [];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-emits", ReactWc2);

  // ../ucp-example/dist/elements/ReactNested.js
  var import_react222 = __toESM(require_react());
  var import_react_dom3 = __toESM(require_react_dom());
  var import_react20 = __toESM(require_react());
  var import_react4 = __toESM(require_react());
  var import_react23 = __toESM(require_react());
  var import_react32 = __toESM(require_react());
  var import_react42 = __toESM(require_react());
  var import_react5 = __toESM(require_react());
  var import_react6 = __toESM(require_react());
  var import_react7 = __toESM(require_react());
  var import_react8 = __toESM(require_react());
  var import_react9 = __toESM(require_react());
  var import_react10 = __toESM(require_react());
  var import_react11 = __toESM(require_react());
  var import_react12 = __toESM(require_react());
  var import_react13 = __toESM(require_react());
  var import_react14 = __toESM(require_react());
  var import_react15 = __toESM(require_react());
  var import_react16 = __toESM(require_react());
  var import_react17 = __toESM(require_react());
  var import_react18 = __toESM(require_react());
  var ReactSimple = function(_a2) {
    var children2 = _a2.children;
    return import_react18.default.createElement("ex-react-simple", null, children2);
  };
  var import_react19 = __toESM(require_react());
  var ReactNested_default = () => {
    return /* @__PURE__ */ import_react20.default.createElement("div", null, /* @__PURE__ */ import_react20.default.createElement(ReactSimple, null));
  };
  var ReactWc3 = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {};
      (0, import_react_dom3.createRoot)(rootEl).render(/* @__PURE__ */ import_react222.default.createElement(ReactNested_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = ``;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return [];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-nested", ReactWc3);

  // ../ucp-example/dist/elements/ReactProps.js
  var import_react24 = __toESM(require_react());
  var import_react_dom4 = __toESM(require_react_dom());
  var import_react21 = __toESM(require_react());
  var ReactProps_default = ({
    stringprop,
    numprop,
    complexprop
  }) => {
    return /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement("div", {
      className: "stringprop"
    }, stringprop), /* @__PURE__ */ import_react21.default.createElement("div", {
      className: "numprop"
    }, numprop + 1), /* @__PURE__ */ import_react21.default.createElement("div", {
      className: "complexprop"
    }, complexprop?.value));
  };
  var ReactWc4 = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {
        stringprop: (() => {
          const value = this.attributes.getNamedItem("stringprop")?.value;
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        })(),
        numprop: (() => {
          const value = this.attributes.getNamedItem("numprop")?.value;
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        })(),
        complexprop: (() => {
          const value = this.attributes.getNamedItem("complexprop")?.value;
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        })()
      };
      (0, import_react_dom4.createRoot)(rootEl).render(/* @__PURE__ */ import_react24.default.createElement(ReactProps_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = ``;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return ["stringprop", "numprop", "complexprop"];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-props", ReactWc4);

  // ../ucp-example/dist/elements/ReactSimple.js
  var import_react25 = __toESM(require_react());
  var import_react_dom5 = __toESM(require_react_dom());
  var import_react26 = __toESM(require_react());
  var ReactSimple_default = () => {
    return /* @__PURE__ */ import_react26.default.createElement("div", {
      className: "dummy"
    }, "Dummy");
  };
  var ReactWc5 = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {};
      (0, import_react_dom5.createRoot)(rootEl).render(/* @__PURE__ */ import_react25.default.createElement(ReactSimple_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = `.dummy{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}
`;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return [];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-simple", ReactWc5);

  // ../ucp-example/dist/elements/ReactSlots.js
  var import_react27 = __toESM(require_react());
  var import_react_dom6 = __toESM(require_react_dom());
  var import_react28 = __toESM(require_react());
  var ReactSlots_default = () => {
    const style = {
      border: "2px solid red"
    };
    return /* @__PURE__ */ import_react28.default.createElement("div", null, /* @__PURE__ */ import_react28.default.createElement("slot", null), /* @__PURE__ */ import_react28.default.createElement("div", {
      style
    }, /* @__PURE__ */ import_react28.default.createElement("slot", {
      name: "box"
    })), /* @__PURE__ */ import_react28.default.createElement("slot", {
      name: "after"
    }));
  };
  var ReactWc6 = class extends HTMLElement {
    render() {
      const rootEl = document.createElement("div");
      const args = {};
      (0, import_react_dom6.createRoot)(rootEl).render(/* @__PURE__ */ import_react27.default.createElement(ReactSlots_default, {
        ...args
      }));
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(rootEl);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = ``;
      this.shadowRoot.appendChild(styleElement);
    }
    static get observedAttributes() {
      return [];
    }
    attributeChangedCallback() {
      this.render();
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  };
  customElements.define("ex-react-slots", ReactWc6);

  // ../ucp-example/dist/elements/chunks/chunk-GEEXG3SV.js
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  function set_style(node, key, value, important) {
    if (value === null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
  }
  function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
      result[attribute.name] = attribute.value;
    }
    return result;
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(type, detail, { cancelable });
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = /* @__PURE__ */ new Set();
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance5, create_fragment7, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance5 ? instance5(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment7 ? create_fragment7($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }

  // ../ucp-example/dist/elements/SvelteDemo.js
  function create_fragment(ctx) {
    let button;
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        t = text(ctx[0]);
        this.c = noop;
      },
      m(target, anchor) {
        insert(target, button, anchor);
        append(button, t);
        if (!mounted) {
          dispose = listen(button, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1)
          set_data(t, ctx2[0]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    const currentComponent = get_current_component();
    const originalDispatch = createEventDispatcher();
    const createUcpDispatcher = () => (name, detail) => {
      originalDispatch("ex-" + name, [detail]);
      currentComponent?.dispatchEvent(new CustomEvent("ex-" + name, {
        detail: [detail],
        bubbles: true,
        cancelable: true
      }));
    };
    const dispatch = createUcpDispatcher();
    let { text: text2 } = $$props;
    const click_handler = () => {
      dispatch("myclick", "Svelte click");
    };
    $$self.$$set = ($$props2) => {
      if ("text" in $$props2)
        $$invalidate(0, text2 = $$props2.text);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $:
          $$invalidate(0, text2 = text2 !== void 0 ? (() => {
            try {
              return JSON.parse(text2);
            } catch {
              return text2;
            }
          })() : void 0);
      }
    };
    return [text2, dispatch, click_handler];
  }
  var SvelteDemo = class extends SvelteElement {
    constructor(options) {
      super();
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, instance, create_fragment, safe_not_equal, { text: 0 }, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
        if (options.props) {
          this.$set(options.props);
          flush();
        }
      }
    }
    static get observedAttributes() {
      return ["text"];
    }
    get text() {
      return this.$$.ctx[0];
    }
    set text(text2) {
      this.$$set({ text: text2 });
      flush();
    }
  };
  customElements.define("ex-svelte-demo", SvelteDemo);

  // ../ucp-example/dist/elements/SvelteEmits.js
  function create_fragment2(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "Send event";
        this.c = noop;
        attr(button, "class", "event-button");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(button, "click", ctx[1]);
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function instance2($$self) {
    const currentComponent = get_current_component();
    const originalDispatch = createEventDispatcher();
    const createUcpDispatcher = () => (name, detail) => {
      originalDispatch("ex-" + name, [detail]);
      currentComponent?.dispatchEvent(new CustomEvent("ex-" + name, {
        detail: [detail],
        bubbles: true,
        cancelable: true
      }));
    };
    const dispatch = createUcpDispatcher();
    const click_handler = () => {
      dispatch("stringevent", "demo");
      dispatch("numevent", 5);
      dispatch("objevent", { value: "val" });
      dispatch("voidevent");
    };
    return [dispatch, click_handler];
  }
  var SvelteEmits = class extends SvelteElement {
    constructor(options) {
      super();
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, instance2, create_fragment2, safe_not_equal, {}, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
      }
    }
  };
  customElements.define("ex-svelte-emits", SvelteEmits);

  // ../ucp-example/dist/elements/SvelteProps.js
  function create_fragment3(ctx) {
    let div3;
    let div0;
    let t0;
    let t1;
    let div1;
    let t2_value = ctx[1] + 1 + "";
    let t2;
    let t3;
    let div2;
    let t4_value = ctx[2]?.value + "";
    let t4;
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = text(ctx[0]);
        t1 = space();
        div1 = element("div");
        t2 = text(t2_value);
        t3 = space();
        div2 = element("div");
        t4 = text(t4_value);
        this.c = noop;
        attr(div0, "class", "stringprop");
        attr(div1, "class", "numprop");
        attr(div2, "class", "complexprop");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, t0);
        append(div3, t1);
        append(div3, div1);
        append(div1, t2);
        append(div3, t3);
        append(div3, div2);
        append(div2, t4);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1)
          set_data(t0, ctx2[0]);
        if (dirty & 2 && t2_value !== (t2_value = ctx2[1] + 1 + ""))
          set_data(t2, t2_value);
        if (dirty & 4 && t4_value !== (t4_value = ctx2[2]?.value + ""))
          set_data(t4, t4_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div3);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let { stringprop } = $$props;
    let { numprop } = $$props;
    let { complexprop } = $$props;
    $$self.$$set = ($$props2) => {
      if ("stringprop" in $$props2)
        $$invalidate(0, stringprop = $$props2.stringprop);
      if ("numprop" in $$props2)
        $$invalidate(1, numprop = $$props2.numprop);
      if ("complexprop" in $$props2)
        $$invalidate(2, complexprop = $$props2.complexprop);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $:
          $$invalidate(0, stringprop = stringprop !== void 0 ? (() => {
            try {
              return JSON.parse(stringprop);
            } catch {
              return stringprop;
            }
          })() : void 0);
      }
      if ($$self.$$.dirty & 2) {
        $:
          $$invalidate(1, numprop = numprop !== void 0 ? (() => {
            try {
              return JSON.parse(numprop);
            } catch {
              return numprop;
            }
          })() : void 0);
      }
      if ($$self.$$.dirty & 4) {
        $:
          $$invalidate(2, complexprop = complexprop !== void 0 ? (() => {
            try {
              return JSON.parse(complexprop);
            } catch {
              return complexprop;
            }
          })() : void 0);
      }
    };
    return [stringprop, numprop, complexprop];
  }
  var SvelteProps = class extends SvelteElement {
    constructor(options) {
      super();
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, instance3, create_fragment3, safe_not_equal, {
        stringprop: 0,
        numprop: 1,
        complexprop: 2
      }, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
        if (options.props) {
          this.$set(options.props);
          flush();
        }
      }
    }
    static get observedAttributes() {
      return ["stringprop", "numprop", "complexprop"];
    }
    get stringprop() {
      return this.$$.ctx[0];
    }
    set stringprop(stringprop) {
      this.$$set({ stringprop });
      flush();
    }
    get numprop() {
      return this.$$.ctx[1];
    }
    set numprop(numprop) {
      this.$$set({ numprop });
      flush();
    }
    get complexprop() {
      return this.$$.ctx[2];
    }
    set complexprop(complexprop) {
      this.$$set({ complexprop });
      flush();
    }
  };
  customElements.define("ex-svelte-props", SvelteProps);

  // ../ucp-example/dist/elements/SvelteSimple.js
  function create_fragment4(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        div.textContent = "Dummy";
        this.c = noop;
        attr(div, "class", "dummy");
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  var SvelteSimple = class extends SvelteElement {
    constructor(options) {
      super();
      this.shadowRoot.innerHTML = `<style>.dummy{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}</style>`;
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, null, create_fragment4, safe_not_equal, {}, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
      }
    }
  };
  customElements.define("ex-svelte-simple", SvelteSimple);

  // ../ucp-example/dist/elements/SvelteSlots.js
  function create_fragment5(ctx) {
    let div1;
    return {
      c() {
        div1 = element("div");
        div1.innerHTML = `<slot></slot> 
    <div class="slot"><slot name="box"></slot></div> 
    <slot name="after"></slot>`;
        this.c = noop;
      },
      m(target, anchor) {
        insert(target, div1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div1);
      }
    };
  }
  var SvelteSlots = class extends SvelteElement {
    constructor(options) {
      super();
      this.shadowRoot.innerHTML = `<style>.slot{border:2px solid red}</style>`;
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, null, create_fragment5, safe_not_equal, {}, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
      }
    }
  };
  customElements.define("ex-svelte-slots", SvelteSlots);

  // ../ucp-example/dist/elements/SvelteTheme.js
  function create_fragment6(ctx) {
    let div;
    let slot;
    return {
      c() {
        div = element("div");
        slot = element("slot");
        this.c = noop;
        set_style(div, "--bg-color", ctx[0]);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, slot);
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          set_style(div, "--bg-color", ctx2[0]);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    let { color } = $$props;
    $$self.$$set = ($$props2) => {
      if ("color" in $$props2)
        $$invalidate(0, color = $$props2.color);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $:
          $$invalidate(0, color = color !== void 0 ? (() => {
            try {
              return JSON.parse(color);
            } catch {
              return color;
            }
          })() : void 0);
      }
    };
    return [color];
  }
  var SvelteTheme = class extends SvelteElement {
    constructor(options) {
      super();
      init(this, {
        target: this.shadowRoot,
        props: attribute_to_object(this.attributes),
        customElement: true
      }, instance4, create_fragment6, safe_not_equal, { color: 0 }, null);
      if (options) {
        if (options.target) {
          insert(options.target, this, options.anchor);
        }
        if (options.props) {
          this.$set(options.props);
          flush();
        }
      }
    }
    static get observedAttributes() {
      return ["color"];
    }
    get color() {
      return this.$$.ctx[0];
    }
    set color(color) {
      this.$$set({ color });
      flush();
    }
  };
  customElements.define("ex-svelte-theme", SvelteTheme);

  // ../ucp-example/dist/elements/chunks/chunk-WJPKTIMD.js
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (val && val.__v_isRef) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var EMPTY_OBJ = false ? Object.freeze({}) : {};
  var EMPTY_ARR = false ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  var activeEffectScope;
  var EffectScope = class {
    constructor(detached = false) {
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      if (!detached && activeEffectScope) {
        this.parent = activeEffectScope;
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    run(fn) {
      if (this.active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (false) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    on() {
      activeEffectScope = this;
    }
    off() {
      activeEffectScope = this.parent;
    }
    stop(fromParent) {
      if (this.active) {
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.active = false;
      }
    }
  };
  function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect);
    }
  }
  var createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
  };
  var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  var newTracked = (dep) => (dep.n & trackOpBit) > 0;
  var initDepMarkers = ({ deps }) => {
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].w |= trackOpBit;
      }
    }
  };
  var finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
      let ptr = 0;
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        if (wasTracked(dep) && !newTracked(dep)) {
          dep.delete(effect);
        } else {
          deps[ptr++] = dep;
        }
        dep.w &= ~trackOpBit;
        dep.n &= ~trackOpBit;
      }
      deps.length = ptr;
    }
  };
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectTrackDepth = 0;
  var trackOpBit = 1;
  var maxMarkerBits = 30;
  var activeEffect;
  var ITERATE_KEY = Symbol(false ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(false ? "Map key iterate" : "");
  var ReactiveEffect = class {
    constructor(fn, scheduler = null, scope) {
      this.fn = fn;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      this.parent = void 0;
      recordEffectScope(this, scope);
    }
    run() {
      if (!this.active) {
        return this.fn();
      }
      let parent = activeEffect;
      let lastShouldTrack = shouldTrack;
      while (parent) {
        if (parent === this) {
          return;
        }
        parent = parent.parent;
      }
      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = void 0;
        if (this.deferStop) {
          this.stop();
        }
      }
    }
    stop() {
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  };
  function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep());
      }
      const eventInfo = false ? { effect: activeEffect, target, type, key } : void 0;
      trackEffects(dep, eventInfo);
    }
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (false) {
        activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const eventInfo = false ? { target, type, key, newValue, oldValue, oldTarget } : void 0;
    if (deps.length === 1) {
      if (deps[0]) {
        if (false) {
          triggerEffects(deps[0], eventInfo);
        } else {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      if (false) {
        triggerEffects(createDep(effects), eventInfo);
      } else {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    for (const effect of isArray(dep) ? dep : [...dep]) {
      if (effect !== activeEffect || effect.allowRecurse) {
        if (false) {
          effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
        }
        if (effect.scheduler) {
          effect.scheduler();
        } else {
          effect.run();
        }
      }
    }
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return shallow;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  var set = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
        return false;
      }
      if (!shallow && !isReadonly(value)) {
        if (!isShallow(value)) {
          value = toRaw(value);
          oldValue = toRaw(oldValue);
        }
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (false) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (false) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = false ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (false) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (false) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  var toReactive = (value) => isObject(value) ? reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function trackRefValue(ref2) {
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      if (false) {
        trackEffects(ref2.dep || (ref2.dep = createDep()), {
          target: ref2,
          type: "get",
          key: "value"
        });
      } else {
        trackEffects(ref2.dep || (ref2.dep = createDep()));
      }
    }
  }
  function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) {
      if (false) {
        triggerEffects(ref2.dep, {
          target: ref2,
          type: "set",
          key: "value",
          newValue: newVal
        });
      } else {
        triggerEffects(ref2.dep);
      }
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2, isSSR) {
      this._setter = _setter;
      this.dep = void 0;
      this.__v_isRef = true;
      this._dirty = true;
      this.effect = new ReactiveEffect(getter, () => {
        if (!this._dirty) {
          this._dirty = true;
          triggerRefValue(this);
        }
      });
      this.effect.computed = this;
      this.effect.active = this._cacheable = !isSSR;
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      trackRefValue(self2);
      if (self2._dirty || !self2._cacheable) {
        self2._dirty = false;
        self2._value = self2.effect.run();
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  };
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = false ? () => {
        console.warn("Write operation failed: computed value is readonly");
      } : NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (false) {
      cRef.effect.onTrack = debugOptions.onTrack;
      cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  var _a;
  _a = "__v_isReadonly";
  var stack = [];
  function warn(msg, ...args) {
    pauseTracking();
    const instance5 = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance5 && instance5.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(appWarnHandler, instance5, 11, [
        msg + args.join(""),
        instance5 && instance5.proxy,
        trace.map(({ vnode }) => `at <${formatComponentName(instance5, vnode.type)}>`).join("\n"),
        trace
      ]);
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function callWithErrorHandling(fn, instance5, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance5, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance5, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance5, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance5, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance5, type, args));
    }
    return values;
  }
  function handleError(err, instance5, type, throwInDev = true) {
    const contextVNode = instance5 ? instance5.vnode : null;
    if (instance5) {
      let cur = instance5.parent;
      const exposedInstance = instance5.proxy;
      const errorInfo = false ? ErrorTypeStrings[type] : type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance5.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    if (false) {
      const info = ErrorTypeStrings[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else {
      console.error(err);
    }
  }
  var isFlushing = false;
  var isFlushPending = false;
  var queue = [];
  var flushIndex = 0;
  var pendingPreFlushCbs = [];
  var activePreFlushCbs = null;
  var preFlushIndex = 0;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = /* @__PURE__ */ Promise.resolve();
  var currentFlushPromise = null;
  var currentPreFlushParentJob = null;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
      if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
        pendingQueue.push(cb);
      }
    } else {
      pendingQueue.push(...cb);
    }
    queueFlush();
  }
  function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
  }
  function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
      currentPreFlushParentJob = parentJob;
      activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
      pendingPreFlushCbs.length = 0;
      if (false) {
        seen = seen || /* @__PURE__ */ new Map();
      }
      for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
        if (false) {
          continue;
        }
        activePreFlushCbs[preFlushIndex]();
      }
      activePreFlushCbs = null;
      preFlushIndex = 0;
      currentPreFlushParentJob = null;
      flushPreFlushCbs(seen, parentJob);
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (false) {
        seen = seen || /* @__PURE__ */ new Map();
      }
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        if (false) {
          continue;
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? Infinity : job.id;
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if (false) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    flushPreFlushCbs(seen);
    queue.sort((a, b) => getId(a) - getId(b));
    const check = false ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (false) {
            continue;
          }
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen);
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  if (false) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  function emit$1(instance5, event, ...rawArgs) {
    if (instance5.isUnmounted)
      return;
    const props = instance5.vnode.props || EMPTY_OBJ;
    if (false) {
      const { emitsOptions, propsOptions: [propsOptions] } = instance5;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn(`Invalid event arguments: event validation failed for event "${event}".`);
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => a.trim());
      } else if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    if (false) {
      devtoolsComponentEmit(instance5, event, args);
    }
    if (false) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance5, instance5.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance5, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance5.emitted) {
        instance5.emitted = {};
      } else if (instance5.emitted[handlerName]) {
        return;
      }
      instance5.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance5, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, null);
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance5) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance5;
    currentScopeId = instance5 && instance5.type.__scopeId || null;
    return prev;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const res = fn(...args);
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
      if (false) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function renderComponentRoot(instance5) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render: render23, renderCache, data, setupState, ctx, inheritAttrs } = instance5;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance5);
    if (false) {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render23.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render32 = Component;
        if (false) {
          markAttrsAccessed();
        }
        result = normalizeVNode(render32.length > 1 ? render32(props, false ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit
        } : { attrs, slots, emit }) : render32(props, null));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance5, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (false) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        } else if (false) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
          }
          if (eventAttrs.length) {
            warn(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
          }
        }
      }
    }
    if (vnode.dirs) {
      if (false) {
        warn(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
      }
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (false) {
        warn(`Component inside <Transition> renders non-element root node that cannot be animated.`);
      }
      root.transition = vnode.transition;
    }
    if (false) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (false) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  var isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function provide(key, value) {
    if (!currentInstance) {
      if (false) {
        warn(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance5 = currentInstance || currentRenderingInstance;
    if (instance5) {
      const provides = instance5.parent == null ? instance5.vnode.appContext && instance5.vnode.appContext.provides : instance5.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance5.proxy) : defaultValue;
      } else if (false) {
        warn(`injection "${String(key)}" not found.`);
      }
    } else if (false) {
      warn(`inject() can only be used inside setup() or functional components.`);
    }
  }
  var INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    if (false) {
      warn(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush: flush2, onTrack, onTrigger } = EMPTY_OBJ) {
    if (false) {
      if (immediate !== void 0) {
        warn(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
      }
      if (deep !== void 0) {
        warn(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
      }
    }
    const warnInvalidSource = (s) => {
      warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance5 = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some(isReactive);
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance5, 2);
        } else {
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(source, instance5, 2);
      } else {
        getter = () => {
          if (instance5 && instance5.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance5, 3, [onCleanup]);
        };
      }
    } else {
      getter = NOOP;
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect.onStop = () => {
        callWithErrorHandling(fn, instance5, 4);
      };
    };
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance5, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      return NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect.active) {
        return;
      }
      if (cb) {
        const newValue = effect.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance5, 3, [
            newValue,
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush2 === "sync") {
      scheduler = job;
    } else if (flush2 === "post") {
      scheduler = () => queuePostRenderEffect(job, instance5 && instance5.suspense);
    } else {
      scheduler = () => {
        if (!instance5 || instance5.isMounted) {
          queuePreFlushCb(job);
        } else {
          job();
        }
      };
    }
    const effect = new ReactiveEffect(getter, scheduler);
    if (false) {
      effect.onTrack = onTrack;
      effect.onTrigger = onTrigger;
    }
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect.run();
      }
    } else if (flush2 === "post") {
      queuePostRenderEffect(effect.run.bind(effect), instance5 && instance5.suspense);
    } else {
      effect.run();
    }
    return () => {
      effect.stop();
      if (instance5 && instance5.scope) {
        remove(instance5.scope.effects, effect);
      }
    };
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, seen) {
    if (!isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    if (isRef(value)) {
      traverse(value.value, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], seen);
      }
    }
    return value;
  }
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  var TransitionHookValidator = [Function, Array];
  var BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: TransitionHookValidator,
      onEnter: TransitionHookValidator,
      onAfterEnter: TransitionHookValidator,
      onEnterCancelled: TransitionHookValidator,
      onBeforeLeave: TransitionHookValidator,
      onLeave: TransitionHookValidator,
      onAfterLeave: TransitionHookValidator,
      onLeaveCancelled: TransitionHookValidator,
      onBeforeAppear: TransitionHookValidator,
      onAppear: TransitionHookValidator,
      onAfterAppear: TransitionHookValidator,
      onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
      const instance5 = getCurrentInstance();
      const state = useTransitionState();
      let prevTransitionKey;
      return () => {
        const children2 = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children2 || !children2.length) {
          return;
        }
        let child = children2[0];
        if (children2.length > 1) {
          let hasFound = false;
          for (const c of children2) {
            if (c.type !== Comment) {
              if (false) {
                warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                break;
              }
              child = c;
              hasFound = true;
              if (true)
                break;
            }
          }
        }
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        if (false) {
          warn(`invalid <transition> mode: ${mode}`);
        }
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild = getKeepAliveChild(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance5);
        setTransitionHooks(innerChild, enterHooks);
        const oldChild = instance5.subTree;
        const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
        let transitionKeyChanged = false;
        const { getTransitionKey } = innerChild.type;
        if (getTransitionKey) {
          const key = getTransitionKey();
          if (prevTransitionKey === void 0) {
            prevTransitionKey = key;
          } else if (key !== prevTransitionKey) {
            prevTransitionKey = key;
            transitionKeyChanged = true;
          }
        }
        if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
          const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance5);
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode === "out-in") {
            state.isLeaving = true;
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              instance5.update();
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              el._leaveCb = () => {
                earlyRemove();
                el._leaveCb = void 0;
                delete enterHooks.delayedLeave;
              };
              enterHooks.delayedLeave = delayedLeave;
            };
          }
        }
        return child;
      };
    }
  };
  var BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance5) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook3 = (hook, args) => {
      hook && callWithAsyncErrorHandling(hook, instance5, 9, args);
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el._leaveCb) {
          el._leaveCb(true);
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
          leavingVNode.el._leaveCb();
        }
        callHook3(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el._enterCb = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook3(cancelHook, [el]);
          } else {
            callHook3(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el._enterCb = void 0;
        };
        if (hook) {
          hook(el, done);
          if (hook.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el._enterCb) {
          el._enterCb(true);
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook3(onBeforeLeave, [el]);
        let called = false;
        const done = el._leaveCb = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook3(onLeaveCancelled, [el]);
          } else {
            callHook3(onAfterLeave, [el]);
          }
          el._leaveCb = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          onLeave(el, done);
          if (onLeave.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      clone(vnode2) {
        return resolveTransitionHooks(vnode2, props, state, instance5);
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children2, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children2.length; i++) {
      let child = children2[i];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (false) {
      const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
      warn(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook("bu");
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook("bum");
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook("sp");
  var onRenderTriggered = createHook("rtg");
  var onRenderTracked = createHook("rtc");
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  var shouldCacheAccess = true;
  function applyOptions(instance5) {
    const options = resolveMergedOptions(instance5);
    const publicThis = instance5.proxy;
    const ctx = instance5.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance5, "bc");
    }
    const {
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render23,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      expose,
      inheritAttrs,
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = false ? createDuplicateChecker() : null;
    if (false) {
      const [propsOptions] = instance5.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance5.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          if (false) {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (false) {
            checkDuplicateProperties("Methods", key);
          }
        } else if (false) {
          warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
        }
      }
    }
    if (dataOptions) {
      if (false) {
        warn(`The data option must be a function. Plain object usage is no longer supported.`);
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (false) {
        warn(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
      }
      if (!isObject(data)) {
      } else {
        instance5.data = reactive(data);
        if (false) {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (key[0] !== "$" && key[0] !== "_") {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (false) {
          warn(`Computed property "${key}" has no getter.`);
        }
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : false ? () => {
          warn(`Write operation failed: computed property "${key}" is readonly.`);
        } : NOOP;
        const c = computed2({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
        if (false) {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance5, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance5.exposed || (instance5.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance5.exposed) {
        instance5.exposed = {};
      }
    }
    if (render23 && instance5.render === NOOP) {
      instance5.render = render23;
    }
    if (inheritAttrs != null) {
      instance5.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance5.components = components;
    if (directives)
      instance5.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(opt.from || key, opt.default, true);
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          if (false) {
            warn(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
          }
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
      if (false) {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance5, type) {
    callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance5.proxy)) : hook.bind(instance5.proxy), instance5, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      } else if (false) {
        warn(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        } else if (false) {
          warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (false) {
      warn(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance5) {
    const base = instance5.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance5.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    watch: mergeWatchOptions,
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function initProps(instance5, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance5.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance5, rawProps, props, attrs);
    for (const key in instance5.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (false) {
      validateProps(rawProps || {}, props, instance5);
    }
    if (isStateful) {
      instance5.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance5.type.props) {
        instance5.props = attrs;
      } else {
        instance5.props = props;
      }
    }
    instance5.attrs = attrs;
  }
  function updateProps(instance5, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance5;
    const rawCurrentProps = toRaw(props);
    const [options] = instance5.propsOptions;
    let hasAttrsChanged = false;
    if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
      if (patchFlag & 8) {
        const propsToUpdate = instance5.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance5.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance5, false);
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance5, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance5, true);
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance5, "set", "$attrs");
    }
    if (false) {
      validateProps(rawProps || {}, props, instance5);
    }
  }
  function setFullProps(instance5, rawProps, props, attrs) {
    const [options, needCastKeys] = instance5.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance5.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance5, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance5, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance5;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance5);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[0]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[1] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, EMPTY_ARR);
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (false) {
          warn(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (false) {
        warn(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[0] = booleanIndex > -1;
            prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    } else if (false) {
      warn(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  var isInternalKey = (key) => key[0] === "_" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    const normalized = withCtx((...args) => {
      if (false) {
        warn(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance5) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (false) {
          warn(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance5, children2) => {
    if (false) {
      warn(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children2);
    instance5.slots.default = () => normalized;
  };
  var initSlots = (instance5, children2) => {
    if (instance5.vnode.shapeFlag & 32) {
      const type = children2._;
      if (type) {
        instance5.slots = toRaw(children2);
        def(children2, "_", type);
      } else {
        normalizeObjectSlots(children2, instance5.slots = {});
      }
    } else {
      instance5.slots = {};
      if (children2) {
        normalizeVNodeSlots(instance5, children2);
      }
    }
    def(instance5.slots, InternalObjectKey, 1);
  };
  var updateSlots = (instance5, children2, optimized) => {
    const { vnode, slots } = instance5;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children2._;
      if (type) {
        if (false) {
          extend(slots, children2);
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children2);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children2.$stable;
        normalizeObjectSlots(children2, slots);
      }
      deletionComparisonTarget = children2;
    } else if (children2) {
      normalizeVNodeSlots(instance5, children2);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };
  function invokeDirectiveHook(vnode, prevVNode, instance5, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance5, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  var uid = 0;
  function createAppAPI(render23, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = Object.assign({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new Set();
      let isMounted = false;
      const app = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (false) {
            warn(`app.config cannot be replaced. Modify individual options instead.`);
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (false) {
            warn(`A plugin must either be a function or an object with an "install" function.`);
          }
          return app;
        },
        mixin(mixin) {
          if (true) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (false) {
              warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
            }
          } else if (false) {
            warn("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (false) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (false) {
            warn(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (false) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (false) {
            warn(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (false) {
              context.reload = () => {
                render23(cloneVNode(vnode), rootContainer, isSVG);
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render23(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (false) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          } else if (false) {
            warn(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
          }
        },
        unmount() {
          if (isMounted) {
            render23(null, app._container);
            if (false) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (false) {
            warn(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (false) {
            warn(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          }
          context.provides[key] = value;
          return app;
        }
      };
      return app;
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (false) {
      warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (hasOwn(setupState, ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (hasOwn(setupState, ref2)) {
              setupState[ref2] = value;
            }
          } else if (isRef(ref2)) {
            ref2.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else if (false) {
            warn("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else if (false) {
        warn("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (false) {
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (false) {
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {
      const multi = needWarn.length > 1;
      console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (false) {
      setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = false ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          } else if (false) {
            patchStaticNode(n1, n2, container, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (false) {
            warn("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, isSVG) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
      if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
        el = vnode.el = hostCloneNode(vnode.el);
      } else {
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value);
          }
          if (vnodeHook = props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      }
      if (false) {
        Object.defineProperty(el, "__vnode", {
          value: vnode,
          enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (false) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children2.length; i++) {
        const child = children2[i] = optimized ? cloneIfMounted(children2[i]) : normalizeVNode(children2[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (false) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        if (false) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (false) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (false) {
            traverseStaticChildren(n1, n2);
          } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
            traverseStaticChildren(n1, n2, true);
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance5 = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (false) {
        registerHMR(instance5);
      }
      if (false) {
        pushWarningContext(initialVNode);
        startMeasure(instance5, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance5.ctx.renderer = internals;
      }
      {
        if (false) {
          startMeasure(instance5, `init`);
        }
        setupComponent(instance5);
        if (false) {
          endMeasure(instance5, `init`);
        }
      }
      if (instance5.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance5, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance5.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance5, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      if (false) {
        popWarningContext();
        endMeasure(instance5, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance5 = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance5.asyncDep && !instance5.asyncResolved) {
          if (false) {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance5, n2, optimized);
          if (false) {
            popWarningContext();
          }
          return;
        } else {
          instance5.next = n2;
          invalidateJob(instance5.update);
          instance5.update();
        }
      } else {
        n2.component = n1.component;
        n2.el = n1.el;
        instance5.vnode = n2;
      }
    };
    const setupRenderEffect = (instance5, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance5.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance5;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance5, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance5, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (false) {
                startMeasure(instance5, `render`);
              }
              instance5.subTree = renderComponentRoot(instance5);
              if (false) {
                endMeasure(instance5, `render`);
              }
              if (false) {
                startMeasure(instance5, `hydrate`);
              }
              hydrateNode(el, instance5.subTree, instance5, parentSuspense, null);
              if (false) {
                endMeasure(instance5, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(() => !instance5.isUnmounted && hydrateSubTree());
            } else {
              hydrateSubTree();
            }
          } else {
            if (false) {
              startMeasure(instance5, `render`);
            }
            const subTree = instance5.subTree = renderComponentRoot(instance5);
            if (false) {
              endMeasure(instance5, `render`);
            }
            if (false) {
              startMeasure(instance5, `patch`);
            }
            patch(null, subTree, container, anchor, instance5, parentSuspense, isSVG);
            if (false) {
              endMeasure(instance5, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256) {
            instance5.a && queuePostRenderEffect(instance5.a, parentSuspense);
          }
          instance5.isMounted = true;
          if (false) {
            devtoolsComponentAdded(instance5);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance5;
          let originNext = next;
          let vnodeHook;
          if (false) {
            pushWarningContext(next || instance5.vnode);
          }
          toggleRecurse(instance5, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance5, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance5, true);
          if (false) {
            startMeasure(instance5, `render`);
          }
          const nextTree = renderComponentRoot(instance5);
          if (false) {
            endMeasure(instance5, `render`);
          }
          const prevTree = instance5.subTree;
          instance5.subTree = nextTree;
          if (false) {
            startMeasure(instance5, `patch`);
          }
          patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance5, parentSuspense, isSVG);
          if (false) {
            endMeasure(instance5, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance5, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
          if (false) {
            devtoolsComponentUpdated(instance5);
          }
          if (false) {
            popWarningContext();
          }
        }
      };
      const effect = instance5.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance5.update), instance5.scope);
      const update2 = instance5.update = effect.run.bind(effect);
      update2.id = instance5.uid;
      toggleRecurse(instance5, true);
      if (false) {
        effect.onTrack = instance5.rtc ? (e) => invokeArrayFns(instance5.rtc, e) : void 0;
        effect.onTrigger = instance5.rtg ? (e) => invokeArrayFns(instance5.rtg, e) : void 0;
        update2.ownerInstance = instance5;
      }
      update2();
    };
    const updateComponentPreRender = (instance5, nextVNode, optimized) => {
      nextVNode.component = instance5;
      const prevProps = instance5.vnode.props;
      instance5.vnode = nextVNode;
      instance5.next = null;
      updateProps(instance5, nextVNode.props, prevProps, optimized);
      updateSlots(instance5, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(void 0, instance5.update);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (false) {
              warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children: children2, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children2.length; i++) {
          move(children2[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref2, children: children2, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children2, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        if (false) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance5, parentSuspense, doRemove) => {
      if (false) {
        unregisterHMR(instance5);
      }
      const { bum, scope, update: update2, subTree, um } = instance5;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update2) {
        update2.active = false;
        unmount(subTree, instance5, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance5.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance5.asyncDep && !instance5.asyncResolved && instance5.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      if (false) {
        devtoolsComponentRemoved(instance5);
      }
    };
    const unmountChildren = (children2, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children2.length; i++) {
        unmount(children2[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render23 = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render: render23,
      hydrate,
      createApp: createAppAPI(render23, hydrate)
    };
  }
  function toggleRecurse({ effect, update: update2 }, allowed) {
    effect.allowRecurse = update2.allowRecurse = allowed;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (false) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  var isTeleport = (type) => type.__isTeleport;
  var COMPONENTS = "components";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  var NULL_DYNAMIC_COMPONENT = Symbol();
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance5 = currentRenderingInstance || currentInstance;
    if (instance5) {
      const Component = instance5.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(Component);
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = resolve(instance5[type] || Component[type], name) || resolve(instance5.appContext[type], name);
      if (!res && maybeSelfReference) {
        return Component;
      }
      if (false) {
        const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
        warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
      }
      return res;
    } else if (false) {
      warn(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  var Fragment = Symbol(false ? "Fragment" : void 0);
  var Text = Symbol(false ? "Text" : void 0);
  var Comment = Symbol(false ? "Comment" : void 0);
  var Static = Symbol(false ? "Static" : void 0);
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children2, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children2, patchFlag, dynamicProps, shapeFlag, true));
  }
  function createBlock(type, props, children2, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children2, patchFlag, dynamicProps, true));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (false) {
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var InternalObjectKey = `__vInternal`;
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children: children2,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children2);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children2) {
      vnode.shapeFlag |= isString(children2) ? 8 : 16;
    }
    if (false) {
      warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  var createVNode = false ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (false) {
        warn(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(type, props, true);
      if (children2) {
        normalizeChildren(cloned, children2);
      }
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (false) {
      type = toRaw(type);
      warn(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children2, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref2, patchFlag, children: children2 } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: false ? children2.map(deepCloneVNode) : children2,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor
    };
    return cloned;
  }
  function createTextVNode(text2 = " ", flag = 0) {
    return createVNode(Text, null, text2, flag);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(Fragment, null, child.slice());
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children2) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children2 == null) {
      children2 = null;
    } else if (isArray(children2)) {
      type = 16;
    } else if (typeof children2 === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children2.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children2._;
        if (!slotFlag && !(InternalObjectKey in children2)) {
          children2._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children2._ = 1;
          } else {
            children2._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children2)) {
      children2 = { default: children2, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children2 = String(children2);
      if (shapeFlag & 64) {
        type = 16;
        children2 = [createTextVNode(children2)];
      } else {
        type = 8;
      }
    }
    vnode.children = children2;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance5, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance5, 7, [
      vnode,
      prevVNode
    ]);
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
      return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
    }
    let slot = slots[name];
    if (false) {
      warn(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
      slot = () => [];
    }
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child))
        return true;
      if (child.type === Comment)
        return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  var getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => false ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => false ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => false ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => false ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => true ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => () => queueJob(i.update),
    $nextTick: (i) => nextTick.bind(i.proxy),
    $watch: (i) => true ? instanceWatch.bind(i) : NOOP
  });
  var PublicInstanceProxyHandlers = {
    get({ _: instance5 }, key) {
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance5;
      if (false) {
        return true;
      }
      if (false) {
        return setupState[key];
      }
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if ((normalizedProps = instance5.propsOptions[0]) && hasOwn(normalizedProps, key)) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance5, "get", key);
        }
        return publicGetter(instance5);
      } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
        {
          return globalProperties[key];
        }
      } else if (false) {
        if (data !== EMPTY_OBJ && (key[0] === "$" || key[0] === "_") && hasOwn(data, key)) {
          warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
        } else if (instance5 === currentRenderingInstance) {
          warn(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
      }
    },
    set({ _: instance5 }, key, value) {
      const { data, setupState, ctx } = instance5;
      if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance5.props, key)) {
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance5) {
        return false;
      } else {
        if (false) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  if (false) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
      return Reflect.ownKeys(target);
    };
  }
  var emptyAppContext = createAppContext();
  var uid$1 = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance5 = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new EffectScope(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      emit: null,
      emitted: null,
      propsDefaults: EMPTY_OBJ,
      inheritAttrs: type.inheritAttrs,
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (false) {
      instance5.ctx = createDevRenderContext(instance5);
    } else {
      instance5.ctx = { _: instance5 };
    }
    instance5.root = parent ? parent.root : instance5;
    instance5.emit = emit$1.bind(null, instance5);
    if (vnode.ce) {
      vnode.ce(instance5);
    }
    return instance5;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var setCurrentInstance = (instance5) => {
    currentInstance = instance5;
    instance5.scope.on();
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
  };
  function isStatefulComponent(instance5) {
    return instance5.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance5, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children: children2 } = instance5.vnode;
    const isStateful = isStatefulComponent(instance5);
    initProps(instance5, props, isStateful, isSSR);
    initSlots(instance5, children2);
    const setupResult = isStateful ? setupStatefulComponent(instance5, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance5, isSSR) {
    var _a2;
    const Component = instance5.type;
    if (false) {
      if (Component.name) {
        validateComponentName(Component.name, instance5.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance5.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
      }
    }
    instance5.accessCache = /* @__PURE__ */ Object.create(null);
    instance5.proxy = markRaw(new Proxy(instance5.ctx, PublicInstanceProxyHandlers));
    if (false) {
      exposePropsOnRenderContext(instance5);
    }
    const { setup } = Component;
    if (setup) {
      const setupContext = instance5.setupContext = setup.length > 1 ? createSetupContext(instance5) : null;
      setCurrentInstance(instance5);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance5, 0, [false ? shallowReadonly(instance5.props) : instance5.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance5, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance5, 0);
          });
        } else {
          instance5.asyncDep = setupResult;
          if (false) {
            const name = (_a2 = Component.name) !== null && _a2 !== void 0 ? _a2 : "Anonymous";
            warn(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
          }
        }
      } else {
        handleSetupResult(instance5, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance5, isSSR);
    }
  }
  function handleSetupResult(instance5, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance5.type.__ssrInlineRender) {
        instance5.ssrRender = setupResult;
      } else {
        instance5.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (false) {
        warn(`setup() should not return VNodes directly - return a render function instead.`);
      }
      if (false) {
        instance5.devtoolsRawSetupState = setupResult;
      }
      instance5.setupState = proxyRefs(setupResult);
      if (false) {
        exposeSetupStateOnRenderContext(instance5);
      }
    } else if (false) {
      warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
    finishComponentSetup(instance5, isSSR);
  }
  var compile;
  var installWithProxy;
  function finishComponentSetup(instance5, isSSR, skipOptions) {
    const Component = instance5.type;
    if (!instance5.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template;
        if (template) {
          if (false) {
            startMeasure(instance5, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance5.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
          if (false) {
            endMeasure(instance5, `compile`);
          }
        }
      }
      instance5.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance5);
      }
    }
    if (true) {
      setCurrentInstance(instance5);
      pauseTracking();
      applyOptions(instance5);
      resetTracking();
      unsetCurrentInstance();
    }
    if (false) {
      if (!compile && Component.template) {
        warn(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
      } else {
        warn(`Component is missing template or render function.`);
      }
    }
  }
  function createAttrsProxy(instance5) {
    return new Proxy(instance5.attrs, false ? {
      get(target, key) {
        markAttrsAccessed();
        track(instance5, "get", "$attrs");
        return target[key];
      },
      set() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      }
    } : {
      get(target, key) {
        track(instance5, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance5) {
    const expose = (exposed) => {
      if (false) {
        warn(`expose() should be called only once per setup().`);
      }
      instance5.exposed = exposed || {};
    };
    let attrs;
    if (false) {
      return Object.freeze({
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance5));
        },
        get slots() {
          return shallowReadonly(instance5.slots);
        },
        get emit() {
          return (event, ...args) => instance5.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance5));
        },
        slots: instance5.slots,
        emit: instance5.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance5) {
    if (instance5.exposed) {
      return instance5.exposeProxy || (instance5.exposeProxy = new Proxy(proxyRefs(markRaw(instance5.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance5);
          }
        }
      }));
    }
  }
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name;
  }
  function formatComponentName(instance5, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance5 && instance5.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance5.components || instance5.parent.type.components) || inferFromRegistry(instance5.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  var computed2 = (getterOrOptions, debugOptions) => {
    return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
  };
  function h(type, propsOrChildren, children2) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children2 = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children2)) {
        children2 = [children2];
      }
      return createVNode(type, propsOrChildren, children2);
    }
  }
  var ssrContextKey = Symbol(false ? `ssrContext` : ``);
  var version = "3.2.33";
  var svgNS = "http://www.w3.org/2000/svg";
  var doc = typeof document !== "undefined" ? document : null;
  var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, isSVG, is, props) => {
      const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text2) => doc.createTextNode(text2),
    createComment: (text2) => doc.createComment(text2),
    setText: (node, text2) => {
      node.nodeValue = text2;
    },
    setElementText: (el, text2) => {
      el.textContent = text2;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    cloneNode(el) {
      const cloned = el.cloneNode(true);
      if (`_value` in el) {
        cloned._value = el._value;
      }
      return cloned;
    },
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling))
            break;
        }
      } else {
        templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
        const template = templateContainer.content;
        if (isSVG) {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        before ? before.nextSibling : parent.firstChild,
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  function patchClass(el, value, isSVG) {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    } else {
      const currentDisplay = style.display;
      if (isCssString) {
        if (prev !== next) {
          style.cssText = next;
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
      if ("_vod" in el) {
        style.display = currentDisplay;
      }
    }
  }
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance5) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean = isSpecialBooleanAttr(key);
      if (value == null || isBoolean && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue || el.tagName === "OPTION") {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (false) {
        warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
      }
    }
    needRemove && el.removeAttribute(key);
  }
  var [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
    let _getNow2 = Date.now;
    let skipTimestampCheck2 = false;
    if (typeof window !== "undefined") {
      if (Date.now() > document.createEvent("Event").timeStamp) {
        _getNow2 = () => performance.now();
      }
      const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
      skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
    }
    return [_getNow2, skipTimestampCheck2];
  })();
  var cachedNow = 0;
  var p = /* @__PURE__ */ Promise.resolve();
  var reset = () => {
    cachedNow = 0;
  };
  var getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance5 = null) {
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance5);
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    return [hyphenate(name.slice(2)), options];
  }
  function createInvoker(initialValue, instance5) {
    const invoker = (e) => {
      const timeStamp = e.timeStamp || _getNow();
      if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance5, 5, [e]);
      }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
    } else {
      return value;
    }
  }
  var nativeOnRE = /^on[a-z]/;
  var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  function defineCustomElement(options, hydate) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
      constructor(initialProps) {
        super(Comp, initialProps, hydate);
      }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
  }
  var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
  };
  var VueElement = class extends BaseClass {
    constructor(_def, _props = {}, hydrate) {
      super();
      this._def = _def;
      this._props = _props;
      this._instance = null;
      this._connected = false;
      this._resolved = false;
      this._numberProps = null;
      if (this.shadowRoot && hydrate) {
        hydrate(this._createVNode(), this.shadowRoot);
      } else {
        if (false) {
          warn(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
        }
        this.attachShadow({ mode: "open" });
      }
    }
    connectedCallback() {
      this._connected = true;
      if (!this._instance) {
        this._resolveDef();
      }
    }
    disconnectedCallback() {
      this._connected = false;
      nextTick(() => {
        if (!this._connected) {
          render(null, this.shadowRoot);
          this._instance = null;
        }
      });
    }
    _resolveDef() {
      if (this._resolved) {
        return;
      }
      this._resolved = true;
      for (let i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      }
      new MutationObserver((mutations) => {
        for (const m of mutations) {
          this._setAttr(m.attributeName);
        }
      }).observe(this, { attributes: true });
      const resolve2 = (def2) => {
        const { props, styles: styles8 } = def2;
        const hasOptions = !isArray(props);
        const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
        let numberProps;
        if (hasOptions) {
          for (const key in this._props) {
            const opt = props ? props[key] : void 0;
            if (opt === Number || opt && opt.type === Number) {
              this._props[key] = toNumber(this._props[key]);
              (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[key] = true;
            }
          }
        }
        this._numberProps = numberProps;
        for (const key of Object.keys(this)) {
          if (key[0] !== "_") {
            this._setProp(key, this[key], true, false);
          }
        }
        for (const key of rawKeys.map(camelize)) {
          Object.defineProperty(this, key, {
            get() {
              return this._getProp(key);
            },
            set(val) {
              this._setProp(key, val);
            }
          });
        }
        this._applyStyles(styles8);
        this._update();
      };
      const asyncDef = this._def.__asyncLoader;
      if (asyncDef) {
        asyncDef().then(resolve2);
      } else {
        resolve2(this._def);
      }
    }
    _setAttr(key) {
      let value = this.getAttribute(key);
      if (this._numberProps && this._numberProps[key]) {
        value = toNumber(value);
      }
      this._setProp(camelize(key), value, false);
    }
    _getProp(key) {
      return this._props[key];
    }
    _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
      if (val !== this._props[key]) {
        this._props[key] = val;
        if (shouldUpdate && this._instance) {
          this._update();
        }
        if (shouldReflect) {
          if (val === true) {
            this.setAttribute(hyphenate(key), "");
          } else if (typeof val === "string" || typeof val === "number") {
            this.setAttribute(hyphenate(key), val + "");
          } else if (!val) {
            this.removeAttribute(hyphenate(key));
          }
        }
      }
    }
    _update() {
      render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
      const vnode = createVNode(this._def, extend({}, this._props));
      if (!this._instance) {
        vnode.ce = (instance5) => {
          this._instance = instance5;
          instance5.isCE = true;
          if (false) {
            instance5.ceReload = (newStyles) => {
              if (this._styles) {
                this._styles.forEach((s) => this.shadowRoot.removeChild(s));
                this._styles.length = 0;
              }
              this._applyStyles(newStyles);
              if (!this._def.__asyncLoader) {
                this._instance = null;
                this._update();
              }
            };
          }
          instance5.emit = (event, ...args) => {
            this.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          };
          let parent = this;
          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance5.parent = parent._instance;
              break;
            }
          }
        };
      }
      return vnode;
    }
    _applyStyles(styles8) {
      if (styles8) {
        styles8.forEach((css) => {
          const s = document.createElement("style");
          s.textContent = css;
          this.shadowRoot.appendChild(s);
          if (false) {
            (this._styles || (this._styles = [])).push(s);
          }
        });
      }
    }
  };
  var TRANSITION = "transition";
  var ANIMATION = "animation";
  var Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
  Transition.displayName = "Transition";
  var DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  var TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
  var callHook2 = (hook, args = []) => {
    if (isArray(hook)) {
      hook.forEach((h2) => h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  var hasExplicitCallback = (hook) => {
    return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve2 = () => finishEnter(el, isAppear, done);
        callHook2(hook, [el, resolve2]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve2);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook2(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook2(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        const resolve2 = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
        nextFrame(() => {
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve2);
          }
        });
        callHook2(onLeave, [el, resolve2]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false);
        callHook2(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true);
        callHook2(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook2(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (false)
      validateDuration(res);
    return res;
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el._vtc = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  var endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve2();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve2();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles8 = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles8[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles8[TRANSITION + "Property"]);
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  var renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  var render = (...args) => {
    ensureRenderer().render({ ...args[0], props: !(args[0] && args[0].props) ? {} : Object.entries(args[0].props).filter((d) => !d[0].startsWith("@")).reduce((acc, [key, value]) => ({ ...acc, [key]: (() => {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    })() }), {}) }, args[1]);
  };
  if (false) {
    initDev();
  }

  // ../ucp-example/dist/elements/VueDemo.js
  var VueDemo_default = /* @__PURE__ */ defineComponent({
    props: {
      text: { type: String, required: true }
    },
    emits: ["myclick"],
    setup(__props, { expose, emit }) {
      expose();
      const {
        text: text2
      } = __props;
      const __returned__ = { emit };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("button", {
      onClick: _cache[0] || (_cache[0] = () => $setup.emit("myclick", "Vue click"))
    }, toDisplayString($props.text), 1);
  }
  var defineCe = (script5, style) => {
    var Element = defineCustomElement(script5);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-demo", StyledElement);
  };
  var renderFix = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render2(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  VueDemo_default.render = renderFix;
  VueDemo_default.__file = "../ucp-example/src/components/VueDemo.vue";
  var styles = [];
  defineCe(VueDemo_default, styles.join("\n"));

  // ../ucp-example/dist/elements/VueEmits.js
  var VueEmits_default = /* @__PURE__ */ defineComponent({
    emits: ["stringevent", "numevent", "objevent", "voidevent"],
    setup(__props, { expose, emit }) {
      expose();
      const __returned__ = { emit };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("button", {
      class: "event-button",
      onClick: _cache[0] || (_cache[0] = () => {
        $setup.emit("stringevent", "demo");
        $setup.emit("numevent", 5);
        $setup.emit("objevent", { value: "val" });
        $setup.emit("voidevent");
      })
    }, "Send event ");
  }
  var defineCe2 = (script5, style) => {
    var Element = defineCustomElement(script5);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-emits", StyledElement);
  };
  var renderFix2 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render3(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  VueEmits_default.render = renderFix2;
  VueEmits_default.__file = "../ucp-example/src/components/VueEmits.vue";
  var styles2 = [];
  defineCe2(VueEmits_default, styles2.join("\n"));

  // ../ucp-example/dist/elements/VueNested.js
  function render4(_ctx, _cache) {
    const _component_ex_vue_simple = resolveComponent("ex-vue-simple");
    return openBlock(), createBlock(_component_ex_vue_simple, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    });
  }
  var script = {};
  var renderFix3 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render4(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  script.render = renderFix3;
  script.__file = "../ucp-example/dist/wrapper/vue/VueSimple.vue";
  var VueSimple_default = script;
  var VueNested_default = /* @__PURE__ */ defineComponent({
    setup(__props, { expose }) {
      expose();
      const __returned__ = { VueSimple: VueSimple_default };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render22(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", null, [
      createVNode($setup["VueSimple"])
    ]);
  }
  var defineCe3 = (script22, style) => {
    var Element = defineCustomElement(script22);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-nested", StyledElement);
  };
  var renderFix22 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render22(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  VueNested_default.render = renderFix22;
  VueNested_default.__file = "../ucp-example/src/components/VueNested.vue";
  var styles3 = [];
  defineCe3(VueNested_default, styles3.join("\n"));

  // ../ucp-example/dist/elements/VueProps.js
  var VueProps_default = /* @__PURE__ */ defineComponent({
    props: {
      stringprop: { type: String, required: true },
      numprop: { type: Number, required: true },
      complexprop: { type: Object, required: true }
    },
    setup(__props, { expose }) {
      expose();
      const {
        stringprop,
        numprop,
        complexprop
      } = __props;
      const __returned__ = {};
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  var _hoisted_1 = { class: "stringprop" };
  var _hoisted_2 = { class: "numprop" };
  var _hoisted_3 = { class: "complexprop" };
  function render5(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", null, [
      createBaseVNode("div", _hoisted_1, toDisplayString($props.stringprop), 1),
      createBaseVNode("div", _hoisted_2, toDisplayString($props.numprop + 1), 1),
      createBaseVNode("div", _hoisted_3, toDisplayString($props.complexprop?.value), 1)
    ]);
  }
  var defineCe4 = (script5, style) => {
    var Element = defineCustomElement(script5);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-props", StyledElement);
  };
  var renderFix4 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render5(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  VueProps_default.render = renderFix4;
  VueProps_default.__file = "../ucp-example/src/components/VueProps.vue";
  var styles4 = [];
  defineCe4(VueProps_default, styles4.join("\n"));

  // ../ucp-example/dist/elements/VueSimple.js
  var _hoisted_12 = { class: "dummy" };
  function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("div", _hoisted_12, "Dummy");
  }
  var VueSimple_default2 = `.dummy {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}`;
  var defineCe5 = (script22, style) => {
    var Element = defineCustomElement(script22);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-simple", StyledElement);
  };
  var script2 = {};
  var renderFix5 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render6(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  script2.render = renderFix5;
  script2.__file = "../ucp-example/src/components/VueSimple.vue";
  var styles5 = [VueSimple_default2];
  defineCe5(script2, styles5.join("\n"));

  // ../ucp-example/dist/elements/VueSlots.js
  var _hoisted_13 = { class: "slot" };
  function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("div", null, [
      renderSlot(_ctx.$slots, "default"),
      createBaseVNode("div", _hoisted_13, [
        renderSlot(_ctx.$slots, "box")
      ]),
      renderSlot(_ctx.$slots, "after")
    ]);
  }
  var VueSlots_default = `
.slot {
  border: 2px solid red;
}
`;
  var defineCe6 = (script22, style) => {
    var Element = defineCustomElement(script22);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-slots", StyledElement);
  };
  var script3 = {};
  var renderFix6 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render7(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  script3.render = renderFix6;
  script3.__file = "../ucp-example/src/components/VueSlots.vue";
  var styles6 = [VueSlots_default];
  defineCe6(script3, styles6.join("\n"));

  // ../ucp-example/dist/elements/VueThemed.js
  var _hoisted_14 = { class: "themed" };
  function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("button", _hoisted_14, "Themed");
  }
  var VueThemed_default = `
.themed[data-v-6903cf83] {
  background-color: var(--bg-color);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;
  padding: 1rem;
  color: whitesmoke;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  font-weight: 500;
  margin: 10px;
}
`;
  var defineCe7 = (script22, style) => {
    var Element = defineCustomElement(script22);
    class StyledElement extends Element {
      constructor(args) {
        super(args);
        if (style) {
          const styleTag = document.createElement("style");
          styleTag.innerText = style;
          this.shadowRoot.appendChild(styleTag);
        }
      }
    }
    customElements.define("ex-vue-themed", StyledElement);
  };
  var script4 = {};
  var renderFix7 = (_ctx, _cache, $props, $setup, $data, $options) => {
    const emitPrefixer = (key, detail) => $setup.emit("ex-" + key, detail);
    return render8(_ctx, _cache, $props, { ...$setup, emit: emitPrefixer }, $data, $options);
  };
  script4.render = renderFix7;
  script4.__file = "../ucp-example/src/components/VueThemed.vue";
  script4.__scopeId = "data-v-6903cf83";
  var styles7 = [VueThemed_default];
  defineCe7(script4, styles7.join("\n"));
})();
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
