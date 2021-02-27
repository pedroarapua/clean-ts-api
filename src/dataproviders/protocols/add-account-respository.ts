import { AddAccountModel } from '../../core/usecases/add-account'
import { AccountModel } from '../../core/entities/account'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
