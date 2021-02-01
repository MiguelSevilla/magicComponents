import { TestBed } from '@angular/core/testing';

import { FirstComponentsService } from './first-components.service';

describe('FirstComponentsService', () => {
  let service: FirstComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
