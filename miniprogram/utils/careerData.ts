// 职业数据
export interface Career {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  prospects?: string;
  salaryRange: {
    min: number;
    max: number;
    unit: string;
  };
  icon?: string;
}

// 热门职业数据
export const hotCareers: Career[] = [
  {
    id: '1',
    name: '软件工程师',
    category: '技术',
    description: '负责软件系统的设计、开发、测试和维护工作，需要掌握多种编程语言和开发框架。',
    requirements: ['计算机相关专业', '熟悉至少一种编程语言', '良好的逻辑思维能力', '团队协作能力'],
    responsibilities: ['参与需求分析和系统设计', '编写高质量代码', '进行单元测试和集成测试', '代码审查和技术文档编写'],
    prospects: '随着数字化转型的推进，软件工程师需求持续增长，职业前景广阔。',
    salaryRange: {
      min: 8000,
      max: 35000,
      unit: '元/月'
    },
  },
  {
    id: '2',
    name: '产品经理',
    category: '产品',
    description: '负责产品的规划、设计和管理，协调各部门资源，确保产品成功上线和迭代。',
    requirements: ['本科及以上学历', '良好的沟通协调能力', '数据分析能力', '用户体验意识'],
    responsibilities: ['市场调研和用户需求分析', '产品规划和Roadmap制定', '协调开发、设计、运营团队', '产品上线和迭代优化'],
    prospects: '产品经理是互联网公司的核心岗位，发展空间大，可向高级产品经理、产品总监方向发展。',
    salaryRange: {
      min: 10000,
      max: 40000,
      unit: '元/月'
    },
  },
  {
    id: '3',
    name: 'UI设计师',
    category: '设计',
    description: '负责产品的视觉设计工作，包括界面设计、交互设计、品牌设计等，创造美观易用的用户体验。',
    requirements: ['设计相关专业', '熟练使用设计工具', '良好的审美能力', '了解用户体验设计'],
    responsibilities: ['界面视觉设计', '交互原型设计', '设计规范制定', '与开发团队协作实现设计'],
    prospects: '随着用户对产品体验要求的提高，UI设计师需求稳定，可向高级UI、UX设计师方向发展。',
    salaryRange: {
      min: 7000,
      max: 25000,
      unit: '元/月'
    },
  },
  {
    id: '4',
    name: '数据分析师',
    category: '数据',
    description: '通过数据挖掘和分析，为业务决策提供数据支持和洞察，帮助公司优化运营和产品。',
    requirements: ['统计学、数学或相关专业', '熟练使用SQL、Python等工具', '数据分析思维', '业务理解能力'],
    responsibilities: ['数据收集和清洗', '数据分析和建模', '报表和可视化制作', '业务分析和建议'],
    prospects: '数据驱动决策已成为趋势，数据分析师需求持续增长，可向高级数据分析师、数据科学家方向发展。',
    salaryRange: {
      min: 9000,
      max: 30000,
      unit: '元/月'
    },
  },
  {
    id: '5',
    name: '前端工程师',
    category: '技术',
    description: '负责Web前端开发，使用HTML、CSS、JavaScript等技术实现用户界面和交互功能。',
    requirements: ['计算机相关专业', '熟练掌握前端技术栈', '了解前端框架', '良好的代码能力'],
    responsibilities: ['页面开发和交互实现', '前端性能优化', '与后端API对接', '前端技术选型'],
    prospects: '前端技术发展迅速，可向高级前端工程师、前端架构师方向发展。',
    salaryRange: {
      min: 8000,
      max: 30000,
      unit: '元/月'
    },
  },
  {
    id: '6',
    name: '运营专员',
    category: '运营',
    description: '负责产品的日常运营工作，包括内容运营、用户运营、活动运营等，提升产品活跃度和用户满意度。',
    requirements: ['本科及以上学历', '良好的文字表达能力', '用户运营思维', '数据分析能力'],
    responsibilities: ['内容策划和撰写', '用户运营和社群管理', '活动策划和执行', '数据分析和运营优化'],
    prospects: '运营是产品成功的关键环节，可向高级运营、运营总监方向发展，也可转产品经理。',
    salaryRange: {
      min: 6000,
      max: 20000,
      unit: '元/月'
    },
  },
];

// 搜索职业
export function searchCareers(keyword: string): Career[] {
  if (!keyword.trim()) {
    return hotCareers;
  }
  
  const lowerKeyword = keyword.toLowerCase();
  return hotCareers.filter(career => 
    career.name.toLowerCase().includes(lowerKeyword) ||
    career.category.toLowerCase().includes(lowerKeyword) ||
    career.description.toLowerCase().includes(lowerKeyword)
  );
}

// 根据ID获取职业
export function getCareerById(id: string): Career | undefined {
  return hotCareers.find(career => career.id === id);
}

