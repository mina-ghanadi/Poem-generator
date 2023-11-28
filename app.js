

function showPoem(result){
    
    new Typewriter("#poem", {
        strings: `${result.data.answer}`,
        autoStart: true,
        cursor: "",
        delay: 30,
      });
  
}


function search(event){
    console.log(event);
    event.preventDefault();
    let input=document.querySelector("#input");
    let prompt = `User instructions:Generate a poem about  ${input.value}. `;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title to poem. Sign the poem with 'Mina' inside a <strong> element at the end of the poem Not at the begining";
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=7513b452c09o45a7101tdb174f808e29`;
    
    let poemline=document.querySelector("#poem");
    poemline.classList.remove("hidden");
    poemline.innerHTML=`<div class="blink">Generating a splending poem about ${input.value} 🪶</div>`
    axios.get(url).then(showPoem);
}


let forms=document.querySelector("#form");
forms.addEventListener("submit",search);




