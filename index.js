// code your solution here
const record = [
    { year: "1983", result: "N/A"},
    { year: "1982", result: "N/A"},
    { year: "1981", result: "N/A"},
    { year: "1980", result: "N/A"},
    { year: "1979", result: "N/A"},
    { year: "1978", result: "N/A"},
    { year: "1977", result: "N/A"},
    { year: "1976", result: "L"},
    { year: "1975", result: "N/A"},
    { year: "1974", result: "N/A"},
    { year: "1973", result: "N/A"},
    { year: "1972", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "N/A"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "N/A"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ];

// const winYear = record.find((result) => result=="W");

function superbowlWin (record) {
    const winYear = record.find(({result}) => result ==="W");
    return winYear ? winYear.year : winYear
}

// const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
// const wonWhen = sadReality.find((won) => won.result == "2015");

// function superbowlWin2 (){
//     return undefined;
// }