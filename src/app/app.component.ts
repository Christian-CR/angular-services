import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';
import { ExampleHttp } from './example.http';

@Component({
  selector: 'my-app',
  template: `<h1>Get Datos</h1>

  	<ul>
		<li>{{getData}}</li>
	</ul>

  `
})


export class AppComponent implements OnInit { 

	//title: string;

	getData:string;
	postData:string;

	/*constructor(private _exampleService: ExampleService){

	}*/

	drupaldata = [];

	constructor(private _exampleHttp: ExampleHttp){

	}

	ngOnInit(){
		//this.title = this._exampleService.someMethod();

		this._exampleHttp.getDrupaldata()
		//.subscribe(resDrupaldata => this.drupaldata = resDrupaldata);
		.subscribe(
				data => this.getData = JSON.stringify(data.nodes), 
				error => alert(error), 
				() => console.log('Terminado')
			);

	}

 }
