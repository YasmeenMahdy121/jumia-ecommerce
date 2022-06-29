import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annual-offers',
  templateUrl: './annual-offers.component.html',
  styleUrls: ['./annual-offers.component.scss']
})
export class AnnualOffersComponent implements OnInit {
  @Input() category:any="";
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

  }
  goToAnnualOffers(){
    this.router.navigate(["/categories",this.category,'annual_offers']);
  }

}
