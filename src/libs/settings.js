import { dbSelect } from './DB'

async function getSettings () {
  var settings = {}
  dbSelect('select * from settings', 'all', function (err, result) {
    if (err === null && typeof result !== 'undefined') {
      result.forEach(item => {
        settings[item.key] = item.value
      })
    }
  })
  return settings
}

export { getSettings }
