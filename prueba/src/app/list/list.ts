import { Component, input, OnInit } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [Item],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{
  data = input.required<{id: number, name: string}[]>();

  ngOnInit(): void {
      function generarId(texto: string): string {
        return texto
          .toLowerCase()                           // 1. Todo a minúsculas
          .normalize('NFD')                        // 2. Separa los acentos de las letras
          .replace(/[\u0300-\u036f]/g, '')         // 3. Borra los acentos (incluye la tilde de la ñ -> n)
          .replace(/[^a-z0-9\s-]/g, '')            // 4. Quita signos de puntuación (¡, !, ¿, ?, ,, etc.)
          .trim()                                  // 5. Quita espacios muertos al inicio y final
          .replace(/[\s_-]+/g, '-')                // 6. Cambia espacios y guiones bajos por un solo guión
          .replace(/^-+|-+$/g, '');                // 7. Limpia guiones huérfanos en los extremos
      }

      // Ejemplos de uso:
      console.log(generarId("¡Hola Mundo, cómo estás desde Angular!")); 
      // Resultado: "hola-mundo-como-estas-desde-angular"

      console.log(generarId("Sección 1.2: El pingüino corre en España")); 
      // Resultado: "seccion-12-el-pinguino-corre-en-espana"
  }
}
