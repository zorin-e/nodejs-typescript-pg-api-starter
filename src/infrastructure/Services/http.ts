import { HttpTransport, FetchClient } from '@/infrastructure/HttpTransport';
const http = new HttpTransport(new FetchClient());
export { http };
