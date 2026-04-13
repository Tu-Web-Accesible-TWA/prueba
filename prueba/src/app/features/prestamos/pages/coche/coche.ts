import { Component } from '@angular/core';
import { Breadcrumbs } from '../../../../shared/ui/breadcrumbs/breadcrumbs';
import { BlockText } from '../../components/block-text/block-text';
import { ImageBottonText } from '../../components/image-botton-text/image-botton-text';

@Component({
  selector: 'app-coche',
  imports: [Breadcrumbs, BlockText, ImageBottonText],
  templateUrl: './coche.html',
  styleUrl: './coche.css',
})
export class Coche {
  content: pru = {
    title: 'Financia la compra de tu coche con nuestro préstamo para coche',
    text: 'Puedes financiar tu préstamo Coche hasta en 96 meses, si el importe que solicitas es igual o mayor a 10.000 euros. Si el importe solicitado es inferior a 10.000 euros, la duración máxima del crédito es de hasta 60 meses. No esperes más a tener el coche de tus sueños. Solicita ya el préstamo para tu coche online y obtén tu dinero en un momento. Así de fácil y sencillo, desde tu casa y sin tener que desplazarte.'
  }
}

export interface pru{
  title: string,
  text: string
}