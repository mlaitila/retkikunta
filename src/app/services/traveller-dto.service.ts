import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravellerDtoService {

  constructor() { }

  public getTravellerObject(){
  }
}

export class Traveller {
    id: string;
    name: string;
    
    constructor() { }
}
