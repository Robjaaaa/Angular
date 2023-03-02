import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LafraseService {

  constructor(private frase:HttpClient) { }

  obtenerFrase(){
    const respuesta=this.frase.get("https://api.quotable.io/random")
    return respuesta
  }


}
