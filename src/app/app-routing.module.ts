import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuillEditorModule } from 'ngx-quill-editor';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableStubModule } from './ngx-datatable-stub.module';

import { MatButtonModule, MatRadioModule, MatInputModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardListComponent } from './pages/board/board-list/board-list.component';
import { BoardDetailComponent } from './pages/board/board-detail/board-detail.component';
import { WriteComponent } from './pages/write/write.component';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'regist', component : RegistComponent },
  { path : 'login', component : LoginComponent },
  { path : 'write', component : WriteComponent },
  { path : 'board/:id', component : BoardComponent,
    children : [
      { path : '', component : BoardListComponent },
      { path : 'detail/:id', component : BoardDetailComponent },      
      { path : '**', redirectTo : '', pathMatch : 'full' }
    ]},
  { path : 'board', redirectTo : '', pathMatch : 'full' },
  { path : '**', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    QuillEditorModule,
    // NgxDatatableModule,
    NgxDatatableStubModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    RegistComponent,
    LoginComponent,
    BoardComponent,
    BoardListComponent,
    BoardDetailComponent,
    WriteComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
