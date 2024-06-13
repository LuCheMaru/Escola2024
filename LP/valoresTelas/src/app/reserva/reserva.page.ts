import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  diaria: any;
  dias: any;
  pagamento: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.diaria = this.activatedRoute.snapshot.paramMap.get('diaria');
    this.dias = this.activatedRoute.snapshot.paramMap.get('dias');
    this.pagamento = this.activatedRoute.snapshot.paramMap.get('pagamento');
  }

  confirmarReserva(){
    this.router.navigateByUrl(`/finalizar/${this.pagamento}`)
  }

}
