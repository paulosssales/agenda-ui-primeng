import { TestBed } from '@angular/core/testing';

import { UsuarioFormService } from './usuario-form.service';

describe('UsuarioFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioFormService = TestBed.get(UsuarioFormService);
    expect(service).toBeTruthy();
  });
});
