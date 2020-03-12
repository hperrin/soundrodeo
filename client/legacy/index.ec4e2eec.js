import { d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, S as SvelteComponentDev, ag as create_component, ah as claim_component, ai as mount_component, y as noop, G as transition_in, E as transition_out, ak as destroy_component } from './client.e2f997a3.js';
import Board from './[id].b81cacc9.js';

function create_fragment(ctx) {
  var current;
  var board = new Board({
    props: {
      create: true
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(board.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(board.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(board, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(board.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(board.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(board, detaching);
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

var Edit =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Edit, _SvelteComponentDev);

  function Edit(options) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Edit",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Edit;
}(SvelteComponentDev);

export default Edit;
