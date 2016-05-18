import Delta from './delta'

function makeEaseOut(delta, options) {
  return function(progress) {
    return 1 - delta(1 - progress, options)
  }
}

function makeEaseInOut(delta, options) {
  return function(progress) {
    if (progress < .5)
      return delta(2 * progress, options) / 2
    else
      return (2 - delta(2 * (1 - progress), options)) / 2
  }
}

export default function animate(opts) {
  var {
    duration = 1000, /* 1 sec by default */
    delay = 10,
    step, /* step function */
    delta, /* delta function */
    options,
    ease
  } = opts

  if(typeof delta === 'string')
    delta = Delta[delta]

  if(ease == 'out')
    delta = makeEaseOut(delta, options)
  else if(ease == 'inout')
    delta = makeEaseInOut(delta, options)

  var started = false

  return {
    start: function() {
      if(started)
        return this

      started = true

      var started_at = new Date

      var id = setInterval(function() {
        var time_passed = new Date - started_at
        var progress = time_passed / duration

        if (progress > 1) progress = 1

        step(delta(progress, options))

        if (progress == 1 || !started) {
          clearInterval(id)
        }
      }, delay)

      return this
    },

    stop: function() {
      started = false;

      return this
    }
  }
}

