import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';


import { hostsComponent } from './hosts/hosts.component';
import { LoginCxComponent } from './login-cx/login-cx.component';
import { InAppFirewallComponent } from './in-app-firewall/in-app-firewall.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FailComponent } from './fail/fail.component';
import { ChecksumComponent } from './checksum/checksum.component';
import { HookDetectionComponent } from './hook-detection/hook-detection.component';
import { ScriptVerificationComponent } from './script-verification/script-verification.component';
import { SubresourceIntegrityComponent } from './subresource-integrity/subresource-integrity.component';
import { InvocationComponent } from './invocation/invocation.component';
import { MultiInsComponent } from './multi-ins/multi-ins.component';
import { DebugDetectionComponent } from './debug-detection/debug-detection.component';
import { WebAppIntegrityComponent } from './web-app-integrity/web-app-integrity.component';
import { StringEncryptionComponent } from './string-encryption/string-encryption.component';
import { OperatorRemovalComponent } from './operator-removal/operator-removal.component';
import { ExternalHidingComponent } from './external-hiding/external-hiding.component';
import { NumericLiteralHidingComponent } from './numeric-literal-hiding/numeric-literal-hiding.component';
import { ContorlFlowFlatteningComponent } from './contorl-flow-flattening/contorl-flow-flattening.component';
import { IdentifierRenamingComponent } from './identifier-renaming/identifier-renaming.component';
import { ActionsComponent } from './actions/actions.component';
import { GamebruteforceComponent } from './gamebruteforce/gamebruteforce.component';
import { GamesComponent } from './games/games.component';
import { LabsComponent } from './labs/labs.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzGridModule,
    NzImageModule,
    NzTabsModule,
    NzCardModule,
    NzCollapseModule,
    NzEmptyModule,
  ],
  declarations: [
    hostsComponent,
    LoginCxComponent,
    InAppFirewallComponent,
    NotFoundComponent,
    FailComponent,
    ChecksumComponent,
    HookDetectionComponent,
    ScriptVerificationComponent,
    SubresourceIntegrityComponent,
    InvocationComponent,
    MultiInsComponent,
    DebugDetectionComponent,
    WebAppIntegrityComponent,
    StringEncryptionComponent,
    OperatorRemovalComponent,
    ExternalHidingComponent,
    NumericLiteralHidingComponent,
    ContorlFlowFlatteningComponent,
    IdentifierRenamingComponent,
    ActionsComponent,
    GamebruteforceComponent,
    GamesComponent,
    LabsComponent
  ]
})
export class HomePageModules {}


