const actions = require('./actions.js')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/home_page', async (req, res) => {
    const result = await actions.home_page(req.query.page)
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send({ error: 'not found.' })
    }
})

app.get('/gallery', async (req, res) => {
    const { id } = req.query;
    const result = await actions.gallery(id)
    if(result){
        result['images']['pages'] = result.getPages();
        res.status(200).send(result)
    }else{
        res.status(404).send({ error: 'not found.' })
    }
})

app.get('/random', async (req, res) => {
    const result = await actions.randomDoujin()
    if(result){
        res.status(200).send({ id: result.id })
    }else{
        res.status(404).send({ error: 'not found.' })
    }
})

app.get('/search', async (req, res) => {
    const { search_term, page, order } = req.query;
    const result = await actions.search(search_term, page, order)
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send({ error: 'not found.' })
    }
})

if (module === require.main) {
    // [START server]
    // Start the server
    const server = app.listen(process.env.PORT || 8080, () => {
      const port = server.address().port;
      console.log(`App listening on port ${port}`);
    });
    // [END server]
  }
  
  module.exports = app;