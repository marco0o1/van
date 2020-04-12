const homePage = (req, res) => {
    console.log("jorgenoselacome")
    res.render('index', { title: "Marco's Place" });
}

module.exports = {
    homePage
}