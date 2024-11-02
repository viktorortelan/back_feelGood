import database from "./conn.js";

export async function addCorretor(corretorOBJ) {
    let comando = `
        insert into tb_corretores (nm_adm, ds_email, ds_senha, ds_telefone) 
                values(?,?,?,?)
    `;

    let registro = await database.query(comando, [corretorOBJ.nome, corretorOBJ.email, corretorOBJ.senha, corretorOBJ.telefone]);
    let fim = registro[0];
    return fim.insertId;
}


export async function buscarCorretor() {
    let comando = `
        select*from tb_corretores;
    `;
    let registro = await database.query(comando);
    let fim = registro[0];
    return fim;
}

export async function totalCorretor() {
    let comando = `
        select count(*) as total_corretores from tb_corretores;
    `;
    let registro= await database.query(comando);
    let fim = registro[0];
    return fim[0];
}

export async function updateCorretor(nome, email, senha, telefone, id) {
    let comando = `
        update tb_corretores
        set nm_adm = ?,
            ds_email = ?,
            ds_senha = ?,
            ds_telefone = ?
        where id_corretor = ?
    `;
    
    try {
        let [registro] = await database.query(comando, [nome, email, senha, telefone, id]);
        
        return registro.affectedRows;
    } catch (error) {
      
        console.error('Erro ao atualizar corretor:', error);
        throw error; 
    }
}

export async function removerCorretor(id) {
    let comando = `
        delete tb_corretores where id_corretor = ?
    `;
    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return registro.affectedRows;
}


export async function loginCorretor(email, senha) {
    let comando = `
        select id_corretor   id,
                nm_adm    nome,
                ds_email  email,
                ds_telefone  telefone,
                nm_foto foto
        from tb_corretores
         where ds_email = ? and ds_senha = ?
    `;

    let registro = await database.query(comando, [email, senha]);
    return registro[0];

}
