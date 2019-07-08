import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientsList: any = [];
  addOrEditClient: Client;
  isEdit: boolean = false;
  initialize() {
    this.isEdit = false;
    this.addOrEditClient = {
      bairro: '',
      cidade: '',
      email: '',
      endereco: '',
      nome: '',
      telefoneCelular: '',
      telefoneResidencial: ''
    };
  }

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.initialize();
    this.getAllClients();
  }

  getAllClients() {
    this.clientsService.getAllClients().subscribe(
      r => {
        this.clientsList = r;
      }
    )
  }

  editClient(c: Client) {
    this.isEdit = true;
    this.addOrEditClient = {
      _id: c._id,
      bairro: c.bairro,
      cidade: c.cidade,
      email: c.email,
      endereco: c.endereco,
      nome: c.nome,
      telefoneCelular: c.telefoneCelular,
      telefoneResidencial: c.telefoneResidencial
    }
  }

  deleteClient(c: Client) {
    if (confirm("Você deseja deletar o cliente: " + c.nome + "?")) {
      this.clientsService.deleteClient(c).subscribe(r => {
        this.getAllClients();
      })
    }
  }

  saveClient() {
    if (this.isEdit) {
      this.clientsService.updateClient(this.addOrEditClient).subscribe(r => {

        this.getAllClients();
        this.initialize();
      });
    }
    else {
      this.clientsService.saveClient(this.addOrEditClient).subscribe(r => {

        this.getAllClients();
        this.initialize();
      })
    }
  }
}
