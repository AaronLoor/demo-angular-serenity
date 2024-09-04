import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from "primeng/dialog";
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http'
import { ToastModule } from 'primeng/toast';
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    CardModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    MessageModule,
    BrowserAnimationsModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
