import { NgModule } from '@angular/core'; 
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',  // Asegura que redirige solo cuando no hay ningún path
  },
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./Paginas/reset/reset.module').then(m => m.ResetPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./Paginas/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'act-1',
    loadChildren: () => import('./Paginas/actividad-uno/act-1.module').then(m => m.Act1PageModule)
  },
  {
    path: 'actividad-dos',
    loadChildren: () => import('./Paginas/actividad-dos/actividad-dos.module').then(m => m.ActividadDosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Paginas/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./Paginas/calendario/calendario.module').then(m => m.CalendarioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: '**',
    redirectTo: 'e404',  // Página 404 para rutas no encontradas
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
