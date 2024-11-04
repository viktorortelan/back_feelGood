import database from "./conn.js";

const addPictureCliente = async (value, reference) => {
    const cmd = `update tb_cliente set nm_foto = ? where id_cliente = ?`;
    const x = await database.query(cmd, [value, reference]);
    return x[0];
}

export default addPictureCliente;