import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [NgClass],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss'
})
export class StatusBadge {
  status = input();

}
