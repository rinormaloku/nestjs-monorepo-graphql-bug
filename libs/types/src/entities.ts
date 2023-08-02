import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field((type) => Int)
  total: number;

  @Field((type) => Int)
  negative: number;
}
