import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [{
      type: 'autogenerated',
      dirName: 'docs'
    }
  ],
  quickSidebar: [{
      type: 'autogenerated',
      dirName: 'quick'
    }
  ],
  courseSidebar: [
    'course/社区教程',
    'course/视频入门教程',
    'course/starbook/starbook',
    'course/proxima-book/proxima-book',
  ],
  courseStarBookSidebar: [{
      type: 'autogenerated',
      dirName: 'course/starbook'
    }
  ],
  courseProximaBookSidebar: [{
      type: 'autogenerated',
      dirName: 'course/proxima-book'
    }
  ],
  releaseSidebar: [{
      type: 'autogenerated',
      dirName: 'release'
    }
  ],
  examplesSidebar: [{
    type: 'autogenerated',
    dirName: 'examples'
  }
],
  communitySidebar: [{
      type: 'autogenerated',
      dirName: 'community'
    }
  ],
};

export default sidebars;
