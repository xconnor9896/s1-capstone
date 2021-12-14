const addItem = async (req, res) => {
    res.send(`addItem`)
}

const removeItem = async (req, res) => {
    res.send(`removeItem`)
}

module.exports = { addItem, removeItem }