import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatTooltipModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { RouterService } from './providers/router.service';
import { boardPanelReducer } from './providers/boardPanel/boardPanel.reducer';
import { BoardPanelEffects } from './providers/boardPanel/boardPanel.effects';
import { BoardPanelService } from './providers/boardPanel/boardPanel.service';
import { BoardPanelMockUPService } from './providers/boardPanel/model/boardPanel-mockup-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      boardPanel : boardPanelReducer
    }),
    EffectsModule.forRoot([BoardPanelEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    RouterService,
    BoardPanelService,
    BoardPanelMockUPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
