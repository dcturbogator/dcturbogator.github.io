---
layout: post
author: Chris Anderson
title: Git Commands 
subtitle: Reference for common git commands
tags: Technology Code Git
thumbnail-img: /assets/img/github1.png
published: true
youtubeurl: https://www.youtube.com/embed/wwRAgbfMV1o
---

I have used a number of source control systems throughout my years as a software developer. Visual SourceSafe, TortoiseCVS, Team Foundation Server, and Git. The most recent being Git and it is by far my favorite to work with.

If you're not familiar with Git, it is a version control system to handle small to large projects. It is also open source and free to use. Not only that, it is the most popular version control system. If you are currently developing you are probably using Git, if you are an aspiring developer it would be wise to learn some basic git commands.

I won't use this post to go  deep into Git, but this is a reference for some of the most common Git commands that I use on a daily basis.

## Common Git Commands 

| Description | Command | 
| :------ |:--- | 
| Initialize git | git init | 
| Set name and email. |  git config \-\-global user.name<br />git config \-\-global user.email | 
| add files | git add file.md | 
| commit changes | git commit -m \"commit message\" | 
| create branch | git branch feat1 | 
| switch branches | git switch feat1 | 
| merge branch | git merge feat2 | 
| delete local branch  | git branch -d feat2 | 
| delete remote branch | git push origin -d feat2 |
| list commits  | git log \-\-oneline \-\-all \-\-graph | 
| push changes  | git push | 
| push local branch  | git push -u origin feat1 | 
| rename file | git mv oldFilename newFilename |

## Learn to Install and Setup Git

Check out my tutorial below to get started with Git




