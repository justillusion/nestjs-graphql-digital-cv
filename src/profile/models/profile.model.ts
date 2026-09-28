import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from './experience.model';
import { LinkModel } from './link.model';
import { ProjectModel } from './project.model';
import { SkillModel } from './skill.model';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  description: string;

  @Field(() => [LinkModel])
  links?: LinkModel[];

  @Field(() => [SkillModel])
  skills?: SkillModel[];

  @Field(() => [ExperienceModel])
  experience?: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects?: ProjectModel[];
}
