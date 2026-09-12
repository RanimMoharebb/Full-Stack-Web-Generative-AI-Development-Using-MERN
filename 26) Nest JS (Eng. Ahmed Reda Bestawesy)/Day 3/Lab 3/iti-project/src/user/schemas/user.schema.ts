import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class User {
  @Prop()
  firstName!: string;

  @Prop()
  lastName!: string;

  @Prop()
  age!: number;

  @Prop({ unique: true })
  email!: string;

  @Prop()
  password!: string;

  @Prop({ default: 'user' })
  role!: string; // for RolesGuard

  // MANY-TO-MANY
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Course' }] })
  courses!: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);