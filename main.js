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

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>\n            <span class=\"about-name\">{{about.name}}</span>\n        </mat-card-title>\n        <mat-card-subtitle class=\"job\">\n            <mat-icon>work</mat-icon> {{about.job}}\n        </mat-card-subtitle>\n        <mat-card-subtitle class=\"contact\">\n            <span><mat-icon>email</mat-icon> {{about.email}}</span>\n            <span><mat-icon>location_on</mat-icon> {{about.location}}</span>\n            <span *ngIf=\"about.phoneNumber\">\n                <mat-icon>call</mat-icon> {{about.phoneNumber}}\n            </span>\n        </mat-card-subtitle>\n        <mat-card-subtitle>\n            <span *ngIf=\"about.linkedIn\">\n                <a href=\"{{about.linkedIn}}\">\n                    <i mat-icon-button class=\"fa fa-linkedin\"></i>\n                </a>\n            </span>\n            <span *ngIf=\"about.gitHub\">\n                <a href=\"{{about.gitHub}}\">\n                    <i mat-icon-button class=\"fa fa-github\"></i>\n                </a>\n            </span>\n            <div style=\"padding-top:1vh\">\n                <a mat-raised-button color=\"primary\"\n                    href=\"https://drive.google.com/file/d/0B92Dn0Is3SzlMmx3TU13V09vd1U/view?usp=sharing\">\n                    PDF Resume\n                </a>\n            </div>\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        \n    </mat-card-content>\n</mat-card>\n    "

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
/* harmony import */ var _api_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/about */ "./src/app/api/about.ts");
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
    function AboutComponent() {
        this.about = _api_about__WEBPACK_IMPORTED_MODULE_1__["about"];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/api/about.ts":
/*!******************************!*\
  !*** ./src/app/api/about.ts ***!
  \******************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
var about = {
    name: 'Calvin Li',
    location: 'Portland, OR',
    email: 'calvin.xuan.li@gmail.com',
    job: 'Software Engineer',
    phoneNumber: null,
    summary: null,
    linkedIn: 'https://www.linkedin.com/in/calvinxli/',
    gitHub: 'https://github.com/calvinxli'
};


/***/ }),

/***/ "./src/app/api/education.ts":
/*!**********************************!*\
  !*** ./src/app/api/education.ts ***!
  \**********************************/
/*! exports provided: education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "education", function() { return education; });
var education = [
    {
        name: 'Oregon State University',
        location: 'Corvallis, OR, United States',
        degree: 'Bachelor of Computer Science',
        startDate: new Date(2011, 8),
        endDate: new Date(2016, 2),
        gpa: 3.81
    }
];


/***/ }),

/***/ "./src/app/api/experiences.ts":
/*!************************************!*\
  !*** ./src/app/api/experiences.ts ***!
  \************************************/
/*! exports provided: experiences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
var experiences = [
    {
        company: '3Sharp',
        location: 'Redmond, WA',
        role: 'Software Engineer',
        startDate: new Date(2018, 1),
        endDate: null,
        highlights: [
            'Contribute towards release requirements of the 3Sharp Demo Platform.',
            'Extend the Demo Platform Services by adding the capability of provisioning and managing virtual machines using Azure Resource Manager templates.',
            'Design and implement a system which allows a cloud-hosted service to control and monitor active virtual machines using Azure Service Bus.',
            'Create REST endpoints using Web API.',
            'Create and update Angular components for the Microsoft Demos Portal.'
        ],
        technologies: 'C#, .NET, .NET Core, Web API, Azure, Cosmos DB, Service Bus, Angular'
    },
    {
        company: 'Grass Valley',
        location: 'Hillsboro, OR',
        role: 'Software Engineer',
        startDate: new Date(2016, 3),
        endDate: new Date(2016, 0),
        highlights: [
            'Contribute towards release requirements of the GV STRATUS software.',
            'Implement new features for GV STRATUS using C#, .NET, WCF RESTful services, WPF and SQL Server.',
            'Debug, design and implement new features for existing WPF applications.',
            'Create an IL weaver that can automatically modify and add data members to data contracts.',
            'Create an automation framework using Selenium for testing the GV STRATUS Web Client. Reduced manual testing effort and made it easier to create/maintain tests.',
            'Create unit tests using NUnit, Unity, and FakeItEasy.'
        ],
        technologies: 'C#, .NET, WCF, WPF, SQL Server, Fody, Selenium, FlaUI, NUnit, Unity, FakeItEasy'
    },
    {
        company: 'Intel',
        location: 'Hillsboro, OR',
        role: 'Software Engineer Intern (MECOP)',
        startDate: new Date(2015, 5),
        endDate: new Date(2015, 11),
        highlights: [
            'Implement a feature that uses UART (universal asynchronous receiver/transmitter) to send and receive debug information from a wireless charging board. Save firmware developer hours by giving hardware validation engineers more control over the firmware.',
            'Automate the process of sending/receiving data through UART using python.',
            'Debug and enhance multi-threaded WPF applications.'
        ],
        technologies: 'C#, .NET, WPF, Python, C'
    },
    {
        company: 'ON Semiconductor',
        location: 'Gresham, OR',
        role: 'Software Development Engineer Intern (MECOP)',
        startDate: new Date(2014, 2),
        endDate: new Date(2014, 8),
        highlights: [
            'Create web forms using ASP.NET and C#. Automate the process of submitting wafer defect reports; improve the effectiveness and efficiency of the quality control process. Convert web applications from PHP to ASP.NET.',
            'Eliminate the need of a third party software. Create a C# console app that parses wafer data and uploads the resulting files to a server via FTP where the data will be used to analyze silicon wafer defects.'
        ],
        technologies: 'C#, .NET, ASP.NET, JavaScript, JQuery, PHP'
    }
];


/***/ }),

/***/ "./src/app/api/interests.ts":
/*!**********************************!*\
  !*** ./src/app/api/interests.ts ***!
  \**********************************/
/*! exports provided: interests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interests", function() { return interests; });
var interests = [
    {
        category: 'Technologies',
        descriptions: [
            'GraphQL',
            'AWS',
            'Azure',
            'Apache Kafka'
        ]
    },
    {
        category: 'General',
        descriptions: [
            'Back-end development',
            'Distributed systems',
            'Full-stack development',
            'Machine learning',
            'Artificial intelligence'
        ]
    },
];


/***/ }),

/***/ "./src/app/api/skill-sets.ts":
/*!***********************************!*\
  !*** ./src/app/api/skill-sets.ts ***!
  \***********************************/
/*! exports provided: skillSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillSets", function() { return skillSets; });
var skillSets = [
    {
        category: 'Front End',
        skills: [
            { skill: 'JavaScript', experience: null },
            { skill: 'TypeScript', experience: null },
            { skill: 'HTML', experience: null },
            { skill: 'CSS', experience: null },
            { skill: 'WPF', experience: null },
            { skill: 'Angular', experience: null }
        ]
    },
    {
        category: 'Back End',
        skills: [
            { skill: 'C#', experience: null },
            { skill: '.NET', experience: null },
            { skill: '.NET Core', experience: null },
            { skill: 'SQL', experience: null },
            { skill: 'Web API', experience: null },
            { skill: 'WCF', experience: null },
            { skill: 'GraphQL', experience: null },
            { skill: 'Node.js', experience: null }
        ]
    },
    {
        category: 'Testing',
        skills: [
            { skill: 'NUnit', experience: null },
            { skill: 'FakeItEasy', experience: null },
            { skill: 'Moq', experience: null },
            { skill: 'Selenium', experience: null },
            { skill: 'FlaUI', experience: null }
        ]
    },
    {
        category: 'Tools',
        skills: [
            { skill: 'Visual Studio', experience: null },
            { skill: 'SQL Server', experience: null },
            { skill: 'Fiddler', experience: null },
            { skill: 'Postman', experience: null }
        ]
    },
    {
        category: 'Other',
        skills: [
            { skill: 'Unity', experience: null },
            { skill: 'Fody', experience: null },
            { skill: 'Mono.Cecil', experience: null }
        ]
    },
];


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _knowledge_skills_knowledge_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knowledge-skills/knowledge-skills.component */ "./src/app/knowledge-skills/knowledge-skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"],
                _interests_interests_component__WEBPACK_IMPORTED_MODULE_7__["InterestsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _knowledge_skills_knowledge_skills_component__WEBPACK_IMPORTED_MODULE_9__["KnowledgeSkillsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            ],
            imports: [
                // AppRoutingModule,
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "<mat-card *ngFor=\"let school of education\">\n    <mat-card-header>\n        <mat-card-title>\n            <mat-icon class=\"card-title\">school</mat-icon>\n            <h1 class=\"card-title\">{{school.name}}</h1>\n        </mat-card-title>\n        <mat-card-subtitle>\n            <mat-icon>location_on</mat-icon>\n            {{school.location}}\n            <mat-icon>date_range</mat-icon>\n            {{school.startDate | date:'y MMM'}} - {{school.endDate ? (school.endDate | date:'y MMM') : 'Present'}}\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content >\n        <p>{{school.degree}}</p>\n        <p>{{school.gpa}} GPA</p>\n    </mat-card-content>\n</mat-card>\n"

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
/* harmony import */ var _api_education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/education */ "./src/app/api/education.ts");
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
    function EducationComponent() {
        this.education = _api_education__WEBPACK_IMPORTED_MODULE_1__["education"];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<mat-card *ngFor=\"let experience of experiences\">\r\n    <mat-card-header>\r\n        <mat-card-title>\r\n            <mat-icon class=\"card-title\">business</mat-icon>\r\n            <h1 class=\"card-title\">{{experience.company}}</h1>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n            <mat-icon>person</mat-icon> {{experience.role}}\r\n            <mat-icon>place</mat-icon> {{experience.location}}\r\n            <mat-icon>date_range</mat-icon> {{experience.startDate | date:'y MMM'}} - {{experience.endDate ? (experience.endDate | date:'y MMM') : 'Present'}}\r\n        </mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <ul>\r\n            <li *ngFor=\"let highlight of experience.highlights\">\r\n                {{highlight}}\r\n            </li>\r\n        </ul>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n        <mat-chip-list>\r\n            <mat-chip *ngFor=\"let tech of experience.technologies.split(',')\" selected=\"true\">\r\n                {{tech.trim()}}\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </mat-card-footer>\r\n</mat-card>"

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
/* harmony import */ var _api_experiences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/experiences */ "./src/app/api/experiences.ts");
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
    function ExperienceComponent() {
        this.experiences = _api_experiences__WEBPACK_IMPORTED_MODULE_1__["experiences"];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<mat-card *ngFor=\"let interest of interests\">\n    <mat-card-title>\n        <h1>{{interest.category}}</h1>\n    </mat-card-title>\n    <mat-card-content>\n            <ul>\n                <li *ngFor=\"let description of interest.descriptions\">{{description}}</li>\n            </ul>\n    </mat-card-content>\n</mat-card>"

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
/* harmony import */ var _api_interests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/interests */ "./src/app/api/interests.ts");
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
    function InterestsComponent() {
        this.interests = _api_interests__WEBPACK_IMPORTED_MODULE_1__["interests"];
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"card-container\">\n    <mat-card *ngFor=\"let skillSet of skillSets\">\n        <mat-card-header>\n            <mat-card-title>\n                <h2>{{skillSet.category}}</h2>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-chip-list class=\"mat-chip-list\">\n                <mat-chip *ngFor=\"let skill of skillSet.skills\" selected=\"true\">\n                    {{skill.skill}} <span class=\"spacer\"></span> {{skill.experience}}\n                </mat-chip>\n            </mat-chip-list>\n        </mat-card-content> \n    </mat-card>\n</div>"

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
/* harmony import */ var _api_skill_sets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/skill-sets */ "./src/app/api/skill-sets.ts");
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


var KnowledgeSkillsComponent = /** @class */ (function () {
    function KnowledgeSkillsComponent() {
        this.skillSets = _api_skill_sets__WEBPACK_IMPORTED_MODULE_0__["skillSets"];
    }
    KnowledgeSkillsComponent.prototype.ngOnInit = function () {
    };
    KnowledgeSkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knowledge-skills',
            template: __webpack_require__(/*! ./knowledge-skills.component.html */ "./src/app/knowledge-skills/knowledge-skills.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-skills.component.css */ "./src/app/knowledge-skills/knowledge-skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
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