create table usuario(
    id_user INTEGER not null PRIMARY Key,
    nome varchar(150) null,
    profissao varchar(50) null,
    email varchar (50) null,
    telefone varchar (50) null,
    endereco varchar (50) null,
    data_nascimento date null
)

create table Registro_despesas(
    id_user integer not null,
    tipo_despesa varchar(150) null,
    repeti integer null,
    data_despesa date null,
    data_criacao date null,
    valor_despesa float null
)
-- Adicionando a chave estrangeiras
alter table REGISTRO_DESPESAS add constraint fk_Resgistro_despesas foreign key (id_user) references USUARIO(id_user)

create table meta (
    id_user integer not null,
    titulo_meta varchar(150) null,
    descricao varchar (50) null,
    valor_meta float null,
    data_inicio date null,
    data_fim date null,
    percentual_meta float null,
    data_registro date null
)
-- Adicionando a chave estrangeiras
alter table META add constraint fk_META foreign key (id_user) references USUARIO(id_user)

create table REGISTRO_RENDA(
    id_user integer not null,
    nome varchar(150) null,
    descricao varchar(50) null,
    valor_renda float null,
    temporatia integer null,
    data_inicio date null,
    data_fim date null,
    data_registro date null
)
-- Adicionando a chave estrangeiras
alter table REGISTRO_RENDA add constraint fk_REGISTRO_RENDA foreign key (id_user) references USUARIO(id_user)