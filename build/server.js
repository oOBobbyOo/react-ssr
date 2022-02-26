/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/user\"\n  }, \"User\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/count\"\n  }, \"Count\"))));\n}\n\n//# sourceURL=webpack://react-ssr/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/pages/Count/index.js":
/*!**********************************!*\
  !*** ./src/pages/Count/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Count)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducer */ \"./src/pages/Count/store/reducer.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/pages/Count/store/actions.js\");\n\n\n\n\nfunction Count() {\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, _store_reducer__WEBPACK_IMPORTED_MODULE_2__.defaultState),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      count = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Count\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, count.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.increment)());\n    }\n  }, \"Increment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.decrement)());\n    }\n  }, \"Decrement\"));\n}\n\n//# sourceURL=webpack://react-ssr/./src/pages/Count/index.js?");

/***/ }),

/***/ "./src/pages/Count/store/actions.js":
/*!******************************************!*\
  !*** ./src/pages/Count/store/actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/pages/Count/store/constants.js\");\n\nvar increment = function increment() {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__.INCREMENT\n  };\n};\nvar decrement = function decrement() {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__.DECREMENT\n  };\n};\n\n//# sourceURL=webpack://react-ssr/./src/pages/Count/store/actions.js?");

/***/ }),

/***/ "./src/pages/Count/store/constants.js":
/*!********************************************!*\
  !*** ./src/pages/Count/store/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INCREMENT\": () => (/* binding */ INCREMENT),\n/* harmony export */   \"DECREMENT\": () => (/* binding */ DECREMENT)\n/* harmony export */ });\nvar INCREMENT = 'COUNT/INCREMENT';\nvar DECREMENT = 'COUNT/DECREMENT';\n\n//# sourceURL=webpack://react-ssr/./src/pages/Count/store/constants.js?");

/***/ }),

/***/ "./src/pages/Count/store/reducer.js":
/*!******************************************!*\
  !*** ./src/pages/Count/store/reducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultState\": () => (/* binding */ defaultState),\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/pages/Count/store/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar defaultState = {\n  count: 0\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__.INCREMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        count: state.count + 1\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__.DECREMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        count: state.count - 1\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://react-ssr/./src/pages/Count/store/reducer.js?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/pages/Home/store/actions.js\");\n\n\n\n\nfunction Home(_ref) {\n  var getTodosDispath = _ref.getTodosDispath,\n      todos = _ref.todos;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    getTodosDispath();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), todos && todos.map(function (todo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: todo.id\n    }, todo.title);\n  }));\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    todos: state.home.todos\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTodosDispath: function getTodosDispath() {\n      return dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.getTodos)());\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home/index.js?");

/***/ }),

/***/ "./src/pages/Home/store/actions.js":
/*!*****************************************!*\
  !*** ./src/pages/Home/store/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/pages/Home/store/constants.js\");\n\nvar getTodos = function getTodos() {\n  return function (dispatch) {\n    fetch('https://jsonplaceholder.typicode.com/todos').then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_0__.GET_TODOS,\n        data: json\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home/store/actions.js?");

/***/ }),

/***/ "./src/pages/Home/store/constants.js":
/*!*******************************************!*\
  !*** ./src/pages/Home/store/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_TODOS\": () => (/* binding */ GET_TODOS)\n/* harmony export */ });\nvar GET_TODOS = 'HOME/GET_TODOS';\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home/store/constants.js?");

/***/ }),

/***/ "./src/pages/Home/store/index.js":
/*!***************************************!*\
  !*** ./src/pages/Home/store/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/pages/Home/store/reducer.js\");\n\n\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home/store/index.js?");

/***/ }),

/***/ "./src/pages/Home/store/reducer.js":
/*!*****************************************!*\
  !*** ./src/pages/Home/store/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/pages/Home/store/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar defaultState = {\n  todos: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_TODOS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        todos: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home/store/reducer.js?");

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotFound)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"NotFound\");\n}\n\n//# sourceURL=webpack://react-ssr/./src/pages/NotFound/index.js?");

/***/ }),

/***/ "./src/pages/User/index.js":
/*!*********************************!*\
  !*** ./src/pages/User/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/pages/User/store/actions.js\");\n\n\n\n\nfunction User(_ref) {\n  var getUsersList = _ref.getUsersList,\n      users = _ref.users;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    getUsersList();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"User\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), users && users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: user.id\n    }, user.name);\n  }));\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    users: state.user.users\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  getUsersList: _store_actions__WEBPACK_IMPORTED_MODULE_2__.getUsersList\n})(User));\n\n//# sourceURL=webpack://react-ssr/./src/pages/User/index.js?");

/***/ }),

/***/ "./src/pages/User/store/actions.js":
/*!*****************************************!*\
  !*** ./src/pages/User/store/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeUserList\": () => (/* binding */ changeUserList),\n/* harmony export */   \"getUsersList\": () => (/* binding */ getUsersList)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/pages/User/store/constants.js\");\n\nvar changeUserList = function changeUserList(data) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__.GET_USERS,\n    playload: data\n  };\n};\nvar getUsersList = function getUsersList() {\n  return function (dispatch) {\n    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      dispatch(changeUserList(json));\n    });\n  };\n};\n\n//# sourceURL=webpack://react-ssr/./src/pages/User/store/actions.js?");

/***/ }),

/***/ "./src/pages/User/store/constants.js":
/*!*******************************************!*\
  !*** ./src/pages/User/store/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_USERS\": () => (/* binding */ GET_USERS)\n/* harmony export */ });\nvar GET_USERS = 'USER/GET_USERS';\n\n//# sourceURL=webpack://react-ssr/./src/pages/User/store/constants.js?");

/***/ }),

/***/ "./src/pages/User/store/index.js":
/*!***************************************!*\
  !*** ./src/pages/User/store/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/pages/User/store/reducer.js\");\n\n\n\n//# sourceURL=webpack://react-ssr/./src/pages/User/store/index.js?");

/***/ }),

/***/ "./src/pages/User/store/reducer.js":
/*!*****************************************!*\
  !*** ./src/pages/User/store/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/pages/User/store/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar defaultState = {\n  users: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_USERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        users: action.playload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/pages/User/store/reducer.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home/index.js\");\n/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/User */ \"./src/pages/User/index.js\");\n/* harmony import */ var _pages_Count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Count */ \"./src/pages/Count/index.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFound */ \"./src/pages/NotFound/index.js\");\n\n\n\n\nvar routes = [{\n  path: '/',\n  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/user',\n  component: _pages_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/count',\n  component: _pages_Count__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '*',\n  component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://react-ssr/./src/routes/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n    store: (0,_store__WEBPACK_IMPORTED_MODULE_7__.getServerStore)()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]))));\n  var initialState = JSON.stringify(JSON.parse(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()((0,_store__WEBPACK_IMPORTED_MODULE_7__.getServerStore)().getState())));\n  res.send(\"\\n  \\t<!DOCTYPE html>\\n  \\t<html lang=\\\"en\\\">\\n  \\t\\t<head>\\n  \\t\\t\\t<meta charset=\\\"UTF-8\\\" />\\n  \\t\\t\\t<meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n  \\t\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n  \\t\\t\\t<title>React ssr</title>\\n  \\t\\t</head>\\n  \\t\\t<body>\\n  \\t\\t\\t<div id=\\\"root\\\">\".concat(content, \"</div>\\n\\t\\t\\t\\t<script>window.INITIAL_STATE = \").concat(initialState, \" </script>\\n  \\t\\t\\t<script src=\\\"./client.js\\\"></script>\\n  \\t\\t</body>\\n  \\t</html>\\n  \"));\n});\napp.listen(9000, function () {\n  console.log('启动成功！');\n});\n\n//# sourceURL=webpack://react-ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore),\n/* harmony export */   \"getServerStore\": () => (/* binding */ getServerStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.js\");\n\n\n //客户端的store创建函数\n\nvar getClientStore = function getClientStore() {\n  var defaultState = window.INITIAL_STATE ? window.INITIAL_STATE : {};\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], defaultState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n}; //服务端的store创建函数\n\nvar getServerStore = function getServerStore() {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n};\n\n//# sourceURL=webpack://react-ssr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home/store */ \"./src/pages/Home/store/index.js\");\n/* harmony import */ var _pages_User_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/User/store */ \"./src/pages/User/store/index.js\");\n\n\n\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  home: _pages_Home_store__WEBPACK_IMPORTED_MODULE_1__.reducer,\n  user: _pages_User_store__WEBPACK_IMPORTED_MODULE_2__.reducer,\n  count: _pages_User_store__WEBPACK_IMPORTED_MODULE_2__.reducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://react-ssr/./src/store/reducer.js?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;