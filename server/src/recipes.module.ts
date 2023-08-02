import { Module } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Recipe } from '@types';

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor() {}

  @Query((returns) => Recipe)
  async recipe(): Promise<Recipe> {
    return {
      id: 'adasdasdasdas',
      total: 12,
      negative: 11,
    } as Recipe;
  }
}

@Module({
  providers: [RecipesResolver],
})
export class RecipesModule {}
