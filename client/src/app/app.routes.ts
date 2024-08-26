import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetialComponent } from './members/member-detial/member-detial.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'members/:id', component: MemberDetialComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },

    ]
  },
  { path: 'errors',component: TestErrorComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
