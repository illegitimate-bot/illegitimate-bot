import Sequelize, { InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { sequelize } from "utils/Illegitimate"

interface GuildApp extends Model<InferAttributes<GuildApp>, InferCreationAttributes<GuildApp>> {
    userID: string
    uuid: string
}

const tag = sequelize.define<GuildApp>("guildApp", {
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
