---
title: react-native-skills（移动端实践）
description: RN/Expo 最佳实践：列表、动画、导航与 monorepo 的规则集
hidden: true
sidebar: false
outline: [2, 3]
---

# react-native-skills（移动端实践）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

React Native / Expo 的性能与 UI 规则集，8 个类别按优先级排：列表性能 CRITICAL，动画、导航、UI 模式 HIGH，状态、渲染、monorepo、配置递减。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/react-native-skills/preview.jpg" alt="移动端实践封面：FlashList、Reanimated、原生导航" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

移动端最容易翻车的几处都给了明确答案：

- 大列表用 FlashList 虚拟化，列表项 memo、回调稳定、不写内联 style 对象；
- 动画只动 transform 和 opacity（GPU 属性），计算动画用 `useDerivedValue`；
- 导航用 native stack / native tabs，不用 JS 导航器；
- 图片统一 expo-image，按压用 Pressable 而非 TouchableOpacity；
- monorepo 里原生依赖放 app 包、全仓单一版本；自定义字体走 config plugin。

还覆盖 React Compiler 与 Reanimated shared values 的配合这类新坑。规则文件同样是错误/正确对照，编译版在 `AGENTS.md`。

## 怎么用

- `npx skills add vercel-labs/agent-skills` 安装；
- 写 RN 组件、优化列表滚动、做动画、配原生模块时触发；
- 纯 Web 项目用不上，别和 react-best-practices 混装混触发。

## 挑选建议

收藏里第一份移动端规则集。只做 Web 的话它的价值是「对照」：很多规则（memo、稳定回调、派生状态）与 Web 版同源，能看出哪些优化是跨平台通用的。

## 出处

- 仓库：[vercel-labs/agent-skills · react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills)
- 许可：MIT（SKILL.md 声明）
- 标签：编码开发 / React Native / Expo