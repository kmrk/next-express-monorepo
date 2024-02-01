import * as t from 'io-ts';


export interface PhoneNumberC extends t.Type<string, string, unknown> { };

const isChinesePhoneNumber = (s: unknown): s is string => typeof s === "string" && /^[1][3,4,5,7,8][0-9]{9}$/.test(s);

export const PhoneNumber: PhoneNumberC = new t.Type<string, string, unknown>(
  'PhoneNumber',
  t.string.is,
  (u, c) => isChinesePhoneNumber(u) ? t.success(u) : t.failure(u, c, 'Wrong Mobile Number'),
  t.identity
); 