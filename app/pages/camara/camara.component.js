"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platform_1 = require("platform");
var camera = require("nativescript-camera");
var imagepickerModule = require("nativescript-imagepicker");
var CamaraComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function CamaraComponent(nav) {
        this.nav = nav;
    }
    CamaraComponent.prototype.ngOnInit = function () {
        if (platform_1.isIOS) {
            this.isItemVisible = true;
        }
        else if (platform_1.isAndroid) {
            this.isItemVisible = false;
        }
    };
    CamaraComponent.prototype.camara = function () {
        var _this = this;
        camera.requestPermissions();
        camera.takePicture().then(function (imageAsset) {
            _this.picture = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    CamaraComponent.prototype.galeria = function () {
        var _this = this;
        camera.requestPermissions();
        var context = imagepickerModule.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            var imgUser;
            console.log("entra al image");
            selection.forEach(function (selected) {
                _this.picture = selected;
            });
        }).catch(function (e) {
            console.log("Error picker: " + JSON.stringify(e));
        });
    };
    CamaraComponent.prototype.goBack = function () {
        this.nav.back();
    };
    CamaraComponent = __decorate([
        core_1.Component({
            selector: "camara",
            moduleId: module.id,
            templateUrl: "./camara.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CamaraComponent);
    return CamaraComponent;
}());
exports.CamaraComponent = CamaraComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtYXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWFyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELHFDQUE0QztBQUM1Qyw0Q0FBOEM7QUFDOUMsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVE1RDtJQUtJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgseUJBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQUksQ0FBQztJQUU5QyxrQ0FBUSxHQUFSO1FBRUksRUFBRSxDQUFBLENBQUMsZ0JBQUssQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLG9CQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDQyxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFHNUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQUEsaUJBd0JDO1FBdkJHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTVCLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLEVBQUUsUUFBUTtTQUNSLENBQUMsQ0FBQztRQUVILE9BQU87YUFDWCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDZixJQUFJLE9BQVksQ0FBQztZQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFOUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBekRRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZUFBZTtTQUMvQixDQUFDO3lDQVMyQix5QkFBZ0I7T0FQaEMsZUFBZSxDQTBEM0I7SUFBRCxzQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xudmFyIGltYWdlcGlja2VyTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY2FtYXJhXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhbWFyYS5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FtYXJhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlzSXRlbVZpc2libGU6IGJvb2xlYW47XG4gICAgcGljdHVyZTogYW55O1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYoaXNJT1Mpe1xuXHRcdFx0dGhpcy5pc0l0ZW1WaXNpYmxlID0gdHJ1ZTtcblx0XHR9ZWxzZSBpZihpc0FuZHJvaWQpe1xuXHRcdFx0dGhpcy5pc0l0ZW1WaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuICAgIH1cblxuICAgIGNhbWFyYSgpe1xuICAgICAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG5cblxuICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS50aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBpY3R1cmUgPSBpbWFnZUFzc2V0O1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnYWxlcmlhKCl7XG4gICAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IGltYWdlcGlja2VyTW9kdWxlLmNyZWF0ZSh7XG5cdFx0XHRtb2RlOiBcInNpbmdsZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29udGV4dFxuXHRcdFx0LmF1dGhvcml6ZSgpXG5cdFx0XHQudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChzZWxlY3Rpb24pID0+IHtcblx0XHRcdFx0bGV0IGltZ1VzZXI6IGFueTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImVudHJhIGFsIGltYWdlXCIpO1xuXG5cdFx0XHRcdHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGljdHVyZSA9IHNlbGVjdGVkO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciBwaWNrZXI6IFwiK0pTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCl7XG4gICAgICAgIHRoaXMubmF2LmJhY2soKTtcbiAgICB9XG59Il19