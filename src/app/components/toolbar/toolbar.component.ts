import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';
import { GlobalService } from 'src/app/services/global.service';
import { MovieCacheService } from 'src/app/services/movie-cache.service';
import { MovieLoadService } from 'src/app/services/movie-load.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  public searchInput: string = '';
  constructor(
    private movieLoadService: MovieLoadService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {}

  public searchMovies(): void {
    this.movieLoadService.searchByName(this.searchInput);
    this.globalService.searchTrigger.value = true;
  }
}
