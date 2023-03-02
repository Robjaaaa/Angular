import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FraseComponent } from './frase/frase.component';

const routes: Routes = [
  {path: "frase", component:FraseComponent},
  {path: "info", component:InfoComponent},
  {path: "navbar", component:NavbarComponent},
  {path: "", component:FraseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
