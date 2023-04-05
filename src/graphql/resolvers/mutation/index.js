const { auth } = require('./auth');
const { editEmail, editPassword, editUsername, editAvatar } = require('./edit');
const { register } = require('./register');
const { description, languages } = require('./user');

module.exports = {
  auth,
  register,
  editEmail,
  editPassword,
  editUsername,
  editAvatar,
  description,
  languages,
};
