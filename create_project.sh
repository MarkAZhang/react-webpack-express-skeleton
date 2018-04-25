mkdir ../$1
rsync -a \
  --exclude dist \
  --exclude node_modules \
  --exclude .git \
  --exclude create_project.sh \
  --exclude README.md \
  . ../$1


