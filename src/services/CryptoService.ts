import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/cryptoSchema";

export async function getCryptos() {
  const url =
    "https://data-api.coindesk.com/asset/v1/top/list?page=1&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD&page_size=20";
  const { data } = await axios(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(data);
  if (result.success) {
    console.log(data.Data.LIST);
    return result.data.Data.LIST;
  } else {
    console.log(result.error);
  }
}
