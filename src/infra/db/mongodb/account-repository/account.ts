import { AccountModel } from '../../../../core/entities/account'
import { AddAccountModel } from '../../../../core/usecases/add-account'
import { AddAccountRepository } from '../../../../dataproviders/protocols/add-account-respository'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { _id, ...accountWithoutId } = result.ops[0]
    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
