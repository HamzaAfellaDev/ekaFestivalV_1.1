import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popup-successful-payment',
  templateUrl: './popup-successful-payment.component.html',
  styleUrls: ['./popup-successful-payment.component.css']
})
export class PopupSuccessfulPaymentComponent implements OnInit {

  numCard

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirect(){
    this.route.queryParams.subscribe(params => {
      this.numCard = params['num_carte']
      this.router.navigateByUrl('/'+this.numCard)
    })
    
  }

}
