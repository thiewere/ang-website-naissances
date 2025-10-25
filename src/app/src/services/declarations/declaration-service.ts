import { Injectable } from '@angular/core';
import { DECLARATIONS } from '../../data/declaration';
import { Declaration } from '../../models/Declaration';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  
  search(): Declaration[] {
    return DECLARATIONS; 
  }
}
