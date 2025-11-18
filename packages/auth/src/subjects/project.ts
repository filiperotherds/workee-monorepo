import { z } from "zod";

const projectSubject = z.tuple([
  z.union([
    z.literal("manage"),
    z.literal("get"),
    z.literal("create"),
    z.literal("update"),
    z.literal("delete"),
  ]),
  z.literal("Project"),
]);

export type ProjectSubject = z.infer<typeof projectSubject>;
