import { BrowserModule } from '@angular/platform-browser';
import { TasksComponent } from './tasks/tasks.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TasksComponent,
    TaskDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
