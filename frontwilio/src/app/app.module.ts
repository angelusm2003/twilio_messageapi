import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Correct import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageListComponent } from './message-list/message-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Import HttpClientModule here
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()) // Pass withFetch() directly
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
