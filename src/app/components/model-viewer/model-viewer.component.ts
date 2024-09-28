import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {map, Observable, switchMap} from "rxjs";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ModelService} from "../../services/model.service";

interface Model {
  id: number;
  name: string;
  thumbnail: string;
  url: string;
}

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  standalone: true,
  styleUrls: ['./model-viewer.component.css'],
  imports: [
    NgIf,
    ProgressSpinnerModule,
    AsyncPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class ModelViewerComponent implements OnInit {
  model$!: Observable<Model | undefined>;

  constructor(private route: ActivatedRoute, private modelService: ModelService) {}

  ngOnInit(): void {
    this.model$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.modelService.getModelById(id))
    );  }
}
