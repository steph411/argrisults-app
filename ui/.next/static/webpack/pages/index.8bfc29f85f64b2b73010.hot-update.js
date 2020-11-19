webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/chart.ts":
/*!************************!*\
  !*** ./utils/chart.ts ***!
  \************************/
/*! exports provided: drawChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawChart\", function() { return drawChart; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\nvar drawChart = function drawChart(formattedData, chartRef) {\n  var hour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var labels = formattedData.map(function (el) {\n    return el.label;\n  });\n  var values = formattedData.map(function (el) {\n    return el.value;\n  });\n  var containerHeight = chartRef.current.clientHeight;\n  var containerWidth = chartRef.current.clientWidth;\n  console.log({\n    containerWidth: containerWidth,\n    containerHeight: containerHeight\n  });\n  var svg = d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](chartRef.current).append(\"svg\") // .attr(\"preserveAspectRatio\", \"xMinYMin meet\")\n  // .attr(\"viewBox\", \"0 0 300 300\")\n  .attr(\"width\", containerWidth).attr(\"height\", containerHeight).classed(\"svg-content\", true);\n  var selection = svg.selectAll(\"rect\").data(values);\n  var yScale = d3__WEBPACK_IMPORTED_MODULE_0__[\"scaleLinear\"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_0__[\"max\"](values)]) // .range([containerHeight, 0])\n  .range([0, containerHeight - 50]); // add axis and labels\n\n  var xDateScale = d3__WEBPACK_IMPORTED_MODULE_0__[\"scalePoint\"]().domain(labels).range([0, containerWidth]);\n  svg.append(\"g\").attr(\"transform\", \"translate(0, 0)\") // This controls the vertical position of the Axis\n  .call(d3__WEBPACK_IMPORTED_MODULE_0__[\"axisBottom\"](xDateScale));\n  var y_axis = d3__WEBPACK_IMPORTED_MODULE_0__[\"axisLeft\"]().scale(yScale);\n  svg.append(\"g\").attr(\"transform\", \"translate(0, 300)\").call(y_axis);\n  selection.transition().duration(300).attr(\"height\", function (d) {\n    return yScale(d);\n  }).attr(\"y\", function (d) {\n    return containerHeight - yScale(d);\n  });\n  selection.enter().append(\"rect\").attr(\"x\", function (d, i) {\n    return i * 33;\n  }).attr(\"y\", function (d) {\n    return containerHeight;\n  }).attr(\"width\", 30).attr(\"height\", 0).attr(\"fill\", \"steelblue\").transition().duration(300).attr(\"height\", function (d) {\n    return yScale(d);\n  }).attr(\"y\", function (d) {\n    return containerHeight - yScale(d);\n  });\n  selection.exit().transition().duration(400).attr(\"y\", function (d) {\n    return containerHeight;\n  }).attr(\"height\", 0).remove();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2hhcnQudHM/NTQxZCJdLCJuYW1lcyI6WyJkcmF3Q2hhcnQiLCJmb3JtYXR0ZWREYXRhIiwiY2hhcnRSZWYiLCJob3VyIiwibGFiZWxzIiwibWFwIiwiZWwiLCJsYWJlbCIsInZhbHVlcyIsInZhbHVlIiwiY29udGFpbmVySGVpZ2h0IiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjb25zb2xlIiwibG9nIiwic3ZnIiwiZDMiLCJhcHBlbmQiLCJhdHRyIiwiY2xhc3NlZCIsInNlbGVjdGlvbiIsInNlbGVjdEFsbCIsImRhdGEiLCJ5U2NhbGUiLCJkb21haW4iLCJyYW5nZSIsInhEYXRlU2NhbGUiLCJjYWxsIiwieV9heGlzIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkIiwiZW50ZXIiLCJpIiwiZXhpdCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFLTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxhQUFELEVBQWdCQyxRQUFoQixFQUF3QztBQUFBLE1BQWRDLElBQWMsdUVBQVQsSUFBUztBQUcvRCxNQUFNQyxNQUFNLEdBQUdILGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFBQyxFQUFFO0FBQUEsV0FBSUEsRUFBRSxDQUFDQyxLQUFQO0FBQUEsR0FBcEIsQ0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBR1AsYUFBYSxDQUFDSSxHQUFkLENBQWtCLFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNHLEtBQVA7QUFBQSxHQUFwQixDQUFmO0FBQ0EsTUFBTUMsZUFBZSxHQUFHUixRQUFRLENBQUNTLE9BQVQsQ0FBaUJDLFlBQXpDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHWCxRQUFRLENBQUNTLE9BQVQsQ0FBaUJHLFdBQXhDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILGtCQUFj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dCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5cblxuXG5leHBvcnQgY29uc3QgZHJhd0NoYXJ0ID0gKGZvcm1hdHRlZERhdGEsIGNoYXJ0UmVmLCBob3VyPXRydWUpID0+IHtcbiAgXG4gIFxuICBjb25zdCBsYWJlbHMgPSBmb3JtYXR0ZWREYXRhLm1hcChlbCA9PiBlbC5sYWJlbClcbiAgY29uc3QgdmFsdWVzID0gZm9ybWF0dGVkRGF0YS5tYXAoZWwgPT4gZWwudmFsdWUpXG4gIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNoYXJ0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0XG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aFxuICBjb25zb2xlLmxvZyh7Y29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodH0pXG4gIFxuICBsZXQgc3ZnID0gZDMuc2VsZWN0KGNoYXJ0UmVmLmN1cnJlbnQpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC8vIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAvLyAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMzAwIDMwMFwiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgY29udGFpbmVyV2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgY29udGFpbmVySGVpZ2h0KVxuICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSkgIFxuICBcbiAgbGV0IHNlbGVjdGlvbiA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEodmFsdWVzKTtcbiAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKFswLCBkMy5tYXgodmFsdWVzKV0pXG4gICAgLy8gLnJhbmdlKFtjb250YWluZXJIZWlnaHQsIDBdKVxuICAgIC5yYW5nZShbMCwgY29udGFpbmVySGVpZ2h0IC0gNTBdKTtcbiBcbiAgLy8gYWRkIGF4aXMgYW5kIGxhYmVsc1xuXG5cblxuICBsZXQgeERhdGVTY2FsZSA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgLmRvbWFpbihsYWJlbHMpXG4gICAgICAucmFuZ2UoWzAsIGNvbnRhaW5lcldpZHRoXSlcbiAgc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLCAwKVwiKSAgICAgIC8vIFRoaXMgY29udHJvbHMgdGhlIHZlcnRpY2FsIHBvc2l0aW9uIG9mIHRoZSBBeGlzXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4RGF0ZVNjYWxlKSk7XG4gIFxuXG4gIFxuICBsZXQgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgIC5zY2FsZSh5U2NhbGUpO1xuXG4gIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwgMzAwKVwiKVxuICAgIC5jYWxsKHlfYXhpcyk7XG4gIFxuICBzZWxlY3Rpb25cbiAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbigzMDApXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4geVNjYWxlKGQpKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiBjb250YWluZXJIZWlnaHQgLSB5U2NhbGUoZCkpXG4gIFxuICBzZWxlY3Rpb25cbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJ4XCIsIChkLCBpKSA9PiBpICogMzMpXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiBjb250YWluZXJIZWlnaHQpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAzMClcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcInN0ZWVsYmx1ZVwiKVxuICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMzAwKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB5U2NhbGUoZCkpXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiBjb250YWluZXJIZWlnaHQgLSB5U2NhbGUoZCkpXG4gIFxuXG4gIHNlbGVjdGlvblxuICAgIC5leGl0KClcbiAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiBjb250YWluZXJIZWlnaHQpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgLnJlbW92ZSgpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/chart.ts\n");

/***/ })

})