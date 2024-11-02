import database from "./conn.js";

export async function addFeed(id, comentario) {
    let comando = `
        insert into tb_feed_backs (id_cliente, ds_comentario)
            values(?, ?);
    `;
    let registro = await database.query(comando, [id, comentario]);
    let fim = registro[0];
    return fim.insertId;
}


export async function aparecerFeed() {
    let comando = `
    select
    c.nm_cliente as nome_cliente,
    f.ds_comentario as comentario,
    c.nm_foto as nome_foto FROM 
    tb_feed_backs f inner join 
    tb_cliente c on f.id_cliente = c.id_cliente
    limit 0, 500;
    `;   

    let registro = await database.query(comando);
    let fim = registro[0];
    return fim;
}

export async function apareceIndividual(id) {
    let comando = `
        select
        c.nm_cliente as nome_cliente,
        f.ds_comentario as comentario,
        c.nm_foto as nome_foto FROM 
        tb_feed_backs f inner join tb_cliente c on f.id_cliente = c.id_cliente
        where c.id_cliente = ?;
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return fim;
}