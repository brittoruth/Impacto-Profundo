### 🔧 Implantação

# Projeto Impacto-Profundo - Banco de Dados

Este documento apresenta a estrutura do banco de dados do Impacto-Profundo, incluindo o modelo conceitual, modelo lógico e um script SQL para criação do banco de dados.

## Modelo Conceitual

![Modelo Conceitual](https://github.com/brittoruth/Impacto-Profundo/blob/main/assets/image/bancoDeDados/Modelo%20Conceitual.jpeg)



Nesta seção, apresentamos o modelo conceitual do banco de dados o modelo conceitual descreve as entidades, relacionamentos e atributos de forma abstrata e independente do sistema de gerenciamento de banco de dados.

## Modelo Lógico

![Modelo Lógico](link_para_imagem_logico.jpg)



Aqui está o modelo lógico do banco de dados. Este modelo traduz o modelo conceitual em termos mais técnicos, mostrando as tabelas, colunas, chaves primárias, chaves estrangeiras e outras restrições necessárias para implementar o banco de dados em um sistema de gerenciamento de banco de dados mais específico neste caso utilizamos o Sqlite.

## Script SQL

 script SQL:

```sql

----
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





!modeloconsulta](link_para_imagem_sqlite.jpg)


## 🛠️ Construído com

## Brmodelo
## SqlLite







## 👨🏻‍🏫 Tutor Mateus Gesualdo 




