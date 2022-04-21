import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { hostsComponent } from './pages/hosts/hosts.component';
import { LoginCxComponent } from './pages/login-cx/login-cx.component';
import { InAppFirewallComponent } from './pages/in-app-firewall/in-app-firewall.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FailComponent } from './pages/fail/fail.component';
import { ChecksumComponent } from './pages/checksum/checksum.component';
import { HookDetectionComponent } from './pages/hook-detection/hook-detection.component';
import { ScriptVerificationComponent } from './pages/script-verification/script-verification.component';
import { SubresourceIntegrityComponent } from './pages/subresource-integrity/subresource-integrity.component';
import { InvocationComponent } from './pages/invocation/invocation.component';
import { MultiInsComponent } from './pages/multi-ins/multi-ins.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/invocation' },
  { path: 'hosts', component: hostsComponent },
  { path: 'login', component: LoginCxComponent },
  { path: 'inAppFirewall', component: InAppFirewallComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'fail', component: FailComponent },
  { path: 'checksum', component: ChecksumComponent },
  { path: 'hookDetection', component: HookDetectionComponent },
  { path: 'scriptVerification', component: ScriptVerificationComponent },
  { path: 'subResourceIntegrity', component: SubresourceIntegrityComponent },
  { path: 'invocation', component: InvocationComponent, },
  { path: 'multiIns', component: MultiInsComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
