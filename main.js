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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\r\n    font-size: 3vh;\r\n    color: white;\r\n    padding-right: 1vh;\r\n    padding-left: 0.1vh;\r\n}\r\n\r\n.about-name {\r\n    font-size: 10vh;\r\n}\r\n\r\n.job {\r\n    font-size: 3vh;\r\n}\r\n\r\n.contact {\r\n    font-size: 1.3vh;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>\n            <span class=\"about-name\">{{data.name}}</span>\n        </mat-card-title>\n        <mat-card-subtitle class=\"job\">\n            <mat-icon>work</mat-icon> {{data.job}}\n        </mat-card-subtitle>\n        <mat-card-subtitle class=\"contact\">\n            <span><mat-icon>email</mat-icon> {{data.email}}</span>\n            <span><mat-icon>location_on</mat-icon> {{data.location}}</span>\n            <span *ngIf=\"data.phoneNumber\">\n                <mat-icon>call</mat-icon> {{data.phoneNumber}}\n            </span>\n        </mat-card-subtitle>\n        <mat-card-subtitle>\n            <span *ngIf=\"data.linkedIn\">\n                <a href=\"{{data.linkedIn}}\">\n                    <i mat-icon-button class=\"fa fa-linkedin\"></i>\n                </a>\n            </span>\n            <span *ngIf=\"data.gitHub\">\n                <a href=\"{{data.gitHub}}\">\n                    <i mat-icon-button class=\"fa fa-github\"></i>\n                </a>\n            </span>\n            <div style=\"padding-top:1vh\">\n                <a mat-raised-button color=\"primary\"\n                    href=\"https://drive.google.com/file/d/0B92Dn0Is3SzlMmx3TU13V09vd1U/view?usp=sharing\">\n                    PDF Resume\n                </a>\n            </div>\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        \n    </mat-card-content>\n</mat-card>\n    "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DataService */ "./src/app/api/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(dataService) {
        this.dataService = dataService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAbout().subscribe(function (data) {
            _this.data = data;
        }, function (error) { return alert('Error: ' + error.message); });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_api_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/api/DataService.ts":
/*!************************************!*\
  !*** ./src/app/api/DataService.ts ***!
  \************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getExperience = function () {
        return this.http.get('assets/experience.json');
    };
    DataService.prototype.getAbout = function () {
        return this.http.get('assets/about.json');
    };
    DataService.prototype.getInterests = function () {
        return this.http.get('assets/interests.json');
    };
    DataService.prototype.getEducation = function () {
        return this.http.get('assets/education.json');
    };
    DataService.prototype.getSkillSets = function () {
        return this.http.get('assets/skill-sets.json');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .main-card {\r\n    text-align: center\r\n} */\r\n  \r\n.tab-content {\r\n    padding: 16px;\r\n}\r\n  \r\nfooter {\r\n    text-align: center;\r\n    color: rgba(255,255,255,.7);\r\n    font-size: 1.2vh;\r\n    font-family: Roboto,Helvetica Neue,sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n        *ngFor=\"let route of appRoutes\"\r\n        [routerLink]=\"route.path\"\r\n        routerLinkActive #rla=\"routerLinkActive\"\r\n        [active]=\"rla.isActive\">\r\n        Hello\r\n     </a>\r\n</nav> \r\n<router-outlet></router-outlet> -->\r\n\r\n<mat-tab-group>\r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <span>Calvin Li</span>\r\n        </ng-template>\r\n        <div class=\"tab-content\">\r\n            <app-about></app-about>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Experience\">\r\n        <div class=\"tab-content\">\r\n            <app-experience></app-experience>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Knowledge/Skills\">\r\n        <app-knowledge-skills></app-knowledge-skills>\r\n    </mat-tab>\r\n    <mat-tab label=\"Education\">\r\n        <app-education></app-education>\r\n    </mat-tab>\r\n    <mat-tab label=\"Interests\">\r\n        <app-interests></app-interests>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n\r\n<!-- <footer>\r\n    <p>Last modified: {{ lastModified | date:'y MMMM dd' }}</p>\r\n</footer> -->\r\n"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _knowledge_skills_knowledge_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./knowledge-skills/knowledge-skills.component */ "./src/app/knowledge-skills/knowledge-skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AppRoutingModule } from './app-routing.module';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"],
                _interests_interests_component__WEBPACK_IMPORTED_MODULE_8__["InterestsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _knowledge_skills_knowledge_skills_component__WEBPACK_IMPORTED_MODULE_10__["KnowledgeSkillsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [
                // AppRoutingModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\r\n    padding-left: 1vh;\r\n}"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let school of data\">\n    <mat-card-header>\n        <mat-card-title>\n            <mat-icon class=\"card-title\">school</mat-icon>\n            <h1 class=\"card-title\">{{school.name}}</h1>\n        </mat-card-title>\n        <mat-card-subtitle>\n            <mat-icon>location_on</mat-icon>\n            {{school.location}}\n            <mat-icon>date_range</mat-icon>\n            {{school.startDate}} - {{school.endDate || 'Present'}}\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content >\n        <p>{{school.degree}}</p>\n        <p>{{school.gpa}} GPA</p>\n    </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DataService */ "./src/app/api/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = /** @class */ (function () {
    function EducationComponent(dataService) {
        this.dataService = dataService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getEducation().subscribe(function (data) {
            _this.data = data;
        }, function (error) { return alert('Error: ' + error.message); });
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [_api_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-footer {\r\n    padding-left: 4vh;\r\n    padding-right: 4vh;\r\n    padding-bottom: 4vh;\r\n}"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let experience of data\">\r\n    <mat-card-header>\r\n        <mat-card-title>\r\n            <mat-icon class=\"card-title\">business</mat-icon>\r\n            <h1 class=\"card-title\">{{experience.company}}</h1>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n            <mat-icon>person</mat-icon> {{experience.role}}\r\n            <mat-icon>place</mat-icon> {{experience.location}}\r\n            <mat-icon>date_range</mat-icon> {{experience.startDate}} - {{experience.endDate || 'Present'}}\r\n        </mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <ul>\r\n            <li *ngFor=\"let highlight of experience.highlights\">\r\n                {{highlight}}\r\n            </li>\r\n        </ul>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n        <mat-chip-list>\r\n            <mat-chip *ngFor=\"let tech of experience.technologies.split(',')\" selected=\"true\">\r\n                {{tech.trim()}}\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </mat-card-footer>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DataService */ "./src/app/api/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(dataService) {
        this.dataService = dataService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getExperience().subscribe(function (data) {
            _this.data = data;
        }, function (error) { return alert('Error: ' + error.message); });
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [_api_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/*!***************************************************!*\
  !*** ./src/app/interests/interests.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interests/interests.component.html":
/*!****************************************************!*\
  !*** ./src/app/interests/interests.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let interest of data\">\n    <mat-card-title>\n        <h1>{{interest.category}}</h1>\n    </mat-card-title>\n    <mat-card-content>\n            <ul>\n                <li *ngFor=\"let description of interest.descriptions\">{{description}}</li>\n            </ul>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DataService */ "./src/app/api/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestsComponent = /** @class */ (function () {
    function InterestsComponent(dataService) {
        this.dataService = dataService;
    }
    InterestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getInterests().subscribe(function (data) {
            _this.data = data;
        }, function (error) { return alert('Error: ' + error.message); });
    };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [_api_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/knowledge-skills/knowledge-skills.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/knowledge-skills/knowledge-skills.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\r\n    max-width: 10vh;\r\n}\r\n\r\n.card-container mat-card {\r\n    vertical-align: top;\r\n}\r\n\r\n.spacer {\r\n    flex: 1 1 auto;\r\n}"

/***/ }),

/***/ "./src/app/knowledge-skills/knowledge-skills.component.html":
/*!******************************************************************!*\
  !*** ./src/app/knowledge-skills/knowledge-skills.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n    <mat-card *ngFor=\"let skillSet of data\">\n        <mat-card-header>\n            <mat-card-title>\n                <h2>{{skillSet.category}}</h2>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-chip-list class=\"mat-chip-list\">\n                <mat-chip *ngFor=\"let skill of skillSet.skills\" selected=\"true\">\n                    {{skill.skill}} <span class=\"spacer\"></span> {{skill.competence}}\n                </mat-chip>\n            </mat-chip-list>\n        </mat-card-content> \n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/knowledge-skills/knowledge-skills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/knowledge-skills/knowledge-skills.component.ts ***!
  \****************************************************************/
/*! exports provided: KnowledgeSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeSkillsComponent", function() { return KnowledgeSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DataService */ "./src/app/api/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnowledgeSkillsComponent = /** @class */ (function () {
    function KnowledgeSkillsComponent(dataService) {
        this.dataService = dataService;
    }
    KnowledgeSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSkillSets().subscribe(function (data) {
            _this.data = data;
        }, function (error) { return alert('Error: ' + error.message); });
    };
    KnowledgeSkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-knowledge-skills',
            template: __webpack_require__(/*! ./knowledge-skills.component.html */ "./src/app/knowledge-skills/knowledge-skills.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-skills.component.css */ "./src/app/knowledge-skills/knowledge-skills.component.css")]
        }),
        __metadata("design:paramtypes", [_api_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], KnowledgeSkillsComponent);
    return KnowledgeSkillsComponent;
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

module.exports = "<!-- TODO -->"

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
    // TODO
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

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\GitHub\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map