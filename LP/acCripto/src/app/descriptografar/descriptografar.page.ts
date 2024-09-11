import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-descriptografar',
  templateUrl: './descriptografar.page.html',
  styleUrls: ['./descriptografar.page.scss'],
})
export class DescriptografarPage implements OnInit {

  secretKey: any;
  encryptedMessage: any;
  encryptedMessage1: any;
  encryptedMessage2: any;

  decryptedMessage: string = '';
  decryptedMessage1: string = '';
  decryptedMessage2: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.encryptedMessage = this.activatedRoute.snapshot.paramMap.get('encryptedMessage')
    this.encryptedMessage1 = this.activatedRoute.snapshot.paramMap.get('encryptedMessage1')
    this.encryptedMessage2 = this.activatedRoute.snapshot.paramMap.get('encryptedMessage2')
  }

  decryptMessage() {
    if (this.encryptedMessage && this.encryptedMessage1 && this.encryptedMessage2 && this.secretKey) {
      const bytes = CryptoJS.AES.decrypt(this.encryptedMessage, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage = decrypted;

      const bytes1 = CryptoJS.AES.decrypt(this.encryptedMessage1, this.secretKey);
      const decrypted1 = bytes1.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage1 = decrypted1;

      const bytes2 = CryptoJS.AES.decrypt(this.encryptedMessage2, this.secretKey);
      const decrypted2 = bytes2.toString(CryptoJS.enc.Utf8);
      this.decryptedMessage2 = decrypted2;
    }
  }
}
