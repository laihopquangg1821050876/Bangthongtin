"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Doituong_1 = require("./Doituong");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ThongTin';
        this.BangThontin = new forms_1.FormGroup({
            MasoBray: new forms_1.FormControl(''),
            NameBray: new forms_1.FormControl(''),
            DateBray: new forms_1.FormControl(''),
            DiachiBray: new forms_1.FormControl(''),
            GioitinhBray: new forms_1.FormControl('')
        });
        this.list = [];
    }
    AppComponent.prototype.OnClick = function () {
        var sayan = new Doituong_1.Doituong();
        sayan.Number1 = this.BangThontin.get('MasoBray').value;
        sayan.Name1 = this.BangThontin.get('NameBray').value;
        sayan.Date1 = this.BangThontin.get('DateBray').value;
        sayan.Diachi1 = this.BangThontin.get('DiachiBray').value;
        sayan.Gioitinh1 = this.BangThontin.get('GioitinhBray').value;
        this.list.push(sayan);
        this.BangThontin.reset();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
