export interface Warning {
  message: string;
  annexMessage: string;
}

export enum WarningTypes {
  Error,
  Warning,
  Info
}

export interface WarningTypeConfig {
  type: number;
  color: string;
  icon: string;
}

export const WarningTypesConfigList: { [x: number]: WarningTypeConfig } = {
  [ WarningTypes.Error ]: {
    type: WarningTypes.Error,
    color: 'warn',
    icon: 'error'
  },
  [ WarningTypes.Warning ]: {
    type: WarningTypes.Warning,
    color: 'primary',
    icon: 'warning'
  },
  [ WarningTypes.Info ]: {
    type: WarningTypes.Info,
    color: 'accent',
    icon: 'info'
  }
};
