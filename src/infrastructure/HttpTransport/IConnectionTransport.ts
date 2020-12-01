import { IConnectionProps } from './IConnectionProps';
import { IResponseFormat } from '@/infrastructure/Response';

export interface IConnectionTransport {
  request({ method, url }: IConnectionProps): Promise<IResponseFormat>;
}
