require("../db/mongoose_config")
const User = require('../models/user');

/* User.findOneAndUpdate({_id: '60db6f26739e8c8bb81d4b1f'},{age: 30}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 30})
}).then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
}) */

const updateUserAndCount = async(id,age)=>{
    const user = await User.findOneAndUpdate({_id: id},{age});
    const count = await User.countDocuments({age});
    return {
        user,
        count
    }
}

updateUserAndCount('60db6f26739e8c8bb81d4b1f',35).then((usrObj)=>{
    console.log(usrObj.user);
    console.log(usrObj.count)
}).catch((error)=>{
    console.log(error)
})