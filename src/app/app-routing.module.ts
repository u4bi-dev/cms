import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatButtonModule, MatRadioModule, MatInputModule, MatIconModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardListComponent } from './pages/board/board-list/board-list.component';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'regist', component : RegistComponent },
  { path : 'login', component : LoginComponent },
  { path : 'board/:id', component : BoardComponent,
    children : [
      { path : '', component : BoardListComponent },
      { path : '**', redirectTo : '', pathMatch : 'full' }
    ]},
  { path : 'board', redirectTo : '', pathMatch : 'full' },
  { path : '**', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
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
    RegistComponent,
    LoginComponent,
    BoardComponent,
    BoardListComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
