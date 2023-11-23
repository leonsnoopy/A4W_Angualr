import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  gotoGame(num: Number) {
    if (num == 1) {
      window.open("https://arxan.gss.com.tw/game/game1.html");
    }else if (num == 2) {
      window.open("https://arxan.gss.com.tw/game/game2.html");
    }else if (num == 3) {
      window.open("https://arxan.gss.com.tw/game/game3.html");
    }else if (num == 4) {
      window.open("https://arxan.gss.com.tw/game/game4.html");
    }else if (num == 5) {
      window.open("https://arxan.gss.com.tw/game/game5.html");
    }
    
  }

}
