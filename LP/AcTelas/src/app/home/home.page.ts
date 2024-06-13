import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}

  temp1 = 0;
  temp2 = 0;
  temp3 = 0;
  temp4 = 0;
  medTemp = 0;

  pinFormatter(value: number) {
    return `${value} graus`;
  }

  mediaTemp(){
    this.medTemp = (this.temp1 + this.temp2 + this.temp3 + this.temp4)/4
    this.router.navigateByUrl
    (`/resultado/${this.medTemp}`);
  }
}
