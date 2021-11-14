const Pirate = require(`../models/pirates.module`)

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
    .then(newPirate=> res.json(newPirate))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPirates = (req, res) => {
    Pirate.find()
    .then(pirates=> res.json(pirates))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.id})
    .then(delCount => res.json(delCount))
    .catch(err => res.json(err))
}

module.exports.getOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
    .then(pirate => res.json(pirate))
    .catch(err => res.json(err))
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then(updatedPirate => res.json(updatedPirate))
    .catch(err => res.status(400).json(err));
}