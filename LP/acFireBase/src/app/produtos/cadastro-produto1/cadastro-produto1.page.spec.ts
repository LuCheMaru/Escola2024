import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProduto1Page } from './cadastro-produto1.page';

describe('CadastroProduto1Page', () => {
  let component: CadastroProduto1Page;
  let fixture: ComponentFixture<CadastroProduto1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProduto1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
