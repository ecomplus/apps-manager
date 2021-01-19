/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */

import { ecomAuth } from '@ecomplus/auth'
import listFromMarket from './methods/list-from-market'
import findOnMarket from './methods/find-on-market'
import install from './methods/install'
import remove from './methods/remove'
import edit from './methods/edit'
import list from './methods/list'
import find from './methods/find'
import ecomApps from '.'

/**
 * JS client for manage E-Com Plus Apps
 * @module @ecomplus/apps-manager
 * @see EcomApps
 *
 * @example
 * // ES import
 * import EcomApps from '@ecomplus/apps-manager'
 *
 * @example
 * // With CommonJS
 * const EcomApps = require('@ecomplus/apps-manager')
 *
 * @example
 * <!-- Global `@ecomplus/apps-manager` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/apps-manager@0.1/dist/ecom-apps.root.min.js"></script>
 */

export default class EcomApps {
  custructor() {
    this.ecomAuth = ecomAuth
  }

  async listFromMarket(meta) {
    listFromMarket(ecomApps, meta)
  }

  async findOnMarket(appId) {
    findOnMarket(ecomApps, appId)
  }

  async install(appId, redirect, body) {
    install(ecomApps, appId, redirect, body)
  }

  async remove(_id) {
    remove(ecomApps, _id)
  }

  async edit(_id, body, canUpdateInternals) {
    edit(ecomApps, _id, body, canUpdateInternals)
  }

  async list(meta) {
    list(ecomApps, meta)
  }

  async find(_id) {
    find(ecomApps, _id)
  }

  async listFromMarket(meta) {
    return listFromMarket(ecomApps, meta)
  }
}

/**
 * Construct a new apps manager instance object.
 * @class EcomApps
 *
 * @example
 * const ecomApps = new EcomApps()
 */
