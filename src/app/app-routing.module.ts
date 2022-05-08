import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingPageComponent } from './components/banking-page/banking-page.component';
import { PopupSuccessfulPaymentComponent } from './components/popup-successful-payment/popup-successful-payment.component';
import { PopupFailedPaymentComponent } from './components/popup-failed-payment/popup-failed-payment.component';

const routes: Routes = [
  { path: "successful-payment", component: PopupSuccessfulPaymentComponent },
  { path: "failed-payment", component: PopupFailedPaymentComponent },
  { path: ":numCard", component: BankingPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
