export type ModelTier = "tiny" | "base" | "small" | "medium"

export interface SpeechModel {
  readonly id: string
  readonly name: string
  readonly tier: ModelTier
  readonly description: string
  readonly downloadSize: string
  readonly memory: string
  readonly languages: readonly string[]
  readonly recommended?: boolean
  readonly installed: boolean
}

const catalog: readonly SpeechModel[] = [
  {
    id: "whisper-base",
    name: "Base",
    tier: "base",
    description: "A balanced starting point for everyday dictation.",
    downloadSize: "142 MB",
    memory: "1 GB RAM",
    languages: ["English", "Danish", "German", "French", "Spanish"],
    recommended: true,
    installed: false,
  },
  {
    id: "whisper-small",
    name: "Small",
    tier: "small",
    description: "More accurate recognition for longer conversations.",
    downloadSize: "466 MB",
    memory: "2 GB RAM",
    languages: ["Multilingual", "99 languages"],
    installed: false,
  },
  {
    id: "whisper-tiny",
    name: "Tiny",
    tier: "tiny",
    description: "The quickest model for low-power machines.",
    downloadSize: "75 MB",
    memory: "512 MB RAM",
    languages: ["English", "Danish", "German", "French", "Spanish"],
    installed: false,
  },
]

export function getModelCatalog(): readonly SpeechModel[] {
  return catalog.map((model) => ({ ...model, languages: [...model.languages] }))
}

export function getRecommendedModel(models: readonly SpeechModel[]): SpeechModel | undefined {
  return models.find((model) => model.recommended) ?? models[0]
}

export function formatModelLanguages(languages: readonly string[]): string {
  return languages.length > 2 ? `${languages[0]} + ${languages.length - 1} more` : languages.join(" + ")
}
