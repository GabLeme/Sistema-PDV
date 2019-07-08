import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  readonly path = "/api/clients";

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.baseUrlApis + this.path);
  }

  saveClient(c: Client): Observable<Client> {
    return this.http.post<Client>(environment.baseUrlApis + this.path, c);
  }

  updateClient(c: Client): Observable<Client> {
    return this.http.put<Client>(environment.baseUrlApis + this.path + `/${c._id}`, c);
  }

  deleteClient(c: Client) {
    return this.http.delete(environment.baseUrlApis + this.path + `/${c._id}`);
  }
}
