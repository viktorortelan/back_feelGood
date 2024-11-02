import database from "./conn.js";

const addPictureCorretor = async (value, reference) => {
    const cmd = `update tb_corretores set nm_foto = ? where id_corretor = ?`;
    const x = await database.query(cmd, [value, reference]);
    return x[0];
}

export default addPictureCorretor;