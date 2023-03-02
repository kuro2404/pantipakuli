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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/results.js":
/*!******************************!*\
  !*** ./pages/api/results.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Set up the connection URL and database name\n    const uri = \"mongodb+srv://kuro:kuro@cluster0.3t7sasr.mongodb.net/?retryWrites=true&w=majority\";\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {\n        useUnifiedTopology: true\n    });\n    const dbName = \"test\";\n    // Connect to the database\n    try {\n        await client.connect();\n        const db = client.db(dbName);\n        const collection = db.collection(\"fetchResults\");\n        // Extract the draw time from the request payload\n        const { drawTime  } = req.query;\n        // Find the document with the corresponding draw time\n        const result = await collection.findOne({\n            drawTime: {\n                $eq: drawTime\n            }\n        });\n        // If a document is found, return the winning number\n        if (result) {\n            res.status(200).json({\n                winningNumber: result.winningNumber\n            });\n        } else {\n            res.status(404).json({\n                message: `No winning number found for draw time: ${drawTime}`\n            });\n        }\n    } catch (err) {\n        console.log(\"Error connecting to database:\", err);\n        res.status(500).json({\n            message: \"Error connecting to database\"\n        });\n    } finally{\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzdWx0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsOENBQThDO0lBQzlDLE1BQU1DLE1BQU1DLG1GQUF1QjtJQUNuQyxNQUFNRyxTQUFTLElBQUlSLGdEQUFXQSxDQUFDSSxLQUFLO1FBQUVLLG9CQUFvQixJQUFJO0lBQUM7SUFDL0QsTUFBTUMsU0FBUztJQUVmLDBCQUEwQjtJQUMxQixJQUFJO1FBQ0YsTUFBTUYsT0FBT0csT0FBTztRQUNwQixNQUFNQyxLQUFLSixPQUFPSSxFQUFFLENBQUNGO1FBQ3JCLE1BQU1HLGFBQWFELEdBQUdDLFVBQVUsQ0FBQztRQUVqQyxpREFBaUQ7UUFDakQsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1osSUFBSWEsS0FBSztRQUU5QixxREFBcUQ7UUFDckQsTUFBTUMsU0FBUyxNQUFNSCxXQUFXSSxPQUFPLENBQUM7WUFBRUgsVUFBVTtnQkFBRUksS0FBS0o7WUFBUztRQUFFO1FBRXRFLG9EQUFvRDtRQUNwRCxJQUFJRSxRQUFRO1lBQ1ZiLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxlQUFlTCxPQUFPSyxhQUFhO1lBQUM7UUFDN0QsT0FBTztZQUNMbEIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLFNBQVMsQ0FBQyx1Q0FBdUMsRUFBRVIsU0FBUyxDQUFDO1lBQUM7UUFDdkYsQ0FBQztJQUVILEVBQUUsT0FBT1MsS0FBSztRQUNaQyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDRjtRQUM3Q3BCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBK0I7SUFDakUsU0FBVTtRQUNSLE1BQU1kLE9BQU9rQixLQUFLO0lBQ3BCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9yZXN1bHRzLmpzPzlhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBTZXQgdXAgdGhlIGNvbm5lY3Rpb24gVVJMIGFuZCBkYXRhYmFzZSBuYW1lXHJcbiAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgeyB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSk7XHJcbiAgY29uc3QgZGJOYW1lID0gJ3Rlc3QnO1xyXG5cclxuICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoZGJOYW1lKTtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdmZXRjaFJlc3VsdHMnKTtcclxuXHJcbiAgICAvLyBFeHRyYWN0IHRoZSBkcmF3IHRpbWUgZnJvbSB0aGUgcmVxdWVzdCBwYXlsb2FkXHJcbiAgICBjb25zdCB7IGRyYXdUaW1lIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBkcmF3IHRpbWVcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7IGRyYXdUaW1lOiB7ICRlcTogZHJhd1RpbWUgfSB9KTtcclxuICAgXHJcbiAgICAvLyBJZiBhIGRvY3VtZW50IGlzIGZvdW5kLCByZXR1cm4gdGhlIHdpbm5pbmcgbnVtYmVyXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgd2lubmluZ051bWJlcjogcmVzdWx0Lndpbm5pbmdOdW1iZXIgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGBObyB3aW5uaW5nIG51bWJlciBmb3VuZCBmb3IgZHJhdyB0aW1lOiAke2RyYXdUaW1lfWAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ0Vycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgZXJyKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UnIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNsaWVudCIsInVzZVVuaWZpZWRUb3BvbG9neSIsImRiTmFtZSIsImNvbm5lY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkcmF3VGltZSIsInF1ZXJ5IiwicmVzdWx0IiwiZmluZE9uZSIsIiRlcSIsInN0YXR1cyIsImpzb24iLCJ3aW5uaW5nTnVtYmVyIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/results.js\n");

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