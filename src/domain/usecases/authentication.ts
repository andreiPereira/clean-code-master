/* eslint-disable @typescript-eslint/no-unused-vars */
import { AccountModel } from '../models/account-modal'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
