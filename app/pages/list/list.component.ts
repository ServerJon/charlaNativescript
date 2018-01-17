import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
})
export class ListComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private nav: RouterExtensions) { }

    ngOnInit(): void {

    }
}