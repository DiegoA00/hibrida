import { Component } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList,
  IonItem, IonBadge, IonButton, IonSegment, IonSegmentButton, IonLabel,
  IonFab, IonFabButton, IonIcon,
  IonThumbnail
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList,
    IonItem, IonBadge, IonButton, IonSegment, IonSegmentButton, IonLabel,
    IonFab, IonFabButton, IonIcon, ExploreContainerComponent,
    IonThumbnail
  ],
})
export class Tab4Page {
  noticias = [
    {
      titulo: 'Noticia 1',
      fuente: 'Fuente Ejemplo',
      fecha: new Date(),
      etiqueta: 'Confiable',
      descripcion: 'Descripción breve de la noticia.',
      imagen: 'https://via.placeholder.com/150',
    },
    {
      titulo: 'Noticia 2',
      fuente: 'Otra Fuente',
      fecha: new Date(),
      etiqueta: 'Posible Falsa',
      descripcion: 'Otra descripción breve.',
      imagen: 'https://via.placeholder.com/150',
    },
  ];
  news = [
    { title: 'Noticia 1', source: 'Fuente A', status: 'true', image: null },
    { title: 'Noticia 2', source: 'Fuente B', status: 'false', image: null },
    { title: 'Noticia 3', source: 'Fuente C', status: 'unknown', image: null },
  ];
  filteredNews = [...this.news];

  constructor() { }


  filtrarNoticias(event: any) {
    const filtro = event.detail.value;
    console.log('Filtro seleccionado:', filtro);
    // Implementar lógica de filtrado aquí
  }

  filterNews(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredNews = this.news.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }

  goToDetails(news: any) {
    console.log('Navigating to details of', news);
  }
}

