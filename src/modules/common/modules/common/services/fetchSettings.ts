import { TypeSettings } from "@/modules/common/types/TypeSettings";

export async function fetchSettings(): Promise<TypeSettings> {
  const res = await fetch("/settings/settings1.json");
  return res.json();
}
