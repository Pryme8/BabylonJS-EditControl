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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tst/Test-EditControl.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/EditControl.js":
/*!*****************************!*\
  !*** ./dist/EditControl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){if(true)module.exports=i(__webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js"));else { var s, h; }}(window,function(t){return function(t){var i={};function h(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,h),n.l=!0,n.exports}return h.m=t,h.c=i,h.d=function(t,i,s){h.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},h.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"h",{value:!0})},h.t=function(t,i){if(1&i&&(t=h(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.h)return t;var s=Object.create(null);if(h.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)h.d(s,n,function(i){return t[i]}.bind(null,n));return s},h.n=function(t){var i=t&&t.h?function(){return t.default}:function(){return t};return h.d(i,"a",i),i},h.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},h.p="",h(h.s=1)}([function(i,h){i.exports=t},function(t,i,h){"use strict";h.r(i),h.d(i,"EditControl",function(){return u});var s,n=h(0);!function(t){t[t.TRANS=0]="TRANS",t[t.ROT=1]="ROT",t[t.SCALE=2]="SCALE"}(s||(s={}));var u=function(){function t(t,i,h,s,u,e){var f=this;this.u=!0,this.v=!1,this.M=!1,this.L=1,this.j=Math.PI/18,this.A=.4,this.O=1,this.S=.02,this.R=new n.Color3(1,.2,.2),this.T=new n.Color3(.2,1,.2),this.g=new n.Color3(.2,.2,1),this.k=new n.Color3(1,1,1),this.q=new n.Color3(1,1,.2),this.C=.75,this._=new n.Matrix,this.N=new n.Vector3(0,0,0),this.B=2,this.D=new n.Vector3(0,0,0),this.F=new n.Vector3(0,0,0),this.G="",this.H=!1,this.I=null,this.J=null,this.K=null,this.P=!1,this.U=!1,this.V=!1,this.W=!1,this.$=new n.Vector3(0,0,0),this.tt=new n.Vector3(0,0,0),this.it=!1,this.ht=new n.Vector3(0,0,0),this.st=.25,this.nt=new n.Vector3(0,0,0),this.ut=new n.Vector3(0,0,0),this.rt=new n.Vector3(0,0,0),this.et=new n.Vector3(0,0,0),this.ft=!1,this.ot=0,this.lt=!1,this.ct=!1,this.at=!1,this.vt=180,this.wt=new n.Vector3(this.L,this.L,this.L),this.Mt=new n.Vector3(0,0,0),this.Xt=new n.Vector3(0,0,0),this.Yt=new n.Vector3(0,0,0),this.Zt=new n.Matrix,this.bt=t,this.pt=i,this.dt=h,null!=s&&(this.O=s),this.ft=null!==u&&u,this.Lt(),null!=e&&(this.S=e),this.yt=t.getScene(),this.jt=new r(t,10),t.computeWorldMatrix(!0),this.zt=this.At(t),this.Ot(t),this.St=new n.Mesh("",this.yt),this.St.rotationQuaternion=n.Quaternion.Identity(),this.St.visibility=0,this.St.isPickable=!1,this.xt(this.yt),this.Et().parent=this.St,this.Rt().parent=this.St,this.Tt=function(t){return f.gt(t)},this.kt=function(t){return f.qt(t)},this.Ct=function(t){return f._t(t)},h.addEventListener("pointerdown",this.Tt,!1),h.addEventListener("pointerup",this.kt,!1),h.addEventListener("pointermove",this.Ct,!1),this.Nt=function(){return f.Qt()},this.yt.registerBeforeRender(this.Nt)}return t.prototype.Lt=function(){if(!this.ft&&(null==this.bt.rotationQuaternion||null==this.bt.rotationQuaternion))throw"Error: Eulerian is set to false but the mesh's rotationQuaternion is not set."},t.prototype.Qt=function(){this.St.position=this.bt.getAbsolutePivotPoint(),this.Bt(),this.Dt(),this.u?(this.St.getWorldMatrix().invertToRef(this._),n.Vector3.TransformCoordinatesToRef(this.pt.position,this._,this.N),this.Ft.lookAt(this.N,0,0,0,n.Space.LOCAL)):(this.pt.position.subtractToRef(this.St.position,this.N),this.Ft.lookAt(this.pt.position,0,0,0,n.Space.WORLD)),this.ct?this.Gt():this.lt?this.Ht(this.It,this.Jt,this.Kt):this.at&&this.Ht(this.Pt,this.Ut,this.Vt)},t.prototype.Bt=function(){if(this.u)if(null==this.bt.parent)if(this.ft){var t=this.bt.rotation;n.Quaternion.RotationYawPitchRollToRef(t.y,t.x,t.z,this.St.rotationQuaternion)}else this.St.rotationQuaternion.copyFrom(this.bt.rotationQuaternion);else{if(this.Wt(this.bt))return;this.bt.getWorldMatrix().getRotationMatrixToRef(this.Zt),n.Quaternion.FromRotationMatrixToRef(this.Zt,this.St.rotationQuaternion)}},t.prototype.Wt=function(t){if(null==t.parent)return!1;for(;null!=t.parent;){if(t.parent.scaling.x!=t.parent.scaling.y||t.parent.scaling.y!=t.parent.scaling.z)return!0;t=t.parent}return!1},t.prototype.Dt=function(){this.St.position.subtractToRef(this.pt.position,this.D),n.Vector3.FromFloatArrayToRef(this.pt.getWorldMatrix().asArray(),8,this.F);var t=n.Vector3.Dot(this.D,this.F)/this.F.length(),i=Math.abs(t/this.B);n.Vector3.FromFloatsToRef(i,i,i,this.St.scaling)},t.prototype.Gt=function(){var t=Math.atan(this.N.y/this.N.z);this.N.z>=0?this.$t.rotation.x=-t:this.$t.rotation.x=-t-Math.PI;var i=Math.atan(this.N.x/this.N.z);this.N.z>=0?this.ti.rotation.y=i:this.ti.rotation.y=i+Math.PI;var h=Math.atan(this.N.x/this.N.y);this.N.y>=0?this.ii.rotation.z=-h:this.ii.rotation.z=-h-Math.PI},t.prototype.Ht=function(t,i,h){var s=this.N;t.rotation.x=0,t.rotation.y=0,t.rotation.z=0,i.rotation.x=0,i.rotation.y=0,i.rotation.z=0,h.rotation.x=0,h.rotation.y=0,h.rotation.z=0,s.x<=0&&s.y>=0&&s.z>=0?(t.rotation.z=3.14,h.rotation.y=3.14):s.x<=0&&s.y>=0&&s.z<=0?(t.rotation.y=3.14,i.rotation.y=3.14,h.rotation.y=3.14):s.x>=0&&s.y>=0&&s.z<=0?(t.rotation.x=3.14,i.rotation.y=3.14):s.x>=0&&s.y<=0&&s.z>=0?(i.rotation.z=3.14,h.rotation.x=3.14):s.x<=0&&s.y<=0&&s.z>=0?(t.rotation.z=3.14,i.rotation.z=3.14,h.rotation.z=3.14):s.x<=0&&s.y<=0&&s.z<=0?(t.rotation.y=3.14,i.rotation.x=3.14,h.rotation.z=3.14):s.x>=0&&s.y<=0&&s.z<=0&&(t.rotation.x=3.14,i.rotation.x=3.14,h.rotation.x=3.14)},t.prototype.switchTo=function(t,i){t.computeWorldMatrix(!0),this.bt=t,null!=i&&(this.ft=i),this.Lt(),this.Ot(t),this.jt=new r(t,10),this.refreshBoundingInfo()},t.prototype.setUndoCount=function(t){this.jt.setCapacity(t)},t.prototype.undo=function(){var t=this.jt.undo();this.bt.computeWorldMatrix(!0),this.Ot(this.bt),this.hi(t),this.si(t),this.ni(t)},t.prototype.redo=function(){var t=this.jt.redo();this.bt.computeWorldMatrix(!0),this.Ot(this.bt),this.hi(t),this.si(t),this.ni(t)},t.prototype.detach=function(){this.dt.removeEventListener("pointerdown",this.Tt,!1),this.dt.removeEventListener("pointerup",this.kt,!1),this.dt.removeEventListener("pointermove",this.Ct,!1),this.yt.unregisterBeforeRender(this.Nt),this.removeAllActionListeners(),this.ui()},t.prototype.hide=function(){this.H=!0,this.lt?(this.G="T",this.disableTranslation()):this.ct?(this.G="R",this.disableRotation()):this.at&&(this.G="S",this.disableScaling()),this.ri()},t.prototype.ri=function(){this.ei.visibility=0,this.fi.visibility=0,this.oi.visibility=0},t.prototype.li=function(){this.ei.visibility=this.C,this.fi.visibility=this.C,this.oi.visibility=this.C},t.prototype.show=function(){this.H=!1,this.li(),"T"==this.G?this.enableTranslation():"R"==this.G?this.enableRotation():"S"==this.G&&this.enableScaling()},t.prototype.isHidden=function(){return this.H},t.prototype.ui=function(){this.St.dispose(),this.ci(),this.jt=null},t.prototype.addActionListener=function(t){this.I=t},t.prototype.removeActionListener=function(){this.I=null},t.prototype.addActionStartListener=function(t){this.J=t},t.prototype.removeActionStartListener=function(){this.J=null},t.prototype.addActionEndListener=function(t){this.K=t},t.prototype.removeActionEndListener=function(){this.K=null},t.prototype.removeAllActionListeners=function(){this.I=null,this.J=null,this.K=null},t.prototype.gt=function(t){var i=this;if(t.preventDefault(),this.P=!0,0==t.button){var h=this.yt.pick(this.yt.pointerX,this.yt.pointerY,function(t){if(i.lt){if(t==i.ai||t==i.vi||t==i.wi||t==i.It||t==i.Jt||t==i.Kt||t==i.Mi)return!0}else if(i.ct){if(t==i.$t||t==i.ti||t==i.ii||t==i.Xi)return!0}else if(i.at&&(t==i.Yi||t==i.Zi||t==i.bi||t==i.Pt||t==i.Ut||t==i.Vt||t==i.pi))return!0;return!1},null,this.pt);if(h.hit){this.di=h.pickedMesh;var s=this.di.getChildren();s.length>0?s[0].visibility=this.C:this.di.visibility=this.C;var n=this.di.name;"X"==n?this.Li.visibility=1:"Y"==n?this.yi.visibility=1:"Z"==n?this.ji.visibility=1:"XZ"==n?(this.Li.visibility=1,this.ji.visibility=1):"ZY"==n?(this.ji.visibility=1,this.yi.visibility=1):"YX"==n?(this.yi.visibility=1,this.Li.visibility=1):"ALL"==n&&(this.Li.visibility=1,this.yi.visibility=1,this.ji.visibility=1),this.zi(!0),this.Ai=this.mi(this.di),null!=this.Ai?this.Oi=this.Si():this.Oi=null,window.setTimeout(function(t,h){return i.xi(t,h)},0,this.pt,this.dt)}}},t.prototype.zi=function(t){this.V=t,t?(this.Ei(),this.Ri==s.ROT&&(this.ot=0),this.hi(this.Ri)):this.ni(this.Ri)},t.prototype.isEditing=function(){return this.V},t.prototype.xi=function(t,i){var h=i;t.detachControl(h)},t.prototype.isPointerOver=function(){return this.U},t.prototype.Ti=function(){var t=this,i=this.yt.pick(this.yt.pointerX,this.yt.pointerY,function(i){if(t.lt){if(i==t.ai||i==t.vi||i==t.wi||i==t.It||i==t.Jt||i==t.Kt||i==t.Mi)return!0}else if(t.ct){if(i==t.$t||i==t.ti||i==t.ii||i==t.Xi)return!0}else if(t.at&&(i==t.Yi||i==t.Zi||i==t.bi||i==t.Pt||i==t.Ut||i==t.Vt||i==t.pi))return!0;return!1},null,this.pt);if(i.hit){if(i.pickedMesh!=this.gi){if(this.U=!0,this.ki(),this.gi=i.pickedMesh,this.ct)this.qi=this.gi.getChildren()[0].color,this.gi.getChildren()[0].color=this.k;else{var h=this.gi.getChildren();h.length>0?(this.Ci=h[0].material,h[0].material=this._i):(this.Ci=this.gi.material,this.gi.material=this._i)}"X"==this.gi.name?this.ei.color=this.k:"Y"==this.gi.name?this.fi.color=this.k:"Z"==this.gi.name&&(this.oi.color=this.k)}}else this.U=!1,null!=this.gi&&(this.Ni(this.gi),this.gi=null)},t.prototype.ki=function(){null!=this.gi&&(this.gi.visibility=0,this.Ni(this.gi))},t.prototype.Ni=function(t){switch(t.name){case"X":this.ei.color=this.R;break;case"Y":this.fi.color=this.T;break;case"Z":this.oi.color=this.g}if(this.ct)t.getChildren()[0].color=this.qi;else{var i=t.getChildren();i.length>0?i[0].material=this.Ci:t.material=this.Ci}},t.prototype.qt=function(t){this.P=!1,this.V&&(this.pt.attachControl(this.dt),this.zi(!1),this.Qi(),null!=this.gi&&(this.Ni(this.gi),this.gi=null),this.jt.add(this.Ri))},t.prototype.Ei=function(){this.lt?this.Ri=s.TRANS:this.ct?this.Ri=s.ROT:this.at&&(this.Ri=s.SCALE)},t.prototype.si=function(t){null!=this.I&&this.I(t)},t.prototype.hi=function(t){null!=this.J&&this.J(t)},t.prototype.ni=function(t){null!=this.K&&this.K(t)},t.prototype._t=function(t){if(this.P){if(this.V&&null!=this.Oi){var i=this.Si();if(null!=i){if(this.ct)this.Bi(this.bt,this.di,i,this.Oi);else{var h=i.subtract(this.Oi);if(0==h.x&&0==h.y&&0==h.z)return;this.lt?this.Di(h):this.at&&this.u&&this.Fi(h)}this.Oi=i,this.si(this.Ri)}}}else this.Ti()},t.prototype.mi=function(t){var i=t.name;if(this.lt||this.at){if("XZ"==i)return this.Gi;if("ZY"==i)return this.Hi;if("YX"==i)return this.Ii;if("ALL"==i)return this.Ft;this.St.getWorldMatrix().invertToRef(this._),n.Vector3.TransformCoordinatesToRef(this.pt.position,this._,this.N);var h=this.N;if("X"===i)return Math.abs(h.y)>Math.abs(h.z)?this.Gi:this.Ii;if("Z"===i)return Math.abs(h.y)>Math.abs(h.x)?this.Gi:this.Hi;if("Y"===i)return Math.abs(h.z)>Math.abs(h.x)?this.Ii:this.Hi}else{if(!this.ct)return null;this.W=!1,this.St.getWorldMatrix().invertToRef(this._),n.Vector3.TransformCoordinatesToRef(this.pt.position,this._,this.N);h=this.N;switch(i){case"X":return Math.abs(h.x)<.2?(this.W=!0,this.Ft):this.Hi;case"Y":return Math.abs(h.y)<.2?(this.W=!0,this.Ft):this.Gi;case"Z":return Math.abs(h.z)<.2?(this.W=!0,this.Ft):this.Ii;default:return this.Ft}}},t.prototype.Di=function(t){null!=this.bt.parent&&this.Wt(this.bt)?this.Ot(this.St):this.Ot(this.bt);var i=this.di.name;"ALL"==i?this.$=t:(this.$.x=0,this.$.y=0,this.$.z=0,"X"!=i&&"XZ"!=i&&"YX"!=i||(this.u?this.$.x=n.Vector3.Dot(t,this.ut)/this.ut.length():this.$.x=t.x),"Y"!=i&&"ZY"!=i&&"YX"!=i||(this.u?this.$.y=n.Vector3.Dot(t,this.rt)/this.rt.length():this.$.y=t.y),"Z"!=i&&"XZ"!=i&&"ZY"!=i||(this.u?this.$.z=n.Vector3.Dot(t,this.et)/this.et.length():this.$.z=t.z)),this.Ji(this.bt,this.$,this.u),this.Ki&&(this.bt.position.x=Math.max(this.bt.position.x,this.Ki.x),this.bt.position.y=Math.max(this.bt.position.y,this.Ki.y),this.bt.position.z=Math.max(this.bt.position.z,this.Ki.z)),this.Pi&&(this.bt.position.x=Math.min(this.bt.position.x,this.Pi.x),this.bt.position.y=Math.min(this.bt.position.y,this.Pi.y),this.bt.position.z=Math.min(this.bt.position.z,this.Pi.z)),this.bt.computeWorldMatrix(!0)},t.prototype.Ji=function(t,i,h){if(this.v){var s=!1;if(this.tt.addInPlace(i),Math.abs(this.tt.x)>this.wt.x&&(this.tt.x>0?i.x=this.wt.x:i.x=-this.wt.x,s=!0),Math.abs(this.tt.y)>this.wt.y&&(this.tt.y>0?i.y=this.wt.y:i.y=-this.wt.y,s=!0),Math.abs(this.tt.z)>this.wt.z&&(this.tt.z>0?i.z=this.wt.z:i.z=-this.wt.z,s=!0),!s)return;Math.abs(i.x)!==this.wt.x&&(i.x=0),Math.abs(i.y)!==this.wt.y&&(i.y=0),Math.abs(i.z)!==this.wt.z&&(i.z=0),n.Vector3.FromFloatsToRef(0,0,0,this.tt),s=!1}h?(this.ut.normalizeToRef(this.Mt),this.rt.normalizeToRef(this.Xt),this.et.normalizeToRef(this.Yt),this.bt.translate(this.Mt,i.x,n.Space.WORLD),this.bt.translate(this.Xt,i.y,n.Space.WORLD),this.bt.translate(this.Yt,i.z,n.Space.WORLD)):null==this.bt.parent?this.bt.position.addInPlace(i):this.bt.setAbsolutePosition(i.addInPlace(this.bt.absolutePosition))},t.prototype.Fi=function(t){this.Ot(this.bt),this.nt.x=0,this.nt.y=0,this.nt.z=0;var i=this.di.name;"X"!=i&&"XZ"!=i&&"YX"!=i||(this.nt.x=n.Vector3.Dot(t,this.ut)/this.ut.length(),this.bt.scaling.x<0&&(this.nt.x=-this.nt.x)),"Y"!=i&&"ZY"!=i&&"YX"!=i||(this.nt.y=n.Vector3.Dot(t,this.rt)/this.rt.length(),this.bt.scaling.y<0&&(this.nt.y=-this.nt.y)),"Z"!=i&&"XZ"!=i&&"ZY"!=i||(this.nt.z=n.Vector3.Dot(t,this.et)/this.et.length(),this.bt.scaling.z<0&&(this.nt.z=-this.nt.z));var h=this.zt;if(this.nt.x=this.nt.x/h.x,this.nt.y=this.nt.y/h.y,this.nt.z=this.nt.z/h.z,"ALL"==i){var s=n.Vector3.Dot(t,this.pt.upVector);s/=Math.max(h.x,h.y,h.z),this.nt.copyFromFloats(s,s,s)}else{var u=!1;if("XZ"==i?(u=!0,Math.abs(this.nt.x)>Math.abs(this.nt.z)?this.nt.z=this.nt.x:this.nt.x=this.nt.z):"ZY"==i?(u=!0,Math.abs(this.nt.z)>Math.abs(this.nt.y)?this.nt.y=this.nt.z:this.nt.z=this.nt.y):"YX"==i&&(u=!0,Math.abs(this.nt.y)>Math.abs(this.nt.x)?this.nt.x=this.nt.y:this.nt.y=this.nt.x),u){this.St.position.subtractToRef(this.pt.position,this.D);s=n.Vector3.Dot(t,this.D);this.nt.x=Math.abs(this.nt.x),this.nt.y=Math.abs(this.nt.y),this.nt.z=Math.abs(this.nt.z),s>0?(this.bt.scaling.x>0&&(this.nt.x=-this.nt.x),this.bt.scaling.y>0&&(this.nt.y=-this.nt.y),this.bt.scaling.z>0&&(this.nt.z=-this.nt.z)):(this.bt.scaling.x<0&&(this.nt.x=-this.nt.x),this.bt.scaling.y<0&&(this.nt.y=-this.nt.y),this.bt.scaling.z<0&&(this.nt.z=-this.nt.z))}}this.Ui(this.bt,this.nt),this.Vi&&(this.bt.scaling.x=Math.max(this.bt.scaling.x,this.Vi.x),this.bt.scaling.y=Math.max(this.bt.scaling.y,this.Vi.y),this.bt.scaling.z=Math.max(this.bt.scaling.z,this.Vi.z)),this.Wi&&(this.bt.scaling.x=Math.min(this.bt.scaling.x,this.Wi.x),this.bt.scaling.y=Math.min(this.bt.scaling.y,this.Wi.y),this.bt.scaling.z=Math.min(this.bt.scaling.z,this.Wi.z))},t.prototype.Ui=function(t,i){if(this.it){var h=!1;if(this.ht.addInPlace(i),Math.abs(this.ht.x)>this.st&&(i.x>0?i.x=this.st:i.x=-this.st,h=!0),Math.abs(this.ht.y)>this.st&&(i.y>0?i.y=this.st:i.y=-this.st,h=!0),Math.abs(this.ht.z)>this.st&&(i.z>0?i.z=this.st:i.z=-this.st,h=!0),!h)return;Math.abs(i.x)!==this.st&&0!==i.x&&(i.x=0),Math.abs(i.y)!==this.st&&0!==i.y&&(i.y=0),Math.abs(i.z)!==this.st&&0!==i.z&&(i.z=0),n.Vector3.FromFloatsToRef(0,0,0,this.ht),h=!1}t.scaling.addInPlace(i)},t.prototype.Ot=function(t){var i=t.getWorldMatrix();n.Vector3.FromFloatArrayToRef(i.m,0,this.ut),n.Vector3.FromFloatArrayToRef(i.m,4,this.rt),n.Vector3.FromFloatArrayToRef(i.m,8,this.et)},t.prototype.At=function(t){var i=t.getBoundingInfo().boundingBox,h=i.maximum.subtract(i.minimum);return 0==h.x&&(h.x=1),0==h.y&&(h.y=1),0==h.z&&(h.z=1),h},t.prototype.refreshBoundingInfo=function(){this.zt=this.At(this.bt)},t.prototype.Bi=function(t,i,h,s){this.u&&null!=this.bt.parent&&this.Wt(t)?this.Ot(this.St):this.Ot(t);var u,r=0;i==this.$t?u=this.u?this.ut:n.Axis.X:i==this.ti?u=this.u?this.rt:n.Axis.Y:i==this.ii&&(u=this.u?this.et:n.Axis.Z),this.St.position.subtractToRef(this.pt.position,this.D),this.W?(r=this.$i(s,h,this.pt.position,this.D,u),this.yt.useRightHandedSystem&&(r=-r)):r=this.th(s,h,t.getAbsolutePivotPoint(),this.D),this.M&&(this.ot+=r,r=0,Math.abs(this.ot)>=this.j&&(r=this.ot>0?this.j:-this.j,this.ot=0)),0!==r&&(this.D.normalize(),i==this.Xi?t.rotate(this.D,-r,n.Space.WORLD):(n.Vector3.Dot(u,this.D)>=0&&(r=-r),t.rotate(u,r,n.Space.WORLD)),this.ft&&(t.rotation=t.rotationQuaternion.toEulerAngles(),t.rotationQuaternion=null),this.u&&null!=this.bt.parent&&this.Wt(t)&&(i==this.Xi?this.St.rotate(this.D,-r,n.Space.WORLD):this.St.rotate(u,r,n.Space.WORLD)))},t.prototype.Si=function(){var t=this,i=this.yt.pick(this.yt.pointerX,this.yt.pointerY,function(i){return i==t.Ai},null,this.pt);return i.hit?i.pickedPoint:null},t.prototype.Qi=function(){this.Li.visibility=0,this.yi.visibility=0,this.ji.visibility=0},t.prototype.getRotationQuaternion=function(){return this.St.rotationQuaternion},t.prototype.getPosition=function(){return this.St.position},t.prototype.isTranslationEnabled=function(){return this.lt},t.prototype.enableTranslation=function(){null==this.ai&&(this.ih(),this.hh.parent=this.St),this.ki(),this.lt||(this.sh(this.nh,this.C),this.lt=!0,this.disableRotation(),this.disableScaling())},t.prototype.disableTranslation=function(){this.lt&&(this.sh(this.nh,0),this.lt=!1)},t.prototype.isRotationEnabled=function(){return this.ct},t.prototype.returnEuler=function(t){this.ft=t},t.prototype.enableRotation=function(){null==this.uh&&(this.rh(),this.uh.parent=this.St),this.ki(),this.ct||(this.sh(this.eh,this.C),this.ct=!0,this.disableTranslation(),this.disableScaling())},t.prototype.disableRotation=function(){this.ct&&(this.sh(this.eh,0),this.ct=!1)},t.prototype.isScalingEnabled=function(){return this.at},t.prototype.enableScaling=function(){null==this.Yi&&(this.fh(),this.oh.parent=this.St),this.ki(),this.at||(this.sh(this.lh,this.C),this.at=!0,this.disableTranslation(),this.disableRotation())},t.prototype.disableScaling=function(){this.at&&(this.sh(this.lh,0),this.at=!1)},t.prototype.setScaleBounds=function(t,i){this.Vi=t||null,this.Wi=i||null,null!=this.Vi&&(0==this.Vi.x&&(this.Vi.x=1e-8),0==this.Vi.y&&(this.Vi.y=1e-8),0==this.Vi.z&&(this.Vi.z=1e-8))},t.prototype.removeScaleBounds=function(){this.Vi=null,this.Wi=null},t.prototype.setTransBounds=function(t,i){this.Ki=t||null,this.Pi=i||null},t.prototype.removeTransBounds=function(){this.Ki=null,this.Pi=null},t.prototype.setRotBounds=function(t,i){this.ah=t||null,this.vh=i||null},t.prototype.removeRotBounds=function(){this.ah=null,this.vh=null},t.prototype.Et=function(){var t=new n.Mesh("",this.yt);this.Li=n.Mesh.CreateLines("",[new n.Vector3(-100,0,0),new n.Vector3(100,0,0)],this.yt),this.yi=n.Mesh.CreateLines("",[new n.Vector3(0,-100,0),new n.Vector3(0,100,0)],this.yt),this.ji=n.Mesh.CreateLines("",[new n.Vector3(0,0,-100),new n.Vector3(0,0,100)],this.yt),this.Li.isPickable=!1,this.yi.isPickable=!1,this.ji.isPickable=!1,this.Li.parent=t,this.yi.parent=t,this.ji.parent=t,this.Li.color=this.R,this.yi.color=this.T,this.ji.color=this.g,this.Qi();var i=this.A*this.O*.75;return this.ei=n.Mesh.CreateLines("",[new n.Vector3(0,0,0),new n.Vector3(i,0,0)],this.yt),this.fi=n.Mesh.CreateLines("",[new n.Vector3(0,0,0),new n.Vector3(0,i,0)],this.yt),this.oi=n.Mesh.CreateLines("",[new n.Vector3(0,0,0),new n.Vector3(0,0,i)],this.yt),this.ei.isPickable=!1,this.fi.isPickable=!1,this.oi.isPickable=!1,this.ei.parent=t,this.fi.parent=t,this.oi.parent=t,this.ei.color=this.R,this.fi.color=this.T,this.oi.color=this.g,this.ei.renderingGroupId=1,this.fi.renderingGroupId=1,this.oi.renderingGroupId=1,t},t.prototype.Rt=function(){this.Ft=n.Mesh.CreatePlane("",5,this.yt),this.Gi=n.Mesh.CreatePlane("",5,this.yt),this.Hi=n.Mesh.CreatePlane("",5,this.yt),this.Ii=n.Mesh.CreatePlane("",5,this.yt),this.Ft.isPickable=!1,this.Gi.isPickable=!1,this.Hi.isPickable=!1,this.Ii.isPickable=!1,this.Ft.visibility=0,this.Gi.visibility=0,this.Hi.visibility=0,this.Ii.visibility=0,this.Ft.renderingGroupId=1,this.Gi.renderingGroupId=1,this.Hi.renderingGroupId=1,this.Ii.renderingGroupId=1,this.Ft.lookAt(this.pt.position),this.Gi.rotate(n.Axis.X,1.57),this.Hi.rotate(n.Axis.Y,1.57);var t=new n.Mesh("",this.yt);return this.Ft.parent=t,this.Gi.parent=t,this.Hi.parent=t,this.Ii.parent=t,t},t.prototype.ih=function(){var t=2*this.S*this.O,i=this.A*this.O;this.hh=new n.Mesh("",this.yt),this.wh(t,i,this.hh,this.yt),this.Mh(t,i,this.yt)},t.prototype.wh=function(t,i,h,s){var u=this.Xh(t/2,i);u.name="X";var r=u.clone("Y"),e=u.clone("Z"),f=n.MeshBuilder.CreatePlane("XZ",{size:2*t},s),o=n.MeshBuilder.CreatePlane("ZY",{size:2*t},s),l=n.MeshBuilder.CreatePlane("YX",{size:2*t},s);f.rotation.x=1.57,o.rotation.y=-1.57,f.position.x=2*t,f.position.z=2*t,o.position.z=2*t,o.position.y=2*t,l.position.y=2*t,l.position.x=2*t,f.bakeCurrentTransformIntoVertices(),o.bakeCurrentTransformIntoVertices(),l.bakeCurrentTransformIntoVertices();var c=n.Mesh.CreateBox("ALL",2*t,s);u.parent=h,r.parent=h,e.parent=h,f.parent=h,o.parent=h,l.parent=h,c.parent=h,u.rotation.y=1.57,r.rotation.x-=1.57,this.ai=u,this.vi=r,this.wi=e,this.It=f,this.Jt=o,this.Kt=l,this.Mi=c,this.Yh=[u,r,e,f,o,l,c],this.sh(this.Yh,0),this.Zh(this.Yh)},t.prototype.Mh=function(t,i,h){var s=i/5,u=n.Mesh.CreateCylinder("",s,0,t,6,1,h),r=u.clone(""),e=u.clone(""),f=n.MeshBuilder.CreatePlane("XZ",{size:2*t},h),o=n.MeshBuilder.CreatePlane("ZY",{size:2*t},h),l=n.MeshBuilder.CreatePlane("YX",{size:2*t},h),c=n.Mesh.CreateBox("ALL",t,h);u.rotation.x=1.57,r.rotation.x=1.57,e.rotation.x=1.57,f.rotation.x=1.57,o.rotation.y=1.57,l.rotation.x=0,f.position.x=2*t,f.position.z=2*t,o.position.z=2*t,o.position.y=2*t,l.position.y=2*t,l.position.x=2*t,u.parent=this.ai,r.parent=this.vi,e.parent=this.wi,f.parent=this.It,o.parent=this.Jt,l.parent=this.Kt,c.parent=this.Mi,u.position.z=i-s/2,r.position.z=i-s/2,e.position.z=i-s/2,u.material=this.bh,r.material=this.ph,e.material=this.dh,f.material=this.ph,o.material=this.bh,l.material=this.dh,c.material=this.Lh,this.yh=u,this.jh=r,this.zh=e,this.Ah=f,this.mh=o,this.Oh=l,this.Sh=c,this.nh=[u,r,e,f,o,l,c],this.Zh(this.nh),this.xh(this.nh)},t.prototype.setRotGuideFull=function(t){this.vt=t?360:180,null!=this.uh&&(this.uh.dispose(),this.Xi.dispose(),this.uh=null,this.enableRotation())},t.prototype.rh=function(){var t=this.A*this.O*2;this.uh=new n.Mesh("",this.yt),this.Eh(t,this.uh),this.Rh(t)},t.prototype.Eh=function(t,i){var h=this.Th(t/2,this.vt),s=this.Th(t/2,this.vt),n=this.Th(t/2,this.vt),u=this.Th(t/1.75,360);h.name="X",s.name="Y",n.name="Z",u.name="ALL",h.rotation.z=1.57,n.rotation.x=-1.57,h.bakeCurrentTransformIntoVertices(),n.bakeCurrentTransformIntoVertices(),u.rotation.x=1.57,h.parent=i,s.parent=i,n.parent=i,u.parent=this.Ft,this.$t=h,this.ti=s,this.ii=n,this.Xi=u,this.gh=[h,s,n,u],this.sh(this.gh,0),this.Zh(this.gh)},t.prototype.Rh=function(t){var i=this.kh(t/2,this.vt,!1),h=i.clone(""),s=i.clone(""),u=this.kh(t/1.75,360,!1),r=this.kh(t/2,360,!1);i.parent=this.$t,h.parent=this.ti,s.parent=this.ii,i.rotation.z=1.57,s.rotation.x=-1.57,u.parent=this.Xi,r.parent=this.Xi,i.color=this.R,h.color=this.T,s.color=this.g,u.color=this.q,r.color=n.Color3.Gray(),this.qh=i,this.Ch=h,this._h=s,this.Nh=u,this.Qh=r,this.eh=[i,h,s,u,r],this.Zh(this.eh),this.xh(this.eh)},t.prototype.sh=function(t,i){t.map(function(t){return t.visibility=i})},t.prototype.Zh=function(t){t.map(function(t){t.isPickable=!1})},t.prototype.xh=function(t){t.map(function(t){return t.renderingGroupId=2})},t.prototype.Xh=function(t,i){var h=[new n.Vector3(t,t,0),new n.Vector3(-t,t,0),new n.Vector3(-t,-t,0),new n.Vector3(t,-t,0),new n.Vector3(t,t,0)],s=[new n.Vector3(0,0,0),new n.Vector3(0,0,i)];return n.Mesh.ExtrudeShape("",h,s,1,0,2,this.yt)},t.prototype.kh=function(t,i,h){null===i&&(i=360);for(var s,u,r=[],e=3.14/180,f=0,o=0;o<=i;o+=5)s=t*Math.cos(o*e),u=90==o?t:270==o?-t:t*Math.sin(o*e),r[f]=new n.Vector3(s,0,u),f++;if(h){t-=.04;for(o=0;o<=i;o+=5)s=t*Math.cos(o*e),u=90==o?t:270==o?-t:t*Math.sin(o*e),r[f]=new n.Vector3(s,0,u),f++}return n.Mesh.CreateLines("",r,this.yt)},t.prototype.Th=function(t,i){null===i&&(i=360);for(var h,s,u=[],r=3.14/180,e=0,f=0;f<=i;f+=30)h=t*Math.cos(f*r),s=90==f?t:270==f?-t:t*Math.sin(f*r),u[e]=new n.Vector3(h,0,s),e++;return n.Mesh.CreateTube("",u,this.S*this.O*2,3,null,n.Mesh.NO_CAP,this.yt)},t.prototype.fh=function(){var t=2*this.S*this.O,i=this.A*this.O;this.oh=new n.Mesh("",this.yt),this.Bh(t,i,this.oh),this.Dh(t,i)},t.prototype.Bh=function(t,i,h){var s=this.Xh(t/2,i);s.name="X";var u=s.clone("Y"),r=s.clone("Z"),e=n.MeshBuilder.CreatePlane("XZ",{size:2*t},this.yt),f=n.MeshBuilder.CreatePlane("ZY",{size:2*t},this.yt),o=n.MeshBuilder.CreatePlane("YX",{size:2*t},this.yt);e.rotation.x=1.57,f.rotation.y=-1.57,e.position.x=2*t,e.position.z=2*t,f.position.z=2*t,f.position.y=2*t,o.position.y=2*t,o.position.x=2*t,e.bakeCurrentTransformIntoVertices(),f.bakeCurrentTransformIntoVertices(),o.bakeCurrentTransformIntoVertices();var l=n.Mesh.CreateBox("ALL",2*t,this.yt);s.parent=h,u.parent=h,r.parent=h,l.parent=h,e.parent=h,f.parent=h,o.parent=h,s.rotation.y=1.57,u.rotation.x-=1.57,this.Yi=s,this.Zi=u,this.bi=r,this.Pt=e,this.Ut=f,this.Vt=o,this.pi=l,this.Fh=[s,u,r,e,f,o,l],this.sh(this.Fh,0),this.Zh(this.Fh)},t.prototype.Dh=function(t,i){var h=n.Mesh.CreateBox("",t,this.yt),s=h.clone(""),u=h.clone(""),r=n.MeshBuilder.CreatePlane("XZ",{size:2*t},this.yt),e=n.MeshBuilder.CreatePlane("ZY",{size:2*t},this.yt),f=n.MeshBuilder.CreatePlane("YX",{size:2*t},this.yt),o=n.Mesh.CreateBox("ALL",t,this.yt);r.rotation.x=1.57,e.rotation.y=-1.57,r.position.x=2*t,r.position.z=2*t,e.position.z=2*t,e.position.y=2*t,f.position.y=2*t,f.position.x=2*t,h.parent=this.Yi,s.parent=this.Zi,u.parent=this.bi,r.parent=this.Pt,e.parent=this.Ut,f.parent=this.Vt,o.parent=this.pi,h.position.z=i-t/2,s.position.z=i-t/2,u.position.z=i-t/2,h.material=this.bh,s.material=this.ph,u.material=this.dh,r.material=this.ph,e.material=this.bh,f.material=this.dh,o.material=this.Lh,this.Gh=h,this.Hh=s,this.Ih=u,this.Jh=r,this.Kh=e,this.Ph=f,this.Uh=o,this.lh=[h,s,u,r,e,f,o],this.Zh(this.lh),this.xh(this.lh)},t.prototype.setVisibility=function(t){this.C=t},t.prototype.setLocal=function(t){this.u!=t&&(this.u=t,t||(this.St.rotationQuaternion=n.Quaternion.Identity()))},t.prototype.isLocal=function(){return this.u},t.prototype.setTransSnap=function(t){this.v=t},t.prototype.setRotSnap=function(t){this.M=t},t.prototype.setScaleSnap=function(t){this.it=t},t.prototype.setTransSnapValue=function(t){this.wt.copyFromFloats(t,t,t),this.L=t},t.prototype.setRotSnapValue=function(t){this.j=t},t.prototype.setScaleSnapValue=function(t){this.st=t},t.prototype.$i=function(t,i,h,s,u){var r=n.Vector3.Dot(s,u);u.scaleToRef(r,this.Mt),h.addToRef(this.Mt,this.Xt);var e=this.Xt;this.pt.getWorldMatrix().invertToRef(this.Zt),n.Vector3.TransformCoordinatesToRef(this.Xt,this.Zt,this.Xt);var f=0;e.x>=0&&e.y>=0?f=1:e.x<=0&&e.y>=0?f=2:e.x<=0&&e.y<=0?f=3:e.x>=0&&e.y<=0&&(f=4),n.Vector3.TransformCoordinatesToRef(t,this.Zt,this.Mt),n.Vector3.TransformCoordinatesToRef(i,this.Zt,this.Xt),this.Xt.subtractInPlace(this.Mt);var o=this.Xt,l=o.length(),c="";o.x>=0&&o.y>=0?c=o.x>=o.y?"r":"u":o.x<=0&&o.y>=0?c=-o.x>=o.y?"l":"u":o.x<=0&&o.y<=0?c=-o.x>=-o.y?"l":"d":o.x>=0&&o.y<=0&&(c=o.x>=-o.y?"r":"d");var a=0;return"d"==c?a=1==f||4==f?1:-1:"u"==c?a=1==f||4==f?-1:1:"r"==c?a=2==f||1==f?1:-1:"l"==c&&(a=2==f||1==f?-1:1),a*l},t.prototype.th=function(t,i,h,s){t.subtractToRef(h,this.Mt),i.subtractToRef(h,this.Xt),n.Vector3.CrossToRef(this.Mt,this.Xt,this.Yt);var u=Math.asin(this.Yt.length()/(this.Mt.length()*this.Xt.length()));return n.Vector3.Dot(this.Yt,s)>0&&(u*=-1),u},t.prototype.xt=function(i){this.bh=t.Vh(this.R,i),this.ph=t.Vh(this.T,i),this.dh=t.Vh(this.g,i),this._i=t.Vh(this.k,i),this.Lh=t.Vh(this.q,i)},t.prototype.ci=function(){this.bh.dispose(),this.ph.dispose(),this.dh.dispose(),this._i.dispose(),this.Lh.dispose()},t.Vh=function(t,i){var h=new n.StandardMaterial("",i);return h.emissiveColor=t,h.diffuseColor=n.Color3.Black(),h.specularColor=n.Color3.Black(),h.backFaceCulling=!1,h},t}(),r=function(){function t(t,i){this.lastMax=10,this.acts=new Array,this.last=-1,this.current=-1,this.mesh=t,this.lastMax=i-1,this.add()}return t.prototype.setCapacity=function(t){0!=t?(this.lastMax=t-1,this.last=-1,this.current=-1,this.acts=new Array,this.add()):console.error("capacity should be more than zero")},t.prototype.add=function(t){void 0===t&&(t=null);var i=new e(this.mesh,t);this.current<this.last&&(this.acts.splice(this.current+1),this.last=this.current),this.last==this.lastMax?(this.acts.shift(),this.acts.push(i)):(this.acts.push(i),this.last++,this.current++)},t.prototype.undo=function(){if(this.current>0){var t=this.acts[this.current].getActionType();return this.current--,this.acts[this.current].perform(this.mesh),t}},t.prototype.redo=function(){if(this.current<this.last)return this.current++,this.acts[this.current].perform(this.mesh),this.acts[this.current].getActionType()},t}(),e=function(){function t(t,i){this.Wh=t.position.clone(),null==t.rotationQuaternion?(this.$h=null,this.ts=t.rotation.clone()):(this.$h=t.rotationQuaternion.clone(),this.ts=null),this.hs=t.scaling.clone(),this.ss=i}return t.prototype.getActionType=function(){return this.ss},t.prototype.perform=function(t){t.position.copyFrom(this.Wh),null==t.rotationQuaternion?null!=this.ts?t.rotation.copyFrom(this.ts):t.rotation.copyFrom(this.$h.toEulerAngles()):null!=this.$h?t.rotationQuaternion.copyFrom(this.$h):t.rotationQuaternion.copyFrom(n.Quaternion.RotationYawPitchRoll(this.ts.y,this.ts.x,this.ts.z)),t.scaling.copyFrom(this.hs)},t}()}])});
//# sourceMappingURL=EditControl.js.map

/***/ }),

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./tst/Test-EditControl.ts":
/*!*********************************!*\
  !*** ./tst/Test-EditControl.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dist_EditControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/EditControl */ "./dist/EditControl.js");
/* harmony import */ var _dist_EditControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_EditControl__WEBPACK_IMPORTED_MODULE_1__);


var box, box1, box2, box3;
var editControl, ec1, ec2, ec3;
//let camera;
window.onload = function () {
    main();
};
var main = function () {
    var canvas = document.getElementById("renderCanvas");
    var engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"](canvas, true);
    var scene = addScene(engine);
    var camera = addCamera(scene, canvas);
    addGrid(scene);
    addBoxes(scene);
    addEditControls(camera, canvas);
    setButtons(camera);
    engine.runRenderLoop(function () {
        scene.render();
    });
    window.addEventListener("resize", function () {
        engine.resize();
    });
};
var addScene = function (engine) {
    var scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](engine);
    scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color4"](0.75, 0.75, 0.75, 1);
    var light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["HemisphericLight"]("light1", new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0), scene);
    light.intensity = .5;
    return scene;
};
var addCamera = function (scene, canvas) {
    var camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["ArcRotateCamera"]("ArcRotateCamera", Math.PI / 4, Math.PI / 4, 20, new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0), scene);
    camera.wheelPrecision = 15;
    camera.setTarget(babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero());
    camera.attachControl(canvas, false);
    return camera;
};
var addGrid = function (scene) {
    var ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateGround("ground1", 20, 20, 10, scene);
    var gridMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("Grid Material", scene);
    gridMaterial.wireframe = true;
    ground.material = gridMaterial;
};
var addBoxes = function (scene) {
    var mat1 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("mat", scene);
    var mat2 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("mat2", scene);
    var mat3 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("mat3", scene);
    mat1.diffuseColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Red();
    mat2.diffuseColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Teal();
    mat3.diffuseColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Magenta();
    box1 = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("box1", { height: 5, width: 3, depth: 2 });
    box2 = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("box2", { height: 3, width: 2, depth: 1 });
    box3 = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("box3", { height: 2, width: 1, depth: 2 });
    box1.rotationQuaternion = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
    box2.rotationQuaternion = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
    box3.rotationQuaternion = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
    box1.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
    box2.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-4, 0, 0);
    box3.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-4, 0, 0);
    box1.material = mat1;
    box2.material = mat2;
    box3.material = mat3;
    box2.parent = box1;
    box3.parent = box2;
};
var addEditControls = function (camera, canvas) {
    ec1 = attachEditControl(box1, camera, canvas);
    ec2 = attachEditControl(box2, camera, canvas);
    ec3 = attachEditControl(box3, camera, canvas);
    box = box1;
    editControl = ec1;
};
var attachEditControl = function (mesh, camera, canvas) {
    mesh.rotationQuaternion = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
    var ec = new _dist_EditControl__WEBPACK_IMPORTED_MODULE_1__["EditControl"](mesh, camera, canvas, 0.5, false);
    ec.enableTranslation();
    ec.setRotSnapValue(3.14 / 18);
    ec.setTransSnapValue(0.5);
    ec.setScaleSnapValue(0.25);
    ec.addActionStartListener(actionStartListener);
    ec.addActionListener(actionListener);
    ec.addActionEndListener(actionEndListener);
    return ec;
};
var actionStartListener = function (actionType) {
    if (actionType === 0) {
        console.log("translation started");
    }
    else if (actionType === 1) {
        console.log("rotation started");
    }
    else if (actionType === 2) {
        console.log("scaling started");
    }
};
var actionListener = function (actionType) {
    if (actionType === 0) {
        console.log("translating");
    }
    else if (actionType === 1) {
        //console.log("rotating");
    }
    else if (actionType === 2) {
        console.log("scaling");
    }
};
var actionEndListener = function (actionType) {
    if (actionType === 0) {
        console.log("translation done");
    }
    else if (actionType === 1) {
        console.log("rotation done");
    }
    else if (actionType === 2) {
        console.log("scaling done");
    }
};
var setButtons = function (camera) {
    var hideButton = document.getElementById("hide");
    hideButton.onclick = function () {
        if (editControl.isHidden()) {
            editControl.show();
        }
        else
            editControl.hide();
    };
    var transButton = document.getElementById("trans");
    var rotButton = document.getElementById("rotate");
    var scaleButton = document.getElementById("scale");
    transButton.onclick = function () {
        editControl.enableTranslation();
    };
    rotButton.onclick = function () {
        editControl.enableRotation();
    };
    scaleButton.onclick = function () {
        editControl.enableScaling();
        if (!editControl.isLocal()) {
            alert("Please note that you cannot scale in global mode");
        }
    };
    var snapTButton = document.getElementById("snaptrans");
    var snapRButton = document.getElementById("snaprot");
    var snapSButton = document.getElementById("snapscale");
    snapTButton.checked = false;
    snapRButton.checked = false;
    snapSButton.checked = false;
    snapTButton.onclick = function () {
        editControl.setTransSnap(snapTButton.checked);
    };
    snapRButton.onclick = function () {
        editControl.setRotSnap(snapRButton.checked);
    };
    snapSButton.onclick = function () {
        editControl.setScaleSnap(snapSButton.checked);
    };
    var boundTButton = document.getElementById("boundTrans");
    var boundRButton = document.getElementById("boundRot");
    var boundSButton = document.getElementById("boundScale");
    boundTButton.checked = false;
    boundRButton.checked = false;
    boundSButton.checked = false;
    boundTButton.onclick = function () {
        if (boundTButton.checked) {
            editControl.setTransBounds(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-5, -5, -5), // min
            new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](5, 5, 5) // max
            );
        }
        else {
            editControl.removeTransBounds();
        }
    };
    boundRButton.onclick = function () {
        alert("Rotation Bounds has not been implemented yet");
    };
    boundSButton.onclick = function () {
        if (boundSButton.checked) {
            editControl.setScaleBounds(
            // new BABYLON.Vector3(0.00000001,0.00000001,0.00000001),     // works
            new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0), // causes bug
            new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](2, 2, 2) // max
            );
        }
        else {
            editControl.removeScaleBounds();
        }
    };
    var rotGuideFull = document.getElementById("rotGuideFull");
    rotGuideFull.checked = false;
    rotGuideFull.onclick = function () {
        editControl.setRotGuideFull(rotGuideFull.checked);
    };
    var undoButton = document.getElementById("undo");
    var redoButton = document.getElementById("redo");
    undoButton.onclick = function () {
        editControl.undo();
    };
    redoButton.onclick = function () {
        editControl.redo();
    };
    var focusButton = document.getElementById("focus");
    focusButton.onclick = function () {
        camera.target.copyFrom(box.getAbsolutePosition());
    };
    var pRotButton = document.getElementById("pRot");
    var eulerButton = document.getElementById("euler");
    pRotButton.onclick = function () {
        console.log(box.rotation);
        console.log(box.rotationQuaternion);
    };
    var euler = false;
    eulerButton.onclick = function () {
        euler = !euler;
        editControl.returnEuler(euler);
        console.log("enable euler : " + euler);
    };
    var selectBox1 = document.getElementById("selectBox1");
    var selectBox2 = document.getElementById("selectBox2");
    var selectBox3 = document.getElementById("selectBox3");
    var switchBox = function () {
        if (selectBox1.checked) {
            editControl = ec1;
            box = box1;
        }
        else if (selectBox2.checked) {
            editControl = ec2;
            box = box2;
        }
        else {
            editControl = ec3;
            box = box3;
        }
        switchSpace();
        snapTButton.onclick(null);
        snapRButton.onclick(null);
        snapSButton.onclick(null);
        boundTButton.onclick(null);
        boundSButton.onclick(null);
        rotGuideFull.onclick(null);
    };
    selectBox1.onclick = switchBox;
    selectBox2.onclick = switchBox;
    selectBox3.onclick = switchBox;
    var local = document.getElementById("local");
    var global = document.getElementById("global");
    var switchSpace = function () {
        editControl.setLocal(local.checked);
        if (editControl.isScalingEnabled() && !editControl.isLocal()) {
            alert("Please note that you cannot scale in global mode");
        }
    };
    local.onclick = switchSpace;
    global.onclick = switchSpace;
};


/***/ })

/******/ });
//# sourceMappingURL=Test-EditControl.js.map