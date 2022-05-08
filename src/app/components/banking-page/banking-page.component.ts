import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankingService } from '../../services/banking.service'
import { MatDialog } from '@angular/material/dialog';
import { PopupAddFoundsComponent } from '../popup-add-founds/popup-add-founds.component';
import { LoaderService } from '../../services/loader.service';



@Component({
  selector: 'app-banking-page',
  templateUrl: './banking-page.component.html',
  styleUrls: ['./banking-page.component.css']
})
export class BankingPageComponent implements OnInit {

  ClientCardInformations: any
  numCard = ""

  constructor(
    private router: ActivatedRoute, 
    private bankingService: BankingService, 
    private dialog:MatDialog,
    public loader: LoaderService
    ) {
   }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.numCard = params.numCard
      this.bankingService.getClientCardInformation(this.numCard).subscribe(res => {
        this.ClientCardInformations = res
      })  
    })
    }

  addFounds(){
    let dialogRef = this.dialog.open(PopupAddFoundsComponent, {
      height: '260px',
      width: '100%',
      data: {
        order_id: "19",
        tel: "06XXXXXXXX",
        nom: this.ClientCardInformations.informations_client.nom_client,
        num_carte: this.numCard
      }
    });
  }
  
}
