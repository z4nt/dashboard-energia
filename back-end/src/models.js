import sequelize from './db.js'
import { DataTypes } from 'sequelize'
import gerarDadosConsumo from './bulkdata.js'

const Consumo = sequelize.define('Consumo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    consumo_kwh: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },  
},{
    tableName: 'Consumo'  // Define o nome da tabela como 'user' (no singular)
  })
 



export default Consumo;

