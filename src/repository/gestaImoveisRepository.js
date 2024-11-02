import database from "./conn.js";

export async function GestaoImoveisBuscar() {
    let comando = `
        select tb_infos_imoveis.id_cardImovel   id, 
                tb_infos_imoveis.nm_apartamento  imovel, 
                tb_infos_imoveis.st_status   status, 
                tb_corretores.nm_adm   corretor,
                vendido
        from tb_infos_imoveis
        inner join tb_corretores 
        on tb_infos_imoveis.corretor_responsavel = tb_corretores.id_corretor;
    `;

    let registro = await database.query(comando);
    let x = registro[0];
    return x
}


export async function vendasSim() {
    let comando = `
        select count(*) as total_vendidos
        from tb_infos_imoveis
        where vendido = true;
    `;

    let registro = await database.query(comando);
    return { total_vendidos: registro[0][0].total_vendidos }; 
}


export async function vendasNao() {
    let comando = `
        select count(*) AS total_nao_vendidos
        from tb_infos_imoveis
        where vendido = false;
    `;

    let registro = await database.query(comando);
    return { total_nao_vendidos: registro[0][0].total_nao_vendidos }; 
}


export async function removerImovel(id) {
    let comando = `
        delete from tb_infos_imoveis where id_cardImovel = ?
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0]
    return fim.affectedRows;

}


export async function totalImoveis() {
    let comando = `
        select count(*) as total_imoveis from tb_infos_imoveis;
    `;
    let registro = await database.query(comando);
    let fim = registro[0];
    return fim[0];
}


export async function updateVenda(id, vendido) {
    let comando = `
        update tb_infos_imoveis
        set vendido = ?
        where id_cardImovel = ?
    `;
    let registro = await database.query(comando, [vendido, id]);
    let fim = registro[0];
    return fim.affectedRows; 
}


export async function imovelPorCorretor(id) {
    let comando = `
        select tb_infos_imoveis.id_cardImovel   id, 
                tb_infos_imoveis.nm_apartamento  imovel, 
                tb_infos_imoveis.st_status   status, 
                tb_corretores.nm_adm   corretor,
                vendido
        from tb_infos_imoveis
        inner join tb_corretores 
        on tb_infos_imoveis.corretor_responsavel = tb_corretores.id_corretor
        where id_corretor = ?
    `;
  
    let registro = await database.query(comando, [id]);
    let x = registro[0];
    return x;
}


export async function totalImovelCorretor(id) {
    let comando = `
        select count(*) as total
        from tb_infos_imoveis
        where  corretor_responsavel = ?
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return fim[0];
}

export async function vendidoCorretor(id) {
    let comando = `
        select count(*) as total_vendidos
        from tb_infos_imoveis
        where vendido = TRUE and corretor_responsavel = ?
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return fim[0];
}

