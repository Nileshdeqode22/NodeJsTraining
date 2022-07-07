import brcypt from 'bcrypt';
import register from "../model/register";

//login if email and password is correct using login db model
exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email === "" || password === "") {
        res.json({
            message: "Please enter email and password"
        });
    }
    else {
        //if email and password with bcrypt compaire with db is correct retrun 200 and login success
        register.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if (user) {
                brcypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        res.status(200).json({
                            message: "Login Successful"
                        });
                    } else {
                        res.status(401).json({
                            message: "Login Failed"
                        });
                    }
                });
            } else {
                res.status(401).json({
                    message: "Login Failed"
                });
            }
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
    }
}
           
//register user with register db model store password in hash format
exports.register = (req, res) => {
    const { username, email, password } = req.body;
    const hash = brcypt.hashSync(password, 10);
    //check if email,username and password is not empty if empty return error please fill all fields
    if (username === "" || email === "" || password === "") {
        res.status(401).json({
            message: "Please fill all fields"
        });
    }
    else {
        //check if email is already exist if exist return error email already exist
        register.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if (user) {
                res.status(401).json({
                    message: "Email already exist"
                });
            } else {
                //check password regex if not match return error password must be at least 8 characters, contain at least one number and one special character
                if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                    res.status(401).json({
                        message: "Password must be at least 8 characters, contain at least one number and one special character"
                    });
                }
                else {
                    //if all fields are filled and password is match with regex then store user in register db model
                    Register.create({
                        username: username,
                        email: email,
                        password: hash

                    }).then(user => {
                        res.status(201).json({
                            message: "Register Successful",
                            user: user
                        });
                    }
                    ).catch(err => {
                        res.status(401).json({
                            message: "Register Failed"
                        });
                    }
                    );
                }
            }
        }
        ).catch(err => {
            res.status(500).json({
                message: "Register Failed"
            });
        }
        );
    }
}                       
//get all users using generic function js
exports.getAllUsers = (req, res) => {
    register.findAll().then(user => {
        res.status(200).json({
            message: "All users",
            user: user
        });
    }
    ).catch(err => {
        res.status(500).json({
            message: "Error"
        });
    }
    );
}


