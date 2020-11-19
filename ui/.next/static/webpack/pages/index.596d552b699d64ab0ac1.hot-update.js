webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainContent.tsx":
/*!************************************!*\
  !*** ./components/MainContent.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temperature.svg */ \"./assets/temperature.svg\");\n/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/rain.svg */ \"./assets/rain.svg\");\n/* harmony import */ var _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/humidity.svg */ \"./assets/humidity.svg\");\n/* harmony import */ var _assets_radiation_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/radiation.svg */ \"./assets/radiation.svg\");\n/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/wind.svg */ \"./assets/wind.svg\");\n/* harmony import */ var _assets_location_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/location.svg */ \"./assets/location.svg\");\n/* harmony import */ var _OverviewItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OverviewItem */ \"./components/OverviewItem.tsx\");\n/* harmony import */ var _Forecasts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Forecasts */ \"./components/Forecasts.tsx\");\n/* harmony import */ var _SidebarMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarMenu */ \"./components/SidebarMenu.tsx\");\n/* harmony import */ var _Ads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Ads */ \"./components/Ads.tsx\");\n/* harmony import */ var _Advisery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Advisery */ \"./components/Advisery.tsx\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context */ \"./context.ts\");\n\n\nvar _jsxFileName = \"/Users/lioneletaba/Documents/Projets/Perso/argrisults-app/ui/components/MainContent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar MainContent = function MainContent(_ref) {\n  _s();\n\n  var className = _ref.className,\n      dailyWeather = _ref.dailyWeather,\n      forecasts = _ref.forecasts;\n  console.log({\n    weather: {\n      dailyWeather: dailyWeather,\n      forecasts: forecasts\n    }\n  });\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_14__[\"appContext\"]);\n\n  var showMapContainer = function showMapContainer(e) {\n    context.toggleShowMap();\n  };\n\n  var overviews = [{\n    name: \"temperature\",\n    logo: _assets_temperature_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    value: dailyWeather.temperatures.value,\n    unit: dailyWeather.temperatures.units\n  }, {\n    name: \"Rainfall\",\n    logo: _assets_rain_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    value: dailyWeather.precipitation.amount,\n    unit: dailyWeather.precipitation.units\n  }, {\n    name: \"humidity\",\n    logo: _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    value: dailyWeather.relativeHumidity.average,\n    unit: \"\"\n  }, {\n    name: \"Solar radiation\",\n    logo: _assets_radiation_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    value: dailyWeather.solar.amount,\n    unit: dailyWeather.solar.units\n  }, {\n    name: \"Wind speed\",\n    logo: _assets_wind_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    value: dailyWeather.wind.average,\n    unit: dailyWeather.wind.units\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: className,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"location-icon-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"location-icon\",\n        onClick: showMapContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_assets_location_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"location-text\",\n        children: \"Choose your location\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"overview-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"overview\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"overview-title\",\n          children: \"Overview\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"overview-content\",\n          children: overviews.map(function (el, idx) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_OverviewItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n              name: el.name,\n              logo: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(el.logo, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 25\n              }, _this),\n              value: el.value,\n              unit: el.unit\n            }, idx, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SidebarMenu__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Forecasts__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      chartData: forecasts\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Ads__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Advisery__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MainContent, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\n_c = MainContent;\nMainContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MainContent).withConfig({\n  displayName: \"MainContent\",\n  componentId: \"kvwt9u-0\"\n})([\"margin-top:45px;display:grid;grid-template-columns:339px 1fr;grid-template-rows:200px 330px 100px auto;grid-template-areas:\\\"location overview\\\" \\\"menu forecasts\\\" \\\"ads forecasts\\\" \\\"ads advisery\\\";grid-row-gap:40px;grid-column-gap:20px;padding-left:calc(50% - var(--container) / 2);padding-right:calc(50% - var(--container) / 2);& div{}& section{}.sidebar{display:flex}.location-icon-container{height:202px;width:100%;display:grid;place-items:center;text-align:center;border-radius:10px;background-color:white;box-shadow:var(--shadow-sm);grid-area:location;}.location-icon{width:70px;height:70px;box-shadow:var(--shadow-sm);border-radius:50%;display:grid;place-items:center;background:var(--grey-light);transition:all 300ms ease-out;&:hover{box-shadow:var(--shadow-md);cursor:pointer;}}.location-text{}.overview-container{grid-area:overview;}.overview{width:100%;display:flex;flex-direction:column;height:100%;}.overview-title{font-size:36px;padding:10px 0px;}.overview-content{width:100%;display:flex;margin-top:auto;justify-content:space-between;align-self:end;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGVudC50c3g/NTVhYyJdLCJuYW1lcyI6WyJNYWluQ29udGVudCIsImNsYXNzTmFtZSIsImRhaWx5V2VhdGhlciIsImZvcmVjYXN0cyIsImNvbnNvbGUiLCJsb2ciLCJ3ZWF0aGVyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJhcHBDb250ZXh0Iiwic2hvd01hcENvbnRhaW5lciIsImUiLCJ0b2dnbGVTaG93TWFwIiwib3ZlcnZpZXdzIiwibmFtZSIsImxvZ28iLCJUZW1wZXJhdHVyZSIsInZhbHVlIiwidGVtcGVyYXR1cmVzIiwidW5pdCIsInVuaXRzIiwiUmFpbmZhbGwiLCJwcmVjaXBpdGF0aW9uIiwiYW1vdW50IiwiSHVtaWRpdHkiLCJyZWxhdGl2ZUh1bWlkaXR5IiwiYXZlcmFnZSIsIlJhZGlhdGlvbiIsInNvbGFyIiwiV2luZCIsIndpbmQiLCJtYXAiLCJlbCIsImlkeCIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFJQSxXQUE0QixHQUFHLDJCQUEyQztBQUFBOztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBRTVFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDQyxXQUFPLEVBQUU7QUFBQ0osa0JBQVksRUFBWkEsWUFBRDtBQUFlQyxlQUFTLEVBQVRBO0FBQWY7QUFBVixHQUFaO0FBQ0EsTUFBTUksT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxvREFBRCxDQUExQjs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkosV0FBTyxDQUFD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F6RUQ7O0dBQUlILFc7O0tBQUFBLFc7QUE0RUpBLFdBQVcsR0FBR2tDLGlFQUFNLENBQUNsQyxXQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsa2pDQUFYO0FBZ0ZlQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbkNvbnRlbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFRlbXBlcmF0dXJlIGZyb20gJy4uL2Fzc2V0cy90ZW1wZXJhdHVyZS5zdmcnXG5pbXBvcnQgUmFpbmZhbGwgZnJvbSAnLi4vYXNzZXRzL3JhaW4uc3ZnJ1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gJy4uL2Fzc2V0cy9odW1pZGl0eS5zdmcnXG5pbXBvcnQgUmFkaWF0aW9uIGZyb20gJy4uL2Fzc2V0cy9yYWRpYXRpb24uc3ZnJ1xuaW1wb3J0IFdpbmQgZnJvbSAnLi4vYXNzZXRzL3dpbmQuc3ZnJ1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4uL2Fzc2V0cy9sb2NhdGlvbi5zdmcnXG5pbXBvcnQgT3ZlcnZpZXdJdGVtIGZyb20gJy4vT3ZlcnZpZXdJdGVtJztcbmltcG9ydCBGb3JlY2FzdHMgZnJvbSAnLi9Gb3JlY2FzdHMnO1xuaW1wb3J0IFNpZGViYXJNZW51IGZyb20gJy4vU2lkZWJhck1lbnUnXG5pbXBvcnQgQWRzIGZyb20gJy4vQWRzJ1xuaW1wb3J0IEFkdmlzZXJ5IGZyb20gJy4vQWR2aXNlcnknXG5pbXBvcnQgeyBhcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCdcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGRhaWx5V2VhdGhlcj86IGFueTtcbiAgZm9yZWNhc3RzPzogYW55O1xufVxuXG5sZXQgTWFpbkNvbnRlbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICgge2NsYXNzTmFtZSwgZGFpbHlXZWF0aGVyLCBmb3JlY2FzdHN9KSA9PiB7XG4gIFxuICBjb25zb2xlLmxvZyh7d2VhdGhlcjoge2RhaWx5V2VhdGhlciwgZm9yZWNhc3RzfX0pIFxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChhcHBDb250ZXh0KTtcbiAgY29uc3Qgc2hvd01hcENvbnRhaW5lciA9IChlKSA9PiB7XG4gICAgY29udGV4dC50b2dnbGVTaG93TWFwKClcbiAgfVxuXG4gIGNvbnN0IG92ZXJ2aWV3czogYW55W10gPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgbG9nbzogVGVtcGVyYXR1cmUsXG4gICAgICB2YWx1ZTogZGFpbHlXZWF0aGVyLnRlbXBlcmF0dXJlcy52YWx1ZSxcbiAgICAgIHVuaXQ6IGRhaWx5V2VhdGhlci50ZW1wZXJhdHVyZXMudW5pdHNcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUmFpbmZhbGxcIixcbiAgICAgIGxvZ286IFJhaW5mYWxsLFxuICAgICAgdmFsdWU6IGRhaWx5V2VhdGhlci5wcmVjaXBpdGF0aW9uLmFtb3VudCxcbiAgICAgIHVuaXQ6IGRhaWx5V2VhdGhlci5wcmVjaXBpdGF0aW9uLnVuaXRzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImh1bWlkaXR5XCIsXG4gICAgICBsb2dvOiBIdW1pZGl0eSxcbiAgICAgIHZhbHVlOiBkYWlseVdlYXRoZXIucmVsYXRpdmVIdW1pZGl0eS5hdmVyYWdlLFxuICAgICAgdW5pdDogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTb2xhciByYWRpYXRpb25cIixcbiAgICAgIGxvZ286IFJhZGlhdGlvbixcbiAgICAgIHZhbHVlOiBkYWlseVdlYXRoZXIuc29sYXIuYW1vdW50LFxuICAgICAgdW5pdDpkYWlseVdlYXRoZXIuc29sYXIudW5pdHNcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiV2luZCBzcGVlZFwiLFxuICAgICAgbG9nbzogV2luZCxcbiAgICAgIHZhbHVlOiBkYWlseVdlYXRoZXIud2luZC5hdmVyYWdlLFxuICAgICAgdW5pdDogZGFpbHlXZWF0aGVyLndpbmQudW5pdHNcbiAgICB9LFxuICBdXG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24taWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uLWljb25cIiBvbkNsaWNrPXtzaG93TWFwQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMb2NhdGlvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvY2F0aW9uLXRleHRcIj5DaG9vc2UgeW91ciBsb2NhdGlvbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3ZlcnZpZXctY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwib3ZlcnZpZXctdGl0bGVcIj5PdmVydmlldzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1jb250ZW50XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG92ZXJ2aWV3cy5tYXAoKGVsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8T3ZlcnZpZXdJdGVtXG4gICAgICAgICAgICAgICAgICBuYW1lPXtlbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgbG9nbz17PGVsLmxvZ28gLz59XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICB1bml0PXtlbC51bml0fVxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8U2lkZWJhck1lbnUvPlxuICAgICAgPEZvcmVjYXN0cyBjaGFydERhdGE9e2ZvcmVjYXN0c30gLz5cbiAgICAgIDxBZHMgLz5cbiAgICAgIDxBZHZpc2VyeS8+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cblxuTWFpbkNvbnRlbnQgPSBzdHlsZWQoTWFpbkNvbnRlbnQpYFxuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzOXB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAzMzBweCAxMDBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvY2F0aW9uIG92ZXJ2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBcIm1lbnUgZm9yZWNhc3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICBcImFkcyBmb3JlY2FzdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIFwiYWRzIGFkdmlzZXJ5XCI7XG4gIGdyaWQtcm93LWdhcDogNDBweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoNTAlIC0gdmFyKC0tY29udGFpbmVyKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWNvbnRhaW5lcikgLyAyKTtcbiAgJiBkaXZ7XG4gICAgLyogYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDsgKi9cbiAgfVxuICAmIHNlY3Rpb257XG4gICAgLyogYmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDsgKi9cbiAgfVxuXG4gIC5zaWRlYmFye1xuICAgIGRpc3BsYXk6IGZsZXhcbiAgfVxuXG4gIC5sb2NhdGlvbi1pY29uLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDIwMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIGdyaWQtYXJlYTogbG9jYXRpb247XG4gIH1cblxuICAubG9jYXRpb24taWNvbntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcbiAgICAmOmhvdmVye1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24tdGV4dHtcblxuICB9XG5cbiAgXG4gIC5vdmVydmlldy1jb250YWluZXJ7XG4gICAgZ3JpZC1hcmVhOiBvdmVydmlldztcbiAgfVxuICAub3ZlcnZpZXd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5vdmVydmlldy10aXRsZXtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cbiAgLm92ZXJ2aWV3LWNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gIH1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainContent.tsx\n");

/***/ })

})