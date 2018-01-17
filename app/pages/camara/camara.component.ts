import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid, isIOS } from "platform";
import * as camera from "nativescript-camera";
var imagepickerModule = require("nativescript-imagepicker");

@Component({
    selector: "camara",
    moduleId: module.id,
    templateUrl: "./camara.html",
})

export class CamaraComponent implements OnInit {

    isItemVisible: boolean;
    picture: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private nav: RouterExtensions) { }

    ngOnInit(): void {

        if(isIOS){
			this.isItemVisible = true;
		}else if(isAndroid){
			this.isItemVisible = false;
		}
    }

    camara(){
        camera.requestPermissions();


        camera.takePicture().then((imageAsset) => {
            this.picture = imageAsset;
        }).catch((err) => {
            console.log("Error -> " + err.message);
        });
    }

    galeria(){
        camera.requestPermissions();

        var context = imagepickerModule.create({
			mode: "single"
        });
        
        context
			.authorize()
			.then(function() {
				return context.present();
			})
			.then((selection) => {
				let imgUser: any;

				console.log("entra al image");

				selection.forEach((selected) => {
					this.picture = selected;
				});

			}).catch(function (e) {
				console.log("Error picker: "+JSON.stringify(e));
        });
    }

    goBack(){
        this.nav.back();
    }
}