import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/fuel-c-store-partners", "/team", "/privacy"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
  }));
}
