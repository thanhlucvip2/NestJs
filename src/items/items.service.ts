import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findItem(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async createItem(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
  async deleteItem(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async updateItem(id: string, body: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, body, { new: true });
  }
}
