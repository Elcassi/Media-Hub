import { Router, type IRouter } from "express";
import { db, storySubmissionsTable } from "@workspace/db";
import {
  CreateStorySubmissionBody,
  CreateStorySubmissionResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/story-submissions", async (req, res): Promise<void> => {
  const parsed = CreateStorySubmissionBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid story submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(storySubmissionsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(CreateStorySubmissionResponse.parse(submission));
});

export default router;
