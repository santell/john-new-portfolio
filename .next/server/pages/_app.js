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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_context_colorState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/context/colorState */ \"./src/context/colorState.js\");\n/* harmony import */ var _src_context_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/context/navState */ \"./src/context/navState.js\");\n/* harmony import */ var _src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/layouts/PreLoader */ \"./src/layouts/PreLoader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/bootstrap.min.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/jquery.animatedheadline.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/font-awesome.min.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"/public/css/plugins.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/style.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        type: \"text/css\",\n                        href: \"css/styleswitcher.css\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Steven - Personal Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_colorState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0k7QUFDa0I7QUFDSjtBQUNFO0FBQ2xCO0FBRS9CLFNBQVNLLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDTiwyQ0FBUTs7MEJBQ1AsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ1EsTUFBSTt3QkFDSEMsSUFBSSxFQUFDLHVHQUF1Rzt3QkFDNUdDLEdBQUcsRUFBQyxZQUFZOzs7Ozs0QkFDaEI7a0NBQ0YsOERBQUNGLE1BQUk7d0JBQUNDLElBQUksRUFBQyxtRUFBbUU7d0JBQUNDLEdBQUcsRUFBQyxZQUFZOzs7Ozs0QkFBRztrQ0FFbEcsOERBQUNGLE1BQUk7d0JBQUNHLElBQUksRUFBQyxVQUFVO3dCQUFDQyxLQUFLLEVBQUMsS0FBSzt3QkFBQ0gsSUFBSSxFQUFDLHVCQUF1Qjt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7Ozs7OzRCQUFHO2tDQUNsRiw4REFBQ0YsTUFBSTt3QkFBQ0csSUFBSSxFQUFDLFVBQVU7d0JBQUNDLEtBQUssRUFBQyxLQUFLO3dCQUFDSCxJQUFJLEVBQUMsaUNBQWlDO3dCQUFDQyxHQUFHLEVBQUMsWUFBWTs7Ozs7NEJBQUc7a0NBQzVGLDhEQUFDRixNQUFJO3dCQUFDRyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsS0FBSyxFQUFDLEtBQUs7d0JBQUNILElBQUksRUFBQywwQkFBMEI7d0JBQUNDLEdBQUcsRUFBQyxZQUFZOzs7Ozs0QkFBRztrQ0FDckYsOERBQUNGLE1BQUk7d0JBQUNHLElBQUksRUFBQyxVQUFVO3dCQUFDQyxLQUFLLEVBQUMsS0FBSzt3QkFBQ0gsSUFBSSxFQUFDLHlCQUF5Qjt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7Ozs7OzRCQUFHO2tDQUNwRiw4REFBQ0YsTUFBSTt3QkFBQ0csSUFBSSxFQUFDLFVBQVU7d0JBQUNDLEtBQUssRUFBQyxLQUFLO3dCQUFDSCxJQUFJLEVBQUMsZUFBZTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7Ozs7OzRCQUFHO2tDQUMxRSw4REFBQ0YsTUFBSTt3QkFBQ0UsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDRixJQUFJLEVBQUMsdUJBQXVCOzs7Ozs0QkFBRztrQ0FDdEUsOERBQUNJLE9BQUs7a0NBQUMsNkJBQTJCOzs7Ozs0QkFBUTs7Ozs7O29CQUNyQzswQkFDUCw4REFBQ1YsNkRBQVE7MEJBQ1AsNEVBQUNELCtEQUFVOztzQ0FDVCw4REFBQ0ksU0FBUzs0QkFBRSxHQUFHQyxTQUFTOzs7OztnQ0FBSTtzQ0FDNUIsOERBQUNILDhEQUFTOzs7O2dDQUFHOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNKOzs7Ozs7WUFDRixDQUNYO0NBQ0g7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXN0YW5idWwtcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb2xvclN0YXRlIGZyb20gJy4uL3NyYy9jb250ZXh0L2NvbG9yU3RhdGUnO1xyXG5pbXBvcnQgTmF2U3RhdGUgZnJvbSAnLi4vc3JjL2NvbnRleHQvbmF2U3RhdGUnO1xyXG5pbXBvcnQgUHJlTG9hZGVyIGZyb20gJy4uL3NyYy9sYXlvdXRzL1ByZUxvYWRlcic7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaSw4MDAsODAwaSw5MDAsOTAwaSdcclxuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwJyByZWw9J3N0eWxlc2hlZXQnIC8+XHJcbiAgICAgICAgey8qIFRlbXBsYXRlIENTUyBGaWxlcyAqL31cclxuICAgICAgICA8bGluayB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgaHJlZj0nY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XHJcbiAgICAgICAgPGxpbmsgdHlwZT0ndGV4dC9jc3MnIG1lZGlhPSdhbGwnIGhyZWY9J2Nzcy9qcXVlcnkuYW5pbWF0ZWRoZWFkbGluZS5jc3MnIHJlbD0nc3R5bGVzaGVldCcgLz5cclxuICAgICAgICA8bGluayB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgaHJlZj0nY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XHJcbiAgICAgICAgPGxpbmsgdHlwZT0ndGV4dC9jc3MnIG1lZGlhPSdhbGwnIGhyZWY9Jy9wdWJsaWMvY3NzL3BsdWdpbnMuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XHJcbiAgICAgICAgPGxpbmsgdHlwZT0ndGV4dC9jc3MnIG1lZGlhPSdhbGwnIGhyZWY9J2Nzcy9zdHlsZS5jc3MnIHJlbD0nc3R5bGVzaGVldCcgLz5cclxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdjc3Mvc3R5bGVzd2l0Y2hlci5jc3MnIC8+XHJcbiAgICAgICAgPHRpdGxlPlN0ZXZlbiAtIFBlcnNvbmFsIFBvcnRmb2xpbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdlN0YXRlPlxyXG4gICAgICAgIDxDb2xvclN0YXRlPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPFByZUxvYWRlciAvPlxyXG4gICAgICAgIDwvQ29sb3JTdGF0ZT5cclxuICAgICAgPC9OYXZTdGF0ZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiRnJhZ21lbnQiLCJDb2xvclN0YXRlIiwiTmF2U3RhdGUiLCJQcmVMb2FkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJocmVmIiwicmVsIiwidHlwZSIsIm1lZGlhIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/context/colorContext.js":
/*!*************************************!*\
  !*** ./src/context/colorContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ColorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb2xvckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQ3RDLE1BQU1DLFlBQVksaUJBQUdELG9EQUFhLEVBQUU7QUFDcEMsaUVBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lzdGFuYnVsLXJlYWN0Ly4vc3JjL2NvbnRleHQvY29sb3JDb250ZXh0LmpzP2ViOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBDb2xvckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJDb2xvckNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/colorContext.js\n");

/***/ }),

/***/ "./src/context/colorState.js":
/*!***********************************!*\
  !*** ./src/context/colorState.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _colorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorContext */ \"./src/context/colorContext.js\");\n\n\n\nconst type = {\n    COLOR: \"NAV\"\n};\nconst navReducer = (state, action)=>{\n    switch(action.type){\n        case type.COLOR:\n            return {\n                ...state,\n                color: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst ColorState = (props)=>{\n    const initialState = {\n        color: \"yellowgreen\"\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(navReducer, initialState);\n    const changeColor = (value)=>{\n        dispatch({\n            type: type.COLOR,\n            payload: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_colorContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            changeColor: changeColor,\n            color: state.color\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\context\\\\colorState.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb2xvclN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW1DO0FBQ087QUFFMUMsTUFBTUUsSUFBSSxHQUFHO0lBQ1hDLEtBQUssRUFBRSxLQUFLO0NBQ2I7QUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDcEMsT0FBUUEsTUFBTSxDQUFDSixJQUFJO1FBQ2pCLEtBQUtBLElBQUksQ0FBQ0MsS0FBSztZQUNiLE9BQU87Z0JBQ0wsR0FBR0UsS0FBSztnQkFDUkUsS0FBSyxFQUFFRCxNQUFNLENBQUNFLE9BQU87YUFDdEIsQ0FBQztRQUVKO1lBQ0UsT0FBT0gsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxNQUFNSSxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQzVCLE1BQU1DLFlBQVksR0FBRztRQUNuQkosS0FBSyxFQUFFLGFBQWE7S0FDckI7SUFDRCxNQUFNLEtBQUNGLEtBQUssTUFBRU8sUUFBUSxNQUFJWixpREFBVSxDQUFDSSxVQUFVLEVBQUVPLFlBQVksQ0FBQztJQUU5RCxNQUFNRSxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO1FBQzdCRixRQUFRLENBQUM7WUFDUFYsSUFBSSxFQUFFQSxJQUFJLENBQUNDLEtBQUs7WUFDaEJLLE9BQU8sRUFBRU0sS0FBSztTQUNmLENBQUMsQ0FBQztLQUNKO0lBQ0QscUJBQ0UsOERBQUNiLDhEQUFxQjtRQUNwQmEsS0FBSyxFQUFFO1lBQ0xELFdBQVcsRUFBRUEsV0FBVztZQUN4Qk4sS0FBSyxFQUFFRixLQUFLLENBQUNFLEtBQUs7U0FDbkI7a0JBRUFHLEtBQUssQ0FBQ00sUUFBUTs7Ozs7aUJBQ08sQ0FDeEI7Q0FDSDtBQUVELGlFQUFlUCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc3RhbmJ1bC1yZWFjdC8uL3NyYy9jb250ZXh0L2NvbG9yU3RhdGUuanM/Y2NmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sb3JDb250ZXh0IGZyb20gJy4vY29sb3JDb250ZXh0JztcclxuXHJcbmNvbnN0IHR5cGUgPSB7XHJcbiAgQ09MT1I6ICdOQVYnLFxyXG59O1xyXG5cclxuY29uc3QgbmF2UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlLkNPTE9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbG9yOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JTdGF0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvbG9yOiAneWVsbG93Z3JlZW4nLFxyXG4gIH07XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG5hdlJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IHR5cGUuQ09MT1IsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbG9yQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGNoYW5nZUNvbG9yOiBjaGFuZ2VDb2xvcixcclxuICAgICAgICBjb2xvcjogc3RhdGUuY29sb3IsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29sb3JDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclN0YXRlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIkNvbG9yQ29udGV4dCIsInR5cGUiLCJDT0xPUiIsIm5hdlJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbG9yIiwicGF5bG9hZCIsIkNvbG9yU3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwiY2hhbmdlQ29sb3IiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/colorState.js\n");

/***/ }),

/***/ "./src/context/navContext.js":
/*!***********************************!*\
  !*** ./src/context/navContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9uYXZDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUN0QyxNQUFNQyxVQUFVLGlCQUFHRCxvREFBYSxFQUFFO0FBQ2xDLGlFQUFlQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc3RhbmJ1bC1yZWFjdC8uL3NyYy9jb250ZXh0L25hdkNvbnRleHQuanM/NTFjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE5hdkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRleHQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiTmF2Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/navContext.js\n");

/***/ }),

/***/ "./src/context/navState.js":
/*!*********************************!*\
  !*** ./src/context/navState.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navContext */ \"./src/context/navContext.js\");\n\n\n\nconst type = {\n    NAV: \"NAV\",\n    MOBILE_MENU: \"MOBILE_MENU\"\n};\nconst navReducer = (state, action)=>{\n    switch(action.type){\n        case type.NAV:\n            return {\n                ...state,\n                nav: action.payload\n            };\n        case type.MOBILE_MENU:\n            return {\n                ...state,\n                mobileMenu: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst NavState = (props)=>{\n    const initialState = {\n        nav: \"home\",\n        mobileMenu: false\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(navReducer, initialState);\n    const changeNav = (value)=>{\n        dispatch({\n            type: type.NAV,\n            payload: value\n        });\n    };\n    const changeMobileMenu = (value)=>{\n        console.log(value);\n        dispatch({\n            type: type.MOBILE_MENU,\n            payload: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            changeNav: changeNav,\n            nav: state.nav,\n            mobileMenu: state.mobileMenu,\n            changeMobileMenu: changeMobileMenu\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\context\\\\navState.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9uYXZTdGF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNHO0FBRXRDLE1BQU1FLElBQUksR0FBRztJQUNYQyxHQUFHLEVBQUUsS0FBSztJQUNWQyxXQUFXLEVBQUUsYUFBYTtDQUMzQjtBQUVELE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztJQUNwQyxPQUFRQSxNQUFNLENBQUNMLElBQUk7UUFDakIsS0FBS0EsSUFBSSxDQUFDQyxHQUFHO1lBQ1gsT0FBTztnQkFDTCxHQUFHRyxLQUFLO2dCQUNSRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0UsT0FBTzthQUNwQixDQUFDO1FBQ0osS0FBS1AsSUFBSSxDQUFDRSxXQUFXO1lBQ25CLE9BQU87Z0JBQ0wsR0FBR0UsS0FBSztnQkFDUkksVUFBVSxFQUFFSCxNQUFNLENBQUNFLE9BQU87YUFDM0IsQ0FBQztRQUVKO1lBQ0UsT0FBT0gsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxNQUFNSyxRQUFRLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQzFCLE1BQU1DLFlBQVksR0FBRztRQUNuQkwsR0FBRyxFQUFFLE1BQU07UUFDWEUsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxNQUFNLEtBQUNKLEtBQUssTUFBRVEsUUFBUSxNQUFJZCxpREFBVSxDQUFDSyxVQUFVLEVBQUVRLFlBQVksQ0FBQztJQUU5RCxNQUFNRSxTQUFTLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO1FBQzNCRixRQUFRLENBQUM7WUFDUFosSUFBSSxFQUFFQSxJQUFJLENBQUNDLEdBQUc7WUFDZE0sT0FBTyxFQUFFTyxLQUFLO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDRCxLQUFLLEdBQUs7UUFDbENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUMsQ0FBQztRQUNuQkYsUUFBUSxDQUFDO1lBQ1BaLElBQUksRUFBRUEsSUFBSSxDQUFDRSxXQUFXO1lBQ3RCSyxPQUFPLEVBQUVPLEtBQUs7U0FDZixDQUFDLENBQUM7S0FDSjtJQUNELHFCQUNFLDhEQUFDZiw0REFBbUI7UUFDbEJlLEtBQUssRUFBRTtZQUNMRCxTQUFTLEVBQUVBLFNBQVM7WUFDcEJQLEdBQUcsRUFBRUYsS0FBSyxDQUFDRSxHQUFHO1lBQ2RFLFVBQVUsRUFBRUosS0FBSyxDQUFDSSxVQUFVO1lBQzVCTyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO1NBQ25DO2tCQUVBTCxLQUFLLENBQUNTLFFBQVE7Ozs7O2lCQUNLLENBQ3RCO0NBQ0g7QUFFRCxpRUFBZVYsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXN0YW5idWwtcmVhY3QvLi9zcmMvY29udGV4dC9uYXZTdGF0ZS5qcz9mNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSBcIi4vbmF2Q29udGV4dFwiO1xyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuICBOQVY6IFwiTkFWXCIsXHJcbiAgTU9CSUxFX01FTlU6IFwiTU9CSUxFX01FTlVcIixcclxufTtcclxuXHJcbmNvbnN0IG5hdlJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZS5OQVY6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgdHlwZS5NT0JJTEVfTUVOVTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2JpbGVNZW51OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTmF2U3RhdGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBuYXY6IFwiaG9tZVwiLFxyXG4gICAgbW9iaWxlTWVudTogZmFsc2UsXHJcbiAgfTtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIobmF2UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTmF2ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IHR5cGUuTkFWLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlTW9iaWxlTWVudSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB0eXBlLk1PQklMRV9NRU5VLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY2hhbmdlTmF2OiBjaGFuZ2VOYXYsXHJcbiAgICAgICAgbmF2OiBzdGF0ZS5uYXYsXHJcbiAgICAgICAgbW9iaWxlTWVudTogc3RhdGUubW9iaWxlTWVudSxcclxuICAgICAgICBjaGFuZ2VNb2JpbGVNZW51OiBjaGFuZ2VNb2JpbGVNZW51LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlN0YXRlO1xyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIk5hdkNvbnRleHQiLCJ0eXBlIiwiTkFWIiwiTU9CSUxFX01FTlUiLCJuYXZSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuYXYiLCJwYXlsb2FkIiwibW9iaWxlTWVudSIsIk5hdlN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsImNoYW5nZU5hdiIsInZhbHVlIiwiY2hhbmdlTW9iaWxlTWVudSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/navState.js\n");

/***/ }),

/***/ "./src/layouts/PreLoader.js":
/*!**********************************!*\
  !*** ./src/layouts/PreLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PreLoader = ()=>{\n    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoaded(true);\n        }, 2000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `preloader ${loaded ? \"loaded\" : \"\"}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preloader-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Steven\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"progress-line-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"progress-line\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Andrychuk\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\JOB\\\\package\\\\istanbul\\\\src\\\\layouts\\\\PreLoader.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader); // loaded\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9QcmVMb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE0QztBQUU1QyxNQUFNRSxTQUFTLEdBQUcsSUFBTTtJQUN0QixNQUFNLEtBQUNDLE1BQU0sTUFBRUMsU0FBUyxNQUFJSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUMzQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RLLFVBQVUsQ0FBQyxJQUFNO1lBQ2ZELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1YsQ0FBQyxDQUFDO0lBRUgscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFSixNQUFNLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2tCQUNuRCw0RUFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUMscUJBQXFCOzs4QkFDbEMsOERBQUNDLElBQUU7OEJBQUMsUUFBTTs7Ozs7NkJBQUs7OEJBQ2YsOERBQUNGLEtBQUc7b0JBQUNHLEVBQUUsRUFBQyx5QkFBeUI7OEJBQy9CLDRFQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTs7Ozs7aUNBQUc7Ozs7OzZCQUM3Qjs4QkFDTiw4REFBQ0MsSUFBRTs4QkFBQyxXQUFTOzs7Ozs2QkFBSzs7Ozs7O3FCQUNkOzs7OztpQkFDRixDQUNOO0NBQ0g7QUFDRCxpRUFBZU4sU0FBUyxFQUFDLENBQ3pCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc3RhbmJ1bC1yZWFjdC8uL3NyYy9sYXlvdXRzL1ByZUxvYWRlci5qcz9jYzc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQcmVMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BwcmVsb2FkZXIgJHtsb2FkZWQgPyAnbG9hZGVkJyA6ICcnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxPlN0ZXZlbjwvaDE+XHJcbiAgICAgICAgPGRpdiBpZD0ncHJvZ3Jlc3MtbGluZS1jb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWxpbmUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxPkFuZHJ5Y2h1azwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJlTG9hZGVyO1xyXG4vLyBsb2FkZWRcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJlTG9hZGVyIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/PreLoader.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();