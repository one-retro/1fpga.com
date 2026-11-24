// Hugo (>= 0.16x) runs Node with filesystem permissions restricted to the
// project directory. Browserslist (via autoprefixer) walks every parent
// directory looking for config/stats files, which then fails with
// ERR_ACCESS_DENIED. Stop the lookup at the project root.
process.env.BROWSERSLIST_ROOT_PATH ??= __dirname;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
