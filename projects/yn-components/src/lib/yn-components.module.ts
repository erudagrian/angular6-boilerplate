import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserAnimationsModule, MatToolbarModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent, MatToolbarModule]
})
export class YnComponentsModule { }
