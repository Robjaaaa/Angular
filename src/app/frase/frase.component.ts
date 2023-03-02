import { Component } from '@angular/core';
import { LafraseService } from '../lafrase.service';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})

export class FraseComponent {
  informacionRecibida:any
  constructor(private variableServicio:LafraseService){
    // this.informacionRecibida=
    variableServicio.obtenerFrase().subscribe((data)=>{
      this.informacionRecibida=data
    })
    
  }

  refrescarFrase(){
    this.variableServicio.obtenerFrase().subscribe((data)=>{
      this.informacionRecibida=data

    })

  }

}
