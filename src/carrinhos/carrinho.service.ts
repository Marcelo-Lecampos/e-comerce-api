import { Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarrinhoService {
  private carrinhoArray = [];

  create(createCarrinhoDto: CreateCarrinhoDto) {
    const carrinho = {
      id: uuidv4(),
      ...createCarrinhoDto,
    };
    this.carrinhoArray.push(carrinho);
    return carrinho;
  }

  findAll() {
    return `This action returns all carrinho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrinho`;
  }

  update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
    return `This action updates a #${id} carrinho`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrinho`;
  }
}
