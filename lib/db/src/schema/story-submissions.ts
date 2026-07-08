import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const preferredContactMethods = ["email", "phone", "either"] as const;

export const storySubmissionsTable = pgTable("story_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  story: text("story").notNull(),
  preferredContactMethod: text("preferred_contact_method", {
    enum: preferredContactMethods,
  }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertStorySubmissionSchema = createInsertSchema(
  storySubmissionsTable,
).omit({ id: true, createdAt: true });
export type InsertStorySubmission = z.infer<typeof insertStorySubmissionSchema>;
export type StorySubmissionRow = typeof storySubmissionsTable.$inferSelect;
