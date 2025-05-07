import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: "./navBar.component.html",
    imports:[CommonModule],
})
export class NavBarComponent{
  scrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}