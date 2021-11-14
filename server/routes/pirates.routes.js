const PiratesController = require(`../controllers/pirates.controllers`)

module.exports = (app) => {
    app.get(`/pirates`, PiratesController.getAllPirates);
    app.get(`/pirates/:id`, PiratesController.getOnePirate)
    app.post(`/pirates/new`, PiratesController.createPirate);
    app.delete(`/pirates/:id`, PiratesController.deletePirate);
    app.put(`/pirates/:id`, PiratesController.updatePirate);
}

