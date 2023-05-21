import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  currentPage: String;
  private currentRoute: any;


  constructor(private router : Router) {



  }

  ngOnInit(): void {
  //this.currentPage = localStorage.getItem('currentPage');
    //this.currentPage = 'accueil';

    this.router.events.subscribe((event) =>{
      if (event instanceof NavigationEnd) {
        let url = event.url;
        this.activePage(url);
        if(url === '/'){
          this.activePage('/accueil');
        }
        else if(url=== '/education-specifique' || url=== '/suivi-paramedical'
          || url=== '/soutient-accompagnement' || url=== '/equipe-polyvalente'
          || url=== '/beneficiaires' ){
          this.activePage('/services');
        }
        else if(url=== '/presentation' || url=== '/objectifs' || url=== '/histoire' || url=== '/partenaires'
          || url=== '/services-administratifs' ){
          this.activePage('/apropos');
        }
        console.log(url);
      }}
    );

  }

  // méthode de changement de page active à modifier
  activePage(page: string) {
    this.currentPage = page;

    localStorage.setItem('currentPage', page);
  }

  pageDon() {
    this.router.navigateByUrl("/dons");
    this.activePage("");
  }
}
