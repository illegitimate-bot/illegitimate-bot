import Sequelize, { InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { sequelize } from "utils/Illegitimate.js"

interface StaffApp extends Model<InferAttributes<StaffApp>, InferCreationAttributes<StaffApp>> {
    userID: string
    uuid: string
}

const tag = sequelize.define<StaffApp>("staffApp", {
    userID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default tag
