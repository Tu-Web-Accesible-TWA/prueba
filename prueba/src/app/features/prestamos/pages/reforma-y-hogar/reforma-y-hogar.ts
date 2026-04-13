import { Component } from '@angular/core';
import { Breadcrumbs } from '../../../../shared/ui/breadcrumbs/breadcrumbs';
import { ImageBottonText } from '../../components/image-botton-text/image-botton-text';
import { ImageUpText } from '../../components/image-up-text/image-up-text';

@Component({
  selector: 'app-reforma-y-hogar',
  imports: [Breadcrumbs, ImageBottonText, ImageUpText],
  templateUrl: './reforma-y-hogar.html',
  styleUrl: './reforma-y-hogar.css',
})
export class ReformaYHogar {
  content: pru = {
      imgUrl: 'img/coche.jpg',
      title: 'Financia la reforma de tu vivienda con nuestro préstamo para reformas',
      text: [
        'Tu préstamo de Reforma y Hogar se puede financiar hasta en 96 meses, en el caso de que solicites 10.000 euros o más, mientras que si necesitas menos de 10.000 euros, la duración máxima del préstamo es de hasta 60 meses.',
        'Lleva a cabo la reforma que llevabas años deseando hacer y pide nuestro préstamo para tu reforma. En Cetelem te lo ponemos fácil: podrás solicitar tu crédito desde casa y sin moverte, con un proceso 100% online y respuesta inmediata. Y, además, sin cambiar de banco ni contratar otros productos.'
      ]
    }
  
    content2: pru = {
      imgUrl: 'img/coche2.jpg',
      title: 'Conoce nuestro préstamo para reformas',
      text: [
        'Gracias al préstamo de Reforma y Hogar de Cetelem, puedes pagar cómodamente mes a mes la transformación de tu vivienda, ya sea un pequeño arreglo o una gran reforma de toda la casa. Podrás financiar la obra tanto si la hace una empresa o un autónomo, como si decides hacerla tú mismo comprando los materiales.'
      ]
    }
}


export interface pru{
  imgUrl: string,
  title: string,
  text: string[]
}