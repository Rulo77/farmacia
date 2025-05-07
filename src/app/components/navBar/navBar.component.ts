import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: "./navBar.component.html",
    imports:[CommonModule],
    styles:[`
         header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: var(--space-2) 0;
      z-index: 1000;
      transition: all 0.3s ease;
      background-color: rgba(44, 110, 187, 0.95);
    }

    header.scrolled {
      background-color: rgba(44, 110, 187, 1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      color: white;
      font-size: var(--text-2xl);
      margin: 0;
      font-weight: 700;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: var(--space-3);
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: var(--secondary-200);
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 20px;
      cursor: pointer;
    }

    .mobile-menu-btn span {
      height: 2px;
      width: 100%;
      background-color: white;
      transition: all 0.3s ease;
    }

    .mobile-nav {
      display: none;
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease;
    }

    .mobile-nav.open {
      height: 200px;
    }

    .mobile-nav ul {
      flex-direction: column;
      padding: var(--space-2) 0;
    }

    @media (max-width: 768px) {
      nav ul {
        display: none;
      }

      .mobile-menu-btn {
        display: flex;
      }

      .mobile-nav {
        display: block;
      }
    }
    `],
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