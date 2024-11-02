import database from "../repository/conn.js";


export async function emailExistente(email, id) {
    const query = 'select count(*) as count from tb_cliente where ds_email = ? and id_cliente != ?';
    const [rows] = await database.query(query, [email, id]);
    return rows[0].count > 0;
}


export async function telefoneExistente(telefone, id) {
    const query = 'select count(*) as count from tb_cliente where ds_telefone = ? and id_cliente != ?';
    const [rows] = await database.query(query, [telefone, id]);
    return rows[0].count > 0;
}
