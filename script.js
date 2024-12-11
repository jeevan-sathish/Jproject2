window.onload=document.getElementById('inpt').focus();

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const clickSound = document.getElementById('click-sound');
        clickSound.play();
    });
});


//clock/////
const clock = setInterval(() => {
    const displayTime = document.getElementById("display_time");
    const softwaree = document.getElementById("software-sound");
    const date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;
    const minuteStr = minute < 10 ? '0' + minute : minute;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = `${hour} : ${minuteStr} : ${secondsStr} ${ampm}`;

    if (hour === 10 && minuteStr === 30) {
        const data = "software engineering and project management, taken by Dr. Jairam, professor at Mysuru College of Engineering and Management, Mysore";
        var utterance = new SpeechSynthesisUtterance(data);
        speechSynthesis.speak(utterance);
        window.currentUtterance = utterance;
    }

}, 1000);


//calender

function getWeekDay() {
    var inputDate = new Date(document.getElementById('calendar').value);
    var dayOfWeek = inputDate.getDay() + 1; // Get the day of the week (0-6) and add 1 to make it (1-7)
    console.log(dayOfWeek);
    switch (dayOfWeek) {
        case 1: 
        
        var period1 = document.getElementById("periodList");
        if (period1.style.visibility === "hidden" || period1.style.visibility === "") {
            period1.style.visibility = "visible";
        }
        setTimeout(()=>{
            period1.style.visibility = "";
            document.getElementById('calendar').value="";
        },6000)
        break;
        case 2: 
            var period1 = document.getElementById("periodList1");
            if (period1.style.visibility === "hidden" || period1.style.visibility === "") {
                period1.style.visibility = "visible";
                const mon =document.getElementById("monday-sound");
                mon.play();
            }
            setTimeout(()=>{
                period1.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        case 3: 
            var period2 = document.getElementById("periodList2");
            if (period2.style.visibility === "hidden" || period2.style.visibility === "") {
                period2.style.visibility = "visible";
                const tue =document.getElementById("tuesday-sound");
                tue.play();
            }
            setTimeout(()=>{
                period2.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        case 4: 
            var period3 = document.getElementById("periodList3");
            if (period3.style.visibility === "hidden" || period3.style.visibility === "") {
                period3.style.visibility = "visible";
                const wed =document.getElementById("wednesday-sound");
                wed.play();
            }
            setTimeout(()=>{
                period3.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        case 5: 
            var period4= document.getElementById("periodList4");
            if (period4.style.visibility === "hidden" || period4.style.visibility === "") {
                period4.style.visibility = "visible";
                const thu =document.getElementById("thursday-sound");
                thu.play();

            }
            setTimeout(()=>{
                period4.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        case 6: 
            var period5 = document.getElementById("periodList5");
            if (period5.style.visibility === "hidden" || period5.style.visibility === "") {
                period5.style.visibility = "visible";
                const fri =document.getElementById("friday-sound");
                fri.play();
            }
            setTimeout(()=>{
                period5.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        case 7: 
            var period6 = document.getElementById("periodList6");
            if (period6.style.visibility === "hidden" || period6.style.visibility === "") {
                period6.style.visibility = "visible";
            }
            setTimeout(()=>{
                period6.style.visibility = "";
                document.getElementById('calendar').value="";
            },60000)
            break;
        default:
            alert("holiday");

    }
}
const period_close = () => {
    
    const pBtnClose = ["periodList","periodList1", "periodList2", "periodList3", "periodList4", "periodList5", "periodList6"];
    const weekClass =["monday-sound","tuesday-sound","wednesday-sound","thursday-sound","friday-sound"]
    pBtnClose.forEach((id) => {
        const element = document.getElementById(id);
        if (element.style.visibility==="visible") {
            element.style.visibility = "hidden";
            weekClass.forEach((s)=>{
                const sound =document.getElementById(s);
                if (sound && !sound.paused) { sound.pause(); sound.currentTime = 0; }
            })
            
          
                
        }
    });
}


const showNote = (e) => {
    const note = document.getElementById("inpt").value;
    if (e.key === "Enter") {
        if (note !== "") {
            const sound=document.getElementById("created-sound");
            sound.play();
            createNote();
            document.getElementById("inpt").value = "";
        } else {
            alert("please enter some note");
        }
    } 
}

const createNote = () => {
    const currentDate = new Date();
    let hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const day = currentDate.getDay();
    console.log(day);

    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; 

    const note = document.getElementById("inpt").value;
    if (note !== "") {
        const notelist = document.createElement("div");
        notelist.className = "note_list";

        const container = document.createElement("div");
        container.className = "txt_container";
        container.innerHTML = note;
        notelist.appendChild(container);

        const foot = document.createElement("div");
        foot.className = "note_foot";
        container.appendChild(foot);
        foot.innerHTML = `${hour}:${minute}:${second} ${ampm}`;

        const dltBtn = document.createElement("button");
        dltBtn.className = "dltBtn";
        dltBtn.innerHTML = "Delete";
        dltBtn.onclick = () => {
            const clickSound = document.getElementById('deleted-sound');
            if (clickSound) {
                clickSound.play();
            }
            notelist.remove();
            saveNotes();
            document.getElementById('inpt').focus();
        };
        notelist.appendChild(dltBtn);

        const todoCont = document.getElementById("todo_list_container");
        todoCont.appendChild(notelist);

        document.getElementById('inpt').focus();
        document.getElementById("inpt").value = "";

        saveNotes();
    } else {
        alert("Please enter some note.");
        document.getElementById('inpt').focus();
    }
}


const saveNotes = () => {
    const todoCont = document.getElementById("todo_list_container");
    const notes = [];
    todoCont.querySelectorAll(".note_list").forEach(noteElement => {
        const noteText = noteElement.querySelector(".txt_container").innerHTML;
        const noteTime = noteElement.querySelector(".note_foot").innerHTML;
        notes.push({ text: noteText, time: noteTime });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}


    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(note => {
            const notelist = document.createElement("div");
            notelist.className = "note_list";
    
            const container = document.createElement("div");
            container.className = "txt_container";
            container.innerHTML = note.text;
            notelist.appendChild(container);
    
            const foot = document.createElement("div");
            foot.className = "note_foot";
            container.appendChild(foot);
           
    
            const dltBtn = document.createElement("button");
            dltBtn.className = "dltBtn";
            dltBtn.innerHTML = "Delete";
            dltBtn.onclick = () => {
                notelist.remove();
                saveNotes();
                const clickSound = document.getElementById('deleted-sound');
                if(clickSound){
                    clickSound.play();
                }
                 
               
            };
            notelist.appendChild(dltBtn);
    
            const todoCont = document.getElementById("todo_list_container");
            todoCont.appendChild(notelist);
        });
    }
    
    document.addEventListener("DOMContentLoaded", loadNotes);
    

const closee = () => {
    const elements = ["card1", "card2","card3","card4","card5","card6","card7","card8","lazystudy"];
    elements.forEach((id) => {
        const element = document.getElementById(id);
        if (element.style.visibility === "visible" || element.style.visibility === "") {
            element.style.visibility = "hidden";
            const tab = document.getElementById("table");
            const itxt=document.getElementById("textInput").value="";
            const lspeak =document.getElementById("intro-sound");
            lspeak.pause();
             lspeak.currentTime = 0;
            tab.style.filter = "blur(0px)";
             tab.style.pointerEvents = "auto"
            
        }

    });
    if (window.currentUtterance) {
        speechSynthesis.cancel();
        
        
    }
}


const software = () => {
    const tab = document.getElementById("table");
    
    const card1 = document.getElementById("card1");
    if (card1.style.visibility === "" || card1.style.visibility === "hidden") {
        card1.style.visibility = "visible";
        
        const data = "software engineering and project management, taken by Dr. Jairam, professor at Mysuru College of Engineering and Management, Mysore";
        var utterance = new SpeechSynthesisUtterance(data);
        speechSynthesis.speak(utterance);
        window.currentUtterance = utterance;

        tab.style.filter = "blur(10px)";
          tab.style.pointerEvents = "none"
        tab.disabled=true;
    }
}


const webTec=()=>{
    const card2 = document.getElementById("card2");
    if (card2.style.visibility === "" || card2.style.visibility === "hidden") {
        card2.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "web technology , taken by Miss Deepika, professor at Mysuru colage of engineeringnam management Mysore";
    var utterance = new SpeechSynthesisUtterance(data);

  
    function setVoice() {
        var voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.includes("Female") || voices[i].voiceURI.includes("Female")) {
                utterance.voice = voices[i];
                break;
            }
        }
        speechSynthesis.speak(utterance);
       
        window.currentUtterance = utterance;
    }

   
    if (speechSynthesis.getVoices().length > 0) {
        setVoice();
    } else {
     
        speechSynthesis.onvoiceschanged = setVoice;
    }
    } else {
      
    }

}

const compNet=()=>{
    const card3 = document.getElementById("card3");
    if (card3.style.visibility === "" || card3.style.visibility === "hidden") {
        card3.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "Computer networks , taken by Miss Divyashree, professor at Mysuru colage of engineeringnam management Mysore";
        var utterance = new SpeechSynthesisUtterance(data);
    
      
        function setVoice() {
            var voices = speechSynthesis.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].name.includes("Female") || voices[i].voiceURI.includes("Female")) {
                    utterance.voice = voices[i];
                    break;
                }
            }
            speechSynthesis.speak(utterance);
         
            window.currentUtterance = utterance;
        }
    
       
        if (speechSynthesis.getVoices().length > 0) {
            setVoice();
        } else {
         
            speechSynthesis.onvoiceschanged = setVoice;
        }
    } else {
      
    }

}

const Toc=()=>{
    const card4 = document.getElementById("card4");
    if (card4.style.visibility === "" || card4.style.visibility === "hidden") {
        card4.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "Theory of computations , taken by Miss Sahana, professor at Mysuru colage of engineeringnam management Mysore";
    var utterance = new SpeechSynthesisUtterance(data);

  
    function setVoice() {
        var voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.includes("Female") || voices[i].voiceURI.includes("Female")) {
                utterance.voice = voices[i];
                break;
            }
        }
        speechSynthesis.speak(utterance);
      
        window.currentUtterance = utterance;
    }

   
    if (speechSynthesis.getVoices().length > 0) {
        setVoice();
    } else {
     
        speechSynthesis.onvoiceschanged = setVoice;
    }
    } else {
      
    }

}

const compGra=()=>{
    const card5 = document.getElementById("card5");
    if (card5.style.visibility === "" || card5.style.visibility === "hidden") {
        card5.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "computer graphics , taken by Miss anusha and anjali , professor at Mysuru colage of engineeringnam management Mysore";
        var utterance = new SpeechSynthesisUtterance(data);
    
      
        function setVoice() {
            var voices = speechSynthesis.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].name.includes("Female") || voices[i].voiceURI.includes("Female")) {
                    utterance.voice = voices[i];
                    break;
                }
            }
            speechSynthesis.speak(utterance);
      
            window.currentUtterance = utterance;
        }
    
       
        if (speechSynthesis.getVoices().length > 0) {
            setVoice();
        } else {
         
            speechSynthesis.onvoiceschanged = setVoice;
        }
    } else {
      
    }
}

const research=()=>{
    const card6 = document.getElementById("card6");
    if (card6.style.visibility === "" || card6.style.visibility === "hidden") {
        card6.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "Research metalogy , taken by Miss madhurya, professor at Mysuru colage of engineeringnam management Mysore";
    var utterance = new SpeechSynthesisUtterance(data);

  
    function setVoice() {
        var voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.includes("Female") || voices[i].voiceURI.includes("Female")) {
                utterance.voice = voices[i];
                break;
            }
        }
        speechSynthesis.speak(utterance);
        
        window.currentUtterance = utterance;
    }

   
    if (speechSynthesis.getVoices().length > 0) {
        setVoice();
    } else {
     
        speechSynthesis.onvoiceschanged = setVoice;
    }
    }
}

const wastemanage=()=>{
    const card7 = document.getElementById("card7");
    if (card7.style.visibility === "" || card7.style.visibility === "hidden") {
        card7.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "E waste management and envirnamanetal, taken by professor abishek at Mysuru colage of engineeringnam management Mysore"
    var utterance = new SpeechSynthesisUtterance(data);
    speechSynthesis.speak(utterance);
    window.currentUtterance = utterance;
    } else {
       
    }

}

const placement=()=>{
    const card8 = document.getElementById("card8");
    if (card8.style.visibility === "" || card8.style.visibility === "hidden") {
        card8.style.visibility = "visible";
        const tab = document.getElementById("table");
        tab.style.filter = "blur(10px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        const data = "placement , taken by professor prabhu swamy at Mysuru colage of engineeringnam management Mysore"
    var utterance = new SpeechSynthesisUtterance(data);
    speechSynthesis.speak(utterance);
    window.currentUtterance = utterance;
    } else {
       
    }

}
const days = document.getElementsByClassName("day");
for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", () => {
        days[i].style.backgroundColor = "red";
        days[i].style.border = "5px solid black";
        days[i].style.color = "black";
        setTimeout(() => {
            days[i].style.backgroundColor = "";
            days[i].style.border = "";
            days[i].style.color = "";
        }, 5000); 
    });
}


function row1() {
    const elements = document.getElementsByClassName("c1 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
        elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row2() {
    const elements = document.getElementsByClassName("c2 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row3() {
    const elements = document.getElementsByClassName("c3 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row4() {
    const elements = document.getElementsByClassName("c4 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row5() {
    const elements = document.getElementsByClassName("c5 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row6() {
    const elements = document.getElementsByClassName("c6 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function row7() {
    const elements = document.getElementsByClassName("c1 ");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.border = "5px solid black";
        elements[i].style.color= " black";
        elements[i].style.fontWeight= " bolder";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
            elements[i].style.border = "1px solid black";
            elements[i].style.color= "";
            elements[i].style.fontWeight= "";
        }, 5000);
    }
}

function col1() {
    const elements = document.getElementsByClassName("r1");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}

function col2() {
    const elements = document.getElementsByClassName("r2 ");
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}

function col4() {
    const elements = document.getElementsByClassName("r3");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}

function col5() {
    const elements = document.getElementsByClassName("r4");
   
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
           
        }, 5000);
    }
}

function col7() {
    const elements = document.getElementsByClassName("r5");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}

function col8() {
    const elements = document.getElementsByClassName("r6");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}

function col9() {
    const elements = document.getElementsByClassName("r7");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "green";
        setTimeout(() => {
            elements[i].style.backgroundColor = "";
        }, 5000);
    }
}



let softwareCalled = false;

const periodInterval = setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    if (hour === 15 && minute === 53 && !softwareCalled) {
        const data = "Now it's software engineering and project management class. Get ready before your teacher arrives.............";
        var utterance = new SpeechSynthesisUtterance(data);
        speechSynthesis.speak(utterance);
        window.currentUtterance = utterance;

       
    }
}, 1000);



const lazyStudy = () => {
    const tab = document.getElementById("table");
    const lspeak =document.getElementById("intro-sound");
    const site = document.getElementById("lazystudy");
    if (site.style.visibility === "hidden" || site.style.visibility === "") {
        site.style.visibility = "visible";
        tab.style.filter = "blur(30px)";
        tab.style.pointerEvents = "none"
        tab.disabled=true;
        lspeak.play();
    } else {
        
    }
};


//lazy study.....

let utterance;
let isPaused = false;

document.addEventListener("DOMContentLoaded", () => {
    const voiceSelect = document.getElementById("voiceSelect");
    const synth = window.speechSynthesis;

    synth.onvoiceschanged = () => {
        const voices = synth.getVoices();
        voiceSelect.innerHTML = "";
        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.textContent = `${voice.name} `;
            option.setAttribute("data-index", index);
            voiceSelect.appendChild(option);
        });
    };
});

function playText() {
    const textInput = document.getElementById("textInput").value;
    const voiceSelect = document.getElementById("voiceSelect");
    const selectedVoiceIndex = voiceSelect.selectedOptions[0].getAttribute("data-index");
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    if (utterance) {
        synth.cancel();
    }

    utterance = new SpeechSynthesisUtterance(textInput);
    utterance.voice = voices[selectedVoiceIndex];
    utterance.onboundary = (event) => {
        highlightText(event.charIndex, event.charLength);
    };
    synth.speak(utterance);
}

function pauseText() {
    if (speechSynthesis.speaking && !isPaused) {
        speechSynthesis.pause();
        isPaused = true;
    }
}

function resumeText() {
    if (speechSynthesis.paused && isPaused) {
        speechSynthesis.resume();
        isPaused = false;
    }
}

function stopText() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        clearHighlight();
    }
}

function refreshPage() {
    textInput.value="";
}

function highlightText(startIndex, length) {
    const textInput = document.getElementById("textInput");
    const text = textInput.value;
    textInput.innerHTML = text.slice(0, startIndex) + '<span class="highlight">' +
        text.slice(startIndex, startIndex + length) + '</span>' + text.slice(startIndex + length);
}

function clearHighlight() {
    const textInput = document.getElementById("textInput");
    textInput.innerHTML = textInput.value;
}


const txtarea = document.getElementById("textInput");
const txtareaTxt = txtarea.value;
if (txtareaTxt.length > 10) {
    txtarea.style.color = "red";
}


const periodsInterval =setInterval(()=>{

        
       
},1000)