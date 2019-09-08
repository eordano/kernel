import { ISceneWorker } from '../scene-scripts/interface/ISceneWorker'
import { IRendererParcelSceneAPI } from './IRendererParcelSceneAPI'

/**
 * Use this as a mock for a Renderer's Parcel Scene behavior if there is no renderer connected
 */
export class MemoryRendererParcelScene implements IRendererParcelSceneAPI {
  public worker: ISceneWorker
  public sceneManifest: any
  sendBatch(actions: any[]): void {}
  registerWorker(worker: ISceneWorker): void {
    this.worker = worker
    console.log('Registered worker', worker.sceneManifest.id)
  }
  dispose(): void {
    console.log('Disposing worker')
  }
  on(event: string, cb: (event: any) => void): void {}
  off(event: string, cb: (event: any) => void): void {}
  constructor(scene: any) {
    this.sceneManifest = scene
  }
}
