const auth = async (_, { email }, { knex }) => {
  return await knex('users')
    .first('id', 'email', 'password', 'username', 'role')
    .where({
      email,
    });
};

const register = async (_, args, { knex }) => {
  let verify = await knex('users').first('email').where({
    email: args.email,
  });
  if (!verify) {
    await knex('users').insert(args);
    return false;
  }
  return true;
};

module.exports = {
  auth,
  register,
};
