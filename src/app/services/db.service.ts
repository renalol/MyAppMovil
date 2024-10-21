import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializa el almacenamiento
  async init() {
    await this.storage.create();
  }

  // Guardar un usuario con su contraseña
  async saveUserData(usuario: string, contrasena: string) {
    const users = (await this.storage.get('usuarios')) || {};
    users[usuario] = contrasena;  // Asigna la contraseña al usuario
    await this.storage.set('usuarios', users);
  }

  // Obtener la contraseña del usuario ingresado
  async getUserPassword(usuario: string): Promise<string | null> {
    const users = await this.storage.get('usuarios');
    return users ? users[usuario] || null : null;
  }

  // Validar el inicio de sesión
  async validateLogin(usuario: string, contrasena: string): Promise<boolean> {
    const storedPassword = await this.getUserPassword(usuario);
    return storedPassword === contrasena;
  }
  
  // Limpiar datos almacenados
  async clearUserData() {
    await this.storage.remove('usuario');
    await this.storage.remove('contrasena');
  }
}
