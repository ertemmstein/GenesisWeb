import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClickEventArgs, FieldSettingsModel, MenuEventArgs, MenuItemModel, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
import { ASTWithSource } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  

  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance: SidebarComponent;
  public data: MenuItemModel[] = [
    {
      text: 'Anasayfa',
      iconCss: 'e-icons e-home',
      url: 'home'
    },
    {
      text: 'Galeri',
      iconCss: 'e-icons e-image',
      url: 'gallery'

    },
    {
      text: 'Ekibimiz',
      iconCss: 'e-icons e-people',
      url:'team'

    },
    // {
    //     text: 'Hakkımızda',
    //     iconCss: 'icon-comment-inv-alt2 icon',

    // },
    {
      text: 'İletişim',
      iconCss: 'e-icons e-location',
      url:'contact'
    }
  ];

  public enableDock: boolean = true;
  public dockSize: string = '50px';
  public width: string = '120px';
  public target: string = '.main-menu-content';
  constructor(private router: Router) {

  }

  toolbarCliked(args: ClickEventArgs) {
    if (args.item.tooltipText == "Menu") {
      this.sidebarMenuInstance.toggle();
    }


  }
  ngOnInit() {
    //this.router.navigate(['']);
  }


  getCurrentYearLong(): number {
    return new Date().getFullYear();
  }


  select(args: MenuEventArgs): void {
     //this.sidebarMenuInstance.close;
     this.sidebarMenuInstance.hide();
     args.event?.preventDefault();
     this.sidebarMenuInstance.showBackdrop = false;
     
     let routerLink: any = (args?.item?.url);
     this.router.navigate([routerLink]);
  }



}



