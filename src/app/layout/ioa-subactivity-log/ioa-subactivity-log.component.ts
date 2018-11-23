import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';

@Component({
  selector: 'app-ioa-subactivity-log',
  templateUrl: './ioa-subactivity-log.component.html',
  styleUrls: ['./ioa-subactivity-log.component.scss'],
  animations:[slideToRight()]
})
export class IoaSubactivityLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
