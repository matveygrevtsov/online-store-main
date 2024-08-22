import z from 'zod';

export const ProductScheme = z.object({
  id: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
});

export type Product = z.infer<typeof ProductScheme>;

export enum RoutePath {
  SingIn = '/sign-in',
  SingUp = '/sign-up',
  Cart = '/cart',
  Main = '/main',
}

export enum ELocalStorageKey {
  UserData = 'UserData',
}

export interface UserAuthCredentials {
  email: string;
  password: string;
}
