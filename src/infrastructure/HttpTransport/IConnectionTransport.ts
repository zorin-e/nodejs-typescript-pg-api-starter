import { IConnectionProps } from './IConnectionProps';
import { ResponseFormat } from '@/infrastructure/Response';

export interface IConnectionTransport {
  request({ method, url }: IConnectionProps): Promise<ResponseFormat>;
}
