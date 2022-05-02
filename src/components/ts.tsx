export type TContact = { id: string; name: string; number: string };

export interface IState {
  contacts: TContact[];
  filter: string;
}
