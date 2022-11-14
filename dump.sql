--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    genre text NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    "userName" text NOT NULL,
    "movieId" integer,
    review text NOT NULL
);


--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'Se beber, não case 1', 'Comédia');
INSERT INTO public.movies VALUES (3, 'Se beber, não case 2', 'Comédia');
INSERT INTO public.movies VALUES (4, 'Se beber, não case 3', 'Comédia');
INSERT INTO public.movies VALUES (5, 'American Pie 1', 'Comédia');
INSERT INTO public.movies VALUES (6, 'Top Gun: Maverick', 'Ação');
INSERT INTO public.movies VALUES (8, '007 - Um novo dia para morrer', 'Ação');
INSERT INTO public.movies VALUES (9, '007 - Operação Skyfall', 'Ação');
INSERT INTO public.movies VALUES (10, 'Missão Impossivel 1', 'Ação');
INSERT INTO public.movies VALUES (11, 'Missão Impossivel 2', 'Ação');
INSERT INTO public.movies VALUES (12, 'Missão Impossivel 3', 'Ação');
INSERT INTO public.movies VALUES (13, 'Agente Oculto', 'Ação');
INSERT INTO public.movies VALUES (14, 'Velozes e Furiosos 1', 'Ação');
INSERT INTO public.movies VALUES (15, 'Velozes e Furiosos 2', 'Ação');


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.reviews VALUES (1, 'BrunoTeste', 1, 'Review de Teste update 1');
INSERT INTO public.reviews VALUES (3, 'BrunoTeste', 1, 'Review de Teste 2');
INSERT INTO public.reviews VALUES (4, 'BrunoTeste', 3, 'Review de Teste 2');
INSERT INTO public.reviews VALUES (5, 'BrunoTeste', 3, 'Review de Teste 1');
INSERT INTO public.reviews VALUES (6, 'BrunoTeste', 3, 'Review de Teste 3');
INSERT INTO public.reviews VALUES (7, 'BrunoTeste', 3, 'Review de Teste 4');
INSERT INTO public.reviews VALUES (8, 'BrunoTeste', 3, 'Review de Teste 5');
INSERT INTO public.reviews VALUES (9, 'BrunoTeste', 5, 'Review de Teste 5');
INSERT INTO public.reviews VALUES (10, 'BrunoTeste', 5, 'Review de Teste 1');
INSERT INTO public.reviews VALUES (11, 'BrunoTeste', 5, 'Review de Teste 55');
INSERT INTO public.reviews VALUES (12, 'BrunoTeste', 8, 'Review de Teste 55');
INSERT INTO public.reviews VALUES (13, 'BrunoTeste', 8, 'Review de Teste 51');


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 15, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.reviews_id_seq', 13, true);


--
-- Name: movies movies_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_name_key UNIQUE (name);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "reviews_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id);


--
-- PostgreSQL database dump complete
--

