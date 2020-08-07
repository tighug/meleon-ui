/**
 * See https://stackoverflow.com/questions/41482448/material-design-elevation-correct-css
 * @param elevation
 */
export default function boxShadow(elevation?: number): string {
  const penumbra = penumbraMap(elevation);
  const umbra = umbraMap(elevation);
  const ambient = ambientMap(elevation);

  return `${penumbra} rgba(0,0,0,0.14), ${umbra} rgba(0,0,0,0.12), ${ambient} rgba(0,0,0,0.20)`;
}

function penumbraMap(elevation?: number) {
  switch (elevation) {
    case 0:
      return "0px 0px 0px 0px";
    case 1:
      return "0px 1px 1px 0px";
    case 2:
      return "0px 2px 2px 0px";
    case 3:
      return "0px 3px 4px 0px";
    case 4:
      return "0px 4px 5px 0px";
    case 5:
      return "0px 5px 8px 0px";
    case 6:
      return "0px 6px 10px 0px";
    case 7:
      return "0px 7px 10px 1px";
    case 8:
      return "0px 8px 10px 1px";
    case 9:
      return "0px 9px 12px 1px";
    case 10:
      return "0px 10px 14px 1px";
    case 11:
      return "0px 11px 15px 1px";
    case 12:
      return "0px 12px 17px 2px";
    case 13:
      return "0px 13px 19px 2px";
    case 14:
      return "0px 14px 21px 2px";
    case 15:
      return "0px 15px 22px 2px";
    case 16:
      return "0px 16px 24px 2px";
    case 17:
      return "0px 17px 26px 2px";
    case 18:
      return "0px 18px 28px 2px";
    case 19:
      return "0px 19px 29px 2px";
    case 20:
      return "0px 20px 31px 3px";
    case 21:
      return "0px 21px 33px 3px";
    case 22:
      return "0px 22px 35px 3px";
    case 23:
      return "0px 23px 36px 3px";
    case 24:
      return "0px 24px 38px 3px";
    default:
      return "0px 0px 0px 0px";
  }
}

function umbraMap(elevation?: number) {
  switch (elevation) {
    case 0:
      return "0px 0px 0px 0px";
    case 1:
      return "0px 2px 1px -1px";
    case 2:
      return "0px 3px 1px -2px";
    case 3:
      return "0px 3px 3px -2px";
    case 4:
      return "0px 2px 4px -1px";
    case 5:
      return "0px 3px 5px -1px";
    case 6:
      return "0px 3px 5px -1px";
    case 7:
      return "0px 4px 5px -2px";
    case 8:
      return "0px 5px 5px -3px";
    case 9:
      return "0px 5px 6px -3px";
    case 10:
      return "0px 6px 6px -3px";
    case 11:
      return "0px 6px 7px -4px";
    case 12:
      return "0px 7px 8px -4px";
    case 13:
      return "0px 7px 8px -4px";
    case 14:
      return "0px 7px 9px -4px";
    case 15:
      return "0px 8px 9px -5px";
    case 16:
      return "0px 8px 10px -5px";
    case 17:
      return "0px 8px 11px -5px";
    case 18:
      return "0px 9px 11px -5px";
    case 19:
      return "0px 9px 12px -6px";
    case 20:
      return "0px 10px 13px -6px";
    case 21:
      return "0px 10px 13px -6px";
    case 22:
      return "0px 10px 14px -6px";
    case 23:
      return "0px 11px 14px -7px";
    case 24:
      return "0px 11px 15px -7px";
    default:
      return "0px 0px 0px 0px";
  }
}

function ambientMap(elevation?: number) {
  switch (elevation) {
    case 0:
      return "0px 0px 0px 0px";
    case 1:
      return "0px 1px 3px 0px";
    case 2:
      return "0px 1px 5px 0px";
    case 3:
      return "0px 1px 8px 0px";
    case 4:
      return "0px 1px 10px 0px";
    case 5:
      return "0px 1px 14px 0px";
    case 6:
      return "0px 1px 18px 0px";
    case 7:
      return "0px 2px 16px 1px";
    case 8:
      return "0px 3px 14px 2px";
    case 9:
      return "0px 3px 16px 2px";
    case 10:
      return "0px 4px 18px 3px";
    case 11:
      return "0px 4px 20px 3px";
    case 12:
      return "0px 5px 22px 4px";
    case 13:
      return "0px 5px 24px 4px";
    case 14:
      return "0px 5px 26px 4px";
    case 15:
      return "0px 6px 28px 5px";
    case 16:
      return "0px 6px 30px 5px";
    case 17:
      return "0px 6px 32px 5px";
    case 18:
      return "0px 7px 34px 6px";
    case 19:
      return "0px 7px 36px 6px";
    case 20:
      return "0px 8px 38px 7px";
    case 21:
      return "0px 8px 40px 7px";
    case 22:
      return "0px 8px 42px 7px";
    case 23:
      return "0px 9px 44px 8px";
    case 24:
      return "0px 9px 46px 8px";
    default:
      return "0px 0px 0px 0px";
  }
}
