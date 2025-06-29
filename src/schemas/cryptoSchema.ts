import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  NAME: z.string(),
  SYMBOL: z.string(),
});

export const CryptoCurrenciesResponseSchema = z.object({
  Data: z.object({
    LIST: z.array(CryptoCurrencyResponseSchema),
  }),
});
