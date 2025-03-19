import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { PhotosComponent } from './photos/photos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumComponent },
    { path: 'albums/:id', component: AlbumDetailComponent },
    { path: 'albums/:id/photos', component: PhotosComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
