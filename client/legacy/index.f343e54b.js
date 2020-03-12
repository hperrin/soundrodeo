import { d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, S as SvelteComponentDev, k as space, l as element, t as text, q as query_selector_all, m as detach_dev, n as claim_space, o as claim_element, p as children, r as claim_text, u as add_location, v as attr_dev, w as insert_dev, x as append_dev, y as noop } from './client.e2f997a3.js';

var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var section;
  var h1;
  var t1;
  var t2;
  var p;
  var t3;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h1 = element("h1");
      t1 = text("Sound Rodeo!!");
      t2 = space();
      p = element("p");
      t3 = text("This will be a soundboard app soon. Right now it's a useless app that will\n    corrupt anything you put in it. If you try to use it at all right now,\n    everything you put in it will be deleted once I update it.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1s8z4j3\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Sound Rodeo!!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      p = claim_element(section_nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "This will be a soundboard app soon. Right now it's a useless app that will\n    corrupt anything you put in it. If you try to use it at all right now,\n    everything you put in it will be deleted once I update it.");
      p_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Sound Rodeo";
      add_location(h1, file, 5, 2, 71);
      add_location(p, file, 7, 2, 97);
      attr_dev(section, "class", "svelte-ceyqu4");
      add_location(section, file, 4, 0, 59);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h1);
      append_dev(h1, t1);
      append_dev(section, t2);
      append_dev(section, p);
      append_dev(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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

var Routes =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Routes).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
