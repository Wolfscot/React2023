module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        companyName: {
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        companyLogo: {
            type: String,
            required: true
        },
        minPrice: {
            type: String,
            required: true
        },
        maxPrice: {
            type: String,
            required: true
        },
        salaryType: {
            type: String,
            required: true
        },
        jobLocation: {
            type: String,
            required: true
        },
        postingDate: {
            type: Date,
            default: new Date('2023-11-03')
        },
        experienceLevel: {
            type: String,
            required: true
        },
        employmentType: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        reviews: [{
            type: mongoose.Types.ObjectId,
            ref: "Review"
        }]

    })

    schema.pre('findOneAndDelete', async function () {
        const currentJob = this.getQuery()._id;
        await Review.deleteMany({ job: currentJob })

    })

    const Job = mongoose.model("Job", schema)
    return Job
}