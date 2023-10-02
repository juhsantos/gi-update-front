import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizacao-cadastral',
  templateUrl: './atualizacao-cadastral.component.html',
  styleUrls: ['./atualizacao-cadastral.component.css']
})
export class AtualizacaoCadastralComponent {

  Dados = {
    name: 'Alexandre Sousa',
    phone: '11952551031',
    cep: '06867360',
    state: 'SP',
    city: 'Itapecerica da Serra',
    district: 'Jardim das Oliveiras',
    street: 'Rua João Pedro de Andrade',
    houseNumber: '20',
    additionalInfo: 'Casa verde',
  }

}
