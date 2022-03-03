const Model = require('./candidateModelTable');
const NotFound = require('../../errors/NotFound');
module.exports = {
  list() {
    return Model.findAll({
      raw: true
    });
  },

  insert(candidate) {
    return Model.create(candidate);
  },

  async getById(id) {
    const found = await Model.findOne({
      where: {
        id: id
      }
    })

    if (!found) {
      throw new NotFound()
    }

    return found
  },

  async update(id, votes) {
    return Model.update(
      votes,
      {
        where: { id: id }
      }
    )
  },

  delete(id) {
    return Model.destroy({
      where: {
        id: id
      }
    })
  }
}