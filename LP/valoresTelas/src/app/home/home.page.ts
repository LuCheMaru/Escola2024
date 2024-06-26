import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  diaria = 0;
  dias = 0;
  pagamento = 0;

  constructor(public router: Router) {}

  pinFormatter(value: number) {
    return `${value} dias`;
  }
  pagar(){
    this.pagamento = this.diaria * this.dias;
    this.router.navigateByUrl
    (`/reserva/${this.diaria}/${this.dias}/${this.pagamento}`);
  }
}
