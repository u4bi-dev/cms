import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuillEditorModule } from 'ngx-quill-editor';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableStubModule } from './ngx-datatable-stub.module';

import { MatButtonModule, MatRadioModule, MatInputModule, MatIconModule, MatToolbarModule, MatProgressBarModule, MatTabsModule, MatSidenavModule, MatExpansionModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { MainTapBoardComponent } from './pages/main/main-tap-board/main-tap-board.component';

import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardListComponent } from './pages/board/board-list/board-list.component';
import { BoardDetailComponent } from './pages/board/board-detail/board-detail.component';
import { BoardWriteComponent } from './pages/board/board-write/board-write.component';
import { AdComponent } from './pages/_shared/ad/ad.component';
import { DetailBoardListComponent } from './pages/board/board-detail/detail-board-list/detail-board-list.component';
import { DetailBoardCommentComponent } from './pages/board/board-detail/detail-board-comment/detail-board-comment.component';
import { DetailBoardContentComponent } from './pages/board/board-detail/detail-board-content/detail-board-content.component';
import { DetailCommentEntryComponent } from './pages/board/board-detail/detail-board-comment/detail-comment-entry/detail-comment-entry.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminMainComponent } from './pages/admin/admin-main/admin-main.component';
import { AdminMemberComponent } from './pages/admin/admin-member/admin-member.component';
import { AdminSetupBoardComponent } from './pages/admin/admin-setup-board/admin-setup-board.component';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'regist', component : RegistComponent },
  { path : 'login', component : LoginComponent },
  { path : 'board/:id', component : BoardComponent,
    children : [
      { path : '', component : BoardListComponent },
      { path : 'write', component : BoardWriteComponent },
      { path : 'detail/:id', component : BoardDetailComponent },
      { path : '**', redirectTo : '', pathMatch : 'full' }
    ]},
  { path : 'board', redirectTo : '', pathMatch : 'full' },
  { path : 'admin', component : AdminComponent,
    children : [
      { path : '', component : AdminMainComponent },
      { path : 'member', component : AdminMemberComponent },
      { path : 'setup-board', component : AdminSetupBoardComponent },
      { path : '**', redirectTo : '', pathMatch : 'full' }
    ]},
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
    MatProgressBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    MainTapBoardComponent,
    RegistComponent,
    LoginComponent,
    BoardComponent,
    BoardListComponent,
    BoardDetailComponent,
    BoardWriteComponent,
    AdComponent,
    DetailBoardListComponent,
    DetailBoardCommentComponent,
    DetailBoardContentComponent,
    DetailCommentEntryComponent,
    AdminComponent,
    AdminMainComponent,
    AdminMemberComponent,
    AdminSetupBoardComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
