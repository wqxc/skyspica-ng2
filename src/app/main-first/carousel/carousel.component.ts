
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {SlidDataService} from '../slid-data.service';
import {Slide} from '../modal/slide-modal';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  public slides:Array<Slide>;
  public myInterval: number = 3500;
  public noWrapSlides:boolean = false;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public slidDataService: SlidDataService
  ) { }

  ngOnInit() {
    this.slidDataService.getSlideData().subscribe(res=> {
                this.slides=res;
                console.log("res",res);
            });
            // if(!this.slides){
            //     this.slides=[{url:'../../assets/images/x1.jpg',title:"First slide label",desc:'Nulla vitae elit libero, a pharetra augue mollis interdum.'}
            //                 ,{url:'../../assets/images/x2.jpg',title:"Second slide label",desc:'This is home for you,for me,for all of us'}
            //                 ,{url:'../../assets/images/x3.jpg',title:"Third slide label",desc:'Beautiful and kuxuan '}
            //                 ]
            //
            // }

  }

}
