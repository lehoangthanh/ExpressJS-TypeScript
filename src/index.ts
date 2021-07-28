require('dotenv').config()
import app from './App'
const port = process.env.PORT || 7000

app.listen(port, (err: object) => {
  if(err) console.log(err);

  return console.log(`server is listening on ${port}`)
})