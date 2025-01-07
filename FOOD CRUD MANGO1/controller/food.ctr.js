const {read_file} = require('../api/api')
const Food = require('../model/task')
const asyncWrapper = require('../middleware/async')


const getData =  asyncWrapper (async (req, res) => {
  const task = await Food.find().lean()
  console.log(task);
  res.status(200).json({task})
})

const getOne = asyncWrapper(async (req, res, next) => {
const {id: taskID} = req.params
const task = await Food.findOne({_id: taskID})
if(!task){
  return next(res.status(404).json({message: 'no value found'}))
}
res.status(200).json({task})
})

const addData = asyncWrapper (async (req, res) => {
    const task = await Food.create(req.body)
    res.status(201).json({task})
})

const updateData = asyncWrapper( async (req, res, next) => {
const {id: taskId} = req.params
const task = await Food.findByIdAndUpdate({_id: taskId}, req.body, {
    new: true,
    runValidators: true
})
if(!task){
    return next(res.status(404).json({message: 'not found searched value'}))
}
res.status(201).json({task})
})

const deleteData = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params
    const task = await Food.findByIdAndDelete({_id: taskID})
    if(!task){
        return next(res.status(404).json({message: 'not deleted'}))
    }
    res.status(200).json({message: 'deleted successfully', task})
})

module.exports = {
    getData,
    getOne,
    addData,
    updateData,
    deleteData

}