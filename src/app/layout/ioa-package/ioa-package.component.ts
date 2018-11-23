import { Component, OnInit } from '@angular/core';
import { slideToBottom } from '../../router.animations';

@Component({
  selector: 'app-ioa-package',
  templateUrl: './ioa-package.component.html',
  styleUrls: ['./ioa-package.component.scss'],
  animations:[slideToBottom()]
})
export class IoaPackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
