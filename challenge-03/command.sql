--Create database challenge_03
create database challenge_03;

--Create table produk
create table produk(
    id bigserial primary key,
    nama_produk varchar(100) not null,
    qty integer not null
);

--Create table pemasok
create table pemasok(
    id bigserial primary key,
    nama_pemasok varchar(100) not null
);

--Create table komponen
create table komponen(
    id bigserial primary key,
    nama_komponen varchar(100) not null,
    deskripsi varchar(255) not null,
    id_produk bigserial references produk(id),
    id_pemasok bigserial references pemasok(id)
);

--Insert produk
insert into produk(nama_produk, qty) values('HP', 10);
insert into produk(nama_produk, qty) values('Laptop', 10);
insert into produk(nama_produk, qty) values('Tablet', 10);

--Insert pemasok
insert into pemasok(nama_pemasok) values('Galaxy Inc.');
insert into pemasok(nama_pemasok) values('Brotherhood Company');
insert into pemasok(nama_pemasok) values('Zon Holdings');

--Create procedure pemasokan
create procedure pemasokan(nama_komponen varchar(100), deskripsi varchar(255), id_produk int, id_pemasok int)
language plpgsql
as $$
begin
insert into komponen(nama_komponen, deskripsi, id_produk, id_pemasok) values(nama_komponen, deskripsi, id_produk, id_pemasok);
commit;
end;$$;

--Create procedure edit_pemasokan
create procedure edit_pemasokan(id_komponen int, edit_nama varchar(100), edit_deskripsi varchar(255), produk_id int, pemasok_id int)
language plpgsql
as $$
begin
update komponen set nama_komponen = edit_nama, deskripsi = edit_deskripsi, id_produk = produk_id, id_pemasok = pemasok_id where id = id_komponen;
commit;
end;$$;

--Create procedure restock
create procedure restock(produk_id int, stok int)
language plpgsql
as $$
begin
update produk set qty = qty + stok where id = produk_id;
commit;
end;$$;

--Create procedure destock
create procedure destock(produk_id int, stok int)
language plpgsql
as $$
begin
update produk set qty = qty - stok where id = produk_id;
commit;
end;$$;

--Create procedure delete_komponen
create procedure delete_komponen(komponen_id int)
language plpgsql
as $$
begin
delete from komponen where id = komponen_id;
commit;
end;$$;

--Call procedure
call pemasokan('Baterai', 'Baterai berkualitas', 1, 2);
call pemasokan('Processor', 'Processor terbaik', 2, 1);
call pemasokan('RAM', 'RAM tercepat', 2, 2);
call pemasokan('Casing', 'Casing tablet keren', 3, 2);
call edit_pemasokan(1, 'Baterai', 'Baterai sangat berkualitas', 1, 3);
call restock(1, 10);
call destock(1, 5);
call delete_komponen(4);