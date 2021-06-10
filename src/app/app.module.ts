import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieLoadService } from './services/movie-load.service';
import { RemoteService } from './services/remote.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MovieCacheService } from './services/movie-cache.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SuccessToastComponent } from './components/toast/success-toast/success-toast.component';
import { ErrorToastComponent } from './components/toast/error-toast/error-toast.component';
import { GlobalService } from './services/global.service';
import { MovieDetailViewComponent } from './components/movie-detail-view/movie-detail-view.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';
import { BottomContainerComponent } from './components/bottom-container/bottom-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    CardComponent,
    SuccessToastComponent,
    ErrorToastComponent,
    MovieDetailViewComponent,
    ButtonComponent,
    DividerComponent,
    BottomContainerComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    RemoteService,
    MovieLoadService,
    MovieCacheService,
    GlobalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
