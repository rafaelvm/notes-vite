import { z } from "zod";

export const schema = z.object({
  user: z.string().min(3, "Por favor, informe um usuário válido"),
});
