import { TRequestProps } from './TRequestProps';

export interface IConnectionProps extends TRequestProps {
  method: string;
  url: string;
}
