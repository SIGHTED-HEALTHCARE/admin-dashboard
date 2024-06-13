import axios from 'axios';
import { AxiosHttpClient, HttpClient } from './httpClient';
import { NodeApi } from './nodeApi';
import { NodeDataSource } from './dataSource/NodeDataSource';

interface IApiClient {
  node(): NodeApi;
}

class ApiClient implements IApiClient {
  private nodeApi: NodeApi;

  constructor(httpClient: HttpClient) {
    this.nodeApi = new NodeDataSource(httpClient);
  }

  node() {
    return this.nodeApi;
  }
}

const apiClient = new ApiClient(new AxiosHttpClient(axios));

export default apiClient;
