var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, startTransition, memo, useSyncExternalStore } from 'react';
import { Studio } from 'sanity';
import styled from 'styled-components';
import { useTheme, NextStudioNoScript, NextStudioLoading } from '../_chunks/loading-2003f32a.js';
function NextStudioClientOnly(_ref) {
  let {
    children,
    fallback
  } = _ref;
  const [mounted, setMounted] = useState(false);
  useEffect(() => startTransition(() => setMounted(true)), []);
  return /* @__PURE__ */jsx(Fragment, {
    children: mounted ? children : fallback
  });
}
const Layout = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  background-color: ", ";\n  height: 100vh;\n  max-height: 100dvh;\n  overscroll-behavior: none;\n  -webkit-font-smoothing: antialiased;\n  overflow: auto;\n"])), _ref2 => {
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
  const theme = useTheme(config);
  return /* @__PURE__ */jsx(Layout, {
    "data-ui": "NextStudioLayout",
    $fontFamily: theme.fonts.text.family,
    $bg: theme.color[scheme === "dark" ? "dark" : "light"].default.base.bg,
    children
  });
};
const NextStudioLayout = memo(NextStudioLayoutComponent);
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
    return /* @__PURE__ */jsxs(Fragment, {
      children: [unstable__noScript && /* @__PURE__ */jsx(NextStudioNoScript, {}), /* @__PURE__ */jsx(NextStudioLayout, {
        config,
        scheme,
        children: children || /* @__PURE__ */jsx(Studio, {
          config,
          scheme,
          unstable_globalStyles: true,
          ...props
        })
      })]
    });
  }
  return /* @__PURE__ */jsxs(Fragment, {
    children: [unstable__noScript && /* @__PURE__ */jsx(NextStudioNoScript, {}), /* @__PURE__ */jsx(NextStudioClientOnly, {
      fallback: /* @__PURE__ */jsx(NextStudioLoading, {
        unstable__noScript,
        config,
        scheme
      }),
      children: /* @__PURE__ */jsx(NextStudioLayout, {
        config,
        scheme,
        children: children || /* @__PURE__ */jsx(Studio, {
          config,
          scheme,
          unstable_globalStyles: true,
          ...props
        })
      })
    })]
  });
};
const NextStudio = memo(NextStudioComponent);
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
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}
export { NextStudio, NextStudioClientOnly, NextStudioLayout, NextStudioNoScript, usePrefersColorScheme, useTheme };
//# sourceMappingURL=index.js.map
