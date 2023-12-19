import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {
  // count: number = 0;
  // html1: any = "";
  // html2: any = "";
  // constructor(private sanitizer: DomSanitizer) {
  //   this.html1 = this.sanitizer.bypassSecurityTrustHtml(
  //     '<iframe width="100%" height="800" src="assets/html/checksum1.html"></iframe>',
  //   );
  // }
  ngOnInit(): void {

  }

  gotoHtml() {
    window.open("./assets/html/checksum/checksum.html", "_blank")
  }

}
