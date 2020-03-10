import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { importPlugins } from './app.config';
import { PluginConfigurationService } from './services/plugin-configuration/plugin-configuration.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    PluginConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: importPlugins,
      multi: true,
      deps: [PluginConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
