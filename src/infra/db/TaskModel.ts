import { Schema, model } from 'mongoose'
import ITask from '../../entities/ITask'

const taskSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const TaskModel = model<ITask>('Task', taskSchema)

export default TaskModel
