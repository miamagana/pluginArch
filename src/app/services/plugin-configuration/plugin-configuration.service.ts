import { Injectable, Injector } from '@angular/core';
import { Route, Router } from '@angular/router';
import { interfacePlugins } from '../../plugins.config';

@Injectable({
  providedIn: 'root'
})
export class PluginConfigurationService {
  constructor(private injector: Injector) { }

  loadRoutes(): Promise<boolean> {
    const router: Router = this.injector.get(Router);
    console.log(router.config);
    router.resetConfig([...router.config, ...this.createRoutes()]);
    console.log(router.config);
    return Promise.resolve(true);
  }

  createRoutes(): Route[] {
    const result: Route[] = [];
    interfacePlugins.forEach(
      (route: { path: string; route: string; moduleName: string }) => {
        result.push({
          path: route.path,
          loadChildren: () =>
            import('../../' + route.route).then(m => m[route.moduleName])
        });
      }
    );
    return result;
  }
}
