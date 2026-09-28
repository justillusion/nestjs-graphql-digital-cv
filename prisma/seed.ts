import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const PROFILE_ID = 1;

const profile = {
  name: 'Vladimir Ponomarev',
  role: 'Software Engineer',
  description:
    'Software engineer with experience in NodeJS/NestJS, Typescript, Postgres, Docker, ...',
};

const links = [
  { label: 'GitHub', url: 'https://github.com/justillusion' },
  { label: 'Telegram', url: 'https://t.me/justillusion' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/justillusion/' },
];

const skills = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NextJS',
  'React.js',
  'NestJS',
  'GraphQL',
  'SQL',
  'PostgreSQL',
  'Prisma ORM',
  'DrizzleORM',
  'Redis',
  'Docker',
].map((name) => ({ name }));

const experiences = [
  {
    company: 'WebPros',
    position: 'Software Engineer',
    startDate: new Date('2021-12-01'),
    endDate: null,
    achievements: ['Implement AI-web-builder from PoC to Production'],
  },
  {
    company: 'NAUMEN',
    position: 'Full Stack Engineer',
    startDate: new Date('2016-08-01'),
    endDate: new Date('2021-12-01'),
    achievements: [
      'Split monolitic app to parts: frontend/backend services',
      'Adopt WebRTC to call service',
    ],
  },
  {
    company: 'Mir-promo',
    position: 'Full-stack Developer',
    startDate: new Date('2012-08-01'),
    endDate: new Date('2016-08-01'),
    achievements: ['Sites development and maintenance'],
  },
];

const projects: { name: string; url: string; description: string }[] = [];

async function seed() {
  await prisma.profile.upsert({
    where: { id: PROFILE_ID },
    create: {
      id: PROFILE_ID,
      ...profile,
      links: { create: links },
      skills: { create: skills },
      experiences: { create: experiences },
      projects: { create: projects },
    },
    update: {
      ...profile,
      links: { deleteMany: {}, create: links },
      skills: { deleteMany: {}, create: skills },
      experiences: { deleteMany: {}, create: experiences },
      projects: { deleteMany: {}, create: projects },
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
