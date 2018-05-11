import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ListaAplicacionesComponent} from './lista-aplicaciones/lista-aplicaciones.component';
import {ListaQueHacerComponent} from './aplicaciones/lista-que-hacer/lista-que-hacer.component';
import {GrupoService} from './servicios/grupo.service';
import {GrupoListaQueHacerComponent} from './aplicaciones/grupo-lista-que-hacer/grupo-lista-que-hacer.component';
import {QueHacerService} from './servicios/que-hacer.service';


const rutasAplicacion: Routes = [
    {path: 'quehacer', component: GrupoListaQueHacerComponent},
    {path: '', component: ListaAplicacionesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ListaAplicacionesComponent,
        ListaQueHacerComponent,
        GrupoListaQueHacerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(rutasAplicacion)
    ],
    providers: [GrupoService, QueHacerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
