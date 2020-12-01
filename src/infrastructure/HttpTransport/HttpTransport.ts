import { IConnectionTransport } from './IConnectionTransport';
import { IResponseFormat } from '@/infrastructure/Response';
import { Formation } from './Formation';
import { TRequestProps } from './TRequestProps';

export default class HttpTransport {
  private client: IConnectionTransport;
  constructor(client: IConnectionTransport) {
    this.client = client;
  }

  post(url: string, props?: TRequestProps): Promise<IResponseFormat> {
    const requestProps = new Formation({
      url,
      method: 'post',
      props,
    }).getProps();
    return this.client.request({
      ...requestProps,
    });
  }

  get(url: string, props?: TRequestProps): Promise<IResponseFormat> {
    const requestProps = new Formation({
      url,
      method: 'get',
      props,
    }).getProps();
    return this.client.request({
      ...requestProps,
    });
  }

  put(url: string, props?: TRequestProps): Promise<IResponseFormat> {
    const requestProps = new Formation({
      url,
      method: 'put',
      props,
    }).getProps();
    return this.client.request({
      ...requestProps,
    });
  }

  delete(url: string, props?: TRequestProps): Promise<IResponseFormat> {
    const requestProps = new Formation({
      url,
      method: 'delete',
      props,
    }).getProps();
    return this.client.request({
      ...requestProps,
    });
  }
}
