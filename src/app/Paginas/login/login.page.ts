import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  usuario = '';
  contrasena = '';
  animation: any; // Declarar la propiedad animation


  constructor(private router: Router, private alertController: AlertController, private animationController: AnimationController) {}

  async iniciarSesion() {
    if (!this.usuario || !this.contrasena) {
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'Por favor, ingresa tu usuario y contraseña.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      this.router.navigate(['/inicio'], { queryParams: { usuario: this.usuario } }); 
    }
  }

  async navigateToReset() {
    this.router.navigate(['/reset-password']);
  }
  ngAfterViewInit() {
    this.animacionTexto();
  }

  animacionTexto() {
    const texto = document.getElementById('tPrincipal') as HTMLElement;

    if (texto) {
      this.animation = this.animationController.create()
        .addElement(texto)
        .duration(5000)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(-20px)', 'translateX(400px)');

      this.animation.play();
    }
  }
}