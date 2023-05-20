import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [{path: "autentica", component: RegistrazioneComponent },
{path: "registro", component: RegistroComponent}, {path: "", redirectTo: "/Start", pathMatch:"full"}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
