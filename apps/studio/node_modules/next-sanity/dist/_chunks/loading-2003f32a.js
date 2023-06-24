import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { SpinnerIcon } from '@sanity/icons';
import { studioTheme, _responsive, rem } from '@sanity/ui';
import { useMemo } from 'react';
function useTheme(config) {
  const workspace = useMemo(() => Array.isArray(config) ? config[0] : config, [config]);
  return useMemo(() => (workspace == null ? void 0 : workspace.theme) || studioTheme, [workspace]);
}
const style = {
  __html: "\n.sanity-app-no-js__root {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 1;\n}\n\n.sanity-app-no-js__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-family: helvetica, arial, sans-serif;\n}\n"
};
const NextStudioNoScript = () => /* @__PURE__ */jsx("noscript", {
  children: /* @__PURE__ */jsx("div", {
    className: "sanity-app-no-js__root",
    children: /* @__PURE__ */jsxs("div", {
      className: "sanity-app-no-js__content",
      children: [/* @__PURE__ */jsx("style", {
        type: "text/css",
        dangerouslySetInnerHTML: style
      }), /* @__PURE__ */jsx("h1", {
        children: "JavaScript disabled"
      }), /* @__PURE__ */jsxs("p", {
        children: ["Please ", /* @__PURE__ */jsx("a", {
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
  const styles = _responsive(media, [2], size => {
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
        width: rem(capHeight),
        height: rem(capHeight)
      },
      svg: {
        display: "block",
        width: rem(iconSize),
        height: rem(iconSize),
        margin: (capHeight - iconSize) / 2
      }
    };
  })[0];
  return /* @__PURE__ */jsxs(Fragment, {
    children: [unstable__noScript && /* @__PURE__ */jsx(NextStudioNoScript, {}), /* @__PURE__ */jsx("div", {
      style: {
        fontFamily: fonts.text.family,
        backgroundColor: theme.color[scheme === "dark" ? "dark" : "light"].default.base.bg,
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto"
      },
      children: /* @__PURE__ */jsxs("div", {
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
        children: [/* @__PURE__ */jsx("style", {
          children: "@keyframes ".concat(id, " {").concat(keyframes, "}")
        }, scheme), /* @__PURE__ */jsx("div", {
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
          children: /* @__PURE__ */jsx("span", {
            children: "Loading\u2026"
          })
        }), /* @__PURE__ */jsx("div", {
          "data-ui": "Spinner",
          style: styles.wrapper,
          children: /* @__PURE__ */jsx(SpinnerIcon, {
            style: styles.svg
          })
        })]
      })
    })]
  });
}
export { NextStudioLoading, NextStudioNoScript, useTheme };
//# sourceMappingURL=loading-2003f32a.js.map
