import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import {
  CreateContactMessageBody,
  CreateContactMessageResponse,
} from "@workspace/api-zod";
import { sendContactMessageEmail } from "../lib/resend";

const router: IRouter = Router();

router.post("/contact-messages", async (req, res): Promise<void> => {
  const parsed = CreateContactMessageBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact message");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [message] = await db
    .insert(contactMessagesTable)
    .values(parsed.data)
    .returning();

  // Send email notification — non-blocking, errors are caught internally
  void sendContactMessageEmail(parsed.data);

  res.status(201).json(CreateContactMessageResponse.parse(message));
});

export default router;
