

function trimAndLowerCase(columnName) {
    return function (value) {
        this.setDataValue(columnName, value.trim().toLowerCase())
    }
}


module.exports = { trimAndLowerCase }