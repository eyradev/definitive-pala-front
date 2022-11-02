export interface Option {
  value: string;
  label: string;
  isDisabled?: boolean;
}

export type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;
