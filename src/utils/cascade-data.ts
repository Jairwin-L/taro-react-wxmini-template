// from：https://github.com/modood/Administrative-divisions-of-China
import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';
/**
 * @module genCascadeData
 * @description 获取地址级联数据
 */
function genCascadeData() {
  const citiesMap = new Map();
  cities.forEach((item) => {
    const { provinceCode } = item;
    if (!citiesMap.has(provinceCode)) {
      citiesMap.set(provinceCode, []);
    }
    citiesMap.get(provinceCode).push({
      text: item.name,
      value: item.code,
      children: [],
    });
  });

  const provincesMap = new Map();
  provinces.forEach((item) => {
    const provinceCode = item.code;
    if (!provincesMap.has(provinceCode)) {
      provincesMap.set(provinceCode, []);
    }
    const provinceCities = citiesMap.get(provinceCode) || [];
    provinceCities.forEach((subItem) => {
      const cityCode = subItem.value;
      const cityAreas = areas.filter((area) => area.cityCode === cityCode);
      if (cityAreas.length > 0) {
        subItem.children = cityAreas.map((area) => ({
          text: area.name,
          value: area.code,
        }));
      }
      provincesMap.get(provinceCode).push(subItem);
    });
  });

  const options: INutuiTaro.PickerOption[] = [];
  provincesMap.forEach((provinceCities, provinceCode) => {
    const province = provinces.find((item) => item.code === provinceCode);
    if (province) {
      options.push({
        text: province.name,
        value: provinceCode,
        children: provinceCities,
      });
    }
  });

  return options;
}
/**
 * @module getCodeToText
 * @description 级联code转文案
 */
function getCodeToText(codes) {
  const option = genCascadeData();
  let provinceCodeText = '';
  let cityCodeText = '';
  let countyCodeText = '';
  for (const item of option) {
    if (item.value === codes[0]) {
      provinceCodeText = item.text as string;
      if (!codes[1]) break;
      for (const subItem of item.children || []) {
        if (subItem.value === codes[1]) {
          cityCodeText = subItem.text as string;
          if (!codes[2]) break;
          for (const lastItem of subItem.children || []) {
            if (lastItem.value === codes[2]) {
              countyCodeText = lastItem.text as string;
              break;
            }
          }
          break;
        }
      }
      break;
    }
  }

  return `${provinceCodeText}${cityCodeText}${countyCodeText}`;
}

export { genCascadeData, getCodeToText };
