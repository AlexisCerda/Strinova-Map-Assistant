export enum grenades {
  Flashbang = 'Flashbang',
  FragGrenade = 'FragGrenade',
  HealingGrenade = 'HealingGrenade',
  Interceptor = 'Interceptor',
  SlowGrenade = 'SlowGrenade',
  SmokeBomb = 'SmokeBomb',
  Alarm = 'Alarm',
  WindstormGrenade = 'WindstormGrenade',
  SnowBall = 'SnowBall',
  ShieldBarrier = 'ShieldBarrier',
}

export interface grenadeData {
  grenade: grenades;
  imageLink: string;
}

export const grenadeData: grenadeData[] = [
  {
    grenade: grenades.SmokeBomb,
    imageLink: '/src/assets/image/grenade/smokeBomb.png',
  },
  {
    grenade: grenades.SnowBall,
    imageLink: '/src/assets/image/grenade/snowBall.png',
  },
  {
    grenade: grenades.Alarm,
    imageLink: '/src/assets/image/grenade/alarm.png',
  },
  {
    grenade: grenades.ShieldBarrier,
    imageLink: '/src/assets/image/grenade/shieldBarrier.png',
  },
  {
    grenade: grenades.SlowGrenade,
    imageLink: '/src/assets/image/grenade/slowGrenade.png',
  },
  {
    grenade: grenades.HealingGrenade,
    imageLink: '/src/assets/image/grenade/healingGrenade.png',
  },
  {
    grenade: grenades.FragGrenade,
    imageLink: '/src/assets/image/grenade/fragGrenade.png',
  },
  {
    grenade: grenades.Flashbang,
    imageLink: '/src/assets/image/grenade/flashbang.png',
  },
  {
    grenade: grenades.WindstormGrenade,
    imageLink: '/src/assets/image/grenade/windstormGrenade.png',
  },
  {
    grenade: grenades.Interceptor,
    imageLink: '/src/assets/image/grenade/interceptor.png',
  },
];

export enum others {
  Bomb = 'Bomb',
  BombA = 'BombA',
  BombB = 'BombB',
  BombC = 'BombC',
  Focus = 'Focus',
  Warning = 'Warning',
  Flag = 'Flag',
  Danger = 'Danger',
}

export interface otherData {
  other: others;
  imageLink: string;
}

export const otherData: otherData[] = [
  {
    other: others.Bomb,
    imageLink: '/src/assets/image/pin/bomb.png',
  },
  {
    other: others.BombA,
    imageLink: '/src/assets/image/pin/bombA.png',
  },
  {
    other: others.BombB,
    imageLink: '/src/assets/image/pin/bombB.png',
  },
  {
    other: others.BombC,
    imageLink: '/src/assets/image/pin/bombC.png',
  },
  {
    other: others.Focus,
    imageLink: '/src/assets/image/pin/focus.png',
  },
  {
    other: others.Warning,
    imageLink: '/src/assets/image/pin/warning.png',
  },
  {
    other: others.Flag,
    imageLink: '/src/assets/image/pin/flag.png',
  },
  {
    other: others.Danger,
    imageLink: '/src/assets/image/pin/danger.png',
  },
];
