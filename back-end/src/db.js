import {Sequelize} from 'sequelize'
import gerarDadosConsumo from './bulkdata.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
})

sequelize.sync()
export default sequelize

