git filter-branch --env-filter '
NEW_NAME="goldendragon"
NEW_EMAIL="reginafrankjames30@gmail.com"

if [ "$GIT_COMMITTER_EMAIL" != "$NEW_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" != "$NEW_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

