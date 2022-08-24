echo "Add Commit Message: ";

read msg;
git add .;
git commit -m "$msg";

git push;