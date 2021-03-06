export function formatValue(value) {
  if ([null, undefined].indexOf(value) !== -1) return null
  return value
}

// export const curry = (fn, arity = fn.length, ...args) =>
//   arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

// export function getCleanProps(props) {
//   const otherProps = { ...props }
//   delete otherProps.status
//   delete otherProps.value
//   delete otherProps.inset
//   delete otherProps.error
//   return otherProps
// }

// 深复制，要想达到深复制就需要用递归
/* eslint-disable */
export function deepCopy (o, c) {
  var c = c || {}

  for (var i in o) {
    if (typeof o[i] === 'object') {
      // 要考虑深复制问题了
      if (o[i].constructor === Array) {
      // 这是数组
      c[i] =[]
      } else {
        // 这是对象
        c[i] = {}
      }
      deepCopy(o[i], c[i])
    } else {
      c[i] = o[i]
    }
  }
  return c
}

/**
 * 解析对象路径
 *
 * @export
 * @param {*} obj
 * @param {*} path
 * @returns
 */
export function parsePath (obj, path="") {
  const bailRE = /[^\w.$]/
  if (bailRE.test(path)) return

  const segments = path.split('.')
  // let obj = this
  for (let i = 0; i < segments.length; i++) {
    if (!obj) return
    obj = obj[segments[i]]
  }
  return obj
  // }
}

export function checkWhen(input) {
  if (typeof input === 'boolean') return input

  if (typeof input === 'function') {
    return input()
  }
}

/**
 * preview态
 *
 * @param {*} value
 * @returns
 */
export function renderValue(h, value) {
  if (value === null || value === undefined) return null // 空值直接返回

  if (Array.isArray(value)) {
    const arrValue = value.map(valItem => (
      <span className="multi-value-item">{valItem}</span>
    ))

    return <div className="multi-value-item-wrapper">{arrValue}</div>
  }

  return <span>{(typeof value === 'boolean') ? value.toString() : value}</span>
}

export function renderOption (h, props) {
  let result = ''
  props.options && props.options.forEach(option => {
    if ((option.value || option.id) === props.props.value) result = option.name || option.label || ''
  })

  return <span>{result}</span>
}

