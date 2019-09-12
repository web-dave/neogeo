import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appOrderBtn]'
})
export class OrderBtnDirective implements OnChanges {
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  @Input() appOrderBtn: string;
  ngOnChanges(changeObj) {
    this.orderBtnElement.innerText = this.appOrderBtn;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtnElement);
    this.orderBtnElement.onclick = () => {
      console.log('this.orderBtn:', this.appOrderBtn);
    };
  }
}
