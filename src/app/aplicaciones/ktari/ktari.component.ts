import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ktari',
  templateUrl: './ktari.component.html',
  styleUrls: ['./ktari.component.css']
})
export class KtariComponent implements OnInit {
	color: string;
	resultado: string;
  constructor() { 
  	this.color = ''
  	this.resultado = ''
  }

  ngOnInit() {
  }
  cambiarColor(id: string){
  	if (this.color !== '') {
        var elem; 
        elem=document.getElementById(id);
        elem.style.backgroundColor=this.color;       
        this.color = '';

    }
  }

}
