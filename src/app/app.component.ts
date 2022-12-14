import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectChild1Name, selectChild1Version } from './child1/store/child1.selectors';
import { selectChild2Name, selectChild2Version } from './child2/store/child2.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  nameChild1$ = this.store.select(selectChild1Name);
  versionChild1$ = this.store.select(selectChild1Version);
  nameChild2$ = this.store.select(selectChild2Name);
  versionChild2$ = this.store.select(selectChild2Version);

  constructor(private store: Store) { }
}
