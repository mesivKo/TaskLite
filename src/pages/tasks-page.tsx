import { useEffect, useState } from 'react';
import { TasksList } from '../components/tasks-list';
import { makeTask, type Task } from '../entitites/task';
import { StyledInput } from '../styles/Inputs';
import { loadTasks, saveTasks } from '../entitites/storage';
import TaskModal from '../components/task-modals';
import ProgressBar from '../components/progress-bar';
import { ClearButton, FilterButton, SortedButton } from '../styles/Buttons';
import { RowContainer, SmallRowContainer, Wrapper } from '../styles/Containers';
import TaskInput from '../components/task-input';



export function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState<'new' | 'old'>('new'); 
    const [query, setQuery] = useState('');

    
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    function handleClearList() {
        setTasks(tasks.filter(t => t.complete !== true));
    }

        function handleRemoveItem(taskId: string) {
        setTasks(tasks.filter(t => t.id !== taskId));
    }


    function handleEditItem(updatedTask: Task) {
        setTasks(
            tasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    }

    function handleAddItem(title: string) {
        const newItem = makeTask(title);
        setTasks(() => [newItem, ...tasks]);
    } 

    function handleToggleTask(taskId: string) {
        setTasks(
            tasks.map(task =>
                task.id === taskId
                ? {
                    ...task,
                    complete: !task.complete,
                }
                : task
            )
        );
    } 
 
    const filteredTasks = tasks
        .filter(t => {
            if (filter === 'all') return t
            if (filter === 'active' && t.complete === false) return t
            if (filter === 'complete' && t.complete) return t
        })
        .sort((a, b) => {
            const timeA = new Date(a.created).getTime();
            const timeB = new Date(b.created).getTime();
            
            return sortOrder === 'new' ? timeB - timeA : timeA - timeB;
        });

    const serchedTask =
        query.trim().toLowerCase() === ''
                ? filteredTasks
                : filteredTasks.filter(t => {
                    if (t.title.includes(query.trim().toLowerCase())) return t;
        });
    const total = tasks.length;
    const completed = tasks.filter(t => t.complete).length;
    const percent = total === 0 ? 0: Math.round((completed / total) * 100);
    const active = total - completed;

    return (
        <Wrapper>
            <h1>TaskLite</h1>
            <TaskInput onAdd={handleAddItem} />
            <StyledInput
                value={query}
                type="text"
                placeholder='Поиск задач...'
                onChange={e => setQuery(e.target.value)}
            />
            <RowContainer>
                <SmallRowContainer>
                    <FilterButton filter={filter} active='all' onClick={() => setFilter('all')} >Все</FilterButton>
                    <FilterButton  filter={filter} active='active' onClick={() => setFilter('active')}>Активные</FilterButton>
                    <FilterButton   filter={filter} active='complete'  onClick={() => setFilter('complete')}>Завершённые</FilterButton>
                </SmallRowContainer>
                
                <SortedButton value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'new' | 'old')}>
                    <option value="new">Сначала новые</option>
                    <option value="old">Сначала старые</option>
                </SortedButton>
            </RowContainer>
            <ProgressBar percent={percent}/>
            <TasksList 
                tasks={serchedTask} 
                onRemove={handleRemoveItem} 
                onEdit={t => setEditingTask(t)} 
                onToggle = {handleToggleTask}
            />
            <RowContainer>
                <h5>Всего: {total} | Активных: {active} | Выполненных: {completed}</h5>
                <ClearButton onClick={() => handleClearList()}>Очистить выполненные</ClearButton>
            </RowContainer>
            {editingTask && (
                <TaskModal 
                    task={editingTask} 
                    onSave={handleEditItem} 
                    onClose={() => setEditingTask(null)}
                />
            )}

        </Wrapper>
    );
}