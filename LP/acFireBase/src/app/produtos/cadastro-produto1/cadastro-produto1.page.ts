import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto1',
  templateUrl: './cadastro-produto1.page.html',
  styleUrls: ['./cadastro-produto1.page.scss'],
})
export class CadastroProduto1Page{

  produto: Produto = new Produto();

  constructor(
    private prodService: ProdutoService,
    private route: Router
  ) { }

  salvar() {
    this.prodService.salvar(this.produto);
    this.route.navigateByUrl('/');
  }

}
