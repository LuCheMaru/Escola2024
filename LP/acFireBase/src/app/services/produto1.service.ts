import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Produto1 } from '../models/Produto1';

@Injectable({
  providedIn: 'root'
})
export class Produto1Service {

  constructor(private afs: AngularFirestore) { }

  salvar1(produto1: Produto1) {
    return this.afs.collection('produtos1').add({ ...produto1});
  }

  buscarProdutos1() {
    return this.afs.collection('produtos1').snapshotChanges();
  }

  buscarPorId1(id1: string) {
    return this.afs.collection('produtos1').doc(id1).valueChanges();
  }

  alterar1(produto1: Produto1) {
    return this.afs.collection('produtos1').doc(produto1.id1).valueChanges();
  }

  deletar1(id1: string) {
    return this.afs.doc('produtos/' + id1).delete();
  }
}
