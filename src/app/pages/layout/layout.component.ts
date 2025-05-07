import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);

  logOff(){
    this.router.navigateByUrl("/login");
  }
}
