import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ExperienceModel } from './models/experience.model';
import { LinkModel } from './models/link.model';
import { ProfileModel } from './models/profile.model';
import { ProjectModel } from './models/project.model';
import { SkillModel } from './models/skill.model';
import { ProfileService } from './profile.service';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel)
  profile() {
    return this.profileService.findProfile();
  }

  @ResolveField(() => [LinkModel])
  links(@Parent() profile: ProfileModel) {
    return this.profileService.findLinks(profile.id);
  }

  @ResolveField(() => [SkillModel])
  skills(@Parent() profile: ProfileModel) {
    return this.profileService.findSkills(profile.id);
  }

  @ResolveField(() => [ExperienceModel])
  experience(@Parent() profile: ProfileModel) {
    return this.profileService.findExperience(profile.id);
  }

  @ResolveField(() => [ProjectModel])
  projects(@Parent() profile: ProfileModel) {
    return this.profileService.findProjects(profile.id);
  }
}
