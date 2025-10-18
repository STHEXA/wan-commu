// 受け取った配列から指定の数分、ランダムに選んだ配列を返す関数
export const getRandomBreedsList = <T>(arr: T[], count: number): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};
