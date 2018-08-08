(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "work", component: _work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"] },
    { path: "projects", component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n     \n\n      <!-- <mat-toolbar class=\"tool-bar\">\n          <span>Gagandeep Kaur</span>\n          \n      </mat-toolbar> -->\n      <!-- <button [routerLink]=\"['/work']\">Portifolio</button> -->\n        \n\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n      <script src=\"https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js\"></script>\n     <!-- Compiled and minified CSS -->\n     <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css\">\n\n     <!-- Compiled and minified JavaScript -->\n     <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js\"></script>\n    <!-- import icons -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <script src= 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>\n    <!--Import materialize.css-->\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/materialize.min.css\"  media=\"screen,projection\"/>\n   \n    <!--Let browser know website is optimized for mobile-->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  </head>\n \n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" class=\"sidenav\" style=\"background: black;  color: white; width: 250px;\">\n      <div class=\"sidenav-1\">\n          <img src=\"../assets/images/myself.jpg\" alt=\"\">\n      </div>\n      <strong style=\"margin-left: 35px; font-size: 22px;\">Gagandeep Kaur</strong>\n      <div class=\"links\" style=\"margin-top: 50px; width: 250px; height: 50px; margin-left: 30px;\">\n        <a href=\"mailto:gunnypari@gmail.com?subject=subject%20Text%20Here\" class=\"fa fa-envelope\" style=\"color: #fff;font-size: 30px; \"></a>\n        <a href=\"https://www.linkedin.com/in/kaur-gagandeep/\"  class=\"fa fa-linkedin\" style=\"color: #fff; font-size: 30px;\"></a>\n        <a href=\"https://github.com/kaurgdeep\"  class=\"fa fa-github\" style=\"color: #fff; font-size: 30px;\"></a>\n        <!-- <a [routerLink]=\"['/home']\" class=\"fa fa-home\" style=\"color: #fff; font-size: 30px\"></a> -->\n      </div>\n      <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a [routerLink]=\"['/work']\"><i class=\"fa fa-user\"></i>Profile</a>\n      </div>\n      <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a [routerLink]=\"['/projects']\"><i class=\"fa fa-code fa-2x\"></i>Projects</a>\n      </div>\n      <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a [routerLink]=\"['/work']\"><i class=\"fa fa-user\"></i>About</a>\n      </div>\n      <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a href=\"tel:206-407-5018\"><i class=\"fa fa-phone\"></i>Contact me</a>  \n          \n      </div>\n      \n     \n    </mat-sidenav>\n  \n    <mat-sidenav-content>\n\n    <body id=\"wrapper\">\n      <div class=\"big-pattern\">\n          <div class=\"slider-fullscreen\">\n            <div class=\"slider-fullscreen-ul\">\n              <div class=\"slider-fullscreen-li\">\n                <img id=\"slide-img-1\" src=\"../assets/images/computer2.jpg\" alt=\"\">\n                <div class=\"name-animation\">The best way to predict the future is to invent it</div>\n              </div>\n              <div class=\"slider-fullscreen-li\">\n                  \n                  <img id=\"slide-img-1\" src=\"../assets/images/com.jpg\" alt=\"\">\n                  <div class=\"name-animation\">Past cannot be changed,the future is yet in your power</div>\n                \n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"top-fixed-bar\">\n        <div class=\"top-sidenav-btn\"><button mat-button (click)=\"sidenav.toggle()\" class=\"fa fa-bars\" style=\"color: #fff;\"></button></div>\n        <div class=\"top-right-bar\">\n          <div class=\"social-links\">\n            <a href=\"mailto:gunnypari@gmail.com?subject=subject%20Text%20Here\" class=\"fa fa-envelope\" style=\"color: #fff\"></a>\n            <a href=\"https://www.linkedin.com/in/kaur-gagandeep/\"  class=\"fa fa-linkedin\" style=\"color: #fff\"></a>\n            <a href=\"https://github.com/kaurgdeep\"  class=\"fa fa-github\" style=\"color: #fff\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"main\">\n        <h1>GAGANDEEP KAUR</h1>\n        <div class=\"buttons\">  \n          <a [routerLink]=\"['/work']\" class=\"waves-effect waves-light btn-large opac-btn\" href=\"#\">Profile</a>\n          <a [routerLink]=\"['/projects']\" class=\"waves-effect waves-light btn-large opac-btn\" href=\"#\">Projects</a>\n        </div>\n      \n      </div>\n   \n      </body>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n  \n    <!--JavaScript at end of body for optimized loading-->\n    <script type=\"text/javascript\" src=\"js/materialize.min.js\"></script>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <body style=\"margin-top: 0px;width: 100%; height: 100%;\">\n        <div class=\"body-container\">\n            <img src=\"../assets/images/Fall.jpg\" alt=\"\">\n        </div>\n    \n        <a [routerLink]=\"['/home']\" style=\"color: white; font-size: 40px; float: left; margin-left: 30px;\"><i class=\"fa fa-home\"> </i></a>\n        <h1 style=\"color: white;\">I'm Working on my projects.Thanks For visit</h1>\n    </body>\n\n\n   \n\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Compiled and minified CSS -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css\">\n\n    <!-- Compiled and minified JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js\"></script>\n            \n    <!-- import icons -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n    <!--Import materialize.css-->\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/materialize.min.css\"  media=\"screen,projection\"/>\n  \n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>Page Title</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"main.css\" />\n    <script src=\"main.js\"></script>\n  </head>\n  <mat-sidenav-container class=\"example-container\">\n      <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" class=\"sidenav\" style=\"background: grey;  color: white; width: 250px;\">\n        <div class=\"sidenav-1\">\n            <img src=\"../assets/images/myself.jpg\" alt=\"\">\n        </div>\n        <strong style=\"margin-left: 35px; font-size: 22px;\">Gagandeep Kaur</strong>\n        <div class=\"links\" style=\"margin-top: 50px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a href=\"mailto:gunnypari@gmail.com?subject=subject%20Text%20Here\" class=\"fa fa-envelope\" style=\"color: #fff;font-size: 30px; \"></a>\n          <a href=\"https://www.linkedin.com/in/kaur-gagandeep/\"  class=\"fa fa-linkedin\" style=\"color: #fff; font-size: 30px;\"></a>\n          <a href=\"https://github.com/kaurgdeep\"  class=\"fa fa-github\" style=\"color: #fff; font-size: 30px;\"></a>\n          \n        </div>\n        <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n          <a [routerLink]=\"['/home']\" style=\"color: #fff; font-size: 30px\"><i class=\"fa fa-home\"> </i>Home</a>\n        </div>\n        <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n            <a [routerLink]=\"['/projects']\" style=\"color: #fff; font-size: 20px;\"><i class=\"fa fa-code fa-2x\"></i>Projects</a>\n        </div>\n        <div style=\"margin-top: 20px; width: 250px; height: 50px; margin-left: 30px;\">\n            <a href=\"tel:206-407-5018\" style=\"color: #fff; font-size: 20px;\"><i class=\"fa fa-phone\"></i>Contact me</a>  \n            \n        </div>\n        \n       \n      </mat-sidenav>\n    \n    <mat-sidenav-content>\n    \n      <body>\n        <div class=\"body-container\">\n            <img src=\"../assets/images/macimg.jpg\" alt=\"\">\n        </div>\n        <div class=\"top-fixed-bar\">\n            <div class=\"top-sidenav-btn\">\n              <!-- <a href=\"#\" class=\"fa fa-bars\" style=\"color: #fff\"></a> -->\n              <button mat-button (click)=\"sidenav.toggle()\" style=\"color: #fff; font-size: 33px;\"><i class=\"fa fa-bars\"></i></button>\n              <a [routerLink]=\"['/home']\" class=\"fa fa-home\" style=\"color: #fff; font-size: 33px\"></a>\n            </div>\n            <div class=\"top-right-bar\">\n              <div class=\"social-links\">\n                <a href=\"mailto:gunnypari@gmail.com?subject=subject%20Text%20Here\" class=\"fa fa-envelope\" style=\"color: #fff\"></a>\n                <!-- <a href=\"\" class=\"fa fa-twitter\" style=\"color: #fff\"></a> -->\n                <a href=\"https://www.linkedin.com/in/kaur-gagandeep/\"  class=\"fa fa-linkedin\" style=\"color: #fff\"></a>\n                <a href=\"https://github.com/kaurgdeep\"  class=\"fa fa-github\" style=\"color: #fff\"></a>\n                \n              </div>\n            </div>\n          </div>\n        <div>\n          <mat-tab-group dynamicHeight>\n            <mat-tab label=\"Welcome\">\n                <div class=\"welcome\">\n                  <strong class=\"strong\">Aspiring Software Developer, looking for Junior Developer positions.\n                      Enthusiastic and fast learner acquiring programming languages and web frameworks.\n                      I am an innovative, performance-focused, and dynamic professional and\n                      passionate about software development and the constant demand for growth it inspires in me.\n                      I love working with fun people to solve complex and challenging problems. \n                    </strong> \n                </div>\n            </mat-tab>\n            <mat-tab label=\"About\">\n              <div class=\"box\">\n                <div id=\"info\">\n                  <div class=\"info-myself\">\n                    <h5>Gagandeep Kaur</h5>\n                    <p>Hi! Welcome! I am a full-stack developer that has fallen in love with the industry of problem-solving. \n                      Whether it be a creative or technical approach, software development has become\n                      a true passion of mine. \n                    </p>\n                  </div>\n                  <div class=\"edu\">\n                      <h5>Education</h5>\n                      <p>\n                        <strong class=\"strong\">Coding Dojo(bootcamp)</strong>\n                        Coding Dojo is an immersive web development bootcamp specialized in full stack training for HTML, CSS, JS, Python, C# and MEAN (MongoDB, Express, Angular, Node). Coding Dojo trains students to be highly competitive with the latest technologies and equips them wit\n                          to quickly and efficiently learn new and emerging technologies for an ever evolving industry.\n                      </p>\n\n                      <strong class=\"strong\"> I have accomplished:</strong> \n                        <ul style=\"padding: 15px;\">\n                          <li  style=\"list-style-type:disc\">Yellow Belt in web-fundamentals</li>\n                          <li style=\"list-style-type:disc\">Black Belt in Python</li>\n                          <li style=\"list-style-type:disc\">Red Belt in C#</li>\n                          <li style=\"list-style-type:disc\">Red Belt in Mean-Stack</li>\n                        </ul>\n                      <h5>High School(India)</h5>\n                      <p> <strong class=\"strong\">Major: Mathematics, Physics, Chemistry</strong></p>\n                    \n                  </div>\n\n                </div>\n                <div class=\"info\">\n                  <div class=\"img\">\n                    <img src=\"../assets/images/myself.jpg\">\n                  </div>\n                  <div class=\"skills\" style=\"padding: 25px;\">\n                      <h5>Technologies</h5>\n                      <strong class=\"strong\">Languages:</strong>\n                      <ul>\n                        <li  style=\"list-style-type:disc\">HTML, CSS, Javascript</li>\n                        <li style=\"list-style-type:disc\">PYTHON</li>\n                        <li style=\"list-style-type:disc\">C#</li>\n                        <li style=\"list-style-type:disc\">Mean</li>\n                      </ul>\n                      \n                      <strong class=\"strong\">Libraries/Frameworks/CMS:</strong>\n                      <ul>\n                        <li  style=\"list-style-type:disc\">Angular, Express, Node</li>\n                        <li style=\"list-style-type:disc\">Flask Django, Jquery</li>\n                        <li style=\"list-style-type:disc\">Entity, ASP.NET</li>\n                        <li style=\"list-style-type:disc\">AWS, Ajax</li>\n                      </ul>\n                      <strong class=\"strong\">Database:</strong>\n                      <ul>\n                        <li  style=\"list-style-type:disc\">MySQL</li>\n                        <li style=\"list-style-type:disc\">MongoDB</li>\n                      </ul>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Experience\">\n              <div class=\"box\">\n                <div class=\"box2\">\n                    <div class=\"exp\">\n                        <h4>Currently</h4>\n                        <strong class=\"strong\">Actively looking for a new and exciting role as a Software Developer</strong>\n                        <p>I am a full stack developer with training in Python, C# and Mean. I’ve blended my education from an immersive, comprehensive coding program.\n                          I utilize my strong communication and problem-solving skills to provide a fresh new approach to \n                          any project. I'm fast learner with strong time management and multi-tasking skills.\n                          Strong work ethic in team or individual settings to drive product success and process\n                          efficiency. Strong troubleshooting and problem solving skills with an analytical mindset. \n                          I am excited to find a passionate, innovative team to work with, and jump into this exciting, ever-changing industry as a Software developer. </p>\n                      </div>\n\n                  <div class=\"exp\">\n                    <h4>Experience</h4>\n                    <strong class=\"strong\">WELLS FARGO(Teller 12/2017 to 04/2018)</strong>\n                    <p><strong class=\"strong\">Duties:</strong></p>\n                    <ul>\n                        <li  style=\"list-style-type:disc\"> Process deposits, withdrawals and other banking transactions for a high volume of customers </li>\n                        <li style=\"list-style-type:disc\">Sell or redeem savings bonds and other financial instruments </li>\n                        <li style=\"list-style-type:disc\">Satisfy our customers’ financial needs and help them succeed financially. </li>\n                        <li style=\"list-style-type:disc\">Always balance cash drawers, build great rapport with people, and be strong team player. </li>\n                      </ul>\n                  </div>\n                  <div class=\"exp\">\n                    <strong class=\"strong\">FRED MEYER(Cashier 08/2017 to 12/2017)</strong>\n                    <p><strong class=\"strong\">Duties:</strong></p>\n                    <ul>\n                        <li  style=\"list-style-type:disc\">Rotated merchandise, organized shelves, and put out new stock. </li>\n                        <li style=\"list-style-type:disc\">Maintained friendly attitude and followed all store interaction protocols while answering customer questions and processing payments. </li>\n                        <li style=\"list-style-type:disc\">Recommended additional items for future purchase.</li>\n                      </ul>\n                  </div>\n                  <div class=\"exp\">\n                    <strong class=\"strong\">Deeva Salon( Cashier and front desk receptionist 09/2015 to 08/2017)</strong>\n                    <p><strong class=\"strong\">Duties:</strong></p>\n                    <ul>\n                        <li  style=\"list-style-type:disc\"> Managed receptionist area, including greeting visitors and responding to telephone and in-person requests for information. </li>\n                        <li style=\"list-style-type:disc\">Wrote reports and correspondence from dictation and handwritten notes. </li>\n                        <li style=\"list-style-type:disc\">Maintained the front desk and reception area in a neat and organized fashion. </li>\n                        <li style=\"list-style-type:disc\">Posted open positions on company and social media websites. </li>\n                      </ul>\n                  </div>\n                  <div class=\"exp\">\n                    <strong class=\"strong\">Skoulakis-Concord Premium Meats( Accountant and machine operator 6/2011 to 07/2015 )</strong>\n                    <p><strong class=\"strong\">Duties:</strong></p>\n                  \n                    <ul>\n                        <li  style=\"list-style-type:disc\"> Answer customer telephone calls regarding existing accounts. </li>\n                        <li style=\"list-style-type:disc\">Respond to questions and concerns about service, and escalate calls appropriately. </li>\n                        <li style=\"list-style-type:disc\">Consistently improve customer satisfaction through expert resolution of conflicts, issues, and concerns </li>\n                        <li style=\"list-style-type:disc\">Consult with customers to evaluate needs and determine best options. </li>\n                      </ul>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Certification\">certification\n              <div class=\"certification\">\n                <img src=\"../assets/images/certi.jpg\">\n              </div>\n            </mat-tab>  \n          </mat-tab-group>\n        </div>\n      </body>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</html>\n\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.events = [];
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gagandeep\Desktop\my_portifolio\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map