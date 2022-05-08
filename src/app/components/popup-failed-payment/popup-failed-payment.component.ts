import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popup-failed-payment',
  templateUrl: './popup-failed-payment.component.html',
  styleUrls: ['./popup-failed-payment.component.css']
})
export class PopupFailedPaymentComponent implements OnInit {

  numCard

  constructor(private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {
  }

  redirect(){
    this.route.queryParams.subscribe(params => {
      this.numCard = params['num_carte']
      this.router.navigateByUrl('/'+this.numCard)
    })
    
  }

}
