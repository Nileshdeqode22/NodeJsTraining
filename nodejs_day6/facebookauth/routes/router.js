import passport from 'passport';
import express from 'express';

const router = express.Router();

// @route   GET api/users/current
router.get('/', (_req, res) => {
  res.render('index.ejs');
});
//check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

//get profile data from facebook
router.get('profile', isLoggedIn, function (req, res) {
  //get user out of session and pass to template
  res.render('profile.ejs', { user: req.user });
});
//router for error page
router.get('/error', isLoggedIn, (_req, res) => {
  res.render('error.ejs');
});
//authenticate with facebook
router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email'],
  })
);
//handle callback after facebook has authenticated the user
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/error',
  })
);
//logout route for facebook
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
