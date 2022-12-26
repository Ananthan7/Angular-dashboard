import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./layout/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
 //D:\Ananthan\Angular\suntech-dashboard\src\app\account\account.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
