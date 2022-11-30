/*
    Objetivo:     API responsável pela manipulação dos dados dos produtos com o Banco de Dados (INSERT, UPDATE, SELECT, DELETE)
    Autores:      Vinícius Santos Oliveira e Arthur Piloto Silva
    Data Criação: 23/11/2022
    Versão:       1.0
*/

// Import da classe PrismaClient, que é responsável pelas interações com o Banco de Dados
const { PrismaClient } = require('@prisma/client')

// Instância da classe PrismaClient
const prisma = new PrismaClient()

// Função para inserção de um novo produto
const insertProduct = async (product) => {

}

// Função para atualização de um produto
const updateProduct = async (product) => {

}

// Função para exclusão de um produto
const deleteProduct = async (id) => {

}

// Função para retornar todos os produtos
const selectAllProducts = async () => {
    
}

// Função para retornar produtos com base na categoria (se é Pizza, Bebida...)
const selectProductsByCategory = async (productCategory) => {
    
}

// Função para retornar produtos com base no tipo (se é pizza doce, salgada...)
const selectProductsByType = async (productType) => {

}

// Função para retornar produtos com base no nome
const selectProductByName = async (productName) => {

}

module.exports = {
    insertProduct,
    updateProduct,
    deleteProduct,
    selectAllProducts,
    selectProductsByCategory,
    selectProductsByType,
    selectProductByName
}