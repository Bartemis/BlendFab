import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Model {
  id: number;
  name: string;
  thumbnail: string;
  url: string;
}

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class ModelService {
  private models: Model[] = [
    {
      id: 1,
      name: 'Sample Model 1',
      thumbnail: 'assets/thumbnails/model1.png',
      url: 'assets/models/model1.glb'
    },
    {
      id: 2,
      name: 'Sample Model 2',
      thumbnail: 'assets/thumbnails/model2.png',
      url: 'assets/models/model2.glb'
    },
    // Add more models as needed
  ];

  constructor() {}

  /**
   * Fetches the list of models.
   * @returns Observable<Model[]>
   */
  getModels(): Observable<Model[]> {
    return of(this.models);
  }

  /**
   * Fetches a single model by ID.
   * @param id - The ID of the model.
   * @returns Observable<Model | undefined>
   */
  getModelById(id: number): Observable<Model | undefined> {
    const model = this.models.find(m => m.id === id);
    return of(model);
  }
}
