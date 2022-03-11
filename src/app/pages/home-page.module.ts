import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { hostsComponent } from './hosts/hosts.component';
import { LoginCxComponent } from './login-cx/login-cx.component';
import { ApiTextComponent } from './api-text/api-text.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FailComponent } from './fail/fail.component';
import { ChecksumComponent } from './checksum/checksum.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzSelectModule,
    NzDescriptionsModule
  ],
  declarations: [
    hostsComponent,
    LoginCxComponent,
    ApiTextComponent,
    NotFoundComponent,
    FailComponent,
    ChecksumComponent
  ]
})
export class HomePageModules {}


