// Avoid `console` errors in browsers that lack a console.
function updateFormats(){numeral.language($("#language-select").val());formatNumbers();formatCurrency();formatBytes();formatPercentage();unformatAll()}function formatNumbers(){$("#format-numbers tbody").empty();var e=[1e4,10000.23,-1e4,10000.1234,-1e4,-0.23,-0.23,.23,.23,1230974,1460,-104e3,1,52,23,100],t=["0,0.0000","0,0","0,0.0","0.000","(0,0.0000)",".00","(.00)","0.00000","0.0[0000]","0.0a","0a","0a","0o","0o","0o","0o"];for(var n=0;n<e.length;n++)$("#format-numbers tbody").append("<tr><td>"+e[n]+"</td><td>'"+t[n]+"'</td><td>"+numeral(e[n]).format(t[n])+"</td></tr>")}function formatCurrency(){$("#format-currency tbody").empty();var e=[1000.234,1000.234,1001,-1000.234,-1000.234,1230974],t=["$0,0.00","0,0.00$","$0,0.[00]","($0,0)","$0.00","($0.00a)"];for(var n=0;n<e.length;n++)$("#format-currency tbody").append("<tr><td>"+e[n]+"</td><td>'"+t[n]+"'</td><td>"+numeral(e[n]).format(t[n])+"</td></tr>")}function formatBytes(){$("#format-bytes tbody").empty();var e=[100,2048,7884486213,3467479682787],t=["0b","0b","0.0b","0.000b"];for(var n=0;n<e.length;n++)$("#format-bytes tbody").append("<tr><td>"+e[n]+"</td><td>'"+t[n]+"'</td><td>"+numeral(e[n]).format(t[n])+"</td></tr>")}function formatPercentage(){$("#format-percentage tbody").empty();var e=[1,.974878234,-0.43,.43],t=["0%","0.000%","0%","(0.000%)"];for(var n=0;n<e.length;n++)$("#format-percentage tbody").append("<tr><td>"+e[n]+"</td><td>'"+t[n]+"'</td><td>"+numeral(e[n]).format(t[n])+"</td></tr>")}function unformatAll(){$("#unformat-all tbody").empty();var e=[numeral(10000.123).format("0,0.000"),numeral(.12345).format("0.00000"),numeral(1234e3).format("0.00a"),numeral(23).format("0o"),numeral(1e4).format("$0,0.00"),numeral(100).format("0b"),numeral(3467479682787).format("0.000b"),numeral(-0.76).format("0%"),"2:23:57"];for(var t=0;t<e.length;t++)$("#unformat-all tbody").append("<tr><td>'"+e[t]+"'</td><td>.unformat('"+e[t]+"')</td><td>"+numeral().unformat(e[t])+"</td></tr>")}(function(){var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,r=window.console||{};while(n--)r[t[n]]=r[t[n]]||e})();$(function(){$("#language-select").on("change",function(){updateFormats()});updateFormats()});