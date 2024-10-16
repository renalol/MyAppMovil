import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';


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
    const storedUser = localStorage.getItem('usuario');
    const storedPassword = localStorage.getItem('contrasena');

    addIcons({ eye, lockClosed });
    
  }

  async navigateToReset() {
    this.router.navigate(['/reset']);
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