import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Theme } from '@llecoop';
import { DashboardSandbox } from '../../sandbox/dashboard.sandbox';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  // Nav
  routes = [ {
    title: 'Dashboards',
    route: '/',
    icon: 'dashboard'
  }, {
    title: 'Reports',
    route: '/',
    icon: 'insert_chart'
  }, {
    title: 'Sales',
    route: '/',
    icon: 'account_balance'
  }, {
    title: 'Marketplace',
    route: '/',
    icon: 'store'
  }
  ];
  config = this.sandbox.appConfig;
  themes = this.sandbox.appThemes;
  theme$ = this.sandbox.theme$;

  constructor(private sandbox: DashboardSandbox,
              public media: TdMediaService,
              private changeDetectorRef: ChangeDetectorRef) {
  }


  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    this.sandbox.doLogout();
  }

  changeTheme(theme: Theme) {
    this.sandbox.changeTheme(theme);
  }

}
