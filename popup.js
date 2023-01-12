const button = document.getElementById('startButton');
button.addEventListener("click", startTimer);
const cancelButton = document.getElementById('cancelButton');
const taskDisplay = document.getElementById('taskDisplay')
const timeDisplay = document.getElementById('timeDisplay')
const taskField = document.getElementById('taskField')
const inputField = document.getElementById('inputField')
const body = document.getElementById('body')
const download = document.getElementById('download')
const taskList = document.getElementById('completedTasks')

function startTimer () {
    //multiply input time by 60 to handle it in seconds
        cancelButton.innerText = '❌ Cancel'
        let time = document.getElementById('inputField').value * 60;
        taskDisplay.innerText = document.getElementById('taskField').value
        timeDisplay.innerText = convertTime(time);
        timeDisplay.classList.add('h1Black');
        let timer = setInterval(intFunc, 1000)
        cancelButton.addEventListener("click", ()=>{
            clearTimeout(timer);
            showInputs();
            timeDisplay.innerText = '0:00';
            taskField.value = '';
            inputField.value = '';
            taskDisplay.innerText = '';
            body.classList.remove('firework')
            timeDisplay.classList.remove('h1Black');

            
            return;
        })
    
        hideInputs();
        function intFunc () {
            if (time === 0){
                clearTimeout(timer);
                let newTask = document.createElement('h4');
                newTask.innerText = `✅ ${taskDisplay.innerText}`;
                taskList.appendChild(newTask); 
                cancelButton.innerText = 'Pick New Task';
                taskDisplay.innerText = '';
                body.classList.add('firework');
                timeDisplay.classList.remove('h1Black');
                return //maybe do something
            };
        time -= 1;
        timeDisplay.innerText = convertTime(time);
        }
    
    
}

function convertTime (s) {
    return(s-(s%=60))/60+(9<s?':':':0')+s
}

function hideInputs () {
    taskField.disabled = true;
    inputField.disabled = true;
    taskField.classList.add('invisible');
    inputField.classList.add('invisible');
    button.classList.add('invisible');
    button.disabled = true;
    cancelButton.disabled = false;
    cancelButton.classList.remove('invisible');
}
function showInputs () {
    taskField.disabled = false;
    inputField.disabled = false;
    taskField.classList.remove('invisible');
    inputField.classList.remove('invisible');
    button.classList.remove('invisible');
    button.disabled = false;
    cancelButton.disabled = true;
    cancelButton.classList.add('invisible');
}