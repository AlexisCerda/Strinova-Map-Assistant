// The value of each key represents the corresponding key in the language file
export enum MapName {
  WindyTown = 'WindyTown',
  SpaceLab = 'SpaceLab',
  Khesmet = 'Khesmet',
  EulerPort = 'EulerPort',
  CauchyDistrict = 'CauchyDistrict',
  Area88 = 'Area88',
  Base404 = 'Base404',
  Ocarnus = 'Ocarnus',
  LebrunCity = 'LebrunCity',
}

interface MapList {
  map: MapName;
  imgPrepareLink: string;
  imgBlankLink: string;
}

export const mapList: MapList[] = [
  {
    map: MapName.WindyTown,
    imgPrepareLink: '/src/assets/image/map/WindyTown_P.png',
    imgBlankLink: '/src/assets/image/map/WindyTown_B.png',
  },
  {
    map: MapName.SpaceLab,
    imgPrepareLink: '/src/assets/image/map/SpaceLab_P.png',
    imgBlankLink: '/src/assets/image/map/SpaceLab_B.png',
  },
  {
    map: MapName.Khesmet,
    imgPrepareLink: '/src/assets/image/map/Khesmet_P.png',
    imgBlankLink: '/src/assets/image/map/Khesmet_B.png',
  },
  {
    map: MapName.EulerPort,
    imgPrepareLink: '/src/assets/image/map/EulerPort_P.png',
    imgBlankLink: '/src/assets/image/map/EulerPort_B.png',
  },
  {
    map: MapName.CauchyDistrict,
    imgPrepareLink: '/src/assets/image/map/CauchyDistrict_P.png',
    imgBlankLink: '/src/assets/image/map/CauchyDistrict_B.png',
  },
  {
    map: MapName.Area88,
    imgPrepareLink: '/src/assets/image/map/Area88_P.png',
    imgBlankLink: '/src/assets/image/map/Area88_B.png',
  },
  {
    map: MapName.Base404,
    imgPrepareLink: '/src/assets/image/map/Base404_P.png',
    imgBlankLink: '/src/assets/image/map/Base404_B.png',
  },
  {
    map: MapName.Ocarnus,
    imgPrepareLink: '/src/assets/image/map/Ocarnus_P.png',
    imgBlankLink: '/src/assets/image/map/Ocarnus_B.png',
  },
  {
    map: MapName.LebrunCity,
    imgPrepareLink: '/src/assets/image/map/LebrunCity_P.png',
    imgBlankLink: '/src/assets/image/map/LebrunCity_B.png',
  },
];
