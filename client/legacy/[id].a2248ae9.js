import { N as styleInject, d as _inherits, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, i as init, s as safe_not_equal, h as _assertThisInitialized, j as dispatch_dev, X as _createClass, S as SvelteComponentDev, H as create_slot, a6 as exclude, a2 as assign, Y as forwardEventsBuilder, a3 as exclude_internal_props, l as element, o as claim_element, p as children, m as detach_dev, a7 as set_attributes, u as add_location, w as insert_dev, a8 as action_destroyer, a9 as useActions, C as _slicedToArray, I as get_slot_context, J as get_slot_changes, aa as get_spread_update, ab as is_function, G as transition_in, E as transition_out, ac as run_all, Z as current_component, av as classAdderBuilder, aw as Div, ax as Ripple, ay as setContext, O as __extends, P as _assign, Q as MDCFoundation, R as MDCComponent, T as applyPassive, $ as getContext, a0 as onMount, a1 as onDestroy, v as attr_dev, x as append_dev, k as space, K as svg_element, n as claim_space, ad as listen_dev, y as noop, a5 as binding_callbacks, as as _toConsumableArray, z as validate_store, A as component_subscribe, ap as stores$1, aq as boards, az as editMode, al as bind, ag as create_component, ah as claim_component, ai as mount_component, am as add_flush_callback, ak as destroy_component, q as query_selector_all, D as group_outros, F as check_outros, aA as destroy_each, t as text, r as claim_text, aB as IconButton, aC as Icon, aD as mdiPencil, M as set_style, aE as mdiDelete } from './client.e2f997a3.js';

var css = ".mdc-card{border-radius:4px;background-color:#000;background-color:var(--mdc-theme-surface,#000);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);border:1px solid #1f1f1f}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-card__media:before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square:before{margin-top:100%}.mdc-card__media--16-9:before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:hsla(0,0%,100%,.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl],[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}.mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__action--button{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl],[dir=rtl] .mdc-card__action--button:last-child{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:hsla(0,0%,100%,.6)}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-card__primary-action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-card__primary-action:after,.mdc-card__primary-action:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-card__primary-action:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-card__primary-action.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-card__primary-action:after,.mdc-card__primary-action:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-card__primary-action:after,.mdc-card__primary-action:before{background-color:#fff}.mdc-card__primary-action:hover:before{opacity:.08}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:before,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-card__primary-action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:hsla(0,0%,100%,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#1565c0;color:var(--mdc-theme-primary,#1565c0)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:hsla(0,0%,100%,.12);color:hsla(0,0%,100%,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#1565c0}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#1565c0)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:hsla(0,0%,100%,.37)}.mdc-button--outlined:not(:disabled){border-color:#1565c0;border-color:var(--mdc-theme-primary,#1565c0)}.mdc-button--dense{height:32px;font-size:.8125rem}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:after,.mdc-button:before{background-color:#1565c0}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#1565c0)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button--color-secondary:not(:disabled){color:#4a148c;color:var(--mdc-theme-secondary,#4a148c)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#4a148c}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#4a148c)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#4a148c;border-color:var(--mdc-theme-secondary,#4a148c)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#4a148c}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#4a148c)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button,.smui-button__group>.smui-button__group-item>.mdc-button{margin-left:0;margin-right:0}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised{border-radius:4px;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised.mdc-button--dense,.smui-button__group>.smui-button__group-item>.mdc-button--raised.mdc-button--dense{border-radius:4px}.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded:after,.mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button:after,.mdc-icon-button:before{background-color:#fff}.mdc-icon-button:hover:before{opacity:.08}.mdc-icon-button.mdc-ripple-upgraded--background-focused:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-icon-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#fff}.mdc-ripple-surface:hover:before{opacity:.08}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#1565c0}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#1565c0)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#4a148c}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#4a148c)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-card--padded,.smui-card__content,.smui-card__primary-action--padded{padding:16px}";
styleInject(css);

var file = "node_modules/@smui/card/Card.svelte";

function create_fragment(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[7].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  var div_levels = [{
    class: "\n    mdc-card\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*variant*/
    ctx[2] === "outlined" ? "mdc-card--outlined" : "") + "\n    " + (
    /*padded*/
    ctx[3] ? "smui-card--padded" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "variant", "padded"])];
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
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, div))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      64) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[6], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[6], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, variant, padded*/
      14 && {
        class: "\n    mdc-card\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*variant*/
        ctx[2] === "outlined" ? "mdc-card--outlined" : "") + "\n    " + (
        /*padded*/
        ctx[3] ? "smui-card--padded" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      32 && exclude(
      /*$$props*/
      ctx[5], ["use", "class", "variant", "padded"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      run_all(dispose);
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
      _$$props3$variant = _$$props3.variant,
      variant = _$$props3$variant === void 0 ? "raised" : _$$props3$variant;
  var _$$props4 = $$props,
      _$$props4$padded = _$$props4.padded,
      padded = _$$props4$padded === void 0 ? false : _$$props4$padded;
  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("padded" in $$new_props) $$invalidate(3, padded = $$new_props.padded);
    if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      variant: variant,
      padded: padded
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
    if ("padded" in $$props) $$invalidate(3, padded = $$new_props.padded);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, variant, padded, forwardEvents, $$props, $$scope, $$slots];
}

var Card =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Card, _SvelteComponentDev);

  function Card(options) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2,
      padded: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Card",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Card, [{
    key: "use",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "padded",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Card;
}(SvelteComponentDev);

classAdderBuilder({
  class: 'smui-card__content',
  component: Div,
  contexts: {}
});

var file$1 = "node_modules/@smui/card/PrimaryAction.svelte";

function create_fragment$1(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[9].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  var div_levels = [{
    class: "\n    mdc-card__primary-action\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*padded*/
    ctx[4] ? "smui-card__primary-action--padded" : "") + "\n  "
  }, {
    tabindex:
    /*tabindex*/
    ctx[5]
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "ripple", "color", "padded", "tabindex"])];
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
        class: true,
        tabindex: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[6].call(null, div)), action_destroyer(Ripple_action = Ripple.call(null, div, {
        ripple:
        /*ripple*/
        ctx[2],
        unbounded: false,
        color:
        /*color*/
        ctx[3]
      }))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      256) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[8], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[8], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, padded*/
      18 && {
        class: "\n    mdc-card__primary-action\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*padded*/
        ctx[4] ? "smui-card__primary-action--padded" : "") + "\n  "
      }, dirty &
      /*tabindex*/
      32 && {
        tabindex:
        /*tabindex*/
        ctx[5]
      }, dirty &
      /*exclude, $$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "ripple", "color", "padded", "tabindex"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
      if (Ripple_action && is_function(Ripple_action.update) && dirty &
      /*ripple, color*/
      12) Ripple_action.update.call(null, {
        ripple:
        /*ripple*/
        ctx[2],
        unbounded: false,
        color:
        /*color*/
        ctx[3]
      });
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
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$color = _$$props4.color,
      color = _$$props4$color === void 0 ? null : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$padded = _$$props5.padded,
      padded = _$$props5$padded === void 0 ? false : _$$props5$padded;
  var _$$props6 = $$props,
      _$$props6$tabindex = _$$props6.tabindex,
      tabindex = _$$props6$tabindex === void 0 ? "0" : _$$props6$tabindex;
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("padded" in $$new_props) $$invalidate(4, padded = $$new_props.padded);
    if ("tabindex" in $$new_props) $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      padded: padded,
      tabindex: tabindex
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("padded" in $$props) $$invalidate(4, padded = $$new_props.padded);
    if ("tabindex" in $$props) $$invalidate(5, tabindex = $$new_props.tabindex);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, padded, tabindex, forwardEvents, $$props, $$scope, $$slots];
}

var PrimaryAction =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(PrimaryAction, _SvelteComponentDev);

  function PrimaryAction(options) {
    var _this;

    _classCallCheck(this, PrimaryAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrimaryAction).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      padded: 4,
      tabindex: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PrimaryAction",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(PrimaryAction, [{
    key: "use",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "padded",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PrimaryAction;
}(SvelteComponentDev);

classAdderBuilder({
  class: 'mdc-card__media-content',
  component: Div,
  contexts: {}
});

var file$2 = "node_modules/@smui/card/Actions.svelte";

function create_fragment$2(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var div_levels = [{
    class: "\n    mdc-card__actions\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*fullBleed*/
    ctx[2] ? "mdc-card__actions--full-bleed" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[4], ["use", "class", "fullBleed"])];
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
      add_location(div, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[3].call(null, div))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot && default_slot.p && dirty &
      /*$$scope*/
      32) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[5], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[5], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, fullBleed*/
      6 && {
        class: "\n    mdc-card__actions\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*fullBleed*/
        ctx[2] ? "mdc-card__actions--full-bleed" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class", "fullBleed"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
      _$$props3$fullBleed = _$$props3.fullBleed,
      fullBleed = _$$props3$fullBleed === void 0 ? false : _$$props3$fullBleed;
  setContext("SMUI:button:context", "card:action");
  setContext("SMUI:icon-button:context", "card:action");
  var _$$props4 = $$props,
      _$$props4$$$slots = _$$props4.$$slots,
      $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
      $$scope = _$$props4.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("fullBleed" in $$new_props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      fullBleed: fullBleed
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("fullBleed" in $$props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, fullBleed, forwardEvents, $$props, $$scope, $$slots];
}

var Actions =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Actions, _SvelteComponentDev);

  function Actions(options) {
    var _this;

    _classCallCheck(this, Actions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Actions).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      fullBleed: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Actions",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Actions, [{
    key: "use",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "fullBleed",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Actions;
}(SvelteComponentDev);

classAdderBuilder({
  class: 'mdc-card__action-buttons',
  component: Div,
  contexts: {}
});

var ActionIcons = classAdderBuilder({
  class: 'mdc-card__action-icons',
  component: Div,
  contexts: {}
});

var css$1 = "@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}to{transform:scale(.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#4a148c;background-color:var(--mdc-theme-secondary,#4a148c)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(74,20,140,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container:after,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker:after{background-color:#4a148c;background-color:var(--mdc-theme-secondary,#4a148c)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#4a148c;fill:var(--mdc-theme-secondary,#4a148c);stroke:#4a148c;stroke:var(--mdc-theme-secondary,#4a148c)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#4a148c;background-color:var(--mdc-theme-secondary,#4a148c)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:hsla(0,0%,60.4%,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container:after,.mdc-slider--disabled .mdc-slider__track-marker:after{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a;stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container:after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker:after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker:first-child:after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(.571);stroke-width:3.5;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform .26667s ease-out,opacity .26667s ease-out,background-color .26667s ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0);border-radius:50% 50% 50% 0;z-index:1;transition:transform .1s ease-out}.mdc-slider__pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scaleX(1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize .26667s linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:.14s}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(.57143)}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}";
styleInject(css$1);

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
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete'
};
var strings = {
  ARIA_DISABLED: 'aria-disabled',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUENOW: 'aria-valuenow',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  STEP_DATA_ATTR: 'data-step',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  TRACK_SELECTOR: '.mdc-slider__track'
};
var numbers = {
  PAGE_FACTOR: 4
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
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = cssProperty in el.style;
    return isStandard ? standard : prefixed;
  }

  return eventType;
}

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
var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
var MOVE_EVENT_MAP = {
  mousedown: 'mousemove',
  pointerdown: 'pointermove',
  touchstart: 'touchmove'
};
var KEY_IDS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  END: 'End',
  HOME: 'Home',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp'
};

var MDCSliderFoundation =
/** @class */
function (_super) {
  __extends(MDCSliderFoundation, _super);

  function MDCSliderFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
    /**
     * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
     * because those could be valid tabindices set by the client code.
     */


    _this.savedTabIndex_ = NaN;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;

    _this.thumbContainerPointerHandler_ = function () {
      return _this.handlingThumbTargetEvt_ = true;
    };

    _this.interactionStartHandler_ = function (evt) {
      return _this.handleDown_(evt);
    };

    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCSliderFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        hasClass: function hasClass() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getAttribute: function getAttribute() {
          return null;
        },
        setAttribute: function setAttribute() {
          return undefined;
        },
        removeAttribute: function removeAttribute() {
          return undefined;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        getTabIndex: function getTabIndex() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() {
          return undefined;
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() {
          return undefined;
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler() {
          return undefined;
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        notifyInput: function notifyInput() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty() {
          return undefined;
        },
        setTrackStyleProperty: function setTrackStyleProperty() {
          return undefined;
        },
        setMarkerValue: function setMarkerValue() {
          return undefined;
        },
        appendTrackMarkers: function appendTrackMarkers() {
          return undefined;
        },
        removeTrackMarkers: function removeTrackMarkers() {
          return undefined;
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() {
          return undefined;
        },
        isRTL: function isRTL() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSliderFoundation.prototype.init = function () {
    var _this = this;

    this.isDiscrete_ = this.adapter_.hasClass(cssClasses.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses.HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout(); // At last step, provide a reasonable default value to discrete slider

    if (this.isDiscrete_ && this.getStep() === 0) {
      this.step_ = 1;
    }
  };

  MDCSliderFoundation.prototype.destroy = function () {
    var _this = this;

    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  MDCSliderFoundation.prototype.setupTrackMarker = function () {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
      var min = this.getMin();
      var max = this.getMax();
      var step = this.getStep();
      var numMarkers = (max - min) / step; // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value

      var indivisible = Math.ceil(numMarkers) !== numMarkers;

      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        var lastStepRatio = (max - numMarkers * step) / step + 1;
        this.adapter_.setLastTrackMarkersStyleProperty('flex-grow', String(lastStepRatio));
      }
    }
  };

  MDCSliderFoundation.prototype.layout = function () {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  };

  MDCSliderFoundation.prototype.getValue = function () {
    return this.value_;
  };

  MDCSliderFoundation.prototype.setValue = function (value) {
    this.setValue_(value, false);
  };

  MDCSliderFoundation.prototype.getMax = function () {
    return this.max_;
  };

  MDCSliderFoundation.prototype.setMax = function (max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }

    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getMin = function () {
    return this.min_;
  };

  MDCSliderFoundation.prototype.setMin = function (min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }

    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getStep = function () {
    return this.step_;
  };

  MDCSliderFoundation.prototype.setStep = function (step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }

    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }

    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.isDisabled = function () {
    return this.disabled_;
  };

  MDCSliderFoundation.prototype.setDisabled = function (disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(cssClasses.DISABLED, this.disabled_);

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(strings.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(strings.ARIA_DISABLED);

      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  };
  /**
   * Called when the user starts interacting with the slider
   */


  MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
    var _this = this;

    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    var moveHandler = function moveHandler(moveEvent) {
      _this.handleMove_(moveEvent);
    };

    var moveEventType = MOVE_EVENT_MAP[downEvent.type]; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)

    var upHandler = function upHandler() {
      _this.handleUp_();

      _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);

      UP_EVENTS.forEach(function (evtName) {
        return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
      });
    };

    this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
    UP_EVENTS.forEach(function (evtName) {
      return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler);
    });
    this.setValueFromEvt_(downEvent);
  };
  /**
   * Called when the user moves the slider
   */


  MDCSliderFoundation.prototype.handleMove_ = function (evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  };
  /**
   * Called when the user's interaction with the slider ends
   */


  MDCSliderFoundation.prototype.handleUp_ = function () {
    this.setActive_(false);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the pageX of the event
   */


  MDCSliderFoundation.prototype.getPageX_ = function (evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }

    return evt.pageX;
  };
  /**
   * Sets the slider value from an event
   */


  MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
    var pageX = this.getPageX_(evt);
    var value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  };
  /**
   * Computes the new value from the pageX position
   */


  MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
    var _a = this,
        max = _a.max_,
        min = _a.min_;

    var xPos = pageX - this.rect_.left;
    var pctComplete = xPos / this.rect_.width;

    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    } // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].


    return min + pctComplete * (max - min);
  };
  /**
   * Handles keydown events
   */


  MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
    var keyId = this.getKeyId_(evt);
    var value = this.getValueForKeyId_(keyId);

    if (isNaN(value)) {
      return;
    } // Prevent page from scrolling due to key presses that would normally scroll the page


    evt.preventDefault();
    this.adapter_.addClass(cssClasses.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the computed name of the event
   */


  MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }

    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }

    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  };
  /**
   * Computes the value given a keyboard key ID
   */


  MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
    var _a = this,
        max = _a.max_,
        min = _a.min_,
        step = _a.step_;

    var delta = step || (max - min) / 100;
    var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
      case KEY_IDS.ARROW_LEFT:
      case KEY_IDS.ARROW_DOWN:
        return this.value_ - delta;

      case KEY_IDS.ARROW_RIGHT:
      case KEY_IDS.ARROW_UP:
        return this.value_ + delta;

      case KEY_IDS.HOME:
        return this.min_;

      case KEY_IDS.END:
        return this.max_;

      case KEY_IDS.PAGE_UP:
        return this.value_ + delta * numbers.PAGE_FACTOR;

      case KEY_IDS.PAGE_DOWN:
        return this.value_ - delta * numbers.PAGE_FACTOR;

      default:
        return NaN;
    }
  };

  MDCSliderFoundation.prototype.handleFocus_ = function () {
    if (this.preventFocusState_) {
      return;
    }

    this.adapter_.addClass(cssClasses.FOCUS);
  };

  MDCSliderFoundation.prototype.handleBlur_ = function () {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses.FOCUS);
  };
  /**
   * Sets the value of the slider
   */


  MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
    if (force === void 0) {
      force = false;
    }

    if (value === this.value_ && !force) {
      return;
    }

    var _a = this,
        min = _a.min_,
        max = _a.max_;

    var valueSetToBoundary = value === min || value === max;

    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }

    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }

    this.value_ = value;
    this.adapter_.setAttribute(strings.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();

      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  };
  /**
   * Calculates the quantized value
   */


  MDCSliderFoundation.prototype.quantize_ = function (value) {
    var numSteps = Math.round(value / this.step_);
    return numSteps * this.step_;
  };

  MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
    var _this = this;

    var _a = this,
        max = _a.max_,
        min = _a.min_,
        value = _a.value_;

    var pctComplete = (value - min) / (max - min);
    var translatePx = pctComplete * this.rect_.width;

    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    var transformProp = getCorrectPropertyName(window, 'transform');
    var transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      var onTransitionEnd_1 = function onTransitionEnd_1() {
        _this.setInTransit_(false);

        _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
      };

      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
    }

    requestAnimationFrame(function () {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");

      _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
    });
  };
  /**
   * Toggles the active state of the slider
   */


  MDCSliderFoundation.prototype.setActive_ = function (active) {
    this.active_ = active;
    this.toggleClass_(cssClasses.ACTIVE, this.active_);
  };
  /**
   * Toggles the inTransit state of the slider
   */


  MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
  };
  /**
   * Conditionally adds or removes a class based on shouldBePresent
   */


  MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  };

  return MDCSliderFoundation;
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

var MDCSlider =
/** @class */
function (_super) {
  __extends(MDCSlider, _super);

  function MDCSlider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlider.attachTo = function (root) {
    return new MDCSlider(root);
  };

  Object.defineProperty(MDCSlider.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "min", {
    get: function get() {
      return this.foundation_.getMin();
    },
    set: function set(min) {
      this.foundation_.setMin(min);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "max", {
    get: function get() {
      return this.foundation_.getMax();
    },
    set: function set(max) {
      this.foundation_.setMax(max);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "step", {
    get: function get() {
      return this.foundation_.getStep();
    },
    set: function set(step) {
      this.foundation_.setStep(step);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSlider.prototype.initialize = function () {
    this.thumbContainer_ = this.root_.querySelector(strings.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(strings.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(strings.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(strings.TRACK_MARKER_CONTAINER_SELECTOR);
  };

  MDCSlider.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getAttribute: function getAttribute(name) {
        return _this.root_.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this.root_.setAttribute(name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this.root_.removeAttribute(name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.root_.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this.root_.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.removeEventListener(evtType, handler, applyPassive());
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(evtType, handler) {
        return document.body.addEventListener(evtType, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(evtType, handler) {
        return document.body.removeEventListener(evtType, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        return _this.emit(strings.INPUT_EVENT, _this);
      },
      notifyChange: function notifyChange() {
        return _this.emit(strings.CHANGE_EVENT, _this);
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        return _this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        return _this.pinValueMarker_.innerText = value.toLocaleString();
      },
      appendTrackMarkers: function appendTrackMarkers(numMarkers) {
        var frag = document.createDocumentFragment();

        for (var i = 0; i < numMarkers; i++) {
          var marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }

        _this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: function removeTrackMarkers() {
        while (_this.trackMarkerContainer_.firstChild) {
          _this.trackMarkerContainer_.removeChild(_this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        var lastTrackMarker = _this.root_.querySelector(strings.LAST_TRACK_MARKER_SELECTOR);

        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this.root_).direction === 'rtl';
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSliderFoundation(adapter);
  };

  MDCSlider.prototype.initialSyncWithDOM = function () {
    var origValueNow = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUENOW), this.value);
    var min = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMIN), this.min);
    var max = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMAX), this.max); // min and max need to be set in the right order to avoid throwing an error
    // when the new min is greater than the default max.

    if (min >= this.max) {
      this.max = max;
      this.min = min;
    } else {
      this.min = min;
      this.max = max;
    }

    this.step = this.parseFloat_(this.root_.getAttribute(strings.STEP_DATA_ATTR), this.step);
    this.value = origValueNow;
    this.disabled = this.root_.hasAttribute(strings.ARIA_DISABLED) && this.root_.getAttribute(strings.ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  };

  MDCSlider.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSlider.prototype.stepUp = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value += amount;
  };

  MDCSlider.prototype.stepDown = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value -= amount;
  };

  MDCSlider.prototype.parseFloat_ = function (str, defaultValue) {
    var num = parseFloat(str); // tslint:disable-line:ban

    var isNumeric = typeof num === 'number' && isFinite(num);
    return isNumeric ? num : defaultValue;
  };

  return MDCSlider;
}(MDCComponent);

var file$3 = "node_modules/@smui/slider/Slider.svelte"; // (24:4) {#if discrete && displayMarkers}

function create_if_block_1(ctx) {
  var div;
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
      attr_dev(div, "class", "mdc-slider__track-marker-container");
      add_location(div, file$3, 24, 6, 734);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(24:4) {#if discrete && displayMarkers}",
    ctx: ctx
  });
  return block;
} // (29:4) {#if discrete}


function create_if_block(ctx) {
  var div;
  var span;
  var block = {
    c: function create() {
      div = element("div");
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "mdc-slider__pin-value-marker");
      add_location(span, file$3, 30, 8, 915);
      attr_dev(div, "class", "mdc-slider__pin");
      add_location(div, file$3, 29, 6, 877);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(29:4) {#if discrete}",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var div4;
  var div1;
  var div0;
  var t0;
  var t1;
  var div3;
  var t2;
  var svg;
  var circle;
  var t3;
  var div2;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var if_block0 =
  /*discrete*/
  ctx[4] &&
  /*displayMarkers*/
  ctx[5] && create_if_block_1(ctx);
  var if_block1 =
  /*discrete*/
  ctx[4] && create_if_block(ctx);
  var div4_levels = [{
    class: "\n    mdc-slider\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*discrete*/
    ctx[4] ? "mdc-slider--discrete" : "") + "\n    " + (
    /*discrete*/
    ctx[4] &&
    /*displayMarkers*/
    ctx[5] ? "mdc-slider--display-markers" : "") + "\n  "
  }, {
    role: "slider"
  }, {
    "aria-disabled":
    /*disabled*/
    ctx[3] ? "true" : "false"
  }, {
    "aria-valuemin":
    /*min*/
    ctx[6]
  }, {
    "aria-valuemax":
    /*max*/
    ctx[7]
  }, {
    "aria-valuenow":
    /*value*/
    ctx[0]
  },
  /*step*/
  ctx[8] === 0 ? {} : {
    "data-step":
    /*step*/
    ctx[8]
  }, {
    tabindex:
    /*tabindex*/
    ctx[9]
  },
  /*inputProps*/
  ctx[12], exclude(
  /*$$props*/
  ctx[14], ["use", "class", "disabled", "discrete", "displayMarkers", "min", "max", "step", "value", "tabindex"])];
  var div4_data = {};

  for (var i = 0; i < div4_levels.length; i += 1) {
    div4_data = assign(div4_data, div4_levels[i]);
  }

  var block = {
    c: function create() {
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      div3 = element("div");
      if (if_block1) if_block1.c();
      t2 = space();
      svg = svg_element("svg");
      circle = svg_element("circle");
      t3 = space();
      div2 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-disabled": true,
        "aria-valuemin": true,
        "aria-valuemax": true,
        "aria-valuenow": true,
        tabindex: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div1_nodes);
      if (if_block0) if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      if (if_block1) if_block1.l(div3_nodes);
      t2 = claim_space(div3_nodes);
      svg = claim_element(div3_nodes, "svg", {
        class: true,
        width: true,
        height: true
      }, 1);
      var svg_nodes = children(svg);
      circle = claim_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true
      }, 1);
      children(circle).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-slider__track");
      add_location(div0, file$3, 22, 4, 653);
      attr_dev(div1, "class", "mdc-slider__track-container");
      add_location(div1, file$3, 21, 2, 607);
      attr_dev(circle, "cx", "10.5");
      attr_dev(circle, "cy", "10.5");
      attr_dev(circle, "r", "7.875");
      add_location(circle, file$3, 34, 6, 1054);
      attr_dev(svg, "class", "mdc-slider__thumb");
      attr_dev(svg, "width", "21");
      attr_dev(svg, "height", "21");
      add_location(svg, file$3, 33, 4, 993);
      attr_dev(div2, "class", "mdc-slider__focus-ring");
      add_location(div2, file$3, 36, 4, 1117);
      attr_dev(div3, "class", "mdc-slider__thumb-container");
      add_location(div3, file$3, 27, 2, 810);
      set_attributes(div4, div4_data);
      add_location(div4, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div1);
      append_dev(div1, div0);
      append_dev(div1, t0);
      if (if_block0) if_block0.m(div1, null);
      append_dev(div4, t1);
      append_dev(div4, div3);
      if (if_block1) if_block1.m(div3, null);
      append_dev(div3, t2);
      append_dev(div3, svg);
      append_dev(svg, circle);
      append_dev(div3, t3);
      append_dev(div3, div2);
      /*div4_binding*/

      ctx[23](div4);
      dispose = [action_destroyer(useActions_action = useActions.call(null, div4,
      /*use*/
      ctx[1])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[11].call(null, div4)), listen_dev(div4, "MDCSlider:input",
      /*handleChange*/
      ctx[13], false, false, false)];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*discrete*/
      ctx[4] &&
      /*displayMarkers*/
      ctx[5]) {
        if (!if_block0) {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*discrete*/
      ctx[4]) {
        if (!if_block1) {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div3, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      set_attributes(div4, get_spread_update(div4_levels, [dirty &
      /*className, discrete, displayMarkers*/
      52 && {
        class: "\n    mdc-slider\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*discrete*/
        ctx[4] ? "mdc-slider--discrete" : "") + "\n    " + (
        /*discrete*/
        ctx[4] &&
        /*displayMarkers*/
        ctx[5] ? "mdc-slider--display-markers" : "") + "\n  "
      }, {
        role: "slider"
      }, dirty &
      /*disabled*/
      8 && {
        "aria-disabled":
        /*disabled*/
        ctx[3] ? "true" : "false"
      }, dirty &
      /*min*/
      64 && {
        "aria-valuemin":
        /*min*/
        ctx[6]
      }, dirty &
      /*max*/
      128 && {
        "aria-valuemax":
        /*max*/
        ctx[7]
      }, dirty &
      /*value*/
      1 && {
        "aria-valuenow":
        /*value*/
        ctx[0]
      }, dirty &
      /*step*/
      256 && (
      /*step*/
      ctx[8] === 0 ? {} : {
        "data-step":
        /*step*/
        ctx[8]
      }), dirty &
      /*tabindex*/
      512 && {
        tabindex:
        /*tabindex*/
        ctx[9]
      }, dirty &
      /*inputProps*/
      4096 &&
      /*inputProps*/
      ctx[12], dirty &
      /*exclude, $$props*/
      16384 && exclude(
      /*$$props*/
      ctx[14], ["use", "class", "disabled", "discrete", "displayMarkers", "min", "max", "step", "value", "tabindex"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      /*div4_binding*/

      ctx[23](null);
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

function instance$3($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component, ["MDCSlider:input", "MDCSlider:change"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$disabled = _$$props3.disabled,
      disabled = _$$props3$disabled === void 0 ? false : _$$props3$disabled;
  var _$$props4 = $$props,
      _$$props4$discrete = _$$props4.discrete,
      discrete = _$$props4$discrete === void 0 ? false : _$$props4$discrete;
  var _$$props5 = $$props,
      _$$props5$displayMark = _$$props5.displayMarkers,
      displayMarkers = _$$props5$displayMark === void 0 ? false : _$$props5$displayMark;
  var _$$props6 = $$props,
      _$$props6$min = _$$props6.min,
      min = _$$props6$min === void 0 ? 0 : _$$props6$min;
  var _$$props7 = $$props,
      _$$props7$max = _$$props7.max,
      max = _$$props7$max === void 0 ? 100 : _$$props7$max;
  var _$$props8 = $$props,
      _$$props8$step = _$$props8.step,
      step = _$$props8$step === void 0 ? 0 : _$$props8$step;
  var _$$props9 = $$props,
      _$$props9$value = _$$props9.value,
      value = _$$props9$value === void 0 ? null : _$$props9$value;
  var _$$props10 = $$props,
      _$$props10$tabindex = _$$props10.tabindex,
      tabindex = _$$props10$tabindex === void 0 ? "0" : _$$props10$tabindex;
  var element;
  var slider;
  var formField = getContext("SMUI:form-field");
  var inputProps = getContext("SMUI:generic:input:props") || {};
  var addLayoutListener = getContext("SMUI:addLayoutListener");
  var removeLayoutListener;

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(function () {
    $$invalidate(19, slider = new MDCSlider(element));

    if (formField && formField()) {
      formField().input = slider;
    }
  });
  onDestroy(function () {
    slider && slider.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleChange() {
    $$invalidate(0, value = slider.value);
  }

  function layout() {
    var _slider;

    return (_slider = slider).layout.apply(_slider, arguments);
  }

  function stepUp() {
    var _slider2;

    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_slider2 = slider).stepUp.apply(_slider2, [amount].concat(args));
  }

  function stepDown() {
    var _slider3;

    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return (_slider3 = slider).stepDown.apply(_slider3, [amount].concat(args));
  }

  function getId() {
    return inputProps && inputProps.id;
  }

  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(10, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("disabled" in $$new_props) $$invalidate(3, disabled = $$new_props.disabled);
    if ("discrete" in $$new_props) $$invalidate(4, discrete = $$new_props.discrete);
    if ("displayMarkers" in $$new_props) $$invalidate(5, displayMarkers = $$new_props.displayMarkers);
    if ("min" in $$new_props) $$invalidate(6, min = $$new_props.min);
    if ("max" in $$new_props) $$invalidate(7, max = $$new_props.max);
    if ("step" in $$new_props) $$invalidate(8, step = $$new_props.step);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("tabindex" in $$new_props) $$invalidate(9, tabindex = $$new_props.tabindex);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      disabled: disabled,
      discrete: discrete,
      displayMarkers: displayMarkers,
      min: min,
      max: max,
      step: step,
      value: value,
      tabindex: tabindex,
      element: element,
      slider: slider,
      formField: formField,
      inputProps: inputProps,
      addLayoutListener: addLayoutListener,
      removeLayoutListener: removeLayoutListener
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("disabled" in $$props) $$invalidate(3, disabled = $$new_props.disabled);
    if ("discrete" in $$props) $$invalidate(4, discrete = $$new_props.discrete);
    if ("displayMarkers" in $$props) $$invalidate(5, displayMarkers = $$new_props.displayMarkers);
    if ("min" in $$props) $$invalidate(6, min = $$new_props.min);
    if ("max" in $$props) $$invalidate(7, max = $$new_props.max);
    if ("step" in $$props) $$invalidate(8, step = $$new_props.step);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("tabindex" in $$props) $$invalidate(9, tabindex = $$new_props.tabindex);
    if ("element" in $$props) $$invalidate(10, element = $$new_props.element);
    if ("slider" in $$props) $$invalidate(19, slider = $$new_props.slider);
    if ("formField" in $$props) formField = $$new_props.formField;
    if ("inputProps" in $$props) $$invalidate(12, inputProps = $$new_props.inputProps);
    if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
    if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*slider, disabled*/
    524296) {
       if (slider && slider.disabled !== disabled) {
        $$invalidate(19, slider.disabled = disabled, slider);
      }
    }

    if ($$self.$$.dirty &
    /*slider, min*/
    524352) {
       if (slider && slider.min !== min) {
        $$invalidate(19, slider.min = min, slider);
      }
    }

    if ($$self.$$.dirty &
    /*slider, max*/
    524416) {
       if (slider && slider.max !== max) {
        $$invalidate(19, slider.max = max, slider);
      }
    }

    if ($$self.$$.dirty &
    /*slider, step*/
    524544) {
       if (slider && slider.step !== step) {
        $$invalidate(19, slider.step = step, slider);
      }
    }

    if ($$self.$$.dirty &
    /*slider, value*/
    524289) {
       if (slider && slider.value !== value) {
        $$invalidate(19, slider.value = value, slider);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [value, use, className, disabled, discrete, displayMarkers, min, max, step, tabindex, element, forwardEvents, inputProps, handleChange, $$props, layout, stepUp, stepDown, getId, slider, removeLayoutListener, formField, addLayoutListener, div4_binding];
}

var Slider =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Slider, _SvelteComponentDev);

  function Slider(options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 1,
      class: 2,
      disabled: 3,
      discrete: 4,
      displayMarkers: 5,
      min: 6,
      max: 7,
      step: 8,
      value: 0,
      tabindex: 9,
      layout: 15,
      stepUp: 16,
      stepDown: 17,
      getId: 18
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Slider",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Slider, [{
    key: "use",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "discrete",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "displayMarkers",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "min",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "max",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "step",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx[15];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "stepUp",
    get: function get() {
      return this.$$.ctx[16];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "stepDown",
    get: function get() {
      return this.$$.ctx[17];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getId",
    get: function get() {
      return this.$$.ctx[18];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Slider;
}(SvelteComponentDev);

var file$4 = "src/routes/board/[id].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
} // (5:0) {#if $editMode}


function create_if_block_1$1(ctx) {
  var div;
  var updating_value;
  var current;

  function slider_value_binding(value) {
    /*slider_value_binding*/
    ctx[6].call(null, value);
  }

  var slider_props = {
    min: 0,
    max: 1,
    step: 0.1,
    style: "width: 100%;"
  };

  if (
  /*board*/
  ctx[0].size !== void 0) {
    slider_props.value =
    /*board*/
    ctx[0].size;
  }

  var slider = new Slider({
    props: slider_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider, "value", slider_value_binding);
  });
  slider.$on("MDCSlider:change",
  /*MDCSlider_change_handler*/
  ctx[7]);
  var block = {
    c: function create() {
      div = element("div");
      create_component(slider.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      claim_component(slider.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file$4, 5, 2, 92);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(slider, div, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var slider_changes = {};

      if (!updating_value && dirty &
      /*board*/
      1) {
        updating_value = true;
        slider_changes.value =
        /*board*/
        ctx[0].size;
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      slider.$set(slider_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(slider);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(5:0) {#if $editMode}",
    ctx: ctx
  });
  return block;
} // (21:6) <PrimaryAction         class="mdc-theme--secondary-bg mdc-theme--on-secondary"         on:click={() => alert('click')}         padded         style="height: 100%; display: flex; justify-content: center;         align-items: center; text-align: center;">


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary Action");
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(21:6) <PrimaryAction         class=\\\"mdc-theme--secondary-bg mdc-theme--on-secondary\\\"         on:click={() => alert('click')}         padded         style=\\\"height: 100%; display: flex; justify-content: center;         align-items: center; text-align: center;\\\">",
    ctx: ctx
  });
  return block;
} // (29:6) {#if $editMode}


function create_if_block$1(ctx) {
  var current;
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actions_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(29:6) {#if $editMode}",
    ctx: ctx
  });
  return block;
} // (33:14) <Icon>


function create_default_slot_6(ctx) {
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
        viewBox: true
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
      attr_dev(path, "d", mdiPencil);
      add_location(path, file$4, 34, 18, 926);
      set_style(svg, "width", "24px");
      set_style(svg, "height", "24px");
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$4, 33, 16, 851);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(33:14) <Icon>",
    ctx: ctx
  });
  return block;
} // (32:12) <IconButton title="Edit">


function create_default_slot_5(ctx) {
  var current;
  var icon = new Icon({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(32:12) <IconButton title=\\\"Edit\\\">",
    ctx: ctx
  });
  return block;
} // (40:14) <Icon>


function create_default_slot_4(ctx) {
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
        viewBox: true
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
      attr_dev(path, "d", mdiDelete);
      add_location(path, file$4, 41, 18, 1187);
      set_style(svg, "width", "24px");
      set_style(svg, "height", "24px");
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$4, 40, 16, 1112);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(40:14) <Icon>",
    ctx: ctx
  });
  return block;
} // (39:12) <IconButton title="Delete">


function create_default_slot_3(ctx) {
  var current;
  var icon = new Icon({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(39:12) <IconButton title=\\\"Delete\\\">",
    ctx: ctx
  });
  return block;
} // (31:10) <ActionIcons>


function create_default_slot_2(ctx) {
  var t;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      title: "Edit",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton1 = new IconButton({
    props: {
      title: "Delete",
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
      create_component(iconbutton0.$$.fragment);
      t = space();
      create_component(iconbutton1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(iconbutton1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(iconbutton1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(31:10) <ActionIcons>",
    ctx: ctx
  });
  return block;
} // (30:8) <Actions>


function create_default_slot_1(ctx) {
  var current;
  var actionicons = new ActionIcons({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(actionicons.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actionicons.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actionicons, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actionicons_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        actionicons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionicons.$set(actionicons_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actionicons.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actionicons.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actionicons, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(30:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (20:4) <Card style="width: {250 * board.size}px; height: {250 * board.size}px;">


function create_default_slot(ctx) {
  var t0;
  var t1;
  var current;
  var primaryaction = new PrimaryAction({
    props: {
      class: "mdc-theme--secondary-bg mdc-theme--on-secondary",
      padded: true,
      style: "height: 100%; display: flex; justify-content: center;\n        align-items: center; text-align: center;",
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  primaryaction.$on("click",
  /*click_handler*/
  ctx[8]);
  var if_block =
  /*$editMode*/
  ctx[2] && create_if_block$1(ctx);
  var block = {
    c: function create() {
      create_component(primaryaction.$$.fragment);
      t0 = space();
      if (if_block) if_block.c();
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(primaryaction.$$.fragment, nodes);
      t0 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primaryaction, target, anchor);
      insert_dev(target, t0, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primaryaction_changes = {};

      if (dirty &
      /*$$scope*/
      4096) {
        primaryaction_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primaryaction.$set(primaryaction_changes);

      if (
      /*$editMode*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
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
      transition_in(primaryaction.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(primaryaction.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primaryaction, detaching);
      if (detaching) detach_dev(t0);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(20:4) <Card style=\\\"width: {250 * board.size}px; height: {250 * board.size}px;\\\">",
    ctx: ctx
  });
  return block;
} // (19:2) {#each [...Array(10)] as sound}


function create_each_block(ctx) {
  var current;
  var card = new Card({
    props: {
      style: "width: " + 250 *
      /*board*/
      ctx[0].size + "px; height: " + 250 *
      /*board*/
      ctx[0].size + "px;",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(card.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(card.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(card, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var card_changes = {};
      if (dirty &
      /*board*/
      1) card_changes.style = "width: " + 250 *
      /*board*/
      ctx[0].size + "px; height: " + 250 *
      /*board*/
      ctx[0].size + "px;";

      if (dirty &
      /*$$scope, $editMode*/
      4100) {
        card_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card.$set(card_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(card.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(card.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(card, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(19:2) {#each [...Array(10)] as sound}",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var title_value;
  var t0;
  var t1;
  var board_1;
  var current;
  document.title = title_value = "" + (
  /*board*/
  ctx[0].name + " - Sound Rodeo");
  var if_block =
  /*$editMode*/
  ctx[2] && create_if_block_1$1(ctx);

  var each_value = _toConsumableArray(Array(10));

  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      if (if_block) if_block.c();
      t1 = space();
      board_1 = element("board");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-ygk9hv\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      t1 = claim_space(nodes);
      board_1 = claim_element(nodes, "BOARD", {
        class: true
      });
      var board_1_nodes = children(board_1);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(board_1_nodes);
      }

      board_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(board_1, "class", "svelte-p4tzlg");
      add_location(board_1, file$4, 16, 0, 285);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, board_1, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(board_1, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*board*/
      1) && title_value !== (title_value = "" + (
      /*board*/
      ctx[0].name + " - Sound Rodeo"))) {
        document.title = title_value;
      }

      if (
      /*$editMode*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block_1$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*board, mdiDelete, mdiPencil, $editMode, alert*/
      5) {
        each_value = _toConsumableArray(Array(10));

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(board_1, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(board_1);
      destroy_each(each_blocks, detaching);
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
  var $page;
  var $boards;
  var $editMode;
  validate_store(boards, "boards");
  component_subscribe($$self, boards, function ($$value) {
    return $$invalidate(1, $boards = $$value);
  });
  validate_store(editMode, "editMode");
  component_subscribe($$self, editMode, function ($$value) {
    return $$invalidate(2, $editMode = $$value);
  });

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(4, $page = value);
  });
  var id = $page.params.id;

  function slider_value_binding(value) {
    board.size = value;
    $$invalidate(0, board), $$invalidate(1, $boards);
  }

  var MDCSlider_change_handler = function MDCSlider_change_handler() {
    return boards.set($boards);
  };

  var click_handler = function click_handler() {
    return alert("click");
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("$page" in $$props) page.set($page = $$props.$page);
    if ("board" in $$props) $$invalidate(0, board = $$props.board);
    if ("$boards" in $$props) boards.set($boards = $$props.$boards);
    if ("$editMode" in $$props) editMode.set($editMode = $$props.$editMode);
  };

  var board;

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*$boards*/
    2) {
       $$invalidate(0, board = $boards.filter(function (b) {
        return b.id === id;
      })[0]);
    }
  };

  return [board, $boards, $editMode, page, $page, id, slider_value_binding, MDCSlider_change_handler, click_handler];
}

var U5Bidu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bidu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
