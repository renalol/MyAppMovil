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
    loadChildren: () => import('./Paginas/Capa_Logica/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/Capa_Logica/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./Paginas/Capa_Logica/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./Paginas/Capa_Logica/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'act-1',
    loadChildren: () => import('./Paginas/Capa_Logica/act-1.module').then( m => m.Act1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
