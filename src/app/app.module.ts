import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ListaAplicacionesComponent} from './lista-aplicaciones/lista-aplicaciones.component';
import {ListaQueHacerComponent} from './aplicaciones/lista-que-hacer/lista-que-hacer.component';

const rutasAplicacion:Routes = [
    {path: '', component: ListaAplicacionesComponent},
    {path: 'quehacer', component: ListaQueHacerComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ListaAplicacionesComponent,
        ListaQueHacerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rutasAplicacion)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
