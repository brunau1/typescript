import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressComponent } from './progress/progress.component'

@NgModule({
  declarations: [
    AppComponent,
    //novo component importado
    TopComponent,
    PanelComponent,
    TentativasComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
