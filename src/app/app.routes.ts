import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PostComponent } from './pages/post/post.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { SupermercadoComponent } from './pages/api/supermercado.component';

export const routes: Routes = [
    {path: 'suma', title:'Operacion suma',component: SumaComponent},
    {path: 'resta', title:'Operacion resta',component: RestaComponent},
    {path: 'acercade', title:'Acerca de...',component: AcercadeComponent},
    {path: 'post', title: 'posts', component: PostComponent},
    {path: 'mensajes', title: 'posts', component: MensajesComponent},
    {path: 'supermercado', title: 'Supermercado', component: SupermercadoComponent},
];
