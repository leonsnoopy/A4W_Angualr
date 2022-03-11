import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { hostsComponent } from './pages/hosts/hosts.component';
import { LoginCxComponent } from './pages/login-cx/login-cx.component';
import { ApiTextComponent } from './pages/api-text/api-text.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FailComponent } from './pages/fail/fail.component';
import { ChecksumComponent } from './pages/checksum/checksum.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/hosts' },
  { path: 'hosts', component: hostsComponent },
  { path: 'login', component: LoginCxComponent },
  { path: 'apiTest', component: ApiTextComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'fail', component: FailComponent },
  { path: 'checksum', component: ChecksumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
