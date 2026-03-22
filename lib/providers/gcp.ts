import type { ProviderAdapter } from "@/lib/providers/types";

export const gcpAdapter: ProviderAdapter = {
  name: "gcp",
  async fetchSpend({ apiKey, windowStart, windowEnd }) {
    // Placeholder adapter for A/B fallback. GCP does not have a pull-based backend in this MVP;
    // data is expected via push webhook (/api/webhooks/gcp-budget) when available.
    // Implement Cloud Billing API and `gcp` provider shoot in future versions.
    return [
      {
        provider: "gcp",
        startTime: windowStart,
        endTime: windowEnd,
        usageUnits: 0,
        costUsd: 0,
        sourceRef: "gcp:synthetic"
      }
    ];
  }
};
