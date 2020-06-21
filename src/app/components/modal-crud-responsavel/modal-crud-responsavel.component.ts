import { Component } from '@angular/core';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-modal-crud-responsavel',
  templateUrl: './modal-crud-responsavel.component.html',
})
export class ModalCrudResponsavelComponent {
  constructor(public readonly responsavelService: ResponsavelService) {}
}
