import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

/**
 * id String @id @default(uuid())
  name String 
  imageUrl String @db.Text 
  inviteCode String @db.Text 

  profileId String 
  profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  
  members Member[] 
  channels Channel[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([profileId])
 */