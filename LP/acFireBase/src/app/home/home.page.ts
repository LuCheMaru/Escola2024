import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public listaProdutos: Produto[] = []
  constructor(private prodService: ProdutoService, private alertController: AlertController) {}

  ngOnInit(){
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.prodService.buscarProdutos().subscribe((dadosRetorno:any) => {
      this.listaProdutos = dadosRetorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          especie: registro.payload.doc.data()['especie'],
          raca: registro.payload.doc.data()['raca'],
          idade: registro.payload.doc.data()['idade'],
          info: registro.payload.doc.data()['info']
        }
      ))
    })
  }

  async deletarProduto(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar deletar produto?',
      buttons: [
        {
          text:'Não',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text:'Sim',
          role:'confirm',
          handler: () => {
            this.prodService.deletar(id)
          }
        }
      ],
    });
    await alert.present();
    this.buscarProdutos();
  }
}
