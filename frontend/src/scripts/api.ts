import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async getObject<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(endpoint);
    return response.data;
  }

  public async getArray<T> (endpoint: string): Promise<T[]> {
    const response: AxiosResponse<T[]> = await this.axiosInstance.get(endpoint);
    return response.data;
  }
  // Другие методы (post, put, delete) могут быть добавлены здесь

  public async fetchObject<T>(
    this: ApiService,
    endpoint: string,
    dataRef: { value: T },
    loading: { value: boolean },
    error: { value: string | null }
  ) 
  {
    loading.value = true;
    error.value = null;
  
    try {
      dataRef.value = await this.getObject<T>(endpoint);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('Ошибка при получении данных:', e.message);
      error.value = e.message || 'Произошла ошибка при загрузке данных.';
    } finally {
      loading.value = false;
    }
  };

  public async fetchArrayOfObjects<T>(
    this: ApiService,
    endpoint: string,
    dataRef: { value: T[] },
    loading: { value: boolean },
    error: { value: string | null }
  ) 
  {
    loading.value = true;
    error.value = null;
  
    try {
      dataRef.value = await this.getArray<T>(endpoint);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('Ошибка при получении данных:', e.message);
      error.value = e.message || 'Произошла ошибка при загрузке данных.';
    } finally {
      loading.value = false;
    }
  };
}
