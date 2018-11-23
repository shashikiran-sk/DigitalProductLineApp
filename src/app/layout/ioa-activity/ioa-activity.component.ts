import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../router.animations';

@Component({
  selector: 'app-ioa-activity',
  templateUrl: './ioa-activity.component.html',
  styleUrls: ['./ioa-activity.component.scss'],
  animations:[slideToLeft()]
})
export class IoaActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
