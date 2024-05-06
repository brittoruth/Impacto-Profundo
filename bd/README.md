### 🔧 Implantação

# Projeto Impacto-Profundo - Banco de Dados

Este documento apresenta a estrutura do banco de dados do Impacto-Profundo, incluindo o modelo conceitual, modelo lógico e um script SQL para criação do banco de dados.

## Modelo Conceitual

![Modelo Conceitual](https://github.com/brittoruth/Impacto-Profundo/blob/main/assets/image/bancoDeDados/modeloConceitural.png)
(Modelo gerado por BRModelo)

Nesta seção, apresentamos o modelo conceitual do banco de dados o modelo conceitual descreve as entidades, relacionamentos e atributos de forma abstrata e independente do sistema de gerenciamento de banco de dados.

## Modelo Lógico

![Modelo Conceitual](https://github.com/brittoruth/Impacto-Profundo/blob/main/assets/image/bancoDeDados/modeloLogico.png)

Aqui está o modelo lógico do banco de dados. Este modelo traduz o modelo conceitual em termos mais técnicos, mostrando as tabelas, colunas, chaves primárias, chaves estrangeiras e outras restrições necessárias para implementar o banco de dados em um sistema de gerenciamento de banco de dados mais específico neste caso utilizamos o Sqlite.

## Script SQL
<details>
  <summary>Script SQL</summary>
 
```sql

CREATE TABLE cliente (
    nome varchar not null,
    cpf varchar not null,
    cod_cliente int PRIMARY KEY
);

CREATE TABLE pedido (
    cod_Cliente int,
    cod_pedido int,
    data date,
    fk_cliente_cod_cliente int,
    PRIMARY KEY (cod_Cliente, cod_pedido)
);

CREATE TABLE itens_pedido_contem (
    fk_pedido_cod_Cliente int,
    fk_pedido_cod_pedido int,
    fk__cod_produto int
);

CREATE TABLE produto (
    cod_produto int PRIMARY KEY,
    valor float,
    nome varchar
);

CREATE TABLE estoque (
    cod_produto int PRIMARY KEY,
    quatidade int
);

CREATE TABLE existe (
    fk__cod_produto int,
    fk__cod_produto_ int
);
 
ALTER TABLE pedido ADD CONSTRAINT FK_pedido_2
    FOREIGN KEY (fk_cliente_cod_cliente)
    REFERENCES cliente (cod_cliente)
    ON DELETE CASCADE;
 
ALTER TABLE itens_pedido_contem ADD CONSTRAINT FK_itens_pedido_contem_1
    FOREIGN KEY (fk_pedido_cod_Cliente, fk_pedido_cod_pedido)
    REFERENCES pedido (cod_Cliente, cod_pedido);
 
ALTER TABLE itens_pedido_contem ADD CONSTRAINT FK_itens_pedido_contem_2
    FOREIGN KEY (fk__cod_produto)
    REFERENCES produto (cod_produto);
 
ALTER TABLE existe ADD CONSTRAINT FK_existe_1
    FOREIGN KEY (fk__cod_produto)
    REFERENCES produto (cod_produto)
    ON DELETE RESTRICT;
 
ALTER TABLE existe ADD CONSTRAINT FK_existe_2
    FOREIGN KEY (fk__cod_produto_)
    REFERENCES estoque (cod_produto)
    ON DELETE RESTRICT;

--Inserindo dados na tabela Cliente
Insert into cliente (nome, cpf, cod_cliente) values ('alex', '111.111.111.11', 1010);
Insert into cliente (nome, cpf, cod_cliente) values ('Graiella', '111.111.111.11', 1011);
Insert into cliente (nome, cpf, cod_cliente) values ('Ana Paula', '111.111.111.11', 1012);

Select * from cliente;

-- simplicifanco a inserção de dados para tabela pedidos
Insert into pedido (cod_Cliente, cod_pedido, data, fk_cliente_cod_cliente) 
values 
    (1010, 1, '2024-05-06', 1010),
    (1011, 2, '2024-05-07', 1011),
    (1012, 3, '2024-05-08', 1012);

select * from pedido


--Inserindo dados na tabela tens_pedido_contem
INSERT INTO itens_pedido_contem (fk_pedido_cod_Cliente, fk_pedido_cod_pedido, fk__cod_produto) 
VALUES 
    (1010, 1, 1),
    (1011, 2, 2),
    (1012, 3, 3);

select * from itens_pedido_contem


--Inserindo dados tabela produtos
INSERT INTO produto (cod_produto, valor, nome) 
VALUES 
    (1, 50.00, 'Caneca Azul'),
    (2, 55.75, 'Camisa Preta Branca'),
    (3, 52.00, 'Caneca Verde');

select * from produto


--Inserindo dados Tabela estoque
INSERT INTO estoque (cod_produto, quatidade) 
VALUES 
    (1, 100),
    (2, 150),
    (3, 200);
select * estoque


INSERT INTO existe (fk__cod_produto, fk__cod_produto_) 
VALUES 
    (1, 1),
    (2, 2),
    (3, 3);
select * existe

--Para saber qual total de produtos compramdos por cliente realizamos o select e nomeamos com o AS essa pesquisa para  posterior mente criar a tabela total_produtos_comprados
SELECT cliente.nome AS cliente, COUNT(itens_pedido_contem.fk__cod_produto) AS total_produtos_comprados
FROM cliente
JOIN pedido ON cliente.cod_cliente = pedido.fk_cliente_cod_cliente
JOIN itens_pedido_contem ON pedido.cod_pedido = itens_pedido_contem.fk_pedido_cod_pedido
GROUP BY cliente.nome;

```

</details>


## PostgreSQL
<details>
  <summary> Script gerado no PostgreSql </summary>

```sql
-- PostgreSQL database dump--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cliente (
    nome character varying(100) NOT NULL,
    cpf character varying(11) NOT NULL,
    cod_cliente integer NOT NULL
);

--
-- Name: estoque; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estoque (
    cod_produto_estoque integer NOT NULL,
    quantidade integer
);

--
-- Name: existe; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.existe (
    fk_cod_produto integer,
    fk_cod_produto_estoque integer
);

--
-- Name: item_pedido_contem; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.item_pedido_contem (
    fk_pedido_cod_cliente integer,
    fk_pedido_doc_produto integer,
    fk_cod_produto integer
);

--
-- Name: pedido; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pedido (
    cod_cliente integer,
    cod_pedido integer,
    data date,
    fk_cliente_cod_cliente integer
);

--
-- Name: produto; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.produto (
    cod_produto integer NOT NULL,
    valor double precision,
    nome character varying(50)
);

--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (cod_cliente);

--
-- Name: estoque estoque_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estoque
    ADD CONSTRAINT estoque_pkey PRIMARY KEY (cod_produto_estoque);

--
-- Name: produto produto_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (cod_produto);

--
-- PostgreSQL database dump complete
--

```

</details>

## Modelo Físico 

![Modelo Fisico ](https://github.com/brittoruth/Impacto-Profundo/blob/main/assets/image/bancoDeDados/modeloFisico.png)
Modelo gerado por Sqliteonline.com




## 🛠️ Construído com

## Brmodelo

## SqlLite

## 👨🏻‍🏫 Tutor Mateus Gesualdo 




