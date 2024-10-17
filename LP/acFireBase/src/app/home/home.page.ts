import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';
import { AlertController } from '@ionic/angular';
import { Produto1 } from '../models/Produto1';
import { Produto1Service } from '../services/produto1.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public listaProdutos: Produto[] = []
  public listaProdutos1: Produto1[] = []
  constructor(private prodService: ProdutoService, private prodService1: Produto1Service, private alertController: AlertController) {}

  ngOnInit(){
    this.buscarProdutos();
    this.buscarProdutos1();
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
          info: registro.payload.doc.data()['info'],
        }
      ))
    })
  }

  buscarProdutos1() {
    this.prodService1.buscarProdutos1().subscribe((dadosRetorno1:any) => {
      this.listaProdutos1 = dadosRetorno1.map((registro1:any) => (
        {
          id1: registro1.payload.doc.id1,
          nome1: registro1.payload.doc.data()['nome1'],
          tel: registro1.payload.doc.data()['tel'],
          exp: registro1.payload.doc.data()['exp'],
          esp: registro1.payload.doc.data()['esp']
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

  async deletarProduto1(id1: string) {
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
            this.prodService1.deletar1(id1)
          }
        }
      ],
    });
    await alert.present();
    this.buscarProdutos1();
  }
}
