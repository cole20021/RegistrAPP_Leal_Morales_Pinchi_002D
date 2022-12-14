import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'quienes',
    loadChildren: () => import('./pages/quienes/quienes.module').then( m => m.QuienesPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'finescaner',
    loadChildren: () => import('./pages/finescaner/finescaner.module').then( m => m.FinescanerPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'finregistro',
    loadChildren: () => import('./pages/finregistro/finregistro.module').then( m => m.FinregistroPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
    ,canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    ,canActivate: [NoIngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
