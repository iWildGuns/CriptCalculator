import { useCryptoStore } from "../store";
import { currencies } from "../data";

export default function CriptoSearchForm() {
  const cryptoCurrency = useCryptoStore((state) => state.cryptoCurrencies);

  return (
    <form action="" className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptoCurrency">Cripto:</label>
        <select name="criptoCurrency" id="criptoCurrency">
          <option value="">-- Seleccione --</option>
          {cryptoCurrency.map((crypto) => (
            <option value={crypto.NAME} key={crypto.SYMBOL}>
              {crypto.NAME}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
