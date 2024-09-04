import { UserRequest } from 'src/app/services/auth/userRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest'
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currenUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserDAta: BehaviorSubject<UserRequest> = new BehaviorSubject<UserRequest>({id:0, email:''});


  constructor(private http:HttpClient) { }

  login(credetials:LoginRequest):Observable<UserRequest>{
    return this.http.get<UserRequest>('../../../assets/data.json').pipe(
    tap((userData: UserRequest) =>{
      this.currentUserDAta.next(userData);
      this.currenUserLoginOn.next(true);
    }),
    catchError(this.handleError));
  }
  // Método para cerrar sesión
  logout(): void {
    // Limpiar los datos del usuario
    this.currentUserDAta.next(<UserRequest>({id:0, email:''}));
    this.currenUserLoginOn.next(false);

  }



  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error', error.status,error.error);
    }
    else{
      console.error('Backend retorno el codigo de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo fallo. Por favor inetente nuevamente'));
  }

  get userData():Observable<UserRequest>{
    return this.currentUserDAta.asObservable();
  }
  get userLoginOn():Observable<boolean>{
    return this.currenUserLoginOn.asObservable();
  }

}
