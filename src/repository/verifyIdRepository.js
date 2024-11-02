import database from "./conn.js";

const verifyId = async (id) => {

    const cmd = `select * from tb_infos_imoveis where id_cardImovel = ?`;

    const x = await database.query(cmd, [id]);

    return x[0];

}

export default verifyId;