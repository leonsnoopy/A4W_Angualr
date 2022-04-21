import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
