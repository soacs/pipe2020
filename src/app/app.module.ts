import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { ChildComponent } from './components/child/child.component';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}

@NgModule({
  declarations: [
    AppComponent, RoundPipe, ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
