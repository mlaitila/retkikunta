import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetkikuntaDtoService {

  constructor() { }

  public getRetkikuntaObject(){
  }
}

export class Retkikunta {
    id: string;
    name: string;
    destination: string;
    startDate: Date
    endDate: Date;
    
    constructor() { }
}

