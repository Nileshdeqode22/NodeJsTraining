import bcrypt from 'bcrypt';
import register from '../model/register';

const registerNewUser =
  ('/users/register',
  async (req, res) => {
    try {
      const { username, email, password, password2 } = req.body;

      const errors = [];

      console.log('line number85', {
        username,
        email,
        password,
        password2,
      });

      if (!username || !email || !password || !password2) {
        errors.push({ message: 'Please enter all fields' });
      }

      if (password.length < 6) {
        errors.push({ message: 'Password must be a least 6 characters long' });
      }

      if (password !== password2) {
        errors.push({ message: 'Passwords do not match' });
      }

      if (errors.length > 0) {
        res.render('register', {
          errors,
          username,
          email,
          password,
          password2,
        });
      } else {
        //check if email is already in use
        const user = await register.findOne({ where: { email } });
        if (user) {
          errors.push({ message: 'Email is already in use' });
          res.render('register', {
            errors,
            username,
            email,
            password,
            password2,
          });
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          const registerUser = await register.create({
            username,
            email,
            password: hashedPassword,
          });
          registerUser.save();
          req.flash('success_msg', 'You are now registered and can log in');
          res.redirect('/users/login');
        }
      }
    } catch (error) {
      console.error(`Error caught: ${error.message}`);
    }
  });

export default registerNewUser;
