module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0i/h":
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./assets/logo-white.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 0h41.708v8.41H12.973c-1.541 0-2.79 1.092-2.79 2.439v25.598H0V0zm20.087 36.447h-9.904v5.973c0 1.346 1.249 2.438 2.79 2.438h7.114V54h41.707V17.553h-9.903v-6.704c0-1.347-1.25-2.438-2.79-2.438h-7.393v9.142H20.087v18.894zm21.62-18.894v18.894h-21.62v8.41H49.1c1.54 0 2.79-1.09 2.79-2.437V17.553H41.708z",
  fill: "#fff"
});

var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M76.505 12.36h-5.622l-1.072 2.268h-2.872l5.397-10.581h2.768l5.414 10.58h-2.94l-1.073-2.267zm-.882-1.859l-1.92-4.05-1.92 4.05h3.84zm15.476-4.005v6.771c0 1.492-.444 2.6-1.332 3.326-.888.725-2.185 1.088-3.892 1.088-.9 0-1.753-.096-2.56-.287-.807-.192-1.476-.469-2.006-.832l1.072-1.693c.392.283.888.504 1.488.665.6.172 1.199.257 1.799.257.934 0 1.62-.186 2.058-.559.45-.363.674-.917.674-1.662v-.348c-.703.675-1.683 1.013-2.94 1.013a5.656 5.656 0 01-2.352-.484 4.176 4.176 0 01-1.678-1.39c-.415-.595-.623-1.28-.623-2.056s.208-1.462.623-2.056a4.064 4.064 0 011.678-1.376 5.51 5.51 0 012.352-.498c1.35 0 2.375.388 3.079 1.164V6.496h2.56zM85.996 12.3c.715 0 1.297-.182 1.747-.544a1.78 1.78 0 00.692-1.451c0-.595-.23-1.074-.692-1.436-.45-.373-1.032-.56-1.747-.56-.715 0-1.303.187-1.764.56-.461.362-.692.841-.692 1.436 0 .594.23 1.078.692 1.45.461.363 1.05.545 1.764.545zm10.191-4.731c.323-.393.756-.69 1.298-.892.553-.202 1.188-.302 1.902-.302V8.55c-.3-.02-.501-.03-.605-.03-.772 0-1.378.191-1.816.574-.438.373-.657.938-.657 1.693v3.84H93.61V6.495h2.577v1.073zm4.805-1.073h2.698v8.131h-2.698V6.496zm1.349-1.134c-.496 0-.899-.126-1.211-.378-.311-.252-.467-.564-.467-.937 0-.373.156-.685.467-.937.312-.252.715-.378 1.211-.378.496 0 .899.12 1.211.363.311.242.467.544.467.907 0 .393-.156.72-.467.982-.312.252-.715.378-1.211.378zm6.984 9.386c-.773 0-1.528-.08-2.266-.241-.738-.172-1.326-.383-1.764-.635l.899-1.693c.416.232.917.423 1.505.574a7.406 7.406 0 001.73.212c1.141 0 1.712-.247 1.712-.74 0-.232-.155-.399-.467-.5-.311-.1-.79-.186-1.435-.256-.761-.101-1.39-.217-1.886-.348a3.082 3.082 0 01-1.297-.696c-.358-.332-.536-.806-.536-1.42 0-.514.167-.968.501-1.36.346-.404.842-.716 1.488-.938.657-.221 1.43-.332 2.318-.332.657 0 1.309.065 1.954.196.658.121 1.199.292 1.626.514l-.899 1.678a5.989 5.989 0 00-2.681-.605c-.577 0-1.009.07-1.298.212-.288.14-.432.322-.432.544 0 .252.156.428.467.529.311.1.807.197 1.488.287.761.111 1.383.232 1.868.363.484.12.905.348 1.262.68.358.333.537.796.537 1.39 0 .505-.173.953-.519 1.346-.346.393-.854.7-1.522.922-.658.212-1.442.318-2.353.318zm15.433-8.252v8.131h-2.56v-.967a3.687 3.687 0 01-1.28.816 4.646 4.646 0 01-1.608.272c-1.223 0-2.191-.307-2.906-.922-.715-.614-1.073-1.526-1.073-2.735V6.496h2.699v4.247c0 1.31.628 1.965 1.885 1.965.646 0 1.165-.181 1.557-.544.392-.373.588-.922.588-1.648v-4.02h2.698zm2.5 0h2.698v8.131h-2.698V6.496zm1.349-1.134c-.496 0-.899-.126-1.211-.378-.311-.252-.467-.564-.467-.937 0-.373.156-.685.467-.937.312-.252.715-.378 1.211-.378.496 0 .9.12 1.211.363.311.242.467.544.467.907 0 .393-.156.72-.467.982-.311.252-.715.378-1.211.378zm9.856 8.873a3.092 3.092 0 01-.986.393c-.381.08-.784.12-1.211.12-1.107 0-1.966-.246-2.577-.74-.6-.494-.9-1.22-.9-2.177v-3.34h-1.435V6.677h1.435v-1.98h2.699v1.98h2.317v1.814h-2.317v3.31c0 .343.098.61.294.801.207.181.496.272.865.272.426 0 .789-.1 1.089-.302l.727 1.663zm4.645.514c-.773 0-1.527-.081-2.265-.242-.738-.172-1.327-.383-1.765-.635l.9-1.693c.414.232.916.423 1.504.574a7.397 7.397 0 001.729.212c1.143 0 1.713-.247 1.713-.74 0-.232-.156-.399-.467-.5-.311-.1-.79-.186-1.435-.256a15.59 15.59 0 01-1.886-.348 3.091 3.091 0 01-1.298-.696c-.356-.332-.535-.806-.535-1.42 0-.514.167-.968.502-1.36.346-.404.841-.716 1.487-.938.657-.221 1.43-.332 2.318-.332.657 0 1.309.065 1.954.196.657.121 1.2.292 1.626.514l-.899 1.678a5.989 5.989 0 00-2.681-.605c-.577 0-1.01.07-1.297.212-.289.14-.432.322-.432.544 0 .252.154.428.465.529.313.1.808.197 1.489.287.76.111 1.384.232 1.868.363.484.12.905.348 1.262.68.358.333.537.796.537 1.39 0 .505-.173.953-.519 1.346-.346.393-.854.7-1.523.922-.657.212-1.441.318-2.352.318zM69.078 22.479c-.339 0-.645-.064-.92-.191a1.617 1.617 0 01-.645-.535 1.353 1.353 0 01-.233-.775c0-.287.078-.544.233-.77.158-.23.373-.408.645-.535a2.14 2.14 0 01.924-.195c.288 0 .547.044.778.133.234.088.43.215.588.381l-.493.398a1.128 1.128 0 00-.835-.34c-.205 0-.389.04-.55.12a.912.912 0 00-.38.328.884.884 0 00-.132.48c0 .18.044.34.133.481a.94.94 0 00.38.332c.16.077.344.116.55.116.331 0 .61-.115.834-.344l.493.398a1.537 1.537 0 01-.588.385 2.2 2.2 0 01-.782.133zm2.963-.017a1.75 1.75 0 01-.725-.145 1.218 1.218 0 01-.499-.41 1.018 1.018 0 01-.18-.593c0-.221.06-.419.18-.593s.287-.31.499-.406c.214-.1.456-.149.725-.149.269 0 .51.05.721.15.212.096.378.231.498.405.12.174.18.372.18.593 0 .221-.06.419-.18.593a1.22 1.22 0 01-.498.41 1.718 1.718 0 01-.72.145zm0-.53a.66.66 0 00.465-.166.584.584 0 00.185-.452.571.571 0 00-.185-.448.65.65 0 00-.465-.17.667.667 0 00-.47.17.571.571 0 00-.184.448c0 .188.061.338.185.452.123.11.28.166.47.166zm3.445-1.766c.316 0 .57.083.763.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.132-.394-.089-.088-.217-.133-.385-.133a.63.63 0 00-.445.154c-.111.1-.166.248-.166.447v1.103h-.74v-2.23h.706v.261a.973.973 0 01.366-.215c.145-.053.305-.079.479-.079zm3.279 0c.316 0 .57.083.763.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.132-.394-.089-.088-.217-.133-.385-.133a.63.63 0 00-.445.154c-.111.1-.166.248-.166.447v1.103h-.74v-2.23h.707v.261a.973.973 0 01.365-.215c.145-.053.305-.079.479-.079zm4.255 1.156l-.014.174h-1.93a.526.526 0 00.246.328c.13.08.291.12.484.12.133 0 .25-.017.351-.05a.904.904 0 00.29-.165l.393.373c-.24.24-.591.36-1.053.36a1.89 1.89 0 01-.764-.145 1.202 1.202 0 01-.512-.41 1.018 1.018 0 01-.18-.593c0-.218.058-.414.176-.588.12-.177.282-.314.488-.41a1.6 1.6 0 01.697-.15c.25 0 .476.047.678.14a1.1 1.1 0 01.65 1.016zm-1.323-.667a.697.697 0 00-.422.124.514.514 0 00-.209.34h1.257a.512.512 0 00-.209-.335.674.674 0 00-.417-.129zm3.049 1.807c-.272 0-.517-.048-.735-.145a1.25 1.25 0 01-.508-.41 1.02 1.02 0 01-.18-.593c0-.221.06-.419.18-.593.124-.174.293-.31.508-.406.218-.1.463-.149.735-.149.269 0 .503.05.702.15.202.096.35.236.44.418l-.573.27a.644.644 0 00-.574-.308.701.701 0 00-.479.166.569.569 0 00-.19.452c0 .19.064.341.19.452.127.11.286.166.48.166a.637.637 0 00.573-.307l.574.273a.947.947 0 01-.441.415c-.2.1-.433.15-.702.15zm3.252-.14a.85.85 0 01-.27.107 1.6 1.6 0 01-.333.033c-.303 0-.539-.068-.706-.203-.165-.135-.247-.334-.247-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.027.167.08.22.057.05.136.074.238.074a.524.524 0 00.298-.083l.2.456zm.415-2.123h.74v2.23h-.74v-2.23zm.37-.31a.511.511 0 01-.332-.104.318.318 0 01-.128-.257c0-.102.043-.188.128-.257a.511.511 0 01.332-.104c.136 0 .246.033.332.1.085.066.128.149.128.248a.338.338 0 01-.128.27.51.51 0 01-.332.103zm2.607.277c.316 0 .571.083.764.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.133-.394-.088-.088-.216-.133-.384-.133a.63.63 0 00-.446.154c-.11.1-.166.248-.166.447v1.103h-.74v-2.23h.707v.261a.973.973 0 01.365-.215c.146-.053.305-.079.48-.079zm4.389.033v1.857c0 .409-.122.713-.366.912-.243.199-.599.298-1.067.298-.246 0-.48-.026-.702-.079a1.637 1.637 0 01-.55-.228l.294-.464c.108.078.244.138.408.183.164.046.329.07.493.07.257 0 .445-.051.565-.153.123-.1.185-.252.185-.456v-.095c-.193.185-.462.277-.806.277a1.55 1.55 0 01-.645-.133 1.145 1.145 0 01-.46-.38.96.96 0 01-.171-.564c0-.213.057-.401.17-.564.114-.163.268-.289.46-.377a1.51 1.51 0 01.645-.137c.37 0 .652.106.845.32v-.287h.702zm-1.4 1.592a.74.74 0 00.48-.15.488.488 0 00.19-.397.476.476 0 00-.19-.394.725.725 0 00-.48-.154.744.744 0 00-.483.154c-.127.1-.19.23-.19.394 0 .163.063.295.19.398.126.099.287.149.483.149zm5.67.016h-1.542l-.294.622h-.787l1.48-2.901h.759l1.484 2.9h-.806l-.294-.62zm-.242-.51l-.526-1.11-.527 1.11h1.053zm4.243-1.098v1.857c0 .409-.121.713-.365.912-.243.199-.599.298-1.067.298a3.03 3.03 0 01-.702-.079 1.645 1.645 0 01-.55-.228l.294-.464c.108.078.244.138.408.183.164.046.329.07.493.07.256 0 .444-.051.565-.153.123-.1.185-.252.185-.456v-.095c-.193.185-.462.277-.807.277a1.55 1.55 0 01-.645-.133 1.152 1.152 0 01-.46-.38.958.958 0 01-.17-.564c0-.213.056-.401.17-.564.114-.163.268-.289.46-.377a1.51 1.51 0 01.645-.137c.37 0 .652.106.844.32v-.287h.702zm-1.399 1.592c.196 0 .356-.05.479-.15a.487.487 0 00.19-.397.475.475 0 00-.19-.394.725.725 0 00-.479-.154.742.742 0 00-.483.154c-.127.1-.19.23-.19.394 0 .163.063.295.19.398.126.099.287.149.483.149zm2.795-1.298a.815.815 0 01.355-.244c.152-.055.326-.083.522-.083v.597a3.05 3.05 0 00-.166-.009c-.212 0-.378.053-.498.158-.12.102-.18.257-.18.464v1.053h-.74v-2.23h.707v.294zm1.317-.294h.74v2.23h-.74v-2.23zm.37-.31a.51.51 0 01-.332-.104.32.32 0 01-.128-.257.32.32 0 01.128-.257.51.51 0 01.332-.104c.136 0 .247.033.332.1.085.066.128.149.128.248a.339.339 0 01-.128.27.51.51 0 01-.332.103zm1.057-.535h.739v3.075h-.739v-3.075zm3.912 3.125c-.262 0-.517-.03-.763-.091a1.927 1.927 0 01-.588-.245l.26-.506a2.16 2.16 0 001.096.303c.218 0 .379-.028.484-.083.104-.058.156-.134.156-.228a.198.198 0 00-.095-.17.684.684 0 00-.237-.112 4.926 4.926 0 00-.389-.091 5.962 5.962 0 01-.621-.157 1.041 1.041 0 01-.417-.253.633.633 0 01-.171-.465.73.73 0 01.156-.455c.105-.138.261-.248.47-.328.212-.08.47-.12.773-.12.212 0 .419.022.621.066.203.045.38.108.532.191l-.238.51a2.053 2.053 0 00-.92-.228c-.215 0-.374.03-.479.091-.101.06-.151.14-.151.24 0 .1.058.174.175.224.12.047.302.094.545.141.253.053.46.105.622.158.161.052.299.135.412.248a.61.61 0 01.176.46.728.728 0 01-.161.456 1.052 1.052 0 01-.475.323c-.212.08-.469.12-.773.12zm3.527-.158a.835.835 0 01-.27.108 1.597 1.597 0 01-.332.033c-.304 0-.539-.068-.707-.203-.164-.135-.246-.334-.246-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.026.167.08.22.057.05.136.074.237.074a.524.524 0 00.299-.083l.199.456zm1.445-2.155c.395 0 .699.083.91.249.212.163.318.41.318.742v1.272h-.692v-.278c-.139.207-.399.311-.778.311-.196 0-.367-.029-.512-.087a.735.735 0 01-.327-.24.569.569 0 01-.114-.349c0-.207.088-.37.265-.489.181-.118.457-.178.83-.178h.588a.382.382 0 00-.147-.323c-.098-.077-.245-.116-.441-.116-.136 0-.27.02-.403.058-.13.036-.24.086-.332.15l-.265-.453c.139-.085.305-.152.498-.198.196-.047.396-.071.602-.071zm-.057 1.86a.737.737 0 00.337-.074.444.444 0 00.208-.228v-.228h-.507c-.304 0-.455.087-.455.262 0 .082.036.149.109.198a.58.58 0 00.308.07zm3.6.295a.835.835 0 01-.27.108 1.597 1.597 0 01-.332.033c-.303 0-.539-.068-.707-.203-.164-.135-.246-.334-.246-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.027.167.08.22a.35.35 0 00.238.074.52.52 0 00.298-.083l.199.456zm2.836-.999c0 .009-.004.067-.014.174h-1.93a.527.527 0 00.247.328.9.9 0 00.483.12c.133 0 .25-.017.351-.05a.905.905 0 00.29-.165l.393.373c-.24.24-.591.36-1.053.36a1.89 1.89 0 01-.763-.145 1.197 1.197 0 01-.512-.41 1.013 1.013 0 01-.181-.593c0-.218.059-.414.176-.588a1.19 1.19 0 01.488-.41c.209-.1.441-.15.698-.15.249 0 .475.047.678.14.202.095.36.23.474.407.117.174.175.377.175.61zm-1.323-.667a.699.699 0 00-.422.124.517.517 0 00-.209.34h1.257a.513.513 0 00-.208-.335.676.676 0 00-.418-.129zm6.256-1.127v2.9h-.768V21.24h-1.508v1.19h-.769v-2.901h.769v1.144h1.508v-1.144h.768zm1.948 2.934c-.269 0-.511-.048-.726-.145a1.217 1.217 0 01-.498-.41 1.02 1.02 0 01-.18-.593c0-.221.06-.419.18-.593s.286-.31.498-.406c.215-.1.457-.149.726-.149.268 0 .509.05.72.15.212.096.378.231.498.405.121.174.181.372.181.593 0 .221-.06.419-.181.593-.12.174-.286.31-.498.41a1.713 1.713 0 01-.72.145zm0-.53a.659.659 0 00.464-.166.582.582 0 00.185-.452.569.569 0 00-.185-.448.65.65 0 00-.464-.17.668.668 0 00-.47.17.572.572 0 00-.185.448c0 .188.062.338.185.452.123.11.28.166.47.166zm1.893-2.578h.74v3.075h-.74v-3.075zm4.026 0v3.075h-.707v-.257c-.183.193-.449.29-.797.29-.24 0-.458-.047-.654-.14a1.09 1.09 0 01-.455-.403 1.1 1.1 0 01-.166-.605c0-.23.055-.431.166-.605a1.09 1.09 0 01.455-.402c.196-.094.414-.141.654-.141.326 0 .58.09.764.27v-1.082h.74zm-1.376 2.578a.67.67 0 00.465-.166.585.585 0 00.185-.452.572.572 0 00-.185-.448.66.66 0 00-.465-.17.667.667 0 00-.469.17.572.572 0 00-.185.448c0 .188.062.338.185.452.123.11.28.166.469.166zm4.56-.61l-.014.174h-1.931a.527.527 0 00.247.328c.13.08.291.12.484.12.133 0 .25-.017.351-.05a.911.911 0 00.289-.165l.394.373c-.241.24-.592.36-1.053.36-.288 0-.542-.048-.764-.145a1.203 1.203 0 01-.512-.41 1.02 1.02 0 01-.18-.593c0-.218.058-.414.175-.588.12-.177.283-.314.489-.41.208-.1.441-.15.697-.15.25 0 .476.047.678.14a1.091 1.091 0 01.65 1.016zm-1.323-.667a.695.695 0 00-.422.124.513.513 0 00-.209.34h1.257a.51.51 0 00-.209-.335.675.675 0 00-.417-.129zm2.522-.162a.813.813 0 01.356-.244 1.52 1.52 0 01.522-.083v.597a3.145 3.145 0 00-.166-.009c-.212 0-.378.053-.498.158-.12.102-.18.257-.18.464v1.053h-.741v-2.23h.707v.294zm2.185 1.97a2.89 2.89 0 01-.621-.067 1.804 1.804 0 01-.484-.174l.247-.465c.114.064.251.116.413.158.16.039.319.058.474.058.312 0 .469-.068.469-.203 0-.064-.042-.11-.127-.137a2.183 2.183 0 00-.395-.07 4.265 4.265 0 01-.516-.096.84.84 0 01-.356-.19c-.099-.091-.148-.221-.148-.39 0-.14.046-.265.138-.373a.915.915 0 01.408-.257c.181-.06.392-.091.636-.091.18 0 .358.018.535.054.18.033.33.08.447.14l-.247.46a1.645 1.645 0 00-.735-.165.848.848 0 00-.356.058c-.079.039-.118.088-.118.15 0 .068.043.117.128.144.085.028.22.054.407.08.209.03.38.063.512.099a.776.776 0 01.347.186.495.495 0 01.147.381.546.546 0 01-.142.37.94.94 0 01-.417.252c-.18.058-.397.087-.646.087z",
  fill: "#fff"
});

function SvgLogoWhite(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 148,
    height: 54,
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ var logo_white = (SvgLogoWhite);
// CONCATENATED MODULE: ./assets/menu/home.svg
function home_extends() { home_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return home_extends.apply(this, arguments); }



var home_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M43 24.218L21.5 7.917 0 24.218v-6.646L21.5 1.27 43 17.572v6.646zm-5.375-.593v15.75h-10.75v-10.5h-10.75v10.5H5.375v-15.75L21.5 11.812l16.125 11.813z",
  fill: "#fff"
});

function SvgHome(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", home_extends({
    width: 43,
    height: 42,
    fill: "none"
  }, props), home_ref);
}

/* harmony default export */ var home = (SvgHome);
// CONCATENATED MODULE: ./assets/menu/bookmark.svg
function bookmark_extends() { bookmark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bookmark_extends.apply(this, arguments); }



var bookmark_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M24.143 37c-.326 0-.646-.085-.929-.248L13 30.884 2.786 36.752a1.864 1.864 0 01-2.537-.677A1.845 1.845 0 010 35.15V5.55a5.545 5.545 0 011.634-3.923A5.588 5.588 0 015.57 0H20.43a5.588 5.588 0 013.937 1.627A5.545 5.545 0 0126 5.55v29.6c0 .49-.196.96-.544 1.308-.348.347-.82.542-1.313.542z",
  fill: "#fff"
});

function SvgBookmark(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", bookmark_extends({
    width: 26,
    height: 37,
    fill: "none"
  }, props), bookmark_ref);
}

/* harmony default export */ var bookmark = (SvgBookmark);
// CONCATENATED MODULE: ./assets/menu/talks.svg
function talks_extends() { talks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return talks_extends.apply(this, arguments); }



var talks_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.5 0h-3v37h3V0zM1.5 0h12v37h-12C.672 37 0 36.172 0 35.15V1.85C0 .828.672 0 1.5 0z",
  fill: "#E5E5E5"
});

var talks_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.5 0h12c.828 0 1.5.828 1.5 1.85v33.3c0 1.022-.672 1.85-1.5 1.85h-12V0z",
  fill: "#fff"
});

function SvgTalks(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", talks_extends({
    width: 30,
    height: 37,
    fill: "none"
  }, props), talks_ref, talks_ref2);
}

/* harmony default export */ var talks = (SvgTalks);
// CONCATENATED MODULE: ./assets/menu/insights.svg
function insights_extends() { insights_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return insights_extends.apply(this, arguments); }



var insights_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.5 35h-6c-.197 0-.392-.041-.574-.121a1.497 1.497 0 01-.487-.345 1.6 1.6 0 01-.325-.516A1.674 1.674 0 010 33.409V20.682c0-.21.039-.416.114-.61.075-.192.186-.367.325-.515.14-.148.305-.265.487-.345.182-.08.377-.121.574-.121h6c.197 0 .392.04.574.12.182.08.347.198.487.346.14.148.25.323.325.516.075.193.114.4.114.609v12.727c0 .209-.039.416-.114.609a1.6 1.6 0 01-.325.516c-.14.148-.305.265-.487.345-.182.08-.377.121-.574.121z",
  fill: "#fff"
});

var insights_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19.5 35h-6c-.197 0-.392-.041-.574-.121a1.497 1.497 0 01-.487-.345 1.6 1.6 0 01-.325-.516 1.673 1.673 0 01-.114-.609V1.591c0-.209.039-.416.114-.609.075-.193.186-.368.325-.516.14-.148.305-.265.487-.345.182-.08.377-.121.574-.121h6c.197 0 .392.041.574.121.182.08.348.197.487.345.14.148.25.323.325.516.075.193.114.4.114.609v31.818c0 .209-.039.416-.114.609a1.6 1.6 0 01-.325.516c-.14.148-.305.265-.487.345-.182.08-.377.121-.574.121z",
  fill: "#E5E5E5"
});

var _ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M31.5 35h-6c-.197 0-.392-.041-.574-.121a1.496 1.496 0 01-.487-.345 1.599 1.599 0 01-.325-.516 1.673 1.673 0 01-.114-.609V14.32c0-.21.039-.417.114-.61a1.6 1.6 0 01.325-.516c.14-.148.305-.265.487-.345.182-.08.377-.12.574-.12h6c.197 0 .392.04.574.12.182.08.348.197.487.345.14.148.25.323.325.516.075.193.114.4.114.61v19.09c0 .209-.039.416-.114.609a1.599 1.599 0 01-.325.516c-.14.148-.305.265-.487.345-.182.08-.377.121-.574.121z",
  fill: "#fff"
});

function SvgInsights(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", insights_extends({
    width: 33,
    height: 35,
    fill: "none"
  }, props), insights_ref, insights_ref2, _ref3);
}

/* harmony default export */ var insights = (SvgInsights);
// CONCATENATED MODULE: ./assets/menu/user-profile.svg
function user_profile_extends() { user_profile_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return user_profile_extends.apply(this, arguments); }



var user_profile_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M22.39 11.982L5.54 12.06l-.39-5.693c-.125-1.298.161-2.604.799-3.654.638-1.05 1.58-1.765 2.635-1.998L9.692.469a19.71 19.71 0 018.55 0l1.104.245c1.054.234 1.996.948 2.634 1.998.638 1.05.923 2.357.798 3.654l-.387 5.616z",
  fill: "#E5E5E5"
});

var user_profile_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M5.547 12.058c.062 2.677.98 5.218 2.56 7.081 1.578 1.863 3.691 2.9 5.889 2.89 2.197-.01 4.304-1.066 5.872-2.943 1.567-1.878 2.47-4.427 2.515-7.104l-16.836.076z",
  fill: "#CBD5E0"
});

var user_profile_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21.266 21.09l-6.309 7.688c-.13.16-.285.285-.456.371a1.19 1.19 0 01-.537.13 1.19 1.19 0 01-.538-.13 1.423 1.423 0 01-.456-.37l-6.309-7.69c-1.838 1.357-3.394 3.212-4.548 5.421C.959 28.72.239 31.223.008 33.827c-.021.239 0 .48.06.71.06.229.16.44.291.619.132.178.293.322.473.42.18.098.376.148.573.148h25.118c.197 0 .392-.05.572-.148.18-.098.342-.242.474-.42.131-.18.23-.39.291-.62.06-.228.08-.47.06-.71-.231-2.603-.951-5.107-2.105-7.316-1.154-2.209-2.71-4.064-4.549-5.42z",
  fill: "#E5E5E5"
});

var _ref4 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19.149 19.838c-1.483 1.405-3.308 2.168-5.186 2.168-1.878 0-3.702-.763-5.185-2.168-.733.344-1.44.763-2.116 1.251l6.309 7.688c.13.16.285.285.455.371.17.087.353.13.538.13.184 0 .367-.043.537-.13.17-.086.326-.212.456-.37l6.31-7.689a13.175 13.175 0 00-2.118-1.251z",
  fill: "#fff"
});

function SvgUserProfile(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", user_profile_extends({
    width: 28,
    height: 36,
    fill: "none"
  }, props), user_profile_ref, user_profile_ref2, user_profile_ref3, _ref4);
}

/* harmony default export */ var user_profile = (SvgUserProfile);
// CONCATENATED MODULE: ./assets/menu/publications.svg
function publications_extends() { publications_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return publications_extends.apply(this, arguments); }



var publications_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M30 16.2H12V0H9v36h3V19.8h18v-3.6z",
  fill: "#fff"
});

var publications_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M1.5 0H9v36H1.5C.672 36 0 35.194 0 34.2V1.8C0 .806.672 0 1.5 0z",
  fill: "#E5E5E5"
});

var publications_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12 0h16.5c.828 0 1.5.806 1.5 1.8v14.4H12V0zm0 19.8h18v14.4c0 .994-.672 1.8-1.5 1.8H12V19.8z",
  fill: "#CBD5E0"
});

function SvgPublications(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", publications_extends({
    width: 30,
    height: 36,
    fill: "none"
  }, props), publications_ref, publications_ref2, publications_ref3);
}

/* harmony default export */ var publications = (SvgPublications);
// CONCATENATED MODULE: ./assets/menu/add.svg
function add_extends() { add_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return add_extends.apply(this, arguments); }



var add_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M30 16.2h-8V9c0-.477-.21-.935-.586-1.273A2.118 2.118 0 0020 7.2c-.53 0-1.04.19-1.414.527A1.714 1.714 0 0018 9v7.2h-8c-.53 0-1.04.19-1.414.527A1.714 1.714 0 008 18c0 .477.21.935.586 1.273.375.337.884.527 1.414.527h8V27c0 .477.21.935.586 1.273.375.337.884.527 1.414.527.53 0 1.04-.19 1.414-.527.375-.338.586-.796.586-1.273v-7.2h8c.53 0 1.04-.19 1.414-.527.375-.338.586-.796.586-1.273 0-.477-.21-.935-.586-1.273A2.119 2.119 0 0030 16.2z",
  fill: "#fff"
});

var add_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M38 0H2c-.263 0-.523.046-.765.137C.992.227.77.36.585.527a1.8 1.8 0 00-.433.584C.052 1.33 0 1.564 0 1.8v32.4c0 .236.052.47.152.689.1.218.248.417.434.584.185.167.406.3.649.39.242.09.502.137.765.137h36c.263 0 .523-.047.765-.137.243-.09.464-.223.65-.39a1.8 1.8 0 00.433-.584c.1-.219.152-.453.152-.689V1.8c0-.236-.052-.47-.152-.689a1.8 1.8 0 00-.434-.584 2.028 2.028 0 00-.649-.39A2.193 2.193 0 0038 0zm-8 19.8h-8V27c0 .477-.21.935-.586 1.273A2.118 2.118 0 0120 28.8c-.53 0-1.04-.19-1.414-.527A1.714 1.714 0 0118 27v-7.2h-8c-.53 0-1.04-.19-1.414-.527A1.714 1.714 0 018 18c0-.477.21-.935.586-1.273A2.118 2.118 0 0110 16.2h8V9c0-.477.21-.935.586-1.273A2.118 2.118 0 0120 7.2c.53 0 1.04.19 1.414.527.375.338.586.796.586 1.273v7.2h8c.53 0 1.04.19 1.414.527.375.338.586.796.586 1.273 0 .477-.21.935-.586 1.273A2.118 2.118 0 0130 19.8z",
  fill: "#CBD5E0"
});

function SvgAdd(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", add_extends({
    width: 40,
    height: 36,
    fill: "none"
  }, props), add_ref, add_ref2);
}

/* harmony default export */ var add = (SvgAdd);
// CONCATENATED MODULE: ./assets/menu/bell.svg
function bell_extends() { bell_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bell_extends.apply(this, arguments); }



var bell_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M26.25 12.667c0-2.52-.922-4.936-2.563-6.718-1.64-1.781-3.866-2.782-6.187-2.782-2.32 0-4.546 1-6.187 2.782S8.75 10.147 8.75 12.667c0 11.083-4.375 14.25-4.375 14.25h26.25s-4.375-3.167-4.375-14.25zM20.023 33.25c-.256.48-.625.878-1.067 1.155a2.742 2.742 0 01-1.456.423 2.742 2.742 0 01-1.456-.423 3.052 3.052 0 01-1.067-1.155",
  stroke: "#fff",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgBell(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", bell_extends({
    width: 35,
    height: 38,
    fill: "none"
  }, props), bell_ref);
}

/* harmony default export */ var bell = (SvgBell);
// CONCATENATED MODULE: ./components/NavElement.tsx




let NavElement = ({
  className,
  logo,
  name
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [logo, name]
  });
};

NavElement = external_styled_components_default()(NavElement).withConfig({
  displayName: "NavElement",
  componentId: "r5mr0o-0"
})(["display:flex;flex-direction:column;align-items:center;font-size:12px;color:white;font-weight:500;&:hover{cursor:pointer;}"]);
/* harmony default export */ var components_NavElement = (NavElement);
// CONCATENATED MODULE: ./components/Header.tsx















let Header = ({
  className
}) => {
  const navElements = [{
    name: "home",
    logo: home
  }, {
    name: "opportunities",
    logo: bookmark
  }, {
    name: "lightning talks",
    logo: talks
  }, {
    name: "insights",
    logo: insights
  }, {
    name: "profile",
    logo: user_profile
  }, {
    name: "publications",
    logo: publications
  }, {
    name: "add new",
    logo: add
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo_white, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        name: "search",
        className: "input",
        placeholder: "search"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
        className: "nav",
        children: navElements.map((element, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_NavElement, {
          name: element.name,
          logo: /*#__PURE__*/Object(jsx_runtime_["jsx"])(element.logo, {})
        }, index))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "bell",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bell, {})
    })]
  });
};

Header = external_styled_components_default()(Header).withConfig({
  displayName: "Header",
  componentId: "h2of82-0"
})(["width:100vw;padding:28px 0px;background:var(--green);display:grid;grid-template-columns:1fr 75vw 1fr;.logo{height:54px;display:inline-block;justify-self:center;}.container{display:flex;justify-content:space-between;align-items:center;width:var(--container);}.input{background:white;color:black;height:54px;width:338px;padding:16px 18px;border-radius:10px;border:none;outline:none;transition:all 0.05s ease-in-out;&:hover,&:active,&:focus{box-shadow:0 0 0 4px var(--blue);}}.nav{display:flex;justify-content:space-between;align-items:baseline;width:45%;height:61px;}.bell{margin-right:28px;margin-left:auto;align-self:center;}"]);
/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./assets/temperature.svg
function temperature_extends() { temperature_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return temperature_extends.apply(this, arguments); }



var temperature_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M40 8h14v4H40V8zM40 20h20v4H40v-4zM40 32h14v4H40v-4zM24 46a6 6 0 11-12 0h12z",
  fill: "#000"
});

var temperature_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M60 44H31.84A14.02 14.02 0 0028 36.22V14a10 10 0 00-20 0v22.22A13.99 13.99 0 1031.84 48H60v-4zM18 56a9.986 9.986 0 01-6.664-17.436l.664-.598V14a6 6 0 1112 0v23.966l.664.598A9.986 9.986 0 0118 56z",
  fill: "#000"
});

function SvgTemperature(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", temperature_extends({
    width: 64,
    height: 64,
    fill: "none"
  }, props), temperature_ref, temperature_ref2);
}

/* harmony default export */ var temperature = (SvgTemperature);
// CONCATENATED MODULE: ./assets/rain.svg
function rain_extends() { rain_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return rain_extends.apply(this, arguments); }



var rain_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M57.086 18.386c2.713 0 4.914-2.226 4.914-4.964C62 10.193 60.209 6.266 57.088 2c-3.072 4.201-4.916 8.193-4.916 11.422 0 2.738 2.199 4.964 4.914 4.964zm.002-12.83C59.001 8.615 60 11.303 60 13.422c0 1.635-1.308 2.964-2.914 2.964s-2.914-1.329-2.914-2.964c0-2.115 1.001-4.803 2.916-7.866zM44.419 19.259c-.818-2.228-2.194-4.648-4.056-7.192-1.272 1.74-2.319 3.44-3.126 5.07a31.51 31.51 0 00-4.3-.429v-3.771a.938.938 0 10-1.876 0v3.771c-1.407.05-2.81.193-4.197.43a4.954 4.954 0 001.688-3.716c0-3.229-1.791-7.156-4.912-11.422-3.072 4.201-4.916 8.193-4.916 11.422a4.945 4.945 0 003.685 4.788 30.836 30.836 0 00-10.645 5.936c.028-.216.065-.43.065-.653 0-3.229-1.793-7.16-4.914-11.426C3.844 16.268 2 20.263 2 23.492c0 2.74 2.199 4.963 4.914 4.963.269 0 .526-.039.784-.08C4.976 31.814 2.985 35.834 2 40.229a9.671 9.671 0 016.961-2.93 9.65 9.65 0 017.68 3.764 9.654 9.654 0 017.68-3.764 9.654 9.654 0 016.742 2.731v8.845h-.938V54.5a3.755 3.755 0 01-3.75 3.75 3.755 3.755 0 01-3.75-3.75 1.876 1.876 0 00-3.75 0c0 4.135 3.363 7.5 7.5 7.5 4.135 0 7.5-3.365 7.5-7.5v-5.625h-.938v-8.846a9.65 9.65 0 016.742-2.73 9.65 9.65 0 017.679 3.764 9.655 9.655 0 017.68-3.764A9.672 9.672 0 0162 40.229c-2.111-9.413-8.755-17.156-17.581-20.97zm-23.694-5.837c0-2.115 1.001-4.803 2.916-7.866 1.913 3.06 2.912 5.747 2.912 7.866 0 1.635-1.308 2.964-2.914 2.964s-2.914-1.329-2.914-2.964zM4 23.492c0-2.083 1.022-4.817 2.919-7.866 1.912 3.06 2.911 5.746 2.911 7.866 0 1.633-1.308 2.963-2.916 2.963-1.606 0-2.914-1.33-2.914-2.963zm36.366-7.866c1.912 3.06 2.911 5.746 2.911 7.866 0 1.633-1.308 2.963-2.916 2.963-1.606 0-2.914-1.33-2.914-2.963 0-2.083 1.023-4.817 2.919-7.866z",
  fill: "#000"
});

function SvgRain(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", rain_extends({
    width: 64,
    height: 64,
    fill: "none"
  }, props), rain_ref);
}

/* harmony default export */ var rain = (SvgRain);
// CONCATENATED MODULE: ./assets/humidity.svg
function humidity_extends() { humidity_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return humidity_extends.apply(this, arguments); }



var humidity_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M33.686 22.423L20.22.981a2.113 2.113 0 00-3.442 0L3.253 22.525A20.284 20.284 0 00.22 32.594a18.281 18.281 0 1036.562 0 20.44 20.44 0 00-3.095-10.17zM18.5 46.813a14.237 14.237 0 01-14.219-14.22c.108-2.84.961-5.602 2.474-8.009l1.9-3.026 20.462 20.463A14.172 14.172 0 0118.5 46.815v-.002z",
  fill: "#000"
});

function SvgHumidity(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", humidity_extends({
    width: 37,
    height: 51,
    fill: "none"
  }, props), humidity_ref);
}

/* harmony default export */ var humidity = (SvgHumidity);
// CONCATENATED MODULE: ./assets/radiation.svg
function radiation_extends() { radiation_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return radiation_extends.apply(this, arguments); }



var radiation_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M20.84 60.65l7.137-7.312a21.195 21.195 0 01-7.011-2.915L20.84 60.65zM44.16 4.351l-7.135 7.311c2.493.542 4.869 1.53 7.011 2.916l.123-10.227zM11.663 37.024L4.35 44.158l10.227-.124a21.176 21.176 0 01-2.914-7.01zM53.337 27.977l7.313-7.136-10.227.125a21.182 21.182 0 012.914 7.011zM14.578 20.965L4.351 20.84l7.314 7.136a21.13 21.13 0 012.913-7.011zM50.422 44.035l10.227.124-7.313-7.135a21.14 21.14 0 01-2.914 7.011zM27.977 11.662L20.841 4.35l.125 10.227a21.195 21.195 0 017.011-2.915zM37.023 53.338l7.136 7.311-.124-10.226a21.218 21.218 0 01-7.012 2.915zM14.982 44.649l-4.028 9.395 9.396-4.026a21.433 21.433 0 01-5.368-5.37zM50.017 20.352l4.027-9.396-9.394 4.027a21.439 21.439 0 015.367 5.37zM11.172 32.5c0-1.298.135-2.563.357-3.8L2.031 32.5l9.498 3.798a21.359 21.359 0 01-.357-3.797zM62.969 32.5l-9.498-3.8c.222 1.237.357 2.502.357 3.8 0 1.299-.135 2.565-.357 3.8l9.498-3.8zM20.352 14.982l-9.396-4.027 4.027 9.396a21.48 21.48 0 015.37-5.37zM44.648 50.017l9.396 4.027-4.026-9.395a21.457 21.457 0 01-5.37 5.368zM36.298 11.53L32.5 2.03l-3.799 9.498c1.235-.222 2.5-.357 3.799-.357s2.564.135 3.798.357zM28.701 53.47L32.5 62.97l3.798-9.498c-1.234.222-2.499.357-3.798.357s-2.564-.135-3.799-.357z",
  fill: "#000"
});

var radiation_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M32.5 51.797c10.657 0 19.297-8.64 19.297-19.297S43.157 13.203 32.5 13.203 13.203 21.843 13.203 32.5s8.64 19.297 19.297 19.297z",
  fill: "#000"
});

function SvgRadiation(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", radiation_extends({
    width: 65,
    height: 65,
    fill: "none"
  }, props), radiation_ref, radiation_ref2);
}

/* harmony default export */ var radiation = (SvgRadiation);
// CONCATENATED MODULE: ./assets/wind.svg
function wind_extends() { wind_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wind_extends.apply(this, arguments); }



var wind_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26.822 58.328c0 1.341-4.046 2.436-5.514 2.436-1.472 0-5.513-1.095-5.513-2.437l2.844-28.944c0-1.346 1.197-2.436 2.67-2.436 1.471 0 2.668 1.09 2.668 2.436l2.845 28.945zM23.136 13.336c0 1.068-.803 1.93-1.79 1.93-.994 0-1.793-.862-1.793-1.93V2.166c0-1.064.8-1.93 1.793-1.93.987 0 1.79.866 1.79 1.93v11.17zM3.521 34.08c-1.013.698-2.302.58-2.89-.255-.574-.835-.234-2.086.776-2.78l10.595-7.32c1.01-.694 2.305-.583 2.886.252.582.839.238 2.085-.776 2.783l-10.59 7.32zM41.252 30.306a2.173 2.173 0 01.718 2.985 2.18 2.18 0 01-3.024.587l-10.843-6.95a2.176 2.176 0 01-1.014-2.194c.045-.282.145-.552.295-.795a2.18 2.18 0 013.017-.584l10.85 6.95zM19.412 19.063h3.464v3.576h-3.464v-3.576z",
  fill: "#000"
});

function SvgWind(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", wind_extends({
    width: 43,
    height: 61,
    fill: "none"
  }, props), wind_ref);
}

/* harmony default export */ var wind = (SvgWind);
// CONCATENATED MODULE: ./assets/location.svg
function location_extends() { location_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return location_extends.apply(this, arguments); }



var location_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21 3.5A12.241 12.241 0 008.75 15.75C8.75 24.938 21 38.5 21 38.5s12.25-13.563 12.25-22.75C33.25 8.977 27.773 3.5 21 3.5zm0 16.625a4.375 4.375 0 110-8.75 4.375 4.375 0 010 8.75z",
  fill: "#000"
});

function SvgLocation(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", location_extends({
    width: 42,
    height: 42,
    fill: "none"
  }, props), location_ref);
}

/* harmony default export */ var assets_location = (SvgLocation);
// CONCATENATED MODULE: ./components/OverviewItem.tsx





let OverviewItem = ({
  className,
  value,
  logo,
  name,
  unit = ""
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "value",
      children: [value.toFixed(2), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "unit",
        children: unit
      }), " "]
    }), logo, /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "name",
      children: name
    })]
  });
};

OverviewItem = external_styled_components_default()(OverviewItem).withConfig({
  displayName: "OverviewItem",
  componentId: "sc-4nvxd2-0"
})(["display:flex;flex-direction:column;align-items:center;padding:8px;& .value{text-align:left;width:100%;padding:4px;}border-radius:10px;text-align:center;font-size:14px;width:19%;background-color:var(--grey-light);& .name{margin-top:auto;}.unit{font-weight:600;color:var(--grey-dark);margin-left:auto;}"]);
/* harmony default export */ var components_OverviewItem = (OverviewItem);
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./utils/chart.ts

const drawChart = (formattedData, chartRef, hour = true) => {
  const labels = formattedData.map(el => el.label);
  const values = formattedData.map(el => el.value);
  const containerHeight = chartRef.current.clientHeight;
  const containerWidth = chartRef.current.clientWidth;
  console.log({
    containerWidth,
    containerHeight
  });
  let svg = external_d3_["select"](chartRef.current).append("svg") // .attr("preserveAspectRatio", "xMinYMin meet")
  // .attr("viewBox", "0 0 300 300")
  .attr("width", containerWidth).attr("height", containerHeight).classed("svg-content", true);
  let selection = svg.selectAll("rect").data(values);
  let yScale = external_d3_["scaleLinear"]().domain([0, external_d3_["max"](values)]) // .range([containerHeight, 0])
  .range([0, containerHeight - 50]); // add axis and labels

  let xDateScale = external_d3_["scalePoint"]().domain(labels).range([0, containerWidth]);
  svg.append("g").attr("transform", "translate(0, 0)") // This controls the vertical position of the Axis
  .call(external_d3_["axisBottom"](xDateScale));
  let y_axis = external_d3_["axisLeft"]().scale(yScale);
  svg.append("g").attr("transform", "translate(0, 300)").call(y_axis);
  selection.transition().duration(300).attr("height", d => yScale(d)).attr("y", d => containerHeight - yScale(d));
  selection.enter().append("rect").attr("x", (d, i) => i * 45).attr("y", d => containerHeight).attr("width", 40).attr("height", 0).attr("fill", "steelblue").transition().duration(300).attr("height", d => yScale(d)).attr("y", d => containerHeight - yScale(d));
  selection.exit().transition().duration(300).attr("y", d => containerHeight).attr("height", 0).remove();
};
// CONCATENATED MODULE: ./utils/index.ts


// CONCATENATED MODULE: ./components/Forecasts.tsx






let Flag = ({
  className,
  color,
  text
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    className: className,
    children: text
  });
};

Flag = external_styled_components_default()(Flag).withConfig({
  displayName: "Forecasts__Flag",
  componentId: "sc-373ftp-0"
})(["background:", ";padding:8px 20px;color:white;border-radius:20px;&:hover{cursor:pointer;box-shadow:var(--shadow-sm);}"], props => props.color ? `var(${props.color})` : "var(--green)");

let Forecasts = ({
  className,
  chartData = []
}) => {
  const chartRef = Object(external_react_["useRef"])(null);
  const hour = true;
  Object(external_react_["useEffect"])(() => {
    let data = chartData;

    if (hour) {
      data = chartData[0].forecast;
    }

    let formattedData = data.map((el, i) => {
      // console.log({ element: el });
      if (hour) {
        return {
          label: el.endTime.split("T")[1].split("+")[0].slice(0, 2),
          value: el.temperatures.value
        };
      } else {
        return {
          label: el.date,
          value: el.forecast[12].temperatures.value
        };
      }
    }); // let formattedDataDates = data.map((el, i) => {
    //   return el.endTime.split("T")[1].split("+")[0].slice(0,2)
    // })

    drawChart(formattedData, chartRef); // const containerHeight = chartRef.current.clientHeight
    // const containerWidth = chartRef.current.clientWidth
    // console.log({containerWidth, containerHeight})
    // let svg = d3.select(chartRef.current)
    //   .append("svg")
    //   // .attr("preserveAspectRatio", "xMinYMin meet")
    //   // .attr("viewBox", "0 0 300 300")
    //   .attr("width", containerWidth)
    //   .attr("height", containerHeight)
    //   .classed("svg-content", true)  
    // let selection = svg.selectAll("rect").data(formattedData);
    // let yScale = d3.scaleLinear()
    //   .domain([0, d3.max(formattedData)])
    //   .range([0, containerHeight - 100]);
    // let xDateScale = d3.scalePoint()
    //   .domain(formattedDataDates)
    //   .range([0, containerWidth])
    // svg
    //   .append("g")
    //   .attr("transform", "translate(0, 0)")      // This controls the vertical position of the Axis
    //   .call(d3.axisBottom(xDateScale));
    // let y_axis = d3.axisLeft()
    //   .scale(yScale);
    // svg.append("g")
    //   .attr("transform", "translate(0, 0)")
    //   .call(y_axis);
    // selection
    // .transition().duration(300)
    //     .attr("height", (d) => yScale(d))
    //     .attr("y", (d) => containerHeight - yScale(d))
    // selection
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 45)
    //   .attr("y", (d) => containerHeight)
    //   .attr("width", 40)
    //   .attr("height", 0)
    //   .attr("fill", "steelblue")
    //   .transition().duration(300)
    //   .attr("height", (d) => yScale(d))
    //   .attr("y", (d) => containerHeight - yScale(d))
    // selection
    //   .exit()
    //   .transition().duration(300)
    //       .attr("y", (d) => containerHeight)
    //       .attr("height", 0)
    //   .remove()
  }, [chartData]);
  const flags = [{
    text: "today",
    color: "--blue"
  }, {
    text: "month",
    color: "--green"
  }, {
    text: "year",
    color: "--teal"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "graphic",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "header",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Forecasts since"
        }), flags.map((flag, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Flag, {
          text: flag.text,
          color: flag.color
        }, index))]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "chart",
        id: "chart",
        ref: chartRef
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "parameters"
    })]
  });
};

Forecasts = external_styled_components_default()(Forecasts).withConfig({
  displayName: "Forecasts",
  componentId: "sc-373ftp-1"
})(["height:498px;background:var(--grey-light);box-shadow:var(--shadow-sm);width:100%;border-radius:10px;padding:30px;display:grid;grid-template-columns:70% 1fr;grid-column-gap:10px;grid-area:forecasts;align-self:start;justify-content:space-between;.header{padding:0px 0px 20px 0;width:100%;display:flex;justify-content:space-between;}.graphic{}.chart{height:378px;background:white;box-shadow:var(--shadow-sm);position:relative;width:100%;vertical-align:top;overflow:hidden;}.parameters{height:378px;background:white;box-shadow:var(--shadow-sm);align-self:flex-end;}"]);
/* harmony default export */ var components_Forecasts = (Forecasts);
// CONCATENATED MODULE: ./assets/weather.svg
function weather_extends() { weather_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return weather_extends.apply(this, arguments); }



var weather_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M38.958 41.25a2.292 2.292 0 010-4.583 6.883 6.883 0 006.875-6.875 6.883 6.883 0 00-6.875-6.875c-.545 0-1.136.096-1.863.3l-2.454.69-.426-2.517a9.121 9.121 0 00-12.937-6.75 9.178 9.178 0 00-5.048 10.124l.595 2.841-3.29-.119c-2.315.014-4.368 2.07-4.368 4.597a4.587 4.587 0 004.583 4.584 2.292 2.292 0 110 4.583c-5.053 0-9.167-4.111-9.167-9.167a9.183 9.183 0 016.88-8.878l-.005-.288c0-7.583 6.167-13.75 13.75-13.75a13.675 13.675 0 0112.946 9.2c6.703-.552 12.263 4.84 12.263 11.425 0 6.318-5.14 11.458-11.459 11.458zm-9.994-9.167l-10.312 9.284 6.875 3.32-3.438 8.021 10.313-9.28-6.875-3.324 3.437-8.02z",
  fill: "#000"
});

function SvgWeather(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", weather_extends({
    width: 55,
    height: 55,
    fill: "none"
  }, props), weather_ref);
}

/* harmony default export */ var weather = (SvgWeather);
// CONCATENATED MODULE: ./assets/indicators.svg
function indicators_extends() { indicators_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return indicators_extends.apply(this, arguments); }



var indicators_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M6.25 10.417v29.166a4.17 4.17 0 004.167 4.167h29.166a4.17 4.17 0 004.167-4.167V10.417a4.17 4.17 0 00-4.167-4.167H10.417a4.17 4.17 0 00-4.167 4.167zm33.335 29.166H10.417V10.417h29.166l.002 29.166z",
  fill: "#000"
});

var indicators_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M22.917 14.583h4.166v20.834h-4.166V14.583zm8.333 6.25h4.167v14.584H31.25V20.833zM14.583 25h4.167v10.417h-4.167V25z",
  fill: "#000"
});

function SvgIndicators(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", indicators_extends({
    width: 50,
    height: 50,
    fill: "none"
  }, props), indicators_ref, indicators_ref2);
}

/* harmony default export */ var indicators = (SvgIndicators);
// CONCATENATED MODULE: ./assets/market.svg
function market_extends() { market_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return market_extends.apply(this, arguments); }



var market_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M36.75 5.704H11.238l-.246-.992c-.273-1.268-.889-2.301-1.846-3.1C8.19.812 7.055.413 5.742.413h-4.02C1.23.413.82.58.493.91.164 1.24 0 1.681 0 2.232c0 .496.164.91.492 1.24.328.33.738.496 1.23.496h4.02c1.04 0 1.64.468 1.805 1.405l4.02 21.161a5.185 5.185 0 001.927 2.81c.957.717 2.01 1.075 3.158 1.075h16.57c.547 0 .985-.165 1.313-.496.328-.33.492-.743.492-1.24 0-1.212-.601-1.818-1.804-1.818h-16.57c-.766 0-1.313-.33-1.641-.992l-.164-.744h17.554a4.95 4.95 0 002.995-.992 4.938 4.938 0 001.845-2.562L42 11.407v-.413c0-1.488-.506-2.742-1.518-3.761-1.011-1.02-2.255-1.53-3.732-1.53zm-21 15.87h-1.559L11.895 9.259h3.855v12.317zm6.973 0h-3.446V9.259h3.446v12.317zm7.054 0H26.25V9.259h3.527v12.317zm4.348-1.405v.166c-.164.55-.465.909-.902 1.074V9.26h3.527c.984 0 1.559.467 1.723 1.404l-4.348 9.506zM21 35.71c0 .993-.342 1.833-1.025 2.522-.684.689-1.518 1.033-2.502 1.033-.93 0-1.737-.344-2.42-1.033-.684-.689-1.026-1.53-1.026-2.521 0-.992.342-1.833 1.026-2.522.683-.688 1.49-1.033 2.42-1.033.984 0 1.818.345 2.502 1.033.683.69 1.025 1.53 1.025 2.522zm14.027 0c0 .993-.342 1.833-1.025 2.522-.684.689-1.518 1.033-2.502 1.033-.984 0-1.818-.344-2.502-1.033-.684-.689-1.025-1.53-1.025-2.521 0-.992.341-1.833 1.025-2.522.684-.688 1.518-1.033 2.502-1.033.984 0 1.818.345 2.502 1.033.683.69 1.025 1.53 1.025 2.522z",
  fill: "#000"
});

function SvgMarket(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", market_extends({
    width: 42,
    height: 41,
    fill: "none"
  }, props), market_ref);
}

/* harmony default export */ var market = (SvgMarket);
// CONCATENATED MODULE: ./assets/chevron_right.svg
function chevron_right_extends() { chevron_right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevron_right_extends.apply(this, arguments); }



var chevron_right_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9 18l6-6-6-6",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgChevronRight(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", chevron_right_extends({
    width: 24,
    height: 24,
    fill: "none"
  }, props), chevron_right_ref);
}

/* harmony default export */ var chevron_right = (SvgChevronRight);
// CONCATENATED MODULE: ./components/SidebarMenuItem.tsx






let SidebarMenuItem = ({
  className,
  name,
  logo
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [logo, /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "name",
      children: name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(chevron_right, {})]
  });
};

SidebarMenuItem = external_styled_components_default()(SidebarMenuItem).withConfig({
  displayName: "SidebarMenuItem",
  componentId: "sc-199n3nv-0"
})(["padding:8px;display:flex;font-size:18px;font-weight:500;justify-content:space-between;align-items:center;background:white;padding:30px 22px;color:var(--grey-dark);&:hover{cursor:pointer;background:var(--grey-light);}.name{display:inline-block;margin-right:auto;padding-left:1rem;justify-self:flex-start;}&:last-child{border-bottom-left-radius:10px;border-bottom-right-radius:10px;}&:first-child{border-top-left-radius:10px;border-top-right-radius:10px;}"]);
/* harmony default export */ var components_SidebarMenuItem = (SidebarMenuItem);
// CONCATENATED MODULE: ./components/SidebarMenu.tsx








let SidebarMenu = ({
  className
}) => {
  const items = [{
    name: "Weather",
    logo: weather
  }, {
    name: "Agronomic indicators",
    logo: indicators
  }, {
    name: "Market",
    logo: market
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: className,
    children: items.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SidebarMenuItem, {
      name: item.name,
      logo: /*#__PURE__*/Object(jsx_runtime_["jsx"])(item.logo, {})
    }, idx))
  });
};

SidebarMenu = external_styled_components_default()(SidebarMenu).withConfig({
  displayName: "SidebarMenu",
  componentId: "sc-193d1jc-0"
})(["background:var(--grey-light);display:flex;border-radius:10px;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);"]);
/* harmony default export */ var components_SidebarMenu = (SidebarMenu);
// CONCATENATED MODULE: ./components/Ads.tsx




let Ads = ({
  className
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: className,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/data.jpg",
      width: "100%",
      height: "auto"
    })
  });
};

Ads = external_styled_components_default()(Ads).withConfig({
  displayName: "Ads",
  componentId: "sc-1c2hqs3-0"
})(["box-shadow:var(--shadow-sm);width:100%;border-radius:10px;grid-area:ads;border-radius:10px;background:var(--grey-light);& img{display:block;border-radius:10px;object-fit:cover;height:100%;max-width:100%;}"]);
/* harmony default export */ var components_Ads = (Ads);
// CONCATENATED MODULE: ./components/AdviseryItem.tsx




let AviseryButton = external_styled_components_default.a.a.withConfig({
  displayName: "AdviseryItem__AviseryButton",
  componentId: "z7dntv-0"
})(["margin-top:auto;align-self:flex-start;padding:15px 44px;background:", ";color:", ";&:hover{cursor:pointer;}"], props => props.inverted ? "var(--dark-green);" : "white;", props => props.inverted ? "white;" : "var(--dark-green);");

let AdviseryItem = ({
  className,
  title,
  description,
  inverted = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AviseryButton, {
      inverted: inverted,
      children: "Know More"
    })]
  });
};

AdviseryItem = external_styled_components_default()(AdviseryItem).withConfig({
  displayName: "AdviseryItem",
  componentId: "z7dntv-1"
})(["box-shadow:var(--shadow-lg);width:32%;display:flex;flex-direction:column;color:", ";background:", ";border-radius:10px;position:relative;padding:7rem 1rem 1rem 1rem;&::after{content:\"\";position:absolute;background:", ";width:70%;height:20px;top:50px;left:0;}p{font-size:18px;font-weight:500;color:", ";padding:2rem 0;}"], props => props.inverted ? "var(--grey-dark);" : "white;", props => props.inverted ? "white;" : "var(--dark-green)", props => props.inverted ? "var(--dark-green)" : "white;", props => props.inverted ? "var(--dark-grey)" : "white");
/* harmony default export */ var components_AdviseryItem = (AdviseryItem);
// CONCATENATED MODULE: ./components/Advisery.tsx






let Advisery = ({
  className
}) => {
  const avdiseryItems = [{
    title: "Advise 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    inverted: true
  }, {
    title: "Advise 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    inverted: false
  }, {
    title: "Advise 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    inverted: true
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "Advisery"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "items",
      children: avdiseryItems.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_AdviseryItem, {
        title: item.title,
        description: item.description,
        inverted: item.inverted
      }, idx))
    })]
  });
};

Advisery = external_styled_components_default()(Advisery).withConfig({
  displayName: "Advisery",
  componentId: "t6h9hg-0"
})(["grid-area:advisery;height:420px;& h2{font-size:36px;font-weight:bold;line-height:150%;padding:.25rem 0;}.items{display:flex;justify-content:space-between;}"]);
/* harmony default export */ var components_Advisery = (Advisery);
// CONCATENATED MODULE: ./context.ts

const appContext = /*#__PURE__*/external_react_default.a.createContext({
  showMap: false,
  toggleShowMap: () => undefined
});
// CONCATENATED MODULE: ./components/MainContent.tsx

















let MainContent = ({
  className,
  dailyWeather,
  forecasts
}) => {
  console.log({
    weather: {
      dailyWeather,
      forecasts
    }
  });
  const context = Object(external_react_["useContext"])(appContext);

  const showMapContainer = e => {
    context.toggleShowMap();
  };

  const overviews = [{
    name: "temperature",
    logo: temperature,
    value: dailyWeather.temperatures.value,
    unit: dailyWeather.temperatures.units
  }, {
    name: "Rainfall",
    logo: rain,
    value: dailyWeather.precipitation.amount,
    unit: dailyWeather.precipitation.units
  }, {
    name: "humidity",
    logo: humidity,
    value: dailyWeather.relativeHumidity.average,
    unit: ""
  }, {
    name: "Solar radiation",
    logo: radiation,
    value: dailyWeather.solar.amount,
    unit: dailyWeather.solar.units
  }, {
    name: "Wind speed",
    logo: wind,
    value: dailyWeather.wind.average,
    unit: dailyWeather.wind.units
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "location-icon-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "location-icon",
        onClick: showMapContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(assets_location, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "location-text",
        children: "Choose your location"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "overview-container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "overview",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "overview-title",
          children: "Overview"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "overview-content",
          children: overviews.map((el, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_OverviewItem, {
            name: el.name,
            logo: /*#__PURE__*/Object(jsx_runtime_["jsx"])(el.logo, {}),
            value: el.value,
            unit: el.unit
          }, idx))
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SidebarMenu, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Forecasts, {
      chartData: forecasts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Ads, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Advisery, {})]
  });
};

MainContent = external_styled_components_default()(MainContent).withConfig({
  displayName: "MainContent",
  componentId: "kvwt9u-0"
})(["margin-top:45px;display:grid;grid-template-columns:339px 1fr;grid-template-rows:200px 330px 100px auto;grid-template-areas:\"location overview\" \"menu forecasts\" \"ads forecasts\" \"ads advisery\";grid-row-gap:40px;grid-column-gap:20px;padding-left:calc(50% - var(--container) / 2);padding-right:calc(50% - var(--container) / 2);& div{}& section{}.sidebar{display:flex}.location-icon-container{height:202px;width:100%;display:grid;place-items:center;text-align:center;border-radius:10px;background-color:var(--grey-light);box-shadow:var(--shadow-sm);grid-area:location;cursor:pointer;}.location-icon{width:70px;height:70px;box-shadow:var(--shadow-sm);border-radius:50%;display:grid;place-items:center;}.location-text{}.overview-container{grid-area:overview;}.overview{width:100%;display:flex;flex-direction:column;height:100%;}.overview-title{font-size:36px;padding:10px 0px;}.overview-content{width:100%;display:flex;margin-top:auto;justify-content:space-between;align-self:end;}"]);
/* harmony default export */ var components_MainContent = (MainContent);
// CONCATENATED MODULE: ./assets/logo-green.svg
function logo_green_extends() { logo_green_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logo_green_extends.apply(this, arguments); }



var logo_green_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 0h41.708v8.41H12.973c-1.541 0-2.79 1.092-2.79 2.439v25.598H0V0zm20.087 36.447h-9.904v5.973c0 1.346 1.249 2.438 2.79 2.438h7.114V54h41.707V17.553h-9.903v-6.704c0-1.347-1.25-2.438-2.79-2.438h-7.393v9.142H20.087v18.894zm21.62-18.894v18.894h-21.62v8.41H49.1c1.54 0 2.79-1.09 2.79-2.437V17.553H41.708z",
  fill: "#48BB78"
});

var logo_green_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M76.505 12.36h-5.622l-1.072 2.268h-2.872l5.397-10.581h2.768l5.413 10.58h-2.94l-1.072-2.267zm-.882-1.859l-1.92-4.05-1.92 4.05h3.84zm15.476-4.005v6.771c0 1.492-.444 2.6-1.332 3.326-.888.725-2.185 1.088-3.892 1.088-.9 0-1.753-.096-2.56-.287-.807-.192-1.476-.469-2.006-.832l1.072-1.693c.392.283.888.504 1.488.665.6.172 1.199.257 1.799.257.934 0 1.62-.186 2.058-.559.45-.363.674-.917.674-1.662v-.348c-.703.675-1.683 1.013-2.94 1.013a5.656 5.656 0 01-2.352-.484 4.175 4.175 0 01-1.678-1.39c-.415-.595-.623-1.28-.623-2.056s.208-1.462.623-2.056a4.062 4.062 0 011.678-1.376 5.509 5.509 0 012.352-.498c1.35 0 2.375.388 3.079 1.164V6.496h2.56zM85.996 12.3c.715 0 1.297-.182 1.747-.544a1.78 1.78 0 00.692-1.451c0-.595-.23-1.074-.692-1.436-.45-.373-1.032-.56-1.747-.56-.715 0-1.303.187-1.764.56-.461.362-.692.841-.692 1.436 0 .594.23 1.078.692 1.45.461.363 1.05.545 1.764.545zm10.191-4.731c.323-.393.756-.69 1.298-.892.553-.202 1.187-.302 1.902-.302V8.55c-.3-.02-.501-.03-.605-.03-.773 0-1.378.191-1.816.574-.438.373-.657.938-.657 1.693v3.84H93.61V6.495h2.577v1.073zm4.805-1.073h2.698v8.131h-2.698V6.496zm1.349-1.134c-.496 0-.9-.126-1.211-.378-.311-.252-.467-.564-.467-.937 0-.373.156-.685.467-.937.311-.252.715-.378 1.211-.378.496 0 .899.12 1.211.363.311.242.467.544.467.907 0 .393-.156.72-.467.982-.312.252-.715.378-1.211.378zm6.984 9.386c-.773 0-1.528-.08-2.266-.241-.738-.172-1.326-.383-1.764-.635l.899-1.693a6.32 6.32 0 001.505.574 7.406 7.406 0 001.73.212c1.141 0 1.712-.247 1.712-.74 0-.232-.155-.399-.467-.5-.311-.1-.79-.186-1.435-.256-.761-.101-1.39-.217-1.886-.348a3.082 3.082 0 01-1.297-.696c-.358-.332-.536-.806-.536-1.42 0-.514.167-.968.501-1.36.346-.404.842-.716 1.488-.938.657-.221 1.43-.332 2.318-.332.657 0 1.309.065 1.954.196.658.121 1.199.292 1.626.514l-.899 1.678a5.989 5.989 0 00-2.681-.605c-.577 0-1.009.07-1.298.212-.288.14-.432.322-.432.544 0 .252.156.428.467.529.311.1.807.197 1.488.287.761.111 1.383.232 1.868.363.484.12.905.348 1.262.68.358.333.536.796.536 1.39 0 .505-.172.953-.518 1.346-.346.393-.854.7-1.523.922-.657.212-1.441.318-2.352.318zm15.433-8.252v8.131h-2.56v-.967a3.687 3.687 0 01-1.28.816 4.646 4.646 0 01-1.608.272c-1.223 0-2.191-.307-2.906-.922-.715-.614-1.073-1.526-1.073-2.735V6.496h2.699v4.247c0 1.31.628 1.965 1.885 1.965.646 0 1.165-.181 1.557-.544.392-.373.588-.922.588-1.648v-4.02h2.698zm2.5 0h2.698v8.131h-2.698V6.496zm1.349-1.134c-.496 0-.899-.126-1.211-.378-.311-.252-.467-.564-.467-.937 0-.373.156-.685.467-.937.312-.252.715-.378 1.211-.378.496 0 .9.12 1.211.363.311.242.467.544.467.907 0 .393-.156.72-.467.982-.311.252-.715.378-1.211.378zm9.856 8.873a3.102 3.102 0 01-.986.393c-.381.08-.784.12-1.211.12-1.107 0-1.966-.246-2.577-.74-.6-.494-.9-1.22-.9-2.177v-3.34h-1.435V6.677h1.435v-1.98h2.699v1.98h2.317v1.814h-2.317v3.31c0 .343.098.61.294.801.207.181.496.272.864.272.427 0 .79-.1 1.09-.302l.727 1.663zm4.645.514c-.773 0-1.527-.081-2.265-.242-.738-.172-1.327-.383-1.765-.635l.9-1.693c.414.232.916.423 1.504.574a7.397 7.397 0 001.729.212c1.143 0 1.713-.247 1.713-.74 0-.232-.156-.399-.467-.5-.311-.1-.79-.186-1.436-.256-.761-.101-1.389-.217-1.885-.348a3.091 3.091 0 01-1.298-.696c-.357-.332-.535-.806-.535-1.42 0-.514.167-.968.502-1.36.346-.404.841-.716 1.487-.938.657-.221 1.43-.332 2.318-.332.657 0 1.309.065 1.954.196.657.121 1.2.292 1.625.514l-.898 1.678a5.989 5.989 0 00-2.681-.605c-.577 0-1.01.07-1.297.212-.289.14-.433.322-.433.544 0 .252.155.428.466.529.313.1.808.197 1.489.287.76.111 1.383.232 1.868.363.484.12.905.348 1.262.68.358.333.537.796.537 1.39 0 .505-.173.953-.519 1.346-.346.393-.854.7-1.523.922-.657.212-1.441.318-2.352.318zM69.078 22.479c-.339 0-.645-.064-.92-.191a1.617 1.617 0 01-.645-.535 1.353 1.353 0 01-.233-.775c0-.287.078-.544.233-.77.158-.23.373-.408.645-.535.275-.13.583-.195.924-.195.288 0 .547.044.778.133.234.088.43.215.588.381l-.493.398a1.128 1.128 0 00-.835-.34c-.205 0-.389.04-.55.12a.912.912 0 00-.38.328.884.884 0 00-.132.48c0 .18.044.34.133.481a.94.94 0 00.38.332c.16.077.344.116.55.116.331 0 .61-.115.834-.344l.493.398a1.536 1.536 0 01-.588.385 2.2 2.2 0 01-.782.133zm2.963-.017a1.75 1.75 0 01-.725-.145 1.217 1.217 0 01-.499-.41 1.018 1.018 0 01-.18-.593c0-.22.06-.419.18-.593s.287-.31.499-.406c.214-.1.456-.149.725-.149.269 0 .51.05.721.15.212.096.378.231.498.405.12.174.18.372.18.593 0 .221-.06.419-.18.593s-.286.31-.498.41a1.718 1.718 0 01-.72.145zm0-.53a.66.66 0 00.465-.166.584.584 0 00.185-.452.571.571 0 00-.185-.448.65.65 0 00-.465-.17.667.667 0 00-.47.17.571.571 0 00-.184.448c0 .188.061.339.185.452.123.11.28.166.47.166zm3.445-1.766c.316 0 .57.083.763.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.132-.394-.089-.088-.217-.132-.385-.132a.63.63 0 00-.445.153c-.111.1-.166.249-.166.447v1.103h-.74v-2.23h.706v.261a.973.973 0 01.366-.215c.145-.053.305-.079.479-.079zm3.279 0c.316 0 .57.083.763.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.132-.394-.089-.088-.217-.132-.385-.132a.63.63 0 00-.445.153c-.111.1-.166.249-.166.447v1.103h-.74v-2.23h.707v.261a.973.973 0 01.365-.215c.145-.053.305-.079.479-.079zm4.255 1.156l-.014.174h-1.93a.526.526 0 00.246.328c.13.08.291.12.484.12.133 0 .25-.017.351-.05a.904.904 0 00.29-.165l.393.373c-.24.24-.591.36-1.053.36a1.89 1.89 0 01-.764-.145 1.202 1.202 0 01-.512-.41 1.018 1.018 0 01-.18-.593c0-.218.058-.414.176-.588.12-.177.282-.314.488-.41a1.6 1.6 0 01.697-.15c.25 0 .476.047.678.141a1.1 1.1 0 01.65 1.015zm-1.323-.667a.697.697 0 00-.422.124.514.514 0 00-.209.34h1.257a.512.512 0 00-.209-.335.674.674 0 00-.417-.129zm3.049 1.807c-.272 0-.517-.048-.735-.145a1.249 1.249 0 01-.508-.41 1.019 1.019 0 01-.18-.593c0-.22.06-.419.18-.593.124-.174.293-.31.508-.406.218-.1.463-.149.735-.149.269 0 .503.05.702.15.202.096.35.236.44.418l-.573.27a.644.644 0 00-.574-.308.702.702 0 00-.479.166.57.57 0 00-.19.452c0 .19.064.341.19.452.127.11.286.166.48.166a.637.637 0 00.573-.307l.574.273a.947.947 0 01-.441.415c-.2.1-.433.15-.702.15zm3.252-.14a.85.85 0 01-.27.107 1.6 1.6 0 01-.333.033c-.303 0-.539-.068-.706-.203-.165-.135-.247-.334-.247-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.027.167.08.22.057.05.136.074.238.074a.524.524 0 00.298-.083l.2.456zm.415-2.123h.74v2.23h-.74v-2.23zm.37-.31a.511.511 0 01-.332-.104.319.319 0 01-.128-.257c0-.102.043-.188.128-.257a.511.511 0 01.332-.104c.136 0 .246.033.332.1.085.066.128.149.128.248a.338.338 0 01-.128.27.51.51 0 01-.332.103zm2.607.277c.316 0 .571.083.764.249.196.166.294.411.294.737v1.277h-.74v-1.177c0-.177-.044-.308-.133-.394-.088-.088-.216-.132-.384-.132a.63.63 0 00-.446.153c-.11.1-.166.249-.166.447v1.103h-.74v-2.23h.707v.261a.973.973 0 01.365-.215c.146-.053.305-.079.48-.079zm4.389.033v1.857c0 .409-.122.713-.366.912-.243.199-.599.298-1.067.298-.246 0-.48-.026-.702-.079a1.64 1.64 0 01-.55-.228l.294-.464c.108.078.244.138.408.183.164.046.329.07.493.07.257 0 .445-.051.565-.153.123-.1.185-.252.185-.456v-.095c-.193.185-.462.277-.806.277-.235 0-.45-.044-.645-.132a1.146 1.146 0 01-.46-.382.96.96 0 01-.171-.563c0-.213.057-.401.17-.564.114-.163.268-.289.46-.377a1.51 1.51 0 01.645-.137c.37 0 .652.107.845.32v-.287h.702zm-1.4 1.592c.197 0 .356-.05.48-.15a.488.488 0 00.19-.397.477.477 0 00-.19-.394.725.725 0 00-.48-.154.744.744 0 00-.483.154c-.127.1-.19.23-.19.394 0 .163.063.295.19.398.126.099.287.149.483.149zm5.67.016h-1.542l-.294.622h-.787l1.48-2.901h.759l1.484 2.9h-.806l-.294-.62zm-.242-.51l-.526-1.11-.527 1.11h1.053zm4.243-1.098v1.857c0 .409-.121.713-.365.912-.243.199-.599.298-1.067.298-.247 0-.48-.026-.702-.079a1.647 1.647 0 01-.55-.228l.294-.464c.108.078.244.138.408.183.164.046.329.07.493.07.256 0 .444-.051.565-.153.123-.1.185-.252.185-.456v-.095c-.193.185-.462.277-.807.277-.234 0-.449-.044-.645-.132a1.153 1.153 0 01-.46-.382.959.959 0 01-.17-.563c0-.213.056-.401.17-.564a1.12 1.12 0 01.46-.377 1.51 1.51 0 01.645-.137c.37 0 .652.107.844.32v-.287h.702zm-1.399 1.592c.196 0 .356-.05.479-.15a.487.487 0 00.19-.397.475.475 0 00-.19-.394.725.725 0 00-.479-.154.742.742 0 00-.483.154c-.127.1-.19.23-.19.394 0 .163.063.295.19.398.126.099.287.149.483.149zm2.795-1.297a.815.815 0 01.355-.245c.152-.055.326-.083.522-.083v.597a3.05 3.05 0 00-.166-.008c-.212 0-.378.052-.498.157-.12.102-.18.257-.18.464v1.053h-.74v-2.23h.707v.294zm1.317-.295h.74v2.23h-.74v-2.23zm.37-.31a.51.51 0 01-.332-.104.32.32 0 01-.128-.257.32.32 0 01.128-.257.51.51 0 01.332-.104c.136 0 .247.033.332.1.085.066.128.149.128.248a.339.339 0 01-.128.27.51.51 0 01-.332.103zm1.057-.535h.739v3.075h-.739v-3.075zm3.912 3.125c-.262 0-.517-.03-.763-.091a1.93 1.93 0 01-.588-.245l.26-.506a2.16 2.16 0 001.096.303c.218 0 .379-.028.484-.083.104-.058.156-.134.156-.228a.198.198 0 00-.095-.17.684.684 0 00-.237-.112 4.972 4.972 0 00-.389-.091 5.99 5.99 0 01-.621-.157 1.043 1.043 0 01-.417-.253.633.633 0 01-.171-.464.73.73 0 01.156-.456c.105-.138.261-.248.47-.328.212-.08.47-.12.773-.12.212 0 .419.022.621.066.203.045.38.108.532.191l-.238.51a2.052 2.052 0 00-.92-.228c-.215 0-.374.03-.479.091-.101.06-.151.14-.151.24 0 .1.058.175.175.224.12.047.302.094.545.141.253.053.46.105.622.158.161.052.299.135.412.248a.61.61 0 01.176.46.728.728 0 01-.161.456 1.053 1.053 0 01-.475.323c-.212.08-.469.12-.773.12zm3.527-.158a.835.835 0 01-.27.108 1.597 1.597 0 01-.332.033c-.304 0-.539-.068-.707-.203-.164-.135-.246-.334-.246-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.026.167.08.22.057.05.136.074.237.074a.524.524 0 00.299-.083l.199.456zm1.445-2.155c.395 0 .699.083.91.249.212.163.318.41.318.742v1.272h-.692v-.278c-.139.207-.399.311-.778.311-.196 0-.367-.029-.512-.087a.737.737 0 01-.327-.24.569.569 0 01-.114-.349c0-.207.088-.37.265-.489.181-.118.457-.178.83-.178h.588a.382.382 0 00-.147-.323c-.098-.077-.245-.116-.441-.116-.136 0-.27.02-.403.058-.13.036-.24.086-.332.15l-.265-.453c.139-.085.305-.152.498-.198.196-.047.396-.07.602-.07zm-.057 1.86a.736.736 0 00.337-.074.444.444 0 00.208-.228v-.228h-.507c-.304 0-.455.088-.455.262 0 .082.036.149.109.198.076.047.178.07.308.07zm3.6.295a.835.835 0 01-.27.108 1.597 1.597 0 01-.332.033c-.303 0-.539-.068-.707-.203-.164-.135-.246-.334-.246-.597v-.916h-.394v-.497h.394v-.543h.74v.543h.635v.497h-.635v.908c0 .094.027.167.08.22a.35.35 0 00.238.074.52.52 0 00.298-.083l.199.456zm2.836-.999c0 .009-.004.067-.014.174h-1.93a.526.526 0 00.247.328.9.9 0 00.483.12c.133 0 .25-.017.351-.05a.905.905 0 00.29-.165l.393.373c-.24.24-.591.36-1.053.36a1.89 1.89 0 01-.763-.145 1.197 1.197 0 01-.512-.41 1.013 1.013 0 01-.181-.593c0-.218.059-.414.176-.588.12-.177.283-.314.488-.41.209-.1.441-.15.698-.15.249 0 .475.047.678.141.202.094.36.23.474.406.117.174.175.377.175.61zm-1.323-.667a.699.699 0 00-.422.124.517.517 0 00-.209.34h1.257a.513.513 0 00-.208-.335.675.675 0 00-.418-.129zm6.256-1.127v2.9h-.768V21.24h-1.508v1.19h-.769v-2.901h.769v1.144h1.508v-1.144h.768zm1.948 2.934c-.269 0-.511-.048-.726-.145a1.216 1.216 0 01-.498-.41 1.02 1.02 0 01-.18-.593c0-.22.06-.419.18-.593s.286-.31.498-.406c.215-.1.457-.149.726-.149.268 0 .509.05.72.15.212.096.378.231.498.405.121.174.181.372.181.593 0 .221-.06.419-.181.593-.12.174-.286.31-.498.41a1.713 1.713 0 01-.72.145zm0-.53a.658.658 0 00.464-.166.582.582 0 00.185-.452.569.569 0 00-.185-.448.65.65 0 00-.464-.17.667.667 0 00-.47.17.572.572 0 00-.185.448c0 .188.062.339.185.452.123.11.28.166.47.166zm1.893-2.578h.74v3.075h-.74v-3.075zm4.026 0v3.075h-.707v-.257c-.183.193-.449.29-.797.29-.24 0-.458-.047-.654-.14a1.09 1.09 0 01-.455-.403 1.1 1.1 0 01-.166-.605c0-.23.055-.431.166-.605a1.09 1.09 0 01.455-.402c.196-.094.414-.14.654-.14.326 0 .58.089.764.268v-1.081h.74zm-1.376 2.578a.67.67 0 00.465-.166.585.585 0 00.185-.452.572.572 0 00-.185-.448.66.66 0 00-.465-.17.666.666 0 00-.469.17.572.572 0 00-.185.448c0 .188.062.339.185.452.123.11.28.166.469.166zm4.56-.61l-.014.174h-1.931a.526.526 0 00.247.328c.13.08.291.12.484.12.133 0 .25-.017.351-.05a.911.911 0 00.289-.165l.394.373c-.241.24-.592.36-1.053.36-.288 0-.542-.048-.764-.145a1.203 1.203 0 01-.512-.41 1.02 1.02 0 01-.18-.593c0-.218.058-.414.175-.588.12-.177.283-.314.489-.41.208-.1.441-.15.697-.15.25 0 .476.047.678.141a1.091 1.091 0 01.65 1.015zm-1.323-.667a.695.695 0 00-.422.124.513.513 0 00-.209.34h1.257a.51.51 0 00-.209-.335.674.674 0 00-.417-.129zm2.522-.162a.813.813 0 01.356-.244 1.52 1.52 0 01.522-.083v.597a3.145 3.145 0 00-.166-.008c-.212 0-.378.052-.498.157-.12.102-.18.257-.18.464v1.053h-.741v-2.23h.707v.294zm2.185 1.97c-.212 0-.419-.023-.621-.067a1.807 1.807 0 01-.484-.174l.247-.465c.114.064.251.117.413.158.16.039.319.058.474.058.312 0 .469-.068.469-.203 0-.064-.042-.11-.127-.137a2.183 2.183 0 00-.395-.07 4.226 4.226 0 01-.516-.096.84.84 0 01-.356-.19c-.099-.091-.148-.221-.148-.39 0-.14.046-.265.138-.373a.916.916 0 01.408-.257c.181-.06.392-.09.636-.09.18 0 .358.017.535.053.18.033.33.08.447.14l-.247.46a1.643 1.643 0 00-.735-.165.848.848 0 00-.356.058c-.079.039-.118.088-.118.15 0 .068.043.117.128.144a2.5 2.5 0 00.407.08c.209.03.38.063.512.099a.776.776 0 01.347.186.495.495 0 01.147.381.546.546 0 01-.142.37.941.941 0 01-.417.252c-.18.058-.397.087-.646.087z",
  fill: "#48BB78"
});

function SvgLogoGreen(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", logo_green_extends({
    width: 148,
    height: 54,
    fill: "none"
  }, props), logo_green_ref, logo_green_ref2);
}

/* harmony default export */ var logo_green = (SvgLogoGreen);
// CONCATENATED MODULE: ./components/FooterInfo.tsx





let FooterInfo = ({
  className,
  title,
  elements
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: "title",
      children: title
    }), elements.map((el, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text",
      children: el
    }, idx))]
  });
};

FooterInfo = external_styled_components_default()(FooterInfo).withConfig({
  displayName: "FooterInfo",
  componentId: "krcuy5-0"
})(["display:flex;text-align:center;flex-direction:column;padding:0 0 0 0;color:var(--grey);.title{font-size:1.2rem;font-weight:500;line-height:150%;}.text{font-size:1.125rem;line-height:150%;padding:.5rem 0;}"]);
/* harmony default export */ var components_FooterInfo = (FooterInfo);
// CONCATENATED MODULE: ./assets/up.svg
function up_extends() { up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return up_extends.apply(this, arguments); }



var up_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8 15V1M1 8l7-7 7 7",
  stroke: "#fff",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", up_extends({
    width: 16,
    height: 16,
    fill: "none"
  }, props), up_ref);
}

/* harmony default export */ var up = (SvgUp);
// CONCATENATED MODULE: ./components/Footer.tsx







const DownloadButton = external_styled_components_default.a.a.withConfig({
  displayName: "Footer__DownloadButton",
  componentId: "aufhzx-0"
})(["background:var(--dark-green);color:white;padding:1rem 3rem;text-align:center;border-radius:10px;display:inline-block;font-weight:bold;width:100%;&:hover{cursor:pointer;}"]);

let Footer = ({
  className
}) => {
  const footerSections = [{
    title: "Commnunity",
    elements: ["Create account", "Go premium", "Refer a freind", "Get coupon code"]
  }, {
    title: "Support",
    elements: ["terms and conditions", "privacy & policy", "copyright issue", "Get help"]
  }, {
    title: "Join Us",
    elements: ["Become a member", "Join agrilink", "Build your own software", "Partnership"]
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "footer container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "logo",
        onClick: () => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        }),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo_green, {})
      }), footerSections.map((section, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FooterInfo, {
        title: section.title,
        elements: section.elements
      }, idx)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "download",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Download App"
        }), ["Apple IOS", "Google play"].map((el, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(DownloadButton, {
          className: "download-button",
          children: el
        }, idx))]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "copyright container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "Copyright 2020 AbundeSEG"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: "go-up",
        onClick: () => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        }),
        children: ["Go to top \xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(up, {})]
      })]
    })]
  });
};

Footer = external_styled_components_default()(Footer).withConfig({
  displayName: "Footer",
  componentId: "aufhzx-1"
})([".footer{display:grid;grid-template-columns:12% repeat(4,1fr);color:var(--grey);padding-bottom:1rem;}.download{justify-content:space-between;& .download-button{margin:1rem 0;}}.copyright{background:var(--green);color:white;padding-top:1rem;padding-bottom:1rem;display:flex;justify-content:space-between;& span{display:inline-block;}}.go-up{cursor:pointer;}"]);
/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Hero.tsx




let Hero = ({
  className
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: className,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "Agricultural Intelligence"
    })
  });
};

Hero = external_styled_components_default()(Hero).withConfig({
  displayName: "Hero",
  componentId: "sc-1g1gw3i-0"
})(["width:100vw;height:444px;background:linear-gradient(92.5deg,#040404 -7.02%,rgba(9,15,12,0) 111.74%),url(\"/hero-image.png\");padding-top:56px;padding-left:calc(50% - var(--container) / 2);& h2{font-size:64px;font-weight:bold;color:white;}"]);
/* harmony default export */ var components_Hero = (Hero);
// CONCATENATED MODULE: ./components/NewsletterSub.tsx




const SubscribeButton = external_styled_components_default.a.a.withConfig({
  displayName: "NewsletterSub__SubscribeButton",
  componentId: "sc-104kaby-0"
})(["font-size:1.5rem;font-weight:bold;color:white;background:var(--green);padding:1.25rem 5rem;border-radius:34px;transition:all 200ms ease-in-out;&:hover{cursor:pointer;box-shadow:var(--shadow-lg);}"]);

let NewsletterSub = ({
  className
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: "title",
      children: "To get the latest News & Further updates"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      className: "subscribe",
      children: "Subscribe To Our Newsletter"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: "sub-button",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubscribeButton, {
        children: "Subscribe"
      })
    })]
  });
};

NewsletterSub = external_styled_components_default()(NewsletterSub).withConfig({
  displayName: "NewsletterSub",
  componentId: "sc-104kaby-1"
})(["text-align:center;padding:8rem 0px;.title{color:var(--green);font-size:2.25rem;font-weight:500;line-height:150%;}.subscribe{font-size:2.25rem;font-weight:bold;color:var(--dark-green);line-height:150%;}.sub-button{padding:2rem 0;}"]);
/* harmony default export */ var components_NewsletterSub = (NewsletterSub);
// EXTERNAL MODULE: external "mapbox-gl"
var external_mapbox_gl_ = __webpack_require__("L/bp");
var external_mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(external_mapbox_gl_);

// CONCATENATED MODULE: ./components/MapModal.tsx



 // const mapboxAccessToken = process.env.MAP_ACCESS_TOKEN

const mapboxAccessToken = "pk.eyJ1IjoiZXRhYmFsaW9uZWwiLCJhIjoiY2tobmkxcmp5MDIxcjJ1cGVtcnoxbTRnayJ9.F8FUtpO8FsYJFYhWxfAr1Q";

let MapModal = ({
  className,
  updateLonLat,
  closeModal
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    lat: "7.369722",
    lon: "12.354722",
    zoom: 0.9
  });
  const mapContainer = Object(external_react_["useRef"])(null);

  const handleCloseModal = e => {
    if (e.target.id == "containerMap") {
      closeModal();
    }
  };

  Object(external_react_["useEffect"])(() => {
    external_mapbox_gl_default.a.accessToken = mapboxAccessToken;
    console.log({
      mapboxAccessToken,
      mapboxaccess: external_mapbox_gl_default.a.accessToken
    });
    const map = new external_mapbox_gl_default.a.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [state.lon, state.lat],
      zoom: state.zoom
    });
    map.addControl(new external_mapbox_gl_default.a.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    map.on('move', () => {
      setState({
        lon: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    map.on("click", e => {
      console.log(e.lngLat);
      const {
        lng,
        lat
      } = e.lngLat;
      updateLonLat(lat, lng);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: className,
    onClick: handleCloseModal,
    id: "containerMap",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "map",
      ref: mapContainer
    })
  });
};

MapModal = external_styled_components_default()(MapModal).withConfig({
  displayName: "MapModal",
  componentId: "sc-9p4ei7-0"
})(["display:grid;place-items:center;width:100%;height:100%;background-color:rgba(0,0,0,0.8);position:fixed;top:0;left:0;bottom:0;right:0;#map{width:65%;height:60%;background:white;border-radius:10px;opacity:1;z-index:1;}"]);
/* harmony default export */ var components_MapModal = (MapModal);
// CONCATENATED MODULE: ./components/index.tsx







// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/index.ts
// import fetch from  "node-fetch"

const tokenUrl = "https://api.awhere.com/oauth/token";
const baseApiUrl = process.env.BASE_API_URL;

const forecastsUrl = (lat, lon) => `${baseApiUrl}/weather/locations/${lat},${lon}/forecasts`;

const dailyWeatherUrl = (lat, lon, date = "") => {
  let result = `${baseApiUrl}/weather/locations/${lat},${lon}/forecasts`;

  if (date) {
    result = `${result}/${date}`;
  }

  return result;
};

const getForecasts = async (lat, lon) => {
  const access_token = await getAccessToken();
  const url = forecastsUrl(lat, lon);
  const req = await external_axios_default.a.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  });
  const res = await req.data;
  console.log(res);
  return res.forecasts;
};
const getDailyWeather = async (lat, lon) => {
  let date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const access_token = await getAccessToken();
  const url = dailyWeatherUrl(lat, lon, formattedDate);
  const req = await external_axios_default.a.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  });
  const res = await req.data;
  console.log(res);
  return res.forecast[0];
};

const getAccessToken = async () => {
  const api_key = process.env.AWHERE_KEY;
  const api_secret = process.env.AWHERE_SECRET;
  const encodedKey = Buffer.from(`${api_key}:${api_secret}`).toString("base64");
  const req = await external_axios_default.a.post(tokenUrl, "grant_type=client_credentials", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedKey}`,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  });
  console.log(req);
  const res = await req.data;
  console.log(res);
  return res.access_token;
};
// CONCATENATED MODULE: ./pages/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Head from 'next/head'




function Home({
  dailyWeather,
  forecasts
}) {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    showMap: false
  });

  const toggleShowMap = () => setState(old => _objectSpread(_objectSpread({}, old), {}, {
    showMap: !old.showMap
  }));

  const {
    0: appData,
    1: setAppData
  } = Object(external_react_["useState"])({
    dailyWeather,
    forecasts
  });
  const {
    0: {
      lon,
      lat
    },
    1: setLonLat
  } = Object(external_react_["useState"])({
    lon: "12.354722",
    lat: "7.369722"
  });

  const closeModal = () => {
    setState(old => ({
      showMap: false
    }));
  };

  const updateLonLat = async (lat, lon) => {
    try {
      const dailyWeather = await getDailyWeather(lat, lon);
      const forecasts = await getForecasts(lat, lon);
      setAppData(old => ({
        dailyWeather,
        forecasts
      }));
      setState(old => _objectSpread(_objectSpread({}, old), {}, {
        showMap: false
      }));
    } catch (error) {
      console.log(error);
      setState(old => _objectSpread(_objectSpread({}, old), {}, {
        showMap: false
      }));
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(appContext.Provider, {
    value: {
      showMap: state.showMap,
      toggleShowMap: toggleShowMap
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Hero, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MainContent, {
      dailyWeather: appData.dailyWeather,
      forecasts: appData.forecasts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_NewsletterSub, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {}), state.showMap && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MapModal, {
      updateLonLat: updateLonLat,
      closeModal: closeModal
    })]
  });
}
const getServerSideProps = async context => {
  try {
    const defaultLat = "7.369722";
    const defaultLon = "12.354722";
    const dailyWeather = await getDailyWeather(defaultLat, defaultLon);
    const forecasts = await getForecasts(defaultLat, defaultLon);
    return {
      props: {
        dailyWeather,
        forecasts
      }
    };
  } catch (error) {
    console.log(error);
    return {
      props: {}
    };
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "L/bp":
/***/ (function(module, exports) {

module.exports = require("mapbox-gl");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });