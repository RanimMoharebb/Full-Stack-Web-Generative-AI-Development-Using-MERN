import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { userGender } from 'src/common/enums/user.gender.enum';
import { Product } from 'src/products/entities/product.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: String,
    isRequired: [true, 'name is required'],
    minLength: 2,
    maxlength: 50,
  })
  name: string;

  @Prop({
    isRequired: true,
    type: Number,
    min: [20, 'minimum age is 20'],
    max: 50,
  })
  age: number;

  @Prop({ type: String })
  gender: userGender;

  @Prop({ unique: true, type: String, isRequired: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  products: Product[];
}

export const UserSchema = SchemaFactory.createForClass(User);
