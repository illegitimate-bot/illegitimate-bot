import Sequelize, { InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { sequelize } from "utils/Illegitimate"

interface Verify extends Model<InferAttributes<Verify>, InferCreationAttributes<Verify>> {
    userID: string
    uuid: string
}

const tag = sequelize.define<Verify>("verify", {
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
