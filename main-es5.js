(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf = checkToShowLoginPage()></app-login>\r\n<app-mail-page *ngIf = checkToShowMailPage()></app-mail-page>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login Form</h2>\n<form>\n  <div class=\"container\">\n    <label><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"userName\" [(ngModel)] =\"userName\"  >\n    <label><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        \n    <button type=\"button\" (click)=\"doLogin()\">Login</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mail-page/mail-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mail-page/mail-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-3 \">\n        <div>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let item of allBoxes\" (click)=\"showData(item)\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-9\" *ngIf=\"showEmailList\">\n        <div>\n            <div class=\"list-group\" *ngIf=\"dataobj\">\n                <div class=\"list-group-item\" style=\"background:#EFEFEF\"\n                    *ngFor=\"let item of dataobj | paginate: { itemsPerPage: 5, currentPage: p }\"\n                    (click)=\"openEmail(item)\">\n                    <div class=\"row\" >\n                            <div class=\"col-1\" *ngIf=\"!item.isRead\" [ngStyle]=\"getStyle(item)\">\n                                (Unread)\n                            </div>\n                        <div class=\"col-2\">\n                            {{item.from || item[0].from}}\n                        </div>\n                        <div class=\"col-9\" style=\"float: right\">\n                            <span>{{item.subject || item[0].subject}}</span>\n                            <span>-\n                                {{item.body || item[0].body}}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"composeMail()\">Compose Mail</button>\n                <!-- <div *ngIf=\"showComposeBox\" style=\"position:absolute; top:168px; width: 70%; right:150px\">\n                    <div style=\"background: black; color: white\" (click)=\"test()\">\n                        <span>New Message</span>\n                        <span style=\"float: right\">X</span>\n                    </div>\n                    <div>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Recipents\" [(ngModel)]=\"recipents\" (keydown)=\"onKeydown($event)\"> \n                            <input type=\"text\" class=\"form-control\" placeholer= \"Subject\">\n                    </div>\n                </div> -->\n            </div>\n            <div class=\"list-group\" *ngIf=\"!dataobj\">\n                No emails to show\n            </div>\n        </div>\n    </div>\n    <div class=\"col-9\" *ngIf=\"!showEmailList\">\n        <app-mailtemplate></app-mailtemplate>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mailtemplate/mailtemplate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mailtemplate/mailtemplate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"whichBox ==='inbox'\" style=\"border: 1px solid\">\n     <div style=\"background: #EFEFEF\">Mails between {{heading}}</div>\n     <hr>\n     <div><span style=\"color: blue\">subject:</span>{{email.subject}}</div>\n     <div style=\"color: #ff3d00\">{{email.body}}</div>\n</div>\n<div *ngIf = \"whichBox ==='sent items'\" style=\"border: 1px solid\">\n    <div style=\"background: #EFEFEF\">Mails between {{heading}}</div>\n    <hr>\n    <div *ngFor=\"let d of email\">\n        <p> <span style=\"color: blue\">from:</span> {{d.from}} </p>\n        <p><span style=\"color: blue\">to:</span>  {{d.to}} </p>\n        <p> <span style=\"color: blue\">subject:</span> {{d.subject}} </p>\n        <p style=\"color: #ff3d00\">  {{d.body}} </p>\n        <hr>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(loginSrvice) {
        this.loginSrvice = loginSrvice;
        this.title = 'Assignment';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showLoginPage = true;
        this.showEmailPage = false;
    };
    AppComponent.prototype.checkToShowLoginPage = function () {
        return this.loginSrvice.showLoginPage;
    };
    AppComponent.prototype.checkToShowMailPage = function () {
        return this.loginSrvice.showEmailPage;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _mail_page_mail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-page/mail-page.component */ "./src/app/mail-page/mail-page.component.ts");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail.service */ "./src/app/mail.service.ts");
/* harmony import */ var _mailtemplate_mailtemplate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mailtemplate/mailtemplate.component */ "./src/app/mailtemplate/mailtemplate.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _mail_page_mail_page_component__WEBPACK_IMPORTED_MODULE_6__["MailPageComponent"], _mailtemplate_mailtemplate_component__WEBPACK_IMPORTED_MODULE_8__["MailtemplateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _mail_service__WEBPACK_IMPORTED_MODULE_7__["MailService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
var LoginService = /** @class */ (function () {
    function LoginService() {
        this.showLoginPage = true;
        this.showEmailPage = false;
    }
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\nform {border: 3px solid #f1f1f1;}\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n.container {\r\n  padding: 16px;\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hELE1BQU0seUJBQXlCLENBQUM7QUFFaEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtLQUNHLGNBQWM7S0FDZCxXQUFXO0VBQ2Q7RUFDQTtLQUNHLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuZm9ybSB7Ym9yZGVyOiAzcHggc29saWQgI2YxZjFmMTt9XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYW5jZWxidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        if (!this.userName || !this.password) {
            alert("Please enter some username and passwowrd");
            return;
        }
        this.showEmailPage = this.loginService.showEmailPage;
        this.loginService.showLoginPage = false;
        this.loginService.showEmailPage = true;
        this.loginService.userName = this.userName;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mail-page/mail-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/mail-page/mail-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtcGFnZS9tYWlsLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mail-page/mail-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mail-page/mail-page.component.ts ***!
  \**************************************************/
/*! exports provided: MailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailPageComponent", function() { return MailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/mail.service.ts");



var MailPageComponent = /** @class */ (function () {
    function MailPageComponent(mailService) {
        this.mailService = mailService;
        this.allBoxes = [];
        this.showComposeBox = false;
        this.recipents = [];
        this.allBoxes = mailService.allBoxes;
        this.dataobj = mailService.dataObj.inbox;
        this.showEmailList = mailService.showEmailList;
    }
    MailPageComponent.prototype.ngOnInit = function () {
        //this.allBoxes = [];
    };
    MailPageComponent.prototype.showData = function (type) {
        this.dataobj = this.mailService.showData(type);
        this.showEmailList = true;
    };
    MailPageComponent.prototype.openEmail = function (email) {
        email.isRead = true;
        this.mailService.showEmail(email);
        this.showEmailList = false;
    };
    // composeMail(){
    //   this.showComposeBox = true;
    // }
    MailPageComponent.prototype.getStyle = function (item) {
        if (!item.isRead) {
            return { "background": "#e57373" };
        }
    };
    MailPageComponent.ctorParameters = function () { return [
        { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
    ]; };
    MailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mail-page',
            template: __webpack_require__(/*! raw-loader!./mail-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/mail-page/mail-page.component.html"),
            styles: [__webpack_require__(/*! ./mail-page.component.css */ "./src/app/mail-page/mail-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]])
    ], MailPageComponent);
    return MailPageComponent;
}());



/***/ }),

/***/ "./src/app/mail.service.ts":
/*!*********************************!*\
  !*** ./src/app/mail.service.ts ***!
  \*********************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
var MailService = /** @class */ (function () {
    function MailService() {
        this.showEmailList = true;
        this.allBoxes = ["Inbox", "Sent Items", "Drafts", "Trash Box"];
        this.email = {};
        this.whichBox = "inbox";
        this.dataObj = { inbox: [{
                    "from": "Theodore Massey",
                    "email": "sit.amet.dapibus@duiFuscediam.net",
                    "subject": "velit justo nec ante. Maecenas mi",
                    "body": "Sed pharetra, felis eget varius",
                    "to": "me",
                    "isRead": false
                },
                {
                    "from": "Nigel Franks",
                    "email": "lacus.vestibulum@eleifendnunc.org",
                    "subject": "elit, dictum eu, eleifend nec,",
                    "body": "Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
                    "to": "me",
                    "isRead": false
                },
                {
                    "from": "Macaulay Mccormick",
                    "email": "ipsum.primis.in@Maecenasiaculis.com",
                    "subject": "cursus purus. Nullam scelerisque neque sed",
                    "body": "euismod in, dolor. Fusce feugiat. Lorem",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Kelsie Fry",
                    "email": "fermentum@ipsum.org",
                    "subject": "Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in",
                    "body": "neque non quam. Pellentesque habitant morbi tristique senectus et",
                    "to": "me",
                    "isRead": false
                },
                {
                    "from": "Garth Gillespie",
                    "email": "condimentum@Nam.org",
                    "subject": "felis ullamcorper viverra. Maecenas iaculis",
                    "body": "mauris. Suspendisse aliquet molestie tellus.",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Kellie Hess",
                    "email": "Nunc@suscipitest.co.uk",
                    "subject": "erat. Vivamus nisi.",
                    "body": "et ipsum cursus vestibulum. Mauris magna. Duis dignissim",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Denise Salinas",
                    "email": "dolor@orcilacus.co.uk",
                    "subject": "turpis egestas. Fusce aliquet magna a neque.",
                    "body": "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Hasad Fitzgerald",
                    "email": "vel.turpis.Aliquam@Innec.co.uk",
                    "subject": "netus",
                    "body": "tempor erat neque non quam. Pellentesque",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Colin Craft",
                    "email": "ut.quam.vel@tellussem.ca",
                    "subject": "egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae,",
                    "body": "ligula eu enim. Etiam imperdiet dictum magna. Ut",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Vivien Koch",
                    "email": "rutrum@nullaatsem.net",
                    "subject": "euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget",
                    "body": "aliquam iaculis, lacus pede sagittis augue, eu tempor",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Ahmed Gilbert",
                    "email": "rutrum.eu.ultrices@consequatnecmollis.net",
                    "subject": "mi felis, adipiscing fringilla,",
                    "body": "eget, dictum placerat, augue. Sed molestie. Sed id risus quis",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Unity Ayala",
                    "email": "tellus.eu.augue@elitpede.org",
                    "subject": "malesuada fames ac turpis egestas. Fusce aliquet",
                    "body": "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat",
                    "to": "me",
                    "isRead": true
                },
                {
                    "from": "Dara Owen",
                    "email": "molestie.dapibus@eu.com",
                    "subject": "risus.",
                    "body": "aliquet, metus urna convallis erat, eget",
                    "to": "me",
                    "isRead": true
                }],
            'sent items': [[
                    {
                        "from": "Barrett Woodward",
                        "to": "me",
                        "emailId": "sed.pede.Cum@tempusscelerisque.ca",
                        "subject": "VON64XNH3DY",
                        "body": "Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat",
                        "isRead": true
                    },
                    {
                        "from": "me",
                        "to": "Barrett Woodward",
                        "emailId": "me95@gmail.com",
                        "subject": "Test subject",
                        "body": "Nam con dolor vitae dolor. Donecc feugiat",
                        "isRead": true
                    },
                    {
                        "from": "Barrett Woodward",
                        "to": "me",
                        "emailId": "sed.pede.Cum@tempusscelerisque.ca",
                        "subject": "Test subject23",
                        "body": "Nam con dolor vitae dolor. Donecc feugiat dummy body",
                        "isRead": true
                    }
                ]]
        };
    }
    MailService.prototype.showData = function (type) {
        type = type.toLowerCase();
        this.showEmailList = true;
        this.whichBox = type;
        return this.dataObj[type];
    };
    MailService.prototype.showEmail = function (email) {
        this.showEmailList = false;
        this.email = email;
    };
    return MailService;
}());



/***/ }),

/***/ "./src/app/mailtemplate/mailtemplate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mailtemplate/mailtemplate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWx0ZW1wbGF0ZS9tYWlsdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mailtemplate/mailtemplate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mailtemplate/mailtemplate.component.ts ***!
  \********************************************************/
/*! exports provided: MailtemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailtemplateComponent", function() { return MailtemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/mail.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");




var MailtemplateComponent = /** @class */ (function () {
    function MailtemplateComponent(mailService, loginService) {
        this.mailService = mailService;
        this.loginService = loginService;
        this.email = mailService.email;
        this.userName = loginService.userName;
        this.heading = " " + this.userName + " and " + (this.email.from || this.email[0].from);
        this.whichBox = this.mailService.whichBox;
    }
    MailtemplateComponent.prototype.ngOnInit = function () {
    };
    MailtemplateComponent.prototype.checkWhichBox = function () {
    };
    MailtemplateComponent.ctorParameters = function () { return [
        { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    MailtemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailtemplate',
            template: __webpack_require__(/*! raw-loader!./mailtemplate.component.html */ "./node_modules/raw-loader/index.js!./src/app/mailtemplate/mailtemplate.component.html"),
            styles: [__webpack_require__(/*! ./mailtemplate.component.css */ "./src/app/mailtemplate/mailtemplate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], MailtemplateComponent);
    return MailtemplateComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sandi\Documents\workspace\Assignment\Assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map