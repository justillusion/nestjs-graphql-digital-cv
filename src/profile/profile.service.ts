import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findProfile() {
    return this.prisma.profile.findFirstOrThrow({ orderBy: { id: 'asc' } });
  }

  findLinks(profileId: number) {
    return this.byId(profileId).links({ orderBy: { id: 'asc' } });
  }

  findSkills(profileId: number) {
    return this.byId(profileId).skills({ orderBy: { id: 'asc' } });
  }

  findExperience(profileId: number) {
    return this.byId(profileId).experiences({ orderBy: { startDate: 'desc' } });
  }

  findProjects(profileId: number) {
    return this.byId(profileId).projects({ orderBy: { createdAt: 'desc' } });
  }

  private byId(id: number) {
    return this.prisma.profile.findUniqueOrThrow({ where: { id } });
  }
}
