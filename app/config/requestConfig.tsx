// utils/dataFetch.ts
import { get } from "@app/utils/request";

export const getWordMap = async () => {
  try {
    const mapData = await get('/json/world.topo.json'); // 获取 public/json/world.topo.json 文件
    return mapData;
  } catch (error) {
    console.error('Error fetching world map data:', error);
    throw error;
  }
};
