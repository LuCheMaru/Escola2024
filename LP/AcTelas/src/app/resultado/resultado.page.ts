import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  constructor(public ar:ActivatedRoute,
              public router:Router)
              { this.milho = "",
              this.cenoura = ""}

    medTemp: any|undefined;
    milho = "";
    cenoura = "";

  ngOnInit() {
    this.medTemp = this.ar.snapshot.paramMap.get('medTemp');
    if(this.medTemp >= 24 && this.medTemp <= 30){
      this.milho = "milho - 24ºC-30ºC"
    }
    if(this.medTemp >= 18 && this.medTemp <= 25){
      this.cenoura = "cenoura - 18ºC-25ºC"
    }
  }

}
