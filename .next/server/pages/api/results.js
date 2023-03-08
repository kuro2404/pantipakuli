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
exports.id = "pages/api/results";
exports.ids = ["pages/api/results"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/results.js":
/*!******************************!*\
  !*** ./pages/api/results.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    try {\n        // Read the data from results.json\n        const dataPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"results.json\");\n        const jsonData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(dataPath, \"utf-8\");\n        const results = JSON.parse(jsonData);\n        // Find the result for the given drawTime\n        const { drawTime  } = req.query;\n        const result = results.find((r)=>r.drawTime === drawTime);\n        if (!result) {\n            res.status(404).json({\n                message: \"Result not found\"\n            });\n        } else {\n            res.status(200).json({\n                couponNum: result.couponNum\n            });\n        }\n    } catch (err) {\n        console.log(\"Error reading file:\", err);\n        res.status(500).json({\n            message: \"Error reading file\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzdWx0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQjtBQUNJO0FBRVQsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNQyxXQUFXSixnREFBUyxDQUFDTSxRQUFRQyxHQUFHLElBQUksUUFBUTtRQUNsRCxNQUFNQyxXQUFXVCxzREFBZSxDQUFDSyxVQUFVO1FBQzNDLE1BQU1NLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0o7UUFFM0IseUNBQXlDO1FBQ3pDLE1BQU0sRUFBRUssU0FBUSxFQUFFLEdBQUdYLElBQUlZLEtBQUs7UUFDOUIsTUFBTUMsU0FBU0wsUUFBUU0sSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVKLFFBQVEsS0FBS0E7UUFFbEQsSUFBSSxDQUFDRSxRQUFRO1lBQ1haLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBbUI7UUFDckQsT0FBTztZQUNMakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsV0FBV04sT0FBT00sU0FBUztZQUFDO1FBQ3JELENBQUM7SUFDSCxFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7UUFDbkNuQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3Jlc3VsdHMuanM/OWFlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgLy8gUmVhZCB0aGUgZGF0YSBmcm9tIHJlc3VsdHMuanNvblxyXG4gICAgY29uc3QgZGF0YVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAncmVzdWx0cy5qc29uJyk7XHJcbiAgICBjb25zdCBqc29uRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhkYXRhUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgcmVzdWx0IGZvciB0aGUgZ2l2ZW4gZHJhd1RpbWVcclxuICAgIGNvbnN0IHsgZHJhd1RpbWUgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHMuZmluZCgocikgPT4gci5kcmF3VGltZSA9PT0gZHJhd1RpbWUpO1xyXG5cclxuICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1Jlc3VsdCBub3QgZm91bmQnIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3Vwb25OdW06IHJlc3VsdC5jb3Vwb25OdW0gfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBmaWxlOicsIGVycik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGZpbGUnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGFQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJqc29uRGF0YSIsInJlYWRGaWxlU3luYyIsInJlc3VsdHMiLCJKU09OIiwicGFyc2UiLCJkcmF3VGltZSIsInF1ZXJ5IiwicmVzdWx0IiwiZmluZCIsInIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvdXBvbk51bSIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/results.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/results.js"));
module.exports = __webpack_exports__;

})();