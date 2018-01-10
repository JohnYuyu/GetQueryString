<script type="text/javascript">

  var strUrl = location.search;

  var getPara, ParaVal;

  var aryPara = [];

  if (strUrl.indexOf("?") != -1) {

    var getSearch = strUrl.split("?");

    getPara = getSearch[1].split("&");

    for (i = 0; i < getPara.length; i++) {

      ParaVal = getPara[i].split("=");

      aryPara.push(ParaVal[0]);

      aryPara[ParaVal[0]] = ParaVal[1];

    }
    alert(aryPara);

  }
</script>
