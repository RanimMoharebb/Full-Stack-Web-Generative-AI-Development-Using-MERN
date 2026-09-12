import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Course {
  @Prop()
  name!: string;

  @Prop({ min: 0, max: 100 })
  grade!: number;

  // MANY-TO-MANY
  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  users!: Types.ObjectId[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);