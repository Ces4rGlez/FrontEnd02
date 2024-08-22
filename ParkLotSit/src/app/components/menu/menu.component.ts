import { Component , OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent implements OnInit {
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['solic']);
  }
  ngOnInit() {
    this.setupMenu();
    this.setupResponsiveMenu();
    this.setupNavbar();
    this.setupThemeToggle();
  }

  setupMenu() {
    const btnOpen = document.getElementById("btn_open") as HTMLElement;
    btnOpen.addEventListener("click", this.openCloseMenu);
  }

  openCloseMenu() {
    const body = document.getElementById("body") as HTMLElement;
    const sideMenu = document.getElementById("menu_side") as HTMLElement;
    body.classList.toggle("body_move");
    sideMenu.classList.toggle("menu__side_move");
  }

  setupResponsiveMenu() {
    const body = document.getElementById("body") as HTMLElement;
    const sideMenu = document.getElementById("menu_side") as HTMLElement;
    
    if (window.innerWidth < 760) {
      body.classList.add("body_move");
      sideMenu.classList.add("menu__side_move");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        sideMenu.classList.remove("menu__side_move");
      }

      if (window.innerWidth < 760) {
        body.classList.add("body_move");
        sideMenu.classList.add("menu__side_move");
      }
    });
  }

  setupNavbar() {
    const navMenuBtn = document.querySelector('.nav-menu-btn') as HTMLElement;
    const navCloseBtn = document.querySelector('.nav-close-btn') as HTMLElement;
    const nav = document.querySelector('.mobile-nav') as HTMLElement;
    
    const navToggleFunc = () => {
      nav.classList.toggle('active');
    };

    navMenuBtn.addEventListener('click', navToggleFunc);
    navCloseBtn.addEventListener('click', navToggleFunc);
  }

  setupThemeToggle() {
    const themeBtns = document.querySelectorAll('.theme-btn') as NodeListOf<HTMLElement>;

    themeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        themeBtns.forEach(b => {
          b.classList.toggle('light');
          b.classList.toggle('dark');
        });
      });
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const el = event.target as HTMLElement;
    if (el.id === 'toggle-animation') {
      this.classToggle();
    }
  }

  classToggle() {
    const el = document.querySelector('.icon-cards__content') as HTMLElement;
    el.classList.toggle('step-animation');
  }
}


