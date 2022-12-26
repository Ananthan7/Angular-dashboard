import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {ListboxModule} from 'primeng/listbox';
import { CreateroleComponent } from './createrole/createrole.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    SettingsComponent,
    CreateroleComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ListboxModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ]
})
export class SettingsModule { }
