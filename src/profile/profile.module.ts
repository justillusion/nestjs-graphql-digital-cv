import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProfileResolver, ProfileService],
  imports: [PrismaModule],
})
export class ProfileModule {}
