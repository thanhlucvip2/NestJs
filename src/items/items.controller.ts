import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interface/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }
  @Get(':id')
  async findDetailItem(@Param('id') id): Promise<Item> {
    return await this.itemsService.findItem(id);
  }

  @Post()
  async createItem(@Body() item: Item): Promise<Item> {
    return await this.itemsService.createItem(item);
  }
  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<Item> {
    return await this.itemsService.deleteItem(id);
  }
  @Put(':id')
  async updateItem(@Param('id') id, @Body() body): Promise<Item> {
    return await this.itemsService.updateItem(id, body);
  }
}
