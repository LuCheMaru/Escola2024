import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) { }

  nome: string = '';
  email: string = '';
  nota: string = '';

  secretKey: string = '';
  encryptedMessage: string = '';
  encryptedMessage1: string = '';
  encryptedMessage2: string = '';

  encryptMessage() {
    if (this.nome && this.email && this.nota && this.secretKey) {
      const encrypted = CryptoJS.AES.encrypt(this.nome, this.secretKey).toString();
      this.encryptedMessage = encrypted;

      const encrypted1 = CryptoJS.AES.encrypt(this.email, this.secretKey).toString();
      this.encryptedMessage1 = encrypted1;

      const encrypted2 = CryptoJS.AES.encrypt(this.nota, this.secretKey).toString();
      this.encryptedMessage2 = encrypted2;
    }
  }

  proximaPag() {
    const nomeEncriptado = encodeURIComponent(this.encryptedMessage);
    const emailEncriptado = encodeURIComponent(this.encryptedMessage1);
    const notaEncriptada = encodeURIComponent(this.encryptedMessage2);

    this.router.navigateByUrl
    (`descriptografar/${this.secretKey}/${nomeEncriptado}/${emailEncriptado}/${notaEncriptada}`)
  }
}
