
document.addEventListener('DOMContentLoaded', function() {
    // Carrega as tarefas salvas nos cookies
    loadTasks();
});

/**
 * Criação de tarefa
 */
function novaTarefa() {
    // Descrição do prompt
    let taskText = prompt("Digite a nova tarefa:");
    if (taskText === null) {
        return; // Usuário clica cancel
    }
    taskText = taskText.trim();
    if (taskText === "") {
        alert("A tarefa não pode estar vazia!");
        return;
    }
    
    // Cria e add tarefa
    addTaskToList(taskText);
    
    // Salva a atualização nos cookies
    saveTasks();
}

/**
 * 
 * @param {string} taskText - Texto contido na task, para recriar a partir dos cookies salvos
 */
function addTaskToList(taskText) {
    // Cria a nova div/tarefa dentro da div da lista
    const taskDiv = document.createElement('div');
    taskDiv.textContent = taskText;
    
    // Evento delete
    taskDiv.addEventListener('click', function() {
        if (confirm("Deseja remover esta tarefa?")) {
            tremove();askDiv.
            saveTasks();
        }
    });
    
    // Adiciona a tarefa no começo da lista
    const taskList = document.getElementById('ft_list');
    taskList.insertBefore(taskDiv, taskList.firstChild);
}

/**
 * Salva a task nos cookies
 */
function saveTasks() {
    const taskList = document.getElementById('ft_list');
    const tasks = [];
    
    // Coleta todos os textos
    for (const taskDiv of taskList.children) {
        tasks.push(taskDiv.textContent);
    }
    
    // Salva os cookies para expirarem em 30 dias
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    document.cookie = "tasks=" + JSON.stringify(tasks) + 
                     "; expires=" + expiryDate.toUTCString() + 
                     "; path=/; SameSite=Strict";
}

/**
 * Carrega as tasks dos cookies
 */
function loadTasks() {
    try {
        // Slipt dos cookies, no separador ;
        const cookies = document.cookie.split(';');
        let tasksJson = null;
        
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith('tasks=')) {
                tasksJson = cookie.substring('tasks='.length);
                break;
            }
        }
        
        if (!tasksJson) {
            return; // Sem tasks salvas
        }
        
        // Faz o parser dos dados e adiciona na lista
        const tasks = JSON.parse(tasksJson);
        
        // Adiciona as tasks mantendo a mesma ordem em que foram registradas
        for (let i = tasks.length - 1; i >= 0; i--) {
            addTaskToList(tasks[i]);
        }
    } catch (error) {
        console.error('Error loading tasks:', error);
        // Limpa um cookie potencialmente corrompidos
        document.cookie = "tasks=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

/**
 * Helper function to safely encode cookie values
 * @param {string} str - String to encode
 * @returns {string} Encoded string
 */


// A função encodeCookieValue serve para codificar (encode) valores antes de salvá-los
// em cookies, garantindo que caracteres especiais sejam armazenados corretamente. 
//Ela é uma medida de segurança e compatibilidade.
function encodeCookieValue(str) {
    return encodeURIComponent(str).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
}

/**
 * Helper function to safely decode cookie values
 * @param {string} str - String to decode
 * @returns {string} Decoded string
 */
function decodeCookieValue(str) {
    return decodeURIComponent(str);
}