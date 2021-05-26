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

   

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li><div class="div">
        ${task.content} 
        </li></div>
        `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const init = () => {
        render();
        
      
    };
    init();
}