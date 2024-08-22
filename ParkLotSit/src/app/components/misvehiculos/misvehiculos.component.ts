import { Component ,OnInit, HostListener, AfterViewInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-misvehiculos',
  templateUrl: './misvehiculos.component.html',
  styleUrl: './misvehiculos.component.css'
})
export class MisvehiculosComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    this.setupResponsiveMenu();
  }

  ngAfterViewInit() {
    this.setupMenu();
    this.setupJQuery();
  }

  setupMenu() {
    const btnOpen = document.getElementById("btn_open") as HTMLElement;
    if (btnOpen) {
      btnOpen.addEventListener("click", this.openCloseMenu.bind(this)); // Enlaza el contexto de `this`
    }
  }

  openCloseMenu() {
    const body = document.getElementById("body") as HTMLElement;
    const sideMenu = document.getElementById("menu_side") as HTMLElement;
    if (body && sideMenu) {
      body.classList.toggle("body_move");
      sideMenu.classList.toggle("menu__side_move");
    }
  }

  setupResponsiveMenu() {
    const body = document.getElementById("body") as HTMLElement;
    const sideMenu = document.getElementById("menu_side") as HTMLElement;

    if (body && sideMenu) {
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
  }

  setupJQuery() {
    $(() => {
      $('.material-card > .mc-btn-action').click(function () {
        const card = $(this).parent('.material-card');
        const icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(() => {
            icon.removeClass('fa-arrow-left fa-spin-fast').addClass('fa-bars');
          }, 800);
        } else {
          card.addClass('mc-active');

          window.setTimeout(() => {
            icon.removeClass('fa-bars fa-spin-fast').addClass('fa-arrow-left');
          }, 800);
        }
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
    if (el) {
      el.classList.toggle('step-animation');
    }
  }
}



