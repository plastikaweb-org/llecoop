import { AuthEffects } from './auth/auth.effects';
import { ProfileEffects } from './profile/profile.effects';
import { UiEffects } from './ui/ui.effects';

export const effects: any[] = [ AuthEffects, UiEffects, ProfileEffects ];

export * from './auth/auth.effects';
export * from './ui/ui.effects';
export * from './profile/profile.effects';
