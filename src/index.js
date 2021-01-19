/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */


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

import ecomAuth from '@ecomplus/auth'
import EcomApps from './constructor'

const ecomApps = new EcomApps(ecomAuth)

export default ecomApps

export { ecomApps, EcomApps }

/**
 * Construct a new apps manager instance object.
 * @class EcomApps
 *
 * @example
 * const ecomApps = new EcomApps()
 */
