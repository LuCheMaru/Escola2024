import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarProduto1Page } from './alterar-produto1.page';

describe('AlterarProduto1Page', () => {
  let component: AlterarProduto1Page;
  let fixture: ComponentFixture<AlterarProduto1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarProduto1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
