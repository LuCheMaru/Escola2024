import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptografarPage } from './descriptografar.page';

describe('DescriptografarPage', () => {
  let component: DescriptografarPage;
  let fixture: ComponentFixture<DescriptografarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptografarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
