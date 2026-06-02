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

export function generateSeoSlug(title: string): string {
  // 1. Diccionario de palabras vacías (Stop Words) en español a eliminar
  const stopWords = new Set([
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
    'de', 'del', 'al', 'para', 'por', 'con', 'como', 'sobre',
    'y', 'o', 'e', 'u', 'en', 'su', 'sus', 'tu', 'tus', 'que'
  ]);

  return title
    .toLowerCase()
    // 2. Traducir símbolos comunes antes de limpiar
    .replace(/&/g, ' y ') 
    // 3. Normalizar y eliminar acentos (á -> a, ñ -> n)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // 4. Eliminar cualquier cosa que no sea letra, número o espacio
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    // 5. Dividir en palabras para filtrar las 'stop words'
    .split(/[\s_-]+/)
    .filter(word => !stopWords.has(word) && word.length > 0)
    // 6. Si el título se quedara vacío (ej: "El o la"), usar las palabras originales limpias
    .slice(0) 
    // 7. Unir con un único guión medio
    .join('-');
}
