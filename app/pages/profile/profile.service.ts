import { Injectable, Inject, forwardRef } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import platform = require("platform");
import { isAndroid, isIOS } from "platform";

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  load(){

    return this.http.get("https://api.github.com/users/ServerJon", {
    })
    .map(res => {
      return res.json()

    })
    .do(data => {
      return data;
    })
    .catch(this.handleErrors);

  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
