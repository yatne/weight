-- Table: public.weights

-- DROP TABLE public.weights;

CREATE TABLE public.weights
(
    id integer NOT NULL,
    date date,
    weight real,
    CONSTRAINT weights_pkey1 PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- SEQUENCE: public.weight_id_seq

-- DROP SEQUENCE public.weight_id_seq;

CREATE SEQUENCE public.weight_id_seq
    INCREMENT 1
    START 2
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER TABLE weights ALTER COLUMN id SET DEFAULT nextval('weight_id_seq');