{
    const tasks = [

        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        const newTaskElement = document.querySelector(".js-newTask");
        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li class="tasks__item" >
        
        
       
         <button class="js-done tasks__button tasks__button--done">
         ${task.done ? "✓" : ""}
         </button>
         <span class="tasks__itemList
         ${task.done ? "tasks__item--done" : ""}">
         ${task.content} 
        </span> 
      
        
        <button class="js-remove tasks__button tasks__button--remove">
        &#x1F5D1
        </button>
      
        </li>
        `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}