import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  diferenteTexto="Home";
  cupones = 0;
  mostrarDatos: boolean=true;

  // addPadre(newPadre: string){
  //   const valor="Se ha conseguido un cupón";
  //   return valor;
  //   //this.cupones+=1;
  //   //return this.cupones;
  // }
  
  nombre = localStorage.getItem("mostrarDatos");

  if (nombre = localStorage.getItem("mostrarDatos")) {
    this.mostrarDatos=true;
  }

  arregloColores = ['']

  agregarAlArreglo(nuevosValores:string){
    // this.arregloColores.push(nuevosValores);
    this.arregloColores.push("Se han obtenido los cupones");
  }

}
