@echo off
title 源码备份
git add .
git commit -m "《博採眾長》源码更新：%date%%time%"
git push
