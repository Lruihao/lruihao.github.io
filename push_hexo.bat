@echo off
title Commit
git add .
set /p m=Message:
git commit -m "%m%"
git push