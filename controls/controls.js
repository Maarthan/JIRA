const UserItem = require('../models/user-model');

const getUsers = async (req,res,next)=>{
    try{
        let users = await UserItem.find({});
        return res.send(users);
    }
    catch(err){
        return res.json({err});
    }   
}

const postUsers = async (req,res,next)=>{
    try{
        let newUser = new UserItem(req.body);
        await newUser.save();
        return res.send(newUser);
    }
    catch(err){
        return res.json({err});
    }   
}

const getSingleUser = async (req,res,next)=>{
    try{
        let user = await UserItem.findOne({
            _id:req.params.id
        });
        return res.send(user);
    }
    catch(err){
        return res.json({err});
    }   
}

const updateSingleUser = async (req,res,next)=>{
    try{
        let user = await UserItem.findOneAndUpdate({
            _id:req.params.id
        },{$set:req.body});
        return res.send(user);
    }
    catch(err){
        return res.json({err});
    }   
}

const deleteSingleUser = async (req,res,next)=>{
    try{
        let user = await UserItem.findOneAndDelete({
            _id:req.params.id
        });
        return res.send(user);
    }
    catch(err){
        return res.json({err});
    }   
}

module.exports = {
    getUsers,
    postUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser
}