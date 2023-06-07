/* eslint-disable @typescript-eslint/no-unused-vars */
import { AccountModel } from '../models/account-modal'
import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'

export const mockAuthenication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
