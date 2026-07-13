import { Router, type IRouter } from "express";
import healthRouter from "./health";
import storySubmissionsRouter from "./story-submissions";
import contactMessagesRouter from "./contact-messages";
import youtubeRouter from "./youtube";

const router: IRouter = Router();

router.use(healthRouter);
router.use(storySubmissionsRouter);
router.use(contactMessagesRouter);
router.use(youtubeRouter);

export default router;
