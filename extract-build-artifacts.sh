(
  cat build/static/js/runtime-main.*.js
  cat build/static/js/2.*.chunk.js
  echo
  cat build/static/js/main.*.chunk.js
) > main.js
