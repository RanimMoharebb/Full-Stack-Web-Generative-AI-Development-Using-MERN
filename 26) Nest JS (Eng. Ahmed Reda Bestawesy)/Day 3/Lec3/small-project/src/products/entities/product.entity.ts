import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ isRequired: true, type: String, length: 25 })
  name: string;

  @Prop({
    type: Number,
    min: [0, 'price must be postive number'],
    isRequired: true,
  })
  price: number;

  @Prop({ type: Number, isRequired: true, min: 0 })
  quantity: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
