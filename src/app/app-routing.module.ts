import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./Paginas/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./Paginas/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'act-1',
    loadChildren: () => import('./Paginas/act-1/act-1.module').then( m => m.Act1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
