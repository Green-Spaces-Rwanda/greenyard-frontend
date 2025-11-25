export type GetProductsQuery = {
  search?: string;
  category?: 'FLOWERS' | 'SEEDLINGS';
  inStock?: boolean;
  featured?: boolean;
  page?: number;
  pageSize?: number;
  sortBy?: 'name' | 'price' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
};

import { Product } from '../types';
import { BASE_URL, buildApiUrl } from './apiConfig';

export async function fetchProducts(query: GetProductsQuery): Promise<{ products: Product[]; pagination: any }>{
  const params = new URLSearchParams();
  if (query.search) params.set('search', query.search);
  if (query.category) params.set('category', query.category);
  if (typeof query.inStock === 'boolean') params.set('inStock', String(query.inStock));
  if (typeof query.featured === 'boolean') params.set('featured', String(query.featured));
  if (query.page) params.set('page', String(query.page));
  if (query.pageSize) params.set('pageSize', String(query.pageSize));
  if (query.sortBy) params.set('sortBy', query.sortBy);
  if (query.sortOrder) params.set('sortOrder', query.sortOrder);

  const res = await fetch(buildApiUrl(`/products?${params.toString()}`));
  if (!res.ok) throw new Error('Failed to fetch products');
  const json = await res.json();
  return { products: json.data as Product[], pagination: json.pagination };
}

export async function fetchCategories(): Promise<{ category: 'FLOWERS' | 'SEEDLINGS'; count: number }[]>{
  const res = await fetch(buildApiUrl('/products/categories'));
  if (!res.ok) throw new Error('Failed to fetch categories');
  const json = await res.json();
  return json.data as { category: 'FLOWERS' | 'SEEDLINGS'; count: number }[];
}

export async function fetchProductById(id: string): Promise<Product>{
  const res = await fetch(buildApiUrl(`/products/${id}`));
  if (!res.ok) throw new Error('Failed to fetch product');
  const json = await res.json();
  return json.data as Product;
}

export function toImageUrl(path?: string): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}


