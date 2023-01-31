import { loadEnvConfig } from '@next/env'

export default async function config() {
  const projectDir = process.cwd()

  loadEnvConfig(projectDir)
}
