import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit{
  @Input() texto="Cupones";
  @Output() eventoEnviarData = new EventEmitter<string>()

  enviarData(valor:string){
    this.eventoEnviarData.emit(valor);
  }

  constructor(){
  }

  ngOnInit(): void{}

  // addPadre(valor : string){
  //   this.newPadre.emit(valor);
  // }
  

}
