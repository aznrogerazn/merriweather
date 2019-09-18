module.exports = function (req, res, next) {
  // res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  // console.log(req.ctx.request.url);
  res.setHeader('Cache-Control', 'public, max-age=38400');
  next();
};