import { TRequestProps } from './TRequestProps';
import qs from 'qs';
import { IConnectionProps } from './IConnectionProps';

export class Formation {
  private url: string;
  private props: TRequestProps;
  private method: string;
  constructor({
    url,
    method,
    props = {},
  }: {
    url: string;
    method: string;
    props?: TRequestProps;
  }) {
    this.url = url;
    this.props = props;
    this.method = method;
  }

  getProps(): IConnectionProps {
    const {
      headers = {},
      body = null,
      params = null,
      ...anotherProps
    } = this.props;
    const urlParams = qs.stringify(params);
    let urlWithParams = this.url;
    if (urlParams) urlWithParams += `?${urlParams}`;
    const requestProps: IConnectionProps = {
      method: this.method,
      url: urlWithParams,
      headers: {
        ...headers,
      },
      ...anotherProps,
    };
    if (body) requestProps.body = body;
    return requestProps;
  }
}
