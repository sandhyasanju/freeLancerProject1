import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems = [{
    name: 'Home',
    route: '/home',
    subMenus: []
  }, {
    name: 'About Us',
    route: '/aboutUs',
    subMenus: []
  }, {
    name: 'Services',
    subMenus: [
    { name: 'Service 1', route: '/service', },
    {name: 'Web Design', route: '/service/web-designing', iconClass: "fa fa-picture-o"},
    {name:"E Commerce Solutions",route:"/service/e-commerce-solutions",iconClass:"fa fa-globe"},
    {name:"SEO & SEM",route:"/service/seo-and-sem-serives",iconClass:"fa fa-line-chart"},
    {name:"Mobile Application Development",route:"/service/mobile-application-development",iconClass:"fa fa-mobile"},
    {name:"Software Development",route:"/service/software-development",iconClass:"fa fa-mobile"},
    {name:"Enterprise Application Development",route:"/service/enterprise-application-development",iconClass:"fa fa-trophy"},
    {name:"API Integration",route:"/service/api-integration",iconClass:"fa fa-wrench"}]
  }, {
    name: 'Portfolio',
    route: '/portfolio',
    subMenus: [],
  }, {
    name: 'Contact Us',
    route: '/contactUs',
    subMenus: []
  }];

  public sideMenubarItems: any = [];
  public index:number;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    let Url = window.location.pathname; /// this will give you current url
console.log(Url.split('/')[1]);
switch(Url.split('/')[1]){
  case'aboutUs' : this.index = 1;
  break;
  case 'contactUs': this.index = 4;
  break;
  case 'portfolio' : this.index = 3;
  break;
  case 'service' : this.index = 2;
  break;
  default : this.index = 0;

}
    this.prepareSideMenubarData();
  }

  public navigateToPage(route,i) {
    console.log(i);
    this.index = i;
    if (route) {

      this.router.navigateByUrl(route);
    }
  }

  private prepareSideMenubarData() {
    this.sideMenubarItems = this.menuItems.map(function(eachItem) {
      return eachItem;
    });
  }
}
