import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/create-produto.dto/update-produto.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProdutosService {
  private produtos = [];

  create(createProdutoDto: CreateProdutoDto) {
    const produto = {
      id: uuidv4(),
      ...createProdutoDto,
    };
    this.produtos.push(produto);
    return produto;
  }

  findAll() {
    return this.produtos;
  }

  findOne(id: string) {
    return this.produtos.find((produto) => produto.id === id);
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const find = this.produtos.findIndex((produto) => produto.id === id);
    this.produtos[find] = {
      ...this.produtos[find],
      ...updateProdutoDto,
      id: this.produtos[find].id,
    };
    return this.produtos[find];
  }

  remove(id: string) {
    const find = this.produtos.findIndex((produto) => produto.id === id);
    this.produtos.splice(find, 1);
  }
}
