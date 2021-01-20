import { TestBed } from '@angular/core/testing';

import { RetkikuntaDtoService } from './retkikunta-dto.service';

describe('RekikuntaDtoService', () => {
  let service: RetkikuntaDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetkikuntaDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
