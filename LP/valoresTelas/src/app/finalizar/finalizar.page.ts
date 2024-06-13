import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  constructor( public ar: ActivatedRoute) { }

  pagamento: any;
  ngOnInit() {
    this.pagamento = this.ar.snapshot.paramMap.get('pagamento');
  }

}
