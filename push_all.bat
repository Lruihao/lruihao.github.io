@echo off
title 备份与部署
git add .
git commit -m "《博採眾長》源码更新：%time%"
git push
hexo clean&&hexo g -d