import { TestBed } from '@angular/core/testing';

import { PluginConfigurationService } from './plugin-configuration.service';

describe('PluginConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PluginConfigurationService = TestBed.get(PluginConfigurationService);
    expect(service).toBeTruthy();
  });
});
