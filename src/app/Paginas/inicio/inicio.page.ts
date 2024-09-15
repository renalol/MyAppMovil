import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  usuario: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const usuario = params['usuario'];
      if (usuario) {
        this.usuario = usuario;
      } else {
        console.error('El parámetro "usuario" no se encontró en la URL.');
        // You can redirect to another page or show an error message to the user
      }
    });
  }

  // New function to handle logout button click
  logout() {
    // Add logic to handle logout functionality here (e.g., clear user data, redirect to login)
    console.log('Logout button clicked!');
    // Replace with your actual logout logic
    this.router.navigate(['/login']);
  }
}