import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario: string = '';

  constructor(private route: ActivatedRoute, private router: Router, navCtrl: NavController) {}

  ngOnInit() {
    // Intentar obtener el usuario de los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      const usuario = params['usuario'];
      if (usuario) {
        this.usuario = usuario;
        // Almacenar el usuario en localStorage para futuras visitas
        localStorage.setItem('usuario', JSON.stringify(usuario));
      } else {
        // Si no hay parámetro en la URL, intentar cargar desde localStorage
        this.loadUsuarioFromStorage();
      }
    });
  }

  ionViewWillEnter() {
    // Asegurarse de recargar el usuario desde el localStorage cada vez que se entre a la página
    this.loadUsuarioFromStorage();
  }

  loadUsuarioFromStorage() {
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      // Parsear el valor almacenado como JSON (si se utilizó JSON.stringify)
      this.usuario = JSON.parse(storedUsuario);
    } else {
      console.error('No se encontró el usuario en el localStorage.');
      this.usuario = 'Invitado'; // Valor por defecto si no hay usuario
    }
  }

  logout() {
    // Eliminar el usuario del localStorage
    localStorage.removeItem('usuario');
    this.usuario = '';
    this.router.navigate(['/login']);
  }

  navigateToPage() {
    this.router.navigate(['/act-1']);
  }

  navigateToPage2() {
    this.router.navigate(['/actividad-dos']);
  }

  navigateToCalendar() {
    this.router.navigate(['/calendario']);
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }
}