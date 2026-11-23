import { useQuery } from '@tanstack/react-query';

import { productService } from
  '../services/product.service';

import { productKeys } from './product-keys';

export function useProducts() {
  return useQuery({
    queryKey: productKeys.list(),

    queryFn: productService.getProducts,
  });
}