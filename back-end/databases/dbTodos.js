const { pool } = require('./dbConnection')

const getTodos = async (id_user, id_todo = null) => {
    let toSql = "";
    if (id_todo) {
        toSql = `AND id_todo = "${id_todo}"`
    }
    try {
        const sql = `
        SELECT *
        FROM todos
        WHERE id_user = "${id_user}" 
        ${toSql}
        ORDER BY id_todo
        `
        const [res] = await pool.query(sql);
        console.log(res);
        return res;
    } catch (error) {
        return error.message
    }
}
const updateCompleted = async (id_user, ...args) => {
// let completed;
// let id_user
const [ all ] = [...args]
    try {
        const sql = `
        UPDATE todos
    SET completed = "${all.completed? 1:0}"
    WHERE id_user = "${id_user}"
    AND id_todo = "${all.id_todo}" `
        const [{ affectedRows }] = await pool.query(sql);
        if (affectedRows) return await getTodos(id_user,all.id_todo)
        return 'not update'
    } catch (error) {
        return error.message
    }
}
module.exports = {
    getTodos,
    updateCompleted
}