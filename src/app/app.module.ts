import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './My_Components/to-dos/to-dos.component';
import { TodoItemComponent } from './My_Components/todo-item/todo-item.component';
import { AddTodoComponent } from './My_Components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './My_Components/about/about.component';
import { FooterComponent } from './My_Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
