const mainController = {
    async index(req, res) {
        try {
            res.send('Connected to the API');
        } catch (error) {
            console.trace(error);
            res.status(500).json("Error server");
        }
    },
}

module.exports = mainController;