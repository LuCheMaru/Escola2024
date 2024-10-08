import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../models/Produto';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
})
export class AlterarProdutoPage implements OnInit {

  produto: Produto = new Produto();

  constructor(private prodService: ProdutoService,
    private route: Router,
    private rotaAtiva: ActivatedRoute
  ) {
    this.produto.id = this.rotaAtiva.snapshot.params['id']
  }

  ngOnInit() {
    this.prodService.buscarPorId(this.produto.id).subscribe((dados:any) => {
      this.produto.nome = dados['nome'];
      this.produto.valor = dados['valor'];
    })
  }

  salvar() {
    this.prodService.alterar(this.produto);
    this.route.navigateByUrl('/');
  }
}
