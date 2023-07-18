import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { bookReducer } from './reducers/book.reducer';
import { BookEffects } from './effects/book.effects';
import { houseReducer } from './reducers/house.reducers';
import { HouseEffects } from './effects/house.effects';

import { characterReducer } from './reducers/character.reducers';
import { CharacterEffects } from './effects/character.effects';

import { BookComponent } from './components/book/book.component';
import { HouseComponent } from './components/house/house.component';
import { CharacterComponent } from './components/character/character.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { BaseHouseComponent } from './components/base-house/base-house.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent,
    HouseDetailsComponent,
    BaseHouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ book: bookReducer, house : houseReducer, character : characterReducer}),
    EffectsModule.forRoot([BookEffects, HouseEffects, CharacterEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
