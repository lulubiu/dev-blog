#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stat.size;
    }
  }
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBuild() {
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(outDir)) {
    console.log('Build output directory not found. Please run "npm run build" first.');
    return;
  }
  
  console.log('📊 Bundle Analysis Report');
  console.log('========================');
  
  const totalSize = getDirectorySize(outDir);
  console.log(`Total build size: ${formatBytes(totalSize)}`);
  
  // 分析主要目录
  const dirs = ['_next', 'assets', 'blog', 'daily', 'think'];
  
  dirs.forEach(dir => {
    const dirPath = path.join(outDir, dir);
    if (fs.existsSync(dirPath)) {
      const size = getDirectorySize(dirPath);
      const percentage = ((size / totalSize) * 100).toFixed(1);
      console.log(`${dir}/: ${formatBytes(size)} (${percentage}%)`);
    }
  });
  
  // 查找最大的文件
  console.log('\n📁 Largest files:');
  const allFiles = [];
  
  function collectFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        allFiles.push({
          path: path.relative(outDir, filePath),
          size: stat.size
        });
      } else if (stat.isDirectory()) {
        collectFiles(filePath);
      }
    }
  }
  
  collectFiles(outDir);
  
  const largestFiles = allFiles
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);
  
  largestFiles.forEach(file => {
    console.log(`${file.path}: ${formatBytes(file.size)}`);
  });
}

analyzeBuild(); 