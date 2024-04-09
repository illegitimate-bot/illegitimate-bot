import Sequelize, { InferAttributes, InferCreationAttributes, Model } from "sequelize"
import { sequelize } from "utils/Illegitimate"

interface WaitingList extends Model<InferAttributes<WaitingList>, InferCreationAttributes<WaitingList>> {
    userID: string;
    uuid: string;
    timestamp: number;
}

const tag = sequelize.define<WaitingList>("waitingList", {
    userID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default tag
