const express = require('express');
const app = express()
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
	res.send("hello");
})

app.get('/api', (req, res) => {
	try {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
			res.status(201).send('ok')
			res.send(JSON.stringify({"name": "hello!"}))
		} catch (error) {
			console.error(error)
		}

})

app.listen(3001)