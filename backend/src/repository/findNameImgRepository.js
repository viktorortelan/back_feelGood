import database from "./conn.js";

const find = async (reference) => {

    const cmd = `select nm_foto from tb_corretores where id_corretor = ?`;
    const x = await database.query(cmd, [reference]);
    return x[0][0];
}

export default find;