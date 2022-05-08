import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-redirect',
  templateUrl: './popup-redirect.component.html',
  styleUrls: ['./popup-redirect.component.css']
})
export class PopupRedirectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
