export interface InterfacePlugin {
  path: string;
  route: string;
  moduleName: string;
}

export interface RendererPlugin {
  type: string;
}

export const interfacePlugins: InterfacePlugin[] = [
  {
    path: 'play',
    route: 'plugins/play/play.module',
    moduleName: 'PlayModule'
  },
  {
    path: 'plug',
    route: 'plugins/plug/plug.module',
    moduleName: 'PlugModule'
  }
];

export const rendererPlugins: RendererPlugin[] = [];
