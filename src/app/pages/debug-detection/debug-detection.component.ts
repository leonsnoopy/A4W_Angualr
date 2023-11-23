import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-debug-detection',
  templateUrl: './debug-detection.component.html',
  styleUrls: ['./debug-detection.component.css']
})
export class DebugDetectionComponent implements OnInit {

  userAgent:string="?";

  constructor(private sanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
    this.userAgent=navigator.userAgent
  }

}
