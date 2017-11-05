import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { RouterService } from './providers/router.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
