create database feel_good_db;
use feel_good_db;

create table  TB_images_Imoveis (
id_img int primary key auto_increment,
img_um varchar(300),
img_dois varchar(300),
img_tres varchar(300),
img_quatro varchar(300)
);

create table tb_corretores(
id_corretor int primary key auto_increment,
nm_adm varchar(200),
ds_email varchar(200),
ds_senha varchar(200),
ds_telefone varchar(20) unique,
nm_foto varchar(200)
);

INSERT INTO tb_corretores (nm_adm, ds_email, ds_senha) VALUES
("Kauan", "kauan29918@gmail.com", "1234");


create table tb_infos_imoveis (
id_cardImovel     int primary key auto_increment,
nm_imagem         varchar(200),
nm_galeria		   varchar(200),
nm_apartamento     varchar(250) unique,
st_status         varchar(250),
rg_regiao         varchar(250),
lc_localizacao     varchar(250),
st_suites         varchar(250),
com_tamanho     varchar(250),
vg_vagas         varchar(250),
tt_titulo         varchar(200),
sb_sobre         varchar(4000),
corretor_responsavel INT,
vendido BOOLEAN,
FOREIGN KEY (corretor_responsavel) REFERENCES tb_corretores(id_corretor)
); 

create table tb_cliente (
id_cliente int primary key auto_increment,
nm_cliente varchar(200),
ds_email varchar(200) unique,
ds_telefone varchar(50) unique,
dt_cadastro date,
nm_foto varchar(200)
);

create table tb_ADM (
id_adm int primary key auto_increment,
nm_adm varchar(200),
ds_email varchar(200),
ds_senha varchar(200)
);

insert into tb_ADM(nm_adm, ds_email, ds_senha)
values ('viktor' ,'jvortelan@gmail.com', 'adm1234viktor'),
		('kauan', 'kauan29918@gmail.com', 'adm1234kauan'),
        ('heitor', 'heitor.perci@gmail.com', 'adm1234heitor'),
        ('matheus', 'matheusmouragl50049@gmail.com','adm1234matheus');

CREATE TABLE tb_feed_backs (
    id_feedBack INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    ds_comentario VARCHAR(1000),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);
