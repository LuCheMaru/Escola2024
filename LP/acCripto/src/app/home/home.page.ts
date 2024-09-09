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
    this.router.navigateByUrl
    (`/descriptografar/${this.encryptedMessage}/${this.encryptedMessage1}/${this.encryptedMessage2}/${this.secretKey}`)
  }
}
