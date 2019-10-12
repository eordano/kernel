import fetch from 'node-fetch'
import { configureDescartes } from './implementation'

const env = process.env.DECENTRALAND_ENV || 'org'
const target: string = process.env.DESCARTES_TARGET || process.env.PWD + '/data'
const mode: DescartesMode = (process.env.DESCARTES_MODE || 'mappings') as DescartesMode

export type DescartesMode = 'mappings' | 'content'

const targetUrl = env.length <= 4 ? `https://content.decentraland.${env}` : env
export type StringCoordinate = string
export type SceneId = string

const descartes = configureDescartes(fetch as any, targetUrl, target)
;(async function() {
  if (mode === 'mappings') {
    console.log('a')
    await descartes.getSceneIdForCoordinates([{ x: -15, y: -15 }, { x: 15, y: 15 }]).then(_ => console.log(_))
  } else {
    console.log('a')
    // TODO
  }
})().catch(e => console.log(e))
