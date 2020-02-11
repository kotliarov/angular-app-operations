import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { TestsModule } from './tests/tests.module';
import { AppComponent } from './app.component';

import { SamplesComponent } from './samples/samples.component';
import { LabsComponent } from './labs/labs.component';

import { AptService } from './services/apt.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
//import { aptSearchInjectables } from './apt-search/apt-search-injectables';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    LabsComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TestsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialUiModule,
    TestsModule,
    AppRoutingModule,
  ],
  exports : [
  ],
  providers: [
    UserService,
    AptService,
    //aptSearchInjectables,
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
