---
title: claude code 之 statusline 配置
date: 2025-09-05
description: 定制自己专属的菜单栏
---

最近 coding 主力，从 cursor 转战到了 claude code，我很喜欢这种命令行的交互方式，那天各种闲看信息的时候，发现有人有很炫酷的显示界面，顿时来了兴趣

如果是想要让默认的话，直接运行 `/statusline 显示模型名称、当前目录和git分支` 就可以了，claude 会自动帮你配置好   
但如果是想要一些炫酷的界面，那就需要自定义一下了

话不多说，进入设置（以 mac 电脑为例）   
运行命令进入到 claude 的目录  `cd ~/.claude`   
编辑 `settings.json`，在文件最后加入   
```
"statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh"
  }
```

保存退出，然后开始编写 `statusline.sh` 脚本内容

这是我在用的脚本内容，如果喜欢的话，可以直接把配置内容拿走

```
#!/bin/bash

# 读取输入
input=$(cat)

# 模型信息
model=$(echo "$input" | jq -r '.model.display_name')

# 当前工作目录
dir=$(echo "$input" | jq -r '.workspace.current_dir' | xargs basename)

# 获取电池状态
battery_info=$(pmset -g batt 2>/dev/null | tail -1)
battery_status=""
if [ -n "$battery_info" ]; then
    battery_percent=$(echo "$battery_info" | grep -oE '[0-9]+%' | head -1)
    if echo "$battery_info" | grep -q " charging\| charged"; then
        battery_status="⚡️ ${battery_percent}"
    else
        battery_status="🐈 ${battery_percent}"
    fi
fi

# 获取 ccusage 费用信息
ccusage_daily_output=$(npx -y ccusage daily -j 2>/dev/null || echo "")

# 从 ccusage 输出中提取今天的费用信息
daily_cost=""
if [ -n "$ccusage_daily_output" ]; then
    today=$(date +%Y-%m-%d)
    daily_cost_raw=$(echo "$ccusage_daily_output" | jq -r --arg today "$today" '.daily[] | select(.date == $today) | .totalCost // 0' 2>/dev/null)
    if [ "$daily_cost_raw" != "0" ] && [ "$daily_cost_raw" != "null" ] && [ -n "$daily_cost_raw" ]; then
        daily_cost=$(printf "\$%.2f" "$daily_cost_raw")
    fi
fi

# 组装输出
output=""

# 时间
output+="🦉 $(date +%H:%M)"

# 模型
output+=" | 🍭 $model"

# 目录
output+=" | 🎯 $dir"

# 电池状态
[ -n "$battery_status" ] && output+=" | $battery_status"

# 费用信息（如果可用）
[ -n "$daily_cost" ] && output+=" | 🔥 $daily_cost today"

# 输出最终结果
echo "$output"
```

我感觉里面的注释已经写的够清楚了，哈哈哈哈，将上面的内容，保存在 `statusline.sh` 文件之后，再给该文件提权 `chmod +x ~/.claude/statusline.sh`   
接下来如果再使用 `claude` 命令，你就能够在下面看到炫酷的状态栏了：   
`🦉 22:24 | 🍭 Sonnet 4 | 🎯 test | ⚡️ 100% | 🔥 $15.78 today`   
这是我电脑充电时候的显示，如果它没在充电的话，显示的是这样的：   
`🦉 22:35 | 🍭 Sonnet 4 | 🎯 test | 🐈 100% | 🔥 $15.78 today`

当然了，如果你觉得，我定义的你不喜欢，也可以直接让 claude 给你改，把你的需求，准确、详细的和它说清楚就行了

update：2025-10-03 00:19:48

备份一下最新的，主要是增加 本月 总消费

```
#!/bin/bash

# 读取输入
input=$(cat)

# 模型信息
model=$(echo "$input" | jq -r '.model.display_name')

# 当前工作目录
dir=$(echo "$input" | jq -r '.workspace.current_dir' | xargs basename)

# 获取电池状态
battery_info=$(pmset -g batt 2>/dev/null | tail -1)
battery_status=""
if [ -n "$battery_info" ]; then
    battery_percent=$(echo "$battery_info" | grep -oE '[0-9]+%' | head -1)
    if echo "$battery_info" | grep -q " charging\| charged"; then
        battery_status="⚡️ ${battery_percent}"
    else
        battery_status="🐈 ${battery_percent}"
    fi
fi

# 获取 ccusage 费用信息
ccusage_daily_output=$(npx -y ccusage daily -j 2>/dev/null || echo "")

# 从 ccusage 输出中提取今天的费用信息
daily_cost=""
total_cost=""
if [ -n "$ccusage_daily_output" ]; then
    today=$(date +%Y-%m-%d)

    # 提取今天的费用
    daily_cost_raw=$(echo "$ccusage_daily_output" | jq -r --arg today "$today" '.daily[] | select(.date == $today) | .totalCost // 0' 2>/dev/null)
    if [ "$daily_cost_raw" != "0" ] && [ "$daily_cost_raw" != "null" ] && [ -n "$daily_cost_raw" ]; then
        daily_cost=$(printf "\$%.2f" "$daily_cost_raw")
    fi

    # 计算本月的总费用
    current_month=$(date +%Y-%m)
    total_cost_raw=$(echo "$ccusage_daily_output" | jq -r --arg month "$current_month" '[.daily[] | select(.date | startswith($month)) | .totalCost // 0] | add // 0' 2>/dev/null)
    if [ "$total_cost_raw" != "0" ] && [ "$total_cost_raw" != "null" ] && [ -n "$total_cost_raw" ]; then
        total_cost=$(printf "\$%.2f" "$total_cost_raw")
    fi
fi

# 组装输出
output=""

# 时间
output+="🦉 $(date +%H:%M)"

# 模型
output+=" | 🍭 $model"

# 目录
output+=" | 🎯 $dir"

# 电池状态
[ -n "$battery_status" ] && output+=" | $battery_status"

# 费用信息(如果可用)
[ -n "$daily_cost" ] && output+=" | 🔥 $daily_cost today"
[ -n "$total_cost" ] && output+=" | 💰 $total_cost total"

# 输出最终结果
echo "$output"
```

该脚本看到的状态栏是：   
`🦉 22:24 | 🍭 Sonnet 4.5 | 🎯 test | ⚡️ 100% | 🔥 $0.63 today | 💰 $34.44 total` 

enjoy～