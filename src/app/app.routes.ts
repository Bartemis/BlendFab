// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { ModelGalleryComponent } from './components/model-gallery/model-gallery.component';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';
import { UploadComponent } from './components/upload/upload.component';

export const routes: Routes = [
  { path: '', component: ModelGalleryComponent },
  { path: 'model/:id', component: ModelViewerComponent },
  { path: 'upload', component: UploadComponent },
  // Add more routes as needed
];
