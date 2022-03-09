import { InjectionToken } from '@angular/core';

export interface Settings {
  refresh: number;
}

export const SETTINGS_TOKEN = new InjectionToken<Settings>(
  'Object with app settings'
);
