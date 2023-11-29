const{ pool }= require('./dbConnection')

const getUser = async (name,password) => {
    try {
    const sql = `
    SELECT id_user,
       username,
       name,
       email,
       phone,
       address
    FROM users
    WHERE name = "${name}"
    AND password = "${password}"`;
    
    const [[res]] = await pool.query(sql);
    console.log(res);
    return res;
    } catch (error) {
    return error.message
    }
    }
    const getUsername = async (name,username) => {
      try {
      const sql = `
      SELECT id_user,
         username,
         name,
         email,
         phone,
         address
      FROM users
      WHERE name = "${name}"
      AND username = "${username}"`;
      
      const [[res]] = await pool.query(sql);
      console.log(res);
      return res;
      } catch (error) {
      return error.message
      }
      }
    module.exports ={ getUser, getUsername}