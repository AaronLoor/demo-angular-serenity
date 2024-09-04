import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import { LoginService } from 'src/app/services/auth/login.service';
import { UserRequest } from 'src/app/services/auth/userRequest';
import { Router } from '@angular/router';
import { configuration } from '../../application.config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  public clienteForm!: FormGroup;


  userLoginOn: boolean = false;
  userData?: UserRequest;
  genero!: string[];
  estadoCivil!: string[];

    constructor(public formBuilder: FormBuilder,
      private router:Router,
      private loginService:LoginService,
      private messageService:MessageService
     ){}


  ngOnInit(): void {
    this.loginService.currenUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn = userLoginOn;
      }
    });
    this.loginService.currentUserDAta.subscribe({
      next:(userData)=>{
        this.userData=userData;
      }
    });
    this.genero = configuration.genero;
    this.estadoCivil = configuration.estadoCivil;
    this.createForm();
  }
  ngOnDestroy(): void {
    this.loginService.currentUserDAta.unsubscribe();
    this.loginService.currenUserLoginOn.unsubscribe();
  }

  validar(){
    if(this.clienteForm.valid){
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Cliente ingresado correctamente', life: 10000});
      this.clienteForm.reset();
    }else{
      this.messageService.add({severity: 'warn', summary: 'Warn', detail: 'Los datos ingresados no son válidos. Por favor, verifique la información y vuelva a intentarlo.', life : 10000});
    }
  }

 createForm(){
  this.clienteForm = this.formBuilder.group({
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    cedula:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    telefono:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],
    direccion:['',Validators.required],
    fecha:['',Validators.required],
    genero:['',Validators.required],
    estadoCivil:['',Validators.required]
  });
 }

}
