import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonFiltroCategoriaComponent } from './button-filtro-categoria/button-filtro-categoria.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { ModalCrudCategoriaComponent } from './modal-crud-categoria/modal-crud-categoria.component';
import { ModalCrudResponsavelComponent } from './modal-crud-responsavel/modal-crud-responsavel.component';
import { ModalFormTarefaComponent } from './modal-form-tarefa/modal-form-tarefa.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    ModalFormTarefaComponent,
    ModalCrudCategoriaComponent,
    CrudListComponent,
    ModalCrudResponsavelComponent,
    ButtonFiltroCategoriaComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [
    ButtonFiltroCategoriaComponent,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class ComponentsModule {}
