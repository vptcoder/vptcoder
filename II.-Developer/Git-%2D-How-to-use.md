#### To create new branch from qa
```sh
# 1. download latest server codes 
# download all branches, does not affect local code yet. Can be understood as storing 2 sets of codes in 2 different folders
# - branchname
# - origin/branchname (code downloaded with this command)
git fetch origin 

# 2. activate qa branch
git checkout qa 

# 3. merge code downloaded from step 1 to local, which is currently active (origin/qa -> qa)
git merge origin/qa

# 4. create a new branch from the current branch and activate that branch
git checkout -b bugfix/newbranch 
```

#### To update ticket branch with latest code from qa
do this periodically to keep your ticket branch up-to-date with new changes in qa branch.
```sh
# 1. download latest server codes 
# download all branches, does not affect local code yet. Can be understood as storing 2 sets of codes in 2 different folders
# - branchname
# - origin/branchname (code downloaded with this command)
git fetch origin

# 2. activate qa branch
git checkout qa

# 3. merge code downloaded from step 1 to local, which is currently active (origin/qa -> qa)
git merge origin/qa

# 4. activate ticket branch
git checkout bugifx/ticketbranch

# 5. merge code from local qa branch to ticket branch, 
# now you have the latest code in the branch you are working on.
git merge qa
```
#### To rename a branch
In case you created a branch with wrong name, and the branch is still only in local
```sh
# 1. activate the branch to be renamed
git checkout branch_with_wrong_name
# 2. do this while the branch to be renamed is active
git branch -m new_name
```

