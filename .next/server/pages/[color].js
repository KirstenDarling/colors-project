"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[color]";
exports.ids = ["pages/[color]"];
exports.modules = {

/***/ "./pages/[color].js":
/*!**************************!*\
  !*** ./pages/[color].js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Color),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/colors.json */ \"./data/colors.json\");\n\n\nfunction Color({ color  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"color-page\",\n        style: {\n            backgroundColor: color.hex\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: color.name\n        }, void 0, false, {\n            fileName: \"/Users/kb/Sites/colors-project/pages/[color].js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kb/Sites/colors-project/pages/[color].js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticPaths() {\n    const paths = _data_colors_json__WEBPACK_IMPORTED_MODULE_1__.map((color)=>{\n        return {\n            params: {\n                color: color.name\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // that find is only going to find the first item that matches the condition\n    const color = _data_colors_json__WEBPACK_IMPORTED_MODULE_1__.find((color)=>color.name === params.color);\n    return {\n        props: {\n            color\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY29sb3JdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBRTFCLFNBQVNDLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBYUMsT0FBTztZQUFFQyxpQkFBaUJKLE1BQU1LLEdBQUc7UUFBQztrQkFDOUQsNEVBQUNDO3NCQUFJTixNQUFNTyxJQUFJOzs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRU0sZUFBZUMsaUJBQWlCO0lBQ3JDLE1BQU1DLFFBQVFYLGtEQUFVLENBQUMsQ0FBQ0UsUUFBVTtRQUNsQyxPQUFPO1lBQ0xXLFFBQVE7Z0JBQUVYLE9BQU9BLE1BQU1PLElBQUk7WUFBQztRQUM5QjtJQUNGO0lBQ0EsT0FBTztRQUFFRTtRQUFPRyxVQUFVLEtBQUs7SUFBQztBQUNsQyxDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFRixPQUFNLEVBQUUsRUFBRTtJQUMvQyw0RUFBNEU7SUFDNUUsTUFBTVgsUUFBUUYsbURBQVcsQ0FBQyxDQUFDRSxRQUFVQSxNQUFNTyxJQUFJLEtBQUtJLE9BQU9YLEtBQUs7SUFDaEUsT0FBTztRQUFFZSxPQUFPO1lBQUVmO1FBQU07SUFBRTtBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sb3JzLXByb2plY3QvLi9wYWdlcy9bY29sb3JdLmpzP2JiMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vZGF0YS9jb2xvcnMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvcih7IGNvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXBhZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleCB9fT5cbiAgICAgIDxoMT57Y29sb3IubmFtZX08L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gY29sb3JzLm1hcCgoY29sb3IpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7IGNvbG9yOiBjb2xvci5uYW1lIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gdGhhdCBmaW5kIGlzIG9ubHkgZ29pbmcgdG8gZmluZCB0aGUgZmlyc3QgaXRlbSB0aGF0IG1hdGNoZXMgdGhlIGNvbmRpdGlvblxuICBjb25zdCBjb2xvciA9IGNvbG9ycy5maW5kKChjb2xvcikgPT4gY29sb3IubmFtZSA9PT0gcGFyYW1zLmNvbG9yKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgY29sb3IgfSB9O1xufVxuIl0sIm5hbWVzIjpbImNvbG9ycyIsIkNvbG9yIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhleCIsImgxIiwibmFtZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmluZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[color].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./data/colors.json":
/*!**************************!*\
  !*** ./data/colors.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Illuminating","hex":"#F5DF4D"},{"name":"Classic Blue","hex":"#0f4c81"},{"name":"Living Coral","hex":"#fa7269"},{"name":"Ultra Violet","hex":"#5f4b8b"},{"name":"Greenery","hex":"#88b04b"},{"name":"Rose Quartz","hex":"#f7cac9"},{"name":"Marsala","hex":"#b57170"},{"name":"Radiant Orchid","hex":"#b06781"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[color].js"));
module.exports = __webpack_exports__;

})();