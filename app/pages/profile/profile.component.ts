import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ProfileService } from "./profile.service";


@Component({
    selector: "profile",
    moduleId: module.id,
    templateUrl: "./profile.html",
})
export class ProfileComponent implements OnInit {

    myProfile: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private nav: RouterExtensions, private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.load().subscribe(item => {
            console.log("Item: "+JSON.stringify(item));
            this.myProfile = item;
        },
        error => {
            console.log("Error: "+error);
        });
    }

    goBack(){
        this.nav.back();
    }
}