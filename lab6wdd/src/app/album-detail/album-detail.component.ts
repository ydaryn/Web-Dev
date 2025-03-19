import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService, Album } from '../services/albums.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: 'album-detail.component.html',
  styleUrl: 'album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle: string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, private router: Router) { }

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(albumId).subscribe(album => {
      this.album = album;
      this.editedTitle = album.title;
      this.loadAlbum();
    });
  }


  loadAlbum() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));

    if (!albumId) {
      console.error('Error: Album ID is missing from route!');
      return;
    }

    this.albumsService.getAlbumById(albumId).subscribe({
      next: (album) => {
        if (album) {
          this.album = album;
          this.editedTitle = album.title;
        } else {
          console.error('Error: Album not found!');
        }
      },
      error: (err) => console.error('Error fetching album:', err),
    });
  }
  saveTitle() {
    if (this.album) {
      this.album.title = this.editedTitle;
      this.albumsService.updateAlbum(this.album.id, this.album).subscribe({
        next: () => {
          alert('The title has been changed successfully!');
          this.loadAlbum(); // 🔥 Обновляем данные после сохранения
        },
        error: (err) => console.error('Error updating album:', err),
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}