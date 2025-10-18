import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './src/components/nav/nav';
import { Header } from './src/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('website-naissances');
  subtitle = signal("Les informations sur votre enfant sans vous déplacer");
  author = signal('Ousmane Sow');
  headerTitle = signal("Déclarations from app");
}
