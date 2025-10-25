import { Component, inject, input, OnInit, signal} from '@angular/core';
import { DeclarationService } from '../../services/declarations/declaration-service';
import { DeclarationItem } from "../declaration-item/declaration-item";

@Component({
  selector: 'app-header',
  imports: [DeclarationItem],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = input.required();
  username = signal("Ousmane");
  declarations = inject(DeclarationService);

  
}
