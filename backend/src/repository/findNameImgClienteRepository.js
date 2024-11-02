import database from "./conn.js";

const findImgCliente = async (reference) => {

    const cmd = `select nm_foto from tb_cliente where id_cliente = ?`;
    const x = await database.query(cmd, [reference]);
    return x[0][0];
}

export default findImgCliente;