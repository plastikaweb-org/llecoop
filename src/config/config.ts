import { InjectionToken } from '@angular/core';

export interface AppConfig {
  environment?: any;
  product: string;
  owner: string;
  ownerLink: string;
  slogan: string;
  developer: string;
  developerLink: string;
  year: string;
}

export const config: AppConfig = {
  environment: {
    dev: {},
    production: {}
  },
  product: '@llecoop',
  owner: 'El Llevat',
  ownerLink: 'http://www.llevat.org',
  slogan: 'Eina Cooperativa',
  developer: 'Plastikaweb',
  developerLink: 'https://www.plastikaweb.com',
  year: new Date().getFullYear().toString()
};

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('config');
