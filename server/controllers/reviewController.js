module.exports = (router, reviewManager, jobManager, authMiddlewear) => {
    router.post('/:jobId', authMiddlewear, async (req, res) => {
        const job = req.params.jobId
        const { text } = req.body

        try {
            const user = req.user
            const review = await reviewManager.review(job, user, text)
            jobManager.review(job, review._id, "1")

            res.status(200).send(review)
        } catch (err) {
            res.status(401).send(err.message)
        }
    })

    router.get('/:jobId', async (req, res) => {
        const job = req.params.jobId

        try {
            const reviews = await reviewManager.getReviewsForJob(job)

            res.status(200).send(reviews)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.put('/:_id', authMiddlewear, async (req, res) => {
        const _id = req.params._id
        const { text } = req.body

        try {
            const user = req.user
            const review = await reviewManager.edit(_id, user, text)

            res.status(200).send(review)
        } catch (err) {
            res.status(401).send(err.message)
        }
    })

    router.delete('/:_id', authMiddlewear, async (req, res) => {
        const _id = req.params._id

        try {
            const user = req.user
            const review = await reviewManager.delete(_id, user)
            jobManager.review(review.job, review._id, "-1")

            res.status(200).send({})
        } catch (err) {
            res.status(401).send(err.message)
        }
    })
    return router

}
