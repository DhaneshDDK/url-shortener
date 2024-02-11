const USER = require('../Models/user')

exports.setUser = async (id,email)=>{
    await USER.findOneAndUpdate({email:email}, {
        token : id
    })
}

exports.getUser = async (id)=>{
    const res = await USER.findOne({token : id});
    return res;
}