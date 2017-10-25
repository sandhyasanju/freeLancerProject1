import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { WebDesignComponent } from './services/web-design/web-design.component';
import { ECommerceComponent } from './services/e-commerce/e-commerce.component';
import { SeoComponent } from './services/seo/seo.component';
import { MobileApplicationComponent } from './services/mobile-application/mobile-application.component';
import { SoftwareDevelopmentComponent } from './services/software-development/software-development.component';
import { EnterpriseAppDevComponent } from './services/enterprise-app-dev/enterprise-app-dev.component';
import { ApiIntegrationComponent } from './services/api-integration/api-integration.component';

//routing
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'service/api-integration',
    component: ApiIntegrationComponent
  },
  {
    path: 'service/e-commerce-solutions',
    component: ECommerceComponent
  },
  {
    path: 'service/enterprise-application-development',
    component: EnterpriseAppDevComponent
  },
  {
    path: 'service/mobile-application-development',
    component: MobileApplicationComponent
  },
  {
    path: 'service/seo-and-sem-serives',
    component: SeoComponent
  },
  {
    path: 'service/software-development',
    component: SoftwareDevelopmentComponent
  },
  {
    path: 'service/web-designing',
    component: WebDesignComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactUsComponent,
    FooterComponent,
    WebDesignComponent,
    ECommerceComponent,
    SeoComponent,
    MobileApplicationComponent,
    SoftwareDevelopmentComponent,
    EnterpriseAppDevComponent,
    ApiIntegrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



