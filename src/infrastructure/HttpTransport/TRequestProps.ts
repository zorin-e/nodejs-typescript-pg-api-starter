import { TProps } from '@/infrastructure/TProps';

export type TRequestProps = {
  headers?: TProps;
  body?: TProps | string;
  params?: TProps;
};
