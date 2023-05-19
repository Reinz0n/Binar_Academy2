const supertest = require('supertest');
const app = require('../app.js');

const component = {
    name: 'name123',
    description: 'description123'
}

const product = {
    name: 'name123',
    quantity: 10
}

const supplier = {
    name: 'name123',
    address: 'address123'
}

//// COMPONENTS

// get components
describe('TEST /components get endpoint', () => {
    // positive
    test('Berhasil mengambil list: menampilkan daftar komponen', async () => {
        try {
            const res = await supertest(app)
                .get('/components');

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// get one component
describe('TEST /components/:component_id endpoint', () => {
    // positive
    test('Berhasil mengambil komponen: menampilkan sebuah komponen', async () => {
        try {
            const res = await supertest(app)
                .get('/components/1')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengambil komponen: index salah', async () => {
        try {
            const res = await supertest(app)
                .get('/components/abc')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find component with id ${component_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// store component
describe('TEST /components post endpoint', () => {
    // positive
    test('Berhasil menambah komponen: menambahkan sebuah komponen', async () => {
        try {

            const res = await supertest(app)
                .post('/components')
                .send(component);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// update component
describe('TEST /components/:component_id put endpoint', () => {
    // positive
    test('Berhasil mengubah komponen: mengubah sebuah komponen', async () => {
        try {
            const res = await supertest(app)
                .put('/components/4')
                .send(component);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengubah komponen: index salah', async () => {
        try {
            const res = await supertest(app)
                .put('/components/abc')
                .send(component);

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find component with id ${component_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// delete component
describe('TEST /components/:component_id delete endpoint', () => {
    // positive
    test('Berhasil menghapus komponen: menghapus sebuah komponen', async () => {
        try {
            const res = await supertest(app)
                .delete('/components/4')

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal menghapus komponen: index salah', async () => {
        try {
            const res = await supertest(app)
                .delete('/components/abc');

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find component with id ${component_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

//// PRODUCTS

// get products
describe('TEST /products get endpoint', () => {
    // positive
    test('Berhasil mengambil list: menampilkan daftar produk', async () => {
        try {
            const res = await supertest(app)
                .get('/products');

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('quantity');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// get one product
describe('TEST /products/:product_id endpoint', () => {
    // positive
    test('Berhasil mengambil produk: menampilkan sebuah produk', async () => {
        try {
            const res = await supertest(app)
                .get('/products/1')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('quantity');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengambil produk: index salah', async () => {
        try {
            const res = await supertest(app)
                .get('/products/abc')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find product with id ${product_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// store product
describe('TEST /products post endpoint', () => {
    // positive
    test('Berhasil menambah produk: menambahkan sebuah produk', async () => {
        try {
            const res = await supertest(app)
                .post('/products')
                .send(product);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('quantity');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// update product
describe('TEST /products/:product_id put endpoint', () => {
    // positive
    test('Berhasil mengubah produk: mengubah sebuah produk', async () => {
        try {
            const res = await supertest(app)
                .put('/products/5')
                .send(product);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('quantity');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengubah produk: index salah', async () => {
        try {
            const res = await supertest(app)
                .put('/products/abc')
                .send(product);

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find product with id ${product_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// delete product
describe('TEST /products/:product_id delete endpoint', () => {
    // positive
    test('Berhasil menghapus produk: menghapus sebuah produk', async () => {
        try {
            const res = await supertest(app)
                .delete('/products/5')

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal menghapus produk: index salah', async () => {
        try {
            const res = await supertest(app)
                .delete('/products/abc');

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find product with id ${product_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

//// SUPPLIERS

// get suppliers
describe('TEST /suppliers get endpoint', () => {
    // positive
    test('Berhasil mengambil list: menampilkan daftar supplier', async () => {
        try {
            const res = await supertest(app)
                .get('/suppliers');

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('address');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// get one supplier
describe('TEST /suppliers/:supplier_id endpoint', () => {
    // positive
    test('Berhasil mengambil supplier: menampilkan sebuah supplier', async () => {
        try {
            const res = await supertest(app)
                .get('/suppliers/1')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('address');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengambil supplier: index salah', async () => {
        try {
            const res = await supertest(app)
                .get('/suppliers/abc')

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find supplier with id ${supplier_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// store supplier
describe('TEST /suppliers post endpoint', () => {
    // positive
    test('Berhasil menambah supplier: menambahkan sebuah supplier', async () => {
        try {
            const res = await supertest(app)
                .post('/suppliers')
                .send(supplier);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('address');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// update supplier
describe('TEST /suppliers/:supplier_id put endpoint', () => {
    // positive
    test('Berhasil mengubah supplier: mengubah sebuah supplier', async () => {
        try {
            const res = await supertest(app)
                .put('/suppliers/4')
                .send(supplier);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('address');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal mengubah supplier: index salah', async () => {
        try {
            const res = await supertest(app)
                .put('/suppliers/abc')
                .send(supplier);

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find supplier with id ${supplier_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});

// delete supplier
describe('TEST /suppliers/:supplier_id delete endpoint', () => {
    // positive
    test('Berhasil menghapus supplier: menghapus sebuah supplier', async () => {
        try {
            const res = await supertest(app)
                .delete('/suppliers/4')

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });

    // negative
    test('Gagal menghapus supplier: index salah', async () => {
        try {
            const res = await supertest(app)
                .delete('/suppliers/abc');

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty(null);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`can't find supplier with id ${supplier_id}!`);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    });
});
