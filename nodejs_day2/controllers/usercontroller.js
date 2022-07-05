import fs from 'fs';
import brcypt from 'bcrypt';
import { isMatch } from 'lodash';

//login user.json file to check if user name and password is correct if correct return user name and email
exports.login= (req, res) => {
     const user = req.body;
        const userData = JSON.parse(fs.readFileSync('/home/deq/NodeJsTraining/nodejs_day2/user.json'));
        for (let data of userData) {
            if (data.email === user.email && brcypt.compareSync(user.password, data.password)) {
                res.json({
                    message: "Login Successful",
                    data: data
                });
                return;
            }
        }
        res.json({
            message: "Login Failed"
        });
}

//register user.json file to store a user name email and password if not already exists if exits return error message
exports.register=(req,res)=>{
    const user = req.body;
    const userData = JSON.parse(fs.readFileSync('/home/deq/NodeJsTraining/nodejs_day2/user.json'));
        switch (true) {
            //all fields mandatory
            case !user.username:
                res.json({
                    message: " userName is mandatory"
                });
                return;
            case !user.email:
                res.json({
                    message: "Email is mandatory"
                });
                return;
            case !user.password:
                res.json({
                    message: "Password is mandatory"
                });
                return;
            //check email is valid
            case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email):
                res.json({
                    message: "Email is not valid"
                });
                return;
            //check password is valid
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(user.password):
                if (user.password.length < 8) {
                    res.json({
                        message: "Password must be at least 8 characters long"
                    });
                    return;
                }else if(!/[a-z]/.test(user.password)){

                    res.json({
                        message: "Password must contain at least one lowercase letter"
                    });
                    return;
                }else if(!/[A-Z]/.test(user.password)){
                    res.json({
                        message: "Password must contain at least one uppercase letter"
                    });
                    return;
                }
                else if(!/\d/.test(user.password)){
                    res.json({
                        message: "Password must contain at least one number"
                    });
                    return;
                }else if(!/[@$!%*?&]/.test(user.password)){
                    res.json({
                        message: "Password must contain at least one special character"
                    });
                    return;
                }

           //check if email already exists
            case userData.some(data => data.email === user.email):
                res.json({
                    message: "Email already exists"
                });
                return;
        }
        brcypt.hash(user.password, 16, (err, hash) => {
        if (err) {
            return res.status(400).json({ message: "Error hashing password" });
        }
        user.password = hash;
        userData.push(user);
        fs.writeFileSync('/home/deq/NodeJsTraining/nodejs_day2/user.json', JSON.stringify(userData));
        res.status(200).json("Registration Successful");
    });
}

//get all users using generic function js
exports.getAllUsers = (req, res) => {
    const userData = JSON.parse(fs.readFileSync('/home/deq/NodeJsTraining/nodejs_day2/user.json'));
    res.json(userData);
}


