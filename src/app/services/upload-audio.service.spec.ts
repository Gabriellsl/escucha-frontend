import { TestBed } from '@angular/core/testing';

import { UploadAudioService } from './upload-audio.service';

describe('UploadAudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadAudioService = TestBed.get(UploadAudioService);
    expect(service).toBeTruthy();
  });
});
