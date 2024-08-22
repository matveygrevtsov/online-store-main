import z from 'zod';
import { Product, ProductScheme } from '../types';
import { database } from './index';

describe('Тестируем подключение к базе данных', () => {
  it('Проверяем метод для получения списка товаров', async () => {
    const products = await database.get<Product[]>('products');
    expect(products).not.toBe(undefined);
    expect(z.array(ProductScheme).safeParse(products).success).toBe(true);
  });
});
