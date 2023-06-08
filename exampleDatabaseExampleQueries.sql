-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create animals table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  object varchar(40)
);

-- Insert some animals (C in CRUD - Create)
INSERT INTO products
  (name, type, object)
VALUES
  ('gigi', 'cat',  'rat' ),
  ( 'freddy',  'dog',  'biscuit' ),
  ( 'bob',  'trashpanda',  'candy' ),
  ( 'nagini',  'snake',  'band' ),
  ( 'kunfu',  'panda', null  );
  ( 'kunfu',  'panda', null  );


INSERT INTO products
  (name, type, object)
VALUES
  ( 'Vulture full Robotic Arm', 'prosthesis', 'arm' ),
  ( 'Vulture Robotic forearm', 'prosthesis', 'forearm' ),
  ( 'Makeshift Robotic leg', 'prosthesis', 'leg' ),
  ( 'Makeshift Robotic foot', 'prosthesis', 'foot' ),
  ( 'Aero full Robotic lung', 'internals', 'lung' ),
  ( 'Eagle full Robotic eye', 'internals', 'eye' ),
  ( 'Beat full Robotic heart', 'internals', 'heart' ),
  ( 'Load full Robotic spine', 'internals', 'spine' ),
  ( 'Rex full Robotic Brain', 'prosthesis', 'brain' );


-- Read some animals (R in CRUD - Read)
SELECT * FROM animals;
