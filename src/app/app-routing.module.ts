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
import { DebugDetectionComponent } from './pages/debug-detection/debug-detection.component';
import { WebAppIntegrityComponent } from './pages/web-app-integrity/web-app-integrity.component';
import { StringEncryptionComponent } from './pages/string-encryption/string-encryption.component';
import { OperatorRemovalComponent } from './pages/operator-removal/operator-removal.component';
import { ExternalHidingComponent } from './pages/external-hiding/external-hiding.component';
import { NumericLiteralHidingComponent } from './pages/numeric-literal-hiding/numeric-literal-hiding.component';
import { ContorlFlowFlatteningComponent } from './pages/contorl-flow-flattening/contorl-flow-flattening.component';
import { IdentifierRenamingComponent } from './pages/identifier-renaming/identifier-renaming.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GamesComponent } from './pages/games/games.component';
import { LabsComponent } from './pages/labs/labs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: WelcomeComponent },
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
  { path: 'debugDetection', component: DebugDetectionComponent },
  { path: 'webAppIntegrity', component: WebAppIntegrityComponent },
  { path: 'stringEncryption', component: StringEncryptionComponent },
  { path: 'operatorRemoval', component: OperatorRemovalComponent },
  { path: 'externalHiding', component: ExternalHidingComponent },
  { path: 'numericLiteralHiding', component: NumericLiteralHidingComponent },
  { path: 'contorlFlowFlattening', component: ContorlFlowFlatteningComponent },
  { path: 'identifierRenaming', component: IdentifierRenamingComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'labs', component: LabsComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
