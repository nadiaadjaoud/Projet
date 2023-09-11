CREATE DATABASE ma_table;

CREATE TABLE produit(
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255),
  categorie VARCHAR(255),
  prix integer,
  stock integer
);
CREATE TABLE customer(
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) UNIQUE,
  siege VARCHAR(255) UNIQUE,
  email  VARCHAR(255) UNIQUE,
  telephone  integer UNIQUE
);
CREATE TABLE commande (
  id SERIAL PRIMARY KEY,
  fournisseur VARCHAR(255) ,
  produit VARCHAR(255),
  categorie VARCHAR(255),
  quantité  integer
)
;