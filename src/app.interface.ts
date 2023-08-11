// interface
export interface AppInterface {
  readonly create: (params: {
    readonly id: number;
    readonly title: string;
    readonly content: string;
  }) => {
    readonly id: number;
    readonly title: string;
    readonly content: string;
  };
}
