import clinet, { baseDomain } from "./repository";

class Banner {
  getMainBanner(bannerType) {
    const endPoint = `content/image/${bannerType}`;

    const banner = clinet
      .get(baseDomain + endPoint)
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return banner;
  }
}

export default new Banner();
