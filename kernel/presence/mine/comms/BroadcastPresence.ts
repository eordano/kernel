import { createLogger } from '@dcl/utils'
import { ProtocolConnection } from '../../../comms/brokers/ProtocolConnection'

const logger = createLogger('BroadcastPresence')

export const POSITION_BEACON_INTERVAL = 100

export class BroadcastPresence {
  time: number = 0
  lastPositionSentTimestamp: number = 0

  comms: ProtocolConnection

  activate(comms: ProtocolConnection) {
    this.comms = comms
    this.time = 0
  }

  deactivate() {
    this.comms = null
  }

  update(dt: number) {
    if (!this.comms) {
      return
    }
    this.time += dt
    this.checkAndAnnouncePosition()
  }

  checkAndAnnouncePosition() {
    if (this.shouldSendPositionBeacon()) {
      // if (!this.myPresence.allowedToBroadcastPosition()) {
      //   return
      // }
      // const topic = this.myPresence.getTopicForCurrentPosition()
      // logger.info('Broadcasting presence on channel', topic)
      // sendPosition(this.comms, topic, this.myPresence.getPositionReport() as any)
    }
  }

  shouldSendPositionBeacon() {
    return this.time - this.lastPositionSentTimestamp > POSITION_BEACON_INTERVAL
  }
}
