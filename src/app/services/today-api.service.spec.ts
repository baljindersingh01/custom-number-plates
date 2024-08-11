import { TestBed } from '@angular/core/testing';

import { TodayApiService } from './today-api.service';

describe('TodayApiService', () => {
  let service: TodayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
