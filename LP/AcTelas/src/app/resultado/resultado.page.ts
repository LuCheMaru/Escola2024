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
    melancia = "";
    cebola = "";
    vagem = "";
    arroz = "";
    gengibre = "";
    lixia = "";
    beterraba = "";
    alcachofra = "";

  ngOnInit() {
    this.medTemp = this.ar.snapshot.paramMap.get('medTemp');
    if(this.medTemp >= 24 && this.medTemp <= 30){
      this.milho = "milho - 24ºC-30ºC"
    }
    if(this.medTemp >= 18 && this.medTemp <= 25){
      this.cenoura = "cenoura - 18ºC-25ºC"
    }
    if(this.medTemp >= 20 && this.medTemp <= 34){
      this.melancia = "melancia - 20ºC-34ºC"
    }
    if(this.medTemp >= 1 && this.medTemp <= 24){
      this.cebola = "cebola - 1ºC-24ºC"
    }
    if(this.medTemp >= 21 && this.medTemp <= 25){
      this.vagem = "vagem - 21ºC-25ºC"
    }
    if(this.medTemp >= 20 && this.medTemp <= 35){
      this.arroz = "arroz - 20ºC-35ºC"
    }
    if(this.medTemp >= 17 && this.medTemp <= 35){
      this.gengibre = "gengibre - 17ºC-35ºC"
    }
    if(this.medTemp >= 20 && this.medTemp <= 35){
      this.lixia = "lixia - 20ºC-35ºC"
    }
    if(this.medTemp >= 10 && this.medTemp <= 20){
      this.beterraba = "beterraba - 10ºC-20ºC"
    }
    if(this.medTemp >= 12 && this.medTemp <= 22){
      this.alcachofra = "alcachofra - 12ºC-22ºC"
    }
  }

}
