import express from 'express'

const app = express()
app.listen(process.env.PORT || 5050, () => console.log('Server running at http://localhost:5050'))
