/* @ds-bundle: {"format":3,"namespace":"BrightBoardDesignSystem_8b998d","components":[{"name":"LEDPanel","sourcePath":"components/brand/LEDPanel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PixelHeading","sourcePath":"components/brand/PixelHeading.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"StatTile","sourcePath":"components/data-display/StatTile.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/LEDPanel.jsx":"add63b62cfe1","components/brand/Logo.jsx":"7d2e213ff429","components/brand/PixelHeading.jsx":"de4222f64cc2","components/data-display/Avatar.jsx":"03a536be6ecd","components/data-display/Badge.jsx":"e5fc8233757f","components/data-display/Card.jsx":"9a7f297c34c2","components/data-display/StatTile.jsx":"11d1b0457ec2","components/data-display/Tag.jsx":"c2a31243251f","components/feedback/Dialog.jsx":"9bd444344817","components/feedback/ProgressBar.jsx":"00d47d34dd77","components/feedback/Toast.jsx":"0888f3ca8925","components/feedback/Tooltip.jsx":"8251ef470848","components/forms/Button.jsx":"5e7469ea8866","components/forms/Checkbox.jsx":"2e582a71b0b1","components/forms/IconButton.jsx":"359a1bf6ad33","components/forms/Input.jsx":"6e8c38728b19","components/forms/Radio.jsx":"d222371cd489","components/forms/Select.jsx":"af6558a97a92","components/forms/Switch.jsx":"655a19498167","components/forms/Textarea.jsx":"713d7bb3b302","components/navigation/Tabs.jsx":"6c38667f9ce5","ui_kits/control-software/app.jsx":"54e131a6ead3","ui_kits/website/parts.jsx":"995a1c1c4561"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrightBoardDesignSystem_8b998d = window.BrightBoardDesignSystem_8b998d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LEDPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LEDPanel — the signature component. Renders text as a glowing dot-matrix
 * readout on a dark LED board, over the pixel-dot texture. Use for hero
 * numbers, scoreboards, live tickers, and brand moments.
 */
function LEDPanel({
  children,
  color = 'amber',
  size = 'md',
  label,
  scan = true,
  style = {},
  ...rest
}) {
  const colors = {
    amber: {
      fg: 'var(--led-amber)',
      glow: 'rgba(255,176,32,0.55)'
    },
    red: {
      fg: 'var(--led-red)',
      glow: 'rgba(255,45,45,0.5)'
    },
    green: {
      fg: 'var(--led-green)',
      glow: 'rgba(39,227,107,0.5)'
    },
    blue: {
      fg: 'var(--led-blue)',
      glow: 'rgba(46,155,255,0.5)'
    },
    white: {
      fg: '#F4F1EC',
      glow: 'rgba(255,255,255,0.4)'
    }
  };
  const c = colors[color] || colors.amber;
  const fs = {
    sm: 24,
    md: 44,
    lg: 72,
    xl: 110
  }[size] || 44;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
      padding: '18px 24px',
      background: 'var(--bb-ink-950)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--bb-ink-700)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03), var(--shadow-md)',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1.2px, transparent 1.4px)',
      backgroundSize: '9px 9px',
      overflow: 'hidden',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-mut)',
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-led)',
      fontSize: fs,
      lineHeight: 1,
      color: c.fg,
      letterSpacing: 'var(--ls-led)',
      textShadow: `0 0 ${fs * 0.28}px ${c.glow}`
    }
  }, children), scan && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 2px, transparent 3px)',
      mixBlendMode: 'multiply'
    }
  }));
}
Object.assign(__ds_scope, { LEDPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LEDPanel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the BrightBoard wordmark lockup.
 * "BRIGHT" takes the context colour, "BOARD" is always brand orange.
 * This is the type lockup; the pixel-perfect dot-matrix PNG lives in /assets.
 */
function Logo({
  variant = 'dark',
  size = 28,
  tagline = false,
  style = {},
  ...rest
}) {
  const brightColor = variant === 'light' ? 'var(--bb-white)' : 'var(--bb-ink-950)';
  const tagColor = variant === 'light' ? 'var(--bb-grey-400)' : 'var(--bb-grey-500)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.16,
      ...style
    },
    "aria-label": "BrightBoard"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: brightColor
    }
  }, "BRIGHT"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bb-orange-500)'
    }
  }, "BOARD")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: size * 0.28,
      letterSpacing: `${size * 0.03}px`,
      textTransform: 'uppercase',
      color: tagColor
    }
  }, "Brightens your brand"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PixelHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PixelHeading — an eyebrow-style heading rendered in the dot-matrix face,
 * for scoreboard/ticker titles. Not for body headings; use sparingly.
 */
function PixelHeading({
  as: Tag = 'div',
  color = 'ink',
  size = 32,
  glow = false,
  style = {},
  children,
  ...rest
}) {
  const colors = {
    ink: 'var(--bb-ink-950)',
    orange: 'var(--bb-orange-500)',
    amber: 'var(--led-amber)',
    white: 'var(--bb-white)'
  };
  const c = colors[color] || colors.ink;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-led)',
      fontSize: size,
      lineHeight: 1.1,
      color: c,
      letterSpacing: 'var(--ls-led)',
      margin: 0,
      textShadow: glow ? `0 0 ${size * 0.3}px ${c}` : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PixelHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PixelHeading.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — initials or image. Falls back to a warm-grey initials chip.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--bb-ink-800)',
      color: 'var(--bb-orange-400)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.38,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill. `live` variant animates like an LED indicator.
 */
function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  style = {},
  children,
  ...rest
}) {
  const variants = {
    neutral: {
      bg: 'var(--bb-grey-100)',
      fg: 'var(--bb-grey-700)',
      dc: 'var(--bb-grey-500)'
    },
    brand: {
      bg: 'var(--bb-orange-50)',
      fg: 'var(--bb-orange-700)',
      dc: 'var(--bb-orange-500)'
    },
    success: {
      bg: 'var(--bb-success-100)',
      fg: '#1B7A45',
      dc: 'var(--bb-success-500)'
    },
    warning: {
      bg: 'var(--bb-warning-100)',
      fg: '#8A6800',
      dc: 'var(--bb-warning-500)'
    },
    danger: {
      bg: 'var(--bb-danger-100)',
      fg: 'var(--bb-danger-600)',
      dc: 'var(--bb-danger-500)'
    },
    live: {
      bg: 'var(--bb-success-100)',
      fg: '#1B7A45',
      dc: 'var(--bb-success-500)'
    },
    solid: {
      bg: 'var(--bb-ink-950)',
      fg: '#fff',
      dc: 'var(--bb-orange-500)'
    }
  };
  const v = variants[variant] || variants.neutral;
  const pad = size === 'sm' ? '2px 8px' : '4px 10px';
  const fs = size === 'sm' ? 'var(--fs-3xs)' : 'var(--fs-2xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      background: v.bg,
      color: v.fg,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), (dot || variant === 'live') && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: v.dc,
      color: v.dc,
      animation: variant === 'live' ? 'bb-pulse-dot 1.4s var(--ease-in-out) infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the primary container. Light surface, warm shadow, hard-ish corners.
 * `tone="dark"` flips to the stadium/ink surface.
 */
function Card({
  tone = 'light',
  interactive = false,
  padding = 'md',
  style = {},
  children,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 32
  }[padding];
  const tones = {
    light: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-sm)'
    },
    dark: {
      background: 'var(--surface-dark-card)',
      border: '1px solid var(--border-dark)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-md)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = tone === 'dark' ? 'var(--shadow-lg)' : 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = t.boxShadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatTile — big number readout for dashboards. `led` renders the value in
 * the dot-matrix display face (the brand's signature scoreboard look).
 */
function StatTile({
  label,
  value,
  unit,
  delta,
  led = false,
  tone = 'light',
  style = {},
  ...rest
}) {
  const dark = tone === 'dark';
  const deltaUp = delta && !String(delta).trim().startsWith('-');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 20,
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
      border: `1px solid ${dark ? 'var(--border-dark)' : 'var(--border)'}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-mut)' : 'var(--text-muted)',
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: led ? {
      fontFamily: 'var(--font-led)',
      fontSize: 'var(--fs-4xl)',
      color: 'var(--bb-orange-400)',
      textShadow: '0 0 14px rgba(242,138,0,0.55)',
      lineHeight: 1
    } : {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-4xl)',
      color: dark ? '#fff' : 'var(--text-strong)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-lg)',
      fontWeight: 700,
      color: dark ? 'var(--text-on-dark-mut)' : 'var(--text-muted)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      color: deltaUp ? 'var(--bb-success-500)' : 'var(--bb-danger-500)'
    }
  }, deltaUp ? '▲' : '▼', " ", delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — filter/category chip, optionally removable.
 */
function Tag({
  selected = false,
  onRemove,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px',
      background: selected ? 'var(--bb-ink-950)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1.5px solid ${selected ? 'var(--bb-ink-950)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      fontSize: 14,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — centered modal with scrim. Controlled via `open`.
 */
function Dialog({
  open,
  onClose,
  title,
  footer,
  width = 480,
  style = {},
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      background: 'rgba(13,11,10,0.6)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'bb-toast-in var(--dur-base) var(--ease-out)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-xl)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'var(--surface-sunken)',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '16px 24px',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface-sunken)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — determinate bar with the LED glow on the fill.
 */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'light',
  showLabel = false,
  height = 8,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'var(--bb-ink-800)' : 'var(--bb-grey-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'linear-gradient(90deg, var(--bb-orange-500), var(--bb-orange-400))',
      boxShadow: '0 0 10px rgba(242,138,0,0.6)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: dark ? 'var(--text-on-dark-mut)' : 'var(--text-muted)'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — transient notification. Left LED bar keyed to status.
 */
function Toast({
  variant = 'neutral',
  title,
  children,
  onClose,
  style = {},
  ...rest
}) {
  const bar = {
    neutral: 'var(--bb-grey-500)',
    brand: 'var(--bb-orange-500)',
    success: 'var(--bb-success-500)',
    warning: 'var(--bb-warning-500)',
    danger: 'var(--bb-danger-500)'
  }[variant] || 'var(--bb-grey-500)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: '14px 16px 14px 14px',
      background: 'var(--bb-ink-900)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden',
      animation: 'bb-toast-in var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: bar,
      boxShadow: `0 0 10px ${bar}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: '#fff',
      fontSize: 'var(--fs-md)',
      marginBottom: 2
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-dark-mut)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-on-dark-mut)',
      cursor: 'pointer',
      fontSize: 16,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover label on a dark ink chip.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 'var(--z-overlay)',
      ...pos,
      background: 'var(--bb-ink-950)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BrightBoard Button — the primary call to action.
 * Orange is the hero; text on orange is INK (not white) per brand.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  as: Tag = 'button',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--fs-sm)',
      gap: '6px',
      height: 34
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--fs-md)',
      gap: '8px',
      height: 44
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--fs-lg)',
      gap: '10px',
      height: 54
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--bb-ink-950)',
      color: 'var(--bb-white)',
      border: '1px solid var(--bb-ink-950)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--bb-danger-500)',
      color: 'var(--bb-white)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "data-variant": variant,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.height,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'bb-spin 0.7s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — brand-orange check with warm-grey resting state.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const rid = id || `bb-cb-${Math.random().toString(36).slice(2, 8)}`;
  const isOn = checked ?? defaultChecked;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--fs-md)',
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "data-box": true,
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      flexShrink: 0,
      border: `2px solid ${isOn ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: isOn ? 'var(--brand)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      opacity: isOn ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2L4.6 9L10 3",
    stroke: "var(--bb-ink-950)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only action. Same variants as Button.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  style = {},
  children,
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 44,
    lg: 54
  }[size] || 44;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--bb-ink-950)',
      color: '#fff',
      border: '1px solid var(--bb-ink-950)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, hint, error, and adornments.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  iconLeft = null,
  iconRight = null,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const rid = id || `bb-in-${Math.random().toString(36).slice(2, 8)}`;
  const pad = {
    sm: '8px 12px',
    md: '11px 14px',
    lg: '14px 16px'
  }[size];
  const fs = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-md)',
    lg: 'var(--fs-lg)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--text-faint)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    style: {
      width: '100%',
      padding: pad,
      paddingLeft: iconLeft ? 40 : undefined,
      paddingRight: iconRight ? 40 : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--bb-danger-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--bb-danger-500)' : 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      display: 'flex',
      color: 'var(--text-faint)'
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--bb-danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — single-select control. Compose several with a shared `name`.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled,
  name,
  id,
  style = {},
  ...rest
}) {
  const rid = id || `bb-rb-${Math.random().toString(36).slice(2, 8)}`;
  const isOn = checked ?? defaultChecked;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--fs-md)',
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flexShrink: 0,
      border: `2px solid ${isOn ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand)',
      transform: isOn ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown styled to match Input.
 */
function Select({
  label,
  hint,
  id,
  size = 'md',
  options = [],
  style = {},
  containerStyle = {},
  children,
  ...rest
}) {
  const rid = id || `bb-sel-${Math.random().toString(36).slice(2, 8)}`;
  const pad = {
    sm: '8px 12px',
    md: '11px 14px',
    lg: '14px 16px'
  }[size];
  const fs = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-md)',
    lg: 'var(--fs-lg)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    style: {
      width: '100%',
      padding: pad,
      paddingRight: 38,
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label)), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. On = brand orange with an LED-style glow.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const rid = id || `bb-sw-${Math.random().toString(36).slice(2, 8)}`;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--fs-md)',
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      position: 'relative',
      background: on ? 'var(--brand)' : 'var(--bb-grey-300)',
      boxShadow: on ? '0 0 12px rgba(242,138,0,0.5)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text input matching Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const rid = id || `bb-ta-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: rid,
    rows: rows,
    style: {
      width: '100%',
      padding: '11px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--bb-danger-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      lineHeight: 'var(--lh-normal)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--bb-danger-500)' : 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--bb-danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline-style tab bar with an orange active indicator.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'light',
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value !== undefined ? value : internal;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: `1.5px solid ${dark ? 'var(--border-dark)' : 'var(--border)'}`,
      ...style
    }
  }, rest), tabs.map(t => {
    const val = t.value ?? t;
    const label = t.label ?? t;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value === undefined) setInternal(val);
        onChange && onChange(val);
      },
      style: {
        position: 'relative',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '12px 16px',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-md)',
        letterSpacing: 'var(--ls-tight)',
        color: on ? dark ? '#fff' : 'var(--text-strong)' : dark ? 'var(--text-on-dark-mut)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1.5,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: 'var(--brand)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/control-software/app.jsx
try { (() => {
/* BrightBoard Control — LED content management app (dark control-room UI).
   Composes design-system components + Lucide icons. */

const BBC = window.BrightBoardDesignSystem_8b998d;
const {
  Button,
  IconButton,
  Badge,
  StatTile,
  Switch,
  Input,
  Tabs,
  ProgressBar,
  LEDPanel,
  Logo,
  Tooltip
} = BBC;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        },
        nameAttr: 'data-lucide'
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
function ScreenPreview({
  label,
  color = 'amber',
  h = 120,
  style = {}
}) {
  const glow = {
    amber: 'rgba(242,138,0,0.4)',
    blue: 'rgba(46,155,255,0.35)',
    green: 'rgba(39,227,107,0.35)',
    off: 'transparent'
  }[color];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: color === 'off' ? '#0A0908' : 'var(--bb-ink-950)',
      border: '1px solid var(--bb-ink-700)',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1.1px, transparent 1.3px)',
      backgroundSize: '8px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(120% 100% at 50% 40%, ${glow}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      color: color === 'off' ? 'var(--bb-ink-700)' : 'var(--bb-grey-500)',
      textTransform: 'uppercase',
      zIndex: 1
    }
  }, label));
}
const NAV = [{
  icon: 'layout-dashboard',
  label: 'Dashboard'
}, {
  icon: 'monitor',
  label: 'Screens'
}, {
  icon: 'image',
  label: 'Content'
}, {
  icon: 'list-video',
  label: 'Playlists'
}, {
  icon: 'calendar',
  label: 'Schedule'
}, {
  icon: 'trophy',
  label: 'Events'
}];
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: 'var(--bb-ink-950)',
      borderRight: '1px solid var(--bb-ink-800)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "light",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, NAV.map(n => {
    const on = active === n.label;
    return /*#__PURE__*/React.createElement("button", {
      key: n.label,
      onClick: () => setActive(n.label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: 600,
        background: on ? 'var(--bb-orange-500)' : 'transparent',
        color: on ? 'var(--bb-ink-950)' : 'var(--bb-grey-300)',
        transition: 'background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18,
      color: on ? 'var(--bb-ink-950)' : 'var(--bb-grey-400)'
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bb-ink-900)',
      border: '1px solid var(--bb-ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "headset",
    size: 16,
    color: "var(--bb-orange-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: '#fff'
    }
  }, "24/7 Support")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--bb-grey-400)',
      margin: 0,
      lineHeight: 1.5
    }
  }, "On-site during your event. Call +32 2 486 06 20.")));
}
function Topbar({
  onPush
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      flexShrink: 0,
      borderBottom: '1px solid var(--bb-ink-800)',
      background: 'var(--bb-ink-900)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      lineHeight: 1
    }
  }, "Jumping Goch \u2014 LED Perimeter"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--bb-grey-400)',
      marginTop: 3
    }
  }, "140 m boarding \xB7 70 cabinets \xB7 P6.25")), /*#__PURE__*/React.createElement(Badge, {
    variant: "live",
    style: {
      marginLeft: 4
    }
  }, "Event live"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search screens, content\u2026",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    style: {
      background: 'var(--bb-ink-950)',
      borderColor: 'var(--bb-ink-700)',
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onPush,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 16
    })
  }, "Push content"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--bb-ink-800)',
      color: 'var(--bb-orange-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontFamily: 'var(--font-display)',
      fontSize: 14
    }
  }, "BW")));
}
const SCREENS_INIT = [{
  id: 1,
  name: 'Main Perimeter — North',
  loc: 'Arena · ring A',
  pitch: 'P6.25',
  status: 'live',
  color: 'amber'
}, {
  id: 2,
  name: 'Main Perimeter — South',
  loc: 'Arena · ring A',
  pitch: 'P6.25',
  status: 'live',
  color: 'amber'
}, {
  id: 3,
  name: 'Warm-up Ring',
  loc: 'Outdoor · ring B',
  pitch: 'P10',
  status: 'standby',
  color: 'blue'
}, {
  id: 4,
  name: 'Entrance Totem',
  loc: 'Main gate',
  pitch: 'P4',
  status: 'live',
  color: 'green'
}, {
  id: 5,
  name: 'VIP Lounge Screen',
  loc: 'Hospitality',
  pitch: 'P2.5',
  status: 'standby',
  color: 'blue'
}, {
  id: 6,
  name: 'Podium Backdrop',
  loc: 'Prize ceremony',
  pitch: 'P3.9',
  status: 'offline',
  color: 'off'
}];
const STATUS_BADGE = {
  live: /*#__PURE__*/React.createElement(Badge, {
    variant: "live"
  }, "Live"),
  standby: /*#__PURE__*/React.createElement(Badge, {
    variant: "warning",
    dot: true
  }, "Standby"),
  offline: /*#__PURE__*/React.createElement(Badge, {
    variant: "danger",
    dot: true
  }, "Offline")
};
function ScreenCard({
  s,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bb-ink-900)',
      border: '1px solid var(--bb-ink-800)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(ScreenPreview, {
    label: s.status === 'offline' ? 'NO SIGNAL' : s.name.toUpperCase(),
    color: s.color,
    h: 110
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: '#fff'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--bb-grey-400)',
      marginTop: 2
    }
  }, s.loc, " \xB7 ", s.pitch)), STATUS_BADGE[s.status]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14,
      paddingTop: 14,
      borderTop: '1px solid var(--bb-ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bb-grey-300)',
        fontSize: 13
      }
    }, "Live"),
    checked: s.status === 'live',
    onChange: () => onToggle(s.id),
    disabled: s.status === 'offline'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Preview"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Preview",
    variant: "ghost",
    size: "sm",
    style: {
      color: 'var(--bb-grey-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 16,
    color: "var(--bb-grey-400)"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Settings"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings",
    variant: "ghost",
    size: "sm",
    style: {
      color: 'var(--bb-grey-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 16,
    color: "var(--bb-grey-400)"
  })))))));
}
const PLAYLIST = [{
  name: 'Longines — Sponsor loop',
  dur: '0:15',
  now: true
}, {
  name: 'Rider intro — H. Hetzel',
  dur: '0:08'
}, {
  name: 'Live timing overlay',
  dur: 'live'
}, {
  name: 'Crowd animation — Wave',
  dur: '0:06'
}, {
  name: 'BrightBoard bumper',
  dur: '0:04'
}];
function SchedulePanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bb-ink-900)',
      border: '1px solid var(--bb-ink-800)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      color: '#fff'
    }
  }, "Active playlist"), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "Ring A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, PLAYLIST.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      background: p.now ? 'var(--bb-ink-850)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.now ? 'play' : 'grip-vertical',
    size: 15,
    color: p.now ? 'var(--bb-orange-400)' : 'var(--bb-grey-600)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      color: p.now ? '#fff' : 'var(--bb-grey-300)',
      fontWeight: p.now ? 600 : 400
    }
  }, p.name), p.dur === 'live' ? /*#__PURE__*/React.createElement(Badge, {
    variant: "live",
    size: "sm"
  }, "Live") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--bb-grey-500)'
    }
  }, p.dur)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--bb-grey-400)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Loop progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "00:23 / 00:52")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 44,
    tone: "dark"
  })));
}
function Dashboard({
  screens,
  onToggle
}) {
  const online = screens.filter(s => s.status !== 'offline').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Screens online",
    value: `${online}/${screens.length}`,
    tone: "dark",
    delta: "+1"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Total boarding",
    value: "140",
    unit: "m",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Brightness",
    value: "7500",
    unit: "nits",
    led: true,
    tone: "dark"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Refresh rate",
    value: "7680",
    unit: "Hz",
    led: true,
    tone: "dark"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      margin: 0,
      fontSize: 20
    }
  }, "Your screens"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      color: 'var(--bb-grey-200)',
      borderColor: 'var(--bb-ink-700)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16,
      color: "var(--bb-grey-200)"
    })
  }, "Add screen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, screens.map(s => /*#__PURE__*/React.createElement(ScreenCard, {
    key: s.id,
    s: s,
    onToggle: onToggle
  })))), /*#__PURE__*/React.createElement(SchedulePanel, null)));
}
function ContentLibrary() {
  const items = [{
    n: 'Longines Sponsor loop',
    t: 'Video · 0:15',
    c: 'amber'
  }, {
    n: 'Rider intro template',
    t: 'Template',
    c: 'blue'
  }, {
    n: 'Live timing overlay',
    t: 'Widget',
    c: 'green'
  }, {
    n: 'Crowd wave animation',
    t: 'Animation · 0:06',
    c: 'amber'
  }, {
    n: 'Podium ceremony',
    t: 'Video · 1:20',
    c: 'blue'
  }, {
    n: 'BrightBoard bumper',
    t: 'Video · 0:04',
    c: 'green'
  }, {
    n: 'Sponsor — Skoda',
    t: 'Image',
    c: 'amber'
  }, {
    n: 'Countdown clock',
    t: 'Widget',
    c: 'green'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      margin: 0,
      fontSize: 20
    }
  }, "Content library"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 16
    })
  }, "Upload media")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      background: 'var(--bb-ink-900)',
      border: '1px solid var(--bb-ink-800)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ScreenPreview, {
    label: it.n.toUpperCase(),
    color: it.c,
    h: 104,
    style: {
      borderRadius: 0,
      border: 'none',
      borderBottom: '1px solid var(--bb-ink-800)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#fff'
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--bb-grey-400)',
      marginTop: 3,
      fontFamily: 'var(--font-mono)'
    }
  }, it.t))))));
}
Object.assign(window, {
  Icon,
  ScreenPreview,
  Sidebar,
  Topbar,
  Dashboard,
  ContentLibrary,
  SCREENS_INIT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/control-software/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* BrightBoard marketing website — UI kit sections.
   Uses design-system components from window.BrightBoardDesignSystem_8b998d
   and Lucide icons (window.lucide.createIcons() called after mount). */

const BB = window.BrightBoardDesignSystem_8b998d;
const {
  Button,
  Badge,
  Card,
  Tabs,
  LEDPanel,
  Logo
} = BB;

/* Lucide icon helper — renders <i data-lucide> re-scanned on each mount/update */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        },
        nameAttr: 'data-lucide'
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}

/* On-brand placeholder that reads as an LED screen showing content */
function LedScreen({
  label = 'LED CONTENT',
  color = 'amber',
  height = 260,
  aspect,
  style = {}
}) {
  const glow = {
    amber: 'rgba(242,138,0,0.35)',
    blue: 'rgba(46,155,255,0.3)',
    green: 'rgba(39,227,107,0.3)'
  }[color];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      aspectRatio: aspect,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--bb-ink-950)',
      border: '1px solid var(--bb-ink-700)',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.3px, transparent 1.5px)',
      backgroundSize: '10px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(120% 90% at 50% 20%, ${glow}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      color: 'var(--bb-grey-500)',
      textTransform: 'uppercase',
      zIndex: 1
    }
  }, label));
}
const NAV = ['Sport', 'Retail', 'Events', 'Industry', 'Realizations'];
function Header({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(13,11,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--bb-ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "light",
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      color: 'var(--bb-grey-300)',
      fontSize: 14,
      fontWeight: 600,
      fontFamily: 'var(--font-body)'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--bb-grey-300)'
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--bb-grey-300)',
      fontSize: 14,
      fontWeight: 600,
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 16,
    color: "var(--bb-grey-400)"
  }), " EN"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onQuote,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Request a quote"))));
}
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--bb-ink-950)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-dotgrid",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 520,
      height: 520,
      background: 'radial-gradient(circle, rgba(242,138,0,0.28), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '84px 24px 92px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bb-eyebrow",
    style: {
      marginBottom: 20
    }
  }, "17+ YEARS OF LED \xB7 SINCE 2008"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 68,
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      margin: '0 0 20px'
    }
  }, "We brighten", /*#__PURE__*/React.createElement("br", null), "your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bb-orange-500)'
    }
  }, "brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--bb-grey-300)',
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 480,
      margin: '0 0 32px'
    }
  }, "Razor-sharp LED boarding, scoreboards and screens for sports clubs, events and retail \u2014 sold, rented and operated worldwide, with software and support included."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'var(--bb-ink-700)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Watch showreel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 44
    }
  }, [['1000+', 'Events per year'], ['#1', 'Jumping LED worldwide'], ['24/7', 'On-site support']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 30,
      color: '#fff',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--bb-grey-400)',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LedScreen, {
    label: "STADIUM PERIMETER \xB7 LIVE",
    height: 230
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LEDPanel, {
    label: "Boarding installed",
    color: "amber",
    size: "md",
    style: {
      flex: 1
    }
  }, "254 m"), /*#__PURE__*/React.createElement(LEDPanel, {
    label: "Brightness",
    color: "green",
    size: "md",
    style: {
      flex: 1
    }
  }, "7500")))));
}
const PRODUCTS = [{
  icon: 'panel-top',
  title: 'LED Boarding',
  desc: 'Dynamic sponsor visuals along the field. UEFA-grade perimeter systems, indoor & outdoor.'
}, {
  icon: 'trophy',
  title: 'Scoreboards',
  desc: 'More than the score — goalie replays, live video and sponsor animations.'
}, {
  icon: 'square-stack',
  title: 'LED Canopy',
  desc: 'Overhead sponsor space, club info and animations, synced in real time.'
}, {
  icon: 'monitor',
  title: 'Outdoor Screens',
  desc: 'Weatherproof facade screens & totems with high IP rating and brightness sensor.'
}, {
  icon: 'truck',
  title: 'Mobile & Trailers',
  desc: '360° rotating screens on wheels — reach any audience, any location.'
}, {
  icon: 'sparkles',
  title: 'BrightBoard 360°',
  desc: 'Light shows, pyro and boarding visuals for an unforgettable fan experience.'
}];
function Products() {
  const [tab, setTab] = React.useState('Sport');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '88px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bb-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "TOTAL LED SOLUTIONS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: 0
    }
  }, "One partner, every screen")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 360,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "From design and production to installation, content and 24/7 service \u2014 all in-house.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '28px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Sport', 'Retail', 'Events', 'Industry'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    interactive: true,
    padding: "none"
  }, /*#__PURE__*/React.createElement(LedScreen, {
    label: p.title.toUpperCase(),
    height: 150,
    style: {
      borderRadius: 0,
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bb-orange-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22,
    color: "var(--bb-orange-600)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontSize: 20
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, p.desc), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--brand-hover)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Discover ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15,
    color: "var(--brand-hover)"
  }))))))));
}
function Clients() {
  const clubs = ['KAA GENT', 'R. ANTWERP FC', 'KV MECHELEN', 'UNION SG', 'WESTERLO', 'STVV', 'RWDM', 'FC DENDER'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bb-ink-950)',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bb-grey-500)',
      marginBottom: 30
    }
  }, "These clubs are already shining with BrightBoard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, clubs.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      height: 60,
      border: '1px solid var(--bb-ink-800)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--bb-grey-400)',
      letterSpacing: '0.02em'
    }
  }, c)))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '88px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    color: "var(--bb-orange-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '18px 0 26px'
    }
  }, "\u201CAs a loyal partner of the KBVB since 2008, BrightBoard has provided high-quality LED solutions that meet strict UEFA standards.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--bb-ink-800)',
      color: 'var(--bb-orange-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontFamily: 'var(--font-display)'
    }
  }, "KB"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "KBVB \xB7 Royal Belgian FA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Partner since 2008")))));
}
function CtaBand({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--bb-orange-500)',
      padding: '64px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-dotgrid--ink",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--bb-ink-950)',
      fontSize: 40,
      margin: '0 0 10px'
    }
  }, "Ready to shine?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(20,17,14,0.75)',
      fontSize: 18,
      margin: 0,
      maxWidth: 460
    }
  }, "Tell us about your venue or event. We'll design the perfect LED solution \u2014 rent or buy.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onQuote,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Request a quote"))));
}
function Footer() {
  const cols = {
    Solutions: ['LED Boarding', 'Scoreboards', 'LED Canopy', 'Outdoor Screens', 'Mobile LED'],
    Sectors: ['Sport', 'Retail', 'Events', 'Industry'],
    Company: ['Realizations', 'About', 'Careers', 'Contact']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bb-ink-950)',
      color: 'var(--bb-grey-400)',
      padding: '56px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "light",
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      marginTop: 16,
      maxWidth: 260,
      lineHeight: 1.6
    }
  }, "Innovators in LED technology and digital communication for sports, events and retail."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, ['linkedin', 'instagram', 'facebook', 'youtube'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--bb-ink-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 16,
    color: "var(--bb-grey-400)"
  }))))), Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bb-grey-500)',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'var(--bb-grey-300)',
      fontSize: 14
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '36px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--bb-ink-800)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12.5,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 BrightBoard BV \xB7 Zone 5 Mollem 318, 1730 Asse, Belgium"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13,
    color: "var(--bb-grey-500)"
  }), " +32 (0)2 486 06 20 \xB7 info@brightboard.eu")));
}
Object.assign(window, {
  Icon,
  LedScreen,
  Header,
  Hero,
  Products,
  Clients,
  Testimonial,
  CtaBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LEDPanel = __ds_scope.LEDPanel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PixelHeading = __ds_scope.PixelHeading;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
