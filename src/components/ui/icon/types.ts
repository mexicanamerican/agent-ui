import { type ElementType } from 'react'

export type IconType =
  | 'mistral'
  | 'gemini'
  | 'aws'
  | 'azure'
  | 'anthropic'
  | 'groq'
  | 'fireworks'
  | 'deepseek'
  | 'cohere'
  | 'ollama'
  | 'xai'
  | 'agno'
  | 'user'
  | 'agent'
  | 'open-ai'
  | 'agno'
  | 'user'
  | 'agent'
  | 'sheet'

export interface IconProps {
  type: IconType
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'dot' | 'xxs'
  className?: string
  color?: string
  disabled?: boolean
}

export type IconTypeMap = {
  [key in IconType]: ElementType
}
