# GetQueryString
Add query string to an array

if條件中用的indeoxOF函式用來判定字串中是否有“?”這個字符。
若沒有，回傳-1 
有的話，回傳字符在第幾個位置，以strUrl這個字串來說，便會回傳0。

split函式以某個字符做為分割點，切成多個物件
getSearch = strUrl.split(“?”)

  會以"?"做為切割點，切成兩個物件，
  getSearch[0]：空字串
  getSearch[1]：id=AD&val1=02&val2=22

getPara = getSerach[1].split(“&”)
  以"&"將getSearch[1]中的字串切割成3個物件，
  getPara[0]：id=AD
  getPara[1]：val1=02
  getPara[2]：val2=22
  
  
ParaVal = getPara[i].splite(“=”)
  以"="切成兩個物件
  ParaVal[0]：id, val1, val2

