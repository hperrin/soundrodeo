import { aF as _asyncToGenerator, aG as _regeneratorRuntime, d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, X as _createClass, S as SvelteComponentDev, k as space, l as element, t as text, q as query_selector_all, m as detach_dev, n as claim_space, o as claim_element, p as children, r as claim_text, u as add_location, v as attr_dev, w as insert_dev, x as append_dev, C as _slicedToArray, an as set_data_dev, y as noop } from './client.e2f997a3.js';

var file = "src/routes/blog/[slug].svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var h1;
  var t1_value =
  /*post*/
  ctx[0].title + "";
  var t1;
  var t2;
  var div;
  var raw_value =
  /*post*/
  ctx[0].html + "";
  document.title = title_value =
  /*post*/
  ctx[0].title;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-iu3vwn\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h1, file, 4, 0, 60);
      attr_dev(div, "class", "content svelte-1ycksgq");
      add_location(div, file, 6, 0, 83);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*post*/
      1 && title_value !== (title_value =
      /*post*/
      ctx[0].title)) {
        document.title = title_value;
      }

      if (dirty &
      /*post*/
      1 && t1_value !== (t1_value =
      /*post*/
      ctx[0].title + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*post*/
      1 && raw_value !== (raw_value =
      /*post*/
      ctx[0].html + "")) div.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref3) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("blog/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  return [post];
}

var U5Bslugu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bslugu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
