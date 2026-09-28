import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Link')
export class LinkModel {
  @Field(() => ID)
  id: number;

  @Field()
  label: string;

  @Field()
  url: string;
}
