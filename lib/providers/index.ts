import { anthropicAdapter } from "@/lib/providers/anthropic";
import { gcpAdapter } from "@/lib/providers/gcp";
import { openAIAdapter } from "@/lib/providers/openai";
import type { ProviderName } from "@/lib/types";

export function getProviderAdapter(provider: ProviderName) {
  switch (provider) {
    case "openai":
      return openAIAdapter;
    case "anthropic":
      return anthropicAdapter;
    case "gcp":
      return gcpAdapter;
    default:
      return null;
  }
}
