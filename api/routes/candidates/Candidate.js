const EmptyField = require('../../errors/EmptyField')
const InvalidField = require('../../errors/InvalidField')
const NoDataWasSent = require('../../errors/NoDataWasSent')
const candidateTable = require('./candidatesTable')

class Candidate {
  constructor({ id, name, votes, createdAt, updatedAt }) {
    this.id = id
    this.name = name
    this.votes = votes
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  async create() {
    this.validate();

    const results = await candidateTable.insert({
      name: this.name,
    })

    this.id = results.id
    this.createdAt = results.createdAt
    this.updatedAt = results.updatedAt
  }

  async load() {
    const foundSupplier = await candidateTable.getById(this.id)
    this.name = foundSupplier.name
    this.createdAt = foundSupplier.createdAt
    this.updatedAt = foundSupplier.updatedAt
  }

  async delete() {
    return candidateTable.delete(this.id);
  }


  validate() {
    const fields = ['name'];

    fields.forEach(field => {
      const value = this[field]
      if (typeof value !== 'string') {
        throw new InvalidField(field)
      }
      if (value.length === 0) {
        throw new EmptyField(field)
      }
    })
  }

}
module.exports = Candidate;