import { Component, input } from '@angular/core';
import { Declaration } from '../../models/Declaration';


@Component({
  selector: 'app-declaration-item',
  imports: [],
  templateUrl: './declaration-item.html',
  styleUrl: './declaration-item.scss'
})
export class DeclarationItem {

  item = input.required<Declaration>();
  even = input.required<boolean>();
}
