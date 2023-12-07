import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  ngOnInit(): void {

    function foo() {
      var pass4444="password4444"
      console.log("arxan test")
      var pass3333=eval('/** @protect-web StringEncryption:exclude */');"password3333";
    };

    foo();
  }
}
