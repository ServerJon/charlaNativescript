import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "home",
    moduleId: module.id,
    templateUrl: "./home.html",
})
export class HomeComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private nav: RouterExtensions) { }

    ngOnInit(): void {

    }

    camara(){
        this.nav.navigate(["/camara"]);
    }

    list(){
        this.nav.navigate(["/items"]);
    }

    profile(){
        this.nav.navigate(["/profile"]);
    }
}