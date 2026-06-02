import { TestBed } from '@angular/core/testing';

import { IpCalculator } from './ip-calculator';

describe('IpCalculator', () => {
  let service: IpCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
