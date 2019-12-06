@echo off
title 备份与部署
git add .
git commit -m "《菠菜眾長》源码更新：%date%%time%"
git push
hexo clean&&hexo g -d