export default class Margin extends Object {

  constructor(config) {
    super(config)
    Object.assign(this, Margin.parse(config))
  }

  static parse(v) {

    // TODO: px 외 다른 단위에 대한 구현 필요여부 확인

    var parsed = v

    if(!parsed)
      parsed = {
        top : 0,
        right : 0,
        bottom : 0,
        left : 0
      }

    if( typeof parsed === 'number' )
      parsed = String(parsed)

    if( typeof parsed === 'string' ) {
      var vArr = parsed.split(' ');

      if( vArr.length === 1 ) {
        parsed = {
          top : Number(vArr[0]),
          right : Number(vArr[0]),
          bottom : Number(vArr[0]),
          left : Number(vArr[0])
        }
      } else if ( vArr.length === 2 ) {
        parsed = {
          top : Number(vArr[0]),
          right : Number(vArr[1]),
          bottom : Number(vArr[0]),
          left : Number(vArr[1])
        }
      } else if ( vArr.length === 4 ) {
        parsed = {
          top : Number(vArr[0]),
          right : Number(vArr[1]),
          bottom : Number(vArr[2]),
          left : Number(vArr[3])
        }
      }
    }

    return parsed
  }

}
