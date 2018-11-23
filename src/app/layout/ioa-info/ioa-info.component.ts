import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';

@Component({
  selector: 'app-ioa-info',
  templateUrl: './ioa-info.component.html',
  styleUrls: ['./ioa-info.component.scss'],
  animations:[slideToRight()]
})
export class IoaInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
