import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cupon',
  templateUrl: './form-cupon.component.html',
  styleUrls: ['./form-cupon.component.css'],
})
export class FormCuponComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mostrarDatos:Boolean=false;

  constructor(){
  }

  enviarCupon() {
    if (this.email != '') {
      localStorage.setItem('mostrarDatos', 'true');
      this.mostrarDatos=true;
      Swal.fire({
        icon: 'success',
        title: `Cupon enviado al correo ${this.email}`,
        showConfirmButton: false,
        timer: 1500,
      });
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes de rellenar el campo de correo, ya que ahi se te enviará tu cupon de descuento',
      });
    }
  }
}
