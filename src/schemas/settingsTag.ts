import Sequelize, { InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { sequelize } from "utils/Illegitimate.js"

interface Settings extends Model<InferAttributes<Settings>, InferCreationAttributes<Settings>> {
    name: string
    value: string
}

const tag = sequelize.define<Settings>("settings", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default tag
