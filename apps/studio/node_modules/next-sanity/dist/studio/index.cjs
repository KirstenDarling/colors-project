'use strict';

var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
Object.defineProperty(exports, '__esModule', {
  value: true
});
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var sanity = require('sanity');
var styled = require('styled-components');
var studio_loading = require('../_chunks/loading-225bb240.cjs');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var styled__default = /*#__PURE__*/_interopDefaultCompat(styled);
function NextStudioClientOnly(_ref) {
  let {
    children,
    fallback
  } = _ref;
  const [mounted, setMounted] = react.useState(false);
  react.useEffect(() => react.startTransition(() => setMounted(true)), []);
  return /* @__PURE__ */jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: mounted ? children : fallback
  });
}
const Layout = styled__default.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  background-color: ", ";\n  height: 100vh;\n  max-height: 100dvh;\n  overscroll-behavior: none;\n  -webkit-font-smoothing: antialiased;\n  overflow: auto;\n"])), _ref2 => {
  let {
    $fontFamily
  } = _ref2;
  return $fontFamily;
}, _ref3 => {
  let {
    $bg
  } = _ref3;
  return $bg;
});
const NextStudioLayoutComponent = _ref4 => {
  let {
    children,
    config,
    scheme = "light"
  } = _ref4;
  const theme = studio_loading.useTheme(config);
  return /* @__PURE__ */jsxRuntime.jsx(Layout, {
    "data-ui": "NextStudioLayout",
    $fontFamily: theme.fonts.text.family,
    $bg: theme.color[scheme === "dark" ? "dark" : "light"].default.base.bg,
    children
  });
};
const NextStudioLayout = react.memo(NextStudioLayoutComponent);
const NextStudioComponent = _ref5 => {
  let {
    children,
    config,
    unstable__noScript = true,
    unstable__fastRender,
    scheme,
    ...props
  } = _ref5;
  if (unstable__fastRender) {
    return /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [unstable__noScript && /* @__PURE__ */jsxRuntime.jsx(studio_loading.NextStudioNoScript, {}), /* @__PURE__ */jsxRuntime.jsx(NextStudioLayout, {
        config,
        scheme,
        children: children || /* @__PURE__ */jsxRuntime.jsx(sanity.Studio, {
          config,
          scheme,
          unstable_globalStyles: true,
          ...props
        })
      })]
    });
  }
  return /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [unstable__noScript && /* @__PURE__ */jsxRuntime.jsx(studio_loading.NextStudioNoScript, {}), /* @__PURE__ */jsxRuntime.jsx(NextStudioClientOnly, {
      fallback: /* @__PURE__ */jsxRuntime.jsx(studio_loading.NextStudioLoading, {
        unstable__noScript,
        config,
        scheme
      }),
      children: /* @__PURE__ */jsxRuntime.jsx(NextStudioLayout, {
        config,
        scheme,
        children: children || /* @__PURE__ */jsxRuntime.jsx(sanity.Studio, {
          config,
          scheme,
          unstable_globalStyles: true,
          ...props
        })
      })
    })]
  });
};
const NextStudio = react.memo(NextStudioComponent);
function createStore() {
  if (typeof document === "undefined") {
    return {
      subscribe: () => () => {},
      getSnapshot: () => "light",
      getServerSnapshot: () => "light"
    };
  }
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return {
    subscribe: onStoreChange => {
      matchMedia.addEventListener("change", onStoreChange);
      return () => matchMedia.removeEventListener("change", onStoreChange);
    },
    getSnapshot: () => matchMedia.matches ? "dark" : "light",
    getServerSnapshot: () => "light"
  };
}
const store = createStore();
function usePrefersColorScheme() {
  return react.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}
exports.NextStudioNoScript = studio_loading.NextStudioNoScript;
exports.useTheme = studio_loading.useTheme;
exports.NextStudio = NextStudio;
exports.NextStudioClientOnly = NextStudioClientOnly;
exports.NextStudioLayout = NextStudioLayout;
exports.usePrefersColorScheme = usePrefersColorScheme;
//# sourceMappingURL=index.cjs.map
