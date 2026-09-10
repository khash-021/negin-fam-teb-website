import type { GradeId } from "@/lib/i18n/dictionary";

export type Grade = {
  id: GradeId;
  slug: string;
  percent: string;
};

export const grades: Grade[] = [
  { id: "70", slug: "grade-70", percent: "70%" },
  { id: "96", slug: "grade-96", percent: "96%" },
  { id: "998", slug: "grade-99-8", percent: "99.8%" },
];
