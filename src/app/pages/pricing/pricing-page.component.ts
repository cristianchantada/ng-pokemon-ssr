import { isPlatformServer } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {

    // if(!isPlatformServer(this.platform)){
    //   document.title = 'Pricing Page'
    // }

    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Pricing page'});
    this.meta.updateTag({name: 'og:title', content: 'Princing Page'});
    this.meta.updateTag({name: 'keywords', content: 'Pricing,PAge,Cristian,Angular'});
  }

}

