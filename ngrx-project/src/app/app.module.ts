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

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
