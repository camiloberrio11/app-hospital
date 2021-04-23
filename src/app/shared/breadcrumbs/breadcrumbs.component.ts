import { Component, Inject, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  titleSubs: Subscription;
  title: string;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.getTitle().subscribe(
      (data) => (
        (this.title = data.title),
        (this.document.title = `AdminPro - ${this.title}`)
      )
    );
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  getTitle(): Observable<Data> {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

  private setTitleInTabBrowser(): void {}
}
