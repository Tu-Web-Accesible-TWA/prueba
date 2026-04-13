import { Component } from '@angular/core';
import { Breadcrumbs } from '../../../../shared/ui/breadcrumbs/breadcrumbs';
import { ImageBottonText } from '../../components/image-botton-text/image-botton-text';
import { ImageUpText } from '../../components/image-up-text/image-up-text';
import { CarrouselPrestamos } from '../../components/carrousel-prestamos/carrousel-prestamos';
import { BlockText } from '../../components/block-text/block-text';
import { LoanHeroCard } from '../../components/loan-hero-card/loan-hero-card';
import { LoanCardData } from '../../models/loan-card.model';

@Component({
  selector: 'app-coche',
  imports: [LoanHeroCard, Breadcrumbs, ImageBottonText, ImageUpText, BlockText, CarrouselPrestamos],
  templateUrl: './coche.html',
  styleUrl: './coche.css',
})
export class Coche {
  // En tu componente o servicio
  loanData: LoanCardData = {
    title: 'Préstamo Coche',
    subtitle: 'Compra ahora tu coche nuevo y disfruta de una financiación a medida',

    // Usamos el valor que pusiste. 
    // Nota: Si en el modelo pusimos 'number', quita las comillas y usa punto decimal.
    monthlyQuota: 141.32,

    // Texto legal extraído de la referencia visual
    legalText: 'TIN 10,59% TAE* 11,12% Importe total adeudado: 6.684,24€. Total intereses: 684,24€. Coste total del crédito: 684,24€',

    // Ruta de la imagen que usarás para el coche
    imgUrl: 'img/loan-coche-hero-card.jpg',

    // Datos para la tarjeta flotante (LoanFeatureCard)
    maxAmount: '60.000 €',
    tinRange: '10,59% | 12,49%',
    taeRange: '11,12% | 13,23%'
  };

  content: pru = {
    imgUrl: 'img/coche.jpg',
    title: 'Financia la compra de tu coche con nuestro préstamo para coche',
    text: [
      'Puedes financiar tu préstamo Coche hasta en 96 meses, si el importe que solicitas es igual o mayor a 10.000 euros. Si el importe solicitado es inferior a 10.000 euros, la duración máxima del crédito es de hasta 60 meses. No esperes más a tener el coche de tus sueños. Solicita ya el préstamo para tu coche online y obtén tu dinero en un momento. Así de fácil y sencillo, desde tu casa y sin tener que desplazarte.'
    ]
  }

  content2: pru = {
    imgUrl: 'img/coche2.jpg',
    title: '¿Cómo funciona nuestro préstamo para coche?',
    text: [
      'Con el préstamo Coche de Cetelem puedes financiar la compra de tu coche, tanto si se lo has comprado a un particular como a un concesionario. Estos préstamos de coche están orientados a todo tipo de vehículos: 4x4, berlina, utilitario, descapotable, familiar, monovolumen, coupé cabrio, segundo coche, todo-terreno, coche sin permiso, autocaravana, caravana, kart-karting, casa móvil, triciclo con motor, tuning, vehículo de colección…'
    ]
  }

  content3: pru = {
    imgUrl: '',
    title: 'Tipos de obra',
    text: [
      'Con Cetelem y el préstamo de Reforma y Hogar puedes llevar a cabo todo tipo de reformas, tanto pequeños arreglos como climatización, electricidad, escaleras, ventanas o revestimiento de suelo, así como grandes obras.'
    ]
  }

  data: CarrouselItem[] = [
    {
      imgSrc: "img/slide-coche.jpg",
      title: "¿Tu familia se ha agrandado?<br>Os merecéis un monovolumen",
      description: "Tanto si el número de miembros de la familia ha crecido, simula tu préstamo Coche."
    },
    {
      imgSrc: "img/slide-coche.jpg",
      title: "¿Tu familia se ha agrandado?<br>Os merecéis un monovolumen",
      description: "Tanto si el número de miembros de la familia ha crecido, simula tu préstamo Coche."
    }
  ]
}

export interface pru {
  imgUrl: string,
  title: string,
  text: string[]
}

export interface CarrouselItem {
  imgSrc: string,
  title: string,
  description: string
}