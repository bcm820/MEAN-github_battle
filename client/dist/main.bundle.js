webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_battle_battle_component__ = __webpack_require__("../../../../../src/app/components/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_battle_results_results_component__ = __webpack_require__("../../../../../src/app/components/battle/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_rankings_rankings_component__ = __webpack_require__("../../../../../src/app/components/rankings/rankings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__components_battle_battle_component__["a" /* BattleComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_3__components_battle_results_results_component__["a" /* ResultsComponent */] },
    { path: 'rankings', component: __WEBPACK_IMPORTED_MODULE_4__components_rankings_rankings_component__["a" /* RankingsComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=row>\n  <div class=col-sm-6>\n    <h1>GitHub Battle</h1>\n  </div>\n  <div class=\"col-sm-6 text-right\">\n    <nav>\n      <h3>\n        <a [routerLink]=\"['']\">Battle</a> |\n        <a [routerLink]=\"['rankings']\">Rankings</a>\n      </h3>\n    </nav>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_battle_battle_component__ = __webpack_require__("../../../../../src/app/components/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_battle_player_player_component__ = __webpack_require__("../../../../../src/app/components/battle/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_battle_results_results_component__ = __webpack_require__("../../../../../src/app/components/battle/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_rankings_rankings_component__ = __webpack_require__("../../../../../src/app/components/rankings/rankings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_rankings_list_list_component__ = __webpack_require__("../../../../../src/app/components/rankings/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_battle_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_battle_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_rankings_rankings_component__["a" /* RankingsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_rankings_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_battle_battle_component__["a" /* BattleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_player_service__["a" /* PlayerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=row *ngIf=\"!battle\">\n  <hr>\n  <div class=\"col-sm-6\">\n\n    <app-player\n      [label]=\"label[0]\"\n      [player]=\"player[0]\"\n      [status]=\"status1\"\n      [search]=\"search1\"\n      [ready]=\"ready\"\n    ></app-player>\n\n  </div>\n  <div class=col-sm-1></div>\n  <div class=\"col-sm-6\">\n\n    <app-player\n      [label]=\"label[1]\"\n      [player]=\"player[1]\"\n      [status]=\"status2\"\n      [search]=\"search2\"\n      [ready]=\"ready\"\n    ></app-player>\n\n  </div>\n</div>\n\n<div class=row>\n  <div class=col-sm-2></div>\n  <div class=\"col-sm-8 text-center\">\n    <button *ngIf=ready class=\"btn btn-lg btn-block btn-primary\" (click)=runBattle()>Battle!</button>\n    <button *ngIf=!ready class=\"btn btn-lg btn-block btn-danger\" [disabled]=\"!ready\">Battle!</button>\n  </div>\n  <div class=col-sm-2></div>\n</div>\n\n<div class=row *ngIf=\"battle\">\n  <div class=col-sm-12>\n    <app-results></app-results>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_player_model__ = __webpack_require__("../../../../../src/app/models/player.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BattleComponent = (function () {
    function BattleComponent(_ps, router) {
        this._ps = _ps;
        this.router = router;
        this.label = ['Player 1', 'Player 2'];
        this.player = [new __WEBPACK_IMPORTED_MODULE_2__models_player_model__["a" /* Player */](), new __WEBPACK_IMPORTED_MODULE_2__models_player_model__["a" /* Player */]()];
        this.status1 = 'waiting';
        this.status2 = 'waiting';
        this.search1 = new __WEBPACK_IMPORTED_MODULE_1_Rxjs__["Subject"]();
        this.search2 = new __WEBPACK_IMPORTED_MODULE_1_Rxjs__["Subject"]();
        this.ready = false;
        this.battle = false;
        this.findUser(this.search1, 0);
        this.findUser(this.search2, 1);
    }
    BattleComponent.prototype.findUser = function (username, i) {
        var _this = this;
        this._ps.timeSearch(username).subscribe(function (player) { return _this.player[i] = player; }, function (err) { return console.log('No user found!'); });
    };
    BattleComponent.prototype.updateStatus = function (player, status) {
        if (player === 'Player 1') {
            this.status1 = status;
        }
        else if (player === 'Player 2') {
            this.status2 = status;
        }
        this.checkReady();
    };
    BattleComponent.prototype.checkReady = function () {
        if (this.status1 === 'found' && this.status2 === 'found') {
            this.ready = true;
        }
        else {
            this.ready = false;
        }
    };
    BattleComponent.prototype.runBattle = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var player = {
                id: this_1.player[i].id,
                login: this_1.player[i].login,
                name: this_1.player[i].name,
                avatar_url: this_1.player[i].avatar_url,
                html_url: this_1.player[i].html_url,
                public_repos: this_1.player[i].public_repos,
                followers: this_1.player[i].followers,
                score: (this_1.player[i].public_repos + this_1.player[i].followers) * 12
            };
            this_1._ps.add(player).subscribe(function (res) { return console.log(_this.player[i].login + " added to DB"); }, function (err) { return console.log(_this.player[i].login + " not added (prob in alrdy)"); });
        };
        var this_1 = this;
        for (var i = 0; i < 2; i++) {
            _loop_1(i);
        }
        this.router.navigate(['results']);
    };
    BattleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-battle',
            template: __webpack_require__("../../../../../src/app/components/battle/battle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/battle/battle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], BattleComponent);
    return BattleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/battle/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    margin-top: 10px;\n    max-width:75%;\n    max-height:75%;\n}\n\n.profile{\n    height: 275px;\n    padding-top: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/battle/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"status === 'waiting'\" class=\"well text-center profile\">\n  <h2>{{label}}</h2>\n</div>\n\n<div *ngIf=\"status === 'searching'\" class=\"well text-center profile\">\n  <h2>Searching GitHub...</h2>\n</div>\n\n<div *ngIf=\"status === 'none'\" class=\"well text-center profile\">\n  <h2>None found!</h2>\n</div>\n\n<div *ngIf=\"status === 'found'\" class=\"well text-center\">\n  <img src=\"{{player.avatar_url}}\" alt=\"{{player.login}}\">\n  <h3><a href={{player.html_url}}>{{player.login}}</a></h3>\n  <button class=\"btn btn-sm btn-warning\" (click)=\"reset(label)\">Reset</button>\n</div>\n\n<div *ngIf=\"status !== 'found'\">\n  <input class=\"form-control input-lg text-center\" (keyup)=\"update($event.target.value, label)\" placeholder=\"Enter a GitHub username\"><br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/battle/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__battle_component__ = __webpack_require__("../../../../../src/app/components/battle/battle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = (function () {
    function PlayerComponent(_bc) {
        this._bc = _bc;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.update = function (username, label) {
        var _this = this;
        var checkUser = function () {
            if (_this.player.login === '') {
                _this._bc.updateStatus(label, 'none');
            }
            else {
                _this._bc.updateStatus(label, 'found');
            }
        };
        if (username === '') {
            this._bc.updateStatus(label, 'waiting');
            return;
        }
        this._bc.updateStatus(label, 'searching');
        this.search.next(username);
        setTimeout(checkUser, 3000);
    };
    PlayerComponent.prototype.reset = function (label) {
        this.status = 'waiting';
        this._bc.updateStatus(label, 'waiting');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "player", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "search", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "ready", void 0);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("../../../../../src/app/components/battle/player/player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/battle/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__battle_component__["a" /* BattleComponent */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/battle/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.winner {\n    color: green\n}\n\n.loser {\n    color: red\n}\n\nimg{\n    margin-top: 10px;\n    max-width:75%;\n    max-height:75%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/battle/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=col-sm-6>\n  <div class=\"well text-center\">\n    <h2 *ngIf=\"player1.score > player2.score\" class=winner>1st Place</h2>\n    <h2 *ngIf=\"player2.score > player1.score\" class=loser>2nd Place</h2>\n    <img src=\"{{player1.avatar_url}}\" alt=\"{{player1.login}}\">\n    <h3><a href={{player1.html_url}}>{{player1.login}}</a></h3>\n    <h4 *ngIf=\"player1.score > player2.score\" [ngClass]=\"{winner: player1.score > player2.score}\">({{player1.score}} points)</h4>\n    <h4 *ngIf=\"player2.score > player1.score\" [ngClass]=\"{loser: player2.score > player1.score}\">({{player1.score}} points)</h4>\n    <h4>({{player1.public_repos}} repos + {{player1.followers}} followers) * 12</h4>\n  </div>\n</div>\n\n<div class=col-sm-6>\n  <div class=\"well text-center\">\n    <h2 *ngIf=\"player1.score > player2.score\" class=loser>2nd Place</h2>\n    <h2 *ngIf=\"player2.score > player1.score\" class=winner>1st Place</h2>\n    <img src=\"{{player2.avatar_url}}\" alt=\"{{player2.login}}\">\n    <h3><a href={{player2.html_url}}>{{player2.login}}</a></h3>\n    <h4 *ngIf=\"player2.score > player1.score\" [ngClass]=\"{winner: player2.score > player1.score}\">({{player2.score}} points)</h4>\n    <h4 *ngIf=\"player1.score > player2.score\" [ngClass]=\"{loser: player1.score > player2.score}\">({{player2.score}} points)</h4>\n    <h4>({{player2.public_repos}} repos + {{player2.followers}} followers) * 12</h4>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/battle/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = (function () {
    function ResultsComponent(_ps, router) {
        this._ps = _ps;
        this.router = router;
        this.tie = false;
        this.getPlayers();
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.getPlayers = function () {
        var players = this._ps.players.getValue();
        this.player1 = players[0], this.player2 = players[1];
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-results',
            template: __webpack_require__("../../../../../src/app/components/battle/results/results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/battle/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/rankings/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rankings/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/rankings/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/components/rankings/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/rankings/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/rankings/rankings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rankings/rankings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rankings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/rankings/rankings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RankingsComponent = (function () {
    function RankingsComponent() {
    }
    RankingsComponent.prototype.ngOnInit = function () {
    };
    RankingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rankings',
            template: __webpack_require__("../../../../../src/app/components/rankings/rankings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/rankings/rankings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RankingsComponent);
    return RankingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/player.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(id, login, name, avatar_url, html_url, public_repos, followers, score) {
        if (id === void 0) { id = ''; }
        if (login === void 0) { login = ''; }
        if (name === void 0) { name = ''; }
        if (avatar_url === void 0) { avatar_url = ''; }
        if (html_url === void 0) { html_url = ''; }
        if (public_repos === void 0) { public_repos = 0; }
        if (followers === void 0) { followers = 0; }
        if (score === void 0) { score = 0; }
        this.id = id;
        this.login = login;
        this.name = name;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.public_repos = public_repos;
        this.followers = followers;
        this.score = score;
    }
    return Player;
}());



/***/ }),

/***/ "../../../../../src/app/services/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerService = (function () {
    function PlayerService(_http) {
        this._http = _http;
        this.players = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["BehaviorSubject"]([]);
    }
    PlayerService.prototype.timeSearch = function (username) {
        var _this = this;
        return username
            .debounceTime(2000)
            .distinctUntilChanged()
            .switchMap(function (username) { return _this.search(username); });
    };
    PlayerService.prototype.search = function (username) {
        return this._http.get("https://api.github.com/users/" + username, { headers: { "Authorization": "token 8a42946ac5e4e5dd4da27e7fdafb189392199b8d" } });
    };
    PlayerService.prototype.list = function () {
        return this._http.get('/api/list');
    };
    PlayerService.prototype.add = function (player) {
        var players = this.players.getValue();
        players.push(player);
        this.players.next(players);
        return this._http.post('/api/add', player);
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map