import { PluginConfigurationService } from './services/plugin-configuration/plugin-configuration.service';

export function importPlugins(
  config: PluginConfigurationService
): () => void {
  return () => config.loadRoutes();
}
