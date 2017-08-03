import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { Slide } from './modal/slide-modal';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

@Injectable()
export class SlidDataService {
  public slideUrl = '/get/slide';
  constructor(public http:Http){}

  public getSlideData(){
    console.log("开始执行这个服务获取数据")
    return this.http
            .get(this.slideUrl)
            .map((response:Response)=>{
              let user = response.json();
              console.log("这是取到的轮播图的数据",user);
              return user;
            })
            // .subscribe(
            //     data => {
            //         console.log(" success>"+data);
            //         return data;
            //     },
            //     error => {
            //         console.error(error);
            //     }
            // );
  }
}
