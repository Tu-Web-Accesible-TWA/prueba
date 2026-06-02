import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
  
  data = [
    {
      id: 1,
      name: 'prueba'
    },
    {
      id: 2,
      name: 'prueba'
    },
    {
      id: 3,
      name: 'prueba'
    },
    {
      id: 4,
      name: 'prueba'
    },
    {
      id: 5,
      name: 'prueba'
    }
  ]
}