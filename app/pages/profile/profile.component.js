"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var profile_service_1 = require("./profile.service");
var ProfileComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ProfileComponent(nav, profileService) {
        this.nav = nav;
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.load().subscribe(function (item) {
            console.log("Item: " + JSON.stringify(item));
            _this.myProfile = item;
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.nav.back();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "profile",
            moduleId: module.id,
            templateUrl: "./profile.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QscURBQW1EO0FBUW5EO0lBSUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCwwQkFBb0IsR0FBcUIsRUFBVSxjQUE4QjtRQUE3RCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdEYsbUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXBCUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0JBQWdCO1NBQ2hDLENBQUM7eUNBTzJCLHlCQUFnQixFQUEwQixnQ0FBYztPQU54RSxnQkFBZ0IsQ0FxQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tIFwiLi9wcm9maWxlLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwcm9maWxlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2ZpbGUuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG15UHJvZmlsZTogYW55O1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmxvYWQoKS5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW06IFwiK0pTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgICAgICAgIHRoaXMubXlQcm9maWxlID0gaXRlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIrZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKXtcbiAgICAgICAgdGhpcy5uYXYuYmFjaygpO1xuICAgIH1cbn0iXX0=