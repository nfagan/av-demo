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

app.get('/demos', (req, res) => {
	res.sendFile('demos.html', {root: __dirname})
})

app.get('/', (req, res) => {
	res.sendFile('index.html', {root: __dirname})
})

app.get('/tex/:texName', (req, res) => {
	var texPath = req.params.texName.replace(':', '/')
	var filename = 'res/textures/' + texPath
	sendFileOr404(res, filename)
})

app.get('/obj/:objName', (req, res) => {
	var objPath = req.params.objName.replace(':', '/')
	var filename = 'res/models/' + objPath
	sendFileOr404(res, filename)
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