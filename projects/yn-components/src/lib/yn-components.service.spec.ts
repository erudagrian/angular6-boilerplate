import { TestBed, inject } from '@angular/core/testing';

import { YnComponentsService } from './yn-components.service';

describe('YnComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YnComponentsService]
    });
  });

  it('should be created', inject([YnComponentsService], (service: YnComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
