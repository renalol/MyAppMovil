import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'; // Asegúrate de importar AnimationController

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
  usuario: string = '';
  contrasena: string = '';
  animation: any;

  alertButtons = ['Action'];

  constructor(private navCtrl: NavController, private animationController: AnimationController) {}

  ngOnInit() {
    // Ejecutar la animación cuando la vista esté cargada
    this.animacionTexto();
  }

  resetCredentials() {
    if (this.usuario && this.contrasena) {
      // Guardar las nuevas credenciales en localStorage
      localStorage.setItem('usuario', this.usuario);
      localStorage.setItem('contrasena', this.contrasena);
      alert('Usuario y contraseña actualizados con éxito.');

      // Redirigir a la página de inicio
      this.navCtrl.navigateForward('/inicio');
    } else {
      alert('Por favor, ingresa un nuevo usuario y contraseña.');
    }
  }

  animacionTexto() {
    const texto = document.getElementById('tPrincipal') as HTMLElement;

    if (texto) {
      console.log('Texto encontrado, aplicando animación.');
      this.animation = this.animationController.create()
      .addElement(texto)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(-110px)', 'translateX(400px)');

      this.animation.play();
    } else {
      console.error('No se encontró el elemento con el id tPrincipal');
    }
  }
}
