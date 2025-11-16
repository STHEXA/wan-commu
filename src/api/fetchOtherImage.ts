export const fetchOtherImage = async (breeds: string) => {
  let image = "";
  if (!breeds) {
    image = "/images/dog-house.jpg";
    return image;
  }
  try {
    const res = await fetch(
      `https://dog.ceo/api/breed/${breeds}/images/random`
    );
    if (!res.ok) {
      throw new Error("データ取得に失敗しました。");
    }
    const data = await res.json();
    image = data.message;
    return image;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
      image = "/images/dog-house.jpg";
      return image;
    }
  }
};
