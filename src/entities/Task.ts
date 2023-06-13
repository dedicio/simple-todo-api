import ITask from './ITask'

export default class Task {
  private _id: string
  private _description: string
  private _done: boolean

  constructor({
    id, description, done
  }: ITask) {
    this._id = id
    this._description = description
    this._done = done
  }

  get id() : string {
    return this._id
  }

  set id(value : string) {
    this._id = value
  }
  
  get description() : string {
    return this._description
  }
  
  set description(value : string) {
    this._description = value
  }

  get done() : boolean {
    return this._done
  }

  set done(value : boolean) {  
    this._done = value
  }
}