const allStudent = (req, res) => {
    res.send("Show Students")
}
const addStudent = (req, res) => {
    res.send("Add Students")
}
module.exports = {
    allStudent,
    addStudent,
}