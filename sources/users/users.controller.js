import Users from './users.model.js'

module.exports = {
  list,
  get,
  create,
  disable,
}

function list(req, res) {
  Users
    .find({active: {$ne: false}})
    .then(users => res.json(users))
}

function get(req, res) {
  Users
    .findById(req.params.id)
    .then(user => res.json(user))
}

function create(req, res) {
  console.log(req.body)

  const user = Users(req.body)

  user
    .save()
    .then(() => res.status(201).json({message: 'created'}))
    .catch((err) => {
      console.log(err);
      res.status(400).json({message: err.message})
    })
}

function disable(req, res) {
  Users
    .findByIdAndUpdate(req.params.id, {$set: {active: false}})
    .then(() => res.json({message: 'deleted'}))
}