CREATE TABLE IF NOT EXISTS customer (
   customer_id BIGSERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   designation VARCHAR(5),
   address TEXT,
   phone TEXT NOT NULL,
   email VARCHAR(30),
   dob DATE,
   entry_date DATE DEFAULT NOW()::DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS prescription (
   prescription_id BIGSERIAL PRIMARY KEY,
   customer_id BIGINT REFERENCES customer (customer_id),

   eye CHAR(1) NOT NULL check(eye in ('R', 'L')),
   sph REAL,
   cyl REAL,
   axis SMALLINT,
   va VARCHAR(10),
   pd REAL,
   addition REAL,

   remarks TEXT,
   test_date DATE NOT NULL DEFAULT NOW()::DATE
);

CREATE TABLE IF NOT EXISTS product_category (
   category_id SERIAL PRIMARY KEY,
   name VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS product (
   product_id BIGSERIAL PRIMARY KEY,
   product_code VARCHAR(30) NOT NULL,
   
   name VARCHAR(30) NOT NULL,
   category INT REFERENCES product_category (category_id),
   brand VARCHAR(30),
   color VARCHAR(30),
   size INT,
   model_number INT,
   quantity INT,

   purchase_price INT NOT NULL, 
   selling_price INT NOT NULL,
   cgst INT NOT NULL, 
   sgst INT NOT NULL,
   net_price INT NOT NULL  
);

CREATE TABLE IF NOT EXISTS bill (
   bill_id BIGSERIAL PRIMARY KEY,
   prescription_id BIGINT REFERENCES prescription (prescription_id),
   customer_id BIGINT REFERENCES customer (customer_id),
   seller VARCHAR(30),

   amount INT NOT NULL,
   cgst INT NOT NULL,
   sgst INT NOT NULL,
   discount INT NOT NULL, 
   net_price INT NOT NULL,

   amount_paid INT NOT NULL,
   balance INT NOT NULL,
   payment_method TEXT NOT NULL,
   delivery_date DATE
);

CREATE TABLE IF NOT EXISTS order_item (
   order_item_id BIGSERIAL PRIMARY KEY,
   bill_id BIGINT REFERENCES bill (bill_id),
   product_id BIGINT REFERENCES product (product_id),
   quantity INT NOT NULL DEFAULT 1,
   sub_total INT NOT NULL
);

CREATE TABLE IF NOT EXISITS admin (
   admin_id SERIAL PRIMARY KEY,
   name VARCHAR(40) UNIQUE NOT NULL,
   password TEXT NOT NULL
);