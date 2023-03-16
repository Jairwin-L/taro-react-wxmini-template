// from：https://github.com/modood/Administrative-divisions-of-China
import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';

function getCascadeData() {
  areas.forEach((area) => {
    const matchCity: INutuiTaro.ProvinceOption = cities.filter(
      (city) => city.code === area.cityCode,
    )[0];
    if (matchCity) {
      matchCity.children = matchCity.children || [];
      matchCity.children.push({
        text: area.name,
        value: area.code,
      });
    }
  });
  cities.forEach((city: INutuiTaro.ProvinceOption) => {
    const matchProvince: INutuiTaro.ProvinceOption = provinces.filter(
      (province) => province.code === city.provinceCode,
    )[0];
    if (matchProvince) {
      matchProvince.children = matchProvince.children || [];
      matchProvince.children.push({
        text: city.name,
        value: city.code,
        children: city.children,
      });
    }
  });
  const options = provinces.map((province: INutuiTaro.ProvinceOption) => ({
    text: province.name,
    value: province.code,
    children: province.children,
  }));
  return options;
}

export default getCascadeData;
