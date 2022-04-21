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
    NzEmptyModule
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
    MultiInsComponent
  ]
})
export class HomePageModules {}


