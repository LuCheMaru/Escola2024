import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) { }

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFKwcU29PUOFtuJvyy8IiVvavpYyksOBt_0g&s',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSffEaChq5DkKIbZj4kp041lS9tHE9ECCKw&s',
      generos: ['Ação', 'Sci-Fi', 'Aventura'],
      pagina: '/avengers',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message: 'Deseja realmente favoritar esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        }, {
          text: 'Sim',
          handler: () => {
            filme.favorito = true
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: "Filme adicionado aos favoritos",
      duration: 2000,
      color: 'success'
    });
    toast.present
  }
}
