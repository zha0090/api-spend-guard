import { describe, it, expect } from "vitest";
import { getProviderAdapter } from "@/lib/providers";

describe("provider adapters", () => {
  it("returns gcp adapter for gcp provider", () => {
    const adapter = getProviderAdapter("gcp");
    expect(adapter).not.toBeNull();
    expect(adapter?.name).toBe("gcp");
  });

  it("gcp adapter fetchSpend returns a meaningful stub payload", async () => {
    const adapter = getProviderAdapter("gcp");
    expect(adapter).not.toBeNull();
    const samples = await adapter!.fetchSpend({ apiKey: "x", windowStart: "2026-03-22T00:00:00Z", windowEnd: "2026-03-22T01:00:00Z" });
    expect(samples).toHaveLength(1);
    expect(samples[0]).toMatchObject({ provider: "gcp", usageUnits: 0, costUsd: 0 });
    expect(samples[0].startTime).toBe("2026-03-22T00:00:00Z");
    expect(samples[0].endTime).toBe("2026-03-22T01:00:00Z");
  });
});
