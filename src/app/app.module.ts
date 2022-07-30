import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BnavComponent } from './bnav/bnav.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { SkillsComponent } from './skills/skills.component';
import { EducacionyexperienciaComponent } from './educacionyexperiencia/educacionyexperiencia.component';
import { NewExperienciaComponent } from './educacionyexperiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './educacionyexperiencia/edit-experiencia/edit-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BnavComponent,
    InicioComponent,
    SobremiComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SkillsComponent,
    EducacionyexperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
