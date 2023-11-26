const { pool } = require('./dbConnection')

const getPosts = async (id_user, id = null) => {
    let toSql = "";
    if (id) {
        toSql = `AND id = "${id}"`
    }
    try {
        const sql = `
        SELECT *
        FROM posts
        WHERE id_user = "${id_user}" 
        ${toSql}
        ORDER BY id;
        `
        const [res] = await pool.query(sql);
        console.log(res);
        return res;
    } catch (error) {
        return error.message
    }
}

module.exports = { getPosts }