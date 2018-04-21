import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ListaAplicacionesComponent} from './lista-aplicaciones/lista-aplicaciones.component';
import {ListaQueHacerComponent} from './aplicaciones/lista-que-hacer/lista-que-hacer.component';
import { BenildaComponent } from './aplicaciones/benilda/benilda.component';


const rutasAplicacion: Routes = [
    {path: 'quehacer', component: ListaQueHacerComponent},
    {path: 'benilda', component: BenildaComponent},
    {path: '', component: ListaAplicacionesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ListaAplicacionesComponent,
        ListaQueHacerComponent,
        BenildaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(rutasAplicacion)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
