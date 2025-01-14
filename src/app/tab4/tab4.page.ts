import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList,
  IonItem, IonBadge, IonButton, IonSegment, IonSegmentButton, IonLabel,
  IonFab, IonFabButton, IonIcon, IonNote,
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
    IonThumbnail, IonNote,
    CommonModule
  ],
})
export class Tab4Page {
  newsList: any[] = []; // Lista completa de noticias
  filteredNews: any[] = []; // Noticias filtradas para la búsqueda

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadStaticNews();
  }

  loadStaticNews() {
    this.newsList = [
      {
        id: 1,
        title: 'Noticia 1',
        author: 'Autor 1',
        date: new Date(),
        image: 'https://placehold.co/300x150',
        isTrue: true,
        rating: 4.5
      },
      {
        id: 2,
        title: 'Noticia 2',
        author: 'Autor 2',
        date: new Date(),
        image: 'https://placehold.co/300x150',
        isTrue: false,
        rating: 3
      },
      {
        id: 3,
        title: 'Noticia 3',
        author: 'Autor 3',
        date: new Date(),
        image: 'https://placehold.co/300x150',
        isTrue: true,
        rating: 5
      }
    ];
    this.filteredNews = this.newsList; // Inicialmente sin filtros
  }

  filterNews(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredNews = this.newsList.filter(news =>
      news.title.toLowerCase().includes(query) || news.author.toLowerCase().includes(query)
    );
  }

  goToDetail(news: any) {
    this.router.navigate(['/tabs/tab2', news.id]); // Navega a la segunda vista con el ID de la noticia
  }
}

