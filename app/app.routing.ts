import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home.component";
import { ListComponent } from "./pages/list/list.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "list", component: ListComponent },
    { path: "profile", component: ProfileComponent },
    { path: "camara", loadChildren: './pages/camara/camara.module#CamaraModule' },
    { path: "items", loadChildren: './item/item.module#ItemModule'}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }