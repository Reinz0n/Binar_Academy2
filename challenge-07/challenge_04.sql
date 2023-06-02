--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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
-- Name: Components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Components" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Components" OWNER TO postgres;

--
-- Name: Components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Components_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Components_id_seq" OWNER TO postgres;

--
-- Name: Components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Components_id_seq" OWNED BY public."Components".id;


--
-- Name: Modules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Modules" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Modules" OWNER TO postgres;

--
-- Name: Modules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Modules_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Modules_id_seq" OWNER TO postgres;

--
-- Name: Modules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Modules_id_seq" OWNED BY public."Modules".id;


--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    name character varying(255),
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Products_id_seq" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;


--
-- Name: RoleAccesses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RoleAccesses" (
    id integer NOT NULL,
    role_id integer,
    module_id integer,
    is_read boolean,
    is_write boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."RoleAccesses" OWNER TO postgres;

--
-- Name: RoleAccesses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RoleAccesses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RoleAccesses_id_seq" OWNER TO postgres;

--
-- Name: RoleAccesses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RoleAccesses_id_seq" OWNED BY public."RoleAccesses".id;


--
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Roles_id_seq" OWNER TO postgres;

--
-- Name: Roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Suppliers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Suppliers" (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Suppliers" OWNER TO postgres;

--
-- Name: Suppliers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Suppliers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Suppliers_id_seq" OWNER TO postgres;

--
-- Name: Suppliers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Suppliers_id_seq" OWNED BY public."Suppliers".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    role_id integer,
    user_type character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Components" ALTER COLUMN id SET DEFAULT nextval('public."Components_id_seq"'::regclass);


--
-- Name: Modules id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Modules" ALTER COLUMN id SET DEFAULT nextval('public."Modules_id_seq"'::regclass);


--
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);


--
-- Name: RoleAccesses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoleAccesses" ALTER COLUMN id SET DEFAULT nextval('public."RoleAccesses_id_seq"'::regclass);


--
-- Name: Roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);


--
-- Name: Suppliers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suppliers" ALTER COLUMN id SET DEFAULT nextval('public."Suppliers_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Components" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Baterai	baterai tahan lama	2023-04-14 18:13:21.355+07	2023-04-14 18:13:21.355+07
2	RAM	RAM 16 gb	2023-04-14 18:13:56.968+07	2023-04-14 18:14:04.282+07
\.


--
-- Data for Name: Modules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Modules" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Authorization	All about Authorization	2023-06-02 15:14:47.687+07	2023-06-02 15:14:47.687+07
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (id, name, quantity, "createdAt", "updatedAt") FROM stdin;
1	HP	10	2023-04-14 18:28:35.34+07	2023-04-14 18:28:35.34+07
2	Laptop	15	2023-04-14 18:28:47.165+07	2023-04-14 18:29:33.953+07
\.


--
-- Data for Name: RoleAccesses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RoleAccesses" (id, role_id, module_id, is_read, is_write, "createdAt", "updatedAt") FROM stdin;
1	1	1	t	t	2023-06-02 15:17:08.253+07	2023-06-02 15:17:08.253+07
2	2	1	t	f	2023-06-02 15:17:16.57+07	2023-06-02 15:17:16.57+07
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roles" (id, name, description, "createdAt", "updatedAt") FROM stdin;
1	Admin	administrator	2023-06-02 15:15:44.652+07	2023-06-02 15:15:44.652+07
2	User	user	2023-06-02 15:16:08.833+07	2023-06-02 15:16:08.833+07
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20230414094851-create-components.js
20230414095030-create-products.js
20230414095131-create-suppliers.js
20230522131547-create-role.js
20230522131627-create-module.js
20230522131759-create-role-access.js
20230428135442-create-user.js
\.


--
-- Data for Name: Suppliers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Suppliers" (id, name, address, "createdAt", "updatedAt") FROM stdin;
1	Galaxy Inc.	Jakarta	2023-04-14 18:58:01.071+07	2023-04-14 18:58:01.071+07
2	Brotherhood Company	Jogja	2023-04-14 18:58:07.665+07	2023-04-14 18:58:24.581+07
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, email, password, role_id, user_type, "createdAt", "updatedAt") FROM stdin;
1	Admin	admin@mail.com	$2b$10$/dSkmTXUJWJk2XoLHg17qeeECGTS4O2eVwW4leCGudb.d1YYe.msS	2	basic	2023-06-02 17:44:00.33+07	2023-06-02 17:44:00.33+07
2	User	user@mail.com	$2b$10$5a.ypH8Fhg0h8wcGukDd5OhwTO2.1VOXklQXiWUZDVyQdFGDrbs8y	2	basic	2023-06-02 17:44:29.998+07	2023-06-02 17:44:29.998+07
3	Mikhael Rivandio	mikhael.rivandio@gmail.com	$2b$10$GyF/CAfTsi11qcJPca3oi.TrxrZoC64KzHBrKyUodTmivuotUmWV6	\N	google	2023-06-02 17:45:04.559+07	2023-06-02 20:57:55.757+07
\.


--
-- Name: Components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Components_id_seq"', 4, true);


--
-- Name: Modules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Modules_id_seq"', 1, true);


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Products_id_seq"', 5, true);


--
-- Name: RoleAccesses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RoleAccesses_id_seq"', 2, true);


--
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 2, true);


--
-- Name: Suppliers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Suppliers_id_seq"', 4, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);


--
-- Name: Components Components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Components"
    ADD CONSTRAINT "Components_pkey" PRIMARY KEY (id);


--
-- Name: Modules Modules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Modules"
    ADD CONSTRAINT "Modules_pkey" PRIMARY KEY (id);


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: RoleAccesses RoleAccesses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoleAccesses"
    ADD CONSTRAINT "RoleAccesses_pkey" PRIMARY KEY (id);


--
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Suppliers Suppliers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suppliers"
    ADD CONSTRAINT "Suppliers_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

