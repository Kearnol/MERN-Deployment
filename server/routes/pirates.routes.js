const PiratesController = require(`../controllers/pirates.controllers`)

module.exports = (app) => {
    app.get(`/api/pirates`, PiratesController.getAllPirates);
    app.get(`/api/pirates/:id`, PiratesController.getOnePirate)
    app.post(`/api/pirates/new`, PiratesController.createPirate);
    app.delete(`/api/pirates/:id`, PiratesController.deletePirate);
    app.put(`/api/pirates/:id`, PiratesController.updatePirate);
}

