import { Injectable, Injector } from '@angular/core';
import { Route, Router } from '@angular/router';
import { interfacePlugins, InterfacePlugin } from '../../plugins.config';

@Injectable({
  providedIn: 'root'
})
export class PluginConfigurationService {
  constructor(private injector: Injector) { }

  loadRoutes(): void {
    const router: Router = this.injector.get(Router);
    console.log(router.config);
    router.resetConfig([...router.config, ...this.createRoutes()]);
    console.log(router.config);
  }

  private createRoutes(): Route[] {
    const result: Route[] = [];
    interfacePlugins.forEach(
      (route: InterfacePlugin) => {
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
