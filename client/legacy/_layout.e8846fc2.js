import { d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, S as SvelteComponentDev, z as validate_store, A as component_subscribe, B as loading, l as element, o as claim_element, p as children, m as detach_dev, v as attr_dev, u as add_location, w as insert_dev, C as _slicedToArray, D as group_outros, E as transition_out, F as check_outros, G as transition_in, H as create_slot, I as get_slot_context, J as get_slot_changes, K as svg_element, L as mdiLoading, M as set_style, x as append_dev, y as noop } from './client.e2f997a3.js';

var file = "src/routes/board/_layout.svelte"; // (9:2) {:else}

function create_else_block(ctx) {
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      2) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[1], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[1], dirty, null));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(9:2) {:else}",
    ctx: ctx
  });
  return block;
} // (2:2) {#if $loading}


function create_if_block(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        style: true,
        viewBox: true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "#FFFFFF");
      attr_dev(path, "d", mdiLoading);
      add_location(path, file, 6, 6, 143);
      set_style(svg, "width", "150px");
      set_style(svg, "height", "150px");
      set_style(svg, "margin", "0 auto");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "class", "spin");
      add_location(svg, file, 2, 4, 27);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(2:2) {#if $loading}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var current_block_type_index;
  var if_block;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*$loading*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18ir4uo");
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_blocks[current_block_type_index].d();
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

function instance($$self, $$props, $$invalidate) {
  var $loading;
  validate_store(loading, "loading");
  component_subscribe($$self, loading, function ($$value) {
    return $$invalidate(0, $loading = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("$loading" in $$props) loading.set($loading = $$props.$loading);
  };

  return [$loading, $$scope, $$slots];
}

var Layout =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Layout;
}(SvelteComponentDev);

export default Layout;
