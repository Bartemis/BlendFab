// src/app/components/model-gallery/model-gallery.component.ts

import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterLink } from '@angular/router';
import {Observable} from "rxjs";
import {ModelService} from "../../services/model.service";
import {ProgressSpinnerModule} from "primeng/progressspinner";

interface Model {
  id: number;
  name: string;
  thumbnail: string;
  url: string;
}

@Component({
  selector: 'app-model-gallery',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, RouterLink, NgOptimizedImage, ProgressSpinnerModule], // Ensure RouterLink is imported
  templateUrl: './model-gallery.component.html',
  styleUrls: ['./model-gallery.component.css']
})
export class ModelGalleryComponent implements OnInit {
  models$!: Observable<Model[]>;

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.models$ = this.modelService.getModels(); // Assign the observable
  }
}
