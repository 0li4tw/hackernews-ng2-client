import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list/news-list-item/news-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemCommentsComponent } from './news-list/news-item-comments/news-item-comments.component';
import { NewsItemCommentComponent } from './news-list/news-item-comment/news-item-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsListComponent,
    NewsListItemComponent,
    NewsItemCommentsComponent,
    NewsItemCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
