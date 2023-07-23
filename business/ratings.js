const { getAll, getRating, calculateRating } = require("../data/ratingModel");

async function getAllRatings() {
    return await getAll()
}

async function getRatingById(id) {
    return await getRating(id);
}   

async function calculateRatingByTranscript(id) {
    return await calculateRating(id);
}   

module.exports = {
    getAllRatings,
    getRatingById,
    calculateRatingByTranscript
};
