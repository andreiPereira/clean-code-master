/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'

export const mockAuthenication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
