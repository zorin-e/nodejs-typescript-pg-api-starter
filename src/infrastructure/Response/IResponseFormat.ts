import { TProps } from '@/infrastructure/TProps';

export interface IResponseFormat {
  payload: TProps;
  status: number;
  success?: boolean;
}
