type DataItem = {
  id: string;
  email: string;
  sendedAt: string;
};

export const convertToCSV = (array: DataItem[]): string => {
  const headers = Object.keys(array[0]).join(",") + "\n";
  const rows = array.map((obj) => Object.values(obj).join(",")).join("\n");
  return headers + rows;
};
