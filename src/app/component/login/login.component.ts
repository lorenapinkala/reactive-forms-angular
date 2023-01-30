import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin:FormGroup;

  constructor(){
    let reguexCorreo:string= "^[a-z]+@[a-z]+\\.[a-z]{2,3}$";
    let controles:any={
      correo: new FormControl("" , [Validators.email, Validators.required, Validators.pattern(reguexCorreo)]),
      contrasena: new FormControl("" , [Validators.minLength(5), Validators.required]),
      recordarCredenciales: new FormControl(true)
    }
    this.formularioLogin= new FormGroup(controles)
  }

  login(){
    console.log(this.formularioLogin);

    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      console.log('hubo un error en el formato tumbir');
    }
  }
}
