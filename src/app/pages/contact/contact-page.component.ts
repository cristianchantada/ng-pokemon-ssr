import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class COntactPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Contact page'});
    this.meta.updateTag({name: 'og:title', content: 'Contact Page'});
    this.meta.updateTag({name: 'keywords', content: 'Contact,PAge,Cristian,Angular'});
  }

}
