// auth-service.service.specs.ts
import { TestBed } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service'; // Asegúrate de que la ruta sea correcta

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService] // Agrega AuthServiceService a los proveedores
    });
    service = TestBed.inject(AuthServiceService);
  });

  // ... tus pruebas
});