import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto1 } from 'src/app/models/Produto1';
import { Produto1Service } from 'src/app/services/produto1.service';

@Component({
  selector: 'app-cadastro-produto1',
  templateUrl: './cadastro-produto1.page.html',
  styleUrls: ['./cadastro-produto1.page.scss'],
})
export class CadastroProduto1Page{

  produto1: Produto1 = new Produto1();

  constructor(
    private prodService1: Produto1Service,
    private route: Router
  ) { }

  salvar1() {
    this.prodService1.salvar1(this.produto1);
    this.route.navigateByUrl('/');
  }

}
