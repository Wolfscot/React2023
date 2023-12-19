module.exports = (Review) => {
    async function compareOwners(userId, reviewId) {
        const owner = await Review.findById(reviewId).select('owner').lean()
        const ownerId = owner?.owner
        return userId == ownerId
    }

    return {
        review: async (post, user, text) => {
            const review = new Review({ post, user, text })
            await review.save()

            return review.populate('user', '_id username')
        },
        getReviewsForJob: async (post) => {
            const reviews = Review.find({ post }).populate('user', '_id username')
            return reviews
        },
        edit: async (_id, user, text) => {
            const isOwner = compareOwners(user, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            const updatedReview = await Review.findByIdAndUpdate(_id, { text }, { new: true })
            return updatedReview
        },
        delete: async (_id, user) => {
            const isOwner = compareOwners(user, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            return await Review.findByIdAndDelete(_id)
        }
    }
}