import { Component, input } from '@angular/core';
import { Declaration } from '../../models/Declaration';
import { StatusBadge } from '../status-badge/status-badge';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-declaration-item',
  imports: [StatusBadge, CommonModule, DatePipe],
  templateUrl: './declaration-item.html',
  styleUrl: './declaration-item.scss'
})
export class DeclarationItem {

  item = input.required<Declaration>();
  even = input.required<boolean>();
}
