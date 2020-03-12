import { N as styleInject, O as __extends, P as _assign, Q as MDCFoundation, R as MDCComponent, T as applyPassive, U as MDCRipple, V as matches, W as MDCRippleFoundation, d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, X as _createClass, S as SvelteComponentDev, Y as forwardEventsBuilder, Z as current_component, $ as getContext, a0 as onMount, a1 as onDestroy, a2 as assign, a3 as exclude_internal_props, a4 as empty, w as insert_dev, C as _slicedToArray, D as group_outros, E as transition_out, F as check_outros, G as transition_in, m as detach_dev, a5 as binding_callbacks, H as create_slot, a6 as exclude, l as element, o as claim_element, p as children, a7 as set_attributes, u as add_location, a8 as action_destroyer, a9 as useActions, I as get_slot_context, J as get_slot_changes, aa as get_spread_update, ab as is_function, ac as run_all, y as noop, v as attr_dev, k as space, n as claim_space, x as append_dev, ad as listen_dev, ae as set_input_value, af as bubble, ag as create_component, ah as claim_component, ai as mount_component, aj as get_spread_object, ak as destroy_component, al as bind, am as add_flush_callback, t as text, r as claim_text, an as set_data_dev, ao as Button, z as validate_store, A as component_subscribe, ap as stores$1, aq as boards, B as loading, q as query_selector_all, M as set_style, ar as set_store_value, as as _toConsumableArray, at as goto, au as Label } from './client.e2f997a3.js';

var css = ".mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-50%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard .25s 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(0) translateY(-50%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-50%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-50%) scale(.75)}to{transform:translateX(0) translateY(-50%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;transition:border .15s cubic-bezier(.4,0,.2,1);border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],.mdc-notched-outline__trailing,[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.33333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .15s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-text-field-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:auto}.mdc-text-field-character-counter{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field-character-counter{margin-left:0;margin-right:auto;padding-left:0;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-text-field{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:4px 4px 0 0;display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:after,.mdc-text-field:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-text-field:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-text-field.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field:after,.mdc-text-field:before{background-color:hsla(0,0%,100%,.87)}.mdc-text-field:hover:before{opacity:.08}.mdc-text-field.mdc-ripple-upgraded--background-focused:before,.mdc-text-field:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-text-field:after,.mdc-text-field:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-text-field.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:hsla(0,0%,100%,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:hsla(0,0%,100%,.87)}.mdc-text-field .mdc-text-field__input{caret-color:#1565c0;caret-color:var(--mdc-theme-primary,#1565c0)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:hsla(0,0%,100%,.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:hsla(0,0%,100%,.87)}.mdc-text-field .mdc-line-ripple{background-color:#1565c0;background-color:var(--mdc-theme-primary,#1565c0)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:hsla(0,0%,100%,.12)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter{color:hsla(0,0%,100%,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:hsla(0,0%,100%,.54)}.mdc-text-field:not(.mdc-text-field--disabled){background-color:#0a0a0a}.mdc-text-field .mdc-floating-label{left:16px;right:auto;top:18px;pointer-events:none}.mdc-text-field .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field .mdc-floating-label{left:auto;right:16px}.mdc-text-field--textarea .mdc-floating-label{left:4px;right:auto}.mdc-text-field--textarea .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-floating-label{left:auto;right:4px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto;top:17px}.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:36px;right:auto}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:auto;right:36px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:40px;right:auto}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:auto;right:40px}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;align-self:flex-end;box-sizing:border-box;width:100%;height:100%;padding:20px 16px 6px;transition:opacity .15s cubic-bezier(.4,0,.2,1);border:none;border-bottom:1px solid;border-radius:0;background:none;appearance:none}.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(.4,0,.2,1);opacity:0;color:hsla(0,0%,100%,.54)}.mdc-text-field__input:-ms-input-placeholder{color:hsla(0,0%,100%,.54)!important}.mdc-text-field--focused .mdc-text-field__input::placeholder,.mdc-text-field--fullwidth .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:.11s;opacity:1}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill{z-index:auto!important}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{padding-top:16px;padding-bottom:16px}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-50%) scale(.75);cursor:auto}.mdc-text-field--outlined{border:none;overflow:visible}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#1565c0;border-color:var(--mdc-theme-primary,#1565c0)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-144%) scale(1);font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75);font-size:1rem}.mdc-text-field--outlined:after,.mdc-text-field--outlined:before{content:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px 16px 14px;border:none!important;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled{background-color:transparent}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) scale(1);font-size:.8rem}.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) scale(.8);font-size:1rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense .25s 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{top:14px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:auto}.mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label{left:auto;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon .25s 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl .25s 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:auto;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(-21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(-21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense .25s 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl .25s 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:32px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:auto;right:32px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:44px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:auto;right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.8)}.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-dense .25s 1}.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.813rem}.mdc-text-field__input:required~.mdc-floating-label:after,.mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label:after{margin-left:1px;content:\"*\"}.mdc-text-field--textarea{display:inline-flex;width:auto;height:auto;transition:none;overflow:visible}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.38)}.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.87)}.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#1565c0;border-color:var(--mdc-theme-primary,#1565c0)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing,[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--textarea:after,.mdc-text-field--textarea:before{content:none}.mdc-text-field--textarea:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-144%) scale(1);font-size:.75rem}.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75);font-size:1rem}.mdc-text-field--textarea .mdc-text-field-character-counter{left:auto;right:16px;position:absolute;bottom:13px}.mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter{left:16px;right:auto}.mdc-text-field--textarea .mdc-text-field__input{align-self:auto;box-sizing:border-box;height:auto;margin:8px 1px 1px 0;padding:0 16px 16px;border:none}.mdc-text-field--textarea .mdc-text-field-character-counter+.mdc-text-field__input{margin-bottom:28px;padding-bottom:0}.mdc-text-field--textarea .mdc-floating-label{top:17px;bottom:auto;width:auto;pointer-events:none}.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):after,.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):before{content:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{padding:0}.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field--dense+.mdc-text-field-helper-line{margin-bottom:4px}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-text-field__input:required~.mdc-floating-label:after,.mdc-text-field--focused .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label:after,.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(21,101,192,.87)}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#1565c0;border-color:var(--mdc-theme-primary,#1565c0)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#b71c1c;background-color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b71c1c;caret-color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon~.mdc-text-field__icon,.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-floating-label:after,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label:after{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b71c1c;border-color:var(--mdc-theme-error,#b71c1c)}.mdc-text-field--disabled{background-color:#050505;border-bottom:none;pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:hsla(0,0%,100%,.06);color:hsla(0,0%,100%,.37)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text,.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--disabled .mdc-text-field-character-counter{color:hsla(0,0%,100%,.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:hsla(0,0%,100%,.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:hsla(0,0%,100%,.12)}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{background-color:transparent;background-color:#f9f9f9}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:hsla(0,0%,100%,.06)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}@keyframes mdc-floating-label-shake-float-above-text-field-dense{0%{transform:translateX(0) translateY(-70%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-70%) scale(.8)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-70%) scale(.8)}to{transform:translateX(0) translateY(-70%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(0) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-130%) scale(.75)}to{transform:translateX(0) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(0) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-120%) scale(.8)}to{transform:translateX(0) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(0) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-130%) scale(.75)}to{transform:translateX(0) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(-21px) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% - 21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% - 21px)) translateY(-120%) scale(.8)}to{transform:translateX(-21px) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(0) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-130%) scale(.75)}to{transform:translateX(0) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(21px) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% - -21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% - -21px)) translateY(-120%) scale(.8)}to{transform:translateX(21px) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(0) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-130%) scale(.75)}to{transform:translateX(0) translateY(-130%) scale(.75)}}.smui-text-field--standard:after,.smui-text-field--standard:before{content:none}.smui-text-field--standard.mdc-text-field--disabled,.smui-text-field--standard:not(.mdc-text-field--disabled){background-color:transparent}.smui-text-field--standard .mdc-text-field__input{padding-left:0;padding-right:0}.smui-text-field--standard .mdc-floating-label{left:0;right:auto}.smui-text-field--standard .mdc-floating-label[dir=rtl],[dir=rtl] .smui-text-field--standard .mdc-floating-label{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:32px;padding-right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:0;padding-right:32px}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-floating-label{left:32px;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon .mdc-floating-label{left:auto;right:32px}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:32px;padding-right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:0;padding-right:32px}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:32px;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:auto;right:32px}.smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:0;padding-right:36px}.smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:36px;padding-right:0}.smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:0;padding-right:32px}.smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:32px;padding-right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:32px;padding-right:36px}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:36px;padding-right:32px}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon,[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:32px;padding-right:32px}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{left:auto;right:0}.smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .smui-text-field--standard.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{left:0;right:auto}.smui-text-field--standard+.mdc-text-field-helper-line{padding-left:0;padding-right:0}";
styleInject(css);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  __extends(MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCFloatingLabel =
/** @class */
function (_super) {
  __extends(MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype.float = function (shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this.root_.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCFloatingLabelFoundation(adapter);
  };

  return MDCFloatingLabel;
}(MDCComponent);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCLineRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        registerEventHandler: function registerEventHandler() {
          return undefined;
        },
        deregisterEventHandler: function deregisterEventHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCLineRipple =
/** @class */
function (_super) {
  __extends(MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCLineRippleFoundation(adapter);
  };

  return MDCLineRipple;
}(MDCComponent);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses$2 = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  __extends(MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, _assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNotchWidthProperty: function setNotchWidthProperty() {
          return undefined;
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCNotchedOutline =
/** @class */
function (_super) {
  __extends(MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(strings.NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + MDCFloatingLabelFoundation.cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(cssClasses$2.OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(cssClasses$2.NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCNotchedOutlineFoundation(adapter);
  };

  return MDCNotchedOutline;
}(MDCComponent);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
  ROOT: 'mdc-text-field-character-counter'
};
var strings$1 = {
  ROOT_SELECTOR: "." + cssClasses$3.ROOT
};

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextFieldCharacterCounterFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldCharacterCounterFoundation, _super);

  function MDCTextFieldCharacterCounterFoundation(adapter) {
    return _super.call(this, _assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      return {
        setContent: function setContent() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter_.setContent(currentLength + " / " + maxLength);
  };

  return MDCTextFieldCharacterCounterFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextFieldCharacterCounter =
/** @class */
function (_super) {
  __extends(MDCTextFieldCharacterCounter, _super);

  function MDCTextFieldCharacterCounter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldCharacterCounter.attachTo = function (root) {
    return new MDCTextFieldCharacterCounter(root);
  };

  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    };
    return new MDCTextFieldCharacterCounterFoundation(adapter);
  };

  return MDCTextFieldCharacterCounter;
}(MDCComponent);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$2 = {
  ARIA_CONTROLS: 'aria-controls',
  ICON_SELECTOR: '.mdc-text-field__icon',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  OUTLINE_SELECTOR: '.mdc-notched-outline'
};
var cssClasses$4 = {
  DENSE: 'mdc-text-field--dense',
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  FULLWIDTH: 'mdc-text-field--fullwidth',
  HELPER_LINE: 'mdc-text-field-helper-line',
  INVALID: 'mdc-text-field--invalid',
  NO_LABEL: 'mdc-text-field--no-label',
  OUTLINED: 'mdc-text-field--outlined',
  ROOT: 'mdc-text-field',
  TEXTAREA: 'mdc-text-field--textarea',
  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
};
var numbers$1 = {
  DENSE_LABEL_SCALE: 0.923,
  LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */

var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */

var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldFoundation, _super);
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCTextFieldFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, _assign({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;

    _this.isFocused_ = false;
    _this.receivedUserInput_ = false;
    _this.isValid_ = true;
    _this.useNativeValidation_ = true;
    _this.helperText_ = foundationMap.helperText;
    _this.characterCounter_ = foundationMap.characterCounter;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.trailingIcon_ = foundationMap.trailingIcon;

    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };

    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };

    _this.inputInputHandler_ = function () {
      return _this.handleInput();
    };

    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };

    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };

    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "numbers", {
    get: function get() {
      return numbers$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
    get: function get() {
      var type = this.getNativeInput_().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
    get: function get() {
      return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return true;
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {
          return undefined;
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {
          return undefined;
        },
        registerInputInteractionHandler: function registerInputInteractionHandler() {
          return undefined;
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {
          return undefined;
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
          return new MutationObserver(function () {
            return undefined;
          });
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {
          return undefined;
        },
        getNativeInput: function getNativeInput() {
          return null;
        },
        isFocused: function isFocused() {
          return false;
        },
        activateLineRipple: function activateLineRipple() {
          return undefined;
        },
        deactivateLineRipple: function deactivateLineRipple() {
          return undefined;
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {
          return undefined;
        },
        shakeLabel: function shakeLabel() {
          return undefined;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldFoundation.prototype.init = function () {
    var _this = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    this.setCharacterCounter_(this.getValue().length);
  };

  MDCTextFieldFoundation.prototype.destroy = function () {
    var _this = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };
  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
    var nativeInput = this.adapter_.getNativeInput();

    if (nativeInput && nativeInput.disabled) {
      return;
    }

    this.receivedUserInput_ = true;
  };
  /**
   * Handles validation attribute changes
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
    var _this = this;

    attributesList.some(function (attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this.styleValidity_(true);

        return true;
      }

      return false;
    });

    if (attributesList.indexOf('maxlength') > -1) {
      this.setCharacterCounter_(this.getValue().length);
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(cssClasses$4.DENSE);
      var labelScale = isDense ? numbers$1.DENSE_LABEL_SCALE : numbers$1.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function () {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };
  /**
   * Handles input change of text input and text area.
   */


  MDCTextFieldFoundation.prototype.handleInput = function () {
    this.autoCompleteFocus();
    this.setCharacterCounter_(this.getValue().length);
  };
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };
  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function () {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  MDCTextFieldFoundation.prototype.getValue = function () {
    return this.getNativeInput_().value;
  };
  /**
   * @param value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function (value) {
    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
    if (this.getValue() !== value) {
      this.getNativeInput_().value = value;
    }

    this.setCharacterCounter_(value.length);
    var isValid = this.isValid();
    this.styleValidity_(isValid);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };
  /**
   * @return The custom validity state, if set; otherwise, the result of a native validity check.
   */


  MDCTextFieldFoundation.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function (isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);
    var shouldShake = !isValid && !this.isFocused_;

    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };
  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  MDCTextFieldFoundation.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  };
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setContent(content);
    }
  };
  /**
   * Sets character counter values that shows characters used and the total character limit.
   */


  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
    if (!this.characterCounter_) {
      return;
    }

    var maxLength = this.getNativeInput_().maxLength;

    if (maxLength === -1) {
      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
    }

    this.characterCounter_.setCounterValue(currentLength, maxLength);
  };
  /**
   * @return True if the Text Field input fails in converting the user-supplied value.
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function () {
    // The badInput property is not supported in IE 11 💩.
    return this.getNativeInput_().validity.badInput || false;
  };
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  };
  /**
   * Styles the component based on the validity state.
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }

    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };
  /**
   * Styles the component based on the focused state.
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };
  /**
   * Styles the component based on the disabled state.
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
    var _a = MDCTextFieldFoundation.cssClasses,
        DISABLED = _a.DISABLED,
        INVALID = _a.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * @return The native text input element from the host environment, or an object with the same shape for unit tests.
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      type: 'input',
      validity: {
        badInput: false,
        valid: true
      },
      value: ''
    };
  };

  return MDCTextFieldFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$5 = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
  ROOT: 'mdc-text-field-helper-text'
};
var strings$3 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  ROOT_SELECTOR: "." + cssClasses$5.ROOT
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextFieldHelperTextFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldHelperTextFoundation, _super);

  function MDCTextFieldHelperTextFoundation(adapter) {
    return _super.call(this, _assign({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
    get: function get() {
      return strings$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   * @param isPersistent Sets the persistency of the helper text.
   */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(cssClasses$5.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(cssClasses$5.HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(cssClasses$5.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(cssClasses$5.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to the screen reader.
   */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(strings$3.ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the input validity.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$5.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$5.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(strings$3.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(strings$3.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(strings$3.ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextFieldHelperText =
/** @class */
function (_super) {
  __extends(MDCTextFieldHelperText, _super);

  function MDCTextFieldHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldHelperText.attachTo = function (root) {
    return new MDCTextFieldHelperText(root);
  };

  Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTextFieldHelperTextFoundation(adapter);
  };

  return MDCTextFieldHelperText;
}(MDCComponent);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$4 = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};
var cssClasses$6 = {
  ROOT: 'mdc-text-field__icon'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INTERACTION_EVENTS$1 = ['click', 'keydown'];

var MDCTextFieldIconFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldIconFoundation, _super);

  function MDCTextFieldIconFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
    get: function get() {
      return strings$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS$1.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS$1.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', strings$4.ICON_ROLE);
    }
  };

  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCTextFieldIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextFieldIcon =
/** @class */
function (_super) {
  __extends(MDCTextFieldIcon, _super);

  function MDCTextFieldIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldIcon.attachTo = function (root) {
    return new MDCTextFieldIcon(root);
  };

  Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTextFieldIconFoundation(adapter);
  };

  return MDCTextFieldIcon;
}(MDCComponent);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCTextField =
/** @class */
function (_super) {
  __extends(MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new MDCLineRipple(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new MDCTextFieldHelperText(el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function characterCounterFactory(el) {
        return new MDCTextFieldCharacterCounter(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new MDCTextFieldIcon(el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new MDCFloatingLabel(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new MDCNotchedOutline(el);
      };
    }

    this.input_ = this.root_.querySelector(strings$2.INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(strings$2.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(strings$2.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(strings$2.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = MDCTextFieldHelperTextFoundation.strings;
    var nextElementSibling = this.root_.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(cssClasses$4.HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = MDCTextFieldCharacterCounterFoundation.strings;
    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
    this.leadingIcon_ = null;
    this.trailingIcon_ = null;
    var iconElements = this.root_.querySelectorAll(strings$2.ICON_SELECTOR);

    if (iconElements.length > 0) {
      if (iconElements.length > 1) {
        // Has both icons.
        this.leadingIcon_ = iconFactory(iconElements[0]);
        this.trailingIcon_ = iconFactory(iconElements[1]);
      } else {
        if (this.root_.classList.contains(cssClasses$4.WITH_LEADING_ICON)) {
          this.leadingIcon_ = iconFactory(iconElements[0]);
        } else {
          this.trailingIcon_ = iconFactory(iconElements[0]);
        }
      }
    }

    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function set(valid) {
      this.foundation_.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function get() {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function set(required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function get() {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function set(pattern) {
      this.input_.pattern = pattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function get() {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function set(minLength) {
      this.input_.minLength = minLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function get() {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set to a value less than zero
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function get() {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function set(min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function get() {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function set(max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function get() {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function set(step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function set(label) {
      this.foundation_.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function set(content) {
      this.foundation_.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = _assign({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new MDCTextFieldFoundation(adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function getNativeInput() {
        return _this.input_;
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function hasLabel() {
        return Boolean(_this.label_);
      },
      shakeLabel: function shakeLabel(shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root_.classList.contains(cssClasses$4.TEXTAREA);
    var isOutlined = this.root_.classList.contains(cssClasses$4.OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = _assign({}, MDCRipple.createAdapter(this), {
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.input_, ':active');
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root_, new MDCRippleFoundation(adapter));
  };

  return MDCTextField;
}(MDCComponent);

function prefixFilter(obj, prefix) {
  var names = Object.getOwnPropertyNames(obj);
  var newObj = {};

  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}

var file = "node_modules/@smui/floating-label/FloatingLabel.svelte"; // (9:0) {:else}

function create_else_block(ctx) {
  var label;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var label_levels = [{
    class: "mdc-floating-label " +
    /*className*/
    ctx[1]
  },
  /*forId*/
  ctx[2] ||
  /*inputProps*/
  ctx[6] &&
  /*inputProps*/
  ctx[6].id ? {
    "for":
    /*forId*/
    ctx[2] ||
    /*inputProps*/
    ctx[6] &&
    /*inputProps*/
    ctx[6].id
  } : {}, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "for", "wrapped"])];
  var label_data = {};

  for (var i = 0; i < label_levels.length; i += 1) {
    label_data = assign(label_data, label_levels[i]);
  }

  var block = {
    c: function create() {
      label = element("label");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      if (default_slot) default_slot.l(label_nodes);
      label_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(label, label_data);
      add_location(label, file, 9, 2, 225);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);

      if (default_slot) {
        default_slot.m(label, null);
      }
      /*label_binding*/


      ctx[15](label);
      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, label,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, label))];
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      4096) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[12], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[12], dirty, null));
      }

      set_attributes(label, get_spread_update(label_levels, [dirty &
      /*className*/
      2 && {
        class: "mdc-floating-label " +
        /*className*/
        ctx[1]
      }, dirty &
      /*forId, inputProps*/
      68 && (
      /*forId*/
      ctx[2] ||
      /*inputProps*/
      ctx[6] &&
      /*inputProps*/
      ctx[6].id ? {
        "for":
        /*forId*/
        ctx[2] ||
        /*inputProps*/
        ctx[6] &&
        /*inputProps*/
        ctx[6].id
      } : {}), dirty &
      /*exclude, $$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "for", "wrapped"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
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
      if (detaching) detach_dev(label);
      if (default_slot) default_slot.d(detaching);
      /*label_binding*/

      ctx[15](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(9:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if wrapped}


function create_if_block(ctx) {
  var span;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var span_levels = [{
    class: "mdc-floating-label " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "wrapped"])];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }

  var block = {
    c: function create() {
      span = element("span");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      if (default_slot) default_slot.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(span, span_data);
      add_location(span, file, 1, 2, 16);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);

      if (default_slot) {
        default_slot.m(span, null);
      }
      /*span_binding*/


      ctx[14](span);
      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, span,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, span))];
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      4096) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[12], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[12], dirty, null));
      }

      set_attributes(span, get_spread_update(span_levels, [dirty &
      /*className*/
      2 && {
        class: "mdc-floating-label " +
        /*className*/
        ctx[1]
      }, dirty &
      /*exclude, $$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "wrapped"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
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
      if (detaching) detach_dev(span);
      if (default_slot) default_slot.d(detaching);
      /*span_binding*/

      ctx[14](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if wrapped}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*wrapped*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$for = _$$props3.for,
      forId = _$$props3$for === void 0 ? "" : _$$props3$for;
  var _$$props4 = $$props,
      _$$props4$wrapped = _$$props4.wrapped,
      wrapped = _$$props4$wrapped === void 0 ? false : _$$props4$wrapped;
  var element;
  var floatingLabel;
  var inputProps = getContext("SMUI:generic:input:props") || {};
  onMount(function () {
    floatingLabel = new MDCFloatingLabel(element);
  });
  onDestroy(function () {
    floatingLabel && floatingLabel.destroy();
  });

  function shake(shouldShake) {
    var _floatingLabel;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_floatingLabel = floatingLabel).shake.apply(_floatingLabel, [shouldShake].concat(args));
  }

  function float(shouldFloat) {
    var _floatingLabel2;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return (_floatingLabel2 = floatingLabel).float.apply(_floatingLabel2, [shouldFloat].concat(args));
  }

  function getWidth() {
    var _floatingLabel3;

    return (_floatingLabel3 = floatingLabel).getWidth.apply(_floatingLabel3, arguments);
  }

  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, element = $$value);
    });
  }

  function label_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("for" in $$new_props) $$invalidate(2, forId = $$new_props.for);
    if ("wrapped" in $$new_props) $$invalidate(3, wrapped = $$new_props.wrapped);
    if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      forId: forId,
      wrapped: wrapped,
      element: element,
      floatingLabel: floatingLabel,
      inputProps: inputProps
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("forId" in $$props) $$invalidate(2, forId = $$new_props.forId);
    if ("wrapped" in $$props) $$invalidate(3, wrapped = $$new_props.wrapped);
    if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    if ("floatingLabel" in $$props) floatingLabel = $$new_props.floatingLabel;
    if ("inputProps" in $$props) $$invalidate(6, inputProps = $$new_props.inputProps);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, forId, wrapped, element, forwardEvents, inputProps, $$props, shake, float, getWidth, floatingLabel, $$scope, $$slots, span_binding, label_binding];
}

var FloatingLabel =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(FloatingLabel, _SvelteComponentDev);

  function FloatingLabel(options) {
    var _this;

    _classCallCheck(this, FloatingLabel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloatingLabel).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      for: 2,
      wrapped: 3,
      shake: 8,
      float: 9,
      getWidth: 10
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "FloatingLabel",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(FloatingLabel, [{
    key: "use",
    get: function get() {
      throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "for",
    get: function get() {
      throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "wrapped",
    get: function get() {
      throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "shake",
    get: function get() {
      return this.$$.ctx[8];
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "float",
    get: function get() {
      return this.$$.ctx[9];
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getWidth",
    get: function get() {
      return this.$$.ctx[10];
    },
    set: function set(value) {
      throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return FloatingLabel;
}(SvelteComponentDev);

var file$1 = "node_modules/@smui/line-ripple/LineRipple.svelte";

function create_fragment$1(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var div_levels = [{
    class: "\n    mdc-line-ripple\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*active*/
    ctx[2] ? "mdc-line-ripple--active" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "active"])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      /*div_binding*/

      ctx[10](div);
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, div))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, active*/
      6 && {
        class: "\n    mdc-line-ripple\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*active*/
        ctx[2] ? "mdc-line-ripple--active" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      32 && exclude(
      /*$$props*/
      ctx[5], ["use", "class", "active"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      /*div_binding*/

      ctx[10](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$active = _$$props3.active,
      active = _$$props3$active === void 0 ? false : _$$props3$active;
  var element;
  var lineRipple;
  onMount(function () {
    lineRipple = new MDCLineRipple(element);
  });
  onDestroy(function () {
    lineRipple && lineRipple.destroy();
  });

  function activate() {
    var _lineRipple;

    return (_lineRipple = lineRipple).activate.apply(_lineRipple, arguments);
  }

  function deactivate() {
    var _lineRipple2;

    return (_lineRipple2 = lineRipple).deactivate.apply(_lineRipple2, arguments);
  }

  function setRippleCenter(xCoordinate) {
    var _lineRipple3;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_lineRipple3 = lineRipple).setRippleCenter.apply(_lineRipple3, [xCoordinate].concat(args));
  }

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("active" in $$new_props) $$invalidate(2, active = $$new_props.active);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      active: active,
      element: element,
      lineRipple: lineRipple
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("active" in $$props) $$invalidate(2, active = $$new_props.active);
    if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
    if ("lineRipple" in $$props) lineRipple = $$new_props.lineRipple;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, active, element, forwardEvents, $$props, activate, deactivate, setRippleCenter, lineRipple, div_binding];
}

var LineRipple =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(LineRipple, _SvelteComponentDev);

  function LineRipple(options) {
    var _this;

    _classCallCheck(this, LineRipple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineRipple).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0,
      class: 1,
      active: 2,
      activate: 6,
      deactivate: 7,
      setRippleCenter: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "LineRipple",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(LineRipple, [{
    key: "use",
    get: function get() {
      throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "active",
    get: function get() {
      throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activate",
    get: function get() {
      return this.$$.ctx[6];
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "deactivate",
    get: function get() {
      return this.$$.ctx[7];
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "setRippleCenter",
    get: function get() {
      return this.$$.ctx[8];
    },
    set: function set(value) {
      throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return LineRipple;
}(SvelteComponentDev);

var file$2 = "node_modules/@smui/notched-outline/NotchedOutline.svelte"; // (14:2) {#if !noLabel}

function create_if_block$1(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[11].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mdc-notched-outline__notch");
      add_location(div, file$2, 14, 4, 367);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      1024) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[10], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[10], dirty, null));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(14:2) {#if !noLabel}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div2;
  var div0;
  var t0;
  var t1;
  var div1;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var if_block = !
  /*noLabel*/
  ctx[3] && create_if_block$1(ctx);
  var div2_levels = [{
    class: "\n    mdc-notched-outline\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*notched*/
    ctx[2] ? "mdc-notched-outline--notched" : "") + "\n    " + (
    /*noLabel*/
    ctx[3] ? "mdc-notched-outline--no-label" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[6], ["use", "class", "notched", "noLabel"])];
  var div2_data = {};

  for (var i = 0; i < div2_levels.length; i += 1) {
    div2_data = assign(div2_data, div2_levels[i]);
  }

  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      if (if_block) if_block.c();
      t1 = space();
      div1 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      children(div1).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-notched-outline__leading");
      add_location(div0, file$2, 12, 2, 297);
      attr_dev(div1, "class", "mdc-notched-outline__trailing");
      add_location(div1, file$2, 16, 2, 437);
      set_attributes(div2, div2_data);
      add_location(div2, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div2, t0);
      if (if_block) if_block.m(div2, null);
      append_dev(div2, t1);
      append_dev(div2, div1);
      /*div2_binding*/

      ctx[12](div2);
      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div2,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, div2))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*noLabel*/
      ctx[3]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      set_attributes(div2, get_spread_update(div2_levels, [dirty &
      /*className, notched, noLabel*/
      14 && {
        class: "\n    mdc-notched-outline\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*notched*/
        ctx[2] ? "mdc-notched-outline--notched" : "") + "\n    " + (
        /*noLabel*/
        ctx[3] ? "mdc-notched-outline--no-label" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      64 && exclude(
      /*$$props*/
      ctx[6], ["use", "class", "notched", "noLabel"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
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
      if (detaching) detach_dev(div2);
      if (if_block) if_block.d();
      /*div2_binding*/

      ctx[12](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$notched = _$$props3.notched,
      notched = _$$props3$notched === void 0 ? false : _$$props3$notched;
  var _$$props4 = $$props,
      _$$props4$noLabel = _$$props4.noLabel,
      noLabel = _$$props4$noLabel === void 0 ? false : _$$props4$noLabel;
  var element;
  var notchedOutline;
  onMount(function () {
    notchedOutline = new MDCNotchedOutline(element);
  });
  onDestroy(function () {
    notchedOutline && notchedOutline.destroy();
  });

  function notch(notchWidth) {
    var _notchedOutline;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_notchedOutline = notchedOutline).notch.apply(_notchedOutline, [notchWidth].concat(args));
  }

  function closeNotch() {
    var _notchedOutline2;

    return (_notchedOutline2 = notchedOutline).closeNotch.apply(_notchedOutline2, arguments);
  }

  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("notched" in $$new_props) $$invalidate(2, notched = $$new_props.notched);
    if ("noLabel" in $$new_props) $$invalidate(3, noLabel = $$new_props.noLabel);
    if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      notched: notched,
      noLabel: noLabel,
      element: element,
      notchedOutline: notchedOutline
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("notched" in $$props) $$invalidate(2, notched = $$new_props.notched);
    if ("noLabel" in $$props) $$invalidate(3, noLabel = $$new_props.noLabel);
    if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    if ("notchedOutline" in $$props) notchedOutline = $$new_props.notchedOutline;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, notched, noLabel, element, forwardEvents, $$props, notch, closeNotch, notchedOutline, $$scope, $$slots, div2_binding];
}

var NotchedOutline =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(NotchedOutline, _SvelteComponentDev);

  function NotchedOutline(options) {
    var _this;

    _classCallCheck(this, NotchedOutline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotchedOutline).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 7,
      closeNotch: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "NotchedOutline",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(NotchedOutline, [{
    key: "use",
    get: function get() {
      throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "notched",
    get: function get() {
      throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "noLabel",
    get: function get() {
      throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "notch",
    get: function get() {
      return this.$$.ctx[7];
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "closeNotch",
    get: function get() {
      return this.$$.ctx[8];
    },
    set: function set(value) {
      throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return NotchedOutline;
}(SvelteComponentDev);

var file$3 = "node_modules/@smui/textfield/Input.svelte";

function create_fragment$3(ctx) {
  var input;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var input_levels = [{
    class: "mdc-text-field__input " +
    /*className*/
    ctx[1]
  }, {
    type:
    /*type*/
    ctx[2]
  },
  /*valueProp*/
  ctx[4], exclude(
  /*$$props*/
  ctx[8], ["use", "class", "type", "value", "files", "dirty", "invalid", "updateInvalid"])];
  var input_data = {};

  for (var i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }

  var block = {
    c: function create() {
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      input = claim_element(nodes, "INPUT", {
        class: true,
        type: true
      });
      this.h();
    },
    h: function hydrate() {
      set_attributes(input, input_data);
      add_location(input, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input, anchor);
      /*input_binding*/

      ctx[14](input);
      dispose = [action_destroyer(useActions_action = useActions.call(null, input,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, input)), listen_dev(input, "change",
      /*change_handler*/
      ctx[15], false, false, false), listen_dev(input, "input",
      /*input_handler*/
      ctx[16], false, false, false), listen_dev(input, "change",
      /*changeHandler*/
      ctx[7], false, false, false)];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(input, get_spread_update(input_levels, [dirty &
      /*className*/
      2 && {
        class: "mdc-text-field__input " +
        /*className*/
        ctx[1]
      }, dirty &
      /*type*/
      4 && {
        type:
        /*type*/
        ctx[2]
      }, dirty &
      /*valueProp*/
      16 &&
      /*valueProp*/
      ctx[4], dirty &
      /*exclude, $$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "type", "value", "files", "dirty", "invalid", "updateInvalid"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(input);
      /*input_binding*/

      ctx[14](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function toNumber(value) {
  if (value === "") {
    var nan = new Number(Number.NaN);
    nan.length = 0;
    return nan;
  }

  return +value;
}

function instance$3($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component, ["change", "input"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$type = _$$props3.type,
      type = _$$props3$type === void 0 ? "text" : _$$props3$type;
  var _$$props4 = $$props,
      _$$props4$value = _$$props4.value,
      value = _$$props4$value === void 0 ? "" : _$$props4$value;
  var _$$props5 = $$props,
      _$$props5$files = _$$props5.files,
      files = _$$props5$files === void 0 ? undefined : _$$props5$files;
  var _$$props6 = $$props,
      _$$props6$dirty = _$$props6.dirty,
      dirty = _$$props6$dirty === void 0 ? false : _$$props6$dirty;
  var _$$props7 = $$props,
      _$$props7$invalid = _$$props7.invalid,
      invalid = _$$props7$invalid === void 0 ? false : _$$props7$invalid;
  var _$$props8 = $$props,
      _$$props8$updateInval = _$$props8.updateInvalid,
      updateInvalid = _$$props8$updateInval === void 0 ? true : _$$props8$updateInval;
  var element;
  var valueProp = {};
  onMount(function () {
    if (updateInvalid) {
      $$invalidate(12, invalid = element.matches(":invalid"));
    }
  });

  function valueUpdater(e) {
    switch (type) {
      case "number":
      case "range":
        $$invalidate(9, value = toNumber(e.target.value));
        break;

      case "file":
        $$invalidate(10, files = e.target.files);

      default:
        $$invalidate(9, value = e.target.value);
        break;
    }
  }

  function changeHandler(e) {
    $$invalidate(11, dirty = true);

    if (updateInvalid) {
      $$invalidate(12, invalid = element.matches(":invalid"));
    }
  }

  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, element = $$value);
    });
  }

  var change_handler = function change_handler(e) {
    return (type === "file" || type === "range") && valueUpdater(e);
  };

  var input_handler = function input_handler(e) {
    return type !== "file" && valueUpdater(e);
  };

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("type" in $$new_props) $$invalidate(2, type = $$new_props.type);
    if ("value" in $$new_props) $$invalidate(9, value = $$new_props.value);
    if ("files" in $$new_props) $$invalidate(10, files = $$new_props.files);
    if ("dirty" in $$new_props) $$invalidate(11, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props) $$invalidate(12, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props) $$invalidate(13, updateInvalid = $$new_props.updateInvalid);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      type: type,
      value: value,
      files: files,
      dirty: dirty,
      invalid: invalid,
      updateInvalid: updateInvalid,
      element: element,
      valueProp: valueProp
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("type" in $$props) $$invalidate(2, type = $$new_props.type);
    if ("value" in $$props) $$invalidate(9, value = $$new_props.value);
    if ("files" in $$props) $$invalidate(10, files = $$new_props.files);
    if ("dirty" in $$props) $$invalidate(11, dirty = $$new_props.dirty);
    if ("invalid" in $$props) $$invalidate(12, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$props) $$invalidate(13, updateInvalid = $$new_props.updateInvalid);
    if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
    if ("valueProp" in $$props) $$invalidate(4, valueProp = $$new_props.valueProp);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*type, valueProp, value*/
    532) {
       if (type === "file") {
        delete valueProp.value;
      } else {
        $$invalidate(4, valueProp.value = value === undefined ? "" : value, valueProp);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, className, type, element, valueProp, forwardEvents, valueUpdater, changeHandler, $$props, value, files, dirty, invalid, updateInvalid, input_binding, change_handler, input_handler];
}

var Input =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Input, _SvelteComponentDev);

  function Input(options) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1,
      type: 2,
      value: 9,
      files: 10,
      dirty: 11,
      invalid: 12,
      updateInvalid: 13
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Input",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Input, [{
    key: "use",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "files",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dirty",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "invalid",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "updateInvalid",
    get: function get() {
      throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Input;
}(SvelteComponentDev);

var file$4 = "node_modules/@smui/textfield/Textarea.svelte";

function create_fragment$4(ctx) {
  var textarea;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var textarea_levels = [{
    class: "mdc-text-field__input " +
    /*className*/
    ctx[2]
  }, exclude(
  /*$$props*/
  ctx[6], ["use", "class", "value", "dirty", "invalid", "updateInvalid"])];
  var textarea_data = {};

  for (var i = 0; i < textarea_levels.length; i += 1) {
    textarea_data = assign(textarea_data, textarea_levels[i]);
  }

  var block = {
    c: function create() {
      textarea = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", {
        class: true
      });
      children(textarea).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(textarea, textarea_data);
      add_location(textarea, file$4, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, textarea, anchor);
      /*textarea_binding*/

      ctx[10](textarea);
      set_input_value(textarea,
      /*value*/
      ctx[0]);
      dispose = [action_destroyer(useActions_action = useActions.call(null, textarea,
      /*use*/
      ctx[1])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, textarea)), listen_dev(textarea, "input",
      /*textarea_input_handler*/
      ctx[11]), listen_dev(textarea, "change",
      /*changeHandler*/
      ctx[5], false, false, false)];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(textarea, get_spread_update(textarea_levels, [dirty &
      /*className*/
      4 && {
        class: "mdc-text-field__input " +
        /*className*/
        ctx[2]
      }, dirty &
      /*exclude, $$props*/
      64 && exclude(
      /*$$props*/
      ctx[6], ["use", "class", "value", "dirty", "invalid", "updateInvalid"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);

      if (dirty &
      /*value*/
      1) {
        set_input_value(textarea,
        /*value*/
        ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(textarea);
      /*textarea_binding*/

      ctx[10](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component, ["change", "input"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$value = _$$props3.value,
      value = _$$props3$value === void 0 ? "" : _$$props3$value;
  var _$$props4 = $$props,
      _$$props4$dirty = _$$props4.dirty,
      dirty = _$$props4$dirty === void 0 ? false : _$$props4$dirty;
  var _$$props5 = $$props,
      _$$props5$invalid = _$$props5.invalid,
      invalid = _$$props5$invalid === void 0 ? false : _$$props5$invalid;
  var _$$props6 = $$props,
      _$$props6$updateInval = _$$props6.updateInvalid,
      updateInvalid = _$$props6$updateInval === void 0 ? true : _$$props6$updateInval;
  var element;
  onMount(function () {
    if (updateInvalid) {
      $$invalidate(8, invalid = element.matches(":invalid"));
    }
  });

  function changeHandler() {
    $$invalidate(7, dirty = true);

    if (updateInvalid) {
      $$invalidate(8, invalid = element.matches(":invalid"));
    }
  }

  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, element = $$value);
    });
  }

  function textarea_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("dirty" in $$new_props) $$invalidate(7, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props) $$invalidate(8, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props) $$invalidate(9, updateInvalid = $$new_props.updateInvalid);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      value: value,
      dirty: dirty,
      invalid: invalid,
      updateInvalid: updateInvalid,
      element: element
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("dirty" in $$props) $$invalidate(7, dirty = $$new_props.dirty);
    if ("invalid" in $$props) $$invalidate(8, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$props) $$invalidate(9, updateInvalid = $$new_props.updateInvalid);
    if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
  };

  $$props = exclude_internal_props($$props);
  return [value, use, className, element, forwardEvents, changeHandler, $$props, dirty, invalid, updateInvalid, textarea_binding, textarea_input_handler];
}

var Textarea =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Textarea, _SvelteComponentDev);

  function Textarea(options) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, options));
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      use: 1,
      class: 2,
      value: 0,
      dirty: 7,
      invalid: 8,
      updateInvalid: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Textarea",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  _createClass(Textarea, [{
    key: "use",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dirty",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "invalid",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "updateInvalid",
    get: function get() {
      throw new Error("<Textarea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textarea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Textarea;
}(SvelteComponentDev);

var file$5 = "node_modules/@smui/textfield/Textfield.svelte";

var get_label_slot_changes_1 = function get_label_slot_changes_1(dirty) {
  return {};
};

var get_label_slot_context_1 = function get_label_slot_context_1(ctx) {
  return {};
};

var get_label_slot_changes = function get_label_slot_changes(dirty) {
  return {};
};

var get_label_slot_context = function get_label_slot_context(ctx) {
  return {};
}; // (65:0) {:else}


function create_else_block_1(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[30].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[44], null);
  var div_levels = [{
    class: "\n      mdc-text-field\n      " +
    /*className*/
    ctx[5] + "\n      " + (
    /*disabled*/
    ctx[7] ? "mdc-text-field--disabled" : "") + "\n      " + (
    /*fullwidth*/
    ctx[8] ? "mdc-text-field--fullwidth" : "") + "\n      " + (
    /*textarea*/
    ctx[9] ? "mdc-text-field--textarea" : "") + "\n      " + (
    /*variant*/
    ctx[10] === "outlined" && !
    /*fullwidth*/
    ctx[8] ? "mdc-text-field--outlined" : "") + "\n      " + (
    /*variant*/
    ctx[10] === "standard" && !
    /*fullwidth*/
    ctx[8] && !
    /*textarea*/
    ctx[9] ? "smui-text-field--standard" : "") + "\n      " + (
    /*dense*/
    ctx[11] ? "mdc-text-field--dense" : "") + "\n      " + (
    /*noLabel*/
    ctx[14] ? "mdc-text-field--no-label" : "") + "\n      " + (
    /*withLeadingIcon*/
    ctx[12] ? "mdc-text-field--with-leading-icon" : "") + "\n      " + (
    /*withTrailingIcon*/
    ctx[13] ? "mdc-text-field--with-trailing-icon" : "") + "\n      " + (
    /*invalid*/
    ctx[3] ? "mdc-text-field--invalid" : "") + "\n    "
  },
  /*props*/
  ctx[19]];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$5, 65, 2, 2082);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }
      /*div_binding*/


      ctx[43](div);
      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[4])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[21].call(null, div))];
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[1] &
      /*$$scope*/
      8192) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[44], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[44], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, disabled, fullwidth, textarea, variant, dense, noLabel, withLeadingIcon, withTrailingIcon, invalid*/
      32680 && {
        class: "\n      mdc-text-field\n      " +
        /*className*/
        ctx[5] + "\n      " + (
        /*disabled*/
        ctx[7] ? "mdc-text-field--disabled" : "") + "\n      " + (
        /*fullwidth*/
        ctx[8] ? "mdc-text-field--fullwidth" : "") + "\n      " + (
        /*textarea*/
        ctx[9] ? "mdc-text-field--textarea" : "") + "\n      " + (
        /*variant*/
        ctx[10] === "outlined" && !
        /*fullwidth*/
        ctx[8] ? "mdc-text-field--outlined" : "") + "\n      " + (
        /*variant*/
        ctx[10] === "standard" && !
        /*fullwidth*/
        ctx[8] && !
        /*textarea*/
        ctx[9] ? "smui-text-field--standard" : "") + "\n      " + (
        /*dense*/
        ctx[11] ? "mdc-text-field--dense" : "") + "\n      " + (
        /*noLabel*/
        ctx[14] ? "mdc-text-field--no-label" : "") + "\n      " + (
        /*withLeadingIcon*/
        ctx[12] ? "mdc-text-field--with-leading-icon" : "") + "\n      " + (
        /*withTrailingIcon*/
        ctx[13] ? "mdc-text-field--with-trailing-icon" : "") + "\n      " + (
        /*invalid*/
        ctx[3] ? "mdc-text-field--invalid" : "") + "\n    "
      }, dirty[0] &
      /*props*/
      524288 &&
      /*props*/
      ctx[19]]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] &
      /*use*/
      16) useActions_action.update.call(null,
      /*use*/
      ctx[4]);
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      /*div_binding*/

      ctx[43](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(65:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if valued}


function create_if_block$2(ctx) {
  var label_1;
  var t0;
  var current_block_type_index;
  var if_block0;
  var t1;
  var t2;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[30].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[44], null);
  var if_block_creators = [create_if_block_6, create_else_block$1];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (
    /*textarea*/
    ctx[9]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var if_block1 = !
  /*textarea*/
  ctx[9] &&
  /*variant*/
  ctx[10] !== "outlined" && create_if_block_3(ctx);
  var if_block2 = (
  /*textarea*/
  ctx[9] ||
  /*variant*/
  ctx[10] === "outlined" && !
  /*fullwidth*/
  ctx[8]) && create_if_block_1(ctx);
  var label_1_levels = [{
    class: "\n      mdc-text-field\n      " +
    /*className*/
    ctx[5] + "\n      " + (
    /*disabled*/
    ctx[7] ? "mdc-text-field--disabled" : "") + "\n      " + (
    /*fullwidth*/
    ctx[8] ? "mdc-text-field--fullwidth" : "") + "\n      " + (
    /*textarea*/
    ctx[9] ? "mdc-text-field--textarea" : "") + "\n      " + (
    /*variant*/
    ctx[10] === "outlined" && !
    /*fullwidth*/
    ctx[8] ? "mdc-text-field--outlined" : "") + "\n      " + (
    /*variant*/
    ctx[10] === "standard" && !
    /*fullwidth*/
    ctx[8] && !
    /*textarea*/
    ctx[9] ? "smui-text-field--standard" : "") + "\n      " + (
    /*dense*/
    ctx[11] ? "mdc-text-field--dense" : "") + "\n      " + (
    /*noLabel*/
    ctx[14] ||
    /*label*/
    ctx[15] == null ? "mdc-text-field--no-label" : "") + "\n      " + (
    /*withLeadingIcon*/
    ctx[12] ? "mdc-text-field--with-leading-icon" : "") + "\n      " + (
    /*withTrailingIcon*/
    ctx[13] ? "mdc-text-field--with-trailing-icon" : "") + "\n      " + (
    /*invalid*/
    ctx[3] ? "mdc-text-field--invalid" : "") + "\n    "
  },
  /*props*/
  ctx[19]];
  var label_1_data = {};

  for (var i = 0; i < label_1_levels.length; i += 1) {
    label_1_data = assign(label_1_data, label_1_levels[i]);
  }

  var block = {
    c: function create() {
      label_1 = element("label");
      if (default_slot) default_slot.c();
      t0 = space();
      if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      t2 = space();
      if (if_block2) if_block2.c();
      this.h();
    },
    l: function claim(nodes) {
      label_1 = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_1_nodes = children(label_1);
      if (default_slot) default_slot.l(label_1_nodes);
      t0 = claim_space(label_1_nodes);
      if_block0.l(label_1_nodes);
      t1 = claim_space(label_1_nodes);
      if (if_block1) if_block1.l(label_1_nodes);
      t2 = claim_space(label_1_nodes);
      if (if_block2) if_block2.l(label_1_nodes);
      label_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(label_1, label_1_data);
      add_location(label_1, file$5, 1, 2, 15);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label_1, anchor);

      if (default_slot) {
        default_slot.m(label_1, null);
      }

      append_dev(label_1, t0);
      if_blocks[current_block_type_index].m(label_1, null);
      append_dev(label_1, t1);
      if (if_block1) if_block1.m(label_1, null);
      append_dev(label_1, t2);
      if (if_block2) if_block2.m(label_1, null);
      /*label_1_binding*/

      ctx[42](label_1);
      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, label_1,
      /*use*/
      ctx[4])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[21].call(null, label_1))];
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[1] &
      /*$$scope*/
      8192) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[44], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[44], dirty, null));
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];

        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block0.c();
        }

        transition_in(if_block0, 1);
        if_block0.m(label_1, t1);
      }

      if (!
      /*textarea*/
      ctx[9] &&
      /*variant*/
      ctx[10] !== "outlined") {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_3(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(label_1, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (
      /*textarea*/
      ctx[9] ||
      /*variant*/
      ctx[10] === "outlined" && !
      /*fullwidth*/
      ctx[8]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
          transition_in(if_block2, 1);
        } else {
          if_block2 = create_if_block_1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(label_1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }

      set_attributes(label_1, get_spread_update(label_1_levels, [dirty[0] &
      /*className, disabled, fullwidth, textarea, variant, dense, noLabel, label, withLeadingIcon, withTrailingIcon, invalid*/
      65448 && {
        class: "\n      mdc-text-field\n      " +
        /*className*/
        ctx[5] + "\n      " + (
        /*disabled*/
        ctx[7] ? "mdc-text-field--disabled" : "") + "\n      " + (
        /*fullwidth*/
        ctx[8] ? "mdc-text-field--fullwidth" : "") + "\n      " + (
        /*textarea*/
        ctx[9] ? "mdc-text-field--textarea" : "") + "\n      " + (
        /*variant*/
        ctx[10] === "outlined" && !
        /*fullwidth*/
        ctx[8] ? "mdc-text-field--outlined" : "") + "\n      " + (
        /*variant*/
        ctx[10] === "standard" && !
        /*fullwidth*/
        ctx[8] && !
        /*textarea*/
        ctx[9] ? "smui-text-field--standard" : "") + "\n      " + (
        /*dense*/
        ctx[11] ? "mdc-text-field--dense" : "") + "\n      " + (
        /*noLabel*/
        ctx[14] ||
        /*label*/
        ctx[15] == null ? "mdc-text-field--no-label" : "") + "\n      " + (
        /*withLeadingIcon*/
        ctx[12] ? "mdc-text-field--with-leading-icon" : "") + "\n      " + (
        /*withTrailingIcon*/
        ctx[13] ? "mdc-text-field--with-trailing-icon" : "") + "\n      " + (
        /*invalid*/
        ctx[3] ? "mdc-text-field--invalid" : "") + "\n    "
      }, dirty[0] &
      /*props*/
      524288 &&
      /*props*/
      ctx[19]]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] &
      /*use*/
      16) useActions_action.update.call(null,
      /*use*/
      ctx[4]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label_1);
      if (default_slot) default_slot.d(detaching);
      if_blocks[current_block_type_index].d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      /*label_1_binding*/

      ctx[42](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(1:0) {#if valued}",
    ctx: ctx
  });
  return block;
} // (34:4) {:else}


function create_else_block$1(ctx) {
  var updating_value;
  var updating_files;
  var updating_dirty;
  var updating_invalid;
  var current;
  var input_spread_levels = [{
    type:
    /*type*/
    ctx[16]
  }, {
    disabled:
    /*disabled*/
    ctx[7]
  }, {
    updateInvalid:
    /*updateInvalid*/
    ctx[17]
  },
  /*fullwidth*/
  ctx[8] &&
  /*label*/
  ctx[15] ? {
    placeholder:
    /*label*/
    ctx[15]
  } : {}, prefixFilter(
  /*$$props*/
  ctx[22], "input$")];

  function input_value_binding(value_1) {
    /*input_value_binding*/
    ctx[36].call(null, value_1);
  }

  function input_files_binding(value_2) {
    /*input_files_binding*/
    ctx[37].call(null, value_2);
  }

  function input_dirty_binding(value_3) {
    /*input_dirty_binding*/
    ctx[38].call(null, value_3);
  }

  function input_invalid_binding(value_4) {
    /*input_invalid_binding*/
    ctx[39].call(null, value_4);
  }

  var input_props = {};

  for (var i = 0; i < input_spread_levels.length; i += 1) {
    input_props = assign(input_props, input_spread_levels[i]);
  }

  if (
  /*value*/
  ctx[0] !== void 0) {
    input_props.value =
    /*value*/
    ctx[0];
  }

  if (
  /*files*/
  ctx[1] !== void 0) {
    input_props.files =
    /*files*/
    ctx[1];
  }

  if (
  /*dirty*/
  ctx[2] !== void 0) {
    input_props.dirty =
    /*dirty*/
    ctx[2];
  }

  if (
  /*invalid*/
  ctx[3] !== void 0) {
    input_props.invalid =
    /*invalid*/
    ctx[3];
  }

  var input = new Input({
    props: input_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(input, "value", input_value_binding);
  });
  binding_callbacks.push(function () {
    return bind(input, "files", input_files_binding);
  });
  binding_callbacks.push(function () {
    return bind(input, "dirty", input_dirty_binding);
  });
  binding_callbacks.push(function () {
    return bind(input, "invalid", input_invalid_binding);
  });
  input.$on("change",
  /*change_handler_1*/
  ctx[40]);
  input.$on("input",
  /*input_handler_1*/
  ctx[41]);
  var block = {
    c: function create() {
      create_component(input.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(input.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(input, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var input_changes = dirty[0] &
      /*type, disabled, updateInvalid, fullwidth, label, $$props*/
      4424064 ? get_spread_update(input_spread_levels, [dirty[0] &
      /*type*/
      65536 && {
        type:
        /*type*/
        ctx[16]
      }, dirty[0] &
      /*disabled*/
      128 && {
        disabled:
        /*disabled*/
        ctx[7]
      }, dirty[0] &
      /*updateInvalid*/
      131072 && {
        updateInvalid:
        /*updateInvalid*/
        ctx[17]
      }, dirty[0] &
      /*fullwidth, label*/
      33024 && get_spread_object(
      /*fullwidth*/
      ctx[8] &&
      /*label*/
      ctx[15] ? {
        placeholder:
        /*label*/
        ctx[15]
      } : {}), dirty[0] &
      /*$$props*/
      4194304 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "input$"))]) : {};

      if (!updating_value && dirty[0] &
      /*value*/
      1) {
        updating_value = true;
        input_changes.value =
        /*value*/
        ctx[0];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      if (!updating_files && dirty[0] &
      /*files*/
      2) {
        updating_files = true;
        input_changes.files =
        /*files*/
        ctx[1];
        add_flush_callback(function () {
          return updating_files = false;
        });
      }

      if (!updating_dirty && dirty[0] &
      /*dirty*/
      4) {
        updating_dirty = true;
        input_changes.dirty =
        /*dirty*/
        ctx[2];
        add_flush_callback(function () {
          return updating_dirty = false;
        });
      }

      if (!updating_invalid && dirty[0] &
      /*invalid*/
      8) {
        updating_invalid = true;
        input_changes.invalid =
        /*invalid*/
        ctx[3];
        add_flush_callback(function () {
          return updating_invalid = false;
        });
      }

      input.$set(input_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(input.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(input.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(input, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(34:4) {:else}",
    ctx: ctx
  });
  return block;
} // (23:4) {#if textarea}


function create_if_block_6(ctx) {
  var updating_value;
  var updating_dirty;
  var updating_invalid;
  var current;
  var textarea_1_spread_levels = [{
    disabled:
    /*disabled*/
    ctx[7]
  }, {
    updateInvalid:
    /*updateInvalid*/
    ctx[17]
  }, prefixFilter(
  /*$$props*/
  ctx[22], "input$")];

  function textarea_1_value_binding(value_1) {
    /*textarea_1_value_binding*/
    ctx[31].call(null, value_1);
  }

  function textarea_1_dirty_binding(value_2) {
    /*textarea_1_dirty_binding*/
    ctx[32].call(null, value_2);
  }

  function textarea_1_invalid_binding(value_3) {
    /*textarea_1_invalid_binding*/
    ctx[33].call(null, value_3);
  }

  var textarea_1_props = {};

  for (var i = 0; i < textarea_1_spread_levels.length; i += 1) {
    textarea_1_props = assign(textarea_1_props, textarea_1_spread_levels[i]);
  }

  if (
  /*value*/
  ctx[0] !== void 0) {
    textarea_1_props.value =
    /*value*/
    ctx[0];
  }

  if (
  /*dirty*/
  ctx[2] !== void 0) {
    textarea_1_props.dirty =
    /*dirty*/
    ctx[2];
  }

  if (
  /*invalid*/
  ctx[3] !== void 0) {
    textarea_1_props.invalid =
    /*invalid*/
    ctx[3];
  }

  var textarea_1 = new Textarea({
    props: textarea_1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textarea_1, "value", textarea_1_value_binding);
  });
  binding_callbacks.push(function () {
    return bind(textarea_1, "dirty", textarea_1_dirty_binding);
  });
  binding_callbacks.push(function () {
    return bind(textarea_1, "invalid", textarea_1_invalid_binding);
  });
  textarea_1.$on("change",
  /*change_handler*/
  ctx[34]);
  textarea_1.$on("input",
  /*input_handler*/
  ctx[35]);
  var block = {
    c: function create() {
      create_component(textarea_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(textarea_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(textarea_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var textarea_1_changes = dirty[0] &
      /*disabled, updateInvalid, $$props*/
      4325504 ? get_spread_update(textarea_1_spread_levels, [dirty[0] &
      /*disabled*/
      128 && {
        disabled:
        /*disabled*/
        ctx[7]
      }, dirty[0] &
      /*updateInvalid*/
      131072 && {
        updateInvalid:
        /*updateInvalid*/
        ctx[17]
      }, dirty[0] &
      /*$$props*/
      4194304 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "input$"))]) : {};

      if (!updating_value && dirty[0] &
      /*value*/
      1) {
        updating_value = true;
        textarea_1_changes.value =
        /*value*/
        ctx[0];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      if (!updating_dirty && dirty[0] &
      /*dirty*/
      4) {
        updating_dirty = true;
        textarea_1_changes.dirty =
        /*dirty*/
        ctx[2];
        add_flush_callback(function () {
          return updating_dirty = false;
        });
      }

      if (!updating_invalid && dirty[0] &
      /*invalid*/
      8) {
        updating_invalid = true;
        textarea_1_changes.invalid =
        /*invalid*/
        ctx[3];
        add_flush_callback(function () {
          return updating_invalid = false;
        });
      }

      textarea_1.$set(textarea_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(textarea_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(textarea_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(textarea_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_6.name,
    type: "if",
    source: "(23:4) {#if textarea}",
    ctx: ctx
  });
  return block;
} // (49:4) {#if !textarea && variant !== 'outlined'}


function create_if_block_3(ctx) {
  var t;
  var if_block1_anchor;
  var current;
  var if_block0 = !
  /*noLabel*/
  ctx[14] &&
  /*label*/
  ctx[15] != null && !
  /*fullwidth*/
  ctx[8] && create_if_block_5(ctx);
  var if_block1 =
  /*ripple*/
  ctx[6] && create_if_block_4(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (!
      /*noLabel*/
      ctx[14] &&
      /*label*/
      ctx[15] != null && !
      /*fullwidth*/
      ctx[8]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          transition_in(if_block0, 1);
        } else {
          if_block0 = create_if_block_5(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*ripple*/
      ctx[6]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_4(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(49:4) {#if !textarea && variant !== 'outlined'}",
    ctx: ctx
  });
  return block;
} // (50:6) {#if !noLabel && label != null && !fullwidth}


function create_if_block_5(ctx) {
  var current;
  var floatinglabel_spread_levels = [{
    wrapped: true
  }, prefixFilter(
  /*$$props*/
  ctx[22], "label$")];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  var floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(floatinglabel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(floatinglabel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var floatinglabel_changes = dirty[0] &
      /*$$props*/
      4194304 ? get_spread_update(floatinglabel_spread_levels, [floatinglabel_spread_levels[0], get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "label$"))]) : {};

      if (dirty[0] &
      /*label*/
      32768 | dirty[1] &
      /*$$scope*/
      8192) {
        floatinglabel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_5.name,
    type: "if",
    source: "(50:6) {#if !noLabel && label != null && !fullwidth}",
    ctx: ctx
  });
  return block;
} // (51:8) <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>


function create_default_slot_2(ctx) {
  var t;
  var current;
  var label_slot_template =
  /*$$slots*/
  ctx[30].label;
  var label_slot = create_slot(label_slot_template, ctx,
  /*$$scope*/
  ctx[44], get_label_slot_context);
  var block = {
    c: function create() {
      t = text(
      /*label*/
      ctx[15]);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*label*/
      ctx[15]);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (!current || dirty[0] &
      /*label*/
      32768) set_data_dev(t,
      /*label*/
      ctx[15]);

      if (label_slot && label_slot.p && dirty[1] &
      /*$$scope*/
      8192) {
        label_slot.p(get_slot_context(label_slot_template, ctx,
        /*$$scope*/
        ctx[44], get_label_slot_context), get_slot_changes(label_slot_template,
        /*$$scope*/
        ctx[44], dirty, get_label_slot_changes));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(51:8) <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>",
    ctx: ctx
  });
  return block;
} // (53:6) {#if ripple}


function create_if_block_4(ctx) {
  var current;
  var lineripple_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[22], "ripple$")];
  var lineripple_props = {};

  for (var i = 0; i < lineripple_spread_levels.length; i += 1) {
    lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
  }

  var lineripple = new LineRipple({
    props: lineripple_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(lineripple.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(lineripple.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineripple, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var lineripple_changes = dirty[0] &
      /*$$props*/
      4194304 ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "ripple$"))]) : {};
      lineripple.$set(lineripple_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(lineripple.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineripple.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineripple, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(53:6) {#if ripple}",
    ctx: ctx
  });
  return block;
} // (57:4) {#if textarea || (variant === 'outlined' && !fullwidth)}


function create_if_block_1(ctx) {
  var current;
  var notchedoutline_spread_levels = [{
    noLabel:
    /*noLabel*/
    ctx[14] ||
    /*label*/
    ctx[15] == null
  }, prefixFilter(
  /*$$props*/
  ctx[22], "outline$")];
  var notchedoutline_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < notchedoutline_spread_levels.length; i += 1) {
    notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
  }

  var notchedoutline = new NotchedOutline({
    props: notchedoutline_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(notchedoutline.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(notchedoutline.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(notchedoutline, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var notchedoutline_changes = dirty[0] &
      /*noLabel, label, $$props*/
      4243456 ? get_spread_update(notchedoutline_spread_levels, [dirty[0] &
      /*noLabel, label*/
      49152 && {
        noLabel:
        /*noLabel*/
        ctx[14] ||
        /*label*/
        ctx[15] == null
      }, dirty[0] &
      /*$$props*/
      4194304 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "outline$"))]) : {};

      if (dirty[0] &
      /*label, noLabel*/
      49152 | dirty[1] &
      /*$$scope*/
      8192) {
        notchedoutline_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      notchedoutline.$set(notchedoutline_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(notchedoutline.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(notchedoutline.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(notchedoutline, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(57:4) {#if textarea || (variant === 'outlined' && !fullwidth)}",
    ctx: ctx
  });
  return block;
} // (59:8) {#if !noLabel && label != null}


function create_if_block_2(ctx) {
  var current;
  var floatinglabel_spread_levels = [{
    wrapped: true
  }, prefixFilter(
  /*$$props*/
  ctx[22], "label$")];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  var floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(floatinglabel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(floatinglabel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var floatinglabel_changes = dirty[0] &
      /*$$props*/
      4194304 ? get_spread_update(floatinglabel_spread_levels, [floatinglabel_spread_levels[0], get_spread_object(prefixFilter(
      /*$$props*/
      ctx[22], "label$"))]) : {};

      if (dirty[0] &
      /*label*/
      32768 | dirty[1] &
      /*$$scope*/
      8192) {
        floatinglabel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(59:8) {#if !noLabel && label != null}",
    ctx: ctx
  });
  return block;
} // (60:10) <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>


function create_default_slot_1(ctx) {
  var t;
  var current;
  var label_slot_template =
  /*$$slots*/
  ctx[30].label;
  var label_slot = create_slot(label_slot_template, ctx,
  /*$$scope*/
  ctx[44], get_label_slot_context_1);
  var block = {
    c: function create() {
      t = text(
      /*label*/
      ctx[15]);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*label*/
      ctx[15]);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (!current || dirty[0] &
      /*label*/
      32768) set_data_dev(t,
      /*label*/
      ctx[15]);

      if (label_slot && label_slot.p && dirty[1] &
      /*$$scope*/
      8192) {
        label_slot.p(get_slot_context(label_slot_template, ctx,
        /*$$scope*/
        ctx[44], get_label_slot_context_1), get_slot_changes(label_slot_template,
        /*$$scope*/
        ctx[44], dirty, get_label_slot_changes_1));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(60:10) <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>",
    ctx: ctx
  });
  return block;
} // (58:6) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>


function create_default_slot(ctx) {
  var if_block_anchor;
  var current;
  var if_block = !
  /*noLabel*/
  ctx[14] &&
  /*label*/
  ctx[15] != null && create_if_block_2(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (!
      /*noLabel*/
      ctx[14] &&
      /*label*/
      ctx[15] != null) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
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
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(58:6) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$2, create_else_block_1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*valued*/
    ctx[20]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);

  var uninitializedValue = function uninitializedValue() {};

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$disabled = _$$props4.disabled,
      disabled = _$$props4$disabled === void 0 ? false : _$$props4$disabled;
  var _$$props5 = $$props,
      _$$props5$fullwidth = _$$props5.fullwidth,
      fullwidth = _$$props5$fullwidth === void 0 ? false : _$$props5$fullwidth;
  var _$$props6 = $$props,
      _$$props6$textarea = _$$props6.textarea,
      textarea = _$$props6$textarea === void 0 ? false : _$$props6$textarea;
  var _$$props7 = $$props,
      _$$props7$variant = _$$props7.variant,
      variant = _$$props7$variant === void 0 ? "standard" : _$$props7$variant;
  var _$$props8 = $$props,
      _$$props8$dense = _$$props8.dense,
      dense = _$$props8$dense === void 0 ? false : _$$props8$dense;
  var _$$props9 = $$props,
      _$$props9$withLeading = _$$props9.withLeadingIcon,
      withLeadingIcon = _$$props9$withLeading === void 0 ? false : _$$props9$withLeading;
  var _$$props10 = $$props,
      _$$props10$withTraili = _$$props10.withTrailingIcon,
      withTrailingIcon = _$$props10$withTraili === void 0 ? false : _$$props10$withTraili;
  var _$$props11 = $$props,
      _$$props11$noLabel = _$$props11.noLabel,
      noLabel = _$$props11$noLabel === void 0 ? false : _$$props11$noLabel;
  var _$$props12 = $$props,
      _$$props12$label = _$$props12.label,
      label = _$$props12$label === void 0 ? null : _$$props12$label;
  var _$$props13 = $$props,
      _$$props13$type = _$$props13.type,
      type = _$$props13$type === void 0 ? "text" : _$$props13$type;
  var _$$props14 = $$props,
      _$$props14$value = _$$props14.value,
      value = _$$props14$value === void 0 ? uninitializedValue : _$$props14$value;
  var _$$props15 = $$props,
      _$$props15$files = _$$props15.files,
      files = _$$props15$files === void 0 ? uninitializedValue : _$$props15$files;
  var _$$props16 = $$props,
      _$$props16$dirty = _$$props16.dirty,
      dirty = _$$props16$dirty === void 0 ? false : _$$props16$dirty;
  var _$$props17 = $$props,
      _$$props17$invalid = _$$props17.invalid,
      invalid = _$$props17$invalid === void 0 ? uninitializedValue : _$$props17$invalid;
  var _$$props18 = $$props,
      _$$props18$updateInva = _$$props18.updateInvalid,
      updateInvalid = _$$props18$updateInva === void 0 ? invalid === uninitializedValue : _$$props18$updateInva;
  var _$$props19 = $$props,
      _$$props19$useNativeV = _$$props19.useNativeValidation,
      useNativeValidation = _$$props19$useNativeV === void 0 ? updateInvalid : _$$props19$useNativeV;
  var element;
  var textField;
  var addLayoutListener = getContext("SMUI:addLayoutListener");
  var removeLayoutListener;

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(function () {
    $$invalidate(26, textField = new MDCTextField(element));

    if (!ripple) {
      textField.ripple && textField.ripple.destroy();
    }
  });
  onDestroy(function () {
    textField && textField.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function focus() {
    var _textField;

    return (_textField = textField).focus.apply(_textField, arguments);
  }

  function layout() {
    var _textField2;

    return (_textField2 = textField).layout.apply(_textField2, arguments);
  }

  var _$$props20 = $$props,
      _$$props20$$$slots = _$$props20.$$slots,
      $$slots = _$$props20$$$slots === void 0 ? {} : _$$props20$$$slots,
      $$scope = _$$props20.$$scope;

  function textarea_1_value_binding(value_1) {
    value = value_1;
    $$invalidate(0, value);
  }

  function textarea_1_dirty_binding(value_2) {
    dirty = value_2;
    $$invalidate(2, dirty);
  }

  function textarea_1_invalid_binding(value_3) {
    invalid = value_3;
    ((((($$invalidate(3, invalid), $$invalidate(26, textField)), $$invalidate(17, updateInvalid)), $$invalidate(0, value)), $$invalidate(28, uninitializedValue)), $$invalidate(7, disabled)), $$invalidate(23, useNativeValidation);
  }

  function change_handler(event) {
    bubble($$self, event);
  }

  function input_handler(event) {
    bubble($$self, event);
  }

  function input_value_binding(value_1) {
    value = value_1;
    $$invalidate(0, value);
  }

  function input_files_binding(value_2) {
    files = value_2;
    $$invalidate(1, files);
  }

  function input_dirty_binding(value_3) {
    dirty = value_3;
    $$invalidate(2, dirty);
  }

  function input_invalid_binding(value_4) {
    invalid = value_4;
    ((((($$invalidate(3, invalid), $$invalidate(26, textField)), $$invalidate(17, updateInvalid)), $$invalidate(0, value)), $$invalidate(28, uninitializedValue)), $$invalidate(7, disabled)), $$invalidate(23, useNativeValidation);
  }

  function change_handler_1(event) {
    bubble($$self, event);
  }

  function input_handler_1(event) {
    bubble($$self, event);
  }

  function label_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(18, element = $$value);
    });
  }

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(18, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(22, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(4, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(5, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(6, ripple = $$new_props.ripple);
    if ("disabled" in $$new_props) $$invalidate(7, disabled = $$new_props.disabled);
    if ("fullwidth" in $$new_props) $$invalidate(8, fullwidth = $$new_props.fullwidth);
    if ("textarea" in $$new_props) $$invalidate(9, textarea = $$new_props.textarea);
    if ("variant" in $$new_props) $$invalidate(10, variant = $$new_props.variant);
    if ("dense" in $$new_props) $$invalidate(11, dense = $$new_props.dense);
    if ("withLeadingIcon" in $$new_props) $$invalidate(12, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("withTrailingIcon" in $$new_props) $$invalidate(13, withTrailingIcon = $$new_props.withTrailingIcon);
    if ("noLabel" in $$new_props) $$invalidate(14, noLabel = $$new_props.noLabel);
    if ("label" in $$new_props) $$invalidate(15, label = $$new_props.label);
    if ("type" in $$new_props) $$invalidate(16, type = $$new_props.type);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("files" in $$new_props) $$invalidate(1, files = $$new_props.files);
    if ("dirty" in $$new_props) $$invalidate(2, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props) $$invalidate(3, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props) $$invalidate(17, updateInvalid = $$new_props.updateInvalid);
    if ("useNativeValidation" in $$new_props) $$invalidate(23, useNativeValidation = $$new_props.useNativeValidation);
    if ("$$scope" in $$new_props) $$invalidate(44, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      uninitializedValue: uninitializedValue,
      use: use,
      className: className,
      ripple: ripple,
      disabled: disabled,
      fullwidth: fullwidth,
      textarea: textarea,
      variant: variant,
      dense: dense,
      withLeadingIcon: withLeadingIcon,
      withTrailingIcon: withTrailingIcon,
      noLabel: noLabel,
      label: label,
      type: type,
      value: value,
      files: files,
      dirty: dirty,
      invalid: invalid,
      updateInvalid: updateInvalid,
      useNativeValidation: useNativeValidation,
      element: element,
      textField: textField,
      addLayoutListener: addLayoutListener,
      removeLayoutListener: removeLayoutListener,
      props: props,
      valued: valued
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(22, $$props = assign(assign({}, $$props), $$new_props));
    if ("uninitializedValue" in $$props) $$invalidate(28, uninitializedValue = $$new_props.uninitializedValue);
    if ("use" in $$props) $$invalidate(4, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(5, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(6, ripple = $$new_props.ripple);
    if ("disabled" in $$props) $$invalidate(7, disabled = $$new_props.disabled);
    if ("fullwidth" in $$props) $$invalidate(8, fullwidth = $$new_props.fullwidth);
    if ("textarea" in $$props) $$invalidate(9, textarea = $$new_props.textarea);
    if ("variant" in $$props) $$invalidate(10, variant = $$new_props.variant);
    if ("dense" in $$props) $$invalidate(11, dense = $$new_props.dense);
    if ("withLeadingIcon" in $$props) $$invalidate(12, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("withTrailingIcon" in $$props) $$invalidate(13, withTrailingIcon = $$new_props.withTrailingIcon);
    if ("noLabel" in $$props) $$invalidate(14, noLabel = $$new_props.noLabel);
    if ("label" in $$props) $$invalidate(15, label = $$new_props.label);
    if ("type" in $$props) $$invalidate(16, type = $$new_props.type);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("files" in $$props) $$invalidate(1, files = $$new_props.files);
    if ("dirty" in $$props) $$invalidate(2, dirty = $$new_props.dirty);
    if ("invalid" in $$props) $$invalidate(3, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$props) $$invalidate(17, updateInvalid = $$new_props.updateInvalid);
    if ("useNativeValidation" in $$props) $$invalidate(23, useNativeValidation = $$new_props.useNativeValidation);
    if ("element" in $$props) $$invalidate(18, element = $$new_props.element);
    if ("textField" in $$props) $$invalidate(26, textField = $$new_props.textField);
    if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
    if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
    if ("props" in $$props) $$invalidate(19, props = $$new_props.props);
    if ("valued" in $$props) $$invalidate(20, valued = $$new_props.valued);
  };

  var props;
  var valued;

  $$self.$$.update = function () {
     $$invalidate(19, props = exclude($$props, ["use", "class", "ripple", "disabled", "fullwidth", "textarea", "variant", "dense", "withLeadingIcon", "withTrailingIcon", "noLabel", "label", "type", "value", "dirty", "invalid", "updateInvalid", "useNativeValidation", "input$", "label$", "ripple$", "outline$"]));

    if ($$self.$$.dirty[0] &
    /*value, files*/
    3) {
       $$invalidate(20, valued = value !== uninitializedValue || files !== uninitializedValue);
    }

    if ($$self.$$.dirty[0] &
    /*textField, value*/
    67108865) {
       if (textField && value !== uninitializedValue && textField.value !== value) {
        $$invalidate(26, textField.value = value, textField);
      }
    }

    if ($$self.$$.dirty[0] &
    /*textField, disabled*/
    67108992) {
       if (textField && textField.disabled !== disabled) {
        $$invalidate(26, textField.disabled = disabled, textField);
      }
    }

    if ($$self.$$.dirty[0] &
    /*textField, invalid, updateInvalid*/
    67239944) {
       if (textField && textField.valid !== !invalid) {
        if (updateInvalid) {
          $$invalidate(3, invalid = !textField.valid);
        } else {
          $$invalidate(26, textField.valid = !invalid, textField);
        }
      }
    }

    if ($$self.$$.dirty[0] &
    /*textField, useNativeValidation*/
    75497472) {
       if (textField && textField.useNativeValidation !== useNativeValidation) {
        $$invalidate(26, textField.useNativeValidation = useNativeValidation, textField);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [value, files, dirty, invalid, use, className, ripple, disabled, fullwidth, textarea, variant, dense, withLeadingIcon, withTrailingIcon, noLabel, label, type, updateInvalid, element, props, valued, forwardEvents, $$props, useNativeValidation, focus, layout, textField, removeLayoutListener, uninitializedValue, addLayoutListener, $$slots, textarea_1_value_binding, textarea_1_dirty_binding, textarea_1_invalid_binding, change_handler, input_handler, input_value_binding, input_files_binding, input_dirty_binding, input_invalid_binding, change_handler_1, input_handler_1, label_1_binding, div_binding, $$scope];
}

var Textfield =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Textfield, _SvelteComponentDev);

  function Textfield(options) {
    var _this;

    _classCallCheck(this, Textfield);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textfield).call(this, options));
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
      use: 4,
      class: 5,
      ripple: 6,
      disabled: 7,
      fullwidth: 8,
      textarea: 9,
      variant: 10,
      dense: 11,
      withLeadingIcon: 12,
      withTrailingIcon: 13,
      noLabel: 14,
      label: 15,
      type: 16,
      value: 0,
      files: 1,
      dirty: 2,
      invalid: 3,
      updateInvalid: 17,
      useNativeValidation: 23,
      focus: 24,
      layout: 25
    }, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Textfield",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  _createClass(Textfield, [{
    key: "use",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "fullwidth",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "textarea",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dense",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withLeadingIcon",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withTrailingIcon",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "noLabel",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "files",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dirty",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "invalid",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "updateInvalid",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "useNativeValidation",
    get: function get() {
      throw new Error("<Textfield>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focus",
    get: function get() {
      return this.$$.ctx[24];
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx[25];
    },
    set: function set(value) {
      throw new Error("<Textfield>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Textfield;
}(SvelteComponentDev);

var css$1 = ".mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .15s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-text-field-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:auto}";
styleInject(css$1);

var file$6 = "node_modules/@smui/textfield/helper-text/HelperText.svelte";

var get_character_counter_slot_changes = function get_character_counter_slot_changes(dirty) {
  return {};
};

var get_character_counter_slot_context = function get_character_counter_slot_context(ctx) {
  return {};
};

function create_fragment$6(ctx) {
  var div1;
  var div0;
  var useActions_action;
  var forwardEvents_action;
  var t;
  var useActions_action_1;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[11].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var div0_levels = [{
    class: "\n      mdc-text-field-helper-text\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*persistent*/
    ctx[2] ? "mdc-text-field-helper-text--persistent" : "") + "\n      " + (
    /*validationMsg*/
    ctx[3] ? "mdc-text-field-helper-text--validation-msg" : "") + "\n    "
  }, {
    "aria-hidden": "true"
  }, exclude(
  /*$$props*/
  ctx[8], ["use", "class", "persistent", "validationMsg"])];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var character_counter_slot_template =
  /*$$slots*/
  ctx[11]["character-counter"];
  var character_counter_slot = create_slot(character_counter_slot_template, ctx,
  /*$$scope*/
  ctx[10], get_character_counter_slot_context);
  var div1_levels = [{
    class: "mdc-text-field-helper-line " +
    /*line$class*/
    ctx[5]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[8], "line$"), ["use", "class"])];
  var div1_data = {};

  for (var _i = 0; _i < div1_levels.length; _i += 1) {
    div1_data = assign(div1_data, div1_levels[_i]);
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      t = space();
      if (character_counter_slot) character_counter_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true,
        "aria-hidden": true
      });
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t = claim_space(div1_nodes);
      if (character_counter_slot) character_counter_slot.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div0, div0_data);
      add_location(div0, file$6, 5, 2, 152);
      set_attributes(div1, div1_data);
      add_location(div1, file$6, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }
      /*div0_binding*/


      ctx[12](div0);
      append_dev(div1, t);

      if (character_counter_slot) {
        character_counter_slot.m(div1, null);
      }

      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div0,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, div0)), action_destroyer(useActions_action_1 = useActions.call(null, div1,
      /*line$use*/
      ctx[4]))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      1024) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[10], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[10], dirty, null));
      }

      set_attributes(div0, get_spread_update(div0_levels, [dirty &
      /*className, persistent, validationMsg*/
      14 && {
        class: "\n      mdc-text-field-helper-text\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*persistent*/
        ctx[2] ? "mdc-text-field-helper-text--persistent" : "") + "\n      " + (
        /*validationMsg*/
        ctx[3] ? "mdc-text-field-helper-text--validation-msg" : "") + "\n    "
      }, {
        "aria-hidden": "true"
      }, dirty &
      /*exclude, $$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "persistent", "validationMsg"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);

      if (character_counter_slot && character_counter_slot.p && dirty &
      /*$$scope*/
      1024) {
        character_counter_slot.p(get_slot_context(character_counter_slot_template, ctx,
        /*$$scope*/
        ctx[10], get_character_counter_slot_context), get_slot_changes(character_counter_slot_template,
        /*$$scope*/
        ctx[10], dirty, get_character_counter_slot_changes));
      }

      set_attributes(div1, get_spread_update(div1_levels, [dirty &
      /*line$class*/
      32 && {
        class: "mdc-text-field-helper-line " +
        /*line$class*/
        ctx[5]
      }, dirty &
      /*exclude, prefixFilter, $$props*/
      256 && exclude(prefixFilter(
      /*$$props*/
      ctx[8], "line$"), ["use", "class"])]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty &
      /*line$use*/
      16) useActions_action_1.update.call(null,
      /*line$use*/
      ctx[4]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(character_counter_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(character_counter_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      /*div0_binding*/

      ctx[12](null);
      if (character_counter_slot) character_counter_slot.d(detaching);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$6($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$persistent = _$$props3.persistent,
      persistent = _$$props3$persistent === void 0 ? false : _$$props3$persistent;
  var _$$props4 = $$props,
      _$$props4$validationM = _$$props4.validationMsg,
      validationMsg = _$$props4$validationM === void 0 ? false : _$$props4$validationM;
  var _$$props5 = $$props,
      _$$props5$line$use = _$$props5.line$use,
      line$use = _$$props5$line$use === void 0 ? [] : _$$props5$line$use;
  var _$$props6 = $$props,
      _$$props6$line$class = _$$props6.line$class,
      line$class = _$$props6$line$class === void 0 ? "" : _$$props6$line$class;
  var element;
  var helperText;
  onMount(function () {
    helperText = new MDCTextFieldHelperText(element);
  });
  onDestroy(function () {
    helperText && helperText.destroy();
  });
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(6, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("persistent" in $$new_props) $$invalidate(2, persistent = $$new_props.persistent);
    if ("validationMsg" in $$new_props) $$invalidate(3, validationMsg = $$new_props.validationMsg);
    if ("line$use" in $$new_props) $$invalidate(4, line$use = $$new_props.line$use);
    if ("line$class" in $$new_props) $$invalidate(5, line$class = $$new_props.line$class);
    if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      persistent: persistent,
      validationMsg: validationMsg,
      line$use: line$use,
      line$class: line$class,
      element: element,
      helperText: helperText
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("persistent" in $$props) $$invalidate(2, persistent = $$new_props.persistent);
    if ("validationMsg" in $$props) $$invalidate(3, validationMsg = $$new_props.validationMsg);
    if ("line$use" in $$props) $$invalidate(4, line$use = $$new_props.line$use);
    if ("line$class" in $$props) $$invalidate(5, line$class = $$new_props.line$class);
    if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
    if ("helperText" in $$props) helperText = $$new_props.helperText;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, persistent, validationMsg, line$use, line$class, element, forwardEvents, $$props, helperText, $$scope, $$slots, div0_binding];
}

var HelperText =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(HelperText, _SvelteComponentDev);

  function HelperText(options) {
    var _this;

    _classCallCheck(this, HelperText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelperText).call(this, options));
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
      use: 0,
      class: 1,
      persistent: 2,
      validationMsg: 3,
      line$use: 4,
      line$class: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "HelperText",
      options: options,
      id: create_fragment$6.name
    });
    return _this;
  }

  _createClass(HelperText, [{
    key: "use",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "persistent",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "validationMsg",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "line$use",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "line$class",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return HelperText;
}(SvelteComponentDev);

var file$7 = "src/routes/board/edit/[id].svelte"; // (31:4) <HelperText id="helper-name">

function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("The name is used in the sidebar and on the board page.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "The name is used in the sidebar and on the board page.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(31:4) <HelperText id=\\\"helper-name\\\">",
    ctx: ctx
  });
  return block;
} // (48:4) <HelperText id="helper-level">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("The level determines how far to indent the board in the sidebar. 0-4.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "The level determines how far to indent the board in the sidebar. 0-4.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(48:4) <HelperText id=\\\"helper-level\\\">",
    ctx: ctx
  });
  return block;
} // (55:6) <Label>


function create_default_slot_3(ctx) {
  var t_value = (
  /*create*/
  ctx[0] ? "Create" : "Done") + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*create*/
      1 && t_value !== (t_value = (
      /*create*/
      ctx[0] ? "Create" : "Done") + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(55:6) <Label>",
    ctx: ctx
  });
  return block;
} // (54:4) <Button type="submit" bind:disabled={$loading}>


function create_default_slot_2$1(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope, create*/
      4097) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(54:4) <Button type=\\\"submit\\\" bind:disabled={$loading}>",
    ctx: ctx
  });
  return block;
} // (57:4) {#if !create}


function create_if_block$3(ctx) {
  var updating_disabled;
  var current;

  function button_disabled_binding_1(value) {
    /*button_disabled_binding_1*/
    ctx[11].call(null, value);
  }

  var button_props = {
    type: "button",
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*$loading*/
  ctx[2] !== void 0) {
    button_props.disabled =
    /*$loading*/
    ctx[2];
  }

  var button = new Button({
    props: button_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(button, "disabled", button_disabled_binding_1);
  });
  button.$on("click",
  /*deleteBoard*/
  ctx[5]);
  var block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_disabled && dirty &
      /*$loading*/
      4) {
        updating_disabled = true;
        button_changes.disabled =
        /*$loading*/
        ctx[2];
        add_flush_callback(function () {
          return updating_disabled = false;
        });
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$3.name,
    type: "if",
    source: "(57:4) {#if !create}",
    ctx: ctx
  });
  return block;
} // (59:8) <Label>


function create_default_slot_1$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: "(59:8) <Label>",
    ctx: ctx
  });
  return block;
} // (58:6) <Button type="button" on:click={deleteBoard} bind:disabled={$loading}>


function create_default_slot$1(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(58:6) <Button type=\\\"button\\\" on:click={deleteBoard} bind:disabled={$loading}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$7(ctx) {
  var title_value;
  var t0;
  var h2;
  var t1_value = (
  /*create*/
  ctx[0] ? "Create a Board" : "Edit ".concat(
  /*board*/
  ctx[1].name)) + "";
  var t1;
  var t2;
  var form;
  var div0;
  var updating_value;
  var t3;
  var t4;
  var div1;
  var updating_value_1;
  var t5;
  var t6;
  var div2;
  var updating_disabled;
  var t7;
  var current;
  var dispose;
  document.title = title_value = "" + ((
  /*create*/
  ctx[0] ? "New Board" : "Edit ".concat(
  /*board*/
  ctx[1].name)) + " - Sound Rodeo");

  function textfield0_value_binding(value) {
    /*textfield0_value_binding*/
    ctx[8].call(null, value);
  }

  var textfield0_props = {
    label: "Name",
    "input$aria-controls": "helper-name",
    "input$aria-describedby": "helper-name",
    input$required: true,
    style: "min-width: 250px;"
  };

  if (
  /*board*/
  ctx[1].name !== void 0) {
    textfield0_props.value =
    /*board*/
    ctx[1].name;
  }

  var textfield0 = new Textfield({
    props: textfield0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield0, "value", textfield0_value_binding);
  });
  var helpertext0 = new HelperText({
    props: {
      id: "helper-name",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function textfield1_value_binding(value_1) {
    /*textfield1_value_binding*/
    ctx[9].call(null, value_1);
  }

  var textfield1_props = {
    type: "number",
    label: "Level",
    "input$aria-controls": "helper-level",
    "input$aria-describedby": "helper-level",
    input$required: true,
    input$min: "0",
    input$max: "4",
    input$pattern: "\\d",
    style: "min-width: 250px;"
  };

  if (
  /*board*/
  ctx[1].level !== void 0) {
    textfield1_props.value =
    /*board*/
    ctx[1].level;
  }

  var textfield1 = new Textfield({
    props: textfield1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield1, "value", textfield1_value_binding);
  });
  var helpertext1 = new HelperText({
    props: {
      id: "helper-level",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function button_disabled_binding(value_2) {
    /*button_disabled_binding*/
    ctx[10].call(null, value_2);
  }

  var button_props = {
    type: "submit",
    $$slots: {
      default: [create_default_slot_2$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*$loading*/
  ctx[2] !== void 0) {
    button_props.disabled =
    /*$loading*/
    ctx[2];
  }

  var button = new Button({
    props: button_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(button, "disabled", button_disabled_binding);
  });
  var if_block = !
  /*create*/
  ctx[0] && create_if_block$3(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h2 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      form = element("form");
      div0 = element("div");
      create_component(textfield0.$$.fragment);
      t3 = space();
      create_component(helpertext0.$$.fragment);
      t4 = space();
      div1 = element("div");
      create_component(textfield1.$$.fragment);
      t5 = space();
      create_component(helpertext1.$$.fragment);
      t6 = space();
      div2 = element("div");
      create_component(button.$$.fragment);
      t7 = space();
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-krzq7g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, t1_value);
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      form = claim_element(nodes, "FORM", {});
      var form_nodes = children(form);
      div0 = claim_element(form_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(textfield0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(helpertext0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(form_nodes);
      div1 = claim_element(form_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(textfield1.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(helpertext1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(form_nodes);
      div2 = claim_element(form_nodes, "DIV", {
        style: true
      });
      var div2_nodes = children(div2);
      claim_component(button.$$.fragment, div2_nodes);
      t7 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h2, file$7, 4, 0, 107);
      add_location(div0, file$7, 22, 2, 637);
      add_location(div1, file$7, 35, 2, 971);
      set_style(div2, "width", "250px");
      set_style(div2, "text-align", "right");
      set_style(div2, "margin-top", "2em");
      add_location(div2, file$7, 52, 2, 1410);
      add_location(form, file$7, 6, 0, 168);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h2, anchor);
      append_dev(h2, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, form, anchor);
      append_dev(form, div0);
      mount_component(textfield0, div0, null);
      append_dev(div0, t3);
      mount_component(helpertext0, div0, null);
      append_dev(form, t4);
      append_dev(form, div1);
      mount_component(textfield1, div1, null);
      append_dev(div1, t5);
      mount_component(helpertext1, div1, null);
      append_dev(form, t6);
      append_dev(form, div2);
      mount_component(button, div2, null);
      append_dev(div2, t7);
      if (if_block) if_block.m(div2, null);
      current = true;
      dispose = listen_dev(form, "submit",
      /*commit*/
      ctx[4], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*create, board*/
      3) && title_value !== (title_value = "" + ((
      /*create*/
      ctx[0] ? "New Board" : "Edit ".concat(
      /*board*/
      ctx[1].name)) + " - Sound Rodeo"))) {
        document.title = title_value;
      }

      if ((!current || dirty &
      /*create, board*/
      3) && t1_value !== (t1_value = (
      /*create*/
      ctx[0] ? "Create a Board" : "Edit ".concat(
      /*board*/
      ctx[1].name)) + "")) set_data_dev(t1, t1_value);
      var textfield0_changes = {};

      if (!updating_value && dirty &
      /*board*/
      2) {
        updating_value = true;
        textfield0_changes.value =
        /*board*/
        ctx[1].name;
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      textfield0.$set(textfield0_changes);
      var helpertext0_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        helpertext0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext0.$set(helpertext0_changes);
      var textfield1_changes = {};

      if (!updating_value_1 && dirty &
      /*board*/
      2) {
        updating_value_1 = true;
        textfield1_changes.value =
        /*board*/
        ctx[1].level;
        add_flush_callback(function () {
          return updating_value_1 = false;
        });
      }

      textfield1.$set(textfield1_changes);
      var helpertext1_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        helpertext1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext1.$set(helpertext1_changes);
      var button_changes = {};

      if (dirty &
      /*$$scope, create*/
      4097) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_disabled && dirty &
      /*$loading*/
      4) {
        updating_disabled = true;
        button_changes.disabled =
        /*$loading*/
        ctx[2];
        add_flush_callback(function () {
          return updating_disabled = false;
        });
      }

      button.$set(button_changes);

      if (!
      /*create*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block$3(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(textfield0.$$.fragment, local);
      transition_in(helpertext0.$$.fragment, local);
      transition_in(textfield1.$$.fragment, local);
      transition_in(helpertext1.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(textfield0.$$.fragment, local);
      transition_out(helpertext0.$$.fragment, local);
      transition_out(textfield1.$$.fragment, local);
      transition_out(helpertext1.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(form);
      destroy_component(textfield0);
      destroy_component(helpertext0);
      destroy_component(textfield1);
      destroy_component(helpertext1);
      destroy_component(button);
      if (if_block) if_block.d();
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$7($$self, $$props, $$invalidate) {
  var $boards;
  var $page;
  var $loading;
  validate_store(boards, "boards");
  component_subscribe($$self, boards, function ($$value) {
    return $$invalidate(6, $boards = $$value);
  });
  validate_store(loading, "loading");
  component_subscribe($$self, loading, function ($$value) {
    return $$invalidate(2, $loading = $$value);
  });

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(7, $page = value);
  });
  var create = true;
  var board;

  do {
    board = {
      id: "".concat(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      name: "",
      sounds: [],
      size: 1,
      level: 0
    };
  } while ($boards.filter(function (b) {
    return b.id === board.id;
  }).length);

  if ("id" in $page.params) {
    var id = $page.params.id;
    create = false;
    board = $boards.filter(function (b) {
      return b.id === id;
    })[0];
  }

  function commit(e) {
    e.preventDefault();

    if (create) {
      // if ($boards.filter(b => b.id === board.id).length) {
      //   alert(
      //     "You already have a board with that ID. Creating another one with the same ID is illegal."
      //   );
      //   return;
      // }
      set_store_value(boards, $boards = [].concat(_toConsumableArray($boards), [board]));
    } else {
      boards.set($boards);
    }

    goto("/board/".concat(board.id));
  }

  function deleteBoard() {
    if (confirm("Are you sure you want to delete this board and all its sounds?")) {
      set_store_value(boards, $boards = $boards.filter(function (b) {
        return b.id !== board.id;
      }));
      goto("/");
    }
  }

  function textfield0_value_binding(value) {
    board.name = value;
    $$invalidate(1, board);
  }

  function textfield1_value_binding(value_1) {
    board.level = value_1;
    $$invalidate(1, board);
  }

  function button_disabled_binding(value_2) {
    $loading = value_2;
    loading.set($loading);
  }

  function button_disabled_binding_1(value) {
    $loading = value;
    loading.set($loading);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("create" in $$props) $$invalidate(0, create = $$props.create);
    if ("board" in $$props) $$invalidate(1, board = $$props.board);
    if ("$boards" in $$props) boards.set($boards = $$props.$boards);
    if ("$page" in $$props) page.set($page = $$props.$page);
    if ("$loading" in $$props) loading.set($loading = $$props.$loading);
  };

  return [create, board, $loading, page, commit, deleteBoard, $boards, $page, textfield0_value_binding, textfield1_value_binding, button_disabled_binding, button_disabled_binding_1];
}

var U5Bidu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bidu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
