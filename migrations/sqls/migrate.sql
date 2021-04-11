CREATE TABLE public.users (
	id bigserial NOT NULL,
	name varchar(50) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

ALTER TABLE public.users ADD created_at timestamptz(0) NULL;
ALTER TABLE public.users ADD updated_at timestamptz(0) NULL;

