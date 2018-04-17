import { AuthEffects } from './auth/auth.effects';
import { UiEffects } from './ui/ui.effects';

export const effects: any[] = [ AuthEffects, UiEffects ];

export * from './auth/auth.effects';
export * from './ui/ui.effects';
