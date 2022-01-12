import { Sequelize } from 'sequelize'

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false // Default, displays the first parameter of the log function call
})

export default db
