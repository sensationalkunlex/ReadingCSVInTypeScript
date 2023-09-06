  private async getTextFromFile(fileUpload: any) {
    const file: File = fileUpload[0];
    console.log(file);
    const fileContent = await file.text();

    return fileContent;
  }
  private importDataFromCSV(csvText: string): Array<any> {
    const propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(',');
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split('\n');
    const dataArray: any[] = [];
    dataRows.forEach((row) => {
      const values = row.split(',');
      const obj: any = new Object();
      for (let index = 0; index < propertyNames.length; index++) {
        const propertyName: string = propertyNames[index];
        let val: any = values[index];
        if (val === '') {
          val = null;
        }
        obj[propertyName] = val;
      }
      dataArray.push(obj);
    });
    return dataArray;
  }
