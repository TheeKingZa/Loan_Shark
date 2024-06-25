#!/usr/bin/bash
# Git Opperations to deploy the Loan Shark


#  git add all
git add .

# git commit to be made
git commit -m "[default commit from deploy_loan]"

# push to origin master new changes
git push origin master

# change to other [branch]
# branch_name -> online

git checkout online

# git merge [master] branch
git merge master


# push new changes to branch
git push origin online

# switch back to master after deploying
git checkout master