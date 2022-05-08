import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BankingPageComponent } from './components/banking-page/banking-page.component';
import { PopupAddFoundsComponent } from './components/popup-add-founds/popup-add-founds.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PopupFailedPaymentComponent } from './components/popup-failed-payment/popup-failed-payment.component';
import { PopupSuccessfulPaymentComponent } from './components/popup-successful-payment/popup-successful-payment.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorService } from "../app/services/interceptor.service";
import { PopupRedirectComponent } from './components/popup-redirect/popup-redirect.component';





@NgModule({
  declarations: [
    AppComponent,
    BankingPageComponent,
    PopupAddFoundsComponent,
    PopupFailedPaymentComponent,
    PopupSuccessfulPaymentComponent,
    PopupRedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
