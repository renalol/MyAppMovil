import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
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

  // Función para cargar el usuario desde el localStorage
  loadUsuarioFromStorage() {
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      this.usuario = storedUsuario;
    } else {
      console.error('No se encontró el usuario en el localStorage.');
      this.usuario = 'Invitado'; // Valor por defecto si no hay usuario
    }
  }

  // Función para manejar el cierre de sesión
  logout() {
    // Agrega aquí la lógica para cerrar sesión (e.g., limpiar datos del usuario y redirigir al login)
    console.log('Logout button clicked!');
    // Redirigir al login (puedes agregar la lógica de limpiar el almacenamiento si es necesario)
    this.router.navigate(['/login']);
  }
  navigateToPage() {
    // Agrega aquí la lógica para cerrar sesión (e.g., limpiar datos del u
    // Redirigir al login (puedes agregar la lógica de limpiar el almacenamiento si es necesario)
    this.router.navigate(['/act-1']);
  }
}
