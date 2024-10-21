import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service'; // Replace with actual import path
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro', // Corrected selector 'app-registro'
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  nuevoUsuario: string = '';
  nuevaContrasena: string = '';

  constructor(
    private dbService: DbService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async registrarUsuario() { // Corrected method name 'registrarUsuario'
    if (!this.nuevoUsuario || !this.nuevaContrasena) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa un nuevo usuario y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Guarda los nuevos datos del usuario
      await this.dbService.saveUserData(this.nuevoUsuario, this.nuevaContrasena); // Assuming this stores username and password

      const alert = await this.alertController.create({
        header: 'Registro exitoso', // More user-friendly message
        message: 'Tu usuario y contraseña se han creado.', // Clarify action
        buttons: ['OK']
      });
      await alert.present();

      // Redirige al login
      this.router.navigate(['/login']);
    }
  }
}