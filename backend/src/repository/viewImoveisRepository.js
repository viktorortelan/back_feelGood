import database from "./conn.js";

const viewImoveis = async () => {

  const cmd = `select * from tb_infos_imoveis`;

  let x = await database.query(cmd, []);

  return x[0];

}

export default viewImoveis;