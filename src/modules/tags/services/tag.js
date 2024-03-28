
module.exports = {

    // Tags Methods
    async createTags(tags) {
        const allTags = [];
        const tagsToDelete = [];

        /* Find tags that all already present */
        await tags.forEach(tag => {
            tagsToDelete.push(this.findAll({
                where: {
                    name: tag
                }
            }))
        });

        /* Delete Tags that match the user input with tags in DB*/
        Promise.all(tagsToDelete)
            .then((tagsToDelete) => {
                tagsToDelete.forEach(tags => {
                    tags.forEach(eachTag => {
                        this.destroy({
                            where: {
                                id: eachTag.id
                            }
                        })
                    });
                })

            })
        /* I don't believe you need to catch within sequelize transactions as I think it jumps out to the catch on the transaction */

        /* Create all tags */
        tags.forEach(tag => {
            allTags.push(this.create({ name: tag }))
        });

        return Promise.all(allTags);
    },

    /* ------------------------------------------------------ */
}