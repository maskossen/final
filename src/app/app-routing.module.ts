import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'regex',
    loadChildren: () => import('./sheets/regex/regex.module').then( m => m.RegexPageModule)
  },
  {
    path: 'cpp',
    loadChildren: () => import('./sheets/cpp/cpp.module').then( m => m.CppPageModule)
  },
  {
    path: 'python',
    loadChildren: () => import('./sheets/python/python.module').then( m => m.PythonPageModule)
  },
  {
    path: 'complexities',
    loadChildren: () => import('./sheets/complexities/complexities.module').then( m => m.ComplexitiesPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./user/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
