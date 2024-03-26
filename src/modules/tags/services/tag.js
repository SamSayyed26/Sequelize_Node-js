
module.exports = {

    // Tags Methods
    async createTags(tags) {
        const allTags = [];
        tags.forEach(element => {
            allTags.push(this.create({ name: element }))
        });
        return Promise.all(allTags);
    },

    /* ------------------------------------------------------ */
}