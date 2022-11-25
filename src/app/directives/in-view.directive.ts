import { Directive, ElementRef, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
  selector: '[appInView]'
})
export class InViewDirective {

  constructor(private element: ElementRef, private nav: NavigationService) { }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    const rect = this.element.nativeElement.getBoundingClientRect();
    const topShow = rect.top <= window.innerHeight / 2;
    const bottomShow = rect.bottom >= window.innerHeight / 2;
    const inView = topShow && bottomShow;
    if (inView) this.nav.currentInView = this.element.nativeElement.getAttribute('id');
  }

}
