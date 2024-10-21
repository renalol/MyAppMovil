import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'; // Asegúrate de importar AnimationController
import { DbService } from '../../services/db.service'; 
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
  usuario: string = '';
  contrasena: string = '';
  nuevaContrasena: string = '';
  animation: any;
  alertButtons = ['Action'];

  constructor(private navCtrl: NavController, private animationController: AnimationController, private dbService: DbService ) {}

  async guardarDatos() {
    await this.dbService.setUserData(this.usuario, this.contrasena);
    console.log('Datos guardados correctamente');
  }

  ngOnInit() {
    // Ejecutar la animación cuando la vista esté cargada
    this.animacionTexto();
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

