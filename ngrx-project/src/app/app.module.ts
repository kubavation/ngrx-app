import { CommentEffect } from './effect/CommentEffect';
import { CommentsListComponent } from './comments/component/comments-list/comments-list.component';
import { CreatePostComponent } from './posts/component/create-post/create-post.component';
import { PostInputComponent } from './posts/component/post-input/post-input.component';
import { PostListComponent } from './posts/component/post-list/post-list.component';
import { reducers } from './reducer/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { PostReducer } from './reducer/post.reducer';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effect/PostEffects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostInputComponent,
    CreatePostComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostEffects, CommentEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
