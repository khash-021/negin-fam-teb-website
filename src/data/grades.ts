import type { GradeId } from "@/lib/i18n/dictionary";

export type Grade = {
  id: GradeId;
  slug: string;
  percent: string;
  image: string;
};

export const grades: Grade[] = [
  { id: "70", slug: "grade-70", percent: "70%", image: "/products/ethanol-70-landscape.png" },
  { id: "96", slug: "grade-96", percent: "96%", image: "/products/ethanol-96-landscape.png" },
  { id: "998", slug: "grade-99-8", percent: "99.8%", image: "/products/ethanol-99-landscape.png" },
];
