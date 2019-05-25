@echo off
title Commit
git add .
git commit -m "《博採眾長》源码更新:{{ now('YYYY-MM-DD HH:mm:ss') }}"
git push