import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudiosComponent } from './studios/studios.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { SidebarModule,TreeViewModule,ToolbarModule,MenuModule } from '@syncfusion/ej2-angular-navigations';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    InstructorsComponent,
    GalleryComponent,
    StudiosComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent,
    PrivacypolicyComponent  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    LightboxModule,
    SidebarModule,
    TreeViewModule,
    ToolbarModule,
    MenuModule,

    //Navigation
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', redirectTo:'' },
      { path: 'gallery', component: GalleryComponent },
      { path: 'studios', component: StudiosComponent },
      { path: 'team', component: TeamComponent },
      //{ path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'privacy-policy',  component: PrivacypolicyComponent,  },
    ] ,{onSameUrlNavigation:'reload'})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
