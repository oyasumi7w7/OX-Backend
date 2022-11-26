
const app = require('./api/index')

const port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})