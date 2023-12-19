module.exports = (Job) => {
    async function compareOwners(userId, jobId) {
        const owner = await Post.findById(jobId).select('owner').lean()
        const ownerId = owner?.owner
        return userId == ownerId
    }
    return {
        create: async function (imageUrl, brand, model, productionYear, description, createdAt, owner) {
            const newJob = new Job({ imageUrl, brand, model, productionYear, description, createdAt, updatedAt: createdAt, owner })
            await newJob.save()

            return newJob
        },
        getAll: async function () {
            return Job.find().select('_id imageUrl brand model productionYear description owner')
        },
        
        edit: async function (userId, _id, data) {
            const isOwner = await compareOwners(userId, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            const updatedJob = Job.findByIdAndUpdate(_id, data)
            return updatedJob
        },
        delete: async function (userId, _id) {
            const isOwner = compareOwners(userId, _id)

            if (!isOwner) {
                throw new Error("Unauthorized")
            }

            await Job.findByIdAndDelete(_id)
            return {}
        },
       
        review: async function (_id, reviewId, action) {
            const job = await Job.findById(_id)
            if (action == "1") {
                job.reviews.push(reviewId)
            } else {
                const index = job.reviews.indexOf(reviewId)
                job.reviews.splice(index, 1)
            }
            job.save()
        }
       
    }
}