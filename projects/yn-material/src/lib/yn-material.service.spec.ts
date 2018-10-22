import { TestBed } from '@angular/core/testing';

import { YnMaterialService } from './yn-material.service';

describe('YnMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YnMaterialService = TestBed.get(YnMaterialService);
    expect(service).toBeTruthy();
  });
});
