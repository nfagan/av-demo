const fs = require('fs')
const express = require('express')
const app = express()

const sendFileOr404 = (res, filename) => {
	fs.stat(filename, (err, stat) => {
		if (err === null) {
			res.sendFile(filename, {root: __dirname})
			return
		}
		res.status(404).send(`Resource "${filename}" not found.`)
	})
}

app.get('/', (req, res) => {
	res.sendFile('index.html', {root: __dirname})
})

app.get('/sounds/:soundName', (req, res) => {
	var filename = 'res/audio/' + req.params.soundName
	sendFileOr404(res, filename)
})

app.get('/js/:script', (req, res) => {
	var script = 'dist/' + req.params.script
	sendFileOr404(res, script)
})

app.listen(process.env.PORT || 3000, () => console.log('Listening ...'))