import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router, private platform: Platform, ) { 
    this.init();
  }

  // Inicializa el storage
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar usuario y contraseña
  public async setUserData(usuario: string, contrasena: string) {
    await this._storage?.set('usuario', usuario);
    await this._storage?.set('contrasena', contrasena);
  }

  // Obtener usuario
  public async getUsuario(): Promise<string> {
    return await this._storage?.get('usuario');
  }

  // Obtener contraseña
  public async getContrasena(): Promise<string> {
    return await this._storage?.get('contrasena');
  }
}
