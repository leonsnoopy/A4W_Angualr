import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoLab(str: String) {
    if (str == 'hide_image') {
      window.open("https://arxan.gss.com.tw/labs/hide_image/index.html");
    } else if (str == 'checksum_x') {
      window.open("https://arxan.gss.com.tw/labs/checksum_x/index.html");
    } else if (str == 'checksum_v') {
      window.open("https://arxan.gss.com.tw/labs/checksum_v/index.html");
    }
  }
}
