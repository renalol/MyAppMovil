import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-act-1',
  templateUrl: './act-1.page.html',
  styleUrls: ['./act-1.page.scss'],
})
export class Act1Page implements OnInit {

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
