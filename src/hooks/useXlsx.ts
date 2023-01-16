import * as xlsx from "xlsx";

export const jsonToExcel = (options: {
  list: any[];
  header: Record<string, string>;
  fileName?: string;
  bookType?: xlsx.BookType | undefined;
}) => {
  let newList: any[] = [];
  if (options?.header) {
    newList = options.list.map((item) => {
      const obj: Record<string, any> = {};
      for (const key in item) {
        if (options.header[key]) {
          obj[options.header[key]] = item[key];
        } else {
          obj[key] = item[key];
        }
      }
      return obj;
    });
  }
  console.log(newList, "----newList----");
  // 1. 创建一个工作簿 workbook
  const workBook = xlsx.utils.book_new();
  // 2. 创建工作表 worksheet
  const workSheet = xlsx.utils.json_to_sheet(newList);
  // 3. 将工作表放入工作簿中
  xlsx.utils.book_append_sheet(workBook, workSheet);
  // 4. 生成数据保存
  xlsx.writeFile(workBook, options.fileName || `测试.xlsx`, {
    bookType: options.bookType || "xlsx",
  });
};
