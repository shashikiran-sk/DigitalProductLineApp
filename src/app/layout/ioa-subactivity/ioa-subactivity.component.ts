import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';

@Component({
  selector: 'app-ioa-subactivity',
  templateUrl: './ioa-subactivity.component.html',
  styleUrls: ['./ioa-subactivity.component.scss'],
  animations:[slideToTop()]
})
export class IoaSubactivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
