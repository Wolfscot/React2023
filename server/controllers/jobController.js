module.exports = (router, jobManager, authMiddlewear) => {
    router.get("/", async (req, res) => {
        const jobs = await jobManager.getAll()

        try {
            res.status(200).send(jobs)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.post("/create", authMiddlewear, async (req, res) => {
        const { 
            companyName,
            jobTitle,
            companyLogo,
            minPrice,
            maxPrice,
            salaryType,
            jobLocation,
            postingDate,
            experienceLevel,
            employmentType,
            description,
            
         } = req.body

        try {
            const owner = req.user
            const job = await jobManager.create( companyName,
                jobTitle,
                companyLogo,
                minPrice,
                maxPrice,
                salaryType,
                jobLocation,
                postingDate,
                experienceLevel,
                employmentType,
                description,
                owner)

            res.status(200).send(job)
        } catch (err) {
            res.status(404).send(err.message)
        }

    })
 

    router.put("/:_id", authMiddlewear, async (req, res) => {
        const _id = req.params._id
        const data = req.body

        try {
            const userId = req.user
            const job = await jobManager.edit(userId, _id, data)
            res.status(200).send(job)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.delete("/:_id", authMiddlewear, async (req, res) => {
        const _id = req.params._id

        try {
            const userId = req.user
            const job = await jobManager.delete(userId, _id)
            res.status(200).send(job)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    router.get('/:_id', async (req, res) => {
        const _id = req.params._id

        try {
            const job = await jobManager.getOne(_id)
            res.status(200).send(job)
        } catch (err) {
            res.status(404).send(err.message)
        }
    })

    

    return router
}