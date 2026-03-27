设计修改说明

## 主要变更 (基于用户反馈)

### 1. 移除开屏页，直接展示券合集
- **修改**: Header从全屏Hero缩小为高度1/5的小型横幅
- **位置**: src/components/Header.tsx
- **高度**: 约160px (h-40)
- **内容**: 简洁的品牌展示和标语

### 2. 配色改为蓝白清新风格
- **主色**: 蓝色 (hsl(204, 80%, 50%))
- **背景**: 从蓝白渐变到纯白
- **强调色**: 蓝色系 (blue-50, blue-100, blue-500, blue-600)
- **文件修改**:
  - src/index.css - CSS变量更新
  - tailwind.config.ts - 移除train.xxx颜色

### 3. 平台更新为新列表
**新平台**: Trainpal, AVANTI WEST COAST, LNER, MyVoucherCodes, GWR

**券数量配置**:
- LNER: 2张券
- MyVoucherCodes: 2张券
- Trainpal: 1张券
- AVANTI WEST COAST: 1张券
- GWR: 1张券

**平台配置**: src/data/deals.ts

**各平台品牌色**:
- Trainpal: #0066CC (蓝色)
- AVANTI WEST COAST: #E16B2E (橙色)
- LNER: #DA1A21 (红色)
- MyVoucherCodes: #00A6FB (亮蓝色)
- GWR: #0F1B5C (深蓝色)

### 4. 券卡片样式恢复简洁设计
**修改**: src/components/DealCard.tsx

**特点**:
- 删除豪华版的金色渐变和复杂动画
- 保留基础悬停效果 (hover:shadow-md)
- 蓝色主色调
- 简洁的边框和按钮样式
- 保持原有的功能不变

### 5. 小头图设计
**位置**: src/components/Header.tsx

**特点**:
- 高度: 占屏幕1/5 (约160px)
- 背景: 火车风景图片 (Unsplash占位)
- 叠加: 蓝色渐变遮罩
- 内容: Train.news品牌 + 标语
- 右侧: Save up to 50% 提示

### 6. 页面布局调整
**文件**: src/pages/Index.tsx

**修改**:
- 页面标题改为 "Today's Best Rail Deals"
- 副标题改为英国铁路运营商
- 页脚改为简洁的灰白设计
- WhatsApp区域暂时保留，可再决定是否移除

### 7. 图标更新
**平台对应图标**:
- Trainpal: Train
- AVANTI WEST COAST: TrainFront
- LNER: Zap
- MyVoucherCodes: Tag
- GWR: TrainTrack

## 技术细节

### 保留的功能
- ✅ 埋点统计 (trackClick)
- ✅ 顶级优惠高亮显示
- ✅ 点击跳转外链
- ✅ 响应式设计
- ✅ 移动端适配

### 移除的功能
- ❌ 开屏Hero动画
- ❌ 金色奢华配色
- ❌ Framer Motion复杂动画
- ❌ 视差滚动效果
- ❌ 粒子动画
- ❌ 浮动图标动画

### 添加的改进
- 更简洁的卡片设计
- 蓝白清新配色
- 更直接的券展示
- 移动优先的布局

## 文件修改清单

**已修改文件**:
1. src/index.css - 蓝白配色变量
2. tailwind.config.ts - 移除金色配色
3. src/components/Header.tsx - 小型横幅
4. src/data/deals.ts - 新平台数据
5. src/components/DealCard.tsx - 简洁券样式
6. src/components/BrandSection.tsx - 简洁品牌展示
7. src/pages/Index.tsx - 新平台布局和图标

**未修改保留**:
- index.html (已经合适)
- WhatsAppSection.tsx (可后续决定是否移除)

## 视觉预览

**移动端体验**:
- 直接进入券列表
- 小型Header横幅展示品牌
- 简洁的蓝白配色
- 清晰的券信息展示
- 底部简洁页脚

**桌面端体验**:
- 居中布局 (max-w-2xl)
- 卡片悬停效果
- 简洁专业的视觉
- 易于浏览的列表

## 后续建议

可选改进:
1. 替换Header背景图为真实的英国火车风景
2. 考虑是否保留或精简WhatsApp区域
3. 添加加载动画提升体验
4. 优化券排序算法（按折扣力度）
5. 添加筛选功能（按运营商/折扣类型）
