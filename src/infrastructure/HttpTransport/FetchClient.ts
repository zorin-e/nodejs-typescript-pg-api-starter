import fetch from 'node-fetch';
import { IConnectionTransport } from './IConnectionTransport';
import { IResponseFormat } from '@/infrastructure/Response';
import { TProps } from '@/infrastructure/TProps';

export default class FetchClent implements IConnectionTransport {
  async request({
    url,
    method,
    props,
  }: {
    url: string;
    method: string;
    props?: TProps;
  }): Promise<IResponseFormat> {
    const response = await fetch(url, { method, ...props });
    const data = await response.json();
    return {
      payload: data,
      status: response.status,
    };
  }
}
