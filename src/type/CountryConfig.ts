type Code = `+${number | string}`;

export type CountryConfig = {
  /**
   * Unicode flag emoji representation (e.g., "🇫🇷" for France)
   */
  flag: string;
  /**
   * Country dialing code (e.g., "+33" for France).
   * A template literal type that ensures all country codes start
   * with a + symbol, followed by numbers or other characters.
   */
  code: Code;
  /**
   * Full country name
   */
  name: string;
  /**
   * Optional formatting pattern for phone numbers
   * @example
   * mask: '__-___-____'
   */
  mask?: string;
};