import { users } from "../db/schema";
import * as t from 'io-ts';
import { PhoneNumber } from "./types/PhoneNumber";

export type UserSchema = typeof users.$inferSelect;


//FIXME 动态根据type生成 io-ts type

export const UserCodec = t.type({
  phone: PhoneNumber,
  password: t.string
});

export type UserDTO = t.TypeOf<typeof UserCodec>;