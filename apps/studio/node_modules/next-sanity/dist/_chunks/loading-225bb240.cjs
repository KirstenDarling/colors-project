'use strict';

var jsxRuntime = require('react/jsx-runtime');
var icons = require('@sanity/icons');
var ui = require('@sanity/ui');
var react = require('react');
function useTheme(config) {
  const workspace = react.useMemo(() => Array.isArray(config) ? config[0] : config, [config]);
  return react.useMemo(() => (workspace == null ? void 0 : workspace.theme) || ui.studioTheme, [workspace]);
}
const style = {
  __html: "\n.sanity-app-no-js__root {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 1;\n}\n\n.sanity-app-no-js__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-family: helvetica, arial, sans-serif;\n}\n"
};
const NextStudioNoScript = () => /* @__PURE__ */jsxRuntime.jsx("noscript", {
  children: /* @__PURE__ */jsxRuntime.jsx("div", {
    className: "sanity-app-no-js__root",
    children: /* @__PURE__ */jsxRuntime.jsxs("div", {
      className: "sanity-app-no-js__content",
      children: [/* @__PURE__ */jsxRuntime.jsx("style", {
        type: "text/css",
        dangerouslySetInnerHTML: style
      }), /* @__PURE__ */jsxRuntime.jsx("h1", {
        children: "JavaScript disabled"
      }), /* @__PURE__ */jsxRuntime.jsxs("p", {
        children: ["Please ", /* @__PURE__ */jsxRuntime.jsx("a", {
          href: "https://www.enable-javascript.com/",
          children: "enable JavaScript"
        }), " in your browser and reload the page to proceed."]
      })]
    })
  })
});
const keyframes = "\nfrom {\n  transform: rotate(0deg);\n}\n\nto {\n  transform: rotate(360deg);\n}\n";
function NextStudioLoading(props) {
  const {
    config,
    scheme = "light",
    unstable__noScript = true
  } = props;
  const id = "next-sanity-spinner";
  const theme = useTheme(config);
  const {
    fonts,
    media
  } = theme;
  const styles = ui._responsive(media, [2], size => {
    const {
      ascenderHeight,
      descenderHeight,
      lineHeight,
      iconSize
    } = fonts.text.sizes[size];
    const capHeight = lineHeight - ascenderHeight - descenderHeight;
    return {
      wrapper: {
        display: "block",
        animation: "".concat(id, " 500ms linear infinite"),
        color: theme.color[scheme === "dark" ? "dark" : "light"].default.muted.default.enabled.muted.fg,
        width: ui.rem(capHeight),
        height: ui.rem(capHeight)
      },
      svg: {
        display: "block",
        width: ui.rem(iconSize),
        height: ui.rem(iconSize),
        margin: (capHeight - iconSize) / 2
      }
    };
  })[0];
  return /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [unstable__noScript && /* @__PURE__ */jsxRuntime.jsx(NextStudioNoScript, {}), /* @__PURE__ */jsxRuntime.jsx("div", {
      style: {
        fontFamily: fonts.text.family,
        backgroundColor: theme.color[scheme === "dark" ? "dark" : "light"].default.base.bg,
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto"
      },
      children: /* @__PURE__ */jsxRuntime.jsxs("div", {
        "data-ui": "Flex",
        style: {
          display: "flex",
          minWidth: 0,
          minHeight: 0,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          margin: 0,
          padding: 0,
          // @TODO use rem calc
          gap: "10px"
        },
        children: [/* @__PURE__ */jsxRuntime.jsx("style", {
          children: "@keyframes ".concat(id, " {").concat(keyframes, "}")
        }, scheme), /* @__PURE__ */jsxRuntime.jsx("div", {
          "data-ui": "Text",
          style: {
            position: "relative",
            // @TODO read from theme
            fontWeight: 400,
            // @TODO read from theme
            padding: "1px 0px",
            // @TODO use rem calc
            fontSize: "1rem",
            // @TODO use rem calc
            lineHeight: "calc(1.3125)",
            // @TODO use rem calc
            transform: "translateY(-5px)",
            color: theme.color[scheme === "dark" ? "dark" : "light"].default.muted.default.enabled.muted.fg
          },
          children: /* @__PURE__ */jsxRuntime.jsx("span", {
            children: "Loading\u2026"
          })
        }), /* @__PURE__ */jsxRuntime.jsx("div", {
          "data-ui": "Spinner",
          style: styles.wrapper,
          children: /* @__PURE__ */jsxRuntime.jsx(icons.SpinnerIcon, {
            style: styles.svg
          })
        })]
      })
    })]
  });
}
exports.NextStudioLoading = NextStudioLoading;
exports.NextStudioNoScript = NextStudioNoScript;
exports.useTheme = useTheme;
//# sourceMappingURL=loading-225bb240.cjs.map
