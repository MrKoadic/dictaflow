import { describe, expect, it } from "vitest"
import { formatModelLanguages, getModelCatalog, getRecommendedModel } from "./modelCatalog"

describe("model catalog", () => {
  it("returns a balanced default model", () => {
    const model = getRecommendedModel(getModelCatalog())

    expect(model?.id).toBe("whisper-base")
    expect(model?.recommended).toBe(true)
  })

  it("does not expose mutable catalog state", () => {
    const first = getModelCatalog()
    ;(first[0].languages as string[])[0] = "Changed"

    expect(getModelCatalog()[0].languages[0]).toBe("English")
  })

  it("formats long language lists for compact UI", () => {
    expect(formatModelLanguages(["English", "Danish", "German"])).toBe("English + 2 more")
    expect(formatModelLanguages(["English", "Danish"])).toBe("English + Danish")
  })
})
