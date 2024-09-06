import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  nome: string = '';
  email: string = '';
  nota: string = '';
  secretKey: string = '';
  encryptedMessage: string = '';
  encryptedMessage1: string = '';
  encryptedMessage2: string = '';

  decryptedMessage: string = '';
  decryptedMessage1: string = '';
  decryptedMessage2: string = '';

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
  decryptMessage() {
    if (this.nome && this.secretKey) {
      const bytes = CryptoJS.AES.decrypt(this.nome, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage = decrypted;
    }

    if (this.email && this.secretKey) {
      const bytes1 = CryptoJS.AES.decrypt(this.email, this.secretKey);
      const decrypted1 = bytes1.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage1 = decrypted1;
    }

    if (this.nota && this.secretKey) {
      const bytes2 = CryptoJS.AES.decrypt(this.nota, this.secretKey);
      const decrypted2 = bytes2.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage2 = decrypted2;
    }
  }
}
