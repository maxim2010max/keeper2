import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoyoutComponent } from './loyot/loyout/loyout.component';
import { PasswordComponent } from './password-page/password/password.component';
import { InfoComponent } from './info/info.component';
import path from 'path';
import { TodoComponent } from './todo/todo.component';
import { DiaryComponent } from './diary/diary.component';

export const routes: Routes = [
  {
    path: '',
    component: LoyoutComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'todo', component: TodoComponent },
      
      { path: 'diary', component: DiaryComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'info', component: InfoComponent },
    ],
  },
];
