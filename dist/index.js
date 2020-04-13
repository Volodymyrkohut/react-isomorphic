/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server/index.js");


express__WEBPACK_IMPORTED_MODULE_0___default()().use(function (req, res) {
  return _server__WEBPACK_IMPORTED_MODULE_1__["default"].handle(req, res);
}).listen(process.env.PORT || 8080, function () {
  console.log("React-isomorphic App is running");
});

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middleware_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/html */ "./src/server/middleware/html.js");
/* harmony import */ var _middleware_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/store */ "./src/server/middleware/store.js");
/* harmony import */ var _middleware_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/render */ "./src/server/middleware/render.js");





var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use("/public", express__WEBPACK_IMPORTED_MODULE_1___default.a["static"](path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, 'public')));
app.use(Object(_middleware_html__WEBPACK_IMPORTED_MODULE_2__["default"])());
app.use(Object(_middleware_store__WEBPACK_IMPORTED_MODULE_3__["default"])()); // must come before render middleware

app.use(Object(_middleware_render__WEBPACK_IMPORTED_MODULE_4__["default"])());
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/server/middleware/html.js":
/*!***************************************!*\
  !*** ./src/server/middleware/html.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);



var htmlMiddleware = function htmlMiddleware() {
  return function (req, res, next) {
    var publicPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '/public');
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile("".concat(publicPath, "/index.html"), 'utf8', function (err, html) {
      if (!err) {
        req.html = html;
        next();
      } else {
        res.status(500).send('Error parsing index.html');
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (htmlMiddleware);

/***/ }),

/***/ "./src/server/middleware/render.js":
/*!*****************************************!*\
  !*** ./src/server/middleware/render.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ "escape-string-regexp");
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/App.js */ "./src/shared/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_store_actions_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/store/actions/init */ "./src/shared/store/actions/init.js");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.js");










var renderMiddleware = function renderMiddleware() {
  return function (req, res) {
    var url = req.url,
        store = req.store,
        path = req.path;
    var html = req.html;
    var context = {};
    var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_8__["default"].find(function (route) {
      return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(path, route);
    }) || {};
    var fetchForEachPage = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(store.dispatch, url) : Promise.resolve(null); // console.log("fetchForEachPage",fetchForEachPage)

    var initData = store.dispatch(Object(_shared_store_actions_init__WEBPACK_IMPORTED_MODULE_7__["actionInitData"])());
    var wholePromise = Promise.all([initData, fetchForEachPage]);
    wholePromise.then(function () {
      var htmlContent = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: store
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
        location: url,
        context: context
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
      var htmlReplacements = {
        HTML_CONTENT: htmlContent,
        PRELOADED_STATE: serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState(), {
          isJSON: true
        })
      };
      Object.keys(htmlReplacements).forEach(function (key) {
        var value = htmlReplacements[key];
        html = html.replace(new RegExp('__' + escape_string_regexp__WEBPACK_IMPORTED_MODULE_0___default()(key) + '__', 'g'), value);
      });

      if (context.url) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
        res.redirect(302, context.url);
      } else {
        res.send(html);
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderMiddleware);

/***/ }),

/***/ "./src/server/middleware/store.js":
/*!****************************************!*\
  !*** ./src/server/middleware/store.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_store_reducers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/store/reducers/index.js */ "./src/shared/store/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);




var configureStore = function configureStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_shared_store_reducers_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

var storeMiddleware = function storeMiddleware() {
  return function (req, res, next) {
    req.store = configureStore();
    next();
  };
};

/* harmony default export */ __webpack_exports__["default"] = (storeMiddleware);

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions/init */ "./src/shared/store/actions/init.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var App = function App(_ref) {
  var init = _ref.init,
      actionGetInitialData = _ref.actionGetInitialData,
      restProps = _objectWithoutProperties(_ref, ["init", "actionGetInitialData"]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    actionGetInitialData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Redux data: ", init.data, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/"
  }, "Main")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/posts"
  }, "posts")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref2) {
    var path = _ref2.path,
        exact = _ref2.exact,
        Comp = _ref2.component,
        rest = _objectWithoutProperties(_ref2, ["path", "exact", "component"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path,
      exact: exact,
      render: function render(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, _extends({}, props, rest, restProps));
      }
    });
  })));
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var init = _ref3.init;
  return {
    init: init
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actionGetInitialData: function actionGetInitialData() {
      dispatch(Object(_store_actions_init__WEBPACK_IMPORTED_MODULE_3__["actionInitData"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/shared/components/About/About.js":
/*!**********************************************!*\
  !*** ./src/shared/components/About/About.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "about page");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/shared/components/Index/Index.js":
/*!**********************************************!*\
  !*** ./src/shared/components/Index/Index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "index page");
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/shared/components/Post/Post.js":
/*!********************************************!*\
  !*** ./src/shared/components/Post/Post.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/init */ "./src/shared/store/actions/init.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);





var Post = function Post(_ref) {
  var _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post,
      fetchPost = _ref.fetchPost,
      match = _ref.match;
  var id = match.params.id;
  var _post$data = post.data,
      data = _post$data === void 0 ? {} : _post$data;
  var body = data.body,
      title = data.title;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPost(id);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, body));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var post = _ref2.post;
  return {
    post: post
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPost: function fetchPost(id) {
      dispatch(Object(_store_actions_init__WEBPACK_IMPORTED_MODULE_2__["actionFetchPost"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Post)));

/***/ }),

/***/ "./src/shared/components/Posts/Posts.js":
/*!**********************************************!*\
  !*** ./src/shared/components/Posts/Posts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/init */ "./src/shared/store/actions/init.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);





var Post = function Post(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? {} : _ref$posts,
      fetchPosts = _ref.fetchPosts;
  var _posts$data = posts.data,
      data = _posts$data === void 0 ? [] : _posts$data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.map(function (post) {
    var title = post.title,
        id = post.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/posts/".concat(id)
    }, title));
  })));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var posts = _ref2.posts;
  return {
    posts: posts
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: function fetchPosts() {
      dispatch(Object(_store_actions_init__WEBPACK_IMPORTED_MODULE_2__["actionFetchPosts"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Post));

/***/ }),

/***/ "./src/shared/helpers/network.js":
/*!***************************************!*\
  !*** ./src/shared/helpers/network.js ***!
  \***************************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // fetch data

var fetchData = function fetchData(url, options) {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, options).then(function (result) {
      resolve(result);
    })["catch"](function (error) {
      reject(error);
    });
  });
};



/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_actions_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions/init */ "./src/shared/store/actions/init.js");
/* harmony import */ var _components_Posts_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Posts/Posts */ "./src/shared/components/Posts/Posts.js");
/* harmony import */ var _components_Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post/Post */ "./src/shared/components/Post/Post.js");
/* harmony import */ var _components_Index_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Index/Index */ "./src/shared/components/Index/Index.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/About/About */ "./src/shared/components/About/About.js");





var routes = [{
  path: '/',
  exact: true,
  component: _components_Index_Index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: '/about',
  exact: true,
  component: _components_About_About__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/posts',
  exact: true,
  component: _components_Posts_Posts__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchInitialData: function fetchInitialData(dispatch) {
    return dispatch(Object(_store_actions_init__WEBPACK_IMPORTED_MODULE_0__["actionFetchPosts"])());
  }
}, {
  path: '/posts/:id',
  exact: true,
  component: _components_Post_Post__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetchInitialData: function fetchInitialData(dispatch, url) {
    var id = url.split('/').pop();
    return dispatch(Object(_store_actions_init__WEBPACK_IMPORTED_MODULE_0__["actionFetchPost"])(id));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/shared/store/actionTypes.js":
/*!*****************************************!*\
  !*** ./src/shared/store/actionTypes.js ***!
  \*****************************************/
/*! exports provided: INIT_DATA, FETCH_POST, FETCH_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_DATA", function() { return INIT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST", function() { return FETCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS", function() { return FETCH_POSTS; });
var INIT_DATA = "INIT_DATA";
var FETCH_POST = "FETCH_POST";
var FETCH_POSTS = "FETCH_POSTS";

/***/ }),

/***/ "./src/shared/store/actions/init.js":
/*!******************************************!*\
  !*** ./src/shared/store/actions/init.js ***!
  \******************************************/
/*! exports provided: actionInitData, actionFetchPost, actionFetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInitData", function() { return actionInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionFetchPost", function() { return actionFetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionFetchPosts", function() { return actionFetchPosts; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/shared/store/actionTypes.js");
/* harmony import */ var _helpers_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/network */ "./src/shared/helpers/network.js");


var actionInitData = function actionInitData() {
  return function (dispatch) {
    return Object(_helpers_network__WEBPACK_IMPORTED_MODULE_1__["fetchData"])("https://jsonplaceholder.typicode.com/posts/1").then(function (data) {
      var title = data.data.title;
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INIT_DATA"],
        data: title
      });
    })["catch"](function (error) {
      console.log("error", error);
    });
  };
};
var actionFetchPost = function actionFetchPost(id) {
  return function (dispatch) {
    return Object(_helpers_network__WEBPACK_IMPORTED_MODULE_1__["fetchData"])("https://jsonplaceholder.typicode.com/posts/".concat(id)).then(function (data) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POST"],
        data: data.data
      });
    })["catch"](function (error) {
      console.log("post", error);
    });
  };
};
var actionFetchPosts = function actionFetchPosts() {
  return function (dispatch) {
    return Object(_helpers_network__WEBPACK_IMPORTED_MODULE_1__["fetchData"])("https://jsonplaceholder.typicode.com/posts").then(function (data) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POSTS"],
        data: data.data
      });
    })["catch"](function (error) {
      console.log("post", error);
    });
  };
};

/***/ }),

/***/ "./src/shared/store/reducers/index.js":
/*!********************************************!*\
  !*** ./src/shared/store/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/shared/store/reducers/init.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ "./src/shared/store/reducers/posts.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./src/shared/store/reducers/post.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  init: _init__WEBPACK_IMPORTED_MODULE_1__["default"],
  posts: _posts__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/shared/store/reducers/init.js":
/*!*******************************************!*\
  !*** ./src/shared/store/reducers/init.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/shared/store/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {};

var init = function init() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INIT_DATA"]:
      return _objectSpread({}, state, {
        data: data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/shared/store/reducers/post.js":
/*!*******************************************!*\
  !*** ./src/shared/store/reducers/post.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/shared/store/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {};

var post = function post() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POST"]:
      return _objectSpread({}, state, {
        data: data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (post);

/***/ }),

/***/ "./src/shared/store/reducers/posts.js":
/*!********************************************!*\
  !*** ./src/shared/store/reducers/posts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/shared/store/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {};

var posts = function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POSTS"]:
      return _objectSpread({}, state, {
        data: data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "escape-string-regexp":
/*!***************************************!*\
  !*** external "escape-string-regexp" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("escape-string-regexp");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map