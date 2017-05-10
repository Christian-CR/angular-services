import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ExampleHttp {

	//private _url: string = "http://headers.jsontest.com";
	private _url: string = "http://www.mirandaspropertiescostarica.com/?q=json";

	constructor(private _http: Http){

	}

	getDrupaldata() {
		return this._http.get(this._url)
		//.map((responce:Response) => responce.json());
		.map(res => res.json());
	}

 }
