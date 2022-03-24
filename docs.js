var ucp = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/Docs/docsmain.ts
  var docsmain_exports = {};
  __export(docsmain_exports, {
    default: () => docsmain_default
  });

  // ../../node_modules/svelte/internal/index.mjs
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
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
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
  function empty() {
    return text("");
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
  function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
      const option = select.options[i];
      if (option.__value === value) {
        option.selected = true;
        return;
      }
    }
    select.selectedIndex = -1;
  }
  function select_value(select) {
    const selected_option = select.querySelector(":checked") || select.options[0];
    return selected_option && selected_option.__value;
  }
  var HtmlTag = class {
    constructor() {
      this.e = this.n = null;
    }
    c(html) {
      this.h(html);
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        this.e = element(target.nodeName);
        this.t = target;
        this.c(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  };
  var current_component;
  function set_current_component(component) {
    current_component = component;
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
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
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
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
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
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
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
  var SvelteComponent = class {
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

  // src/Docs/Docs.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
  }
  function create_if_block_1(ctx) {
    let html_tag;
    let raw_value = window.atob(ctx[9].wc) + "";
    let t0;
    let t1_value = window.atob(ctx[9][ctx[0]]) + "";
    let t1;
    return {
      c() {
        html_tag = new HtmlTag();
        t0 = space();
        t1 = text(t1_value);
        html_tag.a = t0;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t0, anchor);
        insert(target, t1, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && raw_value !== (raw_value = window.atob(ctx2[9].wc) + ""))
          html_tag.p(raw_value);
        if (dirty & 3 && t1_value !== (t1_value = window.atob(ctx2[9][ctx2[0]]) + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_if_block(ctx) {
    let html_tag;
    let raw_value = window.atob(ctx[9].md) + "";
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 2 && raw_value !== (raw_value = window.atob(ctx2[9].md) + ""))
          html_tag.p(raw_value);
      },
      d(detaching) {
        if (detaching)
          detach(html_anchor);
        if (detaching)
          html_tag.d();
      }
    };
  }
  function create_each_block(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (ctx2[9].md)
        return create_if_block;
      if (ctx2[9].wc)
        return create_if_block_1;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type && current_block_type(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if (if_block)
            if_block.d(1);
          if_block = current_block_type && current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if (if_block) {
          if_block.d(detaching);
        }
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment(ctx) {
    let div;
    let nav;
    let select;
    let option0;
    let option1;
    let option2;
    let t3;
    let main;
    let mounted;
    let dispose;
    let each_value = ctx[1].content;
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        nav = element("nav");
        select = element("select");
        option0 = element("option");
        option0.textContent = "React";
        option1 = element("option");
        option1.textContent = "Vue";
        option2 = element("option");
        option2.textContent = "Web Components";
        t3 = space();
        main = element("main");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        option0.__value = "react";
        option0.value = option0.__value;
        option1.__value = "vue";
        option1.value = option1.__value;
        option2.__value = "wc";
        option2.value = option2.__value;
        if (ctx[0] === void 0)
          add_render_callback(() => ctx[4].call(select));
        attr(nav, "class", "svelte-1pivokt");
        attr(main, "class", "svelte-1pivokt");
        attr(div, "class", "root svelte-1pivokt");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, nav);
        append(nav, select);
        append(select, option0);
        append(select, option1);
        append(select, option2);
        select_option(select, ctx[0]);
        append(div, t3);
        append(div, main);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(main, null);
        }
        if (!mounted) {
          dispose = [
            listen(select, "change", ctx[4]),
            listen(select, "change", ctx[5]),
            listen(div, "___docs", ctx[6])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1) {
          select_option(select, ctx2[0]);
        }
        if (dirty & 3) {
          each_value = ctx2[1].content;
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(main, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let currentPage;
    let route = "";
    const updateHash = () => $$invalidate(3, route = window.location.hash.substring(1));
    window.addEventListener("popstate", updateHash);
    window.addEventListener("hashchange", updateHash);
    updateHash();
    let docs = window.docs;
    let framework = localStorage.getItem("framework") || "react";
    const setFramework = (fw) => {
      $$invalidate(0, framework = fw);
      localStorage.setItem("framework", fw);
    };
    function select_change_handler() {
      framework = select_value(this);
      $$invalidate(0, framework);
    }
    const change_handler = (ev) => setFramework(ev.target.value);
    const __docs_handler = (val) => console.log(val);
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 8) {
        $:
          $$invalidate(1, currentPage = docs.find((doc) => "/" + doc.page.join("") === route));
      }
    };
    return [
      framework,
      currentPage,
      setFramework,
      route,
      select_change_handler,
      change_handler,
      __docs_handler
    ];
  }
  var Docs = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  };
  var Docs_default = Docs;

  // src/Docs/docsmain.ts
  var docsmain_default = new Docs_default({ target: document.getElementById("docs") });
  return __toCommonJS(docsmain_exports);
})();
