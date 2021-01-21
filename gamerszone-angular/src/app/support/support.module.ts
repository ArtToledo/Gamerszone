import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SupportComponent } from './support.component';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
})
export class SupportModule { }
