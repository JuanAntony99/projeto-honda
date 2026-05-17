const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());

app.use(express.json());


// LISTAR 
app.get('/produtos', async (req, res) => {

    let conn;

    try {

        conn = await db.getConnection();

        const produtos = await conn.query(
            'SELECT * FROM produtos'
        );

        res.json(produtos);

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    } finally {

        if (conn) conn.release();

    }

});


app.get('/produtos/:id', async (req, res) => {
    let conn;
    try {
        const { id } = req.params; // Pega o ID enviado na URL
        conn = await db.getConnection();

        // O "?" evita ataques de SQL Injection, injetando o ID com segurança
        const resultado = await conn.query(
            'SELECT * FROM produtos WHERE id = ?', 
            [id]
        );

        // Se o banco retornar um array vazio, avisamos que o produto não existe
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        // Retorna apenas o objeto do produto encontrado (a primeira posição do array)
        res.json(resultado[0]);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    } finally {
        if (conn) conn.release();
    }
});

// INSERIR
app.post('/usuarios', async (req, res) => {

    let conn;

    try {

        const { nome,telefone,cpf,email,senha } = req.body;

        const nomeStr = nome;
        const telefoneStr = telefone;
        const cpfStr = cpf;
        const emailStr = email;
        const senhaStr = senha;

        conn = await db.getConnection();

            await conn.query(
            'INSERT INTO USUARIOS(nome,telefone,cpf,email,senha) VALUES(?,?,?,?,?)',
            [nomeStr, telefoneStr, cpfStr, emailStr, senhaStr]
            );

        res.json({
            mensagem: 'Usuario cadastrado'
        });

    } catch (err) {
        // OUTROS ERROS
        res.status(500).json({
            erro: err.message
        });
    } finally {

        if (conn) conn.release();

    }

});




app.listen(3000, () => {

    console.log('Servidor rodando');

});