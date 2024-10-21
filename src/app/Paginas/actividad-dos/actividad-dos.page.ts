import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actividad-dos',
  templateUrl: './actividad-dos.page.html',
  styleUrls: ['./actividad-dos.page.scss'],
})
export class ActividadDosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
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
  navigateToPerfil() {
    // Agrega aquí la lógica para cerrar sesión (e.g., limpiar datos del u
    // Redirigir al login (puedes agregar la lógica de limpiar el almacenamiento si es necesario)
    this.router.navigate(['/perfil']);
  }
  navigateToInicio() {
    // Agrega aquí la lógica para cerrar sesión (e.g., limpiar datos del u
    // Redirigir al login (puedes agregar la lógica de limpiar el almacenamiento si es necesario)
    this.router.navigate(['/inicio']);
  }

}
