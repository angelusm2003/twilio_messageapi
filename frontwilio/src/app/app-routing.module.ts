import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/message-form', pathMatch: 'full' }, // Redirect to message-form component
  { path: 'message-form', component: MessageFormComponent },
  { path: 'message-list', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
