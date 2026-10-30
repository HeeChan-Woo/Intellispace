import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "성함을 2자 이상 입력해 주세요.").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("올바른 이메일 주소를 입력해 주세요.").max(160),
  phone: z.string().trim().max(40).optional(),
  services: z.array(z.string()).max(4),
  timeline: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(100).optional(),
  description: z.string().trim().min(20, "프로젝트 내용을 20자 이상 입력해 주세요.").max(5000),
  privacy: z.literal(true, { error: "개인정보 수집·이용에 동의해 주세요." }),
  website: z.string().max(0).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
