import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Levelup in React',
			day: 'Jun 10th at 5:00 A.M - 7:30 P.M',
			reminder: true,
		},
		{
			id: 2,
			text: 'Work on Document Retrieve',
			day: 'Jun 10th at 9:00 A.M - 8:30 P.M',
			reminder: true,
		},
		{
			id: 3,
			text: 'Work on Andela Tasks',
			day: 'Jun 10th at 11:00 P.M - 5:30 A.M',
			reminder: false,
		},
	]);

	//Delete Task
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	//Toggle Reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task,
			),
		);
	};

	return (
		<div className='container'>
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks added yet!'
			)}
		</div>
	);
}

export default App;
