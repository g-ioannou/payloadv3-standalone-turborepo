import { buildConfig } from 'payload'

import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { config } from '@repo/payload/config'

config.sharp = sharp
config.editor = lexicalEditor()

export default buildConfig(config)
