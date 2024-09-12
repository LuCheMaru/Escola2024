import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}
  CEP: Observable<any>|undefined
  cep = "";
  cepe: any

  consultar(){
    this.CEP = this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`);
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/films/${id}`).subscribe(res => {this.cepe = res});
  }
}
