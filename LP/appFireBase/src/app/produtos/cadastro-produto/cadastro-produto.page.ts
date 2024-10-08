import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage {

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
