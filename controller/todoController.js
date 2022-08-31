const todolists = require("../model/todoSchema")

const createTodo = async(req,res)=>{
    const{title,body} = req.body
    try {
        if (!title || !body) {
            res.status(404).json({msg:"please provide both title and body"})
        }
        const todolist = await todolists.create({title, body})
        res.status(200).json(todolist)
    } catch (error) {
        console.log(error);
    }
}
const getAll = async(req, res)=>{
    const data = await todolists.find()
    res.status(200).json(data)
}
const singleTodo = async (req, res)=>{
    const {id} = req.params
    const singlUser = await todolists.findById(id)
    if(singlUser){
        return res.status(200).json(singlUser)
    }
    res.status(404).json({msg:"todoList does not exist"})
}
const deleteOne = async(req, res)=>{
    const {id} = req.params
    const singlUser = await todolists.findById(id) 
    if(singlUser){
        const singlUser = await todolists.findByIdAndDelete(id)
        const data = await todolists.find()
        return res.status(200).json(singlUser)
    }
    res.status(200).json({msg:"User doesnot exist"})
}
const updateOne = async(req,res)=>{
    const {id} = req.params
    const {title, body, completed} = req.body
    const singlUser = await todolists.findById(id)
    if(singlUser){
        if(title || body || completed){
            const singleUpdate = await todolists.findByIdAndUpdate(singlUser, {title, body, completed}, {
                new:true, runValidators:true
                //overWrite:true
            })
            return res.status(200).json({singlUser, singleUpdate})
        }
        return res.status(404).json({msg:"please provide atleast one input"})
    } 
    res.status(404).json({msg:" todolist doesnt exist"})
}
module.exports = {createTodo, getAll, singleTodo, deleteOne, updateOne};