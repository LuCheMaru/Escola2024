import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto1 } from 'src/app/models/Produto1';
import { Produto1Service } from 'src/app/services/produto1.service';

@Component({
  selector: 'app-alterar-produto1',
  templateUrl: './alterar-produto1.page.html',
  styleUrls: ['./alterar-produto1.page.scss'],
})
export class AlterarProduto1Page implements OnInit {

  produto1: Produto1 = new Produto1();

  constructor(private prodService1: Produto1Service,
    private route: Router,
    private rotaAtiva: ActivatedRoute
  ) {
    this.produto1.id1 = this.rotaAtiva.snapshot.params['id1']
  }

  ngOnInit() {
    this.prodService1.buscarPorId1(this.produto1.id1).subscribe((dados1:any) => {
      this.produto1.nome1 = dados1['nome1'];
      this.produto1.tel = dados1['tel'];
      this.produto1.exp = dados1['exp'];
      this.produto1.esp = dados1['esp'];
    })
  }

  salvar1() {
    this.prodService1.alterar1(this.produto1);
    this.route.navigateByUrl('/');
  }
}
