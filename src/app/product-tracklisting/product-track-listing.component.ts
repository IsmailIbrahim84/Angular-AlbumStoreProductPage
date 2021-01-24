import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from  '../product.service'

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-track-listing.component.html',
  styleUrls: ['./product-track-listing.component.css']
})
export class ProductTrackListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
