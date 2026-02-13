// const requestLogger = (req, res, next) => {
//   const start = Date.now();
//   console.log(`${req.method} ${req.url}`);

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(`${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
//   });

//   next(); // 🔥 THIS LINE FIXES EVERYTHING
// };

// module.exports = requestLogger;


const requestLogger = (req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
  });

  next(); // ✅ YOU MUST ADD THIS
};

module.exports = requestLogger;
