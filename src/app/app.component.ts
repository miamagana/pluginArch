import { Component, OnInit, Injector } from '@angular/core';
import { Route, Router } from '@angular/router';
import config from './modules.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pluginArch';
  routes: Route[];
  constructor(private injector: Injector) {
    const router: Router = injector.get(Router);
    console.log(router.config);
    router.resetConfig(this.createRoutes());
    console.log(router.config);
    this.routes = router.config;
  }

  createRoutes(): Route[] {
    const result: Route[] = [];
    config.forEach((route: { path: string, route: string, moduleName: string }) => {
      result.push({
        path: route.path,
        loadChildren: () => import('./' + route.route).then(m => m[route.moduleName])
      });
    });
    return result;
  }
}
