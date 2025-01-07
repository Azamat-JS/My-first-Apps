const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(res, req, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper;