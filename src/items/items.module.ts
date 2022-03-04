import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsSchema } from './schemas/items.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
