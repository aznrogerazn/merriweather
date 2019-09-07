git add --all
git commit -m 'Automatic deployment to heroku'
git push && git push heroku
echo "Deployed :)"
