import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { TodoListComponent } from './screens/todo-list/todo-list.component';
import { CategoriaService } from './services/categoria.service';
import { ResponsavelService } from './services/responsavel.service';
import { TarefaService } from './services/tarefa.service';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [TarefaService, CategoriaService, ResponsavelService, UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
