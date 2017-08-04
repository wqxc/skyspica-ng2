import { Component, OnInit } from '@angular/core';
import {Zodiac} from './zodiac-modal/zodiac'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  public zodiacData:Array<Zodiac>;

  constructor() { }

  ngOnInit() {
    this.zodiacData=[
      {'headring':'金牛座','url':'../../assets/images/jinniu.jpg','desc':'金牛座（Taurus），位于白羊座之东，是黄道十二宫的第二宫。'},
      {'headring':'双子座','url':'../../assets/images/shuangzi.jpg','desc':'双子座（Gemini），是黄道十二宫里的第三宫，代表了多变、沟通。'},
      {'headring':'巨蟹座','url':'../../assets/images/juxie.jpg','desc':'巨蟹座(Cancer)是夏天开始的第一个星座，也是十二星座里最暗的一个星座。巨蟹座位于双子座之东，狮子座之西。'},
      {'headring':'狮子座','url':'../../assets/images/shizi.jpg','desc':'狮子座（Leo），黄道十二宫之第五宫，位于巨蟹座之东，处女座之西。'},
      {'headring':'处女座','url':'../../assets/images/chunv.jpg','desc':'室女座（Virgo），是最大的黄道带星座'}
    ];
  }

}
