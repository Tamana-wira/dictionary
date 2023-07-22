inputEl=document.getElementById("input");
infoTextEl=document.getElementById("info-text");
meaningContainerEl=document.getElementById("meaning-container");
wordTitleEl=document.getElementById("wordTitle");
titleEl=document.getElementById("title");
meaningEl=document.getElementById("meaning");
const audioEl=document.getElementById("audio");
// console.log(meaningEl);






async function fetchApi(word){
  // console.log(word);
  try {
    infoTextEl.style.display="block";
    meaningContainerEl.style.display="none";
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result=await fetch(url).then(res=>res.json());

    //...........When it's searching from API  We want to change paragraph text ...................

    infoTextEl.innerHTML=`we are searching the word "${word}"`;

    console.log(result);

    //.......When Result appeard..................//
    infoTextEl.style.display="none";
    meaningContainerEl.style.display="block";
    // meaningEl.innerHTML=input.value;
    // titleE.innerHTML=result[0].word;
titleEl.innerHTML=result[0].word;
meaningEl.innerHTML=result[0].meanings[0].definitions[0].definition;
audioEl.src=result[0].phonetics[0].audio;
  
  } catch (error) {
    console.log(error);
  }
};


//addEventListener Must be Cammel Case.................................//

inputEl.addEventListener("keyup",function(e){
  if(e.target.value !==" "&& e.key == "Enter"){
    fetchApi(e.target.value);
  };
})
  



// inputEl.addEventListener("keyup",function(e){
//   console.log(e.target.value);
// });