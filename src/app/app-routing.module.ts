import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatRadioModule, MatInputModule, MatIconModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { RegistComponent } from './pages/regist/regist.component';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'regist', component : RegistComponent },
  { path : '**', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    RegistComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
