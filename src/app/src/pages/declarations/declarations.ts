import { Component, inject, OnInit, signal } from '@angular/core';
import { DeclarationService } from '../../services/declarations/declaration-service';
import { Declaration } from '../../models/Declaration';
import { JsonPipe } from '@angular/common';
import { DeclarationItem } from '../../components/declaration-item/declaration-item';

@Component({
  selector: 'app-declarations',
  imports: [JsonPipe, DeclarationItem],
  templateUrl: './declarations.html',
  styleUrl: './declarations.scss'
})
export class Declarations implements OnInit{

  declarationService = inject(DeclarationService);
  declarations = signal<Array<Declaration>>([]);

  ngOnInit(): void {
    this.declarations.set(this.declarationService.search());
  }
}
