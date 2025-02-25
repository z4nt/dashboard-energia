import express from 'express'
import cors from 'cors'
import sequelize from './db.js'
import routes from './routes.js'
import Consumo from './models.js'
import gerarDadosConsumo from './bulkdata.js'


const app = express()
app.use(express.json())
app.use(cors())
sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  }).catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });

app.use('/api', routes)

app.listen(3001, () => {
  console.log('Server is running on port 3000')
})


export default app
