import { Component } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaProdutos: Produto[] = []
  constructor(private prodService: ProdutoService, private alertController: AlertController) {}

  ngOnInit(){
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.prodService.buscarProdutos().subscribe(dadosRetorno => {
      this.listaProdutos = dadosRetorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          valor: registro.payload.doc.data()['valor']
        }
      ))
    })
  }

  async deletarProduto(id: string) {

  }
}
