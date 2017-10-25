import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public sideMenubarItems: any = [];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.prepareSideMenubarData();
  }
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
    { name: 'Service 1', route: '/services', },
    {name:'Web Design',route:'/service/web-designing',iconClass:"fa fa-picture-o"},
    {name:"E Commerce Solutions",route:"/service/e-commerce-solutions",iconClass:"fa fa-globe"},
    {name:"SEO & SEM",route:"/service/seo-and-sem-serives",iconClass:"fa fa-line-chart"},
    {name:"MObile Application Development",route:"/service/mobile-application-development",iconClass:"fa fa-mobile"},
    {name:"Software Development",route:"/service/software-development",iconClass:"fa fa-mobile"},
    {name:"Enterprise Application Development",route:"/service/enterprise-application-development",iconClass:"fa fa-trophy"},
    {name:"API Integration",route:"/service/api-integration",iconClass:"fa fa-wrench"}]
  }, {
    name: 'Portfolio',
    route: '/portfolio',
    subMenus: [],
  }, {
    name: 'Contact Us',
    route: "/contactUs",
    subMenus: []
  }];

  public navigateToPage(route) {
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
