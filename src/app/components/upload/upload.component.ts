// src/app/components/upload/upload.component.ts

import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

interface Model {
  id?: number;
  name: string;
  thumbnail: string;
  url: string;
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FileUploadModule, CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  model: Model = { name: '', thumbnail: '', url: '' };
  thumbnailFile: File | null = null;
  modelFile: File | null = null;

  onThumbnailSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.thumbnailFile = event.target.files[0];
    }
  }

  onModelSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.modelFile = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.thumbnailFile && this.modelFile) {
      // Implement upload logic here, e.g., upload to Firebase Storage or your backend
      console.log('Uploading:', this.model);
      // Reset form after upload
      this.model = { name: '', thumbnail: '', url: '' };
      this.thumbnailFile = null;
      this.modelFile = null;
      // Optionally, navigate back to the gallery or show a success message
    }
  }
}
