require("shelljs/global");

cd(__dirname);

rm("-r", "build");
mkdir("build");
cp("-r", "images", "scripts", "manifest.json", "build");

exec("node_modules/.bin/jade --out build options.jade", { silent: true });

exec("find build -path \'*/.*\' -prune -o -type f -print | zip build/oneup.zip -@");