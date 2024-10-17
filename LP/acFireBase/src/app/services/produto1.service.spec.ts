import { TestBed } from '@angular/core/testing';

import { Produto1Service } from './produto1.service';

describe('Produto1Service', () => {
  let service: Produto1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Produto1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
