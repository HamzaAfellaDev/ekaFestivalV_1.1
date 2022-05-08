import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, UrlTree } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankingService } from 'src/app/services/banking.service';
import { PopupRedirectComponent } from '../popup-redirect/popup-redirect.component';

@Component({
  selector: 'app-popup-add-founds',
  templateUrl: './popup-add-founds.component.html',
  styleUrls: ['./popup-add-founds.component.css']
})
export class PopupAddFoundsComponent implements OnInit {
  
  constructor(private router: Router, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:any, private bankingService: BankingService) { 

  }

  ngOnInit(): void {
  }


  amount = new FormControl('', [Validators.required, Validators.min(1)])
  order
  order_id 
  

  getErrorMessage() {
    if (this.amount.hasError('required')) {
      return 'Vous devez saisir un montant !';
    }
    return this.amount.hasError('min') ? 'Le minimum 1 dhs' : '';
  }

  annuler(){
    this.dialog.closeAll()
  }

  submit(){
    this.dialog.closeAll()
    this.dialog.afterAllClosed.subscribe(res => {
      
      this.bankingService.getOrderId(this.data.num_carte, this.amount.value).subscribe(res => {
        this.order = res
        this.order_id = this.order.order_id
        let url = "https://ekafestival.lalivraison.ma/paiementcb.php?montant="
                + this.amount.value 
                + "&order_id=" + this.order_id
                + "&tel=" + this.data.tel
                + "&nom=" + this.data.nom
                + "&num_carte=" + this.data.num_carte
        window.location.href = url

        let dialogRef = this.dialog.open(PopupRedirectComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          height: '100%',
          width: '100%',
          panelClass: 'full-screen-modal',
          data: {
            paymentUrl: url
          }
        });
      })
    })
    
  }

}
