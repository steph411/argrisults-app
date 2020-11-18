webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MapModal.tsx":
/*!*********************************!*\
  !*** ./components/MapModal.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/lioneletaba/Documents/Projets/Perso/argrisults-app/ui/components/MapModal.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // const mapboxAccessToken = process.env.MAP_ACCESS_TOKEN\n\nvar mapboxAccessToken = \"pk.eyJ1IjoiZXRhYmFsaW9uZWwiLCJhIjoiY2tobmkxcmp5MDIxcjJ1cGVtcnoxbTRnayJ9.F8FUtpO8FsYJFYhWxfAr1Q\";\n\nvar MapModal = function MapModal(_ref) {\n  _s();\n\n  var className = _ref.className,\n      updateLonLat = _ref.updateLonLat,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: \"7.369722\",\n    lon: \"12.354722\",\n    zoom: 0.9\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var mapContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var handleCloseModal = function handleCloseModal(e) {\n    if (e.target.id == \"containerMap\") {\n      closeModal();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken = mapboxAccessToken;\n    console.log({\n      mapboxAccessToken: mapboxAccessToken,\n      mapboxaccess: mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken\n    });\n    var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.Map({\n      container: mapContainer.current,\n      style: 'mapbox://styles/mapbox/streets-v11',\n      center: [state.lon, state.lat],\n      zoom: state.zoom\n    });\n    map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.GeolocateControl({\n      positionOptions: {\n        enableHighAccuracy: true\n      },\n      trackUserLocation: true\n    }));\n    map.on('move', function () {\n      setState({\n        lon: map.getCenter().lng.toFixed(4),\n        lat: map.getCenter().lat.toFixed(4),\n        zoom: map.getZoom().toFixed(2)\n      });\n    });\n    map.on(\"click\", function (e) {\n      console.log(e.lngLat);\n      var _e$lngLat = e.lngLat,\n          lng = _e$lngLat.lng,\n          lat = _e$lngLat.lat;\n      updateLonLat(lat, lng);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: className,\n    onClick: handleCloseModal,\n    id: \"containerMap\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"map\",\n      ref: mapContainer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MapModal, \"COMCp5YpQnV2jDOZO0chGcWXkD4=\");\n\n_c = MapModal;\nMapModal = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MapModal).withConfig({\n  displayName: \"MapModal\",\n  componentId: \"sc-9p4ei7-0\"\n})([\"display:grid;place-items:center;width:100%;height:100%;background-color:rgba(0,0,0,0.8);position:absolute;top:0;left:0;#map{width:65%;height:60%;background:white;border-radius:10px;opacity:1;z-index:1;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"MapModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBNb2RhbC50c3g/Mzg1ZCJdLCJuYW1lcyI6WyJtYXBib3hBY2Nlc3NUb2tlbiIsIk1hcE1vZGFsIiwiY2xhc3NOYW1lIiwidXBkYXRlTG9uTGF0IiwiY2xvc2VNb2RhbCIsInVzZVN0YXRlIiwibGF0IiwibG9uIiwiem9vbSIsInN0YXRlIiwic2V0U3RhdGUiLCJtYXBDb250YWluZXIiLCJ1c2VSZWYiLCJoYW5kbGVDbG9zZU1vZGFsIiwiZSIsInRhcmdldCIsImlkIiwidXNlRWZmZWN0IiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtYXBib3hhY2Nlc3MiLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic3R5bGUiLCJjZW50ZXIiLCJhZGRDb250cm9sIiwiR2VvbG9jYXRlQ29udHJvbCIsInBvc2l0aW9uT3B0aW9ucyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInRyYWNrVXNlckxvY2F0aW9uIiwib24iLCJnZXRDZW50ZXIiLCJsbmciLCJ0b0ZpeGVkIiwiZ2V0Wm9vbSIsImxuZ0xhdCIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBS0E7O0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsZ0dBQTFCOztBQVFBLElBQUlDLFFBQXlCLEdBQUcsd0JBQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxZQUErQixRQUEvQkEsWUFBK0I7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUdqREMsc0RBQVEsQ0FDaEM7QUFDRUMsT0FBRyxFQUFFLFVBRFA7QUFFRUMsT0FBRyxFQUFFLFdBRlA7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FEZ0MsQ0FIeUM7QUFBQSxNQUdwRUMsS0FIb0U7QUFBQSxNQUc3REMsUUFINkQ7O0FBUzNFLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxFQUFULElBQWUsY0FBbkIsRUFBbUM7QUFDakNaLGdCQUFVO0FBQ1g7QUFDRixHQUpEOztBQU9BYSx5REFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQVEsQ0FBQ0MsV0FBVCxHQUF1Qm5CLGlCQUF2QjtBQUNBb0IsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRXJCLHVCQUFpQixFQUFqQkEsaUJBQUY7QUFBcUJzQixrQkFBWSxFQUFFSixnREFBUSxDQUFDQztBQUE1QyxLQUFaO0FBQ0EsUUFBTUksR0FBRyxHQUFHLElBQUlMLGdEQUFRLENBQUNNLEdBQWIsQ0FBaUI7QUFDM0JDLGVBQVMsRUFBRWQsWUFBWSxDQUFDZSxPQURHO0FBRTNCQyxXQUFLLEVBQUUsb0NBRm9CO0FBRzNCQyxZQUFNLEVBQUUsQ0FBQ25CLEtBQUssQ0FBQ0YsR0FBUCxFQUFZRSxLQUFLLENBQUNILEdBQWxCLENBSG1CO0FBSTNCRSxVQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFKZSxLQUFqQixDQUFaO0FBTUFlLE9BQUcsQ0FBQ00sVUFBSixDQUNFLElBQUlYLGdEQUFRLENBQUNZLGdCQUFiLENBQThCO0FBQzVCQyxxQkFBZSxFQUFFO0FBQ2ZDLDBCQUFrQixFQUFFO0FBREwsT0FEVztBQUk1QkMsdUJBQWlCLEVBQUU7QUFKUyxLQUE5QixDQURGO0FBUUFWLE9BQUcsQ0FBQ1csRUFBSixDQUFPLE1BQVAsRUFBZSxZQUFNO0FBQ25CeEIsY0FBUSxDQUFDO0FBQ1BILFdBQUcsRUFBRWdCLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQkMsR0FBaEIsQ0FBb0JDLE9BQXBCLENBQTRCLENBQTVCLENBREU7QUFFUC9CLFdBQUcsRUFBRWlCLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQjdCLEdBQWhCLENBQW9CK0IsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FGRTtBQUdQN0IsWUFBSSxFQUFFZSxHQUFHLENBQUNlLE9BQUosR0FBY0QsT0FBZCxDQUFzQixDQUF0QjtBQUhDLE9BQUQsQ0FBUjtBQUtELEtBTkQ7QUFPQWQsT0FBRyxDQUFDVyxFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFDcEIsQ0FBRCxFQUFPO0FBQ3JCTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsQ0FBQyxDQUFDeUIsTUFBZDtBQURxQixzQkFFQXpCLENBQUMsQ0FBQ3lCLE1BRkY7QUFBQSxVQUViSCxHQUZhLGFBRWJBLEdBRmE7QUFBQSxVQUVSOUIsR0FGUSxhQUVSQSxHQUZRO0FBR3JCSCxrQkFBWSxDQUFDRyxHQUFELEVBQU04QixHQUFOLENBQVo7QUFDRCxLQUpEO0FBS0QsR0E3QlEsRUE4QlQsRUE5QlMsQ0FBVDtBQWlDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWxDLFNBQWhCO0FBQTJCLFdBQU8sRUFBRVcsZ0JBQXBDO0FBQXNELE1BQUUsRUFBQyxjQUF6RDtBQUFBLDJCQUNFO0FBQUssUUFBRSxFQUFDLEtBQVI7QUFBYyxTQUFHLEVBQUVGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTFERDs7R0FBSVYsUTs7S0FBQUEsUTtBQTZESkEsUUFBUSxHQUFHdUMsaUVBQU0sQ0FBQ3ZDLFFBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrTkFBUjtBQXdCZ0JBLHVFQUFoQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwTW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuXG5cblxuLy8gY29uc3QgbWFwYm94QWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5NQVBfQUNDRVNTX1RPS0VOXG5jb25zdCBtYXBib3hBY2Nlc3NUb2tlbiA9IFwicGsuZXlKMUlqb2laWFJoWW1Gc2FXOXVaV3dpTENKaElqb2lZMnRvYm1reGNtcDVNREl4Y2pKMWNHVnRjbm94YlRSbmF5SjkuRjhGVXRwTzhGc1lKRlloV3hmQXIxUVwiXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZzsgXG4gIHVwZGF0ZUxvbkxhdDogYW55O1xuICBjbG9zZU1vZGFsOiBhbnk7XG59XG5cbmxldCBNYXBNb2RhbDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCB1cGRhdGVMb25MYXQsIGNsb3NlTW9kYWwgfSkgPT4ge1xuICBcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFxuICAgIHtcbiAgICAgIGxhdDogXCI3LjM2OTcyMlwiLFxuICAgICAgbG9uOiBcIjEyLjM1NDcyMlwiLFxuICAgICAgem9vbTogMC45XG4gICAgfSlcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwiY29udGFpbmVyTWFwXCIpIHtcbiAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH0gXG4gIH1cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBtYXBib3hBY2Nlc3NUb2tlblxuICAgIGNvbnNvbGUubG9nKHsgbWFwYm94QWNjZXNzVG9rZW4sIG1hcGJveGFjY2VzczogbWFwYm94Z2wuYWNjZXNzVG9rZW59KVxuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXIuY3VycmVudCxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICBjZW50ZXI6IFtzdGF0ZS5sb24sIHN0YXRlLmxhdF0sXG4gICAgICB6b29tOiBzdGF0ZS56b29tXG4gICAgfSk7XG4gICAgbWFwLmFkZENvbnRyb2woXG4gICAgICBuZXcgbWFwYm94Z2wuR2VvbG9jYXRlQ29udHJvbCh7XG4gICAgICAgIHBvc2l0aW9uT3B0aW9uczoge1xuICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhY2tVc2VyTG9jYXRpb246IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gICAgbWFwLm9uKCdtb3ZlJywgKCkgPT4ge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBsb246IG1hcC5nZXRDZW50ZXIoKS5sbmcudG9GaXhlZCg0KSxcbiAgICAgICAgbGF0OiBtYXAuZ2V0Q2VudGVyKCkubGF0LnRvRml4ZWQoNCksXG4gICAgICAgIHpvb206IG1hcC5nZXRab29tKCkudG9GaXhlZCgyKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWFwLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUubG5nTGF0KTtcbiAgICAgIGNvbnN0IHsgbG5nLCBsYXQgfSA9IGUubG5nTGF0O1xuICAgICAgdXBkYXRlTG9uTGF0KGxhdCwgbG5nKTtcbiAgICB9KVxuICB9LFxuICBbXSlcbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGlkPVwiY29udGFpbmVyTWFwXCI+XG4gICAgICA8ZGl2IGlkPVwibWFwXCIgcmVmPXttYXBDb250YWluZXJ9PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbk1hcE1vZGFsID0gc3R5bGVkKE1hcE1vZGFsKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICAvKiBvcGFjaXR5OiAuOTsgKi9cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICAjbWFwe1xuICAgIHdpZHRoOiA2NSU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgfVxuXG5gXG5cbmV4cG9ydCBkZWZhdWx0ICBNYXBNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapModal.tsx\n");

/***/ })

})