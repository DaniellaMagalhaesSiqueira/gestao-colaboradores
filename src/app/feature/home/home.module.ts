import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ColaboratorComponent } from './components/colaborator/colaborator.component';
import { ColaboratorsListComponent } from './components/colaborator/colaborators-list/colaborators-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ColaboratorComponent,
    ColaboratorsListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
