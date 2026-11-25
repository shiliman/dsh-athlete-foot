export const DATA = {
  id: 'dsh-athlete-foot',
  name: '脚气',
  prefix: 'tinea',
  label: '脚气',
  defaultEeriness: 2,
  gain: 0.26,
  flareChance: 0.2,
  flareGain: 14,
  triggerWeight: 0.85,
  flareWeight: 0.8,
  reliefs: [
    { id: 'wash', label: '洗脚擦干', relief: 16, minutes: 30, calm: 5 },
    { id: 'cream', label: '涂点药', relief: 18, minutes: 60, calm: 5 },
    { id: 'socks', label: '换双干爽的袜子', relief: 12, minutes: 120, calm: 4 },
  ],
  body: {
    stiff: '脚趾缝里有点痒，坐着的时候会不自觉蹭一下。',
    ache: '两只脚的趾缝都脱了皮，越挠越痒；脱了鞋才敢挠两下。',
    flare: '痒得坐不住，只能把脚缩起来蹭；一走路又磨得疼。',
  },
  voice: {
    base: '不提；涉及脱鞋、换鞋、去别人家做客的场合，允许找个理由推掉。被问就说「屋里有点热」。',
    flare: '允许一次找借口离开；禁止拿这个开玩笑，禁止描述皮屑。',
  },
}
