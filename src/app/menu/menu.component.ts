import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('homeButton') buttonRef!: ElementRef;

  openMenu(): void {
    const menu = this.menuRef.nativeElement as HTMLElement;
    menu.style.display = 'flex';
    setTimeout(() => {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }, 0);
    const button = this.buttonRef.nativeElement as HTMLElement;
    button.style.visibility = 'hidden';
    console.log('button clicked');
  }

  collapseMenu(): void {
    const menu = this.menuRef.nativeElement as HTMLElement;
    menu.classList.add('close');
    setTimeout(() => {
      menu.style.display = 'none';
      document.body.style.overflow = 'auto';
      menu.classList.remove('open', 'close');
    }, 1000);
    const button = this.buttonRef.nativeElement as HTMLElement;
    button.style.visibility = 'visible';
    console.log('collapsed');
  }

  closeMenu(): void {
    const menu = this.menuRef.nativeElement as HTMLElement;
    menu.style.display = 'none';
    menu.classList.remove('open', 'close');
    document.body.style.overflow = 'auto';
    const button = this.buttonRef.nativeElement as HTMLElement;
    button.style.visibility = 'visible';
  }

}
